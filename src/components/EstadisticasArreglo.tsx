export const EstadisticasArreglo = () => {
  const calcularPromedio = (nums: number[]): number => nums.length === 0 ? 0 : nums.reduce((acc, curr) => acc + curr, 0) / nums.length;
  const encontrarMaximo = (nums: number[]): number => Math.max(...nums);
  const encontrarMinimo = (nums: number[]): number => Math.min(...nums);

  const numeros = [8, 3, 15, 7, 22, 11, 4];

  return (
    <div className="p-4 mb-4 bg-white border rounded shadow-sm">
      <h3 className="mb-2 text-xl font-bold text-teal-600">Estadísticas</h3>
      <p>Números: [{numeros.join(', ')}]</p>
      <p>Promedio: {calcularPromedio(numeros).toFixed(2)}</p>
      <p>Máximo: {encontrarMaximo(numeros)}</p>
      <p>Mínimo: {encontrarMinimo(numeros)}</p>
    </div>
  );
};