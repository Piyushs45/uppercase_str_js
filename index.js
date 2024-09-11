// index.js

/**
 * Converts the given string to uppercase.
 * @param {string} str - The string to convert.
 * @returns {string} - The uppercase string.
 */
function toUpperCase(str) {
    if (typeof str !== 'string') {
      throw new TypeError('Expected a string');
    }
    return str.toUpperCase();
  }
  
  module.exports = toUpperCase;
  