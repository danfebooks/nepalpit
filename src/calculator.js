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
 * Returns the total taxable totalIncome
 *
 * @param totalIncome total income
 * @param epf epf amount
 * @param cit cit amount
 * @param otherDeduction otherDeduction amount
 * @param taxSettings from slected tax data
 */
const getTotalTaxableAmount = (
	totalIncome,
	epf,
	cit,
	otherDeduction,
	taxSettings,
) => {
	const { maxDeductionRate, maxDeductionLimit, maxEPFRate } = taxSettings;
	const totalDeduction = epf + cit + otherDeduction;
	const maxDeductableAmount = totalIncome * maxDeductionRate; // 33% of income
	let actualDeduction = 0;

	if (epf > totalIncome * maxEPFRate) {
		throw new Error('The EPF must be smaller than 20% of salary');
	}
	// if the given deduction is greater than 33 % if income (maxDeductableAmount) and also greater than 3 lakh (maxDeductionLimit)
	if (
		totalDeduction > maxDeductableAmount &&
		totalDeduction > maxDeductionLimit
	) {
		actualDeduction = maxDeductableAmount;
	} else if (
		//if the given deduction is less than 33 % (maxDeductableAmount) of income and also less than 3 lakh(maxDeductionLimit)
		totalDeduction <= maxDeductableAmount &&
		totalDeduction <= maxDeductionLimit
	) {
		actualDeduction = totalDeduction;
	} else if (
		//if the given deduction is less than 33 % (maxDeductableAmount) of income and greater than 3 lakh(maxDeductionLimit)
		totalDeduction <= maxDeductableAmount &&
		totalDeduction >= maxDeductionLimit
	) {
		actualDeduction = maxDeductionLimit;
	}
	//if the given deduction is greater than 33 % of income (maxDeductableAmount) and less than 3 lakh (maxDeductionLimit)
	else {
		actualDeduction = maxDeductableAmount;
	}

	return totalIncome - actualDeduction;
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
 */

function getTotalTaxAmountWithBrackets(taxBrackets, totalTaxableAmount) {
	let taxBreakDownArray = [];
	return taxBrackets.map((item, index) => {
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
