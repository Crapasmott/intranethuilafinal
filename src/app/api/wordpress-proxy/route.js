// src/app/api/wordpress/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const endpoint = searchParams.get('endpoint') || 'posts';

        // Construir la URL completa de WordPress
        const wpUrl = `https://electrohuila.net/wp-json/wp/v2/${endpoint}`;

        console.log('🔵 Fetching from WordPress:', wpUrl);

        const response = await fetch(wpUrl, {
            headers: {
                'Accept': 'application/json',
            },
            // Cache para mejorar performance (5 minutos)
            next: { revalidate: 300 }
        });

        if (!response.ok) {
            console.error('❌ WordPress returned status:', response.status);
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log('✅ Data fetched successfully:', Array.isArray(data) ? `${data.length} items` : '1 item');

        return NextResponse.json(data);
    } catch (error) {
        console.error('❌ WordPress API Error:', error.message);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}