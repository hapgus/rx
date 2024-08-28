

export const splitToArrayOnLineBreak = (item) => {
  if (!item) return [];
  return item.split(/\r?\n/).map(str => str.trim()).filter(Boolean);
};

export const appendFormDataWithLineBreak = (formData, fieldName, value) => {
  if (!value) return;
  const items = splitToArrayOnLineBreak(value);
  items.forEach(item => formData.append(fieldName, item));
};






export const validateProductForm = (formState) => {
  const errorMessage = [];

  if (!formState.inputs.title.value) errorMessage.push('Title missing or invalid.');
  if (!formState.inputs.subtitle.value) errorMessage.push('Subtitle missing or invalid.');
  if (!formState.inputs.category.value) errorMessage.push('Category missing or invalid.');
  if (!formState.inputs.subcategory.value) errorMessage.push('Subcategory missing or invalid.');
  

  if (!formState.inputs.specList1.value.length === 0 ) errorMessage.push('Spec list missing or invalid.');
  if (!formState.inputs.image.value) errorMessage.push('Image missing or invalid.');
  if (!formState.inputs.qrcode.value) errorMessage.push('Qrcode missing or invalid.');

  return errorMessage;
}

// export const validateProductForm = (formState, formField, category, selectedColours, subcategory, store, availability) => {
//   const validations = [
//       { condition: !formState.inputs.title.value, message: 'Title missing or invalid.' },
//       { condition: !formState.inputs.msrp.value, message: 'Price missing or invalid.' },
//       { condition: formField.specList1EN.length === 0 || formField.specList1FR.length === 0, message: 'Specs missing or invalid.' },
//       { condition: !category, message: 'Category missing or invalid.' },
//       { condition: selectedColours.length === 0, message: 'Colour selection missing' },
//       { condition: !subcategory, message: 'Subcategory selection missing' },
//       { condition: !store, message: 'Retailer selection missing.' },
//       { condition: !availability, message: 'Availability selection missing.' },
//       { condition: !formState.inputs.subtitleEN.value || !formState.inputs.subtitleFR.value, message: 'Subtitle(s) missing or invalid.' },
//       { condition: !formState.inputs.upcCodeEN.value || !formState.inputs.upcCodeFR.value, message: 'UPC code(s) missing or invalid.' },
//       { condition: !formState.inputs.image.value, message: 'Image missing or invalid.' }
//   ];

//   return validations
//       .filter(validation => validation.condition)
//       .map(validation => validation.message);
// }