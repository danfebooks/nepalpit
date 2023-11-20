import { tax } from '../src/index';

describe('Tax Calculation', () => {
	it('should calculate tax for a single individual', () => {
		const options = {
			income: 6_00_000,
			epf: 30_000,
			cit: 20_000,
			ssf: 10_000,
			insurance: 5_000,
			year: '2080/81',
			single: true,
		};
		const result = tax(options);

		expect(result.totalTaxLiability).toBe(3_500);
		expect(result.netTaxLiabilityMonthly).toBe(291.67);
	});

	it('should calculate tax for a married individual', () => {
		const options = {
			income: 12_00_000,
			epf: 50_000,
			cit: 20_000,
			ssf: 50_000,
			insurance: 30_000,
			year: '2080/81',
			single: false,
		};
		const result = tax(options);

		expect(result.totalTaxLiability).toBe(70_000);
		expect(result.netTaxLiabilityMonthly).toBe(5833.33);
	});

	it('should calculate tax for an individual with high income', () => {
		const options = {
			income: 24_00_000,
			epf: 60_000,
			cit: 1_50_000,
			ssf: 50_000,
			insurance: 30_000,
			year: '2080/81',
			single: true,
		};
		const result = tax(options);

		expect(result.totalTaxLiability).toBe(4_19_600);
		expect(result.netTaxLiabilityMonthly).toBe(34_966.67);
	});

	it('should calculate tax for an individual with no deductions', () => {
		const options = {
			income: 4_80_000,
			epf: 0,
			cit: 0,
			ssf: 0,
			insurance: 0,
			year: '2080/81',
			single: true,
		};
		const result = tax(options);

		expect(result.totalTaxLiability).toBe(4_800);
		expect(result.netTaxLiabilityMonthly).toBe(400);
	});

	it('should calculate tax for an individual with maximum deductions', () => {
		const options = {
			income: 18_00_000,
			epf: 2_00_000,
			cit: 2_00_000,
			ssf: 1_00_000,
			insurance: 40_000,
			year: '2080/81',
			single: true,
		};
		const result = tax(options);

		expect(result.totalTaxLiability).toBe(1_58_000);
		expect(result.netTaxLiabilityMonthly).toBe(13_166.67);
	});

	it('should calculate tax for an individual with deductions exceeding maximum limits', () => {
		const options = {
			income: 18_00_000,
			epf: 3_00_000,
			cit: 2_00_000,
			ssf: 1_50_000,
			insurance: 40_000,
			year: '2080/81',
			single: true,
		};
		const result = tax(options);

		expect(result.totalTaxLiability).toBe(1_58_000);
		expect(result.netTaxLiabilityMonthly).toBe(13_166.67);
	});

	it('should throw an error for an individual with negative income (invalid scenario)', () => {
		const options = {
			income: -50_000,
			epf: 5_000,
			cit: 5_000,
			ssf: 2_000,
			insurance: 1_000,
			year: '2080/81',
			single: true,
		};

		expect(() => tax(options)).toThrow(
			'Tax parameters (Income, EPF, CIT, SSF, Insurance) cannot be negative.',
		);
	});

	it('should throw an error for an individual with negative deductions (invalid scenario)', () => {
		const options = {
			income: 50_000,
			epf: -5_000,
			cit: -5_000,
			ssf: -2_000,
			insurance: -1_000,
			year: '2080/81',
			single: true,
		};

		expect(() => tax(options)).toThrow(
			'Tax parameters (Income, EPF, CIT, SSF, Insurance) cannot be negative.',
		);
	});

	it('should calculate tax for a single individual with custom number of months', () => {
		const options = {
			income: 6_00_000,
			epf: 30_000,
			cit: 20_000,
			ssf: 10_000,
			insurance: 5_000,
			year: '2080/81',
			single: true,
			noOfMonths: 6,
		};
		const result = tax(options);

		expect(result.totalTaxLiability).toBe(3_500);
		expect(result.netTaxLiabilityMonthly).toBe(583.33);
	});

	it('should default to 12 months if noOfMonths is not provided', () => {
		const options = {
			income: 6_00_000,
			epf: 30_000,
			cit: 20_000,
			ssf: 10_000,
			insurance: 5_000,
			year: '2080/81',
			single: true,
		};
		const result = tax(options);

		expect(result.totalTaxLiability).toBe(3_500);
		expect(result.netTaxLiabilityMonthly).toBe(291.67);
	});
});
