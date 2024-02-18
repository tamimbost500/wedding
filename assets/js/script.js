(function ($) {


  // Slider Home 3 Instragram Gallery
  $(document).ready(function () {
    var swiper = new Swiper(".home-3-instragram-slider", {
      slidesPerView: 9,
      centeredSlides: false,
      spaceBetween: 25,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        1200: {
          slidesPerView: 9,
          spaceBetween: 25,
        },
        1085: {
          slidesPerView: 5,
          spaceBetween: 6,
        },
        767: {
          slidesPerView: 5,
          spaceBetween: 6,
        },
        766: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        320: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
      },
    });
  });
  // End Home 3 Instragram Gallery

  // Start Home 1 Gallery Slider
  $(document).ready(function () {
    var swiper = new Swiper(".home-1-gallery", {
      direction: "vertical",
      slidesPerView: 1,
      mousewheel: true,
      loop: true,
      parallax: true,
      observer: true,
      speed: 1000,
      // effect: 'creative',
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      on: {
        slideChangeTransitionStart: function () {
          gsap.to(".gallery-home-1-content", {
            duration: 1,
            y: function (index, target) {
              return -target.offsetHeight * this.activeIndex;
            },
            ease: "power1.inOut",
          });
        },
      },
      breakpoints: {
        0: {
          direction: "horizontal",
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' + className + '">' + (index + 1) + "</span>"
              );
            },
          },
        },
        1200: {
          direction: "horizontal",
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' + className + '">' + (index + 1) + "</span>"
              );
            },
          },
        },
        1201: {
          direction: "vertical",
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' + className + '">' + (index + 1) + "</span>"
              );
            },
          },
        },
      },
    });
  });
  // End Home 1 Gallery Slider

  // Start Home 1 Testimonial Slider
  $(document).ready(function () {
    var swiper = new Swiper(".home-1-testimonial-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1500,
      loop: true,
      // grabCursor: true,
      autoplay: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: function (number) {
          return number;
        },
        formatFractionTotal: function (number) {
          return number;
        },
      },
    });
  });
  // End Home 1 Testimonial Slider

  // Start Home Testimonial Slider
  $(document).ready(function () {
    var swiper = new Swiper(".home-testimonial-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1500,
      loop: true,
      // grabCursor: true,
      autoplay: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: function (number) {
          return number;
        },
        formatFractionTotal: function (number) {
          return number;
        },
      },
    });
  });
  // End Home Testimonial Slider

  // Start Home 3 Hero Slider
  $(document).ready(function () {
    var swiper = new Swiper(".home-3-hero-slider", {
      slidesPerView: 1,
      effect: "fade",
      speed: 2000,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: function (number) {
          return number;
        },
        formatFractionTotal: function (number) {
          return number;
        },
      },
    });
  });
  // End Home 3 Hero Slider

  // Start Home 2 Hero Slider
  $(document).ready(function () {
    var swiper = new Swiper(".hero-home-2-slider", {
      slidesPerView: 1,
      spaceBetween: 0,
      // slidesPerGroup: 1,
      // speed: 1300,
      speed: 1200,
      grabCursor: true,
      mousewheel: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
      },
      pagination: {
        el: ".swiper-pagination1",
        // type:"progressbar"
      },
    });
  });
  // End Home 3 Hero Slider

  // Start Home 2 Video Countdown
  $(document).ready(function () {
    (function () {
      const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

      //I'm adding this section so I don't have to keep updating this pen every year :-)
      //remove this if you don't need it
      let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "09/30/",
        birthday = dayMonth + yyyy;

      today = mm + "/" + dd + "/" + yyyy;
      if (today > birthday) {
        birthday = dayMonth + nextYear;
      }
      //end

      const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {
          const now = new Date().getTime(),
            distance = countDown - now;

          (document.getElementById("days").innerText = Math.floor(
            distance / day
          )),
            (document.getElementById("hours").innerText = Math.floor(
              (distance % day) / hour
            )),
            (document.getElementById("minutes").innerText = Math.floor(
              (distance % hour) / minute
            )),
            (document.getElementById("seconds").innerText = Math.floor(
              (distance % minute) / second
            ));

          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my birthday!";
            document.getElementById("countdown").style.display = "none";
            // document.getElementById("content").style.display = "inlineBlock";
            clearInterval(x);
          }
          //seconds
        }, 0);
    })();
  });
  // End Home 2 Video Countdown

  // Start Home 2 Gallery Popup
  $(".popup-image").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  // End Home 2 Gallery Popup

  // Start Home 2 Contact Datepicker
  $(document).ready(function () {
    $("#datepicker").datepicker();
  });
  // End Home 2 Contact Datepicker


  // Start Home 2 Video Popup
  $(".popup-video").magnificPopup({
    type: "iframe",
  });
  // End Home 2 Video Popup

  // Start Mobile Menu
  $(".menu-bar a").on("click", function () {
    $(".mobile-menu").addClass("active");
  });

  $(".mobile-menu .close").on("click", function () {
    $(".mobile-menu").removeClass("active");
  });

  $(".mobile-menu ul li.has-submenu a").each(function () {
    $(this).on("click", function () {
      $(this).siblings(".submenu-wrapper").slideToggle();
      $(".mobile-menu ul li.has-submenu a i").toggleClass("icons-rotet");
    });
  });
  // End Mobile Menu

  // Start Header Sticky Menu
  $(document).ready(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop()) {
        $("header").addClass("header-sticky");
      } else {
        $("header").removeClass("header-sticky");
      }
    });
  });
  // End Header Sticky Menu

  //////////////////////// Cursor Animations/////////////////////////////

  function mousemoveHandler(e) {
    try {
      const target = e.target;

      let tl = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        },
      });
      let t2 = gsap.timeline({
        defaults: {
          x: e.clientX,
          y: e.clientY,
        },
      });

      // Main Cursor Moving
      tl.to(".cursor1", {
        ease: "power2.out",
      }).to(
        ".cursor2",
        {
          ease: "power2.out",
        },
        "-=0.4"
      );
    } catch (error) {
      console.log(error);
    }
  }
  // gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);
  document.addEventListener("mousemove", mousemoveHandler);

  // smooth scroll
  $(document).ready(function (){
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollSmoother.create({
    smooth: 5, // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  });
  });



  // Title Animation Home 
  let splitTitleLines = gsap.utils.toArray(".tp_title_slideup");

  splitTitleLines.forEach(splitTextLine => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: 'top 90%',
        end: 'bottom 60%',
        scrub: false,
        markers: false,
        toggleActions: 'play none none none'
      }
    });

    const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
    gsap.set(splitTextLine, { perspective: 400 });
    itemSplitted.split({ type: "lines" })
    tl.from(itemSplitted.lines, { duration: 1, delay: 0.3, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
  });

  // Start Image Zoom Animation Hero Text Image
  gsap.set(".animation_image_zoom img", { opacity: 0, scale: 0.5 });

  gsap.to(".animation_image_zoom img", {
    opacity: 1,
    scale: 1,
    x: 20,
    ease: "power2.out",
    duration: 2.5,
    stagger: {
      each: 0.3
    }
  })
  // End Image Zoom Animation Hero Text Image

    // Start Image Zoom Animation Hero Text Image
    gsap.set(".home_1-testimonial-img", { opacity: 0, scale: 0.5 });

    gsap.to(".home_1-testimonial-img", {
      opacity: 1,
      scale: 1,
      x: 20,
      ease: "power2.out",
      duration: 2.5,
      stagger: {
        each: 0.3
      }
    })
    // End Image Zoom Animation Hero Text Image

  // Start Element Moving Animation
  gsap.from(".hero-home-1-right-img", {
    opacity: 0, 
    x: 300, 
    duration: 1,
    ease: "power2.out",
  });
  gsap.from(".hero-home-1-left-banner", {
    opacity: 0, 
    y: 300, 
    duration: 1,
    ease: "power2.out",
  });
  // // Text Animation Home 2


  let splitTextLines = gsap.utils.toArray(".text-animation-pera");

  splitTextLines.forEach(splitTextLine => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: splitTextLine,
        start: 'top 90%',
        duration: 2,
        end: 'bottom 60%',
        scrub: false,
        markers: false,
        toggleActions: 'play none none none'
      }
    });

    const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
    gsap.set(splitTextLine, { perspective: 400 });
    itemSplitted.split({ type: "lines" })
    tl.from(itemSplitted.lines, { duration: 1, delay: 0.5, opacity: 0, rotationX: -80, force3D: true, transformOrigin: "top center -50", stagger: 0.1 });
  });

  // Start Fade Bottom 1 Animation
  gsap.set(".fade_bottom_1", { y: 90, opacity: 0 });

  const fadeArray = gsap.utils.toArray(".fade_bottom_1")
  fadeArray.forEach((item, i) => {
    let fadeTl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "right center+=200",
      }
    })
    fadeTl.to(item, {
      y: 0,
      opacity: 1,
      ease: "power3.out",
      duration: 1,
    })
  })
  // End Fade Bottom 1 Animation



  // let homeAgency = gsap.timeline();
  // // Charchater Come long Animation
  // let hero__title = document.querySelector(".heading__animation");
  // // let hero__subtitle = document.querySelector(".hero__sub-title");
  // let split_hero__title = new SplitText(hero__title, {
  //   type: "chars"
  // });
  // homeAgency.from(split_hero__title.chars, {
  //   duration: 1,
  //   x: 70,
  //   autoAlpha: 0,
  //   stagger: 0.03,
  // });
  // homeAgency.from(
  //   split_hero__subtitle.words, {
  //     duration: 1,
  //     x: 50,
  //     autoAlpha: 0,
  //     stagger: 0.01
  //   },
  //   "-=1"
  // );



new WOW().init();
})(jQuery);
