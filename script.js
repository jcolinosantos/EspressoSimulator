// Esperamos a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("Dose");
  const boton2 = document.getElementById("Yield");
  const boton3 = document.getElementById("Time");
  
  const dValue = document.getElementById("dValue");
  const yValue = document.getElementById("yValue");
  const tValue = document.getElementById("tValue");

  let dose = null;
  let yield = 40; // Valor fijo de Yield en gramos
  
  

  // Botón para calcular Dose
  boton.addEventListener("click", () => {
    const input = prompt ("Introduce la dosis en gramos (entre 12 y 25):");
    dose = parseFloat(input);

    if (isNaN(dose) || dose <= 12 || dose > 25) {
      dValue.textContent = "Please, introduce a valid dose number.";
    } else {
      dValue.textContent = `Your dose: ${dose} grams`;
    }
  });

  // Botón para ver Yield
  boton2.addEventListener("click", () => {
    if (dose === null) {
      yValue.textContent = "Please, calculate the dose first.";
    } else {
      
      yValue.textContent = `Yield: ${yield} grams`;
    }
  });

    // Botón para calcular Time
  boton3.addEventListener("click", () => {
    if (dose === null) {
      tValue.textContent = "Please, calculate the dose first.";
    } else {
      const time = dose + yield; // Tiempo en segundos
      tValue.textContent = `Time: ${time} seconds`;
    }
  });

});
