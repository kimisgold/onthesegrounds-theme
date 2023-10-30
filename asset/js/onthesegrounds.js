(function($) {
    $(document).ready(function() {
        const mediaQuery = window.matchMedia('(min-width: 896px)');

        var handleTabletChange = function(e) {
            if (e.matches) {
                $('.mobile.modal-panel, .mobile.modal-content').attr('aria-hidden', 'false');
                $('.modal-toggle').attr('aria-expanded', 'false');
            }
        };

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

        var enableModal = function(listenerSelector, mainContentSelector, modalSelector) {
            var mainContent = $(mainContentSelector);
            var modal = $(modalSelector);
            $(listenerSelector).on('toggle', modalSelector, function() {
                if (modal.attr('aria-hidden') == 'false') {
                    mainContent.attr('aria-hidden', 'true');
                    modal.find('.close-button').trigger("focus");
                } else {
                    mainContent.attr('aria-hidden', 'false');
                }
            });
        };

        enableToggle('#responsive-menu', '.search-toggle', '#responsive-menu .search-form');
        enableToggle('#container', '.filter-toggle, #section-sidebar .close-button', '#section-sidebar');

        enableModal('#container', '#section-content', '#section-sidebar');

        mediaQuery.addListener(handleTabletChange);
        handleTabletChange(mediaQuery);
    });
})(jQuery)