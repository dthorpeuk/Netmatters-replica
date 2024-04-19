$(".slides").slick({
dots:true,
autoplay: true,
autoplaySpeed: 2000,
arrows: false,
draggable:true,
pauseOnHover:true,
pauseOnDotsHover:true

});
$(".ticker1").slick({
    //dots:true,
    slidesToShow: 10,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    draggable:false,
    pauseOnHover:true,
pauseOnDotsHover:true

    
    });
    $(".ticker2").slick({
        //dots:true,
        slidesToShow: 12,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        draggable:false,
        pauseOnHover:true,
pauseOnDotsHover:true
        
    
        
        });
//$('header, .nav').sticky();
//$('.header-inner').sticky();
//$('.nav-bar').sticky({topSpacing: "110px"});
window.onscroll = function(e) {
    //console.log(this.oldScroll > this.scrollY);
    let elementHeader = document.querySelector(".sticky-hidden");
   
let upNotDown = this.oldScroll > this.scrollY;
let threshold = this.scrollY > 300;
console.log(this.scrollY);
if(upNotDown && threshold){
    //console.log(true);
    elementHeader.classList.add("sticky");
}
else
{
   // console.log(false);
   elementHeader.classList.remove("sticky");
}
this.oldScroll = this.scrollY;
}