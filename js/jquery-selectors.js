(function () {

        $(document).ready(function () {
            // selectors using ID


            setTimeout(function(){
                $('#heading-1').css({'background-color': 'yellow', 'color': 'rebeccapurple', 'text-align': 'center'});
                $('#character-list').css('font-family', 'Orbitron');
                $('#loser').css('text-decoration', 'underline');
                $('#body').css({
                    'background-image': 'url(https://gray-wdbj-prod.cdn.arcpublishing.com/resizer/zHWV1QvKgK2FezH0pR5_zlwIhYM=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/JCANUUGIONKE5KT7C6WG7WSCZM.jpg)',
                    'color': 'yellow'
                });
                $('#para-3, #para-2').css('margin', '5em');
                var what = prompt('coolest guy in town');
                $('#empty').html(what);
            }, 3000);


            // selectors using class
        });
})()