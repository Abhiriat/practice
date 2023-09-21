const t1 = gsap.timeline();
t1.from(
    ".container",{
        x:"-200%",
        duration:4
    }
)
t1.from(
    "#box1",{
        x:"-200%",
        duration:1,
        opacity:0,
        ease: "back"
    }
)
t1.from(
    "#box4",{
        x:"100%",
        opacity:0,
        ease:"back"

    }
)