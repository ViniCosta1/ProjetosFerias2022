var key = 'bc15c0831374f36a7773026c3154e2a1';

function consultaClima() {
    $('.barra-progresso').show();
    var cidade = document.getElementById('cidade').value;

    $.ajax({
        url: '//api.openweathermap.org/data/2.5/weather',
        type: 'get',
        dataType: 'json',
        data: { q: cidade, appid: key, lang: 'pt_br' },
        success: function (response) {
            console.log('A operação foi bem sucedida');
            console.log(response);
            $('#city').html(response.name);
            $('#pais').html(response.sys.country);
            $('#tempoClima').html(response.weather[0].main);
            $('#tempoDescricao').html(response.weather[0].description);
            $('#temperatura').html(Math.round(response.main.temp - 273) + 'ºC');
            $('.clima').show();
            $('.barra-progresso').hide();
        },
        error: function (response) {
            console.log('A operação foi mal sucedida');
            $('.barra-progresso').hide();
        },
    });
}

$(function () {
    $('.clima').hide();
    $('.barra-progresso').hide();
});
