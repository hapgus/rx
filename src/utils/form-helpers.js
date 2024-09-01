

export const splitToArrayOnLineBreak = (item) => {
  if (!item) return [];
  return item.split(/\r?\n/).map(str => str.trim()).filter(Boolean);
};

export const appendFormDataWithLineBreak = (formData, fieldName, value) => {
  if (!value) return;
  const items = splitToArrayOnLineBreak(value);
  items.forEach(item => formData.append(fieldName, item));
};





export const hasProductChanged = (formState, loadedProduct, selectedFile, selectedQrcode, selectedColors, selectedLogos) => {
  const arrayValuesChanged = (newValues, originalValues) => {
    return newValues.join('\n') !== originalValues.join('\n');
  };

  console.log('product', loadedProduct)
  console.log('formstate', formState)
  
  if(loadedProduct.title === formState.inputs.title.value){
    console.log('title did not change')
  } else {
    console.log('title changed')
  }
  const currentMsrp = String(formState.inputs.msrp.value).trim();
  const originalMsrp = String(loadedProduct.msrp).trim();

  const hasChanges = (
    formState.inputs.title.value !== loadedProduct.title ||
    currentMsrp !== originalMsrp ||
    formState.inputs.subtitle.value !== loadedProduct.subtitle ||
    formState.inputs.specSheetLink.value !== loadedProduct.specSheetLink ||
    formState.inputs.category.value !== loadedProduct.category ||
    formState.inputs.subcategory.value !== loadedProduct.subcategory ||
    formState.inputs.stylecategory.value !== loadedProduct.stylecategory ||
    formState.inputs.store.value !== loadedProduct.store ||
    formState.inputs.availability.value !== loadedProduct.availability ||
    arrayValuesChanged(formState.inputs.upc.value.split('\n'), loadedProduct.upc) ||
    arrayValuesChanged(formState.inputs.videos.value.split('\n'), loadedProduct.videos) ||
    arrayValuesChanged(formState.inputs.specList1.value.split('\n'), loadedProduct.specList1) ||
    arrayValuesChanged(formState.inputs.specList2.value.split('\n'), loadedProduct.specList2) ||
    arrayValuesChanged(formState.inputs.specList3.value.split('\n'), loadedProduct.specList3) ||
    arrayValuesChanged(formState.inputs.specList4.value.split('\n'), loadedProduct.specList4) ||
    arrayValuesChanged(selectedColors, loadedProduct.colors) ||
    arrayValuesChanged(selectedLogos, loadedProduct.logos) ||
    selectedFile !== null ||
    selectedQrcode !== null
  );

  return hasChanges;
};
