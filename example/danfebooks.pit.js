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

/***/ "./src/breakdown.js":
/*!**************************!*\
  !*** ./src/breakdown.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "breakdown": () => /* binding */ breakdown
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./src/data.js");
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


var breakdown = function breakdown(year) {
  // const allBrackets = JSON.parse(data);
  var allBrackets = _data_js__WEBPACK_IMPORTED_MODULE_0__.default;
  var brackets = allBrackets[year];
  return brackets;
};



/***/ }),

/***/ "./src/calculator.js":
/*!***************************!*\
  !*** ./src/calculator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAmountRounded": () => /* binding */ getAmountRounded,
/* harmony export */   "getTotalTaxableAmount": () => /* binding */ getTotalTaxableAmount,
/* harmony export */   "getTotalTaxAmountWithBrackets": () => /* binding */ getTotalTaxAmountWithBrackets
/* harmony export */ });
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
var getTotalTaxableAmount = function getTotalTaxableAmount(totalIncome, epf, cit, ssf, insurance, taxSettings) {
  var maxDeductionRate = taxSettings.maxDeductionRate,
      maxDeductionLimit = taxSettings.maxDeductionLimit,
      maxDeductionLimitWithSSF = taxSettings.maxDeductionLimitWithSSF,
      maxInsuranceDeductionLimit = taxSettings.maxInsuranceDeductionLimit;
  var totalDeduction = epf + cit + ssf;
  var maxDeductableAmount = totalIncome * maxDeductionRate;
  var actualDeduction = 0;
  var deductionThreshold = 0;

  if (ssf > 0) {
    deductionThreshold = maxDeductionLimitWithSSF < maxDeductableAmount ? maxDeductionLimitWithSSF : maxDeductableAmount; // // if the given deduction is greater than 33 % if income (maxDeductableAmount) and also greater than 5 lakh (maxDeductionLimitSSF)
    // if (
    //   totalDeduction > maxDeductableAmount &&
    //   totalDeduction > maxDeductionLimitWithSSF
    // ) {
    //   actualDeduction = maxDeductableAmount;
    // } else if (
    //   //if the given deduction is less than 33 % (maxDeductableAmount) of income and also less than 5 lakh(maxDeductionLimitSSF)
    //   totalDeduction <= maxDeductableAmount &&
    //   totalDeduction <= maxDeductionLimitWithSSF
    // ) {
    //   actualDeduction = totalDeduction;
    // } else if (
    //   //if the given deduction is less than 33 % (maxDeductableAmount) of income and greater than 5 lakh(maxDeductionLimitSSF)
    //   totalDeduction <= maxDeductableAmount &&
    //   totalDeduction >= maxDeductionLimitWithSSF
    // ) {
    //   actualDeduction = maxDeductionLimitWithSSF;
    // } //if the given deduction is greater than 33 % of income (maxDeductableAmount) and less than 5 lakh (maxDeductionLimitSSF)
    // else {
    //   actualDeduction = maxDeductableAmount;
    // }
  } else {
    // // if the given deduction is greater than 33 % if income (maxDeductableAmount) and also greater than 3 lakh (maxDeductionLimit)
    // if (
    //   totalDeduction > maxDeductableAmount &&
    //   totalDeduction > maxDeductionLimit
    // ) {
    //   actualDeduction = maxDeductableAmount;
    // } else if (
    //   //if the given deduction is less than 33 % (maxDeductableAmount) of income and also less than 3 lakh(maxDeductionLimit)
    //   totalDeduction <= maxDeductableAmount &&
    //   totalDeduction <= maxDeductionLimit
    // ) {
    //   actualDeduction = totalDeduction;
    // } else if (
    //   //if the given deduction is less than 33 % (maxDeductableAmount) of income and greater than 3 lakh(maxDeductionLimit)
    //   totalDeduction <= maxDeductableAmount &&
    //   totalDeduction >= maxDeductionLimit
    // ) {
    //   actualDeduction = maxDeductionLimit;
    // } //if the given deduction is greater than 33 % of income (maxDeductableAmount) and less than 3 lakh (maxDeductionLimit)
    // else {
    //   actualDeduction = maxDeductableAmount;
    // }
    deductionThreshold = maxDeductionLimit < maxDeductableAmount ? maxDeductionLimit : maxDeductableAmount;
  }

  if (totalDeduction > deductionThreshold) {
    actualDeduction = deductionThreshold;
  } else {
    actualDeduction = totalDeduction;
  } // if insurance is greater than 40,000


  var actualInsurance = insurance;

  if (insurance > maxInsuranceDeductionLimit) {
    actualInsurance = maxInsuranceDeductionLimit;
  }

  return {
    taxableIncome: totalIncome - actualDeduction - actualInsurance,
    sumOfSsfEpfAndCit: actualDeduction,
    finalInsurance: actualInsurance
  };
};
/**
 * Returns the total tax with tax brackets
 *
 * @param taxRate tax rate from selected tax data
 * @param totalTaxableIncome total income (can be carry left over from last bracket)
 */


var getTotalTaxForRateWithIncome = function getTotalTaxForRateWithIncome(taxRate, totalTaxableIncome) {
  var incomeTaxRateDifference = taxRate.end - taxRate.start; // infinity - 2000000 = infinity

  var totalMinusDifference = totalTaxableIncome - incomeTaxRateDifference; // 100000 - infinity = -infinity

  var carry = totalMinusDifference > 0 ? totalMinusDifference : 0; // -infinity > 0 ? -infinity : 0 = 0

  if (totalTaxableIncome > 0) {
    if (totalTaxableIncome >= incomeTaxRateDifference) {
      return {
        taxLiability: incomeTaxRateDifference * taxRate.rate,
        taxRate: taxRate.rate,
        assesibleIncome: incomeTaxRateDifference,
        carry: carry
      };
    }

    return {
      taxLiability: totalTaxableIncome * taxRate.rate,
      taxRate: taxRate.rate,
      assesibleIncome: totalTaxableIncome,
      carry: carry
    };
  }

  return {
    taxLiability: 0,
    taxRate: taxRate.rate,
    assesibleIncome: 0,
    carry: carry
  };
};
/**
 * Returns a all tax breakdown of income.
 * @param taxBrackets from selected tax data
 * @param totalTaxableAmount total calculated taxable amount
 */


function getTotalTaxAmountWithBrackets(taxBrackets, totalTaxableAmount, isSsf) {
  var taxBreakDownArray = [];
  return taxBrackets.map(function (item, index) {
    // check if ssf has been deducted
    if (isSsf && index === 0) {
      item.rate = 0;
    }

    var result = getTotalTaxForRateWithIncome(item, index === 0 ? totalTaxableAmount : taxBreakDownArray[index - 1].carry);
    taxBreakDownArray.push(result);
    return result;
  });
}
/**
 * Returns two decimal number converted from original input float number
 *
 * @param amount floating number
 */


var getAmountRounded = function getAmountRounded(amount) {
  return Math.round(amount * 100) / 100;
};



/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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
var obj = {
  "2070/71": {
    fyStartDate: "July 16, 2013",
    fyStartDateNe: "Shrawan 1, 2070",
    fyEndDate: "July 16, 2014",
    fyEndDateNe: "Ashad 32, 2071",
    maxEPFRate: 0.2,
    maxDeductionRate: 0.33,
    maxDeductionLimit: 300000,
    brackets: {
      single: [{
        start: 0.0,
        end: 400000.0,
        rate: 0.01
      }, {
        start: 400000.0,
        end: 500000.0,
        rate: 0.1
      }, {
        start: 500000.0,
        end: 700000.0,
        rate: 0.2
      }, {
        start: 700000.0,
        end: 2000000.0,
        rate: 0.3
      }],
      married: [{
        start: 0.0,
        end: 450000.0,
        rate: 0.01
      }, {
        start: 450000.0,
        end: 550000.0,
        rate: 0.1
      }, {
        start: 550000.0,
        end: 750000.0,
        rate: 0.2
      }, {
        start: 750000.0,
        end: 2000000.0,
        rate: 0.3
      }]
    }
  },
  "2071/72": {
    fyStartDate: "July 17, 2014",
    fyStartDateNe: "Shrawan 1, 2071",
    fyEndDate: "July 16, 2015",
    fyEndDateNe: "Ashad 31, 2072",
    brackets: [{
      single: [{
        250000: 1
      }, {
        100000: 2
      }]
    }, {
      married: [{
        300000: 1
      }, {
        100000: 1
      }]
    }]
  },
  "2072/73": {
    fyStartDate: "July 17, 2015",
    fyStartDateNe: "Shrawan 1, 2072",
    fyEndDate: "July 15, 2016",
    fyEndDateNe: "Ashad 31, 2073",
    brackets: [{
      single: [{
        250000: 1
      }, {
        100000: 2
      }]
    }, {
      married: [{
        300000: 1
      }, {
        100000: 2
      }]
    }]
  },
  "2073/74": {
    fyStartDate: "July 16, 2016",
    fyStartDateNe: "Shrawan 1, 2073",
    fyEndDate: "July 15, 2017",
    fyEndDateNe: "Ashad 31, 2074",
    brackets: [{
      single: [{
        350000: 1
      }, {
        100000: 2
      }]
    }, {
      married: [{
        400000: 1
      }, {
        100000: 2
      }]
    }]
  },
  "2074/75": {
    fyStartDate: "Jul 16, 2017",
    fyStartDateNe: "Shrawan 1, 2074",
    fyEndDate: "July 16, 2018",
    fyEndDateNe: "Asadh 32, 2075",
    brackets: [{
      single: [{
        350000: 1
      }, {
        100000: 2
      }]
    }, {
      married: [{
        400000: 1
      }, {
        100000: 2
      }]
    }]
  },
  "2075/76": {
    fyStartDate: "July 17, 2018",
    fyStartDateNe: "Shrawan 1, 2075",
    fyEndDate: "July 16, 2019",
    fyEndDateNe: "Asadh 31, 2076",
    brackets: [{
      single: [{
        350000: 1
      }, {
        100000: 2
      }, {
        200000: 3
      }, {
        1350000: 4
      }]
    }, {
      married: [{
        400000: 1
      }, {
        100000: 2
      }, {
        200000: 3
      }, {
        1300000: 4
      }]
    }]
  },
  "2076/77": {
    fyStartDate: "July 17, 2019",
    fyStartDateNe: "Shrawan 1, 2076",
    fyEndDate: "July 15, 2020",
    fyEndDateNe: "Asadh 31, 2077",
    brackets: [{
      single: [{
        400000: 1
      }, {
        100000: 2
      }, {
        200000: 3
      }, {
        1300000: 4
      }]
    }, {
      married: [450000, {
        100000: 2
      }, {
        200000: 3
      }, {
        1250000: 4
      }]
    }]
  },
  "2077/78": {
    fyStartDate: "July 16, 2013",
    fyStartDateNe: "Shrawan 1, 2070",
    fyEndDate: "July 16, 2014",
    fyEndDateNe: "Ashad 32, 2071",
    maxEPFRate: 0.2,
    maxDeductionRate: 0.33,
    maxDeductionLimit: 300000,
    brackets: {
      single: [{
        start: 0.0,
        end: 400000.0,
        rate: 0.01
      }, {
        start: 400000.0,
        end: 500000.0,
        rate: 0.1
      }, {
        start: 500000.0,
        end: 700000.0,
        rate: 0.2
      }, {
        start: 700000.0,
        end: 2000000.0,
        rate: 0.3
      }],
      married: [{
        start: 0.0,
        end: 450000.0,
        rate: 0.01
      }, {
        start: 450000.0,
        end: 550000.0,
        rate: 0.1
      }, {
        start: 550000.0,
        end: 750000.0,
        rate: 0.2
      }, {
        start: 750000.0,
        end: 2000000.0,
        rate: 0.3
      }]
    }
  },
  "2078/79": {
    fyStartDate: "July 16, 2021",
    fyStartDateNe: "Shrawan 1, 2078",
    fyEndDate: "July 16, 2022",
    fyEndDateNe: "Asadh 32, 2079",
    brackets: [{
      single: [{
        400000: 1
      }, {
        100000: 2
      }, {
        200000: 3
      }, {
        1300000: 4
      }]
    }, {
      married: [450000, {
        100000: 2
      }, {
        200000: 3
      }, {
        1250000: 4
      }]
    }]
  },
  "2079/80": {
    fyStartDate: "July 17, 2022",
    fyStartDateNe: "Shrawan 1, 2079",
    fyEndDate: "July 16, 2023",
    fyEndDateNe: "Asadh 31, 2080",
    brackets: [{
      single: [{
        400000: 1
      }, {
        100000: 2
      }, {
        200000: 3
      }, {
        1300000: 4
      }]
    }, {
      married: [450000, {
        100000: 2
      }, {
        200000: 3
      }, {
        1250000: 4
      }]
    }]
  },
  "2080/81": {
    fyStartDate: "July 17, 2023",
    fyStartDateNe: "Shrawan 1, 2080",
    fyEndDate: "July 15, 2024",
    fyEndDateNe: "Asadh 31, 2081",
    maxDeductionRate: 1 / 3,
    maxDeductionLimit: 300000,
    maxDeductionLimitWithSSF: 500000,
    maxInsuranceDeductionLimit: 40000,
    brackets: {
      single: [{
        start: 0,
        end: 500000,
        rate: 0.01
      }, {
        start: 500000,
        end: 700000,
        rate: 0.1
      }, {
        start: 700000,
        end: 1000000,
        rate: 0.2
      }, {
        start: 1000000,
        end: 2000000,
        rate: 0.3
      }, {
        start: 2000000,
        end: 5000000,
        rate: 0.36
      }, {
        start: 5000000,
        end: Infinity,
        rate: 0.39
      }],
      married: [{
        start: 0,
        end: 600000,
        rate: 0.01
      }, {
        start: 600000,
        end: 800000,
        rate: 0.1
      }, {
        start: 800000,
        end: 1100000,
        rate: 0.2
      }, {
        start: 1100000,
        end: 2000000,
        rate: 0.3
      }, {
        start: 2000000,
        end: 5000000,
        rate: 0.36
      }, {
        start: 5000000,
        end: Infinity,
        rate: 0.39
      }]
    }
  }
}; // const data = JSON.stringify(obj);
// export { data };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (obj);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "meta": () => /* binding */ meta,
/* harmony export */   "tax": () => /* binding */ tax
/* harmony export */ });
/* harmony import */ var _breakdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakdown.js */ "./src/breakdown.js");
/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator */ "./src/calculator.js");
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



var tax = function tax(options) {
  var income = options.income,
      epf = options.epf,
      cit = options.cit,
      ssf = options.ssf,
      insurance = options.insurance,
      year = options.year,
      single = options.single;
  var meta = (0,_breakdown_js__WEBPACK_IMPORTED_MODULE_0__.breakdown)(year);
  console.log("Given year is", year);

  var _getTotalTaxableAmoun = (0,_calculator__WEBPACK_IMPORTED_MODULE_1__.getTotalTaxableAmount)(income, epf, cit, ssf, insurance, meta),
      taxableIncome = _getTotalTaxableAmoun.taxableIncome,
      sumOfSsfEpfAndCit = _getTotalTaxableAmoun.sumOfSsfEpfAndCit,
      finalInsurance = _getTotalTaxableAmoun.finalInsurance;

  var maritalStatus = single ? "single" : "married";
  var totalTaxAmountWithBrackets = (0,_calculator__WEBPACK_IMPORTED_MODULE_1__.getTotalTaxAmountWithBrackets)(meta.brackets[maritalStatus], taxableIncome, ssf > 0);

  var format = function format(number) {
    return new Intl.NumberFormat().format(number);
  };

  var result = {
    sumOfSsfEpfAndCit: format(sumOfSsfEpfAndCit),
    insurance: format(finalInsurance),
    totalIncome: format(income),
    totalDeduction: format(income - taxableIncome),
    netAssessable: format(taxableIncome),
    totalTaxWithBrackets: totalTaxAmountWithBrackets.filter(function (item) {
      return item.assesibleIncome > 0;
    }).map(function (item) {
      var taxObj = {};
      taxObj.assesibleIncome = format(item.assesibleIncome);
      taxObj.rate = item.taxRate * 100;
      taxObj.taxLiability = format(item.taxLiability);
      return taxObj;
    }),
    totalAssesibleIncome: format(totalTaxAmountWithBrackets.reduce(function (initialValue, value) {
      return initialValue + value.assesibleIncome;
    }, 0)),
    totalTaxLiability: format(totalTaxAmountWithBrackets.reduce(function (initialValue, value) {
      return initialValue + value.taxLiability;
    }, 0)),
    netTaxLiabilityMonthly: format((0,_calculator__WEBPACK_IMPORTED_MODULE_1__.getAmountRounded)(totalTaxAmountWithBrackets.reduce(function (initialValue, value) {
      return initialValue + value.taxLiability;
    }, 0) / 12))
  };
  return result;
};

var meta = function meta() {
  return "meta work in porogress";
};



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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzLy4vc3JjL2JyZWFrZG93bi5qcyIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzLy4vc3JjL2NhbGN1bGF0b3IuanMiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy8uL3NyYy9kYXRhLmpzIiwid2VicGFjazovL2RhbmZlYm9va3MvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2RhbmZlYm9va3Mvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImJyZWFrZG93biIsInllYXIiLCJhbGxCcmFja2V0cyIsImRhdGEiLCJicmFja2V0cyIsImdldFRvdGFsVGF4YWJsZUFtb3VudCIsInRvdGFsSW5jb21lIiwiZXBmIiwiY2l0Iiwic3NmIiwiaW5zdXJhbmNlIiwidGF4U2V0dGluZ3MiLCJtYXhEZWR1Y3Rpb25SYXRlIiwibWF4RGVkdWN0aW9uTGltaXQiLCJtYXhEZWR1Y3Rpb25MaW1pdFdpdGhTU0YiLCJtYXhJbnN1cmFuY2VEZWR1Y3Rpb25MaW1pdCIsInRvdGFsRGVkdWN0aW9uIiwibWF4RGVkdWN0YWJsZUFtb3VudCIsImFjdHVhbERlZHVjdGlvbiIsImRlZHVjdGlvblRocmVzaG9sZCIsImFjdHVhbEluc3VyYW5jZSIsInRheGFibGVJbmNvbWUiLCJzdW1PZlNzZkVwZkFuZENpdCIsImZpbmFsSW5zdXJhbmNlIiwiZ2V0VG90YWxUYXhGb3JSYXRlV2l0aEluY29tZSIsInRheFJhdGUiLCJ0b3RhbFRheGFibGVJbmNvbWUiLCJpbmNvbWVUYXhSYXRlRGlmZmVyZW5jZSIsImVuZCIsInN0YXJ0IiwidG90YWxNaW51c0RpZmZlcmVuY2UiLCJjYXJyeSIsInRheExpYWJpbGl0eSIsInJhdGUiLCJhc3Nlc2libGVJbmNvbWUiLCJnZXRUb3RhbFRheEFtb3VudFdpdGhCcmFja2V0cyIsInRheEJyYWNrZXRzIiwidG90YWxUYXhhYmxlQW1vdW50IiwiaXNTc2YiLCJ0YXhCcmVha0Rvd25BcnJheSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInJlc3VsdCIsInB1c2giLCJnZXRBbW91bnRSb3VuZGVkIiwiYW1vdW50IiwiTWF0aCIsInJvdW5kIiwib2JqIiwiZnlTdGFydERhdGUiLCJmeVN0YXJ0RGF0ZU5lIiwiZnlFbmREYXRlIiwiZnlFbmREYXRlTmUiLCJtYXhFUEZSYXRlIiwic2luZ2xlIiwibWFycmllZCIsIkluZmluaXR5IiwidGF4Iiwib3B0aW9ucyIsImluY29tZSIsIm1ldGEiLCJjb25zb2xlIiwibG9nIiwibWFyaXRhbFN0YXR1cyIsInRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzIiwiZm9ybWF0IiwibnVtYmVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsIm5ldEFzc2Vzc2FibGUiLCJ0b3RhbFRheFdpdGhCcmFja2V0cyIsImZpbHRlciIsInRheE9iaiIsInRvdGFsQXNzZXNpYmxlSW5jb21lIiwicmVkdWNlIiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiLCJ0b3RhbFRheExpYWJpbGl0eSIsIm5ldFRheExpYWJpbGl0eU1vbnRobHkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FB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QXdEQSxJQUFNa0IsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQixTQUFPLHdCQUFQO0FBQ0QsQ0FGRDs7Ozs7Ozs7VUM1RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImRhbmZlYm9va3MucGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkYW5mZWJvb2tzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRhbmZlYm9va3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZGFuZmVib29rc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIi8qIVxuICpcbiAqIEBkYW5mZWJvb2tzL25lcGFscGl0XG4gKiBQZXJzb25hbCBJbmNvbWUgVGF4IChQSVQpIGNhbGN1bGF0b3IgdXRpbGl0eSBmb3IgTmVwYWxcbiAqIGh0dHBzOi8vd3d3LmRhbmZlYm9va3MuY29tL2VuL2NhbGN1bGF0b3JzL25lcGFsLXBlcnNvbmFsLWluY29tZS10YXhcbiAqXG4gKlxuICogTUlUIExpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAyMCAtIDIwMjEgRGFuZmVCb29rc8KuXG4gKlxuICogVGF4IEJyZWFrZG93blxuICogVGhpcyBpcyB0aGUgbWV0YWRhdGEgZm9yIHRheCBicmFja2V0cyBpbiBOZXBhbCB3aXRoIEZZIGZ5U3RhcnREYXRlIGFuZCBmeUVuZERhdGVEYXRlXG4gKi9cblxuLy8gaW1wb3J0IHsgZGF0YSB9IGZyb20gXCIuL2RhdGEuanNcIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuL2RhdGEuanNcIjtcblxuY29uc3QgYnJlYWtkb3duID0gKHllYXIpID0+IHtcbiAgLy8gY29uc3QgYWxsQnJhY2tldHMgPSBKU09OLnBhcnNlKGRhdGEpO1xuICBjb25zdCBhbGxCcmFja2V0cyA9IGRhdGE7XG4gIGNvbnN0IGJyYWNrZXRzID0gYWxsQnJhY2tldHNbeWVhcl07XG5cbiAgcmV0dXJuIGJyYWNrZXRzO1xufTtcblxuZXhwb3J0IHsgYnJlYWtkb3duIH07XG4iLCIvKiFcbiAqXG4gKiBAZGFuZmVib29rcy9uZXBhbHBpdFxuICogUGVyc29uYWwgSW5jb21lIFRheCAoUElUKSBjYWxjdWxhdG9yIHV0aWxpdHkgZm9yIE5lcGFsXG4gKiBodHRwczovL3d3dy5kYW5mZWJvb2tzLmNvbS9lbi9jYWxjdWxhdG9ycy9uZXBhbC1wZXJzb25hbC1pbmNvbWUtdGF4XG4gKlxuICpcbiAqIE1JVCBMaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgLSAyMDIxIERhbmZlQm9va3PCrlxuICpcbiAqIGNhbGN1bGF0b3IuanNcbiAqL1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHRvdGFsIHRheGFibGUgdG90YWxJbmNvbWVcbiAqXG4gKiBAcGFyYW0gdG90YWxJbmNvbWUgdG90YWwgaW5jb21lXG4gKiBAcGFyYW0gZXBmIGVwZiBhbW91bnRcbiAqIEBwYXJhbSBjaXQgY2l0IGFtb3VudFxuICogQHBhcmFtIG90aGVyRGVkdWN0aW9uIG90aGVyRGVkdWN0aW9uIGFtb3VudFxuICogQHBhcmFtIHRheFNldHRpbmdzIGZyb20gc2xlY3RlZCB0YXggZGF0YVxuICovXG5jb25zdCBnZXRUb3RhbFRheGFibGVBbW91bnQgPSAoXG4gIHRvdGFsSW5jb21lLFxuICBlcGYsXG4gIGNpdCxcbiAgc3NmLFxuICBpbnN1cmFuY2UsXG4gIHRheFNldHRpbmdzLFxuKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBtYXhEZWR1Y3Rpb25SYXRlLFxuICAgIG1heERlZHVjdGlvbkxpbWl0LFxuICAgIG1heERlZHVjdGlvbkxpbWl0V2l0aFNTRixcbiAgICBtYXhJbnN1cmFuY2VEZWR1Y3Rpb25MaW1pdCxcbiAgfSA9IHRheFNldHRpbmdzO1xuICBjb25zdCB0b3RhbERlZHVjdGlvbiA9IGVwZiArIGNpdCArIHNzZjtcbiAgY29uc3QgbWF4RGVkdWN0YWJsZUFtb3VudCA9IHRvdGFsSW5jb21lICogbWF4RGVkdWN0aW9uUmF0ZTtcblxuICBsZXQgYWN0dWFsRGVkdWN0aW9uID0gMDtcbiAgbGV0IGRlZHVjdGlvblRocmVzaG9sZCA9IDA7XG4gIGlmIChzc2YgPiAwKSB7XG4gICAgZGVkdWN0aW9uVGhyZXNob2xkID0gbWF4RGVkdWN0aW9uTGltaXRXaXRoU1NGIDwgbWF4RGVkdWN0YWJsZUFtb3VudFxuICAgICAgPyBtYXhEZWR1Y3Rpb25MaW1pdFdpdGhTU0ZcbiAgICAgIDogbWF4RGVkdWN0YWJsZUFtb3VudDtcbiAgICAvLyAvLyBpZiB0aGUgZ2l2ZW4gZGVkdWN0aW9uIGlzIGdyZWF0ZXIgdGhhbiAzMyAlIGlmIGluY29tZSAobWF4RGVkdWN0YWJsZUFtb3VudCkgYW5kIGFsc28gZ3JlYXRlciB0aGFuIDUgbGFraCAobWF4RGVkdWN0aW9uTGltaXRTU0YpXG4gICAgLy8gaWYgKFxuICAgIC8vICAgdG90YWxEZWR1Y3Rpb24gPiBtYXhEZWR1Y3RhYmxlQW1vdW50ICYmXG4gICAgLy8gICB0b3RhbERlZHVjdGlvbiA+IG1heERlZHVjdGlvbkxpbWl0V2l0aFNTRlxuICAgIC8vICkge1xuICAgIC8vICAgYWN0dWFsRGVkdWN0aW9uID0gbWF4RGVkdWN0YWJsZUFtb3VudDtcbiAgICAvLyB9IGVsc2UgaWYgKFxuICAgIC8vICAgLy9pZiB0aGUgZ2l2ZW4gZGVkdWN0aW9uIGlzIGxlc3MgdGhhbiAzMyAlIChtYXhEZWR1Y3RhYmxlQW1vdW50KSBvZiBpbmNvbWUgYW5kIGFsc28gbGVzcyB0aGFuIDUgbGFraChtYXhEZWR1Y3Rpb25MaW1pdFNTRilcbiAgICAvLyAgIHRvdGFsRGVkdWN0aW9uIDw9IG1heERlZHVjdGFibGVBbW91bnQgJiZcbiAgICAvLyAgIHRvdGFsRGVkdWN0aW9uIDw9IG1heERlZHVjdGlvbkxpbWl0V2l0aFNTRlxuICAgIC8vICkge1xuICAgIC8vICAgYWN0dWFsRGVkdWN0aW9uID0gdG90YWxEZWR1Y3Rpb247XG4gICAgLy8gfSBlbHNlIGlmIChcbiAgICAvLyAgIC8vaWYgdGhlIGdpdmVuIGRlZHVjdGlvbiBpcyBsZXNzIHRoYW4gMzMgJSAobWF4RGVkdWN0YWJsZUFtb3VudCkgb2YgaW5jb21lIGFuZCBncmVhdGVyIHRoYW4gNSBsYWtoKG1heERlZHVjdGlvbkxpbWl0U1NGKVxuICAgIC8vICAgdG90YWxEZWR1Y3Rpb24gPD0gbWF4RGVkdWN0YWJsZUFtb3VudCAmJlxuICAgIC8vICAgdG90YWxEZWR1Y3Rpb24gPj0gbWF4RGVkdWN0aW9uTGltaXRXaXRoU1NGXG4gICAgLy8gKSB7XG4gICAgLy8gICBhY3R1YWxEZWR1Y3Rpb24gPSBtYXhEZWR1Y3Rpb25MaW1pdFdpdGhTU0Y7XG4gICAgLy8gfSAvL2lmIHRoZSBnaXZlbiBkZWR1Y3Rpb24gaXMgZ3JlYXRlciB0aGFuIDMzICUgb2YgaW5jb21lIChtYXhEZWR1Y3RhYmxlQW1vdW50KSBhbmQgbGVzcyB0aGFuIDUgbGFraCAobWF4RGVkdWN0aW9uTGltaXRTU0YpXG4gICAgLy8gZWxzZSB7XG4gICAgLy8gICBhY3R1YWxEZWR1Y3Rpb24gPSBtYXhEZWR1Y3RhYmxlQW1vdW50O1xuICAgIC8vIH1cbiAgfSBlbHNlIHtcbiAgICAvLyAvLyBpZiB0aGUgZ2l2ZW4gZGVkdWN0aW9uIGlzIGdyZWF0ZXIgdGhhbiAzMyAlIGlmIGluY29tZSAobWF4RGVkdWN0YWJsZUFtb3VudCkgYW5kIGFsc28gZ3JlYXRlciB0aGFuIDMgbGFraCAobWF4RGVkdWN0aW9uTGltaXQpXG4gICAgLy8gaWYgKFxuICAgIC8vICAgdG90YWxEZWR1Y3Rpb24gPiBtYXhEZWR1Y3RhYmxlQW1vdW50ICYmXG4gICAgLy8gICB0b3RhbERlZHVjdGlvbiA+IG1heERlZHVjdGlvbkxpbWl0XG4gICAgLy8gKSB7XG4gICAgLy8gICBhY3R1YWxEZWR1Y3Rpb24gPSBtYXhEZWR1Y3RhYmxlQW1vdW50O1xuICAgIC8vIH0gZWxzZSBpZiAoXG4gICAgLy8gICAvL2lmIHRoZSBnaXZlbiBkZWR1Y3Rpb24gaXMgbGVzcyB0aGFuIDMzICUgKG1heERlZHVjdGFibGVBbW91bnQpIG9mIGluY29tZSBhbmQgYWxzbyBsZXNzIHRoYW4gMyBsYWtoKG1heERlZHVjdGlvbkxpbWl0KVxuICAgIC8vICAgdG90YWxEZWR1Y3Rpb24gPD0gbWF4RGVkdWN0YWJsZUFtb3VudCAmJlxuICAgIC8vICAgdG90YWxEZWR1Y3Rpb24gPD0gbWF4RGVkdWN0aW9uTGltaXRcbiAgICAvLyApIHtcbiAgICAvLyAgIGFjdHVhbERlZHVjdGlvbiA9IHRvdGFsRGVkdWN0aW9uO1xuICAgIC8vIH0gZWxzZSBpZiAoXG4gICAgLy8gICAvL2lmIHRoZSBnaXZlbiBkZWR1Y3Rpb24gaXMgbGVzcyB0aGFuIDMzICUgKG1heERlZHVjdGFibGVBbW91bnQpIG9mIGluY29tZSBhbmQgZ3JlYXRlciB0aGFuIDMgbGFraChtYXhEZWR1Y3Rpb25MaW1pdClcbiAgICAvLyAgIHRvdGFsRGVkdWN0aW9uIDw9IG1heERlZHVjdGFibGVBbW91bnQgJiZcbiAgICAvLyAgIHRvdGFsRGVkdWN0aW9uID49IG1heERlZHVjdGlvbkxpbWl0XG4gICAgLy8gKSB7XG4gICAgLy8gICBhY3R1YWxEZWR1Y3Rpb24gPSBtYXhEZWR1Y3Rpb25MaW1pdDtcbiAgICAvLyB9IC8vaWYgdGhlIGdpdmVuIGRlZHVjdGlvbiBpcyBncmVhdGVyIHRoYW4gMzMgJSBvZiBpbmNvbWUgKG1heERlZHVjdGFibGVBbW91bnQpIGFuZCBsZXNzIHRoYW4gMyBsYWtoIChtYXhEZWR1Y3Rpb25MaW1pdClcbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgIGFjdHVhbERlZHVjdGlvbiA9IG1heERlZHVjdGFibGVBbW91bnQ7XG4gICAgLy8gfVxuICAgIGRlZHVjdGlvblRocmVzaG9sZCA9IG1heERlZHVjdGlvbkxpbWl0IDwgbWF4RGVkdWN0YWJsZUFtb3VudFxuICAgICAgPyBtYXhEZWR1Y3Rpb25MaW1pdFxuICAgICAgOiBtYXhEZWR1Y3RhYmxlQW1vdW50O1xuICB9XG4gIGlmICh0b3RhbERlZHVjdGlvbiA+IGRlZHVjdGlvblRocmVzaG9sZCkge1xuICAgIGFjdHVhbERlZHVjdGlvbiA9IGRlZHVjdGlvblRocmVzaG9sZDtcbiAgfSBlbHNlIHtcbiAgICBhY3R1YWxEZWR1Y3Rpb24gPSB0b3RhbERlZHVjdGlvbjtcbiAgfVxuXG4gIC8vIGlmIGluc3VyYW5jZSBpcyBncmVhdGVyIHRoYW4gNDAsMDAwXG4gIGxldCBhY3R1YWxJbnN1cmFuY2UgPSBpbnN1cmFuY2U7XG4gIGlmIChpbnN1cmFuY2UgPiBtYXhJbnN1cmFuY2VEZWR1Y3Rpb25MaW1pdCkge1xuICAgIGFjdHVhbEluc3VyYW5jZSA9IG1heEluc3VyYW5jZURlZHVjdGlvbkxpbWl0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0YXhhYmxlSW5jb21lOiB0b3RhbEluY29tZSAtIGFjdHVhbERlZHVjdGlvbiAtIGFjdHVhbEluc3VyYW5jZSxcbiAgICBzdW1PZlNzZkVwZkFuZENpdDogYWN0dWFsRGVkdWN0aW9uLFxuICAgIGZpbmFsSW5zdXJhbmNlOiBhY3R1YWxJbnN1cmFuY2UsXG4gIH07XG59O1xuLyoqXG4gKiBSZXR1cm5zIHRoZSB0b3RhbCB0YXggd2l0aCB0YXggYnJhY2tldHNcbiAqXG4gKiBAcGFyYW0gdGF4UmF0ZSB0YXggcmF0ZSBmcm9tIHNlbGVjdGVkIHRheCBkYXRhXG4gKiBAcGFyYW0gdG90YWxUYXhhYmxlSW5jb21lIHRvdGFsIGluY29tZSAoY2FuIGJlIGNhcnJ5IGxlZnQgb3ZlciBmcm9tIGxhc3QgYnJhY2tldClcbiAqL1xuXG5jb25zdCBnZXRUb3RhbFRheEZvclJhdGVXaXRoSW5jb21lID0gKHRheFJhdGUsIHRvdGFsVGF4YWJsZUluY29tZSkgPT4ge1xuICBjb25zdCBpbmNvbWVUYXhSYXRlRGlmZmVyZW5jZSA9IHRheFJhdGUuZW5kIC0gdGF4UmF0ZS5zdGFydDsgLy8gaW5maW5pdHkgLSAyMDAwMDAwID0gaW5maW5pdHlcbiAgY29uc3QgdG90YWxNaW51c0RpZmZlcmVuY2UgPSB0b3RhbFRheGFibGVJbmNvbWUgLSBpbmNvbWVUYXhSYXRlRGlmZmVyZW5jZTsgLy8gMTAwMDAwIC0gaW5maW5pdHkgPSAtaW5maW5pdHlcbiAgY29uc3QgY2FycnkgPSB0b3RhbE1pbnVzRGlmZmVyZW5jZSA+IDAgPyB0b3RhbE1pbnVzRGlmZmVyZW5jZSA6IDA7IC8vIC1pbmZpbml0eSA+IDAgPyAtaW5maW5pdHkgOiAwID0gMFxuXG4gIGlmICh0b3RhbFRheGFibGVJbmNvbWUgPiAwKSB7XG4gICAgaWYgKHRvdGFsVGF4YWJsZUluY29tZSA+PSBpbmNvbWVUYXhSYXRlRGlmZmVyZW5jZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGF4TGlhYmlsaXR5OiBpbmNvbWVUYXhSYXRlRGlmZmVyZW5jZSAqIHRheFJhdGUucmF0ZSxcbiAgICAgICAgdGF4UmF0ZTogdGF4UmF0ZS5yYXRlLFxuICAgICAgICBhc3Nlc2libGVJbmNvbWU6IGluY29tZVRheFJhdGVEaWZmZXJlbmNlLFxuICAgICAgICBjYXJyeSxcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0YXhMaWFiaWxpdHk6IHRvdGFsVGF4YWJsZUluY29tZSAqIHRheFJhdGUucmF0ZSxcbiAgICAgIHRheFJhdGU6IHRheFJhdGUucmF0ZSxcbiAgICAgIGFzc2VzaWJsZUluY29tZTogdG90YWxUYXhhYmxlSW5jb21lLFxuICAgICAgY2FycnksXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdGF4TGlhYmlsaXR5OiAwLFxuICAgIHRheFJhdGU6IHRheFJhdGUucmF0ZSxcbiAgICBhc3Nlc2libGVJbmNvbWU6IDAsXG4gICAgY2Fycnk6IGNhcnJ5LFxuICB9O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgYWxsIHRheCBicmVha2Rvd24gb2YgaW5jb21lLlxuICogQHBhcmFtIHRheEJyYWNrZXRzIGZyb20gc2VsZWN0ZWQgdGF4IGRhdGFcbiAqIEBwYXJhbSB0b3RhbFRheGFibGVBbW91bnQgdG90YWwgY2FsY3VsYXRlZCB0YXhhYmxlIGFtb3VudFxuICovXG5cbmZ1bmN0aW9uIGdldFRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzKHRheEJyYWNrZXRzLCB0b3RhbFRheGFibGVBbW91bnQsIGlzU3NmKSB7XG4gIGxldCB0YXhCcmVha0Rvd25BcnJheSA9IFtdO1xuICByZXR1cm4gdGF4QnJhY2tldHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIC8vIGNoZWNrIGlmIHNzZiBoYXMgYmVlbiBkZWR1Y3RlZFxuICAgIGlmIChpc1NzZiAmJiBpbmRleCA9PT0gMCkge1xuICAgICAgaXRlbS5yYXRlID0gMDtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBnZXRUb3RhbFRheEZvclJhdGVXaXRoSW5jb21lKFxuICAgICAgaXRlbSxcbiAgICAgIGluZGV4ID09PSAwID8gdG90YWxUYXhhYmxlQW1vdW50IDogdGF4QnJlYWtEb3duQXJyYXlbaW5kZXggLSAxXS5jYXJyeSxcbiAgICApO1xuICAgIHRheEJyZWFrRG93bkFycmF5LnB1c2gocmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHR3byBkZWNpbWFsIG51bWJlciBjb252ZXJ0ZWQgZnJvbSBvcmlnaW5hbCBpbnB1dCBmbG9hdCBudW1iZXJcbiAqXG4gKiBAcGFyYW0gYW1vdW50IGZsb2F0aW5nIG51bWJlclxuICovXG5cbmNvbnN0IGdldEFtb3VudFJvdW5kZWQgPSAoYW1vdW50KSA9PiB7XG4gIHJldHVybiBNYXRoLnJvdW5kKGFtb3VudCAqIDEwMCkgLyAxMDA7XG59O1xuXG5leHBvcnQge1xuICBnZXRBbW91bnRSb3VuZGVkLFxuICBnZXRUb3RhbFRheGFibGVBbW91bnQsXG4gIGdldFRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzLFxufTtcbiIsIi8qIVxuICpcbiAqIEBkYW5mZWJvb2tzL25lcGFscGl0XG4gKiBQZXJzb25hbCBJbmNvbWUgVGF4IChQSVQpIGNhbGN1bGF0b3IgdXRpbGl0eSBmb3IgTmVwYWxcbiAqIGh0dHBzOi8vd3d3LmRhbmZlYm9va3MuY29tL2VuL2NhbGN1bGF0b3JzL25lcGFsLXBlcnNvbmFsLWluY29tZS10YXhcbiAqXG4gKlxuICogTUlUIExpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAyMCAtIDIwMjEgRGFuZmVCb29rc8KuXG4gKlxuICogRGF0YVxuICogVGF4IFNsYWIgRGF0YVxuICovXG5cbmNvbnN0IG9iaiA9IHtcbiAgXCIyMDcwLzcxXCI6IHtcbiAgICBmeVN0YXJ0RGF0ZTogXCJKdWx5IDE2LCAyMDEzXCIsXG4gICAgZnlTdGFydERhdGVOZTogXCJTaHJhd2FuIDEsIDIwNzBcIixcbiAgICBmeUVuZERhdGU6IFwiSnVseSAxNiwgMjAxNFwiLFxuICAgIGZ5RW5kRGF0ZU5lOiBcIkFzaGFkIDMyLCAyMDcxXCIsXG4gICAgbWF4RVBGUmF0ZTogMC4yLFxuICAgIG1heERlZHVjdGlvblJhdGU6IDAuMzMsXG4gICAgbWF4RGVkdWN0aW9uTGltaXQ6IDMwMDAwMCxcbiAgICBicmFja2V0czoge1xuICAgICAgc2luZ2xlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzdGFydDogMC4wLFxuICAgICAgICAgIGVuZDogNDAwMDAwLjAsXG4gICAgICAgICAgcmF0ZTogMC4wMSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHN0YXJ0OiA0MDAwMDAuMCxcbiAgICAgICAgICBlbmQ6IDUwMDAwMC4wLFxuICAgICAgICAgIHJhdGU6IDAuMSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHN0YXJ0OiA1MDAwMDAuMCxcbiAgICAgICAgICBlbmQ6IDcwMDAwMC4wLFxuICAgICAgICAgIHJhdGU6IDAuMixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHN0YXJ0OiA3MDAwMDAuMCxcbiAgICAgICAgICBlbmQ6IDIwMDAwMDAuMCxcbiAgICAgICAgICByYXRlOiAwLjMsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgbWFycmllZDogW1xuICAgICAgICB7XG4gICAgICAgICAgc3RhcnQ6IDAuMCxcbiAgICAgICAgICBlbmQ6IDQ1MDAwMC4wLFxuICAgICAgICAgIHJhdGU6IDAuMDEsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzdGFydDogNDUwMDAwLjAsXG4gICAgICAgICAgZW5kOiA1NTAwMDAuMCxcbiAgICAgICAgICByYXRlOiAwLjEsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzdGFydDogNTUwMDAwLjAsXG4gICAgICAgICAgZW5kOiA3NTAwMDAuMCxcbiAgICAgICAgICByYXRlOiAwLjIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzdGFydDogNzUwMDAwLjAsXG4gICAgICAgICAgZW5kOiAyMDAwMDAwLjAsXG4gICAgICAgICAgcmF0ZTogMC4zLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICBcIjIwNzEvNzJcIjoge1xuICAgIGZ5U3RhcnREYXRlOiBcIkp1bHkgMTcsIDIwMTRcIixcbiAgICBmeVN0YXJ0RGF0ZU5lOiBcIlNocmF3YW4gMSwgMjA3MVwiLFxuICAgIGZ5RW5kRGF0ZTogXCJKdWx5IDE2LCAyMDE1XCIsXG4gICAgZnlFbmREYXRlTmU6IFwiQXNoYWQgMzEsIDIwNzJcIixcbiAgICBicmFja2V0czogW1xuICAgICAge1xuICAgICAgICBzaW5nbGU6IFt7IDI1MDAwMDogMSB9LCB7IDEwMDAwMDogMiB9XSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG1hcnJpZWQ6IFt7IDMwMDAwMDogMSB9LCB7IDEwMDAwMDogMSB9XSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAgXCIyMDcyLzczXCI6IHtcbiAgICBmeVN0YXJ0RGF0ZTogXCJKdWx5IDE3LCAyMDE1XCIsXG4gICAgZnlTdGFydERhdGVOZTogXCJTaHJhd2FuIDEsIDIwNzJcIixcbiAgICBmeUVuZERhdGU6IFwiSnVseSAxNSwgMjAxNlwiLFxuICAgIGZ5RW5kRGF0ZU5lOiBcIkFzaGFkIDMxLCAyMDczXCIsXG4gICAgYnJhY2tldHM6IFtcbiAgICAgIHtcbiAgICAgICAgc2luZ2xlOiBbeyAyNTAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfV0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBtYXJyaWVkOiBbeyAzMDAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfV0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIFwiMjA3My83NFwiOiB7XG4gICAgZnlTdGFydERhdGU6IFwiSnVseSAxNiwgMjAxNlwiLFxuICAgIGZ5U3RhcnREYXRlTmU6IFwiU2hyYXdhbiAxLCAyMDczXCIsXG4gICAgZnlFbmREYXRlOiBcIkp1bHkgMTUsIDIwMTdcIixcbiAgICBmeUVuZERhdGVOZTogXCJBc2hhZCAzMSwgMjA3NFwiLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICB7XG4gICAgICAgIHNpbmdsZTogW3sgMzUwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH1dLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbWFycmllZDogW3sgNDAwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH1dLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBcIjIwNzQvNzVcIjoge1xuICAgIGZ5U3RhcnREYXRlOiBcIkp1bCAxNiwgMjAxN1wiLFxuICAgIGZ5U3RhcnREYXRlTmU6IFwiU2hyYXdhbiAxLCAyMDc0XCIsXG4gICAgZnlFbmREYXRlOiBcIkp1bHkgMTYsIDIwMThcIixcbiAgICBmeUVuZERhdGVOZTogXCJBc2FkaCAzMiwgMjA3NVwiLFxuICAgIGJyYWNrZXRzOiBbXG4gICAgICB7XG4gICAgICAgIHNpbmdsZTogW3sgMzUwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH1dLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbWFycmllZDogW3sgNDAwMDAwOiAxIH0sIHsgMTAwMDAwOiAyIH1dLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBcIjIwNzUvNzZcIjoge1xuICAgIGZ5U3RhcnREYXRlOiBcIkp1bHkgMTcsIDIwMThcIixcbiAgICBmeVN0YXJ0RGF0ZU5lOiBcIlNocmF3YW4gMSwgMjA3NVwiLFxuICAgIGZ5RW5kRGF0ZTogXCJKdWx5IDE2LCAyMDE5XCIsXG4gICAgZnlFbmREYXRlTmU6IFwiQXNhZGggMzEsIDIwNzZcIixcbiAgICBicmFja2V0czogW1xuICAgICAge1xuICAgICAgICBzaW5nbGU6IFt7IDM1MDAwMDogMSB9LCB7IDEwMDAwMDogMiB9LCB7IDIwMDAwMDogMyB9LCB7IDEzNTAwMDA6IDQgfV0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBtYXJyaWVkOiBbeyA0MDAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfSwgeyAyMDAwMDA6IDMgfSwgeyAxMzAwMDAwOiA0IH1dLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBcIjIwNzYvNzdcIjoge1xuICAgIGZ5U3RhcnREYXRlOiBcIkp1bHkgMTcsIDIwMTlcIixcbiAgICBmeVN0YXJ0RGF0ZU5lOiBcIlNocmF3YW4gMSwgMjA3NlwiLFxuICAgIGZ5RW5kRGF0ZTogXCJKdWx5IDE1LCAyMDIwXCIsXG4gICAgZnlFbmREYXRlTmU6IFwiQXNhZGggMzEsIDIwNzdcIixcbiAgICBicmFja2V0czogW1xuICAgICAge1xuICAgICAgICBzaW5nbGU6IFt7IDQwMDAwMDogMSB9LCB7IDEwMDAwMDogMiB9LCB7IDIwMDAwMDogMyB9LCB7IDEzMDAwMDA6IDQgfV0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBtYXJyaWVkOiBbNDUwMDAwLCB7IDEwMDAwMDogMiB9LCB7IDIwMDAwMDogMyB9LCB7IDEyNTAwMDA6IDQgfV0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIFwiMjA3Ny83OFwiOiB7XG4gICAgZnlTdGFydERhdGU6IFwiSnVseSAxNiwgMjAxM1wiLFxuICAgIGZ5U3RhcnREYXRlTmU6IFwiU2hyYXdhbiAxLCAyMDcwXCIsXG4gICAgZnlFbmREYXRlOiBcIkp1bHkgMTYsIDIwMTRcIixcbiAgICBmeUVuZERhdGVOZTogXCJBc2hhZCAzMiwgMjA3MVwiLFxuICAgIG1heEVQRlJhdGU6IDAuMixcbiAgICBtYXhEZWR1Y3Rpb25SYXRlOiAwLjMzLFxuICAgIG1heERlZHVjdGlvbkxpbWl0OiAzMDAwMDAsXG4gICAgYnJhY2tldHM6IHtcbiAgICAgIHNpbmdsZTogW1xuICAgICAgICB7XG4gICAgICAgICAgc3RhcnQ6IDAuMCxcbiAgICAgICAgICBlbmQ6IDQwMDAwMC4wLFxuICAgICAgICAgIHJhdGU6IDAuMDEsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzdGFydDogNDAwMDAwLjAsXG4gICAgICAgICAgZW5kOiA1MDAwMDAuMCxcbiAgICAgICAgICByYXRlOiAwLjEsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzdGFydDogNTAwMDAwLjAsXG4gICAgICAgICAgZW5kOiA3MDAwMDAuMCxcbiAgICAgICAgICByYXRlOiAwLjIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzdGFydDogNzAwMDAwLjAsXG4gICAgICAgICAgZW5kOiAyMDAwMDAwLjAsXG4gICAgICAgICAgcmF0ZTogMC4zLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgIG1hcnJpZWQ6IFtcbiAgICAgICAge1xuICAgICAgICAgIHN0YXJ0OiAwLjAsXG4gICAgICAgICAgZW5kOiA0NTAwMDAuMCxcbiAgICAgICAgICByYXRlOiAwLjAxLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3RhcnQ6IDQ1MDAwMC4wLFxuICAgICAgICAgIGVuZDogNTUwMDAwLjAsXG4gICAgICAgICAgcmF0ZTogMC4xLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3RhcnQ6IDU1MDAwMC4wLFxuICAgICAgICAgIGVuZDogNzUwMDAwLjAsXG4gICAgICAgICAgcmF0ZTogMC4yLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3RhcnQ6IDc1MDAwMC4wLFxuICAgICAgICAgIGVuZDogMjAwMDAwMC4wLFxuICAgICAgICAgIHJhdGU6IDAuMyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbiAgXCIyMDc4Lzc5XCI6IHtcbiAgICBmeVN0YXJ0RGF0ZTogXCJKdWx5IDE2LCAyMDIxXCIsXG4gICAgZnlTdGFydERhdGVOZTogXCJTaHJhd2FuIDEsIDIwNzhcIixcbiAgICBmeUVuZERhdGU6IFwiSnVseSAxNiwgMjAyMlwiLFxuICAgIGZ5RW5kRGF0ZU5lOiBcIkFzYWRoIDMyLCAyMDc5XCIsXG4gICAgYnJhY2tldHM6IFtcbiAgICAgIHtcbiAgICAgICAgc2luZ2xlOiBbeyA0MDAwMDA6IDEgfSwgeyAxMDAwMDA6IDIgfSwgeyAyMDAwMDA6IDMgfSwgeyAxMzAwMDAwOiA0IH1dLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbWFycmllZDogWzQ1MDAwMCwgeyAxMDAwMDA6IDIgfSwgeyAyMDAwMDA6IDMgfSwgeyAxMjUwMDAwOiA0IH1dLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBcIjIwNzkvODBcIjoge1xuICAgIGZ5U3RhcnREYXRlOiBcIkp1bHkgMTcsIDIwMjJcIixcbiAgICBmeVN0YXJ0RGF0ZU5lOiBcIlNocmF3YW4gMSwgMjA3OVwiLFxuICAgIGZ5RW5kRGF0ZTogXCJKdWx5IDE2LCAyMDIzXCIsXG4gICAgZnlFbmREYXRlTmU6IFwiQXNhZGggMzEsIDIwODBcIixcbiAgICBicmFja2V0czogW1xuICAgICAge1xuICAgICAgICBzaW5nbGU6IFt7IDQwMDAwMDogMSB9LCB7IDEwMDAwMDogMiB9LCB7IDIwMDAwMDogMyB9LCB7IDEzMDAwMDA6IDQgfV0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBtYXJyaWVkOiBbNDUwMDAwLCB7IDEwMDAwMDogMiB9LCB7IDIwMDAwMDogMyB9LCB7IDEyNTAwMDA6IDQgfV0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIFwiMjA4MC84MVwiOiB7XG4gICAgZnlTdGFydERhdGU6IFwiSnVseSAxNywgMjAyM1wiLFxuICAgIGZ5U3RhcnREYXRlTmU6IFwiU2hyYXdhbiAxLCAyMDgwXCIsXG4gICAgZnlFbmREYXRlOiBcIkp1bHkgMTUsIDIwMjRcIixcbiAgICBmeUVuZERhdGVOZTogXCJBc2FkaCAzMSwgMjA4MVwiLFxuICAgIG1heERlZHVjdGlvblJhdGU6IDEgLyAzLFxuICAgIG1heERlZHVjdGlvbkxpbWl0OiAzXzAwXzAwMCxcbiAgICBtYXhEZWR1Y3Rpb25MaW1pdFdpdGhTU0Y6IDVfMDBfMDAwLFxuICAgIG1heEluc3VyYW5jZURlZHVjdGlvbkxpbWl0OiA0MF8wMDAsXG4gICAgYnJhY2tldHM6IHtcbiAgICAgIHNpbmdsZTogW1xuICAgICAgICB7XG4gICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgZW5kOiA1XzAwXzAwMCxcbiAgICAgICAgICByYXRlOiAwLjAxLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3RhcnQ6IDVfMDBfMDAwLFxuICAgICAgICAgIGVuZDogN18wMF8wMDAsXG4gICAgICAgICAgcmF0ZTogMC4xLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3RhcnQ6IDdfMDBfMDAwLFxuICAgICAgICAgIGVuZDogMTBfMDBfMDAwLFxuICAgICAgICAgIHJhdGU6IDAuMixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHN0YXJ0OiAxMF8wMF8wMDAsXG4gICAgICAgICAgZW5kOiAyMF8wMF8wMDAsXG4gICAgICAgICAgcmF0ZTogMC4zLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3RhcnQ6IDIwXzAwXzAwMCxcbiAgICAgICAgICBlbmQ6IDUwXzAwXzAwMCxcbiAgICAgICAgICByYXRlOiAwLjM2LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3RhcnQ6IDUwXzAwXzAwMCxcbiAgICAgICAgICBlbmQ6IEluZmluaXR5LFxuICAgICAgICAgIHJhdGU6IDAuMzksXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgICAgbWFycmllZDogW1xuICAgICAgICB7XG4gICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgZW5kOiA2XzAwXzAwMCxcbiAgICAgICAgICByYXRlOiAwLjAxLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3RhcnQ6IDZfMDBfMDAwLFxuICAgICAgICAgIGVuZDogOF8wMF8wMDAsXG4gICAgICAgICAgcmF0ZTogMC4xLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3RhcnQ6IDhfMDBfMDAwLFxuICAgICAgICAgIGVuZDogMTFfMDBfMDAwLFxuICAgICAgICAgIHJhdGU6IDAuMixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHN0YXJ0OiAxMV8wMF8wMDAsXG4gICAgICAgICAgZW5kOiAyMF8wMF8wMDAsXG4gICAgICAgICAgcmF0ZTogMC4zLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3RhcnQ6IDIwXzAwXzAwMCxcbiAgICAgICAgICBlbmQ6IDUwXzAwXzAwMCxcbiAgICAgICAgICByYXRlOiAwLjM2LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3RhcnQ6IDUwXzAwXzAwMCxcbiAgICAgICAgICBlbmQ6IEluZmluaXR5LFxuICAgICAgICAgIHJhdGU6IDAuMzksXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG59O1xuXG4vLyBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbi8vIGV4cG9ydCB7IGRhdGEgfTtcbmV4cG9ydCBkZWZhdWx0IG9iajtcbiIsIi8qIVxuICpcbiAqIEBkYW5mZWJvb2tzL25lcGFscGl0XG4gKiBQZXJzb25hbCBJbmNvbWUgVGF4IChQSVQpIGNhbGN1bGF0b3IgdXRpbGl0eSBmb3IgTmVwYWxcbiAqIGh0dHBzOi8vd3d3LmRhbmZlYm9va3MuY29tL2VuL2NhbGN1bGF0b3JzL25lcGFsLXBlcnNvbmFsLWluY29tZS10YXhcbiAqXG4gKlxuICogTUlUIExpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAyMCAtIDIwMjEgRGFuZmVCb29rc8KuXG4gKlxuICogSW5kZXguanNcbiAqL1xuXG5pbXBvcnQgeyBicmVha2Rvd24gfSBmcm9tIFwiLi9icmVha2Rvd24uanNcIjtcbmltcG9ydCB7XG4gIGdldEFtb3VudFJvdW5kZWQsXG4gIGdldFRvdGFsVGF4YWJsZUFtb3VudCxcbiAgZ2V0VG90YWxUYXhBbW91bnRXaXRoQnJhY2tldHMsXG59IGZyb20gXCIuL2NhbGN1bGF0b3JcIjtcblxuY29uc3QgdGF4ID0gKG9wdGlvbnMpID0+IHtcbiAgY29uc3QgeyBpbmNvbWUsIGVwZiwgY2l0LCBzc2YsIGluc3VyYW5jZSwgeWVhciwgc2luZ2xlIH0gPSBvcHRpb25zO1xuICBjb25zdCBtZXRhID0gYnJlYWtkb3duKHllYXIpO1xuICBjb25zb2xlLmxvZyhcIkdpdmVuIHllYXIgaXNcIiwgeWVhcik7XG4gIGNvbnN0IHsgdGF4YWJsZUluY29tZSwgc3VtT2ZTc2ZFcGZBbmRDaXQsIGZpbmFsSW5zdXJhbmNlIH0gPVxuICAgIGdldFRvdGFsVGF4YWJsZUFtb3VudChcbiAgICAgIGluY29tZSxcbiAgICAgIGVwZixcbiAgICAgIGNpdCxcbiAgICAgIHNzZixcbiAgICAgIGluc3VyYW5jZSxcbiAgICAgIG1ldGEsXG4gICAgKTtcbiAgY29uc3QgbWFyaXRhbFN0YXR1cyA9IHNpbmdsZSA/IFwic2luZ2xlXCIgOiBcIm1hcnJpZWRcIjtcbiAgY29uc3QgdG90YWxUYXhBbW91bnRXaXRoQnJhY2tldHMgPSBnZXRUb3RhbFRheEFtb3VudFdpdGhCcmFja2V0cyhcbiAgICBtZXRhLmJyYWNrZXRzW21hcml0YWxTdGF0dXNdLFxuICAgIHRheGFibGVJbmNvbWUsXG4gICAgc3NmID4gMCxcbiAgKTtcblxuICBjb25zdCBmb3JtYXQgPSAobnVtYmVyKSA9PiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoKS5mb3JtYXQobnVtYmVyKTtcblxuICBjb25zdCByZXN1bHQgPSB7XG4gICAgc3VtT2ZTc2ZFcGZBbmRDaXQ6IGZvcm1hdChzdW1PZlNzZkVwZkFuZENpdCksXG4gICAgaW5zdXJhbmNlOiBmb3JtYXQoZmluYWxJbnN1cmFuY2UpLFxuICAgIHRvdGFsSW5jb21lOiBmb3JtYXQoaW5jb21lKSxcbiAgICB0b3RhbERlZHVjdGlvbjogZm9ybWF0KGluY29tZSAtIHRheGFibGVJbmNvbWUpLFxuICAgIG5ldEFzc2Vzc2FibGU6IGZvcm1hdCh0YXhhYmxlSW5jb21lKSxcbiAgICB0b3RhbFRheFdpdGhCcmFja2V0czogdG90YWxUYXhBbW91bnRXaXRoQnJhY2tldHNcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uYXNzZXNpYmxlSW5jb21lID4gMClcbiAgICAgIC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgdGF4T2JqID0ge307XG4gICAgICAgIHRheE9iai5hc3Nlc2libGVJbmNvbWUgPSBmb3JtYXQoaXRlbS5hc3Nlc2libGVJbmNvbWUpO1xuICAgICAgICB0YXhPYmoucmF0ZSA9IGl0ZW0udGF4UmF0ZSAqIDEwMDtcbiAgICAgICAgdGF4T2JqLnRheExpYWJpbGl0eSA9IGZvcm1hdChpdGVtLnRheExpYWJpbGl0eSk7XG4gICAgICAgIHJldHVybiB0YXhPYmo7XG4gICAgICB9KSxcbiAgICB0b3RhbEFzc2VzaWJsZUluY29tZTogZm9ybWF0KHRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzLnJlZHVjZShcbiAgICAgIChpbml0aWFsVmFsdWUsIHZhbHVlKSA9PiBpbml0aWFsVmFsdWUgKyB2YWx1ZS5hc3Nlc2libGVJbmNvbWUsXG4gICAgICAwLFxuICAgICkpLFxuICAgIHRvdGFsVGF4TGlhYmlsaXR5OiBmb3JtYXQodG90YWxUYXhBbW91bnRXaXRoQnJhY2tldHMucmVkdWNlKFxuICAgICAgKGluaXRpYWxWYWx1ZSwgdmFsdWUpID0+IGluaXRpYWxWYWx1ZSArIHZhbHVlLnRheExpYWJpbGl0eSxcbiAgICAgIDAsXG4gICAgKSksXG4gICAgbmV0VGF4TGlhYmlsaXR5TW9udGhseTogZm9ybWF0KGdldEFtb3VudFJvdW5kZWQoXG4gICAgICB0b3RhbFRheEFtb3VudFdpdGhCcmFja2V0cy5yZWR1Y2UoXG4gICAgICAgIChpbml0aWFsVmFsdWUsIHZhbHVlKSA9PiBpbml0aWFsVmFsdWUgKyB2YWx1ZS50YXhMaWFiaWxpdHksXG4gICAgICAgIDAsXG4gICAgICApIC8gMTIsXG4gICAgKSksXG4gIH07XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IG1ldGEgPSAoKSA9PiB7XG4gIHJldHVybiBcIm1ldGEgd29yayBpbiBwb3JvZ3Jlc3NcIjtcbn07XG5cbmV4cG9ydCB7IG1ldGEsIHRheCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9