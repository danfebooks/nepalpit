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
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/lodash.clonedeep/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.clonedeep/index.js ***!
  \************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    getPrototype = overArg(Object.getPrototypeOf, Object),
    objectCreate = Object.create,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof ListCache) {
    var pairs = cache.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      if (isHostObject(value)) {
        return object ? value : {};
      }
      result = initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? getAllKeys(value) : keys(value);
  }
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject(proto) ? objectCreate(proto) : {};
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString.call(value);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/**
 * Creates a clone of `map`.
 *
 * @private
 * @param {Object} map The map to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned map.
 */
function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
  return arrayReduce(array, addMapEntry, new map.constructor);
}

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * Creates a clone of `set`.
 *
 * @private
 * @param {Object} set The set to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned set.
 */
function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
  return arrayReduce(array, addSetEntry, new set.constructor);
}

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Copies own symbol properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = objectToString.call(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : undefined;

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return cloneMap(object, isDeep, cloneFunc);

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return cloneSet(object, isDeep, cloneFunc);

    case symbolTag:
      return cloneSymbol(object);
  }
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, true, true);
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = cloneDeep;


/***/ }),

/***/ "./src/breakdown.ts":
/*!**************************!*\
  !*** ./src/breakdown.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
const lodash_clonedeep_1 = __importDefault(__webpack_require__(/*! lodash.clonedeep */ "./node_modules/lodash.clonedeep/index.js"));
const breakdown = (year) => {
    const brackets = (0, lodash_clonedeep_1.default)(data_1.default[year]);
    return brackets;
};
exports.breakdown = breakdown;


/***/ }),

/***/ "./src/calculator.ts":
/*!***************************!*\
  !*** ./src/calculator.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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
    const taxBreakDownArray = [];
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

"use strict";

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

"use strict";

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
    // Parameter validation - Check for negative values
    if (income < 0 || epf < 0 || cit < 0 || ssf < 0 || insurance < 0) {
        throw new Error('Tax parameters (Income, EPF, CIT, SSF, Insurance) cannot be negative.');
    }
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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.ts");
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC5jbG9uZWRlZXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy8uL3NyYy9icmVha2Rvd24udHMiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy8uL3NyYy9jYWxjdWxhdG9yLnRzIiwid2VicGFjazovL2RhbmZlYm9va3MvLi9zcmMvZGF0YS50cyIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2RhbmZlYm9va3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZGFuZmVib29rcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2RhbmZlYm9va3Mvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9kYW5mZWJvb2tzL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTLEdBQUcsU0FBUztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsa0JBQWtCLEVBQUU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFh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QTtVQUNBOzs7OztXQ3hCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BEO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7OztVQ0pBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6ImRhbmZlYm9va3MucGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJkYW5mZWJvb2tzXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImRhbmZlYm9va3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZGFuZmVib29rc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBzdXBwb3J0ZWQgYnkgYF8uY2xvbmVgLiAqL1xudmFyIGNsb25lYWJsZVRhZ3MgPSB7fTtcbmNsb25lYWJsZVRhZ3NbYXJnc1RhZ10gPSBjbG9uZWFibGVUYWdzW2FycmF5VGFnXSA9XG5jbG9uZWFibGVUYWdzW2FycmF5QnVmZmVyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0YVZpZXdUYWddID1cbmNsb25lYWJsZVRhZ3NbYm9vbFRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGVUYWddID1cbmNsb25lYWJsZVRhZ3NbZmxvYXQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW2Zsb2F0NjRUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDE2VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbbWFwVGFnXSA9XG5jbG9uZWFibGVUYWdzW251bWJlclRhZ10gPSBjbG9uZWFibGVUYWdzW29iamVjdFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tyZWdleHBUYWddID0gY2xvbmVhYmxlVGFnc1tzZXRUYWddID1cbmNsb25lYWJsZVRhZ3Nbc3RyaW5nVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc3ltYm9sVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xuY2xvbmVhYmxlVGFnc1tlcnJvclRhZ10gPSBjbG9uZWFibGVUYWdzW2Z1bmNUYWddID1cbmNsb25lYWJsZVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKlxuICogQWRkcyB0aGUga2V5LXZhbHVlIGBwYWlyYCB0byBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhaXIgVGhlIGtleS12YWx1ZSBwYWlyIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG1hcGAuXG4gKi9cbmZ1bmN0aW9uIGFkZE1hcEVudHJ5KG1hcCwgcGFpcikge1xuICAvLyBEb24ndCByZXR1cm4gYG1hcC5zZXRgIGJlY2F1c2UgaXQncyBub3QgY2hhaW5hYmxlIGluIElFIDExLlxuICBtYXAuc2V0KHBhaXJbMF0sIHBhaXJbMV0pO1xuICByZXR1cm4gbWFwO1xufVxuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYHNldGAuXG4gKi9cbmZ1bmN0aW9uIGFkZFNldEVudHJ5KHNldCwgdmFsdWUpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBzZXQuYWRkYCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgc2V0LmFkZCh2YWx1ZSk7XG4gIHJldHVybiBzZXQ7XG59XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCBpbiBJRSA8IDkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0hvc3RPYmplY3QodmFsdWUpIHtcbiAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgLy8gZGVzcGl0ZSBoYXZpbmcgaW1wcm9wZXJseSBkZWZpbmVkIGB0b1N0cmluZ2AgbWV0aG9kcy5cbiAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSAhISh2YWx1ZSArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgU3ltYm9sID0gcm9vdC5TeW1ib2wsXG4gICAgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheSxcbiAgICBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KSxcbiAgICBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlLFxuICAgIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gICAgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgICBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpLFxuICAgIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyksXG4gICAgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpLFxuICAgIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0JyksXG4gICAgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpLFxuICAgIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICByZXR1cm4gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xufVxuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLnNldChrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xufVxuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX19bJ2RlbGV0ZSddKGtleSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgY2FjaGUgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoY2FjaGUgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBjYWNoZS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgY2FjaGUgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBjYWNoZS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHJldHVybiB0aGlzO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIC8vIFNhZmFyaSA5IG1ha2VzIGBhcmd1bWVudHMubGVuZ3RoYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICB2YXIgcmVzdWx0ID0gKGlzQXJyYXkodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSlcbiAgICA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZylcbiAgICA6IFtdO1xuXG4gIHZhciBsZW5ndGggPSByZXN1bHQubGVuZ3RoLFxuICAgICAgc2tpcEluZGV4ZXMgPSAhIWxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChrZXkgPT0gJ2xlbmd0aCcgfHwgaXNJbmRleChrZXksIGxlbmd0aCkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRnVsbF0gU3BlY2lmeSBhIGNsb25lIGluY2x1ZGluZyBzeW1ib2xzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBpc0RlZXAsIGlzRnVsbCwgY3VzdG9taXplciwga2V5LCBvYmplY3QsIHN0YWNrKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChjdXN0b21pemVyKSB7XG4gICAgcmVzdWx0ID0gb2JqZWN0ID8gY3VzdG9taXplcih2YWx1ZSwga2V5LCBvYmplY3QsIHN0YWNrKSA6IGN1c3RvbWl6ZXIodmFsdWUpO1xuICB9XG4gIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSk7XG4gIGlmIChpc0Fycikge1xuICAgIHJlc3VsdCA9IGluaXRDbG9uZUFycmF5KHZhbHVlKTtcbiAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgcmV0dXJuIGNvcHlBcnJheSh2YWx1ZSwgcmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSksXG4gICAgICAgIGlzRnVuYyA9IHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG5cbiAgICBpZiAoaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY2xvbmVCdWZmZXIodmFsdWUsIGlzRGVlcCk7XG4gICAgfVxuICAgIGlmICh0YWcgPT0gb2JqZWN0VGFnIHx8IHRhZyA9PSBhcmdzVGFnIHx8IChpc0Z1bmMgJiYgIW9iamVjdCkpIHtcbiAgICAgIGlmIChpc0hvc3RPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lT2JqZWN0KGlzRnVuYyA/IHt9IDogdmFsdWUpO1xuICAgICAgaWYgKCFpc0RlZXApIHtcbiAgICAgICAgcmV0dXJuIGNvcHlTeW1ib2xzKHZhbHVlLCBiYXNlQXNzaWduKHJlc3VsdCwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjbG9uZWFibGVUYWdzW3RhZ10pIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCA/IHZhbHVlIDoge307XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVCeVRhZyh2YWx1ZSwgdGFnLCBiYXNlQ2xvbmUsIGlzRGVlcCk7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIGZvciBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCByZXR1cm4gaXRzIGNvcnJlc3BvbmRpbmcgY2xvbmUuXG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KHZhbHVlKTtcbiAgaWYgKHN0YWNrZWQpIHtcbiAgICByZXR1cm4gc3RhY2tlZDtcbiAgfVxuICBzdGFjay5zZXQodmFsdWUsIHJlc3VsdCk7XG5cbiAgaWYgKCFpc0Fycikge1xuICAgIHZhciBwcm9wcyA9IGlzRnVsbCA/IGdldEFsbEtleXModmFsdWUpIDoga2V5cyh2YWx1ZSk7XG4gIH1cbiAgYXJyYXlFYWNoKHByb3BzIHx8IHZhbHVlLCBmdW5jdGlvbihzdWJWYWx1ZSwga2V5KSB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBrZXkgPSBzdWJWYWx1ZTtcbiAgICAgIHN1YlZhbHVlID0gdmFsdWVba2V5XTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgcG9wdWxhdGUgY2xvbmUgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBhc3NpZ25WYWx1ZShyZXN1bHQsIGtleSwgYmFzZUNsb25lKHN1YlZhbHVlLCBpc0RlZXAsIGlzRnVsbCwgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90b3R5cGUgVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBiYXNlQ3JlYXRlKHByb3RvKSB7XG4gIHJldHVybiBpc09iamVjdChwcm90bykgPyBvYmplY3RDcmVhdGUocHJvdG8pIDoge307XG59XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gKGlzRnVuY3Rpb24odmFsdWUpIHx8IGlzSG9zdE9iamVjdCh2YWx1ZSkpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mICBgYnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQnVmZmVyKGJ1ZmZlciwgaXNEZWVwKSB7XG4gIGlmIChpc0RlZXApIHtcbiAgICByZXR1cm4gYnVmZmVyLnNsaWNlKCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBidWZmZXIuY29uc3RydWN0b3IoYnVmZmVyLmxlbmd0aCk7XG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGRhdGFWaWV3YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFWaWV3IFRoZSBkYXRhIHZpZXcgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIGRhdGEgdmlldy5cbiAqL1xuZnVuY3Rpb24gY2xvbmVEYXRhVmlldyhkYXRhVmlldywgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKGRhdGFWaWV3LmJ1ZmZlcikgOiBkYXRhVmlldy5idWZmZXI7XG4gIHJldHVybiBuZXcgZGF0YVZpZXcuY29uc3RydWN0b3IoYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0LCBkYXRhVmlldy5ieXRlTGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBtYXAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lTWFwKG1hcCwgaXNEZWVwLCBjbG9uZUZ1bmMpIHtcbiAgdmFyIGFycmF5ID0gaXNEZWVwID8gY2xvbmVGdW5jKG1hcFRvQXJyYXkobWFwKSwgdHJ1ZSkgOiBtYXBUb0FycmF5KG1hcCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShhcnJheSwgYWRkTWFwRW50cnksIG5ldyBtYXAuY29uc3RydWN0b3IpO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgcmVnZXhwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2V4cCBUaGUgcmVnZXhwIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVSZWdFeHAocmVnZXhwKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgcmVnZXhwLmNvbnN0cnVjdG9yKHJlZ2V4cC5zb3VyY2UsIHJlRmxhZ3MuZXhlYyhyZWdleHApKTtcbiAgcmVzdWx0Lmxhc3RJbmRleCA9IHJlZ2V4cC5sYXN0SW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBzZXRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc2V0LlxuICovXG5mdW5jdGlvbiBjbG9uZVNldChzZXQsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhzZXRUb0FycmF5KHNldCksIHRydWUpIDogc2V0VG9BcnJheShzZXQpO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZFNldEVudHJ5LCBuZXcgc2V0LmNvbnN0cnVjdG9yKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhlIGBzeW1ib2xgIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHN5bWJvbCBUaGUgc3ltYm9sIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzeW1ib2wgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjbG9uZVN5bWJvbChzeW1ib2wpIHtcbiAgcmV0dXJuIHN5bWJvbFZhbHVlT2YgPyBPYmplY3Qoc3ltYm9sVmFsdWVPZi5jYWxsKHN5bWJvbCkpIDoge307XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCA/IHNvdXJjZVtrZXldIDogbmV3VmFsdWUpO1xuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbi8qKlxuICogQ29waWVzIG93biBzeW1ib2wgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHMoc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2wgcHJvcGVydGllcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9IG5hdGl2ZUdldFN5bWJvbHMgPyBvdmVyQXJnKG5hdGl2ZUdldFN5bWJvbHMsIE9iamVjdCkgOiBzdHViQXJyYXk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSxcbi8vIGZvciBkYXRhIHZpZXdzIGluIEVkZ2UgPCAxNCwgYW5kIHByb21pc2VzIGluIE5vZGUuanMuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lIGJhc2VkIG9uIGl0cyBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY2xvbmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUJ5VGFnKG9iamVjdCwgdGFnLCBjbG9uZUZ1bmMsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lQXJyYXlCdWZmZXIob2JqZWN0KTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG5cbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgcmV0dXJuIGNsb25lRGF0YVZpZXcob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVUeXBlZEFycmF5KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lTWFwKG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVNldChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgcmV0dXJuIGNsb25lU3ltYm9sKG9iamVjdCk7XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5jbG9uZWAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgY2xvbmVzIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlY3Vyc2l2ZWx5IGNsb25lLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhkZWVwWzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCB0cnVlLCB0cnVlKTtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIC8vIFNhZmFyaSA4LjEgbWFrZXMgYGFyZ3VtZW50cy5jYWxsZWVgIGVudW1lcmFibGUgaW4gc3RyaWN0IG1vZGUuXG4gIHJldHVybiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgKCFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgfHwgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJnc1RhZyk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBpc09iamVjdCh2YWx1ZSkgPyBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURlZXA7XG4iLCIvKiFcbiAqXG4gKiBAZGFuZmVib29rcy9uZXBhbHBpdFxuICogUGVyc29uYWwgSW5jb21lIFRheCAoUElUKSBjYWxjdWxhdG9yIHV0aWxpdHkgZm9yIE5lcGFsXG4gKiBodHRwczovL3d3dy5kYW5mZWJvb2tzLmNvbS9lbi9jYWxjdWxhdG9ycy9uZXBhbC1wZXJzb25hbC1pbmNvbWUtdGF4XG4gKlxuICpcbiAqIE1JVCBMaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgLSAyMDIxIERhbmZlQm9va3PCrlxuICpcbiAqIFRheCBCcmVha2Rvd25cbiAqIFRoaXMgaXMgdGhlIG1ldGFkYXRhIGZvciB0YXggYnJhY2tldHMgaW4gTmVwYWwgd2l0aCBGWSBmeVN0YXJ0RGF0ZSBhbmQgZnlFbmREYXRlRGF0ZVxuICovXG5cbmltcG9ydCBkYXRhLCB7IEZpc2NhbFllYXIgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IGNsb25lRGVlcCBmcm9tICdsb2Rhc2guY2xvbmVkZWVwJztcblxuY29uc3QgYnJlYWtkb3duID0gKHllYXI6IHN0cmluZyk6IEZpc2NhbFllYXIgPT4ge1xuXHRjb25zdCBicmFja2V0cyA9IGNsb25lRGVlcChkYXRhW3llYXJdKTtcblxuXHRyZXR1cm4gYnJhY2tldHM7XG59O1xuXG5leHBvcnQgeyBicmVha2Rvd24gfTtcbiIsIi8qIVxuICpcbiAqIEBkYW5mZWJvb2tzL25lcGFscGl0XG4gKiBQZXJzb25hbCBJbmNvbWUgVGF4IChQSVQpIGNhbGN1bGF0b3IgdXRpbGl0eSBmb3IgTmVwYWxcbiAqIGh0dHBzOi8vd3d3LmRhbmZlYm9va3MuY29tL2VuL2NhbGN1bGF0b3JzL25lcGFsLXBlcnNvbmFsLWluY29tZS10YXhcbiAqXG4gKlxuICogTUlUIExpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAyMCAtIDIwMjEgRGFuZmVCb29rc8KuXG4gKlxuICogY2FsY3VsYXRvci50c1xuICovXG5cbmludGVyZmFjZSBUb3RhbFRheGFibGVBbW91bnRSZXN1bHQge1xuXHR0YXhhYmxlSW5jb21lOiBudW1iZXI7XG5cdHN1bU9mU3NmRXBmQW5kQ2l0OiBudW1iZXI7XG5cdGZpbmFsSW5zdXJhbmNlOiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBUYXhSYXRlIHtcblx0c3RhcnQ6IG51bWJlcjtcblx0ZW5kOiBudW1iZXI7XG5cdHJhdGU6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFRvdGFsVGF4Rm9yUmF0ZVdpdGhJbmNvbWVSZXN1bHQge1xuXHR0YXhMaWFiaWxpdHk6IG51bWJlcjtcblx0dGF4UmF0ZTogbnVtYmVyO1xuXHRhc3Nlc3NpYmxlSW5jb21lOiBudW1iZXI7XG5cdGNhcnJ5OiBudW1iZXI7XG59XG5cbmludGVyZmFjZSBUb3RhbFRheGFibGVBbW91bnRQYXJhbXMge1xuXHR0b3RhbEluY29tZTogbnVtYmVyO1xuXHRlcGY6IG51bWJlcjtcblx0Y2l0OiBudW1iZXI7XG5cdHNzZjogbnVtYmVyO1xuXHRpbnN1cmFuY2U6IG51bWJlcjtcblx0dGF4U2V0dGluZ3M6IHtcblx0XHRtYXhEZWR1Y3Rpb25SYXRlOiBudW1iZXI7XG5cdFx0bWF4RGVkdWN0aW9uTGltaXQ6IG51bWJlcjtcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdFdpdGhTU0Y/OiBudW1iZXI7XG5cdFx0bWF4SW5zdXJhbmNlRGVkdWN0aW9uTGltaXQ/OiBudW1iZXI7XG5cdH07XG59XG5cbmNvbnN0IGdldFRvdGFsVGF4YWJsZUFtb3VudCA9ICh7XG5cdHRvdGFsSW5jb21lLFxuXHRlcGYsXG5cdGNpdCxcblx0c3NmLFxuXHRpbnN1cmFuY2UsXG5cdHRheFNldHRpbmdzLFxufTogVG90YWxUYXhhYmxlQW1vdW50UGFyYW1zKTogVG90YWxUYXhhYmxlQW1vdW50UmVzdWx0ID0+IHtcblx0Y29uc3Qge1xuXHRcdG1heERlZHVjdGlvblJhdGUsXG5cdFx0bWF4RGVkdWN0aW9uTGltaXQsXG5cdFx0bWF4RGVkdWN0aW9uTGltaXRXaXRoU1NGLFxuXHRcdG1heEluc3VyYW5jZURlZHVjdGlvbkxpbWl0LFxuXHR9ID0gdGF4U2V0dGluZ3M7XG5cdGNvbnN0IHRvdGFsRGVkdWN0aW9uID0gZXBmICsgY2l0ICsgc3NmO1xuXHRjb25zdCBtYXhEZWR1Y3RhYmxlQW1vdW50ID0gdG90YWxJbmNvbWUgKiBtYXhEZWR1Y3Rpb25SYXRlO1xuXG5cdGxldCBhY3R1YWxEZWR1Y3Rpb24gPSAwO1xuXHRsZXQgZGVkdWN0aW9uVGhyZXNob2xkID0gMDtcblxuXHQvLyBpZiB0b3RhbERlZHVjdGlvbiBjb25zaXN0cyBvZiBTU0Zcblx0aWYgKG1heERlZHVjdGlvbkxpbWl0V2l0aFNTRiAmJiBzc2YgPiAwKSB7XG5cdFx0Ly8gZGVmaW5pbmcgZGVkdWN0aW9uVGhyZXNob2xkIGNvbXBhcmluZyBtYXhEZWR1Y3Rpb25MaW1pdFdpdGhTU0YgKDUgbGFraHMpIGFuZCBtYXhEZWR1Y3RhYmxlQW1vdW50ICgzMyUpIHdoaWNoZXZlciBpcyBsb3dlclxuXHRcdGRlZHVjdGlvblRocmVzaG9sZCA9XG5cdFx0XHRtYXhEZWR1Y3Rpb25MaW1pdFdpdGhTU0YgPCBtYXhEZWR1Y3RhYmxlQW1vdW50XG5cdFx0XHRcdD8gbWF4RGVkdWN0aW9uTGltaXRXaXRoU1NGXG5cdFx0XHRcdDogbWF4RGVkdWN0YWJsZUFtb3VudDtcblx0fSBlbHNlIHtcblx0XHQvLyBkZWZpbmluZyBkZWR1Y3Rpb25UaHJlc2hvbGQgY29tcGFyaW5nIG1heERlZHVjdGlvbkxpbWl0ICgzIGxha2hzKSBhbmQgbWF4RGVkdWN0YWJsZUFtb3VudCAoMzMlKSB3aGljaGV2ZXIgaXMgbG93ZXJcblx0XHRkZWR1Y3Rpb25UaHJlc2hvbGQgPVxuXHRcdFx0bWF4RGVkdWN0aW9uTGltaXQgPCBtYXhEZWR1Y3RhYmxlQW1vdW50XG5cdFx0XHRcdD8gbWF4RGVkdWN0aW9uTGltaXRcblx0XHRcdFx0OiBtYXhEZWR1Y3RhYmxlQW1vdW50O1xuXHR9XG5cdGlmICh0b3RhbERlZHVjdGlvbiA+IGRlZHVjdGlvblRocmVzaG9sZCkge1xuXHRcdGFjdHVhbERlZHVjdGlvbiA9IGRlZHVjdGlvblRocmVzaG9sZDtcblx0fSBlbHNlIHtcblx0XHRhY3R1YWxEZWR1Y3Rpb24gPSB0b3RhbERlZHVjdGlvbjtcblx0fVxuXG5cdC8vIGlmIGluc3VyYW5jZSBpcyBncmVhdGVyIHRoYW4gNDAsMDAwXG5cdGxldCBhY3R1YWxJbnN1cmFuY2UgPSBpbnN1cmFuY2U7XG5cdGlmIChtYXhJbnN1cmFuY2VEZWR1Y3Rpb25MaW1pdCAmJiBpbnN1cmFuY2UgPiBtYXhJbnN1cmFuY2VEZWR1Y3Rpb25MaW1pdCkge1xuXHRcdGFjdHVhbEluc3VyYW5jZSA9IG1heEluc3VyYW5jZURlZHVjdGlvbkxpbWl0O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHR0YXhhYmxlSW5jb21lOiB0b3RhbEluY29tZSAtIGFjdHVhbERlZHVjdGlvbiAtIGFjdHVhbEluc3VyYW5jZSxcblx0XHRzdW1PZlNzZkVwZkFuZENpdDogYWN0dWFsRGVkdWN0aW9uLFxuXHRcdGZpbmFsSW5zdXJhbmNlOiBhY3R1YWxJbnN1cmFuY2UsXG5cdH07XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHRvdGFsIHRheCB3aXRoIHRheCBicmFja2V0c1xuICpcbiAqIEBwYXJhbSB0YXhSYXRlIHRheCByYXRlIGZyb20gc2VsZWN0ZWQgdGF4IGRhdGFcbiAqIEBwYXJhbSB0b3RhbFRheGFibGVJbmNvbWUgdG90YWwgaW5jb21lIChjYW4gYmUgY2FycnkgbGVmdCBvdmVyIGZyb20gdGhlIGxhc3QgYnJhY2tldClcbiAqL1xuXG5jb25zdCBnZXRUb3RhbFRheEZvclJhdGVXaXRoSW5jb21lID0gKFxuXHR0YXhSYXRlOiBUYXhSYXRlLFxuXHR0b3RhbFRheGFibGVJbmNvbWU6IG51bWJlcixcbik6IFRvdGFsVGF4Rm9yUmF0ZVdpdGhJbmNvbWVSZXN1bHQgPT4ge1xuXHRjb25zdCBpbmNvbWVUYXhSYXRlRGlmZmVyZW5jZSA9IHRheFJhdGUuZW5kIC0gdGF4UmF0ZS5zdGFydDtcblx0Y29uc3QgdG90YWxNaW51c0RpZmZlcmVuY2UgPSB0b3RhbFRheGFibGVJbmNvbWUgLSBpbmNvbWVUYXhSYXRlRGlmZmVyZW5jZTtcblx0Y29uc3QgY2FycnkgPSB0b3RhbE1pbnVzRGlmZmVyZW5jZSA+IDAgPyB0b3RhbE1pbnVzRGlmZmVyZW5jZSA6IDA7XG5cblx0aWYgKHRvdGFsVGF4YWJsZUluY29tZSA+IDApIHtcblx0XHRpZiAodG90YWxUYXhhYmxlSW5jb21lID49IGluY29tZVRheFJhdGVEaWZmZXJlbmNlKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR0YXhMaWFiaWxpdHk6IGluY29tZVRheFJhdGVEaWZmZXJlbmNlICogdGF4UmF0ZS5yYXRlLFxuXHRcdFx0XHR0YXhSYXRlOiB0YXhSYXRlLnJhdGUsXG5cdFx0XHRcdGFzc2Vzc2libGVJbmNvbWU6IGluY29tZVRheFJhdGVEaWZmZXJlbmNlLFxuXHRcdFx0XHRjYXJyeSxcblx0XHRcdH07XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHR0YXhMaWFiaWxpdHk6IHRvdGFsVGF4YWJsZUluY29tZSAqIHRheFJhdGUucmF0ZSxcblx0XHRcdHRheFJhdGU6IHRheFJhdGUucmF0ZSxcblx0XHRcdGFzc2Vzc2libGVJbmNvbWU6IHRvdGFsVGF4YWJsZUluY29tZSxcblx0XHRcdGNhcnJ5LFxuXHRcdH07XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHRheExpYWJpbGl0eTogMCxcblx0XHR0YXhSYXRlOiB0YXhSYXRlLnJhdGUsXG5cdFx0YXNzZXNzaWJsZUluY29tZTogMCxcblx0XHRjYXJyeTogY2FycnksXG5cdH07XG59O1xuXG4vKipcbiAqIFJldHVybnMgYWxsIHRheCBicmVha2Rvd24gb2YgaW5jb21lLlxuICogQHBhcmFtIHRheEJyYWNrZXRzIGZyb20gc2VsZWN0ZWQgdGF4IGRhdGFcbiAqIEBwYXJhbSB0b3RhbFRheGFibGVBbW91bnQgdG90YWwgY2FsY3VsYXRlZCB0YXhhYmxlIGFtb3VudFxuICogQHBhcmFtIHNzZiBpZiB0b3RhbERlZHVjdGlvbiBjb25zaXN0cyBvZiBTU0ZcbiAqL1xuZnVuY3Rpb24gZ2V0VG90YWxUYXhBbW91bnRXaXRoQnJhY2tldHMoXG5cdHRheEJyYWNrZXRzOiBUYXhSYXRlW10sXG5cdHRvdGFsVGF4YWJsZUFtb3VudDogbnVtYmVyLFxuXHRzc2Y6IGJvb2xlYW4sXG4pOiBUb3RhbFRheEZvclJhdGVXaXRoSW5jb21lUmVzdWx0W10ge1xuXHRjb25zdCB0YXhCcmVha0Rvd25BcnJheTogVG90YWxUYXhGb3JSYXRlV2l0aEluY29tZVJlc3VsdFtdID0gW107XG5cdHJldHVybiB0YXhCcmFja2V0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG5cdFx0Ly8gY2hlY2sgaWYgc3NmIGhhcyBiZWVuIGRlZHVjdGVkXG5cdFx0aWYgKHNzZiAmJiBpbmRleCA9PT0gMCkge1xuXHRcdFx0aXRlbS5yYXRlID0gMDtcblx0XHR9XG5cblx0XHRjb25zdCByZXN1bHQgPSBnZXRUb3RhbFRheEZvclJhdGVXaXRoSW5jb21lKFxuXHRcdFx0aXRlbSxcblx0XHRcdGluZGV4ID09PSAwID8gdG90YWxUYXhhYmxlQW1vdW50IDogdGF4QnJlYWtEb3duQXJyYXlbaW5kZXggLSAxXS5jYXJyeSxcblx0XHQpO1xuXHRcdHRheEJyZWFrRG93bkFycmF5LnB1c2gocmVzdWx0KTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgdHdvLWRlY2ltYWwgbnVtYmVyIGNvbnZlcnRlZCBmcm9tIHRoZSBvcmlnaW5hbCBpbnB1dCBmbG9hdCBudW1iZXJcbiAqXG4gKiBAcGFyYW0gYW1vdW50IGZsb2F0aW5nIG51bWJlclxuICovXG5jb25zdCBnZXRBbW91bnRSb3VuZGVkID0gKGFtb3VudDogbnVtYmVyKTogbnVtYmVyID0+IHtcblx0cmV0dXJuIE1hdGgucm91bmQoYW1vdW50ICogMTAwKSAvIDEwMDtcbn07XG5cbmV4cG9ydCB7XG5cdGdldFRvdGFsVGF4YWJsZUFtb3VudCxcblx0Z2V0VG90YWxUYXhBbW91bnRXaXRoQnJhY2tldHMsXG5cdGdldEFtb3VudFJvdW5kZWQsXG59O1xuIiwiLyohXG4gKlxuICogQGRhbmZlYm9va3MvbmVwYWxwaXRcbiAqIFBlcnNvbmFsIEluY29tZSBUYXggKFBJVCkgY2FsY3VsYXRvciB1dGlsaXR5IGZvciBOZXBhbFxuICogaHR0cHM6Ly93d3cuZGFuZmVib29rcy5jb20vZW4vY2FsY3VsYXRvcnMvbmVwYWwtcGVyc29uYWwtaW5jb21lLXRheFxuICpcbiAqXG4gKiBNSVQgTGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDIwIC0gMjAyMSBEYW5mZUJvb2tzwq5cbiAqXG4gKiBEYXRhXG4gKiBUYXggU2xhYiBEYXRhXG4gKi9cblxuaW50ZXJmYWNlIFRheEJyYWNrZXQge1xuXHRzdGFydDogbnVtYmVyO1xuXHRlbmQ6IG51bWJlcjtcblx0cmF0ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpc2NhbFllYXIge1xuXHRmeVN0YXJ0RGF0ZTogc3RyaW5nO1xuXHRmeVN0YXJ0RGF0ZU5lOiBzdHJpbmc7XG5cdGZ5RW5kRGF0ZTogc3RyaW5nO1xuXHRmeUVuZERhdGVOZTogc3RyaW5nO1xuXHRtYXhEZWR1Y3Rpb25SYXRlOiBudW1iZXI7XG5cdG1heERlZHVjdGlvbkxpbWl0OiBudW1iZXI7XG5cdG1heERlZHVjdGlvbkxpbWl0V2l0aFNTRj86IG51bWJlcjtcblx0bWF4SW5zdXJhbmNlRGVkdWN0aW9uTGltaXQ/OiBudW1iZXI7XG5cdGJyYWNrZXRzOiB7XG5cdFx0c2luZ2xlOiBUYXhCcmFja2V0W107XG5cdFx0bWFycmllZDogVGF4QnJhY2tldFtdO1xuXHR9O1xufVxuXG5pbnRlcmZhY2UgRllEYXRhIHtcblx0W2tleTogc3RyaW5nXTogRmlzY2FsWWVhcjtcbn1cblxuY29uc3QgZGF0YTogRllEYXRhID0ge1xuXHQnMjA3MC83MSc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTYsIDIwMTMnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzAnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTYsIDIwMTQnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNoYWQgMzIsIDIwNzEnLFxuXHRcdG1heERlZHVjdGlvblJhdGU6IDAuMzMsXG5cdFx0bWF4RGVkdWN0aW9uTGltaXQ6IDMwMDAwMCxcblx0XHRicmFja2V0czoge1xuXHRcdFx0c2luZ2xlOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdFx0bWFycmllZDogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDAuMCxcblx0XHRcdFx0XHRlbmQ6IDQ1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA1NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA3NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNzUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiAyMDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHR9LFxuXHQnMjA3MS83Mic6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTcsIDIwMTQnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzEnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTYsIDIwMTUnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNoYWQgMzEsIDIwNzInLFxuXHRcdG1heERlZHVjdGlvblJhdGU6IDAuMzMsXG5cdFx0bWF4RGVkdWN0aW9uTGltaXQ6IDMwMDAwMCxcblx0XHRicmFja2V0czoge1xuXHRcdFx0c2luZ2xlOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdFx0bWFycmllZDogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDAuMCxcblx0XHRcdFx0XHRlbmQ6IDQ1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA1NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA3NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNzUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiAyMDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHR9LFxuXHQnMjA3Mi83Myc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTcsIDIwMTUnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzInLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTUsIDIwMTYnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNoYWQgMzEsIDIwNzMnLFxuXHRcdG1heERlZHVjdGlvblJhdGU6IDAuMzMsXG5cdFx0bWF4RGVkdWN0aW9uTGltaXQ6IDMwMDAwMCxcblx0XHRicmFja2V0czoge1xuXHRcdFx0c2luZ2xlOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdFx0bWFycmllZDogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDAuMCxcblx0XHRcdFx0XHRlbmQ6IDQ1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA1NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA3NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNzUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiAyMDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHR9LFxuXHQnMjA3My83NCc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bHkgMTYsIDIwMTYnLFxuXHRcdGZ5U3RhcnREYXRlTmU6ICdTaHJhd2FuIDEsIDIwNzMnLFxuXHRcdGZ5RW5kRGF0ZTogJ0p1bHkgMTUsIDIwMTcnLFxuXHRcdGZ5RW5kRGF0ZU5lOiAnQXNoYWQgMzEsIDIwNzQnLFxuXHRcdG1heERlZHVjdGlvblJhdGU6IDAuMzMsXG5cdFx0bWF4RGVkdWN0aW9uTGltaXQ6IDMwMDAwMCxcblx0XHRicmFja2V0czoge1xuXHRcdFx0c2luZ2xlOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3MDAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdFx0bWFycmllZDogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDAuMCxcblx0XHRcdFx0XHRlbmQ6IDQ1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA1NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA3NTAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNzUwMDAwLjAsXG5cdFx0XHRcdFx0ZW5kOiAyMDAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4zLFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9LFxuXHR9LFxuXHQnMjA3NC83NSc6IHtcblx0XHRmeVN0YXJ0RGF0ZTogJ0p1bCAxNiwgMjAxNycsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3NCcsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAxOCcsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMiwgMjA3NScsXG5cdFx0bWF4RGVkdWN0aW9uUmF0ZTogMC4zMyxcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdDogMzAwMDAwLFxuXHRcdGJyYWNrZXRzOiB7XG5cdFx0XHRzaW5nbGU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0XHRtYXJyaWVkOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdH0sXG5cdCcyMDc1Lzc2Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAxOCcsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3NScsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAxOScsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMSwgMjA3NicsXG5cdFx0bWF4RGVkdWN0aW9uUmF0ZTogMC4zMyxcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdDogMzAwMDAwLFxuXHRcdGJyYWNrZXRzOiB7XG5cdFx0XHRzaW5nbGU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0XHRtYXJyaWVkOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdH0sXG5cdCcyMDc2Lzc3Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAxOScsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3NicsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNSwgMjAyMCcsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMSwgMjA3NycsXG5cdFx0bWF4RGVkdWN0aW9uUmF0ZTogMC4zMyxcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdDogMzAwMDAwLFxuXHRcdGJyYWNrZXRzOiB7XG5cdFx0XHRzaW5nbGU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0XHRtYXJyaWVkOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdH0sXG5cdCcyMDc3Lzc4Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNiwgMjAxMycsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3MCcsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAxNCcsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2hhZCAzMiwgMjA3MScsXG5cdFx0bWF4RGVkdWN0aW9uUmF0ZTogMC4zMyxcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdDogMzAwMDAwLFxuXHRcdGJyYWNrZXRzOiB7XG5cdFx0XHRzaW5nbGU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0XHRtYXJyaWVkOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdH0sXG5cdCcyMDc4Lzc5Jzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNiwgMjAyMScsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3OCcsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAyMicsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMiwgMjA3OScsXG5cdFx0bWF4RGVkdWN0aW9uUmF0ZTogMC4zMyxcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdDogMzAwMDAwLFxuXHRcdGJyYWNrZXRzOiB7XG5cdFx0XHRzaW5nbGU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0XHRtYXJyaWVkOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdH0sXG5cdCcyMDc5LzgwJzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAyMicsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA3OScsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNiwgMjAyMycsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMSwgMjA4MCcsXG5cdFx0bWF4RGVkdWN0aW9uUmF0ZTogMC4zMyxcblx0XHRtYXhEZWR1Y3Rpb25MaW1pdDogMzAwMDAwLFxuXHRcdGJyYWNrZXRzOiB7XG5cdFx0XHRzaW5nbGU6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiAwLjAsXG5cdFx0XHRcdFx0ZW5kOiA0MDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDQwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNTAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDUwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogNzAwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDcwMDAwMC4wLFxuXHRcdFx0XHRcdGVuZDogMjAwMDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0XHRtYXJyaWVkOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMC4wLFxuXHRcdFx0XHRcdGVuZDogNDUwMDAwLjAsXG5cdFx0XHRcdFx0cmF0ZTogMC4wMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA0NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDU1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA1NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDc1MDAwMC4wLFxuXHRcdFx0XHRcdHJhdGU6IDAuMixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHN0YXJ0OiA3NTAwMDAuMCxcblx0XHRcdFx0XHRlbmQ6IDIwMDAwMDAuMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRdLFxuXHRcdH0sXG5cdH0sXG5cdCcyMDgwLzgxJzoge1xuXHRcdGZ5U3RhcnREYXRlOiAnSnVseSAxNywgMjAyMycsXG5cdFx0ZnlTdGFydERhdGVOZTogJ1NocmF3YW4gMSwgMjA4MCcsXG5cdFx0ZnlFbmREYXRlOiAnSnVseSAxNSwgMjAyNCcsXG5cdFx0ZnlFbmREYXRlTmU6ICdBc2FkaCAzMSwgMjA4MScsXG5cdFx0bWF4RGVkdWN0aW9uUmF0ZTogMSAvIDMsXG5cdFx0bWF4RGVkdWN0aW9uTGltaXQ6IDNfMDBfMDAwLFxuXHRcdG1heERlZHVjdGlvbkxpbWl0V2l0aFNTRjogNV8wMF8wMDAsXG5cdFx0bWF4SW5zdXJhbmNlRGVkdWN0aW9uTGltaXQ6IDQwXzAwMCxcblx0XHRicmFja2V0czoge1xuXHRcdFx0c2luZ2xlOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMCxcblx0XHRcdFx0XHRlbmQ6IDVfMDBfMDAwLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNV8wMF8wMDAsXG5cdFx0XHRcdFx0ZW5kOiA3XzAwXzAwMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogN18wMF8wMDAsXG5cdFx0XHRcdFx0ZW5kOiAxMF8wMF8wMDAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDEwXzAwXzAwMCxcblx0XHRcdFx0XHRlbmQ6IDIwXzAwXzAwMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMjBfMDBfMDAwLFxuXHRcdFx0XHRcdGVuZDogNTBfMDBfMDAwLFxuXHRcdFx0XHRcdHJhdGU6IDAuMzYsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTBfMDBfMDAwLFxuXHRcdFx0XHRcdGVuZDogSW5maW5pdHksXG5cdFx0XHRcdFx0cmF0ZTogMC4zOSxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0XHRtYXJyaWVkOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMCxcblx0XHRcdFx0XHRlbmQ6IDZfMDBfMDAwLFxuXHRcdFx0XHRcdHJhdGU6IDAuMDEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNl8wMF8wMDAsXG5cdFx0XHRcdFx0ZW5kOiA4XzAwXzAwMCxcblx0XHRcdFx0XHRyYXRlOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogOF8wMF8wMDAsXG5cdFx0XHRcdFx0ZW5kOiAxMV8wMF8wMDAsXG5cdFx0XHRcdFx0cmF0ZTogMC4yLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6IDExXzAwXzAwMCxcblx0XHRcdFx0XHRlbmQ6IDIwXzAwXzAwMCxcblx0XHRcdFx0XHRyYXRlOiAwLjMsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogMjBfMDBfMDAwLFxuXHRcdFx0XHRcdGVuZDogNTBfMDBfMDAwLFxuXHRcdFx0XHRcdHJhdGU6IDAuMzYsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzdGFydDogNTBfMDBfMDAwLFxuXHRcdFx0XHRcdGVuZDogSW5maW5pdHksXG5cdFx0XHRcdFx0cmF0ZTogMC4zOSxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGE7XG4iLCIvKiFcbiAqXG4gKiBAZGFuZmVib29rcy9uZXBhbHBpdFxuICogUGVyc29uYWwgSW5jb21lIFRheCAoUElUKSBjYWxjdWxhdG9yIHV0aWxpdHkgZm9yIE5lcGFsXG4gKiBodHRwczovL3d3dy5kYW5mZWJvb2tzLmNvbS9lbi9jYWxjdWxhdG9ycy9uZXBhbC1wZXJzb25hbC1pbmNvbWUtdGF4XG4gKlxuICpcbiAqIE1JVCBMaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjAgLSAyMDIxIERhbmZlQm9va3PCrlxuICpcbiAqIEluZGV4LmpzXG4gKi9cblxuaW1wb3J0IHsgYnJlYWtkb3duIH0gZnJvbSAnLi9icmVha2Rvd24nO1xuaW1wb3J0IHtcblx0Z2V0VG90YWxUYXhhYmxlQW1vdW50LFxuXHRnZXRUb3RhbFRheEFtb3VudFdpdGhCcmFja2V0cyxcblx0Z2V0QW1vdW50Um91bmRlZCxcbn0gZnJvbSAnLi9jYWxjdWxhdG9yJztcblxuaW50ZXJmYWNlIFRheFBhcmFtcyB7XG5cdGluY29tZTogbnVtYmVyO1xuXHRlcGY6IG51bWJlcjtcblx0Y2l0OiBudW1iZXI7XG5cdHNzZjogbnVtYmVyO1xuXHRpbnN1cmFuY2U6IG51bWJlcjtcblx0eWVhcjogc3RyaW5nO1xuXHRzaW5nbGU6IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBUYXhSZXN1bHQge1xuXHRzdW1PZlNzZkVwZkFuZENpdDogbnVtYmVyO1xuXHRpbnN1cmFuY2U6IG51bWJlcjtcblx0dG90YWxJbmNvbWU6IG51bWJlcjtcblx0dG90YWxEZWR1Y3Rpb246IG51bWJlcjtcblx0bmV0QXNzZXNzYWJsZTogbnVtYmVyO1xuXHR0b3RhbFRheFdpdGhCcmFja2V0czoge1xuXHRcdGFzc2Vzc2libGVJbmNvbWU6IG51bWJlcjtcblx0XHRyYXRlOiBudW1iZXI7XG5cdFx0dGF4TGlhYmlsaXR5OiBudW1iZXI7XG5cdH1bXTtcblx0dG90YWxBc3Nlc3NpYmxlSW5jb21lOiBudW1iZXI7XG5cdHRvdGFsVGF4TGlhYmlsaXR5OiBudW1iZXI7XG5cdG5ldFRheExpYWJpbGl0eU1vbnRobHk6IG51bWJlcjtcbn1cblxuY29uc3QgdGF4ID0gKG9wdGlvbnM6IFRheFBhcmFtcyk6IFRheFJlc3VsdCA9PiB7XG5cdGNvbnN0IHsgaW5jb21lLCBlcGYsIGNpdCwgc3NmLCBpbnN1cmFuY2UsIHllYXIsIHNpbmdsZSB9ID0gb3B0aW9ucztcblxuXHQvLyBQYXJhbWV0ZXIgdmFsaWRhdGlvbiAtIENoZWNrIGZvciBuZWdhdGl2ZSB2YWx1ZXNcblx0aWYgKGluY29tZSA8IDAgfHwgZXBmIDwgMCB8fCBjaXQgPCAwIHx8IHNzZiA8IDAgfHwgaW5zdXJhbmNlIDwgMCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdCdUYXggcGFyYW1ldGVycyAoSW5jb21lLCBFUEYsIENJVCwgU1NGLCBJbnN1cmFuY2UpIGNhbm5vdCBiZSBuZWdhdGl2ZS4nLFxuXHRcdCk7XG5cdH1cblxuXHRjb25zdCBtZXRhID0gYnJlYWtkb3duKHllYXIpO1xuXHRjb25zb2xlLmxvZygnR2l2ZW4geWVhciBpcycsIHllYXIpO1xuXHRjb25zdCB0YXhTZXR0aW5ncyA9IHtcblx0XHRtYXhEZWR1Y3Rpb25SYXRlOiBtZXRhLm1heERlZHVjdGlvblJhdGUsXG5cdFx0bWF4RGVkdWN0aW9uTGltaXQ6IG1ldGEubWF4RGVkdWN0aW9uTGltaXQsXG5cdFx0bWF4RGVkdWN0aW9uTGltaXRXaXRoU1NGOiBtZXRhLm1heERlZHVjdGlvbkxpbWl0V2l0aFNTRixcblx0XHRtYXhJbnN1cmFuY2VEZWR1Y3Rpb25MaW1pdDogbWV0YS5tYXhJbnN1cmFuY2VEZWR1Y3Rpb25MaW1pdCxcblx0fTtcblxuXHRjb25zdCB7XG5cdFx0dGF4YWJsZUluY29tZSxcblx0XHRzdW1PZlNzZkVwZkFuZENpdCxcblx0XHRmaW5hbEluc3VyYW5jZSxcblx0fSA9IGdldFRvdGFsVGF4YWJsZUFtb3VudCh7XG5cdFx0dG90YWxJbmNvbWU6IGluY29tZSxcblx0XHRlcGYsXG5cdFx0Y2l0LFxuXHRcdHNzZixcblx0XHRpbnN1cmFuY2UsXG5cdFx0dGF4U2V0dGluZ3MsXG5cdH0pO1xuXHRjb25zdCBtYXJpdGFsU3RhdHVzID0gc2luZ2xlID8gJ3NpbmdsZScgOiAnbWFycmllZCc7XG5cdGNvbnN0IHRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzID0gZ2V0VG90YWxUYXhBbW91bnRXaXRoQnJhY2tldHMoXG5cdFx0bWV0YS5icmFja2V0c1ttYXJpdGFsU3RhdHVzXSxcblx0XHR0YXhhYmxlSW5jb21lLFxuXHRcdHNzZiA+IDAsXG5cdCk7XG5cblx0Y29uc3QgcmVzdWx0OiBUYXhSZXN1bHQgPSB7XG5cdFx0c3VtT2ZTc2ZFcGZBbmRDaXQ6IHN1bU9mU3NmRXBmQW5kQ2l0LFxuXHRcdGluc3VyYW5jZTogZmluYWxJbnN1cmFuY2UsXG5cdFx0dG90YWxJbmNvbWU6IGluY29tZSxcblx0XHR0b3RhbERlZHVjdGlvbjogaW5jb21lIC0gdGF4YWJsZUluY29tZSxcblx0XHRuZXRBc3Nlc3NhYmxlOiB0YXhhYmxlSW5jb21lLFxuXHRcdHRvdGFsVGF4V2l0aEJyYWNrZXRzOiB0b3RhbFRheEFtb3VudFdpdGhCcmFja2V0c1xuXHRcdFx0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5hc3Nlc3NpYmxlSW5jb21lID4gMClcblx0XHRcdC5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdFx0Y29uc3QgdGF4T2JqOiB7XG5cdFx0XHRcdFx0YXNzZXNzaWJsZUluY29tZTogbnVtYmVyO1xuXHRcdFx0XHRcdHJhdGU6IG51bWJlcjtcblx0XHRcdFx0XHR0YXhMaWFiaWxpdHk6IG51bWJlcjtcblx0XHRcdFx0fSA9IHtcblx0XHRcdFx0XHRhc3Nlc3NpYmxlSW5jb21lOiBpdGVtLmFzc2Vzc2libGVJbmNvbWUsXG5cdFx0XHRcdFx0cmF0ZTogaXRlbS50YXhSYXRlICogMTAwLFxuXHRcdFx0XHRcdHRheExpYWJpbGl0eTogaXRlbS50YXhMaWFiaWxpdHksXG5cdFx0XHRcdH07XG5cdFx0XHRcdHJldHVybiB0YXhPYmo7XG5cdFx0XHR9KSxcblx0XHR0b3RhbEFzc2Vzc2libGVJbmNvbWU6IHRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzLnJlZHVjZShcblx0XHRcdChpbml0aWFsVmFsdWUsIHZhbHVlKSA9PiBpbml0aWFsVmFsdWUgKyB2YWx1ZS5hc3Nlc3NpYmxlSW5jb21lLFxuXHRcdFx0MCxcblx0XHQpLFxuXG5cdFx0dG90YWxUYXhMaWFiaWxpdHk6IHRvdGFsVGF4QW1vdW50V2l0aEJyYWNrZXRzLnJlZHVjZShcblx0XHRcdChpbml0aWFsVmFsdWUsIHZhbHVlKSA9PiBpbml0aWFsVmFsdWUgKyB2YWx1ZS50YXhMaWFiaWxpdHksXG5cdFx0XHQwLFxuXHRcdCksXG5cblx0XHRuZXRUYXhMaWFiaWxpdHlNb250aGx5OiBnZXRBbW91bnRSb3VuZGVkKFxuXHRcdFx0dG90YWxUYXhBbW91bnRXaXRoQnJhY2tldHMucmVkdWNlKFxuXHRcdFx0XHQoaW5pdGlhbFZhbHVlLCB2YWx1ZSkgPT4gaW5pdGlhbFZhbHVlICsgdmFsdWUudGF4TGlhYmlsaXR5LFxuXHRcdFx0XHQwLFxuXHRcdFx0KSAvIDEyLFxuXHRcdCksXG5cdH07XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cbmNvbnN0IG1ldGEgPSAoKSA9PiB7XG5cdHJldHVybiAnbWV0YSB3b3JrIGluIHBvcm9ncmVzcyc7XG59O1xuXG5leHBvcnQgeyB0YXgsIG1ldGEgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==