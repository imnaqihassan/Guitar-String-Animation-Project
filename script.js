

var path=`M 0 80 Q 90 80 600 80`

var initialValue=`M 0 80 Q 90 80 600 80`


var main=document.querySelector("#main")
var img=document.querySelector("#img")

img.addEventListener("mousemove",(dets)=>{
   path=`M 0 80 Q 0 ${dets.clientY} 600 80`

   gsap.to("svg path",{
    attr:{d:path},
    duration:0.2,
    ease:"power2.out"
   })

})

img.addEventListener("mouseleave",()=>{
    gsap.to("svg path",{
        attr:{d:initialValue},
        duration:2,
        ease:"elastic.out(1,0.1)"
       })
})

