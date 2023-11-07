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
 * calculator.js
 */

/**
 * Returns the total taxable totalIncome along with Insurance and Sum of SSF, EPF, and CIT 
 *
 * @param totalIncome total income
 * @param epf epf amount
 * @param cit cit amount
 * @param ssf ssf amount
 * @param insurance insurance amount
 * @param taxSettings from slected tax data
 * 
 */
const getTotalTaxableAmount = (
	totalIncome,
	epf,
	cit,
	ssf,
	insurance,
	taxSettings,
) => {
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

	// if totalDeduction consits of SSF
	if (ssf > 0) {
		// defining deductionThreshold comparing mexDeductionLimitWithSSF (5 lakhs) and maxDeducatableAmount (33%) whichever is lower
		deductionThreshold = maxDeductionLimitWithSSF < maxDeductableAmount
			? maxDeductionLimitWithSSF
			: maxDeductableAmount;
	} else {
		// defining deductionThreshold comparing mexDeductionLimit (3 lakhs) and maxDeducatableAmount (33%) whichever is lower
		deductionThreshold = maxDeductionLimit < maxDeductableAmount
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
	if (insurance > maxInsuranceDeductionLimit) {
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
 * @param totalTaxableIncome total income (can be carry left over from last bracket)
 */

const getTotalTaxForRateWithIncome = (taxRate, totalTaxableIncome) => {
	const incomeTaxRateDifference = taxRate.end - taxRate.start;
	const totalMinusDifference = totalTaxableIncome - incomeTaxRateDifference;
	const carry = totalMinusDifference > 0 ? totalMinusDifference : 0;

	if (totalTaxableIncome > 0) {
		if (totalTaxableIncome >= incomeTaxRateDifference) {
			return {
				taxLiability: incomeTaxRateDifference * taxRate.rate,
				taxRate: taxRate.rate,
				assesibleIncome: incomeTaxRateDifference,
				carry,
			};
		}
		return {
			taxLiability: totalTaxableIncome * taxRate.rate,
			taxRate: taxRate.rate,
			assesibleIncome: totalTaxableIncome,
			carry,
		};
	}

	return {
		taxLiability: 0,
		taxRate: taxRate.rate,
		assesibleIncome: 0,
		carry: carry,
	};
};

/**
 * Returns a all tax breakdown of income.
 * @param taxBrackets from selected tax data
 * @param totalTaxableAmount total calculated taxable amount
 * @param isSsf if totalDeduction consists of SSF
 */

function getTotalTaxAmountWithBrackets(taxBrackets, totalTaxableAmount, isSsf) {
	let taxBreakDownArray = [];
	return taxBrackets.map((item, index) => {
		// check if ssf has been deducted
		if (isSsf && index === 0) {
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
 * Returns two decimal number converted from original input float number
 *
 * @param amount floating number
 */

const getAmountRounded = (amount) => {
	return Math.round(amount * 100) / 100;
};

export {
	getTotalTaxableAmount,
	getTotalTaxAmountWithBrackets,
	getAmountRounded,
};
