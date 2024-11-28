$(function () {
  let storyswiper = new Swiper('.aboutslide', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var swiper = new Swiper(".strength-cards", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $('.banner .txtAni').simplyScroll({
    speed : 1,
    direction: 'forwards',
    pauseOnHover: true,
    pauseOnTouch: false,
  });
  

  // document.querySelector('.playlist').addEventListener('click', function() {
  //   var audio = document.getElementById('myAudio');
  //   if (audio.paused) {
  //     audio.play(); // 노래 재생
  //   } else {
  //     audio.pause(); // 노래 멈춤
  //   }
  // });

});