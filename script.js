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