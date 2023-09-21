// ########### Questions #############################################################################
// Implement the toggleClass(), addClass() and removeClass() methods according to the following specifications.

// <button class="foo bar">Click me</button>
$('button').toggleClass('bar'); // <button class="foo">Click me</button>
$('button').addClass('baz'); // <button class="foo baz">Click me</button>
$('button').removeClass('foo'); // <button class="baz">Click me</button>
$('button').toggleClass('bar'); // <button class="baz bar">Click me</button>

// ########### Solution #############################################################################
// 정규표현식으로 문자열 공백 기준으로 분할 --> Set에 넣음
function classNameTokenSet(className) {
  return new Set(className.trim().split(/\s+/));
}

// 디폴트 함수
export default function $(selector) {
  const element = document.querySelector(selector);

  return {
    toggleClass: function (className, state) {
      // selector 요소가 없는경우
      if (element == null) {
        return undefined;
      }

      // 1) className으로 받은 문자열을 Set형태로 변경
      const classes = classNameTokenSet(className);
      // 2) element가 가진 className을 Set형태로 (마지막에 결과물로 입력할 Set)
      const elementClasses = classNameTokenSet(element.className);

      // state값이 존재 O => state의 반대 값으로 지울지 생성할지 결정
      // state값이 존재 X => Set형태의 1) className을 하나씩 2) elementClasses안에 존재하는지 비교
      classes.forEach((cls) => {
        const shouldRemove =
          state === undefined ? elementClasses.has(cls) : !state;
        shouldRemove ? elementClasses.delete(cls) : elementClasses.add(cls);
      });

      // 최종 elementClasses --> Array --> 문자열
      element.className = Array.from(elementClasses).join(' ');
      return this;
    },

    // className과 true state값과 함께 toggleClass 실행 (추가하기)
    addClass: function (className) {
      this.toggleClass(className, true);
      return this;
    },

    // className과 false state값과 함께 toggleClass 실행 (지우기)
    removeClass: function (className) {
      this.toggleClass(className, false);
      return this;
    },
  };
}

// ########### (정규표현식 대신) ####################################################################
function classNameTokenSet(className) {
  return new Set(className.split(' ').filter((cls) => cls !== ''));
}
