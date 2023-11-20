/*!
 *
 * @danfebooks/nepalpit
 * Personal Income Tax (PIT) calculator utility for Nepal
 * https://www.danfebooks.com/en/calculators/nepal-personal-income-tax
 *
 *
 * MIT License
 * Copyright (c) 2020 - 2021 DanfeBooks®
 *
 * calculator.ts
 */

interface TotalTaxableAmountResult {
	taxableIncome: number;
	sumOfSsfEpfAndCit: number;
	finalInsurance: number;
}

interface TaxRate {
	start: number;
	end: number;
	rate: number;
}

interface TotalTaxForRateWithIncomeResult {
	taxLiability: number;
	taxRate: number;
	assessibleIncome: number;
	carry: number;
}

interface TotalTaxableAmountParams {
	totalIncome: number;
	epf: number;
	cit: number;
	ssf: number;
	insurance: number;
	taxSettings: {
		maxDeductionRate: number;
		maxDeductionLimit: number;
		maxDeductionLimitWithSSF?: number;
		maxInsuranceDeductionLimit?: number;
	};
}

const getTotalTaxableAmount = ({
	totalIncome,
	epf,
	cit,
	ssf,
	insurance,
	taxSettings,
}: TotalTaxableAmountParams): TotalTaxableAmountResult => {
	const {
		maxDeductionRate,
		maxDeductionLimit,
		maxDeductionLimitWithSSF,
		maxInsuranceDeductionLimit,
	} = taxSettings;
	const totalDeduction = epf + cit + ssf;
	const maxDeductableAmount = totalIncome * maxDeductionRate;

	let actualDeduction = 0;
	let deductionThreshold = 0;

	// if totalDeduction consists of SSF
	if (maxDeductionLimitWithSSF && ssf > 0) {
		// defining deductionThreshold comparing maxDeductionLimitWithSSF (5 lakhs) and maxDeductableAmount (33%) whichever is lower
		deductionThreshold =
			maxDeductionLimitWithSSF < maxDeductableAmount
				? maxDeductionLimitWithSSF
				: maxDeductableAmount;
	} else {
		// defining deductionThreshold comparing maxDeductionLimit (3 lakhs) and maxDeductableAmount (33%) whichever is lower
		deductionThreshold =
			maxDeductionLimit < maxDeductableAmount
				? maxDeductionLimit
				: maxDeductableAmount;
	}
	if (totalDeduction > deductionThreshold) {
		actualDeduction = deductionThreshold;
	} else {
		actualDeduction = totalDeduction;
	}

	// if insurance is greater than 40,000
	let actualInsurance = insurance;
	if (maxInsuranceDeductionLimit && insurance > maxInsuranceDeductionLimit) {
		actualInsurance = maxInsuranceDeductionLimit;
	}

	return {
		taxableIncome: totalIncome - actualDeduction - actualInsurance,
		sumOfSsfEpfAndCit: actualDeduction,
		finalInsurance: actualInsurance,
	};
};

/**
 * Returns the total tax with tax brackets
 *
 * @param taxRate tax rate from selected tax data
 * @param totalTaxableIncome total income (can be carry left over from the last bracket)
 */

const getTotalTaxForRateWithIncome = (
	taxRate: TaxRate,
	totalTaxableIncome: number,
): TotalTaxForRateWithIncomeResult => {
	const incomeTaxRateDifference = taxRate.end - taxRate.start;
	const totalMinusDifference = totalTaxableIncome - incomeTaxRateDifference;
	const carry = totalMinusDifference > 0 ? totalMinusDifference : 0;

	if (totalTaxableIncome > 0) {
		if (totalTaxableIncome >= incomeTaxRateDifference) {
			return {
				taxLiability: incomeTaxRateDifference * taxRate.rate,
				taxRate: taxRate.rate,
				assessibleIncome: incomeTaxRateDifference,
				carry,
			};
		}
		return {
			taxLiability: totalTaxableIncome * taxRate.rate,
			taxRate: taxRate.rate,
			assessibleIncome: totalTaxableIncome,
			carry,
		};
	}

	return {
		taxLiability: 0,
		taxRate: taxRate.rate,
		assessibleIncome: 0,
		carry: carry,
	};
};

/**
 * Returns all tax breakdown of income.
 * @param taxBrackets from selected tax data
 * @param totalTaxableAmount total calculated taxable amount
 * @param ssf if totalDeduction consists of SSF
 */
function getTotalTaxAmountWithBrackets(
	taxBrackets: TaxRate[],
	totalTaxableAmount: number,
	ssf: boolean,
): TotalTaxForRateWithIncomeResult[] {
	const taxBreakDownArray: TotalTaxForRateWithIncomeResult[] = [];
	return taxBrackets.map((item, index) => {
		// check if ssf has been deducted
		if (ssf && index === 0) {
			item.rate = 0;
		}

		const result = getTotalTaxForRateWithIncome(
			item,
			index === 0 ? totalTaxableAmount : taxBreakDownArray[index - 1].carry,
		);
		taxBreakDownArray.push(result);
		return result;
	});
}

/**
 * Returns a two-decimal number converted from the original input float number
 *
 * @param amount floating number
 */
const getAmountRounded = (amount: number): number => {
	return Math.round(amount * 100) / 100;
};

export {
	getTotalTaxableAmount,
	getTotalTaxAmountWithBrackets,
	getAmountRounded,
};
