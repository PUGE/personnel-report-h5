$(function () {
  $('.two .right')[0].innerHTML = $('.label-box .item .data')[0].innerHTML
  function removeAll () {
    $('.one .label-box .item').each(function (ind, item) {
      item.classList.remove('active')
    })
  }
  $('.one .label-box .item').each(function (ind, item) {
    item.onclick = function (e) {
      removeAll()
      this.classList.add('active')
      $('.two .right')[0].innerHTML = $('.label-box .item .data')[ind].innerHTML
    }
  })
})