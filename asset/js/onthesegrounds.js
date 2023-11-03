(function($) {
    $(document).ready(function() {
        const mediaQuery = window.matchMedia('(min-width: 896px)');

        var handleTabletChange = function(e) {
            $('.modal-toggle').attr('aria-expanded', 'false');
            $('.modal-panel').attr('aria-hidden', 'true').removeClass('open');
            console.log($('.modal-panel').attr('aria-hidden'));
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


        var enableModal = function(listenerSelector, mainContentSelector, modalSelector, toggleButtonSelector) {
            var mainContent = $(mainContentSelector);
            var modal = $(modalSelector);
            var toggleButton = $(toggleButtonSelector);
            var lastFocus;

            modal.on('click', '.close-button', function() {
                lastFocus.trigger('click').trigger('focus');
            });

            $(listenerSelector).on('toggle', modalSelector, function() {
                var closeButton = modal.find('.close-button');
                if (modal.attr('aria-hidden') == 'false') {
                    mainContent.attr('aria-hidden', 'true');
                    closeButton.trigger('focus');
                    lastFocus = toggleButton;
                } else {
                    mainContent.attr('aria-hidden', 'false');
                    lastFocus.trigger('focus');
                    lastFocus = closeButton;
                }
            });

        };


        enableToggle('#responsive-menu', '.search-toggle', '#responsive-menu .search-form');
        enableToggle('#container', '.filter-toggle', '#section-sidebar');

        enableModal('#container', '#section-content', '#section-sidebar', '#section-sidebar-modal-toggle');

        mediaQuery.addListener(handleTabletChange);
        handleTabletChange(mediaQuery);
    });
})(jQuery)