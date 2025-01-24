function execute(input: number[]): number[] {
	const roundedNumbers = input.map((number) => {
		const numberArray = Array.from(number.toString()).reverse();

		const decimalPlace = numberArray.indexOf('.');
		const roundEndIndex = decimalPlace - 2;

		if (decimalPlace === -1 || roundEndIndex <= 0) {
			return parseFloat(number.toFixed(2));
		}

		let increment = false;
		const mapped = numberArray
			.map((value, index) => {
				if (roundEndIndex <= index) {
					if (value === '.') return value;
					if (increment) {
						increment = value === '9';
						return increment ? '0' : String(Number(value) + 1);
					}
					return value;
				}

				let newValue = increment ? Number(value) + 1 : Number(value);
				increment = newValue >= 5;
				return '0';
			})
			.reverse();

		return parseFloat(mapped.join(''));
	});

	const sorted = roundedNumbers.sort();
	return sorted;
}

// prettier-ignore
test("floating-point-rounding", () => {
	const input = [ 1.07444444444449, 1.07444444444444, 0, -3.00, 1.012222222222, 1.187777777777777, 1.01, 1.999 ];
	const output = [-3.00, 0.00, 1.01, 1.01, 1.07, 1.08, 1.19, 2.00];
	expect(execute(input)).toStrictEqual(output);
});
