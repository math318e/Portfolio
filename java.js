$(document).ready(function () {
    $("#nav_portfolio").click(function () {
        $("#om").hide();
        $("#portfolio").slideDown(2000);
        $(".tilbageknap").hide();
        $("#knap").hide();
    });
    $("#nav_om").click(function () {
        $("#portfolio").hide();
        $("#om").slideDown(3000);
        $(".tilbageknap").hide();
        $("#knap").hide();
    });
    $("#nav_home").click(function () {
        $("#portfolio").hide();
        $(".tilbageknap").hide();
        $("#om").hide();
    });
    $("#swiss").click(function () {
        $("#portfolio").hide();
        $("#om").hide();
        $("#redesign").hide();
        $("#cph_dox").hide();
        $("#animation").hide();
        $("#kea_app").hide();
        $("#republikken").hide();
        $("#stilartsite").slideDown(2000);
        $("#knap").show();
    });
    $("#knap").click(function () {
        $("#knap").hide();
        $(".tilbageknap").hide();
        $("#portfolio").show();
    });
    $("#ingolfs").click(function () {
        $("#portfolio").hide();
        $("#om").hide();
        $("#stilartsite").hide();
        $("#cph_dox").hide();
        $("#animation").hide();
        $("#kea_app").hide();
        $("#republikken").hide();
        $("#redesign").slideDown(2000);
        $("#knap").show();
    });
    $("#knap").click(function () {
        $("#knap").hide();
        $(".tilbageknap").hide();
        $("#portfolio").show();
    });
    $("#cphdox").click(function () {
        $("#portfolio").hide();
        $("#om").hide();
        $("#stilartsite").hide();
        $("#redesign").hide();
        $("#animation").hide();
        $("#kea_app").hide();
        $("#republikken").hide();
        $("#cph_dox").slideDown(2000);
        $("#knap").show();
    });
    $("#knap").click(function () {
        $("#knap").hide();
        $(".tilbageknap").hide();
        $("#portfolio").show();
    });
    $("#privatsnak").click(function () {
        $("#portfolio").hide();
        $("#om").hide();
        $("#stilartsite").hide();
        $("#redesign").hide();
        $("#cph_dox").hide();
        $("#kea_app").hide();
        $("#republikken").hide();
        $("#animation").slideDown(2000);
        $("#knap").show();
    });
    $("#knap").click(function () {
        $("#knap").hide();
        $(".tilbageknap").hide();
        $("#portfolio").show();
    });
    $("#keafolio").click(function () {
        $("#portfolio").hide();
        $("#om").hide();
        $("#stilartsite").hide();
        $("#redesign").hide();
        $("#animation").hide();
        $("#cph_dox").hide();
        $("#republikken").hide();
        $("#kea_app").slideDown(2000);
        $("#knap").show();
    });
    $("#knap").click(function () {
        $("#knap").hide();
        $(".tilbageknap").hide();
        $("#portfolio").show();
    });
    $("#rcommunity").click(function () {
        $("#portfolio").hide();
        $("#om").hide();
        $("#stilartsite").hide();
        $("#redesign").hide();
        $("#animation").hide();
        $("#cph_dox").hide();
        $("#kea_app").hide();
        $("#republikken").slideDown(2000);
        $("#knap").show();
    });
    $("#knap").click(function () {
        $("#knap").hide();
        $(".tilbageknap").hide();
        $("#portfolio").show();
    });
});
