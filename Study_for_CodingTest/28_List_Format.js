// ########### Questions #############################################################################
listFormat(); // ''
listFormat([]); // ''
listFormat(['Bob']); // 'Bob'
listFormat(['Bob', 'Alice']); // 'Bob and Alice'
listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John']); // 'Bob, Ben, Tim, Jane and John'
listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], { length: 3 }); // 'Bob, Ben, Tim and 2 others'
listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], { length: 4 }); // 'Bob, Ben, Tim, Jane and 1 other'
listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], { length: 3, sorted: true }); // 'Ben, Bob, Jane and 2 others'
listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John', 'Bob'], {
  length: 3,
  unique: true,
}); // 'Bob, Ben, Tim and 2 others'
listFormat(['Bob', 'Ben', 'Tim', 'Jane', 'John'], { length: 3, unique: true }); // 'Bob, Ben, Tim and 2 others'
listFormat(['Bob', 'Ben', '', '', 'John']); // 'Bob, Ben and John'

// ########### Solution #############################################################################
export default function listFormat(itemsParam, options = {}) {
  // 재대로된 배열 존재 X 경우 or 하나만 존재
  if (!itemsParam || itemsParam.length === 0) return '';
  if (itemsParam.length === 1) return itemsParam[0];

  // 데이터 "" 없애기
  let items = itemsParam.filter((item) => !!item);

  // 겹치는거 없애기
  if (options.unique) {
    items = Array.from(new Set(items));
  }

  // 정렬
  if (options.sorted) {
    items.sort();
  }

  // 길이를 정의했거나, 정의한 길이가 기존 배열 길이보다 같거나 큰 경우
  if (options.length && options.length > 0 && options.length < items.length) {
    const count = items.length - options.length;
    const firstSection = items.slice(0, options.length).join(', ');
    const secondSection = `${count} ${'other' + (count > 1 ? 's' : '')}`;
    return [firstSection, secondSection].join(' and ');
  }

  // 길이 정의를 안했거나, 길이 정의가 유효하지 않은경우
  const firstSection = items.slice(0, items.length - 1).join(', ');
  const secondSection = items[items.length - 1];
  return [firstSection, secondSection].join(' and ');
}
