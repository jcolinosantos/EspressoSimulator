// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  const doseInput = document.getElementById("doseInput");
  const yieldInput = document.getElementById("yieldInput");
  const timeOutput = document.getElementById("timeOutput");
  const calculateButton = document.getElementById("calculateButton");
  const grindSizeSelect = document.getElementById("grindSize");

  yieldInput.value = 40;


  doseInput.addEventListener("input", () => {
    const dose = parseFloat(doseInput.value);
    doseInput.classList.toggle("error", isNaN(dose) || dose < 12 || dose > 25);
  });

  calculateButton.addEventListener("click", () => {
    const dose = parseFloat(doseInput.value);
    const grindSize = parseFloat(grindSizeSelect.value);
    const yieldValue = parseFloat(yieldInput.value);

    if (isNaN(dose) || dose < 12 || dose > 25) {
      timeOutput.value = "Dosis inválida";
      return;
    } 
    
    if (grindSize === 1) {
        timeOutput.value = "Grind size too fine";
    } else if (grindSize === 5) {
        timeOutput.value = 10;
    } else {
        // Calcular el tiempo de extracción
        let multiplier = 1;
        if (grindSize === 2) multiplier = 1.5; // Fino
        else if (grindSize === 3) multiplier = 1; // Medio
        else if (grindSize === 4) multiplier = 0.5; // Grueso
        
        const time = (dose * multiplier) + yieldValue; // Tiempo en segundos
        timeOutput.value = time.toFixed(2);
        }
  });
});
