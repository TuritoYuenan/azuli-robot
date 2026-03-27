import { equal } from 'node:assert';
import { arithmetic, factorial, Operators } from './maths.ts';

Deno.test('Calculation test', () => {
	equal(arithmetic(3, 478, Operators.Plus), 481);
	equal(arithmetic(20, 46, Operators.Minus), -26);
	equal(arithmetic(27, 478, Operators.Multiply), 12_906);
});

Deno.test('Division test', async (test) => {
	await test.step('Casual division', () => {
		equal(arithmetic(20, 4, Operators.Divide), 5);
	});

	await test.step('Rational division', () => {
		equal(arithmetic(16, 3, Operators.Divide), 5.333333333333333);
	});

	await test.step('Handle Zero Division', () => {
		equal(arithmetic(5, 0, Operators.Divide), Number.NaN);
	});
});

Deno.test('Factorial test', () => {
	equal(factorial(5), 120);
	equal(factorial(9), 362880);
});
