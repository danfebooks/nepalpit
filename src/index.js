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
 * Index.js
 */

import { breakdown } from './breakdown.js';
import {
	getTotalTaxableAmount,
	getTotalTaxAmountWithBrackets,
	getAmountRounded,
} from './calculator';

const tax = (options) => {
	const { income, epf, cit, ssf, insurance, year, single } = options;
	const meta = breakdown(year);
	console.log('Given year is', year);
	const {
		taxableIncome,
		sumOfSsfEpfAndCit,
		finalInsurance,
	} = getTotalTaxableAmount(income, epf, cit, ssf, insurance, meta);
	const maritalStatus = single ? 'single' : 'married';
	const totalTaxAmountWithBrackets = getTotalTaxAmountWithBrackets(
		meta.brackets[maritalStatus],
		taxableIncome,
		ssf > 0,
	);

	const format = (number) => new Intl.NumberFormat().format(number);

	const result = {
		sumOfSsfEpfAndCit: format(sumOfSsfEpfAndCit),
		insurance: format(finalInsurance),
		totalIncome: format(income),
		totalDeduction: format(income - taxableIncome),
		netAssessable: format(taxableIncome),
		totalTaxWithBrackets: totalTaxAmountWithBrackets
			.filter((item) => item.assesibleIncome > 0)
			.map((item) => {
				const taxObj = {};
				taxObj.assesibleIncome = format(item.assesibleIncome);
				taxObj.rate = item.taxRate * 100;
				taxObj.taxLiability = format(item.taxLiability);
				return taxObj;
			}),
		totalAssesibleIncome: format(
			totalTaxAmountWithBrackets.reduce(
				(initialValue, value) => initialValue + value.assesibleIncome,
				0,
			),
		),
		totalTaxLiability: format(
			totalTaxAmountWithBrackets.reduce(
				(initialValue, value) => initialValue + value.taxLiability,
				0,
			),
		),
		netTaxLiabilityMonthly: format(
			getAmountRounded(
				totalTaxAmountWithBrackets.reduce(
					(initialValue, value) => initialValue + value.taxLiability,
					0,
				) / 12,
			),
		),
	};

	return result;
};

const meta = () => {
	return 'meta work in porogress';
};

export { tax, meta };
