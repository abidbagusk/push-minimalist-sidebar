$(document).ready(function () {
    $('#sidenav__menu').click(function () {
        $('.navigation').toggleClass('toggle-nav');
    })
    $('#search-button').click(function () {
        $('.modal-search').addClass('active');
    });
    $('.modal-close').click(function () {
        $('.modal-search').removeClass('active');
    });
});