import { CATEGORY_VERBIAGE } from "../data/VERBIAGE_DATA";


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


// export const Capt
// export function capitalizeFirstLetter(text) {
//   text = text.toLowerCase();
//   return text.charAt(0).toUpperCase() + text.slice(1);
// }