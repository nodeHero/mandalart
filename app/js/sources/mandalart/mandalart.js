function Mandalart(selector) {
  this.init(selector);
}

Mandalart.prototype.init = function (selector) {
  this.$man = $(selector);
  this.$manText = this.$man.find('.text');
  this.$shadow = this.$man.find('.shadow');
  this.$textInput = this.$man.find('.text-input');
  this.$textInputCancel = this.$textInput.find('.cancel');

  this.initEvent();
};

Mandalart.prototype.initEvent = function () {
  this.textCheck();
  this.openTextInput();
  this.closedTextInput();
};

// 입력 정보(text) 체크
Mandalart.prototype.textCheck = function () {
  this.$manText.each(function () {
    var $self = $(this)
      , text = $self.text()
      , length = text.length;

    if (length >= 15) $self.css({fontSize: 14}); // 글자 수 15 이상일 경우 font-size 조절

    if (length >= 30) $self.text(text.slice(0, 20) + ' ...'); // 글자 수 30 이상일 경우 '...' 추가
  });
};

// 텍스트 입력창 켜기
Mandalart.prototype.openTextInput = function () {
  var that = this;
  this.$manText.on('click', function () {
    var text = $(this).text();
    that.$shadow.stop(false, true).fadeIn(250);
    that.$textInput.stop(false, true).fadeIn(250, function () {
      that.$textInput.find('input').attr('value', text).focus();
    });
  });
};

// 텍스트 입력창 끄기
Mandalart.prototype.closedTextInput = function () {
  var that = this;
  this.$textInputCancel.on('click', function () {
    that.$shadow.stop(false, true).fadeOut(250);
    that.$textInput.stop(false, true).fadeOut(250);
  });
};








