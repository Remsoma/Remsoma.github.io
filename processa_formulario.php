<?php
// Conexão com o banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "remsoma";

// Verificar se o formulário foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Conectar ao banco de dados
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    // Verificar a conexão
    if (!$conn) {
        die("Conexão falhou: " . mysqli_connect_error());
    }

    // Receber dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    // Preparar e executar a consulta SQL
    $sql = "INSERT INTO remsoma (nome, email, mensagem) VALUES ('$nome', '$email', '$mensagem')";

    if (mysqli_query($conn, $sql)) {
        $mensagem_enviada = "O formulário foi enviado com sucesso!";
    } else {
        $erro = "Erro: " . $sql . "<br>" . mysqli_error($conn);
    }

    // Fechar a conexão com o banco de dados
    mysqli_close($conn);
}

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Inscrição</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="formulario1.css">
</head>

<body>
    <form class="form-container" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
        <div class="form-group">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required>
        </div>
    
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
        </div>
    
        <div class="form-group">
            <label for="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" rows="5" required></textarea>
        </div>
    
        <div class="form-group">
            <input type="submit" value="Enviar">
        </div>
    </form>

    <?php
    // Exibir mensagem de sucesso
    if (isset($mensagem_enviada)) {
        echo "<p>$mensagem_enviada</p>";
    }

    // Exibir mensagem de erro
    if (isset($erro)) {
        echo "<p>$erro</p>";
    }
    ?>
    
</body>

</html>
