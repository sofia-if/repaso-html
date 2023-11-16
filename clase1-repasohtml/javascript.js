document.addEventListener('DOMContentLoaded', function(){
    const tipoSeguroSelect = document.getElementById("tipoSeguro");
    const valorSeguroSpan = document.getElementById("valorSeguro");
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener('submit',  (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const nombre = formData.get("nombre");
        const apellido = formData.get("apellido");
        const dni = formData.get("dni");
        const email = formData.get("email");
        const telefono = formData.get("telefono");
        const tipoSeguro = formData.get("tipoSeguro");

       const resumen= `Nombre: ${nombre}\nApellido ${apellido}\n DNI: ${dni}\n Email ${email}\n Telefono: ${telefono}\n Tipo de seguro: ${tipoSeguro}`;

        Swal.fire({
            title: "solicitud enviada",
            text: resumen, 
            icon: "success",
            showConfirmButton: true,
            allowEscapeKey: false,
            allowOutsideClick: false,
            confirmButtonText: "Cerrar",
        }).then( result => {
            if(result.isConfirmed){
                contactForm.reset();
            }
        });
    });

    tipoSeguroSelect.addEventListener("change", function(){
        const selectedOption = tipoSeguroSelect.value;
        let valorSeguro = 0;
        switch(selectedOption){
            case "basico":
                valorSeguro = 500;
                break;
            case "intermedio":
                valorSeguro = 1000;
                break;
            case "premium":
                valorSeguro = 1500;
                break;
            default:
                break;
        }
        valorSeguroSpan.textContent = `$${valorSeguro}`;
    })
});
