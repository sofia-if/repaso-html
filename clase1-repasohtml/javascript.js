document.addEventListener('DOMContentLoaded', function(){
    const tipoSeguroSelect = document.getElementById("tipoSeguro");
    const valorSeguroSpan = document.getElementById("valorSeguro");

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
        valorSeguroSpan.textContent = valorSeguro;
    })
});