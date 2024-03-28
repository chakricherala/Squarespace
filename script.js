let sq = gsap.timeline()

sq.from(".navbar img, .navbar .middle,.navbar .right",{
    y: -100,
    duration: 1,
    delay: 1,
    stagger: 0.2
})

sq.from("h1",{
    x: -100,
    opacity: 0,
    stagger: 0.2
})

sq.from(".bn",{
    y: 100,
    opacity: 0,
    stagger: 0.2
})

sq.from("h2",{
    y: 100,
    opacity: 0,
    stagger: 0.2
})

sq.from("#main img",{
    duration: 1,
    opacity: 0,
    scale: 0
})

sq.from("h3",{
    opacity: 0,
    stagger: 0.2
})

sq.to("h3",{
    y: 10,
    duration: 1,
    repeat: -1,
    yoyo:true
})