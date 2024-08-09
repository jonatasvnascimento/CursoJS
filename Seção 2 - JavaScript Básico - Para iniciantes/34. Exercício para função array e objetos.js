const dados = []
let nome = null
let  sobrenome = null
let  peso = null
let  altura = null

document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()
    AdicionarPessoa()
    MostrarObjetoNaTela()
    DadosFormatadoDoFormulario()
})

function AdicionarPessoa() {

    nome = document.getElementById('nome').value
    sobrenome = document.getElementById('sobrenome').value
    peso = document.getElementById('peso').value
    altura = document.getElementById('altura').value

    const dadosPessoa = {
        nome,
        sobrenome,
        peso,
        altura
    }

    dados.push(dadosPessoa)

    console.log(dados)
}

function MostrarObjetoNaTela() {
    document.getElementById('json').innerText = JSON.stringify(dados)
}

function DadosFormatadoDoFormulario() {

    document.getElementById('dadosFormatado').innerText += `${nome} ${sobrenome} tem ${peso} kg e ${altura} de altura` + '\n'
}