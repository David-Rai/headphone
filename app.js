

// let tl=gsap.timeline();

// tl.from("nav li",{
//     opacity:0,
//     y:50,
//     duration:0.6,
//     stagger:0.2
// })

// tl.from(".txt h4,.txt h1,.txt p,.txt button",{
//     opacity:0,
//     x:-150,
//     duration:0.6,
//     stagger:0.2
// })

// tl.from(".txt .types img",{
//     opacity:0,
//     x:-150,
//     duration:0.6,
//     stagger:0.2
// })

// tl.from(".p1c img",{
//     opacity:0,
//    y:100,
//     duration:0.8
// })

// tl.from(".p1right h1,.p1right h3",{
//     opacity:0,
//     x:-150,
//     duration:0.8,
//     stagger:0.2
// })

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});