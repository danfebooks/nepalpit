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

/**
 * Returns the total taxable amount based on the provided parameters.
 *
 * @param {Object} params - Parameters for calculating taxable amount.
 * @param {number} params.totalIncome - Total income before deductions.
 * @param {number} params.epf - Employees' Provident Fund.
 * @param {number} params.cit - Contribution to the Citizen Investment Trust.
 * @param {number} params.ssf - Social Security Fund.
 * @param {number} params.insurance - Insurance amount.
 * @param {Object} params.taxSettings - Settings for tax calculation.
 * @param {number} params.taxSettings.maxDeductionRate - Maximum deduction rate.
 * @param {number} params.taxSettings.maxDeductionLimit - Maximum deduction limit.
 * @param {number} params.taxSettings.maxDeductionLimitWithSSF - Maximum deduction limit considering Social Security Fund.
 * @param {number} params.taxSettings.maxInsuranceDeductionLimit - Maximum insurance deduction limit.
 * @returns {Object} TotalTaxableAmountResult - Object containing taxable income and deductions.
 * @returns {number} TotalTaxableAmountResult.taxableIncome - Total taxable income.
 * @returns {number} TotalTaxableAmountResult.sumOfSsfEpfAndCit - Sum of Employees' Provident Fund, Citizen Investment Trust, and Social Security Fund.
 * @returns {number} TotalTaxableAmountResult.finalInsurance - Final insurance amount considered for tax calculation.
 */
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
