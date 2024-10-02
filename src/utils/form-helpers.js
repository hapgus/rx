

// export const splitToArrayOnLineBreak = (item) => {
//   if (!item) return [];
//   return item.split(/\r?\n/).map(str => str.trim()).filter(Boolean);
// };

// export const appendFormDataWithLineBreak = (formData, fieldName, value) => {
//   if (!value) return;
//   const items = splitToArrayOnLineBreak(value);
//   items.forEach(item => formData.append(fieldName, item));
// };


// NEW
export const trimAndNormalizeSpaces = (value) => {
  if (typeof value !== 'string') {
    return ''; // Return an empty string if value is null, undefined, or not a string
  }
  return value.trim().replace(/\s+/g, ' ');
};

export const splitToArrayOnLineBreak = (item) => {
  if (!item) return [];
  return item.split(/\r?\n/).map(str => trimAndNormalizeSpaces(str)).filter(Boolean);
};

export const appendFormDataWithLineBreak = (formData, fieldName, value) => {
  if (!value) return;
  const items = splitToArrayOnLineBreak(value);
  items.forEach(item => formData.append(fieldName, item));
};



