(function($) {
    $(document).ready(function() {
        var enableToggle = function (container, toggleSelector, drawerContent) {
            $(container).on('click', toggleSelector, function() {
                var toggleButton = $(this);
                $(drawerContent).toggleClass('open');
                if (toggleButton.attr('aria-expanded') == 'true') {
                    toggleButton.attr('aria-expanded', 'false');
                } else {
                    toggleButton.attr('aria-expanded', 'true');
                }
            });
        };

        enableToggle('#responsive-menu', '.search-toggle', '#responsive-menu .search-form');
        enableToggle('#container', '.filter-toggle, #section-sidebar .close-button', '#section-sidebar');
    });
})(jQuery)