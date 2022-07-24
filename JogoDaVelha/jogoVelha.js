/*
 * Vez 1 = Círculo
 * Vez 2 = Xis
 */
var game = true;
var vez = 1;
pontosC = [];
pontosX = [];

$(function () {
    function fimGame() {
        if ((pontosC.includes('c1c') && pontosC.includes('c2c') && pontosC.includes('c3c')) ||
            (pontosC.includes('c1c') && pontosC.includes('c5c') && pontosC.includes('c9c')) ||
            (pontosC.includes('c1c') && pontosC.includes('c4c') && pontosC.includes('c7c')) ||
            (pontosC.includes('c2c') && pontosC.includes('c5c') && pontosC.includes('c8c')) ||
            (pontosC.includes('c3c') && pontosC.includes('c6c') && pontosC.includes('c9c')) ||
            (pontosC.includes('c3c') && pontosC.includes('c5c') && pontosC.includes('c7c')) ||
            (pontosC.includes('c4c') && pontosC.includes('c5c') && pontosC.includes('c6c')) ||
            (pontosC.includes('c7c') && pontosC.includes('c8c') && pontosC.includes('c9c'))) {
            $('#vencedor').html('O vencedor foi o CÍRCULO');
            game = false;
            return;
        }
        if ((pontosX.includes('c1x') && pontosX.includes('c2x') && pontosX.includes('c3x')) ||
            (pontosX.includes('c1x') && pontosX.includes('c5x') && pontosX.includes('c9x')) ||
            (pontosX.includes('c1x') && pontosX.includes('c4x') && pontosX.includes('c7x')) ||
            (pontosX.includes('c2x') && pontosX.includes('c5x') && pontosX.includes('c8x')) ||
            (pontosX.includes('c3x') && pontosX.includes('c6x') && pontosX.includes('c9x')) ||
            (pontosX.includes('c3x') && pontosX.includes('c5x') && pontosX.includes('c7x')) ||
            (pontosX.includes('c4x') && pontosX.includes('c5x') && pontosX.includes('c6x')) ||
            (pontosX.includes('c7x') && pontosX.includes('c8x') && pontosX.includes('c9x'))) {
            $('#vencedor').html('O vencedor foi o XIS');
            game = false;
            return;
        }
        if (pontosC.length == 5) {$('#vencedor').html('Jogo EMPATADO'); game = false; return;}
    }
    $('.casa').click(function () {
        if (vez == 1 && $(this).is(':empty') && game) {
            $(this).html('<div class="circulo"></div>');
            $('#vez').html('Vez do Xis');
            vez = 2;
            pontosC.push($(this).attr('id') + 'c');
            console.log(pontosC)
            fimGame();
        }
        if (vez == 2 && $(this).is(':empty') && game) {
            $(this).html('<div class="xis" id="x"></div>');
            $('#vez').html('Vez do Circulo');
            vez = 1;
            pontosX.push($(this).attr('id') + 'x');
            fimGame();
        }
    });
});
