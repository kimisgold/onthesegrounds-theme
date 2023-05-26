(function($) {
    $(document).ready(function() {
        $('#responsive-menu').on('click', '.search-toggle', function() {
            var searchToggle = $(this);
            $('#responsive-menu .search-form').toggleClass('open');
            if (searchToggle.attr('aria-expanded') == 'true') {
                searchToggle.attr('aria-expanded', 'false');
            } else {
                searchToggle.attr('aria-expanded', 'true');
            }
        });
    });
})(jQuery)