export const AplicadorDescuentos = () => {
  const aplicarDescuento = (precio: number, calcularDescuento: (p: number) => number): number => precio - calcularDescuento(precio);
  
  const descuento10 = (p: number): number => p * 0.10;
  const descuento25 = (p: number): number => p * 0.25;
  const descuentoEstudiante = (p: number): number => p * 0.15;

  const precio = 1000;

  return (
    <div className="p-4 mb-4 bg-white border rounded shadow-sm">
      <h3 className="mb-2 text-xl font-bold text-pink-600">Aplicador de Descuentos</h3>
      <p>Precio original: ${precio}</p>
      <p>Con 10% off: ${aplicarDescuento(precio, descuento10)}</p>
      <p>Con 25% off: ${aplicarDescuento(precio, descuento25)}</p>
      <p>Descuento estudiante: ${aplicarDescuento(precio, descuentoEstudiante)}</p>
    </div>
  );
};