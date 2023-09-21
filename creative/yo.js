gsap.registerPlugin(ScrollTrigger);
const t1=gsap.timeline();
t1.to(".square",{x:500,duration:5})
.to(".square",{y:500,duration:5})
.to(".square",{rotate:90,repeat:2})

ScrollTrigger.create({
  animation:t1,
  trigger:".square",
  start:"top center",
  markers:true,
  scrub:5
})
// ScrollTrigger.create({
//   trigger:".div1",
//   start:"top 6%",
//   onUpdate:(self)=>console.log(self),


  
//   // markers:true,
//   toggleClass:{targets:"nav",className:"nav-active"}
// })
// gsap.to(".square",{
//     x:500,
//     duration:2
// })
// gsap.to(".square",{
//     y:200,
//     duration:3,
//     delay:2

// })
// gsap.to(".square",{
//     x:0,
//     duration:2,
//     delay:5

// })
// const tl=gsap.timeline({
//     scrollTrigger:{
//         trigger:".box",
//         markers:true,
//         start:"center 30%",
//         end:"center 30%",
//         scrub:10
//         // toggleActions:"restart reverse none none"
//     }
// });
// tl.to(".square",{    x:500,duration:2})
//   .to(".square",{y:500,duration:2})
//   .to(".square",{x:0,duration:2})
//   .to(".square",{y:0,duration:2})


// gsap.to(".square",{
//     x:700,
//     duration:3,
//     scrollTrigger:{
//         trigger:".square2",
//         start:"top 80%",
//         end:"top 30%",
//         scrub:4,
//         toggleActions:"restart  reverse    none           reset",
//         pin:".square",
//         pinSpacing:true,
     
//         markers:true,
       
//     }
// })
