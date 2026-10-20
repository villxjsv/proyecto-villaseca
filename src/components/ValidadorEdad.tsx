export const ValidadorEdad = () => {
  const esMayorDeEdad = (edad: number): boolean => edad >= 18;
  
  const obtenerMensaje = (edad: number): string => {
    if (esMayorDeEdad(edad)) return "Puede votar";
    return `Le faltan ${18 - edad} años`;
  };

  const edades = [15, 18, 25, 12];

  return (
    <div className="p-4 mb-4 bg-white border rounded shadow-sm">
      <h3 className="mb-2 text-xl font-bold text-red-600">Validador de Edad</h3>
      {edades.map((edad, i) => (
        <p key={i}>Edad {edad}: {obtenerMensaje(edad)}</p>
      ))}
    </div>
  );
};