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
  setTimeout(() => {
    var screenWidth = document.body.clientWidth; // 最大宽度800
    if (screenWidth > 1000) screenWidth = 800;
    document.getElementById('myCanvas').width = screenWidth;
    document.getElementById('myCanvas').height = screenWidth * 0.6;
    document.getElementById('myCanvasContainer').style.height = screenWidth * 0.4 + 'px';
    TagCanvas.Start('myCanvas', 'tags', {
      "fadeIn": 1000,
      "weight": true,
      "maxSpeed": 0.05,
      "minSpeed": 0.005,
      "stretchX": 1.8,
      "padding": 16,
      "bgColour": "#ecf2fa",
      "wheelZoom": false,
      "textColour": '#3c89d2',
      "textHeight": 14,
      "weightMode": "both",
      "dragControl": true,
      "frontSelect": true,
      "outlineMethod": "none",
      "weightGradient": {
        "0": "#3c89d2",
        "1": "#4bbae5",
        "0.33": "#e98a2e",
        "0.66": "#3b55b2"
      }
    });
    TagCanvas.SetSpeed('myCanvas', [-0.05, -0.05]);
  }, 0)
})