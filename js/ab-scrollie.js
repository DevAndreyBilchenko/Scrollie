(function($) {
    // TODO: добавить события
    // TODO: общая проверка

    var SCROLLIE = [];
    var COUNT = 0;

    $.fn.Scrollie = function(UserParams) {
        var Self = this;
        // ------------------------
        var Params = {
            mark_css: '.ab-scrollie',
            mark_class: 'ab-scrollie',
            t_visible: 'abOnItemVisible',
            t_action_start: 'abOnItemActionStart',
            t_item_disabled: 'abOnItemDisabled',
            t_item_destruct: 'abOnItemDestruct',
            d_id: 'scrollie_id',
            static: true, // Может ли позиция элемента измениться
            oneoff: true, // Отработать один раз
            action: function() {}, // Функция выполняющаяся если объект видно
            pause: 250, // Задержка перед выполнением мс
            offset_top: 15, // Сдвиг границы активации сверху
            offset_bottom: 15 // Сдвиг границы активации снизу
        };
        $.extend(Params, UserParams);
        // ------------------------
        Self.each(function() {
            var self = $(this);
            var Item = {
                id: COUNT,
                self: self,
                disabled: false,
                min_top: null,
                max_top: null,
                oneoff: Params.oneoff,
                static: Params.static,
                action: Params.action,
                offset_top: Params.offset_top,
                offset_bottom: Params.offset_bottom,
                pause: Params.pause
            };
            // ------------------------
            if (typeof UserParams !== 'object' && typeof UserParams !== 'undefined') {
                initMethodController();
                return;
            }

            init();

            // ------------------------
            function init() {
                addNewItem();
                checkItems();
            }
            // ------------------------
            // Методы
            // ------------------------
            function initMethodController() {
                switch (UserParams) {
                    case 'unScrollie':
                        unScrollie();
                        break;

                    default:
                        return;

                }
            }
            // ------------------------
            function unScrollie() {
                unMarkItem();
                deleteItem(self.data(Params.d_id));
            }
            // ------------------------
            function addNewItem() {
                setItemBorder.call(Item);
                markItem();
                SCROLLIE.push(Item);

                COUNT += 1;
            }
            // ------------------------
            function deleteItem(Id) {
                $(SCROLLIE).each(function(Index, Elem) {
                    if (Elem.id === Id) {
                        SCROLLIE.splice(SCROLLIE.indexOf(Index), 1);
                    }
                });
            }
            // ------------------------
            function markItem() {
                self.addClass(Params.mark_class);
                self.data(Params.d_id, COUNT);
            }
            // ------------------------
            function unMarkItem() {
                self.removeClass(Params.mark_class);
            }
        });
        // ------------------------
        $(window).scroll(function() {
            checkItems();
        });
        // ------------------------
        // Глобальные методы
        // ------------------------
        function checkItems() {
            var current = $(window).scrollTop();

            $('.current_scroll').text(current);

            $(SCROLLIE).each(function() {
                if (this.static === false)
                    setItemBorder.call(this);

                if (!isVisible.call(this) || this.disabled === true) return;

                startItemAction.call(this);

                if (this.oneoff === true)
                    this.disabled = true;
            });
        }
        // ------------------------
        function isVisible() {
            var current = $(window).scrollTop();

            if (current >= this.min_top && current <= this.max_top) return true;

            return false;
        }
        // ------------------------
        function setItemBorder() {
            var top = this.self.offset().top;
            var window_h = $(window).height();
            var min_top = top - window_h + this.offset_top;

            if (min_top < 0) min_top = 0;

            this.min_top = min_top;
            this.max_top = top + this.self.outerHeight() + this.offset_bottom;
        }
        // ------------------------
        function startItemAction() {
            var self = this;

            setTimeout(function() {
                self.action(self.self);
            }, self.pause);
        }
    };
})(jQuery);
