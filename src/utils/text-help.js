export const TruncateText = (str) => {
  const text = str.length > 500 && '...see details';
  return text;
}
// export const CapitalizeFirstLetter = (str) => {
//   const text = str.replace(/\b\w/g, char => char.toUpperCase());
//   return text;
// }

// BELOW IS BETTER
export const capitalizeFirstLetterEachWord = (str) => {
  return str.replace(/\b\w+/g, word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
};