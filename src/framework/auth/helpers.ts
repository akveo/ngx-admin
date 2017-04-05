function isSpecificValue(val) {
  return (
    val instanceof Date
    || val instanceof RegExp
  ) ? true : false;
}

function cloneSpecificValue(val): any {
  if (val instanceof Date) {
    return new Date(val.getTime());
  } else if (val instanceof RegExp) {
    return new RegExp(val);
  } else {
    throw new Error('cloneSpecificValue: Unexpected situation');
  }
}

/**
 * Recursive cloning array.
 */
function deepCloneArray(arr): any {
  var clone = [];
  arr.forEach(function (item, index) {
    if (typeof item === 'object' && item !== null) {
      if (Array.isArray(item)) {
        clone[index] = deepCloneArray(item);
      } else if (isSpecificValue(item)) {
        clone[index] = cloneSpecificValue(item);
      } else {
        clone[index] = deepExtend({}, item);
      }
    } else {
      clone[index] = item;
    }
  });
  return clone;
}

/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
export const deepExtend = function (...objects): any {
  if (arguments.length < 1 || typeof arguments[0] !== 'object') {
    return false;
  }

  if (arguments.length < 2) {
    return arguments[0];
  }

  var target = arguments[0];

  // convert arguments to array and cut off target object
  var args = Array.prototype.slice.call(arguments, 1);

  var val, src, clone;

  args.forEach(function (obj) {
    // skip argument if it is array or isn't object
    if (typeof obj !== 'object' || Array.isArray(obj)) {
      return;
    }

    Object.keys(obj).forEach(function (key) {
      src = target[key]; // source value
      val = obj[key]; // new value

      // recursion prevention
      if (val === target) {
        return;

        /**
         * if new value isn't object then just overwrite by new value
         * instead of extending.
         */
      } else if (typeof val !== 'object' || val === null) {
        target[key] = val;
        return;

        // just clone arrays (and recursive clone objects inside)
      } else if (Array.isArray(val)) {
        target[key] = deepCloneArray(val);
        return;

        // custom cloning and overwrite for specific objects
      } else if (isSpecificValue(val)) {
        target[key] = cloneSpecificValue(val);
        return;

        // overwrite by new value if source isn't object or array
      } else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
        target[key] = deepExtend({}, val);
        return;

        // source value and new value is objects both, extending...
      } else {
        target[key] = deepExtend(src, val);
        return;
      }
    });
  });

  return target;
};

// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
export function getDeepFromObject(object = {}, name: string, defaultValue?: any) {
  let keys = name.split('.');
  // clone the object
  let level = deepExtend({}, object || {});
  keys.forEach((k) => {
    if (level && typeof level[k] !== 'undefined') {
      level = level[k];
    } else {
      level = undefined;
    }
  });

  return typeof level === 'undefined' ? defaultValue : level;
}
