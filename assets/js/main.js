const itemSwiper = new Swiper('.itemSwiper', {
  slidesPerView: window.innerWidth < 992 ? (window.innerWidth < 500 ? 1 : 2) : 3, // 한 슬라이드에 보여줄 갯수
  spaceBetween: window.innerWidth < 992 ? 10 : 50, // 슬라이드 사이 여백
  loop: true, // 슬라이드 반복 여부
  loopAdditionalSlides: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
})

const eventSwiper = new Swiper('.eventSwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  loopAdditionalSlides: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    prevEl: '.eventPrev',
    nextEl: '.eventNext',
  },
})

document.querySelectorAll('.itemSlide').forEach((item) => {
  item.addEventListener('mouseover', () => {
    itemSwiper.autoplay.stop()
  })
  item.addEventListener('mouseout', () => {
    itemSwiper.autoplay.start()
  })
})

window.addEventListener('resize', () => {
  window.innerWidth < 992 ? (window.innerWidth < 500 ? itemSwiper.params.slidesPerView = 1 : itemSwiper.params.slidesPerView = 2) : itemSwiper.params.slidesPerView = 3;
  window.innerWidth < 992 ? itemSwiper.params.spaceBetween = 10 : itemSwiper.params.spaceBetween = 50;
})

if (document.querySelector('.selectBtn') !== null) {
  document.querySelectorAll('.selectBtn').forEach((item) => {
    item.addEventListener('click', (item) => {
      if (item.target.innerText === '전국' || item.target.innerText === '전체') {
        document.querySelectorAll('.selectBtn').forEach((item) => {
          item.classList.remove('active')
        })
        item.target.classList.add('active')
      } else {
        document.querySelectorAll('.selectBtn').forEach((item) => {
          (item.innerText === '전국' || item.innerText === '전체') ? item.classList.remove('active') : ''
        })
        item.target.classList.toggle('active')
      }
    })
  })
}

if (document.querySelector('.detailOpenBtn') !== null) {
  const AreaDetail = document.querySelector('.AreaDetail');
  const peopleDetail = document.querySelector('.peopleDetail');
  const priceDetail = document.querySelector('.priceDetail');
  const themeDetail = document.querySelector('.themeDetail');
  document.querySelectorAll('.detailOpenBtn').forEach((item) => {
    item.addEventListener('click', (doc) => {
      const targets = doc.target.nextSibling.nextSibling;
      if (targets === AreaDetail) {
        peopleDetail.classList.add('hide')
        priceDetail.classList.add('hide')
        themeDetail.classList.add('hide')
      } else if (targets === peopleDetail) {
        AreaDetail.classList.add('hide')
        priceDetail.classList.add('hide')
        themeDetail.classList.add('hide')
      } else if (targets === priceDetail) {
        AreaDetail.classList.add('hide')
        peopleDetail.classList.add('hide')
        themeDetail.classList.add('hide')
      } else {
        AreaDetail.classList.add('hide')
        peopleDetail.classList.add('hide')
        priceDetail.classList.add('hide')
      }
      doc.target.nextSibling.nextSibling.classList.toggle('hide')
    })
  })
}

if (document.querySelector('.detailCloseBtn') !== null) {
  document.querySelectorAll('.detailCloseBtn').forEach((item) => {
    item.addEventListener('click', (doc) => { doc.target.parentNode.parentNode.classList.toggle('hide') })
  })
}

const visualSwiper = new Swiper('.visualSwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  loopAdditionalSlides: 1,
  navigation: {
    prevEl: '.visualPrev',
    nextEl: '.visualNext',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
})

document.querySelectorAll('.visualSlide').forEach((item) => {
  item.addEventListener('mouseover', () => {
    visualSwiper.autoplay.stop()
  })
  item.addEventListener('mouseout', () => {
    visualSwiper.autoplay.start()
  })
})

const roomsSwiper = new Swiper('.roomsSwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  loopAdditionalSlides: 1,
  navigation: {
    prevEl: '.roomsPrev',
    nextEl: '.roomsNext',
  },
})

if (document.querySelector('.sideMenuArea') !== null) {
  const body = document.querySelector('body');
  const sideMenuArea = document.querySelector('.sideMenuArea');
  const sideMenu = document.querySelector('.sideMenu');
  const hamburgerMenuBtn = document.querySelector('.hamburgerMenuBtn');
  const wrapper = document.querySelector('.jsWrapper');
  const closeBtn = document.querySelector('.hamburgerCloseBtn');

  sideMenu.addEventListener('mouseover', () => { body.classList.add('stopScroll') })
  sideMenu.addEventListener('mouseout', () => { body.classList.remove('stopScroll') })
  hamburgerMenuBtn.addEventListener('click', toggleMenu)
  wrapper.addEventListener('click', toggleMenu)
  closeBtn.addEventListener('click', toggleMenu)

  function toggleMenu() {
    sideMenuArea.classList.toggle('hide')
  }
}

/**
   * 
   * @param {DOM} dom
   * DOM element 에 hide 클레스를 추가해서 디스플레이에서 사라지게 함
   */
export function addHide(dom) {
  dom.classList.add('hide')
}