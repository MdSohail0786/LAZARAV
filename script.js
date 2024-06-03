// nav Animation
  var nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    var tl = gsap.timeline().to(".nav-btm", {
      height: "23vh",
    });
    tl.to(".nav-part2 h5", {
      display: "block",
    });
    tl.from(".nav-part2 h5 span", {
      y: 15,
      stagger: {
        amount: 0.5,
      },
    });
  });

  nav.addEventListener("mouseleave", function () {
    var tl = gsap.timeline();
    tl.to(".nav-part2 h5 span", {
      y: 0,
      stagger: {
        amount: 0.5,
      },
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to(".nav-btm", {
      height: 0,
      duration: 0.2,
    });
  });

//