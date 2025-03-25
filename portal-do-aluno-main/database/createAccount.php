<?php
// Dados de conexão com o banco de dados
$servername = "localhost:3000/database";
$username = "kauasantos@gmail.com";
$password = "090108";
$dbname = "090108";

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// SQL para criar a tabela
$sql = "CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(10) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

// Executa a query para criar a tabela
if ($conn->query($sql) === TRUE) {
    echo "Tabela 'users' criada com sucesso!";
} else {
    echo "Erro ao criar tabela: " . $conn->error;
}

// Fecha a conexão
$conn->close();
?>