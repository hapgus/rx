
// Preprocessing functions
const trimOnly = (value) => {
  return value.trim();
};

const trimAndLowercase = (value) => {
  return value.trim().toLowerCase();
};

// const trimAndNormalizeSpaces = (value) => {
//   return value.trim().replace(/\s+/g, ' ');
// };

const trimAndNormalizeSpaces = (value) => {
  if (typeof value !== 'string') {
    return ''; // Return an empty string if value is null, undefined, or not a string
  }
  return value.trim().replace(/\s+/g, ' ');
};

const validationRules = {
  title: [
    { rule: 'required', message: 'Title is missing.' },
    { rule: 'minLength', value: 3, message: 'Title cannot be less than 3 characters.' },
    { rule: 'maxLength', value: 100, message: 'Title cannot be more than 100 characters.' },
    { rule: 'regex', value: /^[a-zA-Z0-9\-_/\\ ]*$/, message: 'Title cannot contain invalid characters.' },
    { rule: 'hasLetter', message: 'Title must include at least 1 letter.' },
  ],
  subtitle: [
    { rule: 'required', message: 'Subtitle is missing.' },
    { rule: 'minLength', value: 3, message: 'Subtitle cannot be less than 3 characters.' },
    { rule: 'maxLength', value: 1000, message: 'Subtitle cannot be more than 1000 characters.' },
  ],
  category: [
    { rule: 'required', message: 'Category is missing.' },
  ],
  subcategory: [
    { rule: 'required', message: 'Subcategory is missing.' },
  ],
  stylecategory: [
    { rule: 'maxLength', value: 100, message: 'Style category cannot be more than 100 characters.' },
  ],
  specList1: [
    { rule: 'required', message: 'At least 1 list of specifications required.' },
    { rule: 'minLength', value: 3, message: 'Specification list one cannot be less than 3 characters.' },
    { rule: 'hasLetter', message: 'Specification list one must include at least 1 letter.' },
  ],
  specSheetLink: [
    { rule: 'isUrl', message: 'Specification sheet link has an invalid URL format. Secure (Https) required' },
  ],
  videos: [
    { rule: 'isUrl', message: 'Youtube video link has an invalid URL format. Secure (Https) required.' },
  ],
  image: [
    { rule: 'fileType', value: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'], message: 'Invalid product image file type. Only JPEG, PNG, WEBP, and GIF are allowed.' },
    { rule: 'fileSize', value: 2 * 1024 * 1024, message: 'Product image file size exceeds the maximum limit of 2MB.' }, // 2MB limit
    { rule: 'imageDimensions', value: { minWidth: 300, minHeight: 300 }, message: 'Product image dimensions should be at least 300x300 pixels.' },
  ],
  qrcode: [
    { rule: 'fileType', value: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'], message: 'Invalid qrcode image file type. Only JPEG, PNG, WEBP, and GIF are allowed.' },
    { rule: 'fileSize', value: 2 * 1024 * 1024, message: 'Qrcode image file size exceeds the maximum limit of 2MB.' }, // 2MB limit
    { rule: 'imageDimensions', value: { minWidth: 300, minHeight: 300 }, message: 'Qrcode image dimensions should be at least 300x300 pixels.' },
  ],
  // RESOURCE SECTION
  resourceTitle: [
    { rule: 'required', message: 'Resource link text is missing.' },
    { rule: 'minLength', value: 3, message: 'Resource link text cannot be less than 3 characters.' },
    { rule: 'maxLength', value: 100, message: 'Resource link text cannot be more than 100 characters.' },
  ],
  resourceUrl: [
    { rule: 'isUrl', message: 'Resource URL is invalid.' },
  ],
  resourceQrCodeImage: [
    { rule: 'required', message: 'Resource qrcode image is missing.' },
    { rule: 'fileType', value: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'], message: 'Invalid QR code image file type.' },
    { rule: 'fileSize', value: 2 * 1024 * 1024, message: 'QR code image file size exceeds the maximum limit of 2MB.' },
    { rule: 'imageDimensions', value: { minWidth: 300, minHeight: 300 }, message: 'QR code image dimensions should be at least 300x300 pixels.' },
  ],

  // SIGNUP FORM
  firstName: [
    { rule: 'required', message: 'First name required.' },
    { rule: 'minLength', value: 2, message: 'First name must be at least 2 characters.' },
    { rule: 'maxLength', value: 50, message: 'First name cannot be more than 50 characters.' },
  ],
  lastName: [
    { rule: 'required', message: 'Last name required.' },
    { rule: 'minLength', value: 2, message: 'Last name must be at least 2 characters.' },
    { rule: 'maxLength', value: 50, message: 'Last name cannot be more than 50 characters.' },
  ],
  signInPassword: [
    { rule: 'required', message: 'Password required.' },
  ],
  password: [
    { rule: 'required', message: 'Password required.' },
    { rule: 'minLength', value: 8, message: 'Password must be at least 8 characters long' },
  ],
  confirmPassword: [
    { rule: 'required', message: 'Confirm password required.' },
    { rule: 'match', field: 'password', message: 'Passwords do not match.' }, // NEW: Match rule
  ],
  email: [
    { rule: 'required', message: 'Email required.' },
    { rule: 'regex', value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email format.' }, // NEW
    // { rule: 'minLength', value: 8, message: 'Password must be at least 8 characters long' },
  ],
  store: [
    { rule: 'required', message: 'Store required.' },
    { rule: 'minLength', value: 2, message: 'Store name must be at least 2 characters long' },
    { rule: 'maxLength', value: 50, message: 'Store name cannot be more than 50 characters.' },
  ],
  address: [
    { rule: 'required', message: 'Store address required.' },
    { rule: 'minLength', value: 2, message: 'Store address must be at least 2 characters long' },
    { rule: 'maxLength', value: 100, message: 'Store address cannot be more than 100 characters.' },
  ],


    // SAVED LIST FORM
    listName: [
      { rule: 'required', message: 'List name required.' },
      { rule: 'minLength', value: 2, message: 'List name must be at least 2 characters.' },
      { rule: 'maxLength', value: 50, message: 'List name cannot be more than 50 characters.' },
    ],
    listNotes: [
      { rule: 'maxLength', value: 100, message: 'List notes cannot exceed 50 characters.' },
      
    ],
}
const validateField = (value, rules, formState) => {
  const errors = [];

  // Handle file input
  if (value instanceof File) {
    rules.forEach(rule => {
      if (rule.rule === 'fileType' && !rule.value.includes(value.type)) {
        errors.push(rule.message);
      }
      if (rule.rule === 'fileSize' && value.size > rule.value) {
        errors.push(rule.message);
      }
      if (rule.rule === 'imageDimensions') {
        const img = new Image();
        img.src = URL.createObjectURL(value);
        img.onload = () => {
          if (img.width < rule.value.minWidth || img.height < rule.value.minHeight) {
            errors.push(rule.message);
          }
        };
      }
    });
  } else {
    // Only apply validations if the field has a value or is required
    if (value || rules.some(rule => rule.rule === 'required')) {
      rules.forEach(rule => {
        if (rule.rule === 'required' && !value) {
          errors.push(rule.message);
        }
        if (rule.rule === 'minLength' && value.length < rule.value) {
          errors.push(rule.message);
        }
        if (rule.rule === 'maxLength' && value.length > rule.value) {
          errors.push(rule.message);
        }
        if (rule.rule === 'regex' && !rule.value.test(value)) {
          errors.push(rule.message);
        }
        if (rule.rule === 'hasLetter' && !/[a-zA-Z]/.test(value)) {
          errors.push(rule.message);
        }
        if (rule.rule === 'isUrl') {
          try {
            new URL(value);
          } catch (_) {
            errors.push(rule.message);
          }

        }
        if (rule.rule === 'match' && value !== formState.inputs[rule.field].value) {
          errors.push(rule.message); // NEW: Match validation
        }

      });
    }
  }

  return errors;
};




export const validateProductForm = (formState, selectedImage, selectedQrcodeImage) => {
  const errorMessage = [];

  // Apply preprocessing to title and subtitle
  const processedTitle = trimAndNormalizeSpaces(formState.inputs.title.value);
  const processedSubtitle = trimAndNormalizeSpaces(formState.inputs.subtitle.value);
  const processedCategory = trimAndNormalizeSpaces(formState.inputs.category.value);
  const processedSubcategory = trimAndNormalizeSpaces(formState.inputs.subcategory.value);
  const processedStylecategory = trimAndNormalizeSpaces(formState.inputs.stylecategory.value);
  const processedSpecList1 = trimAndNormalizeSpaces(formState.inputs.specList1.value);
  const processedSpecSheetLink = trimAndNormalizeSpaces(formState.inputs.specSheetLink.value);
  const processedVideos = trimAndNormalizeSpaces(formState.inputs.videos.value);
  // const uploadedProductImage = formState.inputs.image.value;
  // const uploadedQrcodeImage = formState.inputs.qrcode.value;
  const uploadedProductImage = selectedImage;
  const uploadedQrcodeImage = selectedQrcodeImage;

  // Validate with preprocessing applied
  errorMessage.push(...validateField(processedTitle, validationRules.title));
  errorMessage.push(...validateField(processedSubtitle, validationRules.subtitle));
  errorMessage.push(...validateField(processedCategory, validationRules.category));
  errorMessage.push(...validateField(processedSubcategory, validationRules.subcategory));
  errorMessage.push(...validateField(processedStylecategory, validationRules.stylecategory));
  errorMessage.push(...validateField(processedSpecList1, validationRules.specList1));
  errorMessage.push(...validateField(processedSpecSheetLink, validationRules.specSheetLink));
  errorMessage.push(...validateField(processedVideos, validationRules.videos));
  errorMessage.push(...validateField(uploadedProductImage, validationRules.image));
  errorMessage.push(...validateField(uploadedQrcodeImage, validationRules.qrcode));
  // Add other validations here, with appropriate preprocessing
  // errorMessage.push(...validateField(trimAndLowercase(formState.inputs.category.value), validationRules.category));

  return errorMessage;
};


export const validateDynamicSections = (sections) => {
  const errors = [];

  sections.forEach((section, index) => {
    const processedResourceTitle = trimAndNormalizeSpaces(section.resourceTitle);
    const processedResourceUrl = trimAndNormalizeSpaces(section.resourceUrl);
    const uploadedResourceQrCodeImage = section.resourceQrCodeImage[0]?.file;


    validateField(processedResourceTitle, validationRules.resourceTitle).forEach(error => {
      errors.push({ section: index, field: 'resourceTitle', message: error });
    });

    validateField(processedResourceUrl, validationRules.resourceUrl).forEach(error => {
      errors.push({ section: index, field: 'resourceUrl', message: error });
    });

    validateField(uploadedResourceQrCodeImage, validationRules.resourceQrCodeImage).forEach(error => {
      errors.push({ section: index, field: 'resourceQrCodeImage', message: error });
    });
  });
  return errors;
};

export const validateSignupForms = (formState) => {
  const errorMessage = [];
  

  const processedFirstName = trimAndNormalizeSpaces(formState.inputs.firstName.value);
  const processedLastName = trimAndNormalizeSpaces(formState.inputs.lastName.value);
  const processedEmail = trimAndNormalizeSpaces(formState.inputs.email.value);
  const processedPassword = trimAndNormalizeSpaces(formState.inputs.password.value);
  const processedConfirmPassword = trimAndNormalizeSpaces(formState.inputs.confirmPassword.value); // NEW
  const processedStore = trimAndNormalizeSpaces(formState.inputs.store.value);

  
  errorMessage.push(...validateField(processedFirstName, validationRules.firstName));
  errorMessage.push(...validateField(processedLastName, validationRules.lastName));
  errorMessage.push(...validateField(processedEmail, validationRules.email));
  errorMessage.push(...validateField(processedPassword, validationRules.password));
  errorMessage.push(...validateField(processedConfirmPassword, validationRules.confirmPassword, formState)); // UPDATED
  errorMessage.push(...validateField(processedStore, validationRules.store));

  return errorMessage;
}

export const validateSigninForms = (formState) => {
  const errorMessage = [];
  const processedEmail = trimAndNormalizeSpaces(formState.inputs.email.value);
  const processedPassword = trimAndNormalizeSpaces(formState.inputs.password.value);
  errorMessage.push(...validateField(processedEmail, validationRules.email));
  errorMessage.push(...validateField(processedPassword, validationRules.signInPassword));

  return errorMessage;

}

export const validateAdminForm = (formState) => {
  const errorMessage = [];
  
  const processedFirstName = trimAndNormalizeSpaces(formState.inputs.firstName.value);
  const processedLastName = trimAndNormalizeSpaces(formState.inputs.firstName.value);
  const processedEmail = trimAndNormalizeSpaces(formState.inputs.email.value);
  const processedPassword = trimAndNormalizeSpaces(formState.inputs.password.value);
  const processedConfirmPassword = trimAndNormalizeSpaces(formState.inputs.confirmPassword.value); // NEW


  errorMessage.push(...validateField(processedFirstName, validationRules.firstName));
  errorMessage.push(...validateField(processedLastName, validationRules.lastName));
  errorMessage.push(...validateField(processedEmail, validationRules.email));
  errorMessage.push(...validateField(processedPassword, validationRules.password));
  errorMessage.push(...validateField(processedConfirmPassword, validationRules.confirmPassword, formState)); // UPDATED
 

  return errorMessage;
}


export const validateUserProfileForm = (formState) => {
  const errorMessage = [];
 
  const processedFirstName = trimAndNormalizeSpaces(formState.inputs.firstName.value);
  const processedLastName = trimAndNormalizeSpaces(formState.inputs.lastName.value);
  const processedStore = trimAndNormalizeSpaces(formState.inputs.store.value);
  const processedStoreAddress = trimAndNormalizeSpaces(formState.inputs.address.value);
  
   const processedValues = {
    firstName:processedFirstName, 
    lastName:processedLastName, 
    store:processedStore, 
    address:processedStoreAddress
   };
  console.log('pro store',processedStore)

  errorMessage.push(...validateField(processedFirstName, validationRules.firstName));
  errorMessage.push(...validateField(processedLastName, validationRules.lastName));
  errorMessage.push(...validateField(processedStore, validationRules.store));
  errorMessage.push(...validateField(processedStoreAddress, validationRules.address));
  

  return {errorMessage, processedValues};
}

export const validateSaveListForm = (formState) => {
  const errorMessage = [];
  const processedListName = trimAndNormalizeSpaces(formState.inputs.listName.value);
  const processedListNotes = trimAndNormalizeSpaces(formState.inputs.listNotes.value);
 
  errorMessage.push(...validateField(processedListName, validationRules.listName));
  errorMessage.push(...validateField(processedListNotes, validationRules.listNotes));

  return errorMessage;
}

export const validatePasswordResetEmailForms = (formState) => {
  const errorMessage = [];
  const processedEmail = trimAndNormalizeSpaces(formState.inputs.email.value);
 
  errorMessage.push(...validateField(processedEmail, validationRules.email));

  return errorMessage;

}