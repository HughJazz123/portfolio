function move(elem_id) {
    return new Promise((resolve, reject)=>{
        var elem = document.getElementById(elem_id);
        var counter = 1;
        var width = 1;
        var id = setInterval(frame, 5);
        var progress_steps = {
            '1':90,
            '2':85,
            '3':95,
            '4':80,
            '5':95,
            '6':80,
            '7':95,
            '8':80,
            '9':95,
            '10':100
        }
        function frame() {
            if (width == progress_steps[counter.toString()]) {
                counter++;
            } else {
                if (width < progress_steps[counter.toString()]){
                    width++;
                } else {
                    width--;
                }
                elem.style.width = width + '%'; 
            }

            if (width >= 100){
                clearInterval(id);
                resolve();
            }
        }
    })
}