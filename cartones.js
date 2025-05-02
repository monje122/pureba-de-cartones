document.addEventListener('DOMContentLoaded', () => {
  const cartonsContainer = document.getElementById('cartons-container');
  const modal = document.getElementById('cartonModal');
  const cartonImage = document.getElementById('cartonImage');
  const btnSelect = document.getElementById('btnSelect');
  const btnClose = document.getElementById('btnClose');

  const baseImageUrl = 'https://dbkixcpwirjwjvjintkr.supabase.co/storage/v1/object/public/cartones/'; // Aquí está la URL base
  const totalCartons = 10;  // Asegúrate de poner el total correcto de cartones disponibles

  let selectedCartonNumber = null;

  // Agregar los cartones a la interfaz
  for (let i = 1; i <= totalCartons; i++) {
    const div = document.createElement('div');
    div.classList.add('carton');
    div.textContent = `Cartón ${i}`;
    div.dataset.number = i;

    div.addEventListener('click', () => {
      selectedCartonNumber = i;
      // Asignar la URL de la imagen del cartón al modal
      cartonImage.src = `${baseImageUrl}SERIAL_PRUEBA_CARTON_0000${i}.jpg`;  // Aquí estamos agregando el número del cartón en la URL
      modal.classList.remove('hidden');
    });

    cartonsContainer.appendChild(div);
  }

  // Seleccionar el cartón
  btnSelect.addEventListener('click', () => {
    alert(`Cartón seleccionado: ${selectedCartonNumber}`);
    // Cambiar el estilo del cartón seleccionado a ocupado (rojo)
    const selectedCarton = document.querySelector(`[data-number='${selectedCartonNumber}']`);
    selectedCarton.style.backgroundColor = 'red'; // Se marca como ocupado
    modal.classList.add('hidden'); // Cerrar el modal después de seleccionar
  });

  // Cerrar el modal
  btnClose.addEventListener('click', () => {
    modal.classList.add('hidden');
  });
});
