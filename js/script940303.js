gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll(".up3").forEach((item, index) => {
    gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top center",
        toggleActions: "restart none reverse reset", // 스크롤을 위로 올릴 때 애니메이션을 되감기(reverse)하도록 설정
        invalidateOnRefresh: true
      }
    })

  .fromTo(
    item,
    {
      autoAlpha: 0, // 처음에 투명도를 0으로 설정
      yPercent: 60
    },
    {
      autoAlpha: 1, // 애니메이션이 진행됨에 따라 투명도를 1로 변경하여 나타나도록 함
      yPercent: 0,
      duration: 1, // 애니메이션 지속 시간을 1로 줄임
      stagger: 0.2,
      ease: "power2.out" // ease를 power2.out으로 변경하여 더 부드럽게 만듦
    }
  );
});







  gsap.registerPlugin(ScrollTrigger);

  document.querySelectorAll(".up").forEach((item, index) => {
    gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top bottom",
        toggleActions: "restart none reverse reset", // 스크롤을 위로 올릴 때 애니메이션을 되감기(reverse)하도록 설정
        invalidateOnRefresh: true
      }
    })

  .fromTo(
    item,
    {
      autoAlpha: 0, // 처음에 투명도를 0으로 설정
      yPercent: 60
    },
    {
      autoAlpha: 1, // 애니메이션이 진행됨에 따라 투명도를 1로 변경하여 나타나도록 함
      yPercent: 0,
      duration: 1, // 애니메이션 지속 시간을 1로 줄임
      stagger: 0.2,
      ease: "power2.out" // ease를 power2.out으로 변경하여 더 부드럽게 만듦
    }
  );
});
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".up2").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      toggleActions: "restart none reverse reset", // 스크롤을 위로 올릴 때 애니메이션을 되감기(reverse)하도록 설정
      invalidateOnRefresh: true
    }
  })

.fromTo(
  item,
  {
    autoAlpha: 0, // 처음에 투명도를 0으로 설정
    yPercent: 60
  },
  {
    autoAlpha: 1, // 애니메이션이 진행됨에 따라 투명도를 1로 변경하여 나타나도록 함
    yPercent: 0,
    duration: 2, // 애니메이션 지속 시간을 1로 줄임
    stagger: 0.2,
    ease: "power2.out" // ease를 power2.out으로 변경하여 더 부드럽게 만듦
  }
);
});





gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".left").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top center",
      toggleActions: "restart none reverse reset", // 스크롤을 위로 올릴 때 애니메이션을 되감기(reverse)하도록 설정
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      autoAlpha: 0,
      xPercent: -100 // 왼쪽에서 오른쪽으로 슬라이드되도록 xPercent 속성을 추가하고 시작 위치를 -100%로 설정
    },
    {
      autoAlpha: 1,
      xPercent: 0, // 슬라이드가 완료되면 xPercent를 0으로 설정하여 원래 위치로 돌아오도록 함
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    }
  );
});

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".left2").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      toggleActions: "restart none reverse reset", // 스크롤을 위로 올릴 때 애니메이션을 되감기(reverse)하도록 설정
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      autoAlpha: 0,
      xPercent: -100 // 왼쪽에서 오른쪽으로 슬라이드되도록 xPercent 속성을 추가하고 시작 위치를 -100%로 설정
    },
    {
      autoAlpha: 1,
      xPercent: 0, // 슬라이드가 완료되면 xPercent를 0으로 설정하여 원래 위치로 돌아오도록 함
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    }
  );
});


gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".right").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top center",
      toggleActions: "restart none reverse reset", // 스크롤을 위로 올릴 때 애니메이션을 되감기(reverse)하도록 설정
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      autoAlpha: 0,
      xPercent: 100 // 오른쪽에서 왼쪽으로 슬라이드되도록 xPercent 속성을 추가하고 시작 위치를 100%로 설정
    },
    {
      autoAlpha: 1,
      xPercent: 0, // 슬라이드가 완료되면 xPercent를 0으로 설정하여 원래 위치로 돌아오도록 함
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    }
  );
});







gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".rotation").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      toggleActions: "restart none reverse reset", // 스크롤을 위로 올릴 때 애니메이션을 되감기(reverse)하도록 설정
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      autoAlpha: 0,
      scale: 1.5, // 시작할 때 크기를 1.5배로 설정
    },
    {
      autoAlpha: 1,
      scale: 1, // 원래 크기로 줌인
      duration: 1.6, // 애니메이션 지속 시간을 1.5초로 설정
      ease: "power4.out" // 부드러운 애니메이션 이징
    }
  );
});


gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".fade").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      toggleActions: "restart none reverse reset", // 스크롤을 위로 올릴 때 애니메이션을 되감기(reverse)하도록 설정
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      autoAlpha: 0, // 처음에는 투명하게
      y: 50 // 아래로 이동
    },
    {
      autoAlpha: 1, // 서서히 나타나기
      y: 0, // 원래 위치로 이동
      duration: 1.2, // 1.6초 동안 애니메이션
      ease: "power2.out" // 부드러운 애니메이션 이징
    }
  );
});



gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".big").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      toggleActions: "restart none reverse reset", // 스크롤을 위로 올릴 때 애니메이션을 되감기(reverse)하도록 설정
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      scale: 0.5, // 작아진 크기로 시작
      opacity: 0 // 처음에는 투명도를 0으로 설정하여 안 보이도록 함
    },
    {
      scale: 1, // 원래 크기로 확대
      opacity: 1, // 투명도 1로 설정하여 나타나도록 함
      duration: 1.6, // 1.6초 동안 애니메이션
      ease: "power2.out" // 부드러운 애니메이션 이징
    }
  );
});




gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".big1").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      toggleActions: "restart none reverse reset", // 스크롤을 위로 올릴 때 애니메이션을 되감기(reverse)하도록 설정
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      scale: 0.5, // 작아진 크기로 시작
      opacity: 0 // 처음에는 투명도를 0으로 설정하여 안 보이도록 함
    },
    {
      scale: 1, // 원래 크기로 확대
      opacity: 1, // 투명도 1로 설정하여 나타나도록 함
      duration: 1.6, // 1.6초 동안 애니메이션
      ease: "power2.out" // 부드러운 애니메이션 이징
    }
  );
});


gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".slide").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      toggleActions: "restart none reverse reset", // 스크롤을 위로 올릴 때 애니메이션을 되감기(reverse)하도록 설정
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      x: "100%", // 오른쪽으로 이동
      opacity: 0 // 처음에는 투명도를 0으로 설정하여 안 보이도록 함
    },
    {
      x: 0, // 원래 위치로 이동
      opacity: 1.5, // 투명도 1로 설정하여 나타나도록 함
      duration: 1.6, // 1.6초 동안 애니메이션
      ease: "power2.out" // 부드러운 애니메이션 이징
    }
  );
});



// slide

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".slide").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      toggleActions: "restart none reverse reset", // 스크롤을 위로 올릴 때 애니메이션을 되감기(reverse)하도록 설정
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      x: "100%", // 오른쪽으로 이동
      opacity: 0 // 처음에는 투명도를 0으로 설정하여 안 보이도록 함
    },
    {
      x: 0, // 원래 위치로 이동
      opacity: 1.5, // 투명도 1로 설정하여 나타나도록 함
      duration: 1, // 1.6초 동안 애니메이션
      ease: "power2.out" // 부드러운 애니메이션 이징
    }
  );
});


gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".slide2").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top center",
      toggleActions: "restart none reverse reset", // 스크롤을 위로 올릴 때 애니메이션을 되감기(reverse)하도록 설정
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      x: "100%", // 오른쪽으로 이동
      opacity: 0 // 처음에는 투명도를 0으로 설정하여 안 보이도록 함
    },
    {
      x: 0, // 원래 위치로 이동
      opacity: 1.5, // 투명도 1로 설정하여 나타나도록 함
      duration: 1.6, // 1.6초 동안 애니메이션
      ease: "power2.out" // 부드러운 애니메이션 이징
    }
  );
});

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".slide2").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      toggleActions: "restart none reverse reset", // 스크롤을 위로 올릴 때 애니메이션을 되감기(reverse)하도록 설정
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      x: "100%", // 오른쪽으로 이동
      opacity: 0 // 처음에는 투명도를 0으로 설정하여 안 보이도록 함
    },
    {
      x: 0, // 원래 위치로 이동
      opacity: 1.5, // 투명도 1로 설정하여 나타나도록 함
      duration: 1.6, // 1.6초 동안 애니메이션
      ease: "power2.out" // 부드러운 애니메이션 이징
    }
  );
});


gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".slide3").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      toggleActions: "restart none reverse reset", // 스크롤을 위로 올릴 때 애니메이션을 되감기(reverse)하도록 설정
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      x: "100%", // 오른쪽으로 이동
      opacity: 0 // 처음에는 투명도를 0으로 설정하여 안 보이도록 함
    },
    {
      x: 0, // 원래 위치로 이동
      opacity: 1.5, // 투명도 1로 설정하여 나타나도록 함
      duration: 1.8, // 1.6초 동안 애니메이션
      ease: "power2.out" // 부드러운 애니메이션 이징
    }
  );
});





gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".slideup").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      toggleActions: "restart none reverse reset", // 스크롤을 위로 올릴 때 애니메이션을 되감기(reverse)하도록 설정
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      y: "100%", // 아래로 이동
      opacity: 0 // 처음에는 투명도를 0으로 설정하여 안 보이도록 함
    },
    {
      y: 0, // 원래 위치로 이동
      opacity: 1.5, // 투명도 1로 설정하여 나타나도록 함
      duration: 3, // 1.6초 동안 애니메이션
      ease: "power2.out" // 부드러운 애니메이션 이징
    }
  );
});


gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".ZZANG").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      toggleActions: "restart none reverse reset",
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      y: -300, // 시작 위치를 더 위로 조정하여 하늘을 날아오듯한 효과를 줍니다.
      scale: 0.5,
      opacity: 0,
      rotation: -10,
      filter: "drop-shadow(0 0 10px rgba(0,0,0,0.2))"
    },
    {
      y: 0,
      scale: 1,
      opacity: 1,
      rotation: 0,
      duration: 1.6,
      ease: "power3.out",
      delay: index * 0.4
    }
  );
});


gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".left3").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      toggleActions: "restart none reverse reset", // 스크롤을 위로 올릴 때 애니메이션을 되감기(reverse)하도록 설정
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      autoAlpha: 0,
      xPercent: -100 // 왼쪽에서 오른쪽으로 슬라이드되도록 xPercent 속성을 추가하고 시작 위치를 -100%로 설정
    },
    {
      autoAlpha: 1,
      xPercent: 0, // 슬라이드가 완료되면 xPercent를 0으로 설정하여 원래 위치로 돌아오도록 함
      duration: 1.3,
      stagger: 0.2,
      ease: "power2.out"
    }
  );
});


gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".left4").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      toggleActions: "restart none reverse reset", // 스크롤을 위로 올릴 때 애니메이션을 되감기(reverse)하도록 설정
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      autoAlpha: 0,
      xPercent: -100 // 왼쪽에서 오른쪽으로 슬라이드되도록 xPercent 속성을 추가하고 시작 위치를 -100%로 설정
    },
    {
      autoAlpha: 1,
      xPercent: 0, // 슬라이드가 완료되면 xPercent를 0으로 설정하여 원래 위치로 돌아오도록 함
      duration: 1.5,
      stagger: 0.2,
      ease: "power2.out"
    }
  );
});

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".left5").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      toggleActions: "restart none reverse reset", // 스크롤을 위로 올릴 때 애니메이션을 되감기(reverse)하도록 설정
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      autoAlpha: 0,
      xPercent: -100 // 왼쪽에서 오른쪽으로 슬라이드되도록 xPercent 속성을 추가하고 시작 위치를 -100%로 설정
    },
    {
      autoAlpha: 1,
      xPercent: 0, // 슬라이드가 완료되면 xPercent를 0으로 설정하여 원래 위치로 돌아오도록 함
      duration: 1.8,
      stagger: 0.2,
      ease: "power2.out"
    }
  );
});
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".left5").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      toggleActions: "restart none reverse reset",
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      autoAlpha: 0,
      yPercent: 100 // 아래에서 위로 슬라이드되도록 yPercent 속성을 추가하고 시작 위치를 100%로 설정
    },
    {
      autoAlpha: 1,
      yPercent: 0, // 슬라이드가 완료되면 yPercent를 0으로 설정하여 원래 위치로 돌아오도록 함
      duration: 2,
      stagger: 0.2,
      ease: "power2.out"
    }
  );
});








gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".left6").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "center center", // 중앙에서 중앙으로 스크롤시 애니메이션 작동
      toggleActions: "restart none reverse reset",
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      autoAlpha: 0,
      xPercent: -100
    },
    {
      autoAlpha: 1,
      xPercent: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    }
  );
});




gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".left7").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top bottom", // 중앙에서 중앙으로 스크롤시 애니메이션 작동
      toggleActions: "restart none reverse reset",
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      autoAlpha: 0,
      xPercent: -100
    },
    {
      autoAlpha: 1,
      xPercent: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    }
  );
});









gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".slide-right").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top bottom",
      toggleActions: "restart none reverse reset", // 스크롤을 위로 올릴 때 애니메이션을 되감기(reverse)하도록 설정
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      x: "-100%", // 왼쪽으로 이동
      opacity: 0 // 처음에는 투명도를 0으로 설정하여 안 보이도록 함
    },
    {
      x: 0, // 원래 위치로 이동
      opacity: 1, // 투명도 1로 설정하여 나타나도록 함
      duration: 1, // 1.6초 동안 애니메이션
      ease: "power2.out" // 부드러운 애니메이션 이징
    }
  );
});


gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".slide-right2").forEach((item, index) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top center",
      toggleActions: "restart none reverse reset", // 스크롤을 위로 올릴 때 애니메이션을 되감기(reverse)하도록 설정
      invalidateOnRefresh: true
    }
  })
  .fromTo(
    item,
    {
      x: "-100%", // 왼쪽으로 이동
      opacity: 0 // 처음에는 투명도를 0으로 설정하여 안 보이도록 함
    },
    {
      x: 0, // 원래 위치로 이동
      opacity: 1, // 투명도 1로 설정하여 나타나도록 함
      duration: 1, // 1.6초 동안 애니메이션
      ease: "power2.out" // 부드러운 애니메이션 이징
    }
  );
});
