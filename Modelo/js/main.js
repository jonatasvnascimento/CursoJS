document.querySelector('formulario').addEventListener('submit', function(event){
    event.preventDefault()

    const peso = document.querySelector('#peso').value
    const altura = document.querySelector('#altura').value

    console.log(peso, altura)
})