if (document.querySelector('.filter_category') !== null) {
  // DOM
  const searchScrollArea = document.querySelector('.searchScrollArea') // 테마 버튼들 모여있는 영역
  const prevBtn = document.querySelectorAll('.searchSlideBtn')[0] // < 버튼
  const nextBtn = document.querySelectorAll('.searchSlideBtn')[1] // > 버튼

  // variable
  const PREV_NUM = -200 // < 버튼 클릭 시 이동할 픽셀
  const NEXT_NUM = 200 // > 버튼 클릭 시 이동할 픽셀

  // EventListener
  prevBtn.addEventListener('click', () => handleControlBtn(PREV_NUM))
  nextBtn.addEventListener('click', () => handleControlBtn(NEXT_NUM))

  // function
  function handleControlBtn(num) {
    searchScrollArea.scrollBy({ left: num, top: 0, behavior: "smooth" });
    console.log(point)
  }
}