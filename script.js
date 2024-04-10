function follower(){

    var page1Content = document.querySelector(".page1-cont")
    var cursor = document.querySelector(".follower")
    
    page1Content.addEventListener("mousemove",function(dets){
        gsap.to(cursor,{
            x : dets.x,
            y : dets.y
    
        })
    })
    
    page1Content.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale: 1
        })
    })
    
    page1Content.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:0
        })  
    })
}

follower();

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        }
      });
}

swiper();

function textanimation(){
    gsap.from(" .page2 .bottom p , .top h3 ",{
        scrollTrigger : ".page2",
        y:60,
        duration:1,
        opacity : 0,
        marker: true,        
    })
    
       
}
textanimation();

function textanimation2(){
    gsap.from(" .page3-bottom .bottom p ",{
        scrollTrigger: {
            trigger: ".page3-bottom",
            scroller : "body",
            start : "top 80%", 
            // scrub : true
        },
        y:60,
        duration:1,
        opacity : 0,
        })
}
textanimation2();


var tl = gsap.timeline();

tl.from('.intro h3',{
    x:40,
    opacity:0,
    stagger: 0.01,
})

tl.to(".intro h3",{
    opacity:0,
    x:-10,
    duration:1,
    stagger:0.1
})

tl.to(".intro",{
    opacity:0
})

tl.to('h1 span',{
        y: -370 ,
        duration: 1,
        stagger : .2,
 })

tl.to(".intro",{
    display: "none" 
})
