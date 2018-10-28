/**
 * Capitalize string
 * i.e.
 * sTrIng => String
 * @param  {string} str
 * @return {string}
 */
export default str => (
  `${str.charAt(0).toUpperCase()}${str.substring(1)}`
);
