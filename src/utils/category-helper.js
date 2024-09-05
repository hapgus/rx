
import { CATEGORY_VERBIAGE } from "../data/CATEGORY_VERBIAGE";


// export const FilterProductsByCategoryId = (products, categoryId) => {
//   if (products) {
//     return products.filter(product => product.category === categoryId);
//   } else {
//     return [];
//   }
// }

export const FilterProductsByCategoryId = (products, categoryId) => {
  if (Array.isArray(products)) {
    return products.filter(product => product.category === categoryId);
  } else {
    console.error('FilterProductsByCategoryId: products is not an array', products);
    return [];
  }
}

export const FilterProductById = (products, productId) => {
  return products.filter(product => product.title === productId);
};

export const ListProductsByCategorySubcategory = (products) => {
  return products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = {};
    }
    if (!acc[product.category][product.subcategory]) {
      acc[product.category][product.subcategory] = [];
    }
    acc[product.category][product.subcategory].push(product);
    return acc;
  }, {});
};

export const GetCategoryVerbiage = (category) => {
  return CATEGORY_VERBIAGE[category] || {};
}

export const NormalizeCategoryId = (categoryId) => {
  const adjustments = {
    'air-care': 'air care'
  };
  return adjustments[categoryId] || categoryId;
};

export const CountProductsInCategory = (products) => {
  const count = products.length;
  return count;
}

// export const TruncateText = (str) => {
//   const text = str.length > 500 && '...see details';
//   return text;
// }
// export const CapitalizeFirstLetter = (str) => {
//   const text = str.replace(/\b\w/g, char => char.toUpperCase());
//   return text;
// }




export const consolidateSpecLists = (product) => {

  return product.map((s) => ({
      specList1: s.specList1 !== '' ? s.specList1 : [],
      specList2: s.specList2 !== '' ? s.specList2 : [],
      specList3: s.specList3 !== '' ? s.specList3 : [],
      specList4: s.specList4 !== '' ? s.specList4 : [],
    }));
};


export const consolidateSpecListsToArray = (productArray) => {
  let consolidatedList = [];

  productArray.forEach(product => {
    const specLists = ['specList1', 'specList2', 'specList3', 'specList4'];

    specLists.forEach(specList => {
      if (Array.isArray(product[specList]) && product[specList].length > 0) {
        consolidatedList = consolidatedList.concat(product[specList]);
      }
    });
  });

  return consolidatedList;
};

export const extractProductNamesFromKeywords = (keywords) => {
  const productNames = [];
  const regex = /\(([^)]+)\)/;  // Regular expression to match content within brackets

  keywords.forEach(keyword => {
    if (keyword.toLowerCase().includes('optional')) {
      const match = keyword.match(regex);
      if (match && match[1]) {
        const names = match[1].split(',').map(name => name.trim());
        productNames.push(...names);
      }
    }
  });

  return productNames;
};

export const findMatchingProducts = (productNames, productList) => {

  if (!Array.isArray(productList)) {
    console.error('productList is not an array or is undefined');
    return [];
  }
  const nameSet = new Set(productNames);
  return productList.filter(product => nameSet.has(product.title));
};




export const GroupDataByCategory = (data) => {
  return data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
};

//SORT MSRP ONLY
export const sortProductsByMsrp = (products) => {
  // Check if the input is an object
  if (typeof products === 'object' && products !== null) {
    // Iterate over each category key in the object
    Object.keys(products).forEach(category => {
      // Access and sort the array of products under each category
      if (Array.isArray(products[category])) {
        products[category].sort((a, b) => {
          // Convert MSRP to a float, defaulting to 0 for non-numeric values
          const msrpA = a.msrp !== null && a.msrp !== '' && !isNaN(a.msrp) ? parseFloat(a.msrp) : 0;
          const msrpB = b.msrp !== null && b.msrp !== '' && !isNaN(b.msrp) ? parseFloat(b.msrp) : 0;

          // Order from highest to lowest MSRP
          return msrpB - msrpA;
        });
      }
    });
    return products;
  } else {
    // If products is not an object, return it as is
    console.log('not an object or invalid format');
    return products;
  }
};

//SORT PRODUCT TITLE ONLY
export const sortProductsByTitle = (products) => {
  // Ensure that products is an array
  if (!Array.isArray(products)) {
    console.error("Input is not an array");
    return products;
  }

  return products.sort((a, b) => {
    // Extract titles and remove non-alphabet characters
    const titleA = a.title ? a.title.replace(/[^a-zA-Z]/g, '').toLowerCase() : ''; 
    const titleB = b.title ? b.title.replace(/[^a-zA-Z]/g, '').toLowerCase() : '';

    // Compare titles alphabetically
    return titleA.localeCompare(titleB);
  });
};


//SORT PRODUCT TITLE AND MSRP
export const sortProductsByMsrpAndTitle = (products) => {
  // Check if the input is an object
  if (typeof products === 'object' && products !== null) {
    // Iterate over each category key in the object
    Object.keys(products).forEach((category) => {
      // Access and sort the array of products under each category
      if (Array.isArray(products[category])) {
        products[category].sort((a, b) => {
          // Convert MSRP to a float, defaulting to null for non-numeric values
          const msrpA = a.msrp !== null && a.msrp !== '' && !isNaN(a.msrp) ? parseFloat(a.msrp) : null;
          const msrpB = b.msrp !== null && b.msrp !== '' && !isNaN(b.msrp) ? parseFloat(b.msrp) : null;

          // If both products have a valid MSRP, sort by MSRP descending
          if (msrpA !== null && msrpB !== null) {
            return msrpB - msrpA;
          }

          // If only one has a valid MSRP, place that one first
          if (msrpA !== null) return -1;
          if (msrpB !== null) return 1;

          // If neither has a valid MSRP, sort by title alphabetically
          const titleA = a.title ? a.title.replace(/[^a-zA-Z]/g, '').toLowerCase() : '';
          const titleB = b.title ? b.title.replace(/[^a-zA-Z]/g, '').toLowerCase() : '';
          return titleA.localeCompare(titleB);
        });
      }
    });
    return products;
  } else {
    // If products is not an object, return it as is
    console.log('not an object or invalid format');
    return products;
  }
};

// export const Capt
// export function capitalizeFirstLetter(text) {
//   text = text.toLowerCase();
//   return text.charAt(0).toUpperCase() + text.slice(1);
// }

// export const sortProductsByMsrp = (products) => {
//   console.log(products)
//   return products.sort((a, b) => {
//       const msrpA = a.msrp ? parseFloat(a.msrp) : Infinity;
//       const msrpB = b.msrp ? parseFloat(b.msrp) : Infinity;
//       return msrpA - msrpB;
//   });
// };

// export const sortProductsByMsrp = (products) => {
//   console.log('Type of products:', typeof products);
//   console.log('Value of products:', products);
//   console.log('Is products an array?', Array.isArray(products));
//   // Ensure products is an array
//   if (!Array.isArray(products)) {
//     console.log('not array')
//     return products; // Return the original input if products is not an array
//   }

//   // Sort products by MSRP, handling null, undefined, and non-numeric values
//   return products.sort((a, b) => {
//     // Convert MSRP to a float, defaulting to 0 for non-numeric values
//     const msrpA = a.msrp !== null && a.msrp !== '' && !isNaN(a.msrp) ? parseFloat(a.msrp) : 0;
//     const msrpB = b.msrp !== null && b.msrp !== '' && !isNaN(b.msrp) ? parseFloat(b.msrp) : 0;

//     // Order from highest to lowest MSRP
//     return msrpB - msrpA;
//   });
// };