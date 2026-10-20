export const Calculadora = () => {
  const sumar = (a: number, b: number): number => a + b;
  const restar = (a: number, b: number): number => a - b;
  const multiplicar = (a: number, b: number): number => a * b;
  const dividir = (a: number, b: number): number => b === 0 ? 0 : a / b;

  const a = 15;
  const b = 4;

  return (
    <div className="p-4 mb-4 bg-white border rounded shadow-sm">
      <h3 className="mb-2 text-xl font-bold text-blue-600">Calculadora</h3>
      <p>{a} + {b} = {sumar(a, b)}</p>
      <p>{a} - {b} = {restar(a, b)}</p>
      <p>{a} * {b} = {multiplicar(a, b)}</p>
      <p>{a} / {b} = {dividir(a, b).toFixed(2)}</p>
    </div>
  );
};