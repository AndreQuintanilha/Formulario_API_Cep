document.getElementById('inputZip').addEventListener('input', function() {
    const cep = this.value.replace(/\D/g, ''); // Remove caracteres não numéricos do CEP

    if (cep.length === 8) { // Verifica se o CEP tem 8 dígitos
        const url = `https://viacep.com.br/ws/${cep}/json/`; // URL correta da API ViaCEP

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.erro) { // Verifica se houve erro na busca do CEP
                    alert('CEP não encontrado.');
                } else {
                    // Preenche os campos de endereço com os dados retornados pela API
                    document.getElementById('inputAddress').value = data.logradouro;
                    document.getElementById('inputCity').value = data.localidade;
                    document.getElementById('inputBairro').value = data.bairro;
                    document.getElementById('inputState').value = data.uf;
                }
            })
            .catch(error => {
                console.error('Erro ao buscar o CEP:', error);
                alert('Falha ao buscar o CEP.');
            });
    }
});

document.getElementById('Cepform').addEventListener('submit', function(event) {
event.preventDefault();
    
    // Obter os valores das senhas
    const senha = document.getElementById('inputPassword4').value;
    const confirmarSenha = document.getElementById('inputPassword5').value;

    // Verificar se as senhas conferem
    if (senha !== confirmarSenha) {
        alert('Senhas não conferem.');
    } else {
        alert('Cadastro realizado com sucesso.');
        this.reset(); // Limpa o formulário
        
    }
});



