// ########### Questions #############################################################################
textSearch('The Quick Brown Fox Jumps Over The Lazy Dog', 'fox');
// 'The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog'
textSearch('The hardworking Dog overtakes the lazy dog', 'dog');
// 'The hardworking <b>Dog</b> overtakes the lazy <b>dog</b>'
textSearch('aaa', 'aa');
// '<b>aa</b>a'
textSearch('aaaa', 'aa');
// Correct: '<b>aaaa</b>'
// Wrong: '<b>aa</b><b>aa</b>'

// ########### Solution #############################################################################
export default function textSearch(string, query) {
  // 빈 인수를 받을때
  if (string.trim() === '' || query.trim() === '') {
    return string;
  }
  // string의 크기만한 배열을 생성하고, '0'으로 채운다
  const boldChars = Array.from({ length: string.length }, () => 0);

  for (let i = 0; i < string.length; i++) {
    const substr = string.slice(i, i + query.length); // 현재 index부터 query길이 만큼 추출하여 단어 비교
    if (substr.toLowerCase() === query.toLowerCase()) {
      boldChars.fill(1, i, i + query.length); // 단어 위치 파악되면, 배열에 단어가 있는 인덱스부터, 단어 길이 만큼 '1'로변경
      i = i + (query.length - 1); // 단어 길이만큼 건너 뜀
    }
  }

  let highlightedString = '';

  for (let i = 0; i < string.length; i++) {
    const shouldAddOpeningTag = boldChars[i] === 1 && boldChars[i - 1] !== 1; // 단어 시작 인덱스인 경우 True
    const shouldAddClosingTag = boldChars[i] === 1 && boldChars[i + 1] !== 1; // 단어 끝 인덱스인 경우 True

    let char = string[i];

    // 단어 시작부분에 '<b>'추가
    if (shouldAddOpeningTag) {
      char = '<b>' + char;
    }

    // 단어 끝부분에 '</b>'추가
    if (shouldAddClosingTag) {
      char = char + '</b>';
    }
    highlightedString += char; // 하나하나 추가
  }

  return highlightedString;
}
