document.getElementById('buscar').addEventListener('click', () => {
    const cidade = document.getElementById('cidade').value;
    if (!cidade) {
        alert('Por favor, digite uma cidade.');
        return;
    }

    buscarPrevisao(cidade);
});

function buscarPrevisao(cidade) {
    const apiKey = '8765381cc06ad68c265342ea8d74ec88'; // Substitua pela sua chave da API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Cidade não encontrada!');
            return response.json();
        })
        .then(data => {
            const resultado = `
                <p>Temperatura: ${data.main.temp}°C</p>
                <p>Clima: ${data.weather[0].description}</p>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Ícone do clima">
            `;
            document.getElementById('resultado').innerHTML = resultado;
        })
        .catch(error => {
            document.getElementById('resultado').innerHTML = `<p>${error.message}</p>`;
        });
}
