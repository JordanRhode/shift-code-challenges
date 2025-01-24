function execute(input: number[]): number[] {
	return input;
}

test("floating-point-rounding", () => {
	const input = [
		1.07444444444449, 1.07444444444444, 0, -3.0, 1.012222222222,
		1.187777777777777, 1.01,
	];
	const output = [-3.0, 0.0, 1.01, 1.01, 1.07, 1.08, 1.19];
	expect(execute(input)).toStrictEqual(output);
});
