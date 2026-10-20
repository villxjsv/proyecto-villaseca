export const AnalizadorTexto = () => {
  const contarPalabras = (texto: string): number => texto.trim().split(/\s+/).length;
  
  const contarVocales = (texto: string): number => {
    const coincidencias = texto.match(/[aeiouáéíóú]/gi);
    return coincidencias ? coincidencias.length : 0;
  };
  
  const invertirTexto = (texto: string): string => texto.split('').reverse().join('');

  const texto = "Hola mundo desde TypeScript";

  return (
    <div className="p-4 mb-4 bg-white border rounded shadow-sm">
      <h3 className="mb-2 text-xl font-bold text-orange-600">Analizador de Texto</h3>
      <p>Texto: "{texto}"</p>
      <p>Palabras: {contarPalabras(texto)}</p>
      <p>Vocales: {contarVocales(texto)}</p>
      <p>Invertido: {invertirTexto(texto)}</p>
    </div>
  );
};