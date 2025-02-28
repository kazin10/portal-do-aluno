document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de atividades
    const atividades = [
        "Atividade 1: Matemática - Exercícios de Álgebra",
        "Atividade 2: História - Leitura do Capítulo 3",
        "Atividade 3: Ciências - Experimento com Plantas"
    ];

    // Exemplo de faltas
    const faltas = [
        "Falta em 01/02/2025 - Matemática",
        "Falta em 03/02/2025 - História",
        "Falta em 05/02/2025 - Ciências"
    ];

    // Função para exibir atividades
    function displayAtividades() {
        const atividadesList = document.getElementById('atividades-list');
        atividades.forEach(atividade => {
            const li = document.createElement('li');
            li.textContent = atividade;
            atividadesList.appendChild(li);
        });
    }

    // Função para exibir faltas
    function displayFaltas() {
        const faltasList = document.getElementById('faltas-list');
        faltas.forEach(falta => {
            const li = document.createElement('li');
            li.textContent = falta;
            faltasList.appendChild(li);
        });
    }

    // Chama as funções para exibir atividades e faltas
    displayAtividades();
    displayFaltas();
});
