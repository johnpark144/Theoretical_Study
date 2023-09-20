// ########### Questions #############################################################################
// Implement a function isSameTree that checks if two DOM trees are identical or not.
// The function takes two DOM nodes as the root nodes of two DOM trees and returns a boolean result.

// ---- Tree A and Tree B are considered the same.
// Tree A --> <div>Hello World</div>
// Tree B --> <div>Hello World</div>

// ---- Tree C and Tree D are considered the different.
// Tree C  --> <div class="header">Hello World</div>
// Tree D  --> <div id="foo">Hello World</div>

// ########### Solution 1 #############################################################################
function isSameTree(nodeA, nodeB) {
  // 텍스트 노드면, 텍스트 내용
  if (nodeA.nodeType === Node.TEXT_NODE)
    return nodeA.textContent === nodeB.textContent;

  // 노드 유형(nodeType) 및 태그 이름(tagName)체크
  if (nodeA.nodeType !== nodeB.nodeType || nodeA.tagName !== nodeB.tagName)
    return false;

  // 모든 속성(attribute)체크
  const hasSameAttributes = nodeA
    .getAttributeNames()
    .every(
      (attrName) =>
        nodeA.getAttribute(attrName) === nodeB.getAttribute(attrName)
    );
  if (!hasSameAttributes) return false;

  // 두 노드의 자식 노드를 재귀적으로 순회
  return Array.prototype.every.call(nodeA.childNodes, (childA, index) =>
    isSameTree(childA, nodeB.childNodes[index])
  );
}
// ########### Solution 2 (한줄) #########################################################################
function isSameTree(treeA, treeB) {
  return treeA.isEqualNode(treeB); // 같은노드인지 한번에 체크
}

// ########### 보충 설명 #########################################################################
// ########### nodeType 어트리뷰트로 무슨 노드인지 숫자로 체크
// Node.ELEMENT_NODE === 1
// Node.ATTRIBUTE_NODE === 2
// Node.TEXT_NODE === 3
// Node.COMMENT_NODE === 8
// Node.DOCUMENT_NODE === 9
// ...등

// ########### textContent 어트리뷰트
// 노드안에 어떤 텍스트가있는지 확인

// ########### tagName 어트리뷰트
// 어떤 태그인지 확인

// ########### childNodes 어트리뷰트
// 자식노드들을 객체로 보여줌

// ########### attributes 어트리뷰트
// 속성 및 메서드 확인

// ########### getAttributeNames() 메서드
// 한 노드가 가진 class, style 등과 같은 모든 속성들을 배열로 나열

// ########### getAttribute(attrName) 메서드
// attrName 인자가 가진 속성의 값들을 가져옴
