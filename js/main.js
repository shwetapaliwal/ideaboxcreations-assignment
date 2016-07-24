$(window).scroll(function(){
    var $this = $(this);
    var headerCtn = $(".collage-main-header");
    if($this.scrollTop() > 140){
        headerCtn.addClass('fixed');
    }else{
        headerCtn.removeClass('fixed');
    }
});

$("button.mobile-menu-drag-btn").on("click",function (event) {
    event.preventDefault();
    var $this = $(this);
    var mobileNav = $("nav.fixed-nav-mobile");
    var body = $('body');
    if(body.hasClass('push-left')){
        body.removeClass('push-left');
        mobileNav.hide();
    }else{
        body.addClass('push-left');
        mobileNav.show();
    }
});