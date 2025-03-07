document.addEventListener('DOMContentLoaded', function() {
    const atividades = [
        
    ];


    const faltas = [
        
    ];

    function displayAtividades() {
        const atividadesList = document.getElementById('atividades-list');
        atividades.forEach(atividade => {
            const li = document.createElement('li');
            li.textContent = atividade;
            atividadesList.appendChild(li);
        });
    }


    function displayFaltas() {
        const faltasList = document.getElementById('faltas-list');
        faltas.forEach(falta => {
            const li = document.createElement('li');
            li.textContent = falta;
            faltasList.appendChild(li);
        });
    }


    displayAtividades();
    displayFaltas();
});

// Função para adicionar nova atividade
document.getElementById('form-atividade').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputAtividade = document.getElementById('input-atividade');
    const atividadeText = inputAtividade.value.trim();
    if (atividadeText) {
        const li = document.createElement('li');
        li.textContent = atividadeText;
        
        // Adiciona o botão de remover
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.addEventListener('click', function() {
            li.remove();
        });
        
        li.appendChild(btnRemover);
        document.getElementById('atividades-list').appendChild(li);
        inputAtividade.value = ''; // Limpa o campo após adicionar
    }
});

// Função para adicionar nova falta
document.getElementById('form-falta').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputFalta = document.getElementById('input-falta');
    const faltaText = inputFalta.value.trim();
    if (faltaText) {
        const li = document.createElement('li');
        li.textContent = faltaText;

        // Adiciona o botão de remover
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(btnRemover);
        document.getElementById('faltas-list').appendChild(li);
        inputFalta.value = ''; // Limpa o campo após adicionar
    }
});

// Função para adicionar outra função
document.getElementById('form-outra-funcao').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputOutraFuncao = document.getElementById('input-outra-funcao');
    const outraFuncaoText = inputOutraFuncao.value.trim();
    if (outraFuncaoText) {
        const li = document.createElement('li');
        li.textContent = outraFuncaoText;

        // Adiciona o botão de remover
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(btnRemover);
        document.getElementById('outras-funcoes-list').appendChild(li);
        inputOutraFuncao.value = ''; // Limpa o campo após adicionar
    }
});
