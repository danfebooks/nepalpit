import {
	getTotalTaxableAmount,
	getTotalTaxAmountWithBrackets,
} from '../src/calculator';

describe('Get Total Taxable Amount', () => {
	it('should correctly calculate total taxable amount when CIT, SSF, EPF, and Insurance are all 0', () => {
		const taxSettings = {
			maxDeductionRate: 1 / 3,
			maxDeductionLimit: 300000,
			maxDeductionLimitWithSSF: 500000,
			maxInsuranceDeductionLimit: 40000,
		};
		const params = {
			totalIncome: 1500000,
			epf: 0,
			cit: 0,
			ssf: 0,
			insurance: 0,
			taxSettings,
		};
		const result = getTotalTaxableAmount(params);
		expect(result.taxableIncome).toBe(1500000);
	});

	it('should correctly calculate total taxable amount when only CIT is passed', () => {
		const taxSettings = {
			maxDeductionRate: 1 / 3,
			maxDeductionLimit: 300000,
		};
		const params = {
			totalIncome: 1500000,
			epf: 0,
			cit: 300000,
			ssf: 0,
			insurance: 0,
			taxSettings,
		};
		const result = getTotalTaxableAmount(params);
		expect(result.taxableIncome).toBe(1200000);
	});

	it('should correctly calculate total taxable amount when only EPF is passed', () => {
		const taxSettings = {
			maxDeductionRate: 1 / 3,
			maxDeductionLimit: 300000,
		};
		const params = {
			totalIncome: 1500000,
			epf: 300000,
			cit: 0,
			ssf: 0,
			insurance: 0,
			taxSettings,
		};
		const result = getTotalTaxableAmount(params);
		expect(result.taxableIncome).toBe(1200000);
	});

	it('should correctly calculate total taxable amount when only SSF is passed', () => {
		const taxSettings = {
			maxDeductionRate: 1 / 3,
			maxDeductionLimit: 300000,
			maxDeductionLimitWithSSF: 300000,
		};
		const params = {
			totalIncome: 1500000,
			epf: 0,
			cit: 0,
			ssf: 300000,
			insurance: 0,
			taxSettings,
		};
		const result = getTotalTaxableAmount(params);
		expect(result.taxableIncome).toBe(1200000);
	});

	it('should correctly calculate total taxable amount when all value EPF, SSF and CIT are passed', () => {
		const taxSettings = {
			maxDeductionRate: 1 / 3,
			maxDeductionLimit: 300000,
			maxDeductionLimitWithSSF: 500000,
		};
		const params = {
			totalIncome: 600000,
			epf: 30000,
			cit: 20000,
			ssf: 5000,
			insurance: 5000,
			taxSettings,
		};
		const result = getTotalTaxableAmount(params);
		expect(result.taxableIncome).toBe(540000);
	});

	it('should correctly calculate total taxable amount when only EPF and CIT are passed', () => {
		const taxSettings = {
			maxDeductionRate: 1 / 3,
			maxDeductionLimit: 300000,
		};
		const params = {
			totalIncome: 1200000,
			epf: 150000,
			cit: 200000,
			ssf: 0,
			insurance: 0,
			taxSettings,
		};
		const result = getTotalTaxableAmount(params);
		expect(result.taxableIncome).toBe(900000);
	});

	it('should cap the sum of EPF and CIT at 300,000 when the sum of EPF and CIT exceeds 300,000 and calculate taxable amount correctly', () => {
		const taxSettings = {
			maxDeductionRate: 1 / 3,
			maxDeductionLimit: 300000,
		};
		const params = {
			totalIncome: 1200000,
			epf: 250000,
			cit: 200000,
			ssf: 0,
			insurance: 0,
			taxSettings,
		};
		const result = getTotalTaxableAmount(params);
		expect(result.taxableIncome).toBe(900000);
	});

	it('should correctly calculate total taxable amount when only EPF and CIT are passed and capped at 33% of totalIncome', () => {
		const taxSettings = {
			maxDeductionRate: 1 / 3,
			maxDeductionLimit: 300000,
		};
		const params = {
			totalIncome: 1500000,
			epf: 200000,
			cit: 200000,
			ssf: 0,
			insurance: 0,
			taxSettings,
		};
		const result = getTotalTaxableAmount(params);
		expect(result.taxableIncome).toBe(1200000);
	});

	it('should correctly calculate total taxable amount when EPF, CIT, and SSF are passed and all capped at 500,000', () => {
		const taxSettings = {
			maxDeductionRate: 1 / 3,
			maxDeductionLimit: 300000,
			maxDeductionLimitWithSSF: 500000,
		};
		const params = {
			totalIncome: 2000000,
			epf: 200000,
			cit: 200000,
			ssf: 500000,
			insurance: 0,
			taxSettings,
		};
		const result = getTotalTaxableAmount(params);
		expect(result.taxableIncome).toBe(1500000);
	});

	it('should cap the sum of EPF,CIT & SSF at 33% of totalSalary when the sum of EPF and CIT exceeds 33% of totalSalary and calculate taxable amount correctly', () => {
		const taxSettings = {
			maxDeductionRate: 1 / 3,
			maxDeductionLimit: 300000,
			maxDeductionLimitWithSSF: 500000,
		};
		const params = {
			totalIncome: 1200000,
			epf: 250000,
			cit: 200000,
			ssf: 100000,
			insurance: 0,
			taxSettings,
		};
		const result = getTotalTaxableAmount(params);
		expect(result.taxableIncome).toBe(800000);
	});

	it('should cap the insurance at 40000 when more than 40,000 is passed and calculate totalTaxableAmount correctly', () => {
		const taxSettings = {
			maxDeductionRate: 1 / 3,
			maxDeductionLimit: 300000,
			maxInsuranceDeductionLimit: 40000,
		};
		const params = {
			totalIncome: 1200000,
			epf: 250000,
			cit: 200000,
			ssf: 0,
			insurance: 50000,
			taxSettings,
		};
		const result = getTotalTaxableAmount(params);
		expect(result.taxableIncome).toBe(860000);
	});
});

describe('Get Tax Amount With Brackets', () => {
	it('should correctly calculate the total tax amount using specified tax brackets when SSF value is passed', () => {
		const taxBrackets = [
			{ start: 0, end: 500000, rate: 0.01 },
			{ start: 500000, end: 700000, rate: 0.1 },
			{ start: 700000, end: 1000000, rate: 0.2 },
			{ start: 1000000, end: 2000000, rate: 0.3 },
			{ start: 2000000, end: 5000000, rate: 0.36 },
			{ start: 5000000, end: Infinity, rate: 0.39 },
		];

		const totalTaxableAmount = 535000;
		const ssf = true;

		const result = getTotalTaxAmountWithBrackets(
			taxBrackets,
			totalTaxableAmount,
			ssf,
		);

		expect(result).toStrictEqual([
			{
				assessibleIncome: 500000,
				carry: 35000,
				taxLiability: 0,
				taxRate: 0,
			},
			{ assessibleIncome: 35000, carry: 0, taxLiability: 3500, taxRate: 0.1 },
			{ assessibleIncome: 0, carry: 0, taxLiability: 0, taxRate: 0.2 },
			{ assessibleIncome: 0, carry: 0, taxLiability: 0, taxRate: 0.3 },
			{ assessibleIncome: 0, carry: 0, taxLiability: 0, taxRate: 0.36 },
			{ assessibleIncome: 0, carry: 0, taxLiability: 0, taxRate: 0.39 },
		]);
	});

	it('should correctly calculate the total tax amount using specified tax brackets when SSF value is not passed', () => {
		const taxBrackets = [
			{ start: 0, end: 500000, rate: 0.01 },
			{ start: 500000, end: 700000, rate: 0.1 },
			{ start: 700000, end: 1000000, rate: 0.2 },
			{ start: 1000000, end: 2000000, rate: 0.3 },
			{ start: 2000000, end: 5000000, rate: 0.36 },
			{ start: 5000000, end: Infinity, rate: 0.39 },
		];

		const totalTaxableAmount = 535000;
		const ssf = false;

		const result = getTotalTaxAmountWithBrackets(
			taxBrackets,
			totalTaxableAmount,
			ssf,
		);

		expect(result).toStrictEqual([
			{
				assessibleIncome: 500000,
				carry: 35000,
				taxLiability: 5000,
				taxRate: 0.01,
			},
			{ assessibleIncome: 35000, carry: 0, taxLiability: 3500, taxRate: 0.1 },
			{ assessibleIncome: 0, carry: 0, taxLiability: 0, taxRate: 0.2 },
			{ assessibleIncome: 0, carry: 0, taxLiability: 0, taxRate: 0.3 },
			{ assessibleIncome: 0, carry: 0, taxLiability: 0, taxRate: 0.36 },
			{ assessibleIncome: 0, carry: 0, taxLiability: 0, taxRate: 0.39 },
		]);
	});
});
