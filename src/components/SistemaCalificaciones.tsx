export const SistemaCalificaciones = () => {
  const calcularPromedio = (calificaciones: number[]): number => calificaciones.reduce((acc, curr) => acc + curr, 0) / calificaciones.length;
  
  const obtenerLetra = (promedio: number): string => {
    if (promedio >= 90) return "A";
    if (promedio >= 80) return "B";
    if (promedio >= 70) return "C";
    if (promedio >= 60) return "D";
    return "F";
  };
  
  const estaAprobado = (promedio: number): boolean => promedio >= 70;

  const alumnos = [
    { nombre: "Ana", califs: [95, 88, 92] },
    { nombre: "Luis", califs: [70, 65, 72] },
    { nombre: "María", califs: [85, 90, 88] }
  ];

  return (
    <div className="p-4 mb-4 bg-white border rounded shadow-sm">
      <h3 className="mb-2 text-xl font-bold text-indigo-600">Sistema de Calificaciones</h3>
      {alumnos.map((alumno, index) => {
        const promedio = calcularPromedio(alumno.califs);
        return (
          <p key={index}>
            {alumno.nombre}: Promedio {promedio.toFixed(1)} - Letra {obtenerLetra(promedio)} - {estaAprobado(promedio) ? "Aprobado" : "Reprobado"}
          </p>
        );
      })}
    </div>
  );
};