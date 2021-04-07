(function () {
    $(document).ready(function () {
        /*

        ----------- koonami ----------

        */

        var koonamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        var keystrokes = [];
        $('#search').keydown(function(event) {
            if (keystrokes.length !== 10) {
                keystrokes.push(event.key);
                console.log(keystrokes)
            } else if (keystrokes.length === 10 && loopFunction(keystrokes) === true) {
                if (event.key === "Enter") {
                    event.preventDefault()
                    $('body').css('background-color', 'black')
                }
            }
        });

        function loopFunction(array) {
            var count = 0;
            for (let i = 0; i < koonamiCode.length; i++) {
                if (count < 10) {
                    if (koonamiCode[i] !== array[i]) {
                        count = 0;
                        return false;
                    } else if (koonamiCode[i] === array[i]) {
                        count += 1;
                    }
                }
            }
            if (count === 10) {
                return true;
            }
            return false;
        }


        /*
        ----  mouse events -----
        */
        // $('#main').click(function(){
        //     $('#main').css('background', 'rebeccapurple')
        // });
        // $('p').dblclick(function(){
        //     $('p').css('font-size', '18px')
        // });
        // $('.form li').mouseenter(function(){
        //     $('.form li').css('color' , 'red')
        // });
        // $('.form li').mouseleave(function(){
        //     $('.form li').css('color' , 'black')
        // });
    });
})();