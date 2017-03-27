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

		if (regMap.WHITE_SPACE.test(char)) {
			let substr = input.slice(cursor);
			let l = substr.match(regMap.WHITE_SPACE)[0].length;
			cursor += l;
			continue;
		}

		if (regMap.INTEGER.test(char)) {
			let substr = input.slice(cursor);
			let l = substr.match(regMap.INTEGER)[0].length;

			tokens.push({
				type: 'INTEGER',
				value: input.substr(cursor, l)
			});

			cursor += l;
			continue;
		}

		if (regMap.PAREN.test(char)) {
			cursor++;
			tokens.push({
				type: 'PAREN',
				value: char
			});

			continue;
		}

		if (regMap.ID.test(char)) {
			let substr = input.slice(cursor);
			let l = substr.match(regMap.ID)[0].length;

			tokens.push({
				type: 'ID',
				value: input.substr(cursor, l)
			});

			cursor += l;
			continue;
		}

		throw new Error('Unsupported character:' + char);
	}


	return tokens;
}

function parser(tokens) {
	let ast = {
		type: 'Program',
		body: []
	};

	let cursor = 0;

	function walk() {
		let token = tokens[cursor];

		if (token.type === 'INTEGER') {
			cursor++;

			let node = {
				type: 'NumberLiteral',
				value: token.value
			};

			return node;
		}


		if (token.type === 'PAREN' && token.value === '(') {
			token = tokens[++cursor];

			let node = {
				type: 'CallExpression',
				name: token.value,
				params: []
			};

			token = tokens[++cursor];

			while (token.type !== 'PAREN' || (token.type === 'PAREN' && token.value === '(')) {
				node.params.push(walk());
				token = tokens[cursor];
			}

			// 跳过 ')'
			++cursor;

			return node;
		}

		if (token.type === 'ID') {
			cursor++;

			let node = {
				type: 'Identifier',
				name: token.value
			};

			return node;
		}

		throw new Error('Unsupported token:' + token.type);
	}


	while (cursor < tokens.length) {
		ast.body.push(walk());
	}

	return ast;
}

function main() {
	const testCases = [
		'(a (b (c (d (e 1 4)))))',
		'(print t 1 4)'
	];

	testCases.map(function (item) {
		const tokens = lexer(item);
		const ast = parser(tokens);
		console.log(ast);
	});
}

main();