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
 * Data
 * Tax Slab Data
 */

interface TaxBracket {
	start: number;
	end: number;
	rate: number;
}

interface FiscalYear {
	fyStartDate: string;
	fyStartDateNe: string;
	fyEndDate: string;
	fyEndDateNe: string;
	maxDeductionRate: number;
	maxDeductionLimit: number;
	maxDeductionLimitWithSSF?: number;
	maxInsuranceDeductionLimit?: number;
	brackets: {
		single: TaxBracket[];
		married: TaxBracket[];
	};
}

interface FYData {
	[key: string]: FiscalYear;
}

const data: FYData = {
	'2070/71': {
		fyStartDate: 'July 16, 2013',
		fyStartDateNe: 'Shrawan 1, 2070',
		fyEndDate: 'July 16, 2014',
		fyEndDateNe: 'Ashad 32, 2071',
		maxDeductionRate: 0.33,
		maxDeductionLimit: 300000,
		brackets: {
			single: [
				{
					start: 0.0,
					end: 400000.0,
					rate: 0.01,
				},
				{
					start: 400000.0,
					end: 500000.0,
					rate: 0.1,
				},
				{
					start: 500000.0,
					end: 700000.0,
					rate: 0.2,
				},
				{
					start: 700000.0,
					end: 2000000.0,
					rate: 0.3,
				},
			],
			married: [
				{
					start: 0.0,
					end: 450000.0,
					rate: 0.01,
				},
				{
					start: 450000.0,
					end: 550000.0,
					rate: 0.1,
				},
				{
					start: 550000.0,
					end: 750000.0,
					rate: 0.2,
				},
				{
					start: 750000.0,
					end: 2000000.0,
					rate: 0.3,
				},
			],
		},
	},
	'2071/72': {
		fyStartDate: 'July 17, 2014',
		fyStartDateNe: 'Shrawan 1, 2071',
		fyEndDate: 'July 16, 2015',
		fyEndDateNe: 'Ashad 31, 2072',
		maxDeductionRate: 0.33,
		maxDeductionLimit: 300000,
		brackets: {
			single: [
				{
					start: 0.0,
					end: 400000.0,
					rate: 0.01,
				},
				{
					start: 400000.0,
					end: 500000.0,
					rate: 0.1,
				},
				{
					start: 500000.0,
					end: 700000.0,
					rate: 0.2,
				},
				{
					start: 700000.0,
					end: 2000000.0,
					rate: 0.3,
				},
			],
			married: [
				{
					start: 0.0,
					end: 450000.0,
					rate: 0.01,
				},
				{
					start: 450000.0,
					end: 550000.0,
					rate: 0.1,
				},
				{
					start: 550000.0,
					end: 750000.0,
					rate: 0.2,
				},
				{
					start: 750000.0,
					end: 2000000.0,
					rate: 0.3,
				},
			],
		},
	},
	'2072/73': {
		fyStartDate: 'July 17, 2015',
		fyStartDateNe: 'Shrawan 1, 2072',
		fyEndDate: 'July 15, 2016',
		fyEndDateNe: 'Ashad 31, 2073',
		maxDeductionRate: 0.33,
		maxDeductionLimit: 300000,
		brackets: {
			single: [
				{
					start: 0.0,
					end: 400000.0,
					rate: 0.01,
				},
				{
					start: 400000.0,
					end: 500000.0,
					rate: 0.1,
				},
				{
					start: 500000.0,
					end: 700000.0,
					rate: 0.2,
				},
				{
					start: 700000.0,
					end: 2000000.0,
					rate: 0.3,
				},
			],
			married: [
				{
					start: 0.0,
					end: 450000.0,
					rate: 0.01,
				},
				{
					start: 450000.0,
					end: 550000.0,
					rate: 0.1,
				},
				{
					start: 550000.0,
					end: 750000.0,
					rate: 0.2,
				},
				{
					start: 750000.0,
					end: 2000000.0,
					rate: 0.3,
				},
			],
		},
	},
	'2073/74': {
		fyStartDate: 'July 16, 2016',
		fyStartDateNe: 'Shrawan 1, 2073',
		fyEndDate: 'July 15, 2017',
		fyEndDateNe: 'Ashad 31, 2074',
		maxDeductionRate: 0.33,
		maxDeductionLimit: 300000,
		brackets: {
			single: [
				{
					start: 0.0,
					end: 400000.0,
					rate: 0.01,
				},
				{
					start: 400000.0,
					end: 500000.0,
					rate: 0.1,
				},
				{
					start: 500000.0,
					end: 700000.0,
					rate: 0.2,
				},
				{
					start: 700000.0,
					end: 2000000.0,
					rate: 0.3,
				},
			],
			married: [
				{
					start: 0.0,
					end: 450000.0,
					rate: 0.01,
				},
				{
					start: 450000.0,
					end: 550000.0,
					rate: 0.1,
				},
				{
					start: 550000.0,
					end: 750000.0,
					rate: 0.2,
				},
				{
					start: 750000.0,
					end: 2000000.0,
					rate: 0.3,
				},
			],
		},
	},
	'2074/75': {
		fyStartDate: 'Jul 16, 2017',
		fyStartDateNe: 'Shrawan 1, 2074',
		fyEndDate: 'July 16, 2018',
		fyEndDateNe: 'Asadh 32, 2075',
		maxDeductionRate: 0.33,
		maxDeductionLimit: 300000,
		brackets: {
			single: [
				{
					start: 0.0,
					end: 400000.0,
					rate: 0.01,
				},
				{
					start: 400000.0,
					end: 500000.0,
					rate: 0.1,
				},
				{
					start: 500000.0,
					end: 700000.0,
					rate: 0.2,
				},
				{
					start: 700000.0,
					end: 2000000.0,
					rate: 0.3,
				},
			],
			married: [
				{
					start: 0.0,
					end: 450000.0,
					rate: 0.01,
				},
				{
					start: 450000.0,
					end: 550000.0,
					rate: 0.1,
				},
				{
					start: 550000.0,
					end: 750000.0,
					rate: 0.2,
				},
				{
					start: 750000.0,
					end: 2000000.0,
					rate: 0.3,
				},
			],
		},
	},
	'2075/76': {
		fyStartDate: 'July 17, 2018',
		fyStartDateNe: 'Shrawan 1, 2075',
		fyEndDate: 'July 16, 2019',
		fyEndDateNe: 'Asadh 31, 2076',
		maxDeductionRate: 0.33,
		maxDeductionLimit: 300000,
		brackets: {
			single: [
				{
					start: 0.0,
					end: 400000.0,
					rate: 0.01,
				},
				{
					start: 400000.0,
					end: 500000.0,
					rate: 0.1,
				},
				{
					start: 500000.0,
					end: 700000.0,
					rate: 0.2,
				},
				{
					start: 700000.0,
					end: 2000000.0,
					rate: 0.3,
				},
			],
			married: [
				{
					start: 0.0,
					end: 450000.0,
					rate: 0.01,
				},
				{
					start: 450000.0,
					end: 550000.0,
					rate: 0.1,
				},
				{
					start: 550000.0,
					end: 750000.0,
					rate: 0.2,
				},
				{
					start: 750000.0,
					end: 2000000.0,
					rate: 0.3,
				},
			],
		},
	},
	'2076/77': {
		fyStartDate: 'July 17, 2019',
		fyStartDateNe: 'Shrawan 1, 2076',
		fyEndDate: 'July 15, 2020',
		fyEndDateNe: 'Asadh 31, 2077',
		maxDeductionRate: 0.33,
		maxDeductionLimit: 300000,
		brackets: {
			single: [
				{
					start: 0.0,
					end: 400000.0,
					rate: 0.01,
				},
				{
					start: 400000.0,
					end: 500000.0,
					rate: 0.1,
				},
				{
					start: 500000.0,
					end: 700000.0,
					rate: 0.2,
				},
				{
					start: 700000.0,
					end: 2000000.0,
					rate: 0.3,
				},
			],
			married: [
				{
					start: 0.0,
					end: 450000.0,
					rate: 0.01,
				},
				{
					start: 450000.0,
					end: 550000.0,
					rate: 0.1,
				},
				{
					start: 550000.0,
					end: 750000.0,
					rate: 0.2,
				},
				{
					start: 750000.0,
					end: 2000000.0,
					rate: 0.3,
				},
			],
		},
	},
	'2077/78': {
		fyStartDate: 'July 16, 2013',
		fyStartDateNe: 'Shrawan 1, 2070',
		fyEndDate: 'July 16, 2014',
		fyEndDateNe: 'Ashad 32, 2071',
		maxDeductionRate: 0.33,
		maxDeductionLimit: 300000,
		brackets: {
			single: [
				{
					start: 0.0,
					end: 400000.0,
					rate: 0.01,
				},
				{
					start: 400000.0,
					end: 500000.0,
					rate: 0.1,
				},
				{
					start: 500000.0,
					end: 700000.0,
					rate: 0.2,
				},
				{
					start: 700000.0,
					end: 2000000.0,
					rate: 0.3,
				},
			],
			married: [
				{
					start: 0.0,
					end: 450000.0,
					rate: 0.01,
				},
				{
					start: 450000.0,
					end: 550000.0,
					rate: 0.1,
				},
				{
					start: 550000.0,
					end: 750000.0,
					rate: 0.2,
				},
				{
					start: 750000.0,
					end: 2000000.0,
					rate: 0.3,
				},
			],
		},
	},
	'2078/79': {
		fyStartDate: 'July 16, 2021',
		fyStartDateNe: 'Shrawan 1, 2078',
		fyEndDate: 'July 16, 2022',
		fyEndDateNe: 'Asadh 32, 2079',
		maxDeductionRate: 0.33,
		maxDeductionLimit: 300000,
		brackets: {
			single: [
				{
					start: 0.0,
					end: 400000.0,
					rate: 0.01,
				},
				{
					start: 400000.0,
					end: 500000.0,
					rate: 0.1,
				},
				{
					start: 500000.0,
					end: 700000.0,
					rate: 0.2,
				},
				{
					start: 700000.0,
					end: 2000000.0,
					rate: 0.3,
				},
			],
			married: [
				{
					start: 0.0,
					end: 450000.0,
					rate: 0.01,
				},
				{
					start: 450000.0,
					end: 550000.0,
					rate: 0.1,
				},
				{
					start: 550000.0,
					end: 750000.0,
					rate: 0.2,
				},
				{
					start: 750000.0,
					end: 2000000.0,
					rate: 0.3,
				},
			],
		},
	},
	'2079/80': {
		fyStartDate: 'July 17, 2022',
		fyStartDateNe: 'Shrawan 1, 2079',
		fyEndDate: 'July 16, 2023',
		fyEndDateNe: 'Asadh 31, 2080',
		maxDeductionRate: 0.33,
		maxDeductionLimit: 300000,
		brackets: {
			single: [
				{
					start: 0.0,
					end: 400000.0,
					rate: 0.01,
				},
				{
					start: 400000.0,
					end: 500000.0,
					rate: 0.1,
				},
				{
					start: 500000.0,
					end: 700000.0,
					rate: 0.2,
				},
				{
					start: 700000.0,
					end: 2000000.0,
					rate: 0.3,
				},
			],
			married: [
				{
					start: 0.0,
					end: 450000.0,
					rate: 0.01,
				},
				{
					start: 450000.0,
					end: 550000.0,
					rate: 0.1,
				},
				{
					start: 550000.0,
					end: 750000.0,
					rate: 0.2,
				},
				{
					start: 750000.0,
					end: 2000000.0,
					rate: 0.3,
				},
			],
		},
	},
	'2080/81': {
		fyStartDate: 'July 17, 2023',
		fyStartDateNe: 'Shrawan 1, 2080',
		fyEndDate: 'July 15, 2024',
		fyEndDateNe: 'Asadh 31, 2081',
		maxDeductionRate: 1 / 3,
		maxDeductionLimit: 3_00_000,
		maxDeductionLimitWithSSF: 5_00_000,
		maxInsuranceDeductionLimit: 40_000,
		brackets: {
			single: [
				{
					start: 0,
					end: 5_00_000,
					rate: 0.01,
				},
				{
					start: 5_00_000,
					end: 7_00_000,
					rate: 0.1,
				},
				{
					start: 7_00_000,
					end: 10_00_000,
					rate: 0.2,
				},
				{
					start: 10_00_000,
					end: 20_00_000,
					rate: 0.3,
				},
				{
					start: 20_00_000,
					end: 50_00_000,
					rate: 0.36,
				},
				{
					start: 50_00_000,
					end: Infinity,
					rate: 0.39,
				},
			],
			married: [
				{
					start: 0,
					end: 6_00_000,
					rate: 0.01,
				},
				{
					start: 6_00_000,
					end: 8_00_000,
					rate: 0.1,
				},
				{
					start: 8_00_000,
					end: 11_00_000,
					rate: 0.2,
				},
				{
					start: 11_00_000,
					end: 20_00_000,
					rate: 0.3,
				},
				{
					start: 20_00_000,
					end: 50_00_000,
					rate: 0.36,
				},
				{
					start: 50_00_000,
					end: Infinity,
					rate: 0.39,
				},
			],
		},
	},
};

export default data;
