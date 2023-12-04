(function($) {
    $(document).ready(function() {
        var enableToggle = function (container, toggleSelector, drawerContentSelector) {
            $(container).on('click', toggleSelector, function() {
                var toggleButton = $(this);
                var drawerContent = $(drawerContentSelector);
                drawerContent.toggleClass('open');
                if (toggleButton.attr('aria-expanded') == 'true') {
                    toggleButton.attr('aria-expanded', 'false');
                    drawerContent.attr('aria-hidden', 'true');
                } else {
                    toggleButton.attr('aria-expanded', 'true');
                    drawerContent.attr('aria-hidden', 'false');
                }
                drawerContent.trigger('toggle');
            });
        };

        enableToggle('#responsive-menu', '.search-toggle', '#responsive-menu .search-form');
    });
})(jQuery)