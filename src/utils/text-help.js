export const TruncateText = (str) => {
    const text = str.length > 500 && '...see details';
    return text;
  }
  export const CapitalizeFirstLetter = (str) => {
    const text = str.replace(/\b\w/g, char => char.toUpperCase());
    return text;
  }
  