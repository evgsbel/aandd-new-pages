import {S as e, A as t, N as r, P as o} from "./vendor.d82aaa9c.js";

!function () {
  const e = document.createElement("link").relList;
  if (!(e && e.supports && e.supports("modulepreload"))) {
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) t(e);
    new MutationObserver((e => {
      for (const r of e) if ("childList" === r.type) for (const e of r.addedNodes) "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
    })).observe(document, {childList: !0, subtree: !0})
  }

  function t(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = function (e) {
      const t = {};
      return e.integrity && (t.integrity = e.integrity), e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy), "use-credentials" === e.crossorigin ? t.credentials = "include" : "anonymous" === e.crossorigin ? t.credentials = "omit" : t.credentials = "same-origin", t
    }(e);
    fetch(e.href, t)
  }
}();
!function (s) {
  const i = s.querySelector(".sertificate-swiper");
  new e(i, {
    modules: [t, r, o],
    grabCursor: !0,
    progressbarOpposite: !0,
    watchSlidesProgress: !0,
    loop: !0,
    loopedSlides: 5,
    slidesPerView: "auto",
    centeredSlides: !0,
    navigation: {nextEl: ".certificate__slide-nav-btn_next", prevEl: ".certificate__slide-nav-btn_prev"},
    pagination: {
      el: ".swiper-pagination-progress",
      clickable: !0,
      renderBullet: function (e, s) {
        return '<span class="' + s + '"><div class="pagination__progress-bar"><div class="progress progress-striped"><div class="progress-bar"></div></div></div></span>'
      }
    },
    // autoplay: {delay: 3e3},
    on: {
      progress(e) {
        const t = e.slides.length;
        for (let r = 0; r < e.slides.length; r += 1) {
          const o = e.slides[r], s = e.slides[r].progress, i = Math.abs(s);
          let n = 1;
          i > 1 && (n = .3 * (i - 1) + 1);
          const l = o.querySelectorAll(".carousel-slider-animate-opacity"), a = s * n * 28 + "%", c = 1 - .2 * i,
            d = t - Math.abs(Math.round(s));
          o.style.transform = `translateX(${a}) scale(${c})`, o.style.zIndex = d, o.style.opacity = i > 3 ? 0 : 1, l.forEach((e => {
            e.style.opacity = 1 - i / 3
          }))
        }
      }, setTransition(e, t) {
        for (let r = 0; r < e.slides.length; r += 1) {
          const o = e.slides[r], s = o.querySelectorAll(".carousel-slider-animate-opacity");
          o.style.transitionDuration = `${t}ms`, s.forEach((e => {
            e.style.transitionDuration = `${t}ms`
          }))
        }
      }
    }
  })
}(document.querySelector(".carousel-slider"));



$(() => {
  const swiper2 = new Swiper(".leadership-content-slider", {
    speed: 800,
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {nextEl: ".leadership__slide-nav-btn_next", prevEl: ".leadership__slide-nav-btn_prev"},
  });

  const swiper = new Swiper(".leadership-slider", {
    effect: "coverflow",
    grabCursor: true,
    spaceBetween: 60,
    centeredSlides: true,
    slidesPerView: "auto",
    navigation: {nextEl: ".leadership__slide-nav-btn_next", prevEl: ".leadership__slide-nav-btn_prev"},
    thumbs: {
      swiper: swiper2
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 1,
      slideShadows: false,
    },

  });
});






