const submitButton = document.getElementById('submit-button');
const submitFoto = document.getElementById('input-foto');
const maxInputAbout = document.getElementById('input-about').value.length;
const maxInputEmail = document.getElementById('input-email').value.length;
const maxInputNome = document.getElementById('input-nome').value.length;

function validadeTerms() {
    if (submitFoto.checked === true) {
        alert('Informações enviadas')
    } else if (submitFoto.checked === false){
        alert('Para enviar suas informações voc6e precisa concordar com os termos!')
    }   
}

submitButton.addEventListener('click', (event) => {
    if (maxInputAbout < 500 && maxInputEmail < 50 && maxInputNome < 40 ) {
        if (submitFoto.checked === true) {
            alert('Dados enviados com sucesso! Obrigado pro participar do concurso TrybeTrip')
            
        } else if (submitFoto.checked === false){
            event.preventDefault();
            alert('Para enviar suas informações você precisa concordar com os termos!')
        } 
    } else {
        event.preventDefault();
        alert('Dados Inválidos');
    }
});