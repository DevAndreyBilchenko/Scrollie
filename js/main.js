jQuery(document).ready(function() {
    // ----------------------------
    // Памятка о приставках в переменных
    // ----------------------------
    // *_class  - '.wsj-expamle'
    // *_css    - 'wsj-example'
    // q_*      - jquery выбора
    // t_*      - триггер
    // f_*      - флаг (bool)
    // ----------------------------

    var $ = jQuery;
    var q_window = $(window);
    var q_body = $('body');

    // ----------------------------
    // Описание
    (function() {
        var main_css = 'body';
        // ..

        var q_main = $(main_css);
        // ..

        if (q_main.length === 0) return;

        // code..
    })();
    // ----------------------------
    // Описание
    (function() {
        var main_css = '#ws-main';
        // ..

        var q_main = $(main_css);
        // ..

        if (q_main.length === 0) return;

        $('.container').Scrollie({
            action: function(Self) {
                Self.css({
                    color: 'red'
                });
                Self.animate({
                    marginLeft: '+=5'
                }, 200);
            }
        });
        //$('.container').Scrollie('unScrollie');
    })();
});
