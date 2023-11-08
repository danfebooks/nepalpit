(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("danfebooks", [], factory);
	else if(typeof exports === 'object')
		exports["danfebooks"] = factory();
	else
		root["danfebooks"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/breakdown.ts":
/*!**************************!*\
  !*** ./src/breakdown.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.breakdown = void 0;
const data_1 = __importDefault(__webpack_require__(/*! ./data */ "./src/data.ts"));
// will need explicit type definition
const breakdown = (year) => {
    const brackets = data_1.default[year];
    return brackets;
};
exports.breakdown = breakdown;


/***/ }),

/***/ "./src/calculator.ts":
/*!***************************!*\
  !*** ./src/calculator.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAmountRounded = exports.getTotalTaxAmountWithBrackets = exports.getTotalTaxableAmount = void 0;
const getTotalTaxableAmount = ({ totalIncome, epf, cit, ssf, insurance, taxSettings, }) => {
    const { maxDeductionRate, maxDeductionLimit, maxDeductionLimitWithSSF, maxInsuranceDeductionLimit, } = taxSettings;
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
    }
    else {
        // defining deductionThreshold comparing maxDeductionLimit (3 lakhs) and maxDeductableAmount (33%) whichever is lower
        deductionThreshold =
            maxDeductionLimit < maxDeductableAmount
                ? maxDeductionLimit
                : maxDeductableAmount;
    }
    if (totalDeduction > deductionThreshold) {
        actualDeduction = deductionThreshold;
    }
    else {
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
exports.getTotalTaxableAmount = getTotalTaxableAmount;
/**
 * Returns the total tax with tax brackets
 *
 * @param taxRate tax rate from selected tax data
 * @param totalTaxableIncome total income (can be carry left over from the last bracket)
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
function getTotalTaxAmountWithBrackets(taxBrackets, totalTaxableAmount, ssf) {
    let taxBreakDownArray = [];
    return taxBrackets.map((item, index) => {
        // check if ssf has been deducted
        if (ssf && index === 0) {
            item.rate = 0;
        }
        const result = getTotalTaxForRateWithIncome(item, index === 0 ? totalTaxableAmount : taxBreakDownArray[index - 1].carry);
        taxBreakDownArray.push(result);
        return result;
    });
}
exports.getTotalTaxAmountWithBrackets = getTotalTaxAmountWithBrackets;
/**
 * Returns a two-decimal number converted from the original input float number
 *
 * @param amount floating number
 */
const getAmountRounded = (amount) => {
    return Math.round(amount * 100) / 100;
};
exports.getAmountRounded = getAmountRounded;


/***/ }),

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const data = {
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
        maxDeductionLimit: 300000,
        maxDeductionLimitWithSSF: 500000,
        maxInsuranceDeductionLimit: 40000,
        brackets: {
            single: [
                {
                    start: 0,
                    end: 500000,
                    rate: 0.01,
                },
                {
                    start: 500000,
                    end: 700000,
                    rate: 0.1,
                },
                {
                    start: 700000,
                    end: 1000000,
                    rate: 0.2,
                },
                {
                    start: 1000000,
                    end: 2000000,
                    rate: 0.3,
                },
                {
                    start: 2000000,
                    end: 5000000,
                    rate: 0.36,
                },
                {
                    start: 5000000,
                    end: Infinity,
                    rate: 0.39,
                },
            ],
            married: [
                {
                    start: 0,
                    end: 600000,
                    rate: 0.01,
                },
                {
                    start: 600000,
                    end: 800000,
                    rate: 0.1,
                },
                {
                    start: 800000,
                    end: 1100000,
                    rate: 0.2,
                },
                {
                    start: 1100000,
                    end: 2000000,
                    rate: 0.3,
                },
                {
                    start: 2000000,
                    end: 5000000,
                    rate: 0.36,
                },
                {
                    start: 5000000,
                    end: Infinity,
                    rate: 0.39,
                },
            ],
        },
    },
};
exports.default = data;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.meta = exports.tax = void 0;
const breakdown_1 = __webpack_require__(/*! ./breakdown */ "./src/breakdown.ts");
const calculator_1 = __webpack_require__(/*! ./calculator */ "./src/calculator.ts");
const tax = (options) => {
    const { income, epf, cit, ssf, insurance, year, single } = options;
    const meta = (0, breakdown_1.breakdown)(year);
    console.log('Given year is', year);
    const taxSettings = {
        maxDeductionRate: meta.maxDeductionRate,
        maxDeductionLimit: meta.maxDeductionLimit,
        maxDeductionLimitWithSSF: meta.maxDeductionLimitWithSSF,
        maxInsuranceDeductionLimit: meta.maxInsuranceDeductionLimit,
    };
    const { taxableIncome, sumOfSsfEpfAndCit, finalInsurance, } = (0, calculator_1.getTotalTaxableAmount)({
        totalIncome: income,
        epf,
        cit,
        ssf,
        insurance,
        taxSettings,
    });
    const maritalStatus = single ? 'single' : 'married';
    const totalTaxAmountWithBrackets = (0, calculator_1.getTotalTaxAmountWithBrackets)(meta.brackets[maritalStatus], taxableIncome, ssf > 0);
    const result = {
        sumOfSsfEpfAndCit: sumOfSsfEpfAndCit,
        insurance: finalInsurance,
        totalIncome: income,
        totalDeduction: income - taxableIncome,
        netAssessable: taxableIncome,
        totalTaxWithBrackets: totalTaxAmountWithBrackets
            .filter((item) => item.assessibleIncome > 0)
            .map((item) => {
            const taxObj = {
                assessibleIncome: item.assessibleIncome,
                rate: item.taxRate * 100,
                taxLiability: item.taxLiability,
            };
            return taxObj;
        }),
        totalAssessibleIncome: totalTaxAmountWithBrackets.reduce((initialValue, value) => initialValue + value.assessibleIncome, 0),
        totalTaxLiability: totalTaxAmountWithBrackets.reduce((initialValue, value) => initialValue + value.taxLiability, 0),
        netTaxLiabilityMonthly: (0, calculator_1.getAmountRounded)(totalTaxAmountWithBrackets.reduce((initialValue, value) => initialValue + value.taxLiability, 0) / 12),
    };
    return result;
};
exports.tax = tax;
const meta = () => {
    return 'meta work in porogress';
};
exports.meta = meta;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzLy4vc3JjL2JyZWFrZG93bi50cyIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzLy4vc3JjL2NhbGN1bGF0b3IudHMiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy8uL3NyYy9kYXRhLnRzIiwid2VicGFjazovL2RhbmZlYm9va3MvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7Ozs7QUNWQTs7Ozs7Ozs7Ozs7O0dBWUc7Ozs7OztBQUVILG1GQUEwQjtBQUUxQixxQ0FBcUM7QUFDckMsTUFBTSxTQUFTLEdBQUcsQ0FBQyxJQUFZLEVBQUUsRUFBRTtJQUNsQyxNQUFNLFFBQVEsR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFNUIsT0FBTyxRQUFRLENBQUM7QUFDakIsQ0FBQyxDQUFDO0FBRU8sOEJBQVM7Ozs7Ozs7Ozs7OztBQ3ZCbEI7Ozs7Ozs7Ozs7O0dBV0c7OztBQW1DSCxNQUFNLHFCQUFxQixHQUFHLENBQUMsRUFDOUIsV0FBVyxFQUNYLEdBQUcsRUFDSCxHQUFHLEVBQ0gsR0FBRyxFQUNILFNBQVMsRUFDVCxXQUFXLEdBQ2UsRUFBNEIsRUFBRTtJQUN4RCxNQUFNLEVBQ0wsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQix3QkFBd0IsRUFDeEIsMEJBQTBCLEdBQzFCLEdBQUcsV0FBVyxDQUFDO0lBQ2hCLE1BQU0sY0FBYyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ3ZDLE1BQU0sbUJBQW1CLEdBQUcs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O1lBQ2IsTUFBTSxNQUFNLEdBSVI7Z0JBQ0gsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtnQkFDdkMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRztnQkFDeEIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO2FBQy9CLENBQUM7WUFDRixPQUFPLE1BQU0sQ0FBQztRQUNmLENBQUMsQ0FBQztRQUNILHFCQUFxQixFQUFFLDBCQUEwQixDQUFDLE1BQU0sQ0FDdkQsQ0FBQyxZQUFZLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixFQUM5RCxDQUFDLENBQ0Q7UUFFRCxpQkFBaUIsRUFBRSwwQkFBMEIsQ0FBQyxNQUFNLENBQ25ELENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQzFELENBQUMsQ0FDRDtRQUVELHNCQUFzQixFQUFFLGlDQUFnQixFQUN2QywwQkFBMEIsQ0FBQyxNQUFNLENBQ2hDLENBQUMsWUFBWSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQzFELENBQUMsQ0FDRCxHQUFHLEVBQUUsQ0FDTjtLQUNELENBQUM7SUFFRixPQUFPLE1BQU0sQ0FBQztBQUNmLENBQUMsQ0FBQztBQU1PLGtCQUFHO0FBSlosTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFO0lBQ2pCLE9BQU8sd0JBQXdCLENBQUM7QUFDakMsQ0FBQyxDQUFDO0FBRVksb0JBQUk7Ozs7Ozs7VUMxSGxCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiZGFuZmVib29rcy5waXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImRhbmZlYm9va3NcIiwgW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZGFuZmVib29rc1wiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkYW5mZWJvb2tzXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiLyohXG4gKlxuICogQGRhbmZlYm9va3MvbmVwYWxwaXRcbiAqIFBlcnNvbmFsIEluY29tZSBUYXggKFBJVCkgY2FsY3VsYXRvciB1dGlsaXR5IGZvciBOZXBhbFxuICogaHR0cHM6Ly93d3cuZGFuZmVib29rcy5jb20vZW4vY2FsY3VsYXRvcnMvbmVwYWwtcGVyc29uYWwtaW5jb21lLXRheFxuICpcbiAqXG4gKiBNSVQgTGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDIwIC0gMjAyMSBEYW5mZUJvb2tzwq5cbiAqXG4gKiBUYXggQnJlYWtkb3duXG4gKiBUaGlzIGlzIHRoZSBtZXRhZGF0YSBmb3IgdGF4IGJyYWNrZXRzIGluIE5lcGFsIHdpdGggRlkgZnlTdGFydERhdGUgYW5kIGZ5RW5kRGF0ZURhdGVcbiAqL1xuXG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEnO1xuXG4vLyB3aWxsIG5lZWQgZXhwbGljaXQgdHlwZSBkZWZpbml0aW9uXG5jb25zdCBicmVha2Rvd24gPSAoeWVhcjogc3RyaW5nKSA9PiB7XG5cdGNvbnN0IGJyYWNrZXRzID0gZGF0YVt5ZWFyXTtcblxuXHRyZXR1cm4gYnJhY2tldHM7XG59O1xuXG5leHBvcnQgeyBicmVha2Rvd24gfTtcbiIsIi8qIVxuICpcbiAqIEBkYW5mZWJvb2tzL25lcGFscGl0XG4gKiBQZXJzb25hbCBJbmNvbWUgVGF4IChQSVQpIGNhbGN1bGF0b3IgdXRpbGl0eSBmb3IgTmVwYWxcbiAqIGh0dHBzOi8vd3d3LmRhbmZlYm9va3MuY29tL2VuL2NhbGN1bGF0b3JzL25lcGFsLXBlcnNvbmFsLWluY29tZS10YXhcbiAqXG4gKlxuICogTUlUIExpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAyMCAtIDIwMjEgRGFuZmVCb29rc8KuXG4gKlxuICogY2FsY3VsYXRvci50c1xuICovXG5cbmludGVyZmFjZSBUb3RhbFRheGFibGVBbW91bnRSZXN1bHQge1xuXHR0YXhhYmxlSW5jb21lOiBudW1iZXI7XG5cdHN1bU9mU3NmRXBmQW5kQ2l0OiBudW1iZXI7XG5cdGZpbmFsSW5zdXJhbmNlOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBUYXhSYXRlIHtcblx0c3RhcnQ6IG51bWJlcjtcblx0ZW5kOiBudW1iZXI7XG5cdHJhdGU6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFRvdGFsVGF4Rm9yUmF0ZVdpdGhJbmNvbWVSZXN1bHQge1xuXHR0YXhMaWFiaWxpdHk6IG51bWJlcjtcblx0dGF4UmF0ZTogbnVtYmVyO1xuXHRhc3Nlc3NpYmxlSW5jb21lOiBudW1iZXI7XG5cdGNhcnJ5OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBUb3RhbFRheGFibGVBbW91bnRQYXJhbXMge1xuXHR0b3RhbEluY29tZTogbnVtYmVyO1xuXHRlcGY6IG51bWJlcjtcblx0Y2l0OiBudW1iZXI7XG5cdHNzZjogbnVtYmVyO1xuXHRpbnN1cmFuY2U6IG51bWJlcjtcblx0dGF4U2V0dGluZ3M6IHtcblx0XHRtYXhEZWR1Y3Rpb25SYXRlOiBudW1iZXI7XG5cdFx0bWF4RGVkdWN0aW9uTGltaXQ6IG51bWJlcjtcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdFdpdGhTU0Y/OiBudW1iZXI7XG5cdFx0bWF4SW5zdXJhbmNlRGVkdWN0aW9uTGltaXQ/OiBudW1iZXI7XG5cdH07XG59XG5cbmNvbnN0IGdldFRvdGFsVGF4YWJsZUFtb3VudCA9ICh7XG5cdHRvdGFsSW5jb21lLFxuXHRlcGYsXG5cdGNpdCxcblx0c3NmLFxuXHRpbnN1cmFuY2UsXG5cdHRheFNldHRpbmdzLFxufTogVG90YWxUYXhhYmxlQW1vdW50UGFyYW1zKTogVG90YWxUYXhhYmxlQW1vdW50UmVzdWx0ID0+IHtcblx0Y29uc3Qge1xuXHRcdG1heERlZHVjdGlvblJhdGUsXG5cdFx0bWF4RGVkdWN0aW9uTGltaXQsXG5cdFx0bWF4RGVkdWN0aW9uTGltaXRXaXRoU1NGLFxuXHRcdG1heEluc3VyYW5jZURlZHVjdGlvbkxpbWl0LFxuXHR9ID0gdGF4U2V0dGluZ3M7XG5cdGNvbnN0IHRvdGFsRGVkdWN0aW9uID0gZXBmICsgY2l0ICsgc3NmO1xuXHRjb25zdCBtYXhEZWR1Y3RhYmxlQW1vdW50ID0gdG90YWxJbmNvbWUgKiBtYXhEZWR1Y3Rpb25SYXRlO1xuXG5cdGxldCBhY3R1YWxEZWR1Y3Rpb24gPSAwO1xuXHRsZXQgZGVkdWN0aW9uVGhyZXNob2xkID0gMDtcblxuXHQvLyBpZiB0b3RhbERlZHVjdGlvbiBjb25zaXN0cyBvZiBTU0Zcblx0aWYgKG1heERlZHVjdGlvbkxpbWl0V2l0aFNTRiAmJiBzc2YgPiAwKSB7XG5cdFx0Ly8gZGVmaW5pbmcgZGVkdWN0aW9uVGhyZXNob2xkIGNvbXBhcmluZyBtYXhEZWR1Y3Rpb25MaW1pdFdpdGhTU0YgKDUgbGFraHMpIGFuZCBtYXhEZWR1Y3RhYmxlQW1vdW50ICgzMyUpIHdoaWNoZXZlciBpcyBsb3dlclxuXHRcdGRlZHVjdGlvblRocmVzaG9sZCA9XG5cdFx0XHRtYXhEZWR1Y3Rpb25MaW1pdFdpdGhTU0YgPCBtYXhEZWR1Y3RhYmxlQW1vdW50XG5cdFx0XHRcdD8gbWF4RGVkdWN0aW9uTGltaXRXaXRoU1NGXG5cdFx0XHRcdDogbWF4RGVkdWN0YWJsZUFtb3VudDtcblx0fSBlbHNlIHtcblx0XHQvLyBkZWZpbmluZyBkZWR1Y3Rpb25UaHJlc2hvbGQgY29tcGFyaW5nIG1heERlZHVjdGlvbkxpbWl0ICgzIGxha2hzKSBhbmQgbWF4RGVkdWN0YWJsZUFtb3VudCAoMzMlKSB3aGljaGV2ZXIgaXMgbG93ZXJcblx0XHRkZWR1Y3Rpb25UaHJlc2hvbGQgPVxuXHRcdFx0bWF4RGVkdWN0aW9uTGltaXQgPCBtYXhEZWR1Y3RhYmxlQW1vdW50XG5cdFx0XHRcdD8gbWF4RGVkdWN0aW9uTGltaXRcblx0XHRcdFx0OiBtYXhEZWR1Y3RhYmxlQW1vdW50O1xuXHR9XG5cdGlmICh0b3RhbERlZHVjdGlvbiA+IGRlZHVjdGlvblRocmVzaG9sZCkge1xuXHRcdGFjdHVhbERlZHVjdGlvbiA9IGRlZHVjdGlvblRocmVzaG9sZDtcblx0fSBlbHNlIHtcblx0XHRhY3R1YWxEZWR1Y3Rpb24gPSB0b3RhbERlZHVjdGlvbjtcblx0fVxuXG5cdC8vIGlmIGluc3VyYW5jZSBpcyBncmVhdGVyIHRoYW4gNDAsMDAwXG5cdGxldCBhY3R1YWxJbnN1cmFuY2UgPSBpbnN1cmFuY2U7XG5cdGlmIChtYXhJbnN1cmFuY2VEZWR1Y3Rpb25MaW1pdCAmJiBpbnN1cmFuY2UgPiBtYXhJbnN1cmFuY2VEZWR1Y3Rpb25MaW1pdCkge1xuXHRcdGFjdHVhbEluc3VyYW5jZSA9IG1heEluc3VyYW5jZURlZHVjdGlvbkxpbWl0O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR0YXhhYmxlSW5jb21lOiB0b3RhbEluY29tZSAtIGFjdHVhbERlZHVjdGlvbiAtIGFjdHVhbEluc3VyYW5jZSxcblx0XHRzdW1PZlNzZkVwZkFuZENpdDogYWN0dWFsRGVkdWN0aW9uLFxuXHRcdGZpbmFsSW5zdXJhbmNlOiBhY3R1YWxJbnN1cmFuY2UsXG5cdH07XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHRvdGFsIHRheCB3aXRoIHRheCBicmFja2V0c1xuICpcbiAqIEBwYXJhbSB0YXhSYXRlIHRheCByYXRlIGZyb20gc2VsZWN0ZWQgdGF4IGRhdGFcbiAqIEBwYXJhbSB0b3RhbFRheGFibGVJbmNvbWUgdG90YWwgaW5jb21lIChjYW4gYmUgY2FycnkgbGVmdCBvdmVyIGZyb20gdGhlIGxhc3QgYnJhY2tldClcbiAqL1xuXG5jb25zdCBnZXRUb3RhbFRheEZvclJhdGVXaXRoSW5jb21lID0gKFxuXHR0YXhSYXRlOiBUYXhSYXRlLFxuXHR0b3RhbFRheGFibGVJbmNvbWU6IG51bWJlcixcbik6IFRvdGFsVGF4Rm9yUmF0ZVdpdGhJbmNvbWVSZXN1bHQgPT4ge1xuXHRjb25zdCBpbmNvbWVUYXhSYXRlRGlmZmVyZW5jZSA9IHRheFJhdGUuZW5kIC0gdGF4UmF0ZS5zdGFydDtcblx0Y29uc3QgdG90YWxNaW51c0RpZmZlcmVuY2UgPSB0b3RhbFRheGFibGVJbmNvbWUgLSBpbmNvbWVUYXhSYXRlRGlmZmVyZW5jZTtcblx0Y29uc3QgY2FycnkgPSB0b3RhbE1pbnVzRGlmZmVyZW5jZSA+IDAgPyB0b3RhbE1pbnVzRGlmZmVyZW5jZSA6IDA7XG5cblx0aWYgKHRvdGFsVGF4YWJsZUluY29tZSA+IDApIHtcblx0XHRpZiAodG90YWxUYXhhYmxlSW5jb21lID49IGluY29tZVRheFJhdGVEaWZmZXJlbmNlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR0YXhMaWFiaWxpdHk6IGluY29tZVRheFJhdGVEaWZmZXJlbmNlICogdGF4UmF0ZS5yYXRlLFxuXHRcdFx0XHR0YXhSYXRlOiB0YXhSYXRlLnJhdGUsXG5cdFx0XHRcdGFzc2Vzc2libGVJbmNvbWU6IGluY29tZVRheFJhdGVEaWZmZXJlbmNlLFxuXHRcdFx0XHRjYXJyeSxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHR0YXhMaWFiaWxpdHk6IHRvdGFsVGF4YWJsZUluY29tZSAqIHRheFJhdGUucmF0ZSxcblx0XHRcdHRheFJhdGU6IHRheFJhdGUucmF0ZSxcblx0XHRcdGFzc2Vzc2libGVJbmNvbWU6IHRvdGFsVGF4YWJsZUluY29tZSxcblx0XHRcdGNhcnJ5LFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHRheExpYWJpbGl0eTogMCxcblx0XHR0YXhSYXRlOiB0YXhSYXRlLnJhdGUsXG5cdFx0YXNzZXNzaWJsZUluY29tZTogMCxcblx0XHRjYXJyeTogY2FycnksXG5cdH07XG59O1xuXG4vKipcbiAqIFJldHVybnMgYWxsIHRheCBicmVha2Rvd24gb2YgaW5jb21lLlxuICogQHBhcmFtIHRheEJyYWNrZXRzIGZyb20gc2VsZWN0ZWQgdGF4IGRhdGFcbiAqIEBwYXJhbSB0b3RhbFRheGFibGVBbW91bnQgdG90YWwgY2FsY3VsYXRlZCB0YXhhYmxlIGFtb3VudFxuICogQHBhcmFtIHNzZiBpZiB0b3RhbERlZHVjdGlvbiBjb25zaXN0cyBvZiBTU0ZcbiAqL1xuZnVuY3Rpb24gZ2V0VG90YWxUYXhBbW91bnRXaXRoQnJhY2tldHMoXG5cdHRheEJyYWNrZXRzOiBUYXhSYXRlW10sXG5cdHRvdGFsVGF4YWJsZUFtb3VudDogbnVtYmVyLFxuXHRzc2Y6IGJvb2xlYW4sXG4pOiBUb3RhbFRheEZvclJhdGVXaXRoSW5jb21lUmVzdWx0W10ge1xuXHRsZXQgdGF4QnJlYWtEb3duQXJyYXk6IFRvdGFsVGF4Rm9yUmF0ZVdpdGhJbmNvbWVSZXN1bHRbXSA9IFtdO1xuXHRyZXR1cm4gdGF4QnJhY2tldHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuXHRcdC8vIGNoZWNrIGlmIHNzZiBoYXMgYmVlbiBkZWR1Y3RlZFxuXHRcdGlmIChzc2YgJiYgaW5kZXggPT09IDApIHtcblx0XHRcdGl0ZW0ucmF0ZSA9IDA7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVzdWx0ID0gZ2V0VG90YWxUYXhGb3JSYXRlV2l0aEluY29tZShcblx0XHRcdGl0ZW0sXG5cdFx0XHRpbmRleCA9PT0gMCA/IHRvdGFsVGF4YWJsZUFtb3VudCA6IHRheEJyZWFrRG93bkFycmF5W2luZGV4IC0gMV0uY2FycnksXG5cdFx0KTtcblx0XHR0YXhCcmVha0Rvd25BcnJheS5wdXNoKHJlc3VsdCk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fSk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHR3by1kZWNpbWFsIG51bWJlciBjb252ZXJ0ZWQgZnJvbSB0aGUgb3JpZ2luYWwgaW5wdXQgZmxvYXQgbnVtYmVyXG4gKlxuICogQHBhcmFtIGFtb3VudCBmbG9hdGluZyBudW1iZXJcbiAqL1xuY29uc3QgZ2V0QW1vdW50Um91bmRlZCA9IChhbW91bnQ6IG51bWJlcik6IG51bWJlciA9PiB7XG5cdHJldHVybiBNYXRoLnJvdW5kKGFtb3VudCAqIDEwMCkgLyAxMDA7XG59O1xuXG5leHBvcnQge1xuXHRnZXRUb3RhbFRheGFibGVBbW91bnQsXG5cdGdldFRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzLFxuXHRnZXRBbW91bnRSb3VuZGVkLFxufTtcbiIsIi8qIVxuICpcbiAqIEBkYW5mZWJvb2tzL25lcGFscGl0XG4gKiBQZXJzb25hbCBJbmNvbWUgVGF4IChQSVQpIGNhbGN1bGF0b3IgdXRpbGl0eSBmb3IgTmVwYWxcbiAqIGh0dHBzOi8vd3d3LmRhbmZlYm9va3MuY29tL2VuL2NhbGN1bGF0b3JzL25lcGFsLXBlcnNvbmFsLWluY29tZS10YXhcbiAqXG4gKlxuICogTUlUIExpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAyMCAtIDIwMjEgRGFuZmVCb29rc8KuXG4gKlxuICogRGF0YVxuICogVGF4IFNsYWIgRGF0YVxuICovXG5cbmludGVyZmFjZSBUYXhCcmFja2V0IHtcblx0c3RhcnQ6IG51bWJlcjtcblx0ZW5kOiBudW1iZXI7XG5cdHJhdGU6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEZpc2NhbFllYXIge1xuXHRmeVN0YXJ0RGF0ZTogc3RyaW5nO1xuXHRmeVN0YXJ0RGF0ZU5lOiBzdHJpbmc7XG5cdGZ5RW5kRGF0ZTogc3RyaW5nO1xuXHRmeUVuZERhdGVOZTogc3RyaW5nO1xuXHRtYXhEZWR1Y3Rpb25SYXRlOiBudW1iZXI7XG5cdG1heERlZHVjdGlvbkxpbWl0OiBudW1iZXI7XG5cdG1heERlZHVjdGlvbkxpbWl0V2l0aFNTRj86IG51bWJlcjtcblx0bWF4SW5zdXJhbmNlRGVkdWN0aW9uTGltaXQ/OiBudW1iZXI7XG5cdGJyYWNrZXRzOiB7XG5cdFx0c2luZ2xlOiBUYXhCcmFja2V0W107XG5cdFx0bWFycmllZDogVGF4QnJhY2tldFtdO1xuXHR9O1xufVxuXG5pbnRlcmZhY2UgRllEYXRhIHtcblx0W2tleTogc3RyaW5nXTogRmlzY2FsWWVhcjtcbn1cblxuY29uc3QgZGF0YTogRllEYXRhID0ge1xuXHQnMjA3MC83MSc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTYsIDIwMTMnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzAnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTYsIDIwMTQnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNoYWQgMzIsIDIwNzEnLFxuXHRcdG1heERlZHVjdGlvblJhdGU6IDAuMzMsXG5cdFx0bWF4RGVkdWN0aW9uTGltaXQ6IDMwMDAwMCxcblx0XHRicmFja2V0czoge1xuXHRcdFx0c2luZ2xlOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdFx0bWFycmllZDogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDAuMCxcblx0XHRcdFx0XHRlbmQ6IDQ1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA1NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA3NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNzUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiAyMDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHR9LFxuXHQnMjA3MS83Mic6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTcsIDIwMTQnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzEnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTYsIDIwMTUnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNoYWQgMzEsIDIwNzInLFxuXHRcdG1heERlZHVjdGlvblJhdGU6IDAuMzMsXG5cdFx0bWF4RGVkdWN0aW9uTGltaXQ6IDMwMDAwMCxcblx0XHRicmFja2V0czoge1xuXHRcdFx0c2luZ2xlOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdFx0bWFycmllZDogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDAuMCxcblx0XHRcdFx0XHRlbmQ6IDQ1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA1NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA3NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNzUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiAyMDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHR9LFxuXHQnMjA3Mi83Myc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTcsIDIwMTUnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzInLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTUsIDIwMTYnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNoYWQgMzEsIDIwNzMnLFxuXHRcdG1heERlZHVjdGlvblJhdGU6IDAuMzMsXG5cdFx0bWF4RGVkdWN0aW9uTGltaXQ6IDMwMDAwMCxcblx0XHRicmFja2V0czoge1xuXHRcdFx0c2luZ2xlOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdFx0bWFycmllZDogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDAuMCxcblx0XHRcdFx0XHRlbmQ6IDQ1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA1NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA3NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNzUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiAyMDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHR9LFxuXHQnMjA3My83NCc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTYsIDIwMTYnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzMnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTUsIDIwMTcnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNoYWQgMzEsIDIwNzQnLFxuXHRcdG1heERlZHVjdGlvblJhdGU6IDAuMzMsXG5cdFx0bWF4RGVkdWN0aW9uTGltaXQ6IDMwMDAwMCxcblx0XHRicmFja2V0czoge1xuXHRcdFx0c2luZ2xlOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdFx0bWFycmllZDogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDAuMCxcblx0XHRcdFx0XHRlbmQ6IDQ1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA1NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA3NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNzUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiAyMDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHR9LFxuXHQnMjA3NC83NSc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bCAxNiwgMjAxNycsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3NCcsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAxOCcsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMiwgMjA3NScsXG5cdFx0bWF4RGVkdWN0aW9uUmF0ZTogMC4zMyxcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdDogMzAwMDAwLFxuXHRcdGJyYWNrZXRzOiB7XG5cdFx0XHRzaW5nbGU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0XHRtYXJyaWVkOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdH0sXG5cdCcyMDc1Lzc2Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAxOCcsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3NScsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAxOScsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMSwgMjA3NicsXG5cdFx0bWF4RGVkdWN0aW9uUmF0ZTogMC4zMyxcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdDogMzAwMDAwLFxuXHRcdGJyYWNrZXRzOiB7XG5cdFx0XHRzaW5nbGU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0XHRtYXJyaWVkOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdH0sXG5cdCcyMDc2Lzc3Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAxOScsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3NicsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNSwgMjAyMCcsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMSwgMjA3NycsXG5cdFx0bWF4RGVkdWN0aW9uUmF0ZTogMC4zMyxcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdDogMzAwMDAwLFxuXHRcdGJyYWNrZXRzOiB7XG5cdFx0XHRzaW5nbGU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0XHRtYXJyaWVkOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdH0sXG5cdCcyMDc3Lzc4Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNiwgMjAxMycsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3MCcsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAxNCcsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2hhZCAzMiwgMjA3MScsXG5cdFx0bWF4RGVkdWN0aW9uUmF0ZTogMC4zMyxcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdDogMzAwMDAwLFxuXHRcdGJyYWNrZXRzOiB7XG5cdFx0XHRzaW5nbGU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0XHRtYXJyaWVkOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdH0sXG5cdCcyMDc4Lzc5Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNiwgMjAyMScsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3OCcsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAyMicsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMiwgMjA3OScsXG5cdFx0bWF4RGVkdWN0aW9uUmF0ZTogMC4zMyxcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdDogMzAwMDAwLFxuXHRcdGJyYWNrZXRzOiB7XG5cdFx0XHRzaW5nbGU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0XHRtYXJyaWVkOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdH0sXG5cdCcyMDc5LzgwJzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAyMicsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3OScsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAyMycsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMSwgMjA4MCcsXG5cdFx0bWF4RGVkdWN0aW9uUmF0ZTogMC4zMyxcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdDogMzAwMDAwLFxuXHRcdGJyYWNrZXRzOiB7XG5cdFx0XHRzaW5nbGU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0XHRtYXJyaWVkOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdH0sXG5cdCcyMDgwLzgxJzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAyMycsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA4MCcsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNSwgMjAyNCcsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMSwgMjA4MScsXG5cdFx0bWF4RGVkdWN0aW9uUmF0ZTogMSAvIDMsXG5cdFx0bWF4RGVkdWN0aW9uTGltaXQ6IDNfMDBfMDAwLFxuXHRcdG1heERlZHVjdGlvbkxpbWl0V2l0aFNTRjogNV8wMF8wMDAsXG5cdFx0bWF4SW5zdXJhbmNlRGVkdWN0aW9uTGltaXQ6IDQwXzAwMCxcblx0XHRicmFja2V0czoge1xuXHRcdFx0c2luZ2xlOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMCxcblx0XHRcdFx0XHRlbmQ6IDVfMDBfMDAwLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNV8wMF8wMDAsXG5cdFx0XHRcdFx0ZW5kOiA3XzAwXzAwMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogN18wMF8wMDAsXG5cdFx0XHRcdFx0ZW5kOiAxMF8wMF8wMDAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDEwXzAwXzAwMCxcblx0XHRcdFx0XHRlbmQ6IDIwXzAwXzAwMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMjBfMDBfMDAwLFxuXHRcdFx0XHRcdGVuZDogNTBfMDBfMDAwLFxuXHRcdFx0XHRcdHJhdGU6IDAuMzYsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTBfMDBfMDAwLFxuXHRcdFx0XHRcdGVuZDogSW5maW5pdHksXG5cdFx0XHRcdFx0cmF0ZTogMC4zOSxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0XHRtYXJyaWVkOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMCxcblx0XHRcdFx0XHRlbmQ6IDZfMDBfMDAwLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNl8wMF8wMDAsXG5cdFx0XHRcdFx0ZW5kOiA4XzAwXzAwMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogOF8wMF8wMDAsXG5cdFx0XHRcdFx0ZW5kOiAxMV8wMF8wMDAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDExXzAwXzAwMCxcblx0XHRcdFx0XHRlbmQ6IDIwXzAwXzAwMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMjBfMDBfMDAwLFxuXHRcdFx0XHRcdGVuZDogNTBfMDBfMDAwLFxuXHRcdFx0XHRcdHJhdGU6IDAuMzYsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTBfMDBfMDAwLFxuXHRcdFx0XHRcdGVuZDogSW5maW5pdHksXG5cdFx0XHRcdFx0cmF0ZTogMC4zOSxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGE7XG4iLCIvKiFcbiAqXG4gKiBAZGFuZmVib29rcy9uZXBhbHBpdFxuICogUGVyc29uYWwgSW5jb21lIFRheCAoUElUKSBjYWxjdWxhdG9yIHV0aWxpdHkgZm9yIE5lcGFsXG4gKiBodHRwczovL3d3dy5kYW5mZWJvb2tzLmNvbS9lbi9jYWxjdWxhdG9ycy9uZXBhbC1wZXJzb25hbC1pbmNvbWUtdGF4XG4gKlxuICpcbiAqIE1JVCBMaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgLSAyMDIxIERhbmZlQm9va3PCrlxuICpcbiAqIEluZGV4LmpzXG4gKi9cblxuaW1wb3J0IHsgYnJlYWtkb3duIH0gZnJvbSAnLi9icmVha2Rvd24nO1xuaW1wb3J0IHtcblx0Z2V0VG90YWxUYXhhYmxlQW1vdW50LFxuXHRnZXRUb3RhbFRheEFtb3VudFdpdGhCcmFja2V0cyxcblx0Z2V0QW1vdW50Um91bmRlZCxcbn0gZnJvbSAnLi9jYWxjdWxhdG9yJztcblxuaW50ZXJmYWNlIFRheFBhcmFtcyB7XG5cdGluY29tZTogbnVtYmVyO1xuXHRlcGY6IG51bWJlcjtcblx0Y2l0OiBudW1iZXI7XG5cdHNzZjogbnVtYmVyO1xuXHRpbnN1cmFuY2U6IG51bWJlcjtcblx0eWVhcjogc3RyaW5nO1xuXHRzaW5nbGU6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBUYXhSZXN1bHQge1xuXHRzdW1PZlNzZkVwZkFuZENpdDogbnVtYmVyO1xuXHRpbnN1cmFuY2U6IG51bWJlcjtcblx0dG90YWxJbmNvbWU6IG51bWJlcjtcblx0dG90YWxEZWR1Y3Rpb246IG51bWJlcjtcblx0bmV0QXNzZXNzYWJsZTogbnVtYmVyO1xuXHR0b3RhbFRheFdpdGhCcmFja2V0czoge1xuXHRcdGFzc2Vzc2libGVJbmNvbWU6IG51bWJlcjtcblx0XHRyYXRlOiBudW1iZXI7XG5cdFx0dGF4TGlhYmlsaXR5OiBudW1iZXI7XG5cdH1bXTtcblx0dG90YWxBc3Nlc3NpYmxlSW5jb21lOiBudW1iZXI7XG5cdHRvdGFsVGF4TGlhYmlsaXR5OiBudW1iZXI7XG5cdG5ldFRheExpYWJpbGl0eU1vbnRobHk6IG51bWJlcjtcbn1cblxuY29uc3QgdGF4ID0gKG9wdGlvbnM6IFRheFBhcmFtcyk6IFRheFJlc3VsdCA9PiB7XG5cdGNvbnN0IHsgaW5jb21lLCBlcGYsIGNpdCwgc3NmLCBpbnN1cmFuY2UsIHllYXIsIHNpbmdsZSB9ID0gb3B0aW9ucztcblxuXHRjb25zdCBtZXRhID0gYnJlYWtkb3duKHllYXIpO1xuXHRjb25zb2xlLmxvZygnR2l2ZW4geWVhciBpcycsIHllYXIpO1xuXHRjb25zdCB0YXhTZXR0aW5ncyA9IHtcblx0XHRtYXhEZWR1Y3Rpb25SYXRlOiBtZXRhLm1heERlZHVjdGlvblJhdGUsXG5cdFx0bWF4RGVkdWN0aW9uTGltaXQ6IG1ldGEubWF4RGVkdWN0aW9uTGltaXQsXG5cdFx0bWF4RGVkdWN0aW9uTGltaXRXaXRoU1NGOiBtZXRhLm1heERlZHVjdGlvbkxpbWl0V2l0aFNTRixcblx0XHRtYXhJbnN1cmFuY2VEZWR1Y3Rpb25MaW1pdDogbWV0YS5tYXhJbnN1cmFuY2VEZWR1Y3Rpb25MaW1pdCxcblx0fTtcblxuXHRjb25zdCB7XG5cdFx0dGF4YWJsZUluY29tZSxcblx0XHRzdW1PZlNzZkVwZkFuZENpdCxcblx0XHRmaW5hbEluc3VyYW5jZSxcblx0fSA9IGdldFRvdGFsVGF4YWJsZUFtb3VudCh7XG5cdFx0dG90YWxJbmNvbWU6IGluY29tZSxcblx0XHRlcGYsXG5cdFx0Y2l0LFxuXHRcdHNzZixcblx0XHRpbnN1cmFuY2UsXG5cdFx0dGF4U2V0dGluZ3MsXG5cdH0pO1xuXHRjb25zdCBtYXJpdGFsU3RhdHVzID0gc2luZ2xlID8gJ3NpbmdsZScgOiAnbWFycmllZCc7XG5cdGNvbnN0IHRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzID0gZ2V0VG90YWxUYXhBbW91bnRXaXRoQnJhY2tldHMoXG5cdFx0bWV0YS5icmFja2V0c1ttYXJpdGFsU3RhdHVzXSxcblx0XHR0YXhhYmxlSW5jb21lLFxuXHRcdHNzZiA+IDAsXG5cdCk7XG5cblx0Y29uc3QgcmVzdWx0OiBUYXhSZXN1bHQgPSB7XG5cdFx0c3VtT2ZTc2ZFcGZBbmRDaXQ6IHN1bU9mU3NmRXBmQW5kQ2l0LFxuXHRcdGluc3VyYW5jZTogZmluYWxJbnN1cmFuY2UsXG5cdFx0dG90YWxJbmNvbWU6IGluY29tZSxcblx0XHR0b3RhbERlZHVjdGlvbjogaW5jb21lIC0gdGF4YWJsZUluY29tZSxcblx0XHRuZXRBc3Nlc3NhYmxlOiB0YXhhYmxlSW5jb21lLFxuXHRcdHRvdGFsVGF4V2l0aEJyYWNrZXRzOiB0b3RhbFRheEFtb3VudFdpdGhCcmFja2V0c1xuXHRcdFx0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5hc3Nlc3NpYmxlSW5jb21lID4gMClcblx0XHRcdC5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdFx0Y29uc3QgdGF4T2JqOiB7XG5cdFx0XHRcdFx0YXNzZXNzaWJsZUluY29tZTogbnVtYmVyO1xuXHRcdFx0XHRcdHJhdGU6IG51bWJlcjtcblx0XHRcdFx0XHR0YXhMaWFiaWxpdHk6IG51bWJlcjtcblx0XHRcdFx0fSA9IHtcblx0XHRcdFx0XHRhc3Nlc3NpYmxlSW5jb21lOiBpdGVtLmFzc2Vzc2libGVJbmNvbWUsXG5cdFx0XHRcdFx0cmF0ZTogaXRlbS50YXhSYXRlICogMTAwLFxuXHRcdFx0XHRcdHRheExpYWJpbGl0eTogaXRlbS50YXhMaWFiaWxpdHksXG5cdFx0XHRcdH07XG5cdFx0XHRcdHJldHVybiB0YXhPYmo7XG5cdFx0XHR9KSxcblx0XHR0b3RhbEFzc2Vzc2libGVJbmNvbWU6IHRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzLnJlZHVjZShcblx0XHRcdChpbml0aWFsVmFsdWUsIHZhbHVlKSA9PiBpbml0aWFsVmFsdWUgKyB2YWx1ZS5hc3Nlc3NpYmxlSW5jb21lLFxuXHRcdFx0MCxcblx0XHQpLFxuXG5cdFx0dG90YWxUYXhMaWFiaWxpdHk6IHRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzLnJlZHVjZShcblx0XHRcdChpbml0aWFsVmFsdWUsIHZhbHVlKSA9PiBpbml0aWFsVmFsdWUgKyB2YWx1ZS50YXhMaWFiaWxpdHksXG5cdFx0XHQwLFxuXHRcdCksXG5cblx0XHRuZXRUYXhMaWFiaWxpdHlNb250aGx5OiBnZXRBbW91bnRSb3VuZGVkKFxuXHRcdFx0dG90YWxUYXhBbW91bnRXaXRoQnJhY2tldHMucmVkdWNlKFxuXHRcdFx0XHQoaW5pdGlhbFZhbHVlLCB2YWx1ZSkgPT4gaW5pdGlhbFZhbHVlICsgdmFsdWUudGF4TGlhYmlsaXR5LFxuXHRcdFx0XHQwLFxuXHRcdFx0KSAvIDEyLFxuXHRcdCksXG5cdH07XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IG1ldGEgPSAoKSA9PiB7XG5cdHJldHVybiAnbWV0YSB3b3JrIGluIHBvcm9ncmVzcyc7XG59O1xuXG5leHBvcnQgeyB0YXgsIG1ldGEgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=