import { Calculadora } from './components/Calculadora';
import { ConversorTemperatura } from './components/ConversorTemperatura';
import { CalculadoraIMC } from './components/CalculadoraIMC';
import { ValidadorEdad } from './components/ValidadorEdad';
import { AnalizadorTexto } from './components/AnalizadorTexto';
import { EstadisticasArreglo } from './components/EstadisticasArreglo';
import { GeneradorPassword } from './components/GeneradorPassword';
import { AplicadorDescuentos } from './components/AplicadorDescuentos';
import { SistemaCalificaciones } from './components/SistemaCalificaciones';
import { CarritoCompras } from './components/CarritoCompras';

function App() {
  return (
    <div className="max-w-4xl p-8 mx-auto font-sans bg-gray-50">
      <h1 className="mb-8 text-3xl font-extrabold text-center text-gray-800">
        Práctica de Funciones en TypeScript
      </h1>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Calculadora />
        <ConversorTemperatura />
        <CalculadoraIMC />
        <ValidadorEdad />
        <AnalizadorTexto />
        <EstadisticasArreglo />
        <GeneradorPassword />
        <AplicadorDescuentos />
        <SistemaCalificaciones />
        <CarritoCompras />
      </div>
    </div>
  );
}

export default App;