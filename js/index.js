$( document ).ready(function() {
    $(".navigation").load("menu.html");
    var main = $("#main");
    main.load("links/home.html");
    location.hash = "#home";
    $(window).bind('hashchange', function() {
        var href = "links/" + location.hash.slice(1) +".html";
        main.load(href);
        $('html,body').animate({scrollTop:0},0);
    });
});