const regMap = {
	WHITE_SPACE: /\s+/,
	INTEGER: /\d+/,
	PAREN: /\(|\)/,
	ID: /\w+/
};

function lexer(input) {
	let cursor = 0;
	let tokens = [];

	while (cursor < input.length) {
		let char = input[cursor];
		let substr = input.slice(cursor);
		if (regMap.WHITE_SPACE.test(char)) {
			cursor += substr.match(regMap.WHITE_SPACE)[0].length;
			continue;
		}

		if (regMap.INTEGER.test(char)) {
			let value = substr.match(regMap.INTEGER)[0];
			tokens.push({
				type: 'INTEGER',
				value: value
			});
			cursor += value.length;
			continue;
		}

		if (regMap.ID.test(char)) {
			let value = substr.match(regMap.ID)[0];

			tokens.push({
				type: 'ID',
				value: value
			});
			cursor += value.length;
			continue;
		}

		if (regMap.PAREN.test(char)) {
			tokens.push({
				type: 'PAREN',
				value: char
			});
			cursor++
			continue;
		}

		throw new Error('Unexpected character:' + char);
	}

	return tokens;
}


function main() {
	const testCases = [
		'(addD213123DsW_ 1 4)'
	];

	testCases.map(function (item) {
		const tokens = lexer(item);
		console.log(tokens);
	});
}

main();