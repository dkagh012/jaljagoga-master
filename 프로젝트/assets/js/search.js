import { addHide } from './main.js'

/**
 * 필터 검색이 있는 페이지에만 해당 로직 작동함
 */
if (document.querySelector('.searchArea') !== null) {
  // DOM
  const areaSide = document.querySelectorAll('.areaSelect')
  const areaSelectBtn = document.querySelector('.areaSelectBtn')
  const peopleMinusBtn = document.querySelector('.peopleMinusBtn')
  const peoplePlusBtn = document.querySelector('.peoplePlusBtn')
  const peopleDisplay = document.querySelector('.peopleDisplay')
  const themeSide = document.querySelectorAll('.themeSelect')
  const themeSelectBtn = document.querySelector('.themeSelectBtn')

  // variable
  const areaSelectList = ['전국'] // 지역 검색 필터에 포함될 지역
  const themeSelectList = ['전체'] // 테마 검색 필터에 포함될 지역

  // eventListener
  /**
   * 지역 검색 필터
   */
  areaSide.forEach(item => {
    item.addEventListener('click', () => {
      if (item.innerText === '전국') { // 전국 버튼 클릭 시 areaSelectList 초기화 후 '전국' 요소만 추가
        areaSelectList.length = 0
        areaSelectList.push('전국')
      } else { // 전국 제외한 다른 버튼 클릭 시 '전국' 요소 삭제하고 해당 요소 areaSelectList 에 추가하거나 뺌
        areaSelectList.indexOf('전국') >= 0 ? areaSelectList.splice(areaSelectList.indexOf('전국'), 1) : ''
        item.className.indexOf('active') >= 0 ? areaSelectList.push(item.innerText) : areaSelectList.splice(areaSelectList.indexOf(item.innerText), 1)
      }
    })
  })
  areaSelectBtn.addEventListener('click', () => { handleAreaSelectBtn(document.querySelector('.areaText')) })
  document.querySelector('.peopleSelectBtn').addEventListener('click', () => handlePeopleSelectBtn(document.querySelector('.peopleText')))
  peoplePlusBtn.addEventListener('click', () => peopleDisplay.innerText = Number(peopleDisplay.innerText) + 1)
  peopleMinusBtn.addEventListener('click', () => peopleDisplay.innerText === '1' ? '' : peopleDisplay.innerText = Number(peopleDisplay.innerText) - 1)
  document.querySelector('.priceSelectBtn').addEventListener('click', () => handlePriceSelectBtn(document.querySelector('.priceText')))
  themeSide.forEach(item => {
    item.addEventListener('click', () => {
      if (item.innerText === '전체') { // 전체 버튼 클릭 시 themeSelectList 초기화 후 '전국' 요소만 추가
        themeSelectList.length = 0
        themeSelectList.push('전체')
      } else { // 전체 제외한 다른 버튼 클릭 시 '전체' 요소 삭제하고 해당 요소 themeSelectList 에 추가하거나 뺌
        themeSelectList.indexOf('전체') >= 0 ? themeSelectList.splice(themeSelectList.indexOf('전체'), 1) : ''
        item.className.indexOf('active') >= 0 ? themeSelectList.push(item.innerText) : themeSelectList.splice(themeSelectList.indexOf(item.innerText), 1)
      }
    })
  })
  themeSelectBtn.addEventListener('click', () => { handleThemeSelectBtn(document.querySelector('.themeText')) })

  // function
  /**
   * areaSelectList 의 종류와 갯수에 따라 다르게 화면에 출력함
   * @param {DOM} btn 필터링 되어 화면에 보여질 영역
   */
  function handleAreaSelectBtn(btn) {
    const areaDetail = document.querySelector('.AreaDetail')
    addHide(areaDetail)
    if (areaSelectList.length === 1) {
      btn.innerText = areaSelectList[0]
    } else {
      btn.innerText = `${areaSelectList[0]} 외 ${areaSelectList.length - 1}곳`
    }
  }

  function handlePeopleSelectBtn(btn) {
    const peopleDetail = document.querySelector('.peopleDetail')
    addHide(peopleDetail)
    btn.innerText = peopleDisplay.innerText + '명'
  }

  function handlePriceSelectBtn(btn) {
    addHide(document.querySelector('.priceDetail'))
    priceValueControl(btn)
  }

  /**
   * 가격 필터 로직
   * @param {DOM} btn 디스플레이에 보여질 가격 정보
   */
  function priceValueControl(btn) {
    const regex = /[^0-9]/g;

    const MAX_PRICE = document.querySelector('.priceMaxArea').value.replace(regex, '') / 10000
    const MIN_PRICE = document.querySelector('.priceMinArea').value.replace(regex, '') / 10000

    if (document.querySelector('.priceMinArea').value === '0원') { // 최소 금액이 0원이면 0만원이 아니라 0원으로 출력되도록 설정
      btn.innerText = '0원' + '~' + MAX_PRICE + '만원'
    } else if (MIN_PRICE < MAX_PRICE) {
      btn.innerText = MIN_PRICE + '만원' + '~' + MAX_PRICE + '만원'
    } else { // 왼쪽 금액보다 오른쪽 금액이 큰 경우에 큰 금액이 왼쪽으로 정렬되도록 수정
      btn.innerText = MAX_PRICE + '만원' + '~' + MIN_PRICE + '만원'
    }
  }

  /**
   * 테마 필터링 로직
   * @param {DOM} btn 필터링 되어 화면에 보여질 영역
   */
  function handleThemeSelectBtn(btn) {
    const themeDetail = document.querySelector('.themeDetail')
    addHide(themeDetail)
    if (themeSelectList.length === 1) {
      btn.innerText = themeSelectList[0]
    } else if (themeSelectList.length > 1) {
      btn.innerText = `${themeSelectList[0]} 외 ${themeSelectList.length - 1}곳`
    } else {
      btn.innerText = '전체'
    }
  }
}