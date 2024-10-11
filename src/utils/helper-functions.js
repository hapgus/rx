import { motion } from "framer-motion";
import { LinkComponent} from "../components/Links/LinkComponent";
import styles from "./helper-function-styles.module.css"

import { CATEGORY_VERBIAGE } from "../data/CATEGORY_VERBIAGE";

// Opacity & Bounce (Spring) Effect
const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
      opacity: 1,
      y: 0,
      transition: {
          type: "spring",  // Use a spring-like motion
          stiffness: 150,   // How fast the spring will react
          damping: 14,      // How bouncy the motion is
          // duration: 0.5     // Total duration
          // ease: [0.68, -0.55, 0.27, 1.55]  // Bouncy ease for playful motion
      }
  },
  exit: {
      opacity: 0,
      y: -20,
      transition:
      {
          // duration: 0.2, 
          ease: "easeInOut"
      }
  }
};


// -------------------------------------------
//--ANALYTICS
// -------------------------------------------

export const reduceEventsByDate = (events) => {
  return events.reduce((acc, item) => {
    if (!acc[item.eventName]) {
      acc[item.eventName] = [];
    }
    const existingDateEntry = acc[item.eventName].find(event => event.date === item.date);
    if (existingDateEntry) {
      existingDateEntry.eventCount += Number(item.eventCount);
    } else {
      acc[item.eventName].push({
        date: item.date,
        eventCount: Number(item.eventCount),
      });
    }
    return acc;
  }, {});
};

export const formatChartLabel = (label) => {
  if (!label || typeof label !== 'string') {
    return 'Unknown'; // Default to 'Unknown' or another fallback
  }
  return label
    .replace(/_/g, ' ')                                  // Replace underscores with spaces
    .replace(/\b\w/g, char => char.toUpperCase());        // Capitalize first letter of each word
};


// -------------------------------------------
//--STRING MANIPULATION
// -------------------------------------------
// This function will iterate over an array of objects, find the 'text' property in each, and strip the target words
export const textStripper = (data, removeWords) => {
  return data.map(item => ({
    ...item,  // Spread the current item to keep its other properties
    text: item.text.replace(removeWords, '').trim()  // Replace and trim the target words from the 'text' field
  }));
};

export const removeObjectsFromArray = (data, removeWordsArray) => {
  return data.filter(item =>
    !removeWordsArray.some(removeWord => item.text.includes(removeWord))
  );
};


export const capitalizeFirstLetterEachWord = (str) => {
  return str?.replace(/\b\w+/g, word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
};

export const transformToTitleCase = (str) => {
  return str?.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

export const TruncateText = (str) => {
  const text = str.length > 500 && '...see details';
  return text;
}

// -------------------------------------------
//--TIME CONVERSION
// -------------------------------------------
export const convertSecondsToMinutes = (seconds) => (seconds / 60).toFixed(2);

export const getDynamicYAxisRange = (data) => {
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  return { minValue, maxValue: maxValue * 1.1 }; // Adding some buffer on the upper side
};



// -------------------------------------------
//--PAGE PATH
// -------------------------------------------
export const categorizePagePath = (pagePath) => {
  // Root homepage
  if (pagePath === '/') return 'Homepage';

  // Handle undefined or non-string values gracefully
  if (!pagePath || typeof pagePath !== 'string') return 'Unknown Page';

  // Appliances paths (Root)
  if (pagePath.startsWith('/appliances/')) {
    const segments = pagePath.split('/').filter(Boolean);

    if (segments.length === 1) {
      return 'All Category Page'; // /appliances/
    } else if (segments.length === 2) {
      return 'Category Page'; // /appliances/category-name
    } else if (segments.length >= 3) {
      const productSegment = segments[2];

      // Handle URLs with multiple product names separated by slashes or underscores
      const hasMultipleProducts = productSegment.includes('/') || productSegment.includes('_');

      if (hasMultipleProducts) {
        return 'Product Page (Multiple Products)'; // Example: /appliances/signature/DLEX9500K / DLGX9501K
      }

      return 'Product Page'; // Default for a single product page
    }
  }

  // Step-Up Chart path (Root)
  if (pagePath.startsWith('/step-up-chart/')) {
    return 'Step-Up Chart';
  }

  // Resource pages (Root)
  if (['/feature-definitions', '/warranties', '/model-transitions'].includes(pagePath)) {
    return 'Resource Page';
  }

  // Product List Builder page (Root)
  if (pagePath === '/product-list-builder') {
    return 'Product List Builder';
  }

  // Home Depot paths
  if (pagePath.startsWith('/home-depot/')) {
    const segments = pagePath.split('/').filter(Boolean);

    // Home Depot homepage
    if (segments.length === 1) {
      return 'Home Depot Home Page';
    }

    // Home Depot appliances paths
    if (segments[1] === 'appliances') {
      if (segments.length === 2) {
        return 'Home Depot All Category Page'; // /home-depot/appliances/
      } else if (segments.length === 3) {
        return 'Home Depot Category Page'; // /home-depot/appliances/category-name
      } else if (segments.length >= 4) {
        const productSegment = segments[3];

        // Handle URLs with multiple product names separated by slashes or underscores
        const hasMultipleProducts = productSegment.includes('/') || productSegment.includes('_');

        if (hasMultipleProducts) {
          return 'Home Depot Product Page (Multiple Products)'; // Example: /home-depot/appliances/signature/DLEX9500K / DLGX9501K
        }

        return 'Home Depot Product Page'; // Default for a single product page
      }
    }

    // Home Depot Step-Up Chart paths
    if (segments[1] === 'step-up-chart') {
      return 'Home Depot Step-Up Chart'; // /home-depot/step-up-chart/chart-name
    }

    // Home Depot Resource pages
    if (['feature-definitions', 'warranties', 'model-transitions'].includes(segments[1])) {
      return 'Home Depot Resource Page';
    }

    // Home Depot Product List Builder page
    if (segments[1] === 'product-list-builder') {
      return 'Home Depot Product List Builder';
    }
  }

  // Fallback for unknown pages

  return 'Unknown Page';
};
export const categorizeAppliancePath = (pagePath) => {
  // Predefined categories (manual mapping)
  if (pagePath.includes('/appliances/air-care/')) {
    return 'Air Care';
  }
  if (pagePath.includes('/appliances/cooking/')) {
    return 'Cooking';
  }
  if (pagePath.includes('/appliances/dishwashers/')) {
    return 'Dishwashers';
  }
  if (pagePath.includes('/appliances/laundry/')) {
    return 'Laundry';
  }
  if (pagePath.includes('/appliances/refrigeration/')) {
    return 'Refrigeration';
  }

  if (pagePath.includes('/appliances/vacuums/')) {
    return 'Vacuums';
  }
  if (pagePath.includes('/appliances/signature/')) {
    return 'Signature';
  }
  if (pagePath.includes('/appliances/studio/')) {
    return 'Studio';
  }

  // Dynamic handling for unknown categories
  const regex = /\/appliances\/([a-zA-Z0-9_-]+)\//;
  const match = pagePath.match(regex);
  return match ? match[1] : 'Unknown Category';
};

// ---------------------------------------------------------
// URL TRANSFORMATION
// ---------------------------------------------------------
export function NormalizeSlugs(str) {
  return str
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')  // Replace spaces with dashes
      .replace(/[^\w-]+/g, '');  // Remove all non-word characters
}

export const GenerateProductURL = (category, productTitle) => {
  const encodedTitle = encodeURIComponent(productTitle);
  return `/appliances/${category}/${encodedTitle}`;
};

export const homeLink = '/';
export const homeDepotRoot = `/home-depot/`
export const portalLink = `/portal/dashboard`;


// ---------------------------------------------------------
// APP-WIDE LINK ROUTING
// ---------------------------------------------------------
export function RouteLinks(links) {

  return links.map((link, index) => (
      <motion.li
          key={index}
          variants={linkVariants}  // Apply the staggered animation variants
          initial="hidden"         // Initial state for each list item
          animate="visible"        // Animate to visible when the dropdown is open
          exit="exit"              // Animate out when the dropdown closes
      // transition={{ delay: index * 0.1 }}  // Add a delay based on the index (staggering effect)
      className={styles.routeLinkListItem}
      >
          <LinkComponent
              type='trackedLink'
              href={link.href}
              linkText={link.text}
          />
      </motion.li>
  ));
}



// ---------------------------------------------------------
// FORM HELPERS
// ---------------------------------------------------------
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



// ---------------------------------------------------------
// PRODUCTS
// ---------------------------------------------------------


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


export const GroupDataByCategory = (data) => {
  return data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});
};

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
    'air-care': 'air care',
  };
  return adjustments[categoryId] || categoryId;
};

export const CountProductsInCategory = (products) => {
  const count = products.length;
  return count;
}

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
  const targetKeywords = new Set(['optional', 'matching', 'accessories']);
  const regex = /\(([^)]+)\)/g;

  keywords.forEach(keyword => {
    const lowerCaseKeyword = keyword.toLowerCase();
    if ([...targetKeywords].some(target => lowerCaseKeyword.includes(target))) {
      let match;
      while ((match = regex.exec(keyword)) !== null) {
        // Split only by comma, treat slashes and spaces within a product name as part of the product name
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
