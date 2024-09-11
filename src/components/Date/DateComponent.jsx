export const DateComponent = ({ dateType, dateValue }) => {
    const dateTypeMap = {
      fullDate: new Date(dateValue).toLocaleDateString(),  // Example: '9/6/2024'
      isoDate: new Date(dateValue).toISOString(),          // Example: '2024-09-06T00:00:00.000Z'
      time: new Date(dateValue).toLocaleTimeString(),      // Example: '11:55:30 AM'
      customFormat: new Intl.DateTimeFormat('en-US', {     // Custom example format
        year: 'numeric', month: 'long', day: '2-digit'    // Example: 'September 06, 2024'
      }).format(new Date(dateValue)),
    };
  
    const formattedDate = dateTypeMap[dateType] || dateTypeMap['fullDate'];  // Default format
  
    return (
      <div>
        {formattedDate}
      </div>
    );
  };


  // Refactored DateComponent for reuse
export const formatDate = (dateType, dateValue) => {
  const dateTypeMap = {
      fullDate: new Date(dateValue).toLocaleDateString(),  // Example: '9/6/2024'
      isoDate: new Date(dateValue).toISOString(),          // Example: '2024-09-06T00:00:00.000Z'
      time: new Date(dateValue).toLocaleTimeString(),      // Example: '11:55:30 AM'
      customFormat: new Intl.DateTimeFormat('en-US', {     // Custom example format
          year: 'numeric', month: 'long', day: '2-digit'   // Example: 'September 06, 2024'
      }).format(new Date(dateValue)),
  };
  
  return dateTypeMap[dateType] || dateTypeMap['fullDate'];  // Default to fullDate if none is provided
};
