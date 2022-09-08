$(document).ready(function () {
    if(sessionStorage.getItem("username") == null){
        window.location.assign('../index.html');
    }
    $('#profile').mouseenter(function () {
        $('#dropdown-profile').slideDown();
    });
    $('#dropdown-profile').mouseleave(function () {
        $('#dropdown-profile').slideUp();
    });
    $('#hamburger').click(function () {
        $('#dropdown-menus').slideToggle();
    });

    $('#logout').click(function(){
        sessionStorage.clear();
        window.location.assign('../index.html');
    })
    $('#logout2').click(function(){
        sessionStorage.clear();
        window.location.assign('../index.html');
    })
});