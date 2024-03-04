// Resolver Script
const textResolver = {
  resolve: function resolve(options, callback) {
    const resolveString = options.resolveString || options.element.getAttribute('data-target-resolver');
    const combinedOptions = Object.assign({}, options, {
      resolveString: resolveString
    });

    function getRandomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomCharacter(characters) {
      return characters[getRandomInteger(0, characters.length - 1)];
    }

    function doRandomiserEffect(options, callback) {
      const characters = options.characters;
      const timeout = options.timeout;
      const element = options.element;
      const partialString = options.partialString;

      let iterations = options.iterations;

      setTimeout(() => {
        if (iterations >= 0) {
          const nextOptions = Object.assign({}, options, {
            iterations: iterations - 1
          });

          if (iterations === 0) {
            element.textContent = partialString;
          } else {
            element.textContent = partialString.substring(0, partialString.length - 1) + randomCharacter(characters);
          }

          doRandomiserEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      }, options.timeout);
    }

    function doResolverEffect(options, callback) {
      const resolveString = options.resolveString;
      const characters = options.characters;
      const offset = options.offset;
      const partialString = resolveString.substring(0, offset);
      const combinedOptions = Object.assign({}, options, {
        partialString: partialString
      });

      doRandomiserEffect(combinedOptions, () => {
        const nextOptions = Object.assign({}, options, {
          offset: offset + 1
        });

        if (offset <= resolveString.length) {
          doResolverEffect(nextOptions, callback);
        } else if (typeof callback === "function") {
          callback();
        }
      });
    }

    doResolverEffect(combinedOptions, callback);
  }
};

const resolverStrings = ['\ DESINGER'];

let resolverCounter = 0;

const resolverOptions = {
  offset: 0,
  timeout: 15,
  iterations: 10,
  characters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'x', '#', '%', '&', '-', '+', '_', '?', '/', '\\', '='],
  resolveString: resolverStrings[resolverCounter],
  element: document.querySelector('[data-target-resolver]')
};

function resolverCallback() {
  // 이 부분은 필요에 따라 채워넣으세요.
}

textResolver.resolve(resolverOptions, resolverCallback);

// Swiper Script
var sliderSelector = '.swiper-container',
  isMove = false,
  swiperOptions = {
    init: false,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 3000
    },
    effect: 'cube',
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 40,
      shadowScale: 0.94,
    },
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    on: {
      init: function () {
        this.autoplay.stop();
      },
      imagesReady: function () {
        this.el.classList.remove('loading');
        this.autoplay.start();
      },
      touchMove: function (event) {
        if (!isMove) {
          this.el.classList.remove('scale-in');
          this.el.classList.add('scale-out');
          isMove = true;
        }
      },
      touchEnd: function (event) {
        this.el.classList.remove('scale-out');
        this.el.classList.add('scale-in');
        setTimeout(function () {
          isMove = false;
        }, 300);
      },
      slideChangeTransitionStart: function () {
        console.log('slideChangeTransitionStart ' + this.activeIndex);
        if (!isMove) {
          this.el.classList.remove('scale-in');
          this.el.classList.add('scale-out');
        }
      },
      slideChangeTransitionEnd: function () {
        console.log('slideChangeTransitionEnd ' + this.activeIndex);
        if (!isMove) {
          this.el.classList.remove('scale-out');
          this.el.classList.add('scale-in');
        }
      },
      transitionStart: function () {
        console.log('transitionStart ' + this.activeIndex);
      },
      transitionEnd: function () {
        console.log('transitionEnd ' + this.activeIndex);
      },
      slideChange: function () {
        console.log('slideChange ' + this.activeIndex);
        console.log(this);
      }
    }
  },
  mySwiper = new Swiper(sliderSelector, swiperOptions);

window.onload = function () {
  mySwiper.init();
};