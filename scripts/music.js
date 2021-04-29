

$(document).ready(function (){
    var note_c = $('#C')[0];
    var note_g = $('#G')[0];
    var note_C1 = $('#C1')[0];
    var note_D1 = $('#D1')[0];
    var note_E1 = $('#E1')[0];
    $('#m').click(function(){
        note_c.currentTime = 0;
        note_c.play();
    });

    $('#u').click(function(){
        note_g.currentTime = 0;
        note_g.play();
    });

    $('#s').click(function(){
        note_C1.currentTime = 0;
        note_C1.play();
    });

    $('#i').click(function(){
        note_D1.currentTime = 0;
        note_D1.play();
    });

    $('#c').click(function(){
        note_E1.currentTime = 0;
        note_E1.play();
    });
})