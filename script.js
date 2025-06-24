// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  const doseInput = document.getElementById("doseInput");
  const yieldInput = document.getElementById("yieldInput");
  const timeOutput = document.getElementById("timeOutput");
  const ratioOutput = document.getElementById("ratioOutput");
  const calculateButton = document.getElementById("calculateButton");
  const grindSizeSelect = document.getElementById("grindSize");
  const fixRatioCheckbox = document.getElementById("fixRatioCheckbox");
  
  function isValidDose(dose) {
  return !isNaN(dose) && dose >= 12 && dose <= 25;
  }

  function isValidYield(yieldValue) {
  return !isNaN(yieldValue) && yieldValue > 0;
  }
  
  function getDose() {
    return parseFloat(doseInput.value);
  }

  function getYield() {
    return parseFloat(yieldInput.value);
  }
  
  function actualizarRatio() {
    const dose = getDose();
    const yieldValue = getYield();
    
    if (isValidDose(dose) && isValidYield(yieldValue)) {
      ratioOutput.value = `1:${(yieldValue / dose).toFixed(1)}`;
    } else {
      ratioOutput.value = "";
    }
  }

  doseInput.value = 18;
  yieldInput.value = 40;
  actualizarRatio();

  doseInput.addEventListener("input", () => {
    const dose = getDose();
    doseInput.classList.toggle("error", !isValidDose(dose));
    
    if (isValidDose(dose)) {
      if (fixRatioCheckbox.checked && fixedRatio){
        yieldInput.value = (dose * fixedRatio).toFixed(1);
      }
      actualizarRatio();
    }
});

yieldInput.addEventListener("input", () => {
    const yieldValue = getYield();

    if (isValidYield(yieldValue)) {
      if (fixRatioCheckbox.checked && fixedRatio) {
        doseInput.value = (yieldValue / fixedRatio).toFixed(1);
      }
      actualizarRatio();
    }
});


fixRatioCheckbox.addEventListener("change", () => {
  const dose = getDose();
  const yieldValue = getYield();
  
  if (fixRatioCheckbox.checked) {
    if ((isValidDose(dose)) && isValidYield(yieldValue)) {
      fixedRatio = yieldValue / dose;
      actualizarRatio();
    } else {
      fixRatioCheckbox.checked = false;
      alert("Please enter valid parameters to fix the ratio.");
    }
  } else {
      fixedRatio = null;
      actualizarRatio();
    }
});

  calculateButton.addEventListener("click", () => {
  const dose = getDose();
  const yieldValue = getYield();
  const grindSize = parseFloat(grindSizeSelect.value);

  if (!isValidDose(dose)) {
    timeOutput.value = "Please, enter a valid dose (12-25g).";
    return;
  }

  if (grindSize === 1) {
    timeOutput.value = "Grind size too fine. No espresso for you!";
    return;
  } 
  if (grindSize === 5) {
    timeOutput.value = "Grind size too coarse. No espresso for you!";
    return;
  }

  // Modelo basado en resistencia

  const grindResistance = (5 - grindSize) * 1.6;
  const doseResistance = Math.pow(dose / 19.5, 1.7); 
  const totalResistance = grindResistance * doseResistance;

  const baseFlow = 4;
  const flowRate = baseFlow / totalResistance;

  const basePreinfusion = 2;
  const time = yieldValue / flowRate + basePreinfusion;

  timeOutput.value = time.toFixed(1) + " seconds";
});
});
