(function() {
    const dados = [];

    document.getElementById('formulario').addEventListener('submit', (event) => {
        event.preventDefault();
        adicionarPessoa();
        mostrarObjetoNaTela();
        dadosFormatadoDoFormulario();
    });

    function adicionarPessoa() {
        const nome = document.getElementById('nome').value;
        const sobrenome = document.getElementById('sobrenome').value;
        const peso = document.getElementById('peso').value;
        const altura = document.getElementById('altura').value;

        const dadosPessoa = { nome, sobrenome, peso, altura };
        dados.push(dadosPessoa);

        console.log(dados);
    }

    function mostrarObjetoNaTela() {
        document.getElementById('json').innerText = JSON.stringify(dados);
    }

    function dadosFormatadoDoFormulario() {
        const { nome, sobrenome, peso, altura } = dados[dados.length - 1];
        document.getElementById('dadosFormatado').innerText += `${nome} ${sobrenome} tem ${peso} kg e ${altura} de altura\n`;
    }
})();