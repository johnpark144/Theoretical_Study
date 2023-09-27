// ########### Questions #############################################################################
const doc = new DOMParser().parseFromString(
  `<div class="foo bar baz">
        <span class="bar baz">Span</span>
        <p class="foo baz">Paragraph</p>
        <div class="foo bar"></div>
      </div>`,
  'text/html'
);

getElementsByClassName(doc.body, 'foo bar');
// [<div class="foo bar baz">...</div>, <div class="foo bar"></div>]    // foo와 bar가 모두 들어간 모든 요소

// ########### Solution #############################################################################
export default function getElementsByClassName(element, classNames) {
  const elements = [];
  const classNamesSet = new Set(classNames.trim().split(/\s+/)); // 문자열로 받은 classNames를 Set으로

  // 자식요소 클래스 검사 함수
  function traverse(el) {
    if (el === null) {
      return;
    }

    // classNamesSet에 내용들이 현재 요소의 classList에 전부 포함되있으면 추가
    const isSubset = Array.from(classNamesSet).every((value) =>
      el.classList.contains(value)
    );
    if (isSubset) {
      elements.push(el);
    }

    // 자식의 자식들도 재귀적으로 함수 호출하여 검사
    for (const child of el.children) {
      traverse(child);
    }
  }

  // 모든 엘리먼트의 자식요소 검사
  for (const child of element.children) {
    traverse(child);
  }

  return elements;
}
