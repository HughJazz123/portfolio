

$(document).ready(function (){
    var note_c = $('#C')[0];
    var note_e = $('#E')[0];
    var note_g = $('#G')[0];
    var note_C1 = $('#C1')[0];
    var note_E1 = $('#E1')[0];
    $('#m').mouseenter(function(){
        note_c.play();
    });

    $('#u').mouseenter(function(){
        note_e.play();
    });

    $('#s').mouseenter(function(){
        note_g.play();
    });

    $('#i').mouseenter(function(){
        note_C1.play();
    });

    $('#c').mouseenter(function(){
        note_E1.play();
    });
})