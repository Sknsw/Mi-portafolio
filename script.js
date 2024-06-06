// Aquí puedes agregar cualquier código JavaScript adicional que necesites para tu página web

// Ejemplo: Mostrar un mensaje de alerta al enviar el formulario de contacto
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por tu mensaje. Me pondré en contacto contigo pronto.');
    this.reset();
});