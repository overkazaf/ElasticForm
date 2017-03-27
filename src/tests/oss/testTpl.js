const regMap = {
	WHITE_SPACE: /[\t\r\n\f ]/,
	OPEN_TAG: /\(/,
	CLOSE_TAG: /\)/,
	ID: /\w+/,
	EQUALS: /=/,
};


function lexer(input) {
	let cursor = 0;
	let tokens = [];

	while (cursor < input.length) {
		let char = input[cursor];

		if (regMap.WHITE_SPACE.test(char)) {
			cursor++;
			continue;
		}

		if (regMap.EQUALS.test(char)) {

			tokens.push({
				type: 'EQUALS',
				value: char
			});

			cursor++;
			continue;
		}

		if (regMap.OPEN_TAG.test(char)) {
			tokens.push({
				type: 'OPEN_TAG',
				value: char
			});

			cursor++;
			continue;
		}

		if (regMap.CLOSE_TAG.test(char)) {
			tokens.push({
				type: 'CLOSE_TAG',
				value: char
			});

			cursor++;
			continue;
		}

		if (regMap.ID.test(char)) {
			let substr = input.slice(cursor);
			let l = substr.match(regMap.ID)[0].length;

			tokens.push({
				type: 'ID',
				value: substr.slice(0, l)
			});

			cursor += l;
			continue;
		}

		throw new Error('Unsupported character:' + char);
	}

	return tokens;
}

function main() {
	const tpls = [
		'(if a=123 xx (elif a=333 yy) (else ccc))'
	];

	tpls.map(function(tpl) {
		console.log(lexer(tpl));
	});
}

main();