// ########### Questions #############################################################################
textSearch('The Quick Brown Fox Jumps Over The Lazy Dog', ['fox']);
// 'The Quick Brown <b>Fox</b> Jumps Over The Lazy Dog'
textSearch('The quick brown fox jumps over the lazy dog', ['fox', 'dog']);
// 'The quick brown <b>fox</b> jumps over the lazy <b>dog</b>'
textSearch('This is Uncopyrightable!', ['copy', 'right']);
// 'This is Un<b>copyright</b>able!'
textSearch('This is Uncopyrightable!', ['copy', 'right', 'table']);
// 'This is Un<b>copyrightable</b>!'
textSearch('aaa', ['aa']);
// '<b>aa</b>a'
// This is because the second character cannot be used as a match again.
textSearch('aaaa', ['aa']);
// '<b>aaaa</b>'

// ########### Solution #############################################################################
export default function textSearch(string, queries) {
  if (string.trim() === '') {
    return string;
  }

  const arr = new Array(string.length).fill(0);

  for (const query of queries) {
    if (query.trim() === '') continue;
    // index를 유동적으로 바꿔줘야해서 forEach 대신씀
    for (let i = 0; i < string.length; i++) {
      if (
        query.toLowerCase() === string.toLowerCase().slice(i, i + query.length) // 현 index부터 query길이만큼 똑같은 단어인지 확인
      ) {
        const arr1 = new Array(query.length).fill(1);
        arr.splice(i, query.length, ...arr1); // 같으면 현 index부터 query길이만큼 1로채움
        i += query.length - 1;
      }
    }
  }

  let resultStr = '';
  // 참고 --> for in 문은 index가 아닌 키를 기반으로 반복하여, 배열에서 사용 안하는게 좋음
  arr.forEach((_, i) => {
    let char = string[i];
    if (arr[i] === 1 && arr[i - 1] !== 1) {
      char = '<b>' + char;
    }
    if (arr[i] === 1 && arr[i + 1] !== 1) {
      char = char + '</b>';
    }
    resultStr += char;
  });

  return resultStr;
}
