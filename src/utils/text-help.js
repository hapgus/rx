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

export const formatChartLabel = (label) => {
  return label
    .replace(/_/g, ' ')                                  // Replace underscores with spaces
    .replace(/\b\w/g, char => char.toUpperCase());        // Capitalize first letter of each word
}


// Step 1: Function to categorize page paths based on segments
export const categorizePagePath = (pagePath) => {
  if (pagePath === '/') {
    return 'Homepage'; // Root path for the homepage
  }

  if (pagePath.startsWith('/appliances/')) {
    const segments = pagePath.split('/').filter(Boolean); // Split and remove empty segments

    if (segments.length === 1) {
      return 'All Category Page'; // /appliances/
    } else if (segments.length === 2) {
      return 'Category Page'; // /appliances/category-name
    } else if (segments.length >= 3) {
      // Check for product page
      const productSegment = segments[2];

      // Handle URLs with multiple product names separated by slashes or underscores
      const hasMultipleProducts = productSegment.includes('/') || productSegment.includes('_');

      if (hasMultipleProducts) {
        return 'Product Page (Multiple Products)'; // Example: /appliances/signature/DLEX9500K / DLGX9501K
      }

      return 'Product Page'; // Default for a single product page
    }
  }

  if (pagePath.startsWith('/step-up-chart/')) {
    return 'Step-Up Chart'; // /step-up-chart/chart-name
  }

  if (['/feature-definitions', '/warranties', '/model-transitions'].includes(pagePath)) {
    return 'Resource Page'; // One of the resource pages
  }

  if (pagePath === '/product-list-builder') {
    return 'Product List Builder'; // /product-list-builder
  }

  return 'Unknown Page'; // Fallback for unknown pages
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