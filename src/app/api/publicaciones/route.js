import { neon } from '@neondatabase/serverless';
import { NextResponse } from 'next/server';

const DATABASE_URL = "postgresql://neondb_owner:npg_hs2b5fVcFdoq@ep-ancient-sunset-apzasywu-pooler.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require";

const sql = neon(DATABASE_URL);

export async function GET() {
    try {
        const publicaciones = await sql`SELECT * FROM "Publicacion" ORDER BY "createdAt" DESC`;
        const result = publicaciones.map(p => ({
            ...p,
            fotos: p.fotos ? JSON.parse(p.fotos) : []
        }));
        return NextResponse.json(result);
    } catch (error) {
        console.error('GET error:', error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const lista = await request.json();
        if (!Array.isArray(lista)) {
            return NextResponse.json({ error: 'Se esperaba un array' }, { status: 400 });
        }
        await sql`DELETE FROM "Publicacion"`;
        for (const pub of lista) {
            await sql`
        INSERT INTO "Publicacion" (id, titulo, descripcion, contenido, categoria, imagen, fotos, autor, fecha, "fechaISO", "updatedAt", "createdAt")
        VALUES (
          ${pub.id}, ${pub.titulo}, ${pub.descripcion}, ${pub.contenido},
          ${pub.categoria}, ${pub.imagen}, ${JSON.stringify(pub.fotos ?? [])},
          ${pub.autor}, ${pub.fecha}, ${pub.fechaISO}, ${pub.updatedAt}, NOW()
        )
        ON CONFLICT (id) DO UPDATE SET
          titulo = EXCLUDED.titulo,
          descripcion = EXCLUDED.descripcion,
          contenido = EXCLUDED.contenido,
          categoria = EXCLUDED.categoria,
          imagen = EXCLUDED.imagen,
          fotos = EXCLUDED.fotos,
          autor = EXCLUDED.autor,
          fecha = EXCLUDED.fecha,
          "fechaISO" = EXCLUDED."fechaISO",
          "updatedAt" = EXCLUDED."updatedAt"
      `;
        }
        return NextResponse.json({ ok: true, total: lista.length });
    } catch (error) {
        console.error('POST error:', error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}