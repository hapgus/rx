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
  return str?.replace(/\b\w+/g, word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
};

export const transformToTitleCase = (str) => {
  return str?.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

// function toTitleCase(str) {
//   return str
//       .split(' ')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//       .join(' ');
// }


export const convertSecondsToMinutes = (seconds) => (seconds / 60).toFixed(2);

// export const getDynamicYAxisRange = (data) => {
//   // Check if data exists and is an array
//   if (!Array.isArray(data)) {
//     console.error("Invalid data passed to getDynamicYAxisRange:", data);
//     return { minValue: 0, maxValue: 100 }; // Default values if data is not valid
//   }

//   const maxValue = Math.max(...data.map(d => Number(d.value || 0)));  // Ensure 'value' exists and is numeric
//   const minValue = Math.min(...data.map(d => Number(d.value || 0)));

//   return { minValue, maxValue: maxValue * 1.1 }; // Add some buffer
// };

export const getDynamicYAxisRange = (data) => {
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));
  return { minValue, maxValue: maxValue * 1.1 }; // Adding some buffer on the upper side
};

// utils/event-helpers.js

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

// export const formatChartLabel = (label) => {
//   return label
//     .replace(/_/g, ' ')                                  // Replace underscores with spaces
//     .replace(/\b\w/g, char => char.toUpperCase());        // Capitalize first letter of each word
// }
export const formatChartLabel = (label) => {
  if (!label || typeof label !== 'string') {
    return 'Unknown'; // Default to 'Unknown' or another fallback
  }
  
  return label
    .replace(/_/g, ' ')                                  // Replace underscores with spaces
    .replace(/\b\w/g, char => char.toUpperCase());        // Capitalize first letter of each word
};



// Step 1: Function to categorize page paths based on segments

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
  console.log('home depot unknown',pagePath);
  return 'Unknown Page';
};

// export const categorizePagePath = (pagePath) => {
//   // Root homepage
//   if (pagePath === '/') return 'Homepage';

//   // Handle undefined or non-string values gracefully
//   if (!pagePath || typeof pagePath !== 'string') return 'Unknown Page';

//   // Generic categorization function for appliances and resources
//   const categorizeStandardPaths = (prefix, type) => {
//     const segments = pagePath.split('/').filter(Boolean).slice(prefix.length); // Slice the prefix segment(s)

//     if (type === 'appliances') {
//       if (segments.length === 0) {
//         return `${prefix} All Category Page`; // e.g., '/appliances/'
//       } else if (segments.length === 1) {
//         return `${prefix} Category Page`; // e.g., '/appliances/category-name'
//       } else if (segments.length >= 2) {
//         return `${prefix} Product Page`; // e.g., '/appliances/category-name/product-name'
//       }
//     } else if (type === 'resources') {
//       return `${prefix} Resource Page`;
//     } else if (type === 'product-list-builder') {
//       return `${prefix} Product List Builder`;
//     } else if (type === 'step-up-chart') {
//       return `${prefix} Step-Up Chart`;
//     }

//     return `${prefix} Other Page`;
//   };

//   // Appliances paths (Root)
//   if (pagePath.startsWith('/appliances/')) {
//     console.log('appliances -',pagePath)
//     return categorizeStandardPaths('Root', 'appliances');
//   }

//   // Resource pages (Root)
//   if (['/feature-definitions', '/warranties', '/model-transitions'].some(path => pagePath === path)) {
//     return categorizeStandardPaths('Root', 'resources');
//   }

//   // Product List Builder page (Root)
//   if (pagePath === '/product-list-builder') {
//     return categorizeStandardPaths('Root', 'product-list-builder');
//   }

//   // Step-Up Chart path (Root)
//   if (pagePath.startsWith('/step-up-chart/')) {
//     return categorizeStandardPaths('Root', 'step-up-chart');
//   }

//   // Home Depot paths
//   if (pagePath.startsWith('/home-depot/')) {
//     const homeDepotPrefix = 'Home Depot';

//     if (pagePath === '/home-depot') {
//       return `${homeDepotPrefix} Home Page`;
//     }

//     if (pagePath.startsWith('/home-depot/appliances/')) {
//       return categorizeStandardPaths(homeDepotPrefix, 'appliances');
//     }

//     if (pagePath.startsWith('/home-depot/step-up-chart/')) {
//       return categorizeStandardPaths(homeDepotPrefix, 'step-up-chart');
//     }

//     if (['/home-depot/feature-definitions', '/home-depot/warranties', '/home-depot/model-transitions'].some(path => pagePath === path)) {
//       return categorizeStandardPaths(homeDepotPrefix, 'resources');
//     }

//     if (pagePath === '/home-depot/product-list-builder') {
//       return categorizeStandardPaths(homeDepotPrefix, 'product-list-builder');
//     }
//   }

//   // Fallback for unknown pages
//   console.log(pagePath);
//   return 'Unknown Page';
// };

// export const categorizePagePath = (pagePath) => {
  
//   if (pagePath === '/') {
//     return 'Homepage'; // Root path for the homepage
//   }
//   if (!pagePath || typeof pagePath !== 'string') {
//     return 'Unknown Page'; // Handle undefined or non-string values gracefully
//   }


//   if (pagePath.startsWith('/appliances/')) {
//     const segments = pagePath.split('/').filter(Boolean); // Split and remove empty segments

//     if (segments.length === 1) {
//       return 'All Category Page'; // /appliances/
//     } else if (segments.length === 2) {
//       return 'Category Page'; // /appliances/category-name
//     } else if (segments.length >= 3) {
//       // Check for product page
//       const productSegment = segments[2];

//       // Handle URLs with multiple product names separated by slashes or underscores
//       const hasMultipleProducts = productSegment.includes('/') || productSegment.includes('_');

//       if (hasMultipleProducts) {
//         return 'Product Page (Multiple Products)'; // Example: /appliances/signature/DLEX9500K / DLGX9501K
//       }

//       return 'Product Page'; // Default for a single product page
//     }
//   }

//   if (pagePath.startsWith('/step-up-chart/')) {
//     return 'Step-Up Chart'; // /step-up-chart/chart-name
//   }
//   // NEW
//   if (pagePath.startsWith('/home-depot/')) {
//     return 'Home Page'; // /step-up-chart/chart-name
//   }
//   if (pagePath.startsWith('/home-depot/')) {
//     return 'Home Page'; // /step-up-chart/chart-name
//   }

//   if (['/feature-definitions', '/warranties', '/model-transitions'].includes(pagePath)) {
//     return 'Resource Page'; // One of the resource pages
//   }

//   if (pagePath === '/product-list-builder') {
//     return 'Product List Builder'; // /product-list-builder
//   }
// console.log(pagePath)
//   return 'Unknown Page'; // Fallback for unknown pages
// };


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

//  export const categorizePagePath = (pagePath) => {
//     if (pagePath === '/') {
//         return 'Homepage'; // Root path for the homepage
//     }
//     if (pagePath.startsWith('/appliances/')) {
//         const segments = pagePath.split('/').filter(Boolean); // Split and remove empty segments
//         if (segments.length === 1) {
//             return 'All Category Page'; // /appliances/
//         } else if (segments.length === 2) {
//             return 'Category Page'; // /appliances/category-name
//         } else if (segments.length === 3) {
//             return 'Product Page'; // /appliances/category-name/product-name
//         }
//     }
//     if (pagePath.startsWith('/step-up-chart/')) {
//         return 'Step-Up Chart'; // /step-up-chart/chart-name
//     }
//     if (['/feature-definitions', '/warranties', '/model-transitions'].includes(pagePath)) {
//         return 'Resource Page'; // One of the resource pages
//     }
//     if (pagePath === '/product-list-builder') {
//         return 'Product List Builder'; // /product-list-builder
//     }
//     return 'Unknown Page'; // Fallback for unknown pages
// };

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