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

import { breakdown } from './breakdown';
import {
	getTotalTaxableAmount,
	getTotalTaxAmountWithBrackets,
	getAmountRounded,
} from './calculator';

interface TaxParams {
	income: number;
	epf: number;
	cit: number;
	ssf: number;
	insurance: number;
	year: string;
	single: boolean;
}

interface TaxResult {
	sumOfSsfEpfAndCit: number;
	insurance: number;
	totalIncome: number;
	totalDeduction: number;
	netAssessable: number;
	totalTaxWithBrackets: {
		assessibleIncome: number;
		rate: number;
		taxLiability: number;
	}[];
	totalAssessibleIncome: number;
	totalTaxLiability: number;
	netTaxLiabilityMonthly: number;
}

const tax = (options: TaxParams): TaxResult => {
	const { income, epf, cit, ssf, insurance, year, single } = options;

	const meta = breakdown(year);
	console.log('Given year is', year);
	const taxSettings = {
		maxDeductionRate: meta.maxDeductionRate,
		maxDeductionLimit: meta.maxDeductionLimit,
		maxDeductionLimitWithSSF: meta.maxDeductionLimitWithSSF,
		maxInsuranceDeductionLimit: meta.maxInsuranceDeductionLimit,
	};

	const {
		taxableIncome,
		sumOfSsfEpfAndCit,
		finalInsurance,
	} = getTotalTaxableAmount({
		totalIncome: income,
		epf,
		cit,
		ssf,
		insurance,
		taxSettings,
	});
	const maritalStatus = single ? 'single' : 'married';
	const totalTaxAmountWithBrackets = getTotalTaxAmountWithBrackets(
		meta.brackets[maritalStatus],
		taxableIncome,
		ssf > 0,
	);

	const result: TaxResult = {
		sumOfSsfEpfAndCit: sumOfSsfEpfAndCit,
		insurance: finalInsurance,
		totalIncome: income,
		totalDeduction: income - taxableIncome,
		netAssessable: taxableIncome,
		totalTaxWithBrackets: totalTaxAmountWithBrackets
			.filter((item) => item.assessibleIncome > 0)
			.map((item) => {
				const taxObj: {
					assessibleIncome: number;
					rate: number;
					taxLiability: number;
				} = {
					assessibleIncome: item.assessibleIncome,
					rate: item.taxRate * 100,
					taxLiability: item.taxLiability,
				};
				return taxObj;
			}),
		totalAssessibleIncome: totalTaxAmountWithBrackets.reduce(
			(initialValue, value) => initialValue + value.assessibleIncome,
			0,
		),

		totalTaxLiability: totalTaxAmountWithBrackets.reduce(
			(initialValue, value) => initialValue + value.taxLiability,
			0,
		),

		netTaxLiabilityMonthly: getAmountRounded(
			totalTaxAmountWithBrackets.reduce(
				(initialValue, value) => initialValue + value.taxLiability,
				0,
			) / 12,
		),
	};

	return result;
};

const meta = () => {
	return 'meta work in porogress';
};

export { tax, meta };
