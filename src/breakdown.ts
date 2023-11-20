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
 * Tax Breakdown
 * This is the metadata for tax brackets in Nepal with FY fyStartDate and fyEndDateDate
 */

import data, { FiscalYear } from './data';
import cloneDeep from 'lodash.clonedeep';

const breakdown = (year: string): FiscalYear => {
	const brackets = cloneDeep(data[year]);

	return brackets;
};

export { breakdown };
