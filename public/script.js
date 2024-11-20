document.getElementById('registro-form').addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value.trim();
    const edad = parseInt(document.getElementById('edad').value.trim());
    const correo = document.getElementById('correo').value.trim();
    const curso = document.getElementById('curso').value;

    // Validar nombre
    if (!nombre) {
        alert('El nombre es obligatorio.');
        event.preventDefault(); // Evitar envío del formulario
        return;
    }

    // Validar edad
    if (!edad || edad <= 0) {
        alert('Por favor, ingrese una edad válida.');
        event.preventDefault();
        return;
    }

    // Validar correo
    if (!correo || !/^\S+@\S+\.\S+$/.test(correo)) {
        alert('Por favor, ingrese un correo válido.');
        event.preventDefault();
        return;
    }

    // Validar curso
    if (!curso) {
        alert('Seleccione un curso.');
        event.preventDefault();
    }
});




document.getElementById('registro-form').addEventListener('submit', function() {
    alert('Formulario enviado con éxito. Procesando datos...');
});
