$(document).ready(function() {


    // NAV ON / OFF 설정

    $(".icon_list").on("click", function() {
        $("nav").css("left", 0);
    });

    $(".icon_close").on("click", function() {
        $("nav").css("left", "-100%");
    });


    // SECTION1 의 HIGHLIGHT 부분 SCROLL 시 HIGHLIGHT BEFORE ADD / REMOVE 설정
    
    $(window).on("scroll", function() {
        const scr = $(window).scrollTop();
        const winHeight = $(window).height();
        const trigger1 = $(".highlight1").offset().top - winHeight / 2;
        const trigger2 = $(".highlight2").offset().top - winHeight / 2;
        if(scr >= trigger1 && scr < trigger2 + winHeight / 2) {
            $(".highlight1").addClass("on");
        } else if(scr <= trigger1 + 100) {
            $(".highlight1").removeClass("on");
        } else if(scr >= trigger1 + winHeight) {
            $(".highlight1").removeClass("on");
        }
        if(scr >= trigger2 && scr < trigger2 + winHeight / 2) {
            $(".highlight2").addClass("on");
        } else if(scr <= trigger2 + 100) {
            $(".highlight2").removeClass("on");
        } else if(scr >= trigger2 + winHeight / 2) {
            $(".highlight2").removeClass("on");
        }

    });


    // 베스트셀러 M 부분 각 LIST 의 PLUS MOUSEENTER / LEAVE 설정

        $(".plus").on("mouseenter", function() {
            $(this).animate({rotate:"45deg"});
        });

        $(".plus").on("mouseleave", function() {
            $(this).animate({rotate:"0deg"});
        });

        $(".plus1").on("mouseenter", function() {
            $(".best1_img").attr("src", "./images/best1_hover.jpg");
        });

        $(".plus1").on("mouseleave", function() {
            $(".best1_img").attr("src", "./images/best1.jpg");
        });

        $(".plus2").on("mouseenter", function() {
            $(".best2_img").attr("src", "./images/best2_hover.jpg");
        });

        $(".plus2").on("mouseleave", function() {
            $(".best2_img").attr("src", "./images/best2.jpg");
        });

        $(".plus3").on("mouseenter", function() {
            $(".best3_img").attr("src", "./images/best3_hover.jpg");
        });

        $(".plus3").on("mouseleave", function() {
            $(".best3_img").attr("src", "./images/best3.jpg");
        });

        $(".plus4").on("mouseenter", function() {
            $(".best4_img").attr("src", "./images/best4_hover.jpg");
        });

        $(".plus4").on("mouseleave", function() {
            $(".best4_img").attr("src", "./images/best4.jpg");
        });


    // SWIPER 메인비쥬얼

    const swiper_v = new Swiper(".mainvisual", {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: {
            delay: 2000,
        },
    });


    // SWIPER 신메뉴

    const swiper_n = new Swiper(".new", {
        slidesPerView: 1,
        spaceBetween: 10,
        on : {
            realIndexChange : function() {
                $(".new_list .n_list li").removeClass("on");
                $(".new_list .n_list li").eq(this.realIndex).addClass("on");
            }
        },
    });


    // 신메뉴의 각 LIST 클릭 시, 각 LIST의 SWIPER ON

    $(".n_list > li").on("click", function() {
        const i = $(this).index();
        swiper_n.slideTo(i);
    });


    // SWIPER 베스트셀러

    const swiper_b = new Swiper(".best", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
        },
        on : {
            realIndexChange : function() {
                $(".best_list .b_list li").removeClass("on");
                $(".best_list .b_list li").eq(this.realIndex).addClass("on");
            }
        }

    });


    // 베스트셀러의 각 LIST 클릭 시, 각 LIST의 SWIPER ON

    $(".b_list > li").on("click", function() {
        const j = $(this).index();
        swiper_b.slideTo(j);
    });
    
    const swiper_e2 = new Swiper(".event2", {
        slidesPerView: 1,
        effect: "fade",
    });


    // SWIPER 이벤트

    const swiper_e = new Swiper(".event", {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        autoplay: {
            delay: 2000
        },
        navigation: {
            nextEl: ".next",
            prevEl: ".prev"
        },
        pagination: {
            el: ".section4 .control .number",
            type: "fraction",
        },
        thumbs: {
            swiper: swiper_e2,
        },
    });


    // SWIPER 갤러리 M 부분

    const swiper_g_m = new Swiper(".gallery_m", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "2",
        coverflowEffect: {
            rotate: 40,
            stretch: 50,
            depth: 50,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });


    // SWIPER 갤러리 PC 부분

    const swiper_g_pc = new Swiper(".gallery_pc", {
        slidesPerView: 3,
        spaceBetween: 20,
    });


    // AOS

    AOS.init();


    // FOOTER SCROLL-TOP

    $('.scroll').on('click', function() {
        $('html, body').animate({scrollTop: '0'}, 680);
      });

});