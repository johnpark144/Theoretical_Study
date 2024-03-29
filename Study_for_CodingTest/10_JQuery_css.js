// 실행불가 ㅠㅠ
// ########### Questions #############################################################################
// Vanilla JavaScript
const buttonEl = document.querySelector('button');
buttonEl.style.color = 'red';
buttonEl.style.backgroundColor = 'tomato';
buttonEl.style.fontSize = '16px';

// With jQuery (using the $ alias function), the above can be simplified into:
const buttonEl = $('button');
buttonEl.css('color', 'red');
buttonEl.css('backgroundColor', 'tomato');
buttonEl.css('fontSize', '16px');

// With jQuery simplified
$('button')
  .css('color', 'red')
  .css('backgroundColor', 'tomato')
  .css('fontSize', '16px');

// Additionally, if the second parameter is omitted, the value of that style property is returned.
// <button style="color: red">Submit</button>
$('button').css('color'); // 'red'

// ########### Solution #############################################################################
export default function $(selector) {
  const buttonEl = document.querySelector(selector);

  return {
    // this를 리턴해야 되서 화살표 함수X
    css: function (prop, value) {
      // 정해주는 value가 없으면, 단순 value 조회
      if (!value) {
        if (!buttonEl) return undefined; // 매칭 X
        return buttonEl.style[prop] === '' ? undefined : buttonEl.style[prop];
      }
      // 정해준 value 입력
      if (buttonEl) {
        buttonEl.style[prop] = value;
      }

      return this;
    },
  };
}

const buttonEl = $('button');
buttonEl.css('color', 'red');
buttonEl.css('backgroundColor', 'tomato');
buttonEl.css('fontSize', '16px');
