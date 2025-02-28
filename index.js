const staticNames = ["Roselaine", "Ronaldo", "Jamilton", "José", "Leticia", "Maria", "Carlos", "Pedro", "Marcela"];

document.getElementById("loadButton").addEventListener("click", function() {
    const inputField = document.getElementById("nameInput");
    const input = inputField.value.trim().toLowerCase(); // Corrige o formato do nome
    const message = document.getElementById("welcomeMessage");

    // Formata a entrada do usuário para ter a primeira letra maiúscula
    const formattedInput = input.charAt(0).toUpperCase() + input.slice(1);

    if (staticNames.includes(formattedInput)) {
        message.textContent = `Seja bem-vindo, ${formattedInput}!`;
        message.style.color = "#03fc07"; // Verde para mensagem de sucesso
    } else {
        message.textContent = "Este usuário não existe em nosso banco de dados.";
        message.style.color = "#9e3008"; // Vermelho para erro
    }

    message.style.display = "block"; // Garante que a mensagem apareça
});
