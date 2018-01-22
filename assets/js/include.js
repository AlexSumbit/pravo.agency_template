
$(document).ready(function(){

    ////// section-top

    // adaptive menu
    $(".js_btn-menu").click(function(){
        $(".js_nav").toggleClass("nav-opened");
        $(".js_btn-menu").toggleClass("btn-menu-opened");
    });


    ////// section-services

    // for correct positioning order-screen
    $(".js_services-item").each(function(){
        $(this).find(".order").addClass($(this).data("class"));
    });

    $(".js_services-item").click(function(e){

        var hasClass = $(this).hasClass("services-item-active");

        $(".js_services-item").removeClass("services-item-active");
        
        if(!hasClass) $(this).addClass("services-item-active");
    });


    ////// accordeon
    $(".js_accordeon .accordeon-header").click(function(e){
        $(this).parent().toggleClass("accordeon-opened");
        $(this).parent().find(".accordeon-content").slideToggle(300);
    });
    
});