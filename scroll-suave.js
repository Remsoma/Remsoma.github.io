$(document).ready(function(){
    // Adicione um evento de clique ao link
    $("a[href^='#']").on('click', function(event) {
        // Garanta que this.hash tenha um valor antes de sobrescrever o comportamento padrão
        if (this.hash !== "") {
            // Prevenir comportamento de clique padrão
            event.preventDefault();

            // Armazene hash
            var hash = this.hash;

            // Usando jQuery's animate() método para adicionar rolagem de página suave
            // O número 800 especifica o número de milissegundos que leva para rolar até a área desejada
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                // Adicione hash (#) à URL quando feito de rolar (comportamento de clique do navegador padrão)
                window.location.hash = hash;
            });
        } // Fim if
    });
});