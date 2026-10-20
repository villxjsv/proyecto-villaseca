export const ConversorTemperatura = () => {
  const celsiusAFahrenheit = (c: number): number => (c * 9 / 5) + 32;
  const fahrenheitACelsius = (f: number): number => (f - 32) * 5 / 9;

  const temperatura = 25;

  return (
    <div className="p-4 mb-4 bg-white border rounded shadow-sm">
      <h3 className="mb-2 text-xl font-bold text-green-600">Conversor de Temperaturas</h3>
      <p>{temperatura}°C = {celsiusAFahrenheit(temperatura)}°F</p>
      <p>100°F = {fahrenheitACelsius(100).toFixed(2)}°C</p>
    </div>
  );
};