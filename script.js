// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  const doseInput = document.getElementById("doseInput");
  const yieldInput = document.getElementById("yieldInput");
  const timeOutput = document.getElementById("timeOutput");
  const calculateButton = document.getElementById("calculateButton");

  yieldInput.value = 40;

  doseInput.addEventListener("input", () => {
    const dose = parseFloat(doseInput.value);
    doseInput.classList.toggle("error", isNaN(dose) || dose < 12 || dose > 25);
  });

  calculateButton.addEventListener("click", () => {
    const dose = parseFloat(doseInput.value);
    
    if (doseInput.classList.contains("error")) {
      timeOutput.value = "Error";
    } else {
      timeOutput.value = dose + parseFloat(yieldInput.value);
    }
  });
});
