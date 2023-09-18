// ########### Questions #############################################################################
// const document = new DOMParser().parseFromString(
//     `<div id="foo">
//       <span>Span</span>
//       <p>Paragraph</p>
//       <div id="bar">Div</div>
//     </div>`,
//     'text/html',
//   );

//   getElementsByTagName(document.body, 'div');

// ----> [div#foo, div#bar] <-- This is an array of elements.

// ########### Solution #############################################################################
export default function getElementsByTagName(rootElement, tagName) {
  const elements = [];
  const tagNameUpper = tagName.toUpperCase();

  // 재귀적으로 DOM 트리를 탐색하는 함수
  const traverse = (element) => {
    if (!element) {
      return;
    }
    // 현재 엘리먼트의 태그 이름과 목표 태그 이름과 일치하는 경우 추가
    if (element.tagName.toUpperCase() === tagNameUpper) {
      elements.push(element);
    }
    // 현재 엘리먼트의 자식들을 재귀적으로 순회
    for (const child of element.children) {
      traverse(child);
    }
  };

  // 자식 엘리먼트를 순회하며 traverse 함수 호출
  // DOM요소 순회시 forEach 사용불가
  for (const child of rootElement.children) {
    traverse(child);
  }

  //   참고) forEach를 사용하려면
  //   [...rootElement.children].forEach((child)=>{
  //     traverse(child);
  //   })

  return elements;
}
