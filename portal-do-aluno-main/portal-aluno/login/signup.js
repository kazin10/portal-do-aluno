function createAccount(event) {
    event.preventDefault(); // Impede o envio do formulário para processar os dados

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
        alert("As senhas não coincidem!");
        return;
    }

    // Verifica se o e-mail já está registrado
    var users = JSON.parse(localStorage.getItem("users")) || [];
    var existingUser = users.find(user => user.email === email);
    
    if (existingUser) {
        alert("Este e-mail já está registrado. Tente outro e-mail.");
        return;
    }

    // Cria o novo usuário
    var newUser = {
        name: name,
        email: email,
        password: password
    };

    // Adiciona o novo usuário ao array de usuários
    users.push(newUser);

    // Salva o array de usuários no localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Conta criada com sucesso! Agora você pode fazer login.");
    
    // Redireciona para a página de login
    window.location.href = 'index.html';
}