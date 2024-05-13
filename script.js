document.getElementById('ecoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const housing = parseFloat(document.getElementById('housing').value);
    const transport = parseFloat(document.getElementById('transport').value);
    const food = parseFloat(document.getElementById('food').value);
    const consumption = parseFloat(document.getElementById('consumption').value);

    if (!isNaN(housing) && !isNaN(transport) && !isNaN(food) && !isNaN(consumption)) {
        const totalCO2 = (housing + transport + food + consumption).toFixed(2);
        document.getElementById('result').innerHTML = `Sua pegada ecológica total é de ${totalCO2} kg de CO2 por mês.`;
    } else {
        document.getElementById('result').innerHTML = "Por favor, preencha todos os campos corretamente.";
    }
});

/*scroll suave*/
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

