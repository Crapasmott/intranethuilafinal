import ElectroHuilaIntranet from './components/ElectroHuilaIntranet';

export default function Home() {
  return (
    <div>
      {/* Título con fondo azul */}
      <div className="bg-blue-600 text-white py-4 px-6 text-center">
        <h1 className="text-3xl font-bold">Intranet</h1>
      </div>
      
      {/* Tu componente existente */}
      <ElectroHuilaIntranet />
    </div>
  );
}