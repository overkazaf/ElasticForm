function tokenizer(input) {
  let cursor = 0;
  const tokens = [];

  const regMap = {
    WHITE_SPACE: /\s/,
    DIGIT: /\d/,
    ID: /\w/i,
    PAREN: /\(|\)/,
    COMMA: /\,/,
    SEMI_COMMA: /\;/
  };

  while (cursor < input.length) {
    let current = input[cursor];
    
    if (regMap.PAREN.test(current)) {
      tokens.push({
        type: 'PAREN',
        value: current
      });

      cursor++;
      continue;
    }

    if (regMap.WHITE_SPACE.test(current)) {
      cursor++;
      continue;
    }

    if (regMap.DIGIT.test(current)) {
      let value = '';
      let index = cursor;
      let c = input[index];
      while (cursor < input.length && regMap.DIGIT.test(c)) {
        value += c;
        c = input[++index];
      }

      tokens.push({
        type: 'NUMBER',
        value: value
      });
      cursor += value.length;
      continue;
    }

    if (regMap.ID.test(current)) {
      let value = '';
      let index = cursor;
      let c = input[index];
      while (cursor < input.length && regMap.ID.test(c)) {
        value += c;
        c = input[++index];
      }

      tokens.push({
        type: 'ID',
        value: value
      });
      cursor += value.length;
      continue;
    }

    if (regMap.COMMA.test(current)) {
      tokens.push({
        type: 'COMMA',
        value: ','
      });
      cursor++;
      continue;
    }

    if (regMap.SEMI_COMMA.test(current)) {
      tokens.push({
        type: 'SEMI_COMMA',
        value: ';'
      });
      cursor++;
      continue;
    }

    throw new TypeError('I dont know what this character is: ' + current);
  }

  return tokens;
}


const testCase = [
  "add(123, 555);"
];

testCase.map(function(test, i) {
  console.log(i + ': tokens ==> ', tokenizer(test));
});