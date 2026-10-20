export const GeneradorPassword = () => {
  const generarPassword = (longitud: number, incluirNumeros: boolean, incluirSimbolos: boolean): string => {
    const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+";
    
    let caracteresPermitidos = letras;
    if (incluirNumeros) caracteresPermitidos += numeros;
    if (incluirSimbolos) caracteresPermitidos += simbolos;

    let password = "";
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteresPermitidos.length);
      password += caracteresPermitidos[indiceAleatorio];
    }
    return password;
  };

  return (
    <div className="p-4 mb-4 bg-white border rounded shadow-sm">
      <h3 className="mb-2 text-xl font-bold text-yellow-600">Generador de Contraseñas</h3>
      <p>Básica (8): {generarPassword(8, false, false)}</p>
      <p>Media (12): {generarPassword(12, true, false)}</p>
      <p>Fuerte (16): {generarPassword(16, true, true)}</p>
    </div>
  );
};