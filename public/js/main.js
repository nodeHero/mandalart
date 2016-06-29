$(function () {


  var $man = $('#mandalart');


  $man.find('ul').each(function (index) {
    var $self = $(this);

    mandalartCellArray($self, index, 260);
    mandalartCellColor($self, index, 4);

    $self.find('> li').each(function (index) {
      var $self = $(this);

      mandalartCellArray($self, index, 84);
      mandalartCellColor($self, index, 4);
    });
  });


  $('.text').each(function () {
    var $self = $(this);
    var text = $self.text();
    var length = text.length;

    // 글자 수 15 이상일 경우 font-size 조절
    if (length >= 15) $self.css({fontSize: 14});

    // 글자 수 30 이상일 경우 '...' 추가
    if (length >= 30) $self.text(text.slice(0, 20) + ' ...');
  });


});


function mandalartCellArray($self, index, size) {
  var left = (index %3) * size
    , top = parseInt(index /3) * size;

  $self.css({
    left: left
    , top: top
  });
}


function mandalartCellColor($self, index, num) {
  if (index === num) {
    $self.addClass('center_color');
  }
}