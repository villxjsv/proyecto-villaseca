export const CarritoCompras = () => {
  const calcularSubtotal = (precio: number, cantidad: number): number => precio * cantidad;
  const calcularIVA = (subtotal: number): number => subtotal * 0.16;
  const calcularTotal = (subtotal: number): number => subtotal + calcularIVA(subtotal);
  const formatearPrecio = (precio: number): string => `$${precio.toFixed(2)}`;

  const carrito = [
    { producto: "Laptop", precio: 15300, cantidad: 1 },
    { producto: "Mouse", precio: 350, cantidad: 2 },
    { producto: "Teclado", precio: 800, cantidad: 1 }
  ];

  const subtotalGeneral = carrito.reduce((acc, item) => acc + calcularSubtotal(item.precio, item.cantidad), 0);

  return (
    <div className="p-4 mb-4 bg-white border rounded shadow-sm">
      <h3 className="mb-2 text-xl font-bold text-emerald-600">Carrito de Compras</h3>
      {carrito.map((item, index) => (
        <p key={index}>{item.producto} x{item.cantidad} = {formatearPrecio(calcularSubtotal(item.precio, item.cantidad))}</p>
      ))}
      <hr className="my-2" />
      <p>Subtotal: {formatearPrecio(subtotalGeneral)}</p>
      <p>IVA (16%): {formatearPrecio(calcularIVA(subtotalGeneral))}</p>
      <p><strong>Total: {formatearPrecio(calcularTotal(subtotalGeneral))}</strong></p>
    </div>
  );
};