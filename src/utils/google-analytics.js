
import ReactGA from 'react-ga4';


export const initializeGA = () => {
    try {
        ReactGA.initialize('G-SCG6TQW9TN');
        // ReactGA.initialize('G-SCG6TQW9TN',{
        //     debug_mode: true, 
        //     parameter_name: 'value' 
        //     // gtagOptions: { debug_mode: true }
        // });
        console.log('GA Initialized');
    } catch (error) {
        console.error('Error initializing GA', error);
    }
};
export const logPageView = (location) => {
   const path = location.pathname;
    const pageTitleMap = {
        '/': 'Home',
        '/product-list-builder': 'Builder',
        '/model-transitions': 'Transitions',
        '/warranties': 'Warranties',
        '/feature-definitions': 'Definitions',
        '/step-up-chart/dishwashers':'Diswahser Step-Up-Charts',
        '/step-up-chart/laundry':'Laundry Step-Up-Charts',
        '/step-up-chart/refrigeration':'Refrigeration Step-Up-Charts',
        '/step-up-chart/vacuums':'Vacuum Step-Up-Charts',
        '/appliances/air-care':'All Air Care Appliances',
        '/appliances/cooking':'All Cooking Appliances',
        '/appliances/dishwashers':'All Dishwasher Appliances',
        '/appliances/laundry':'All Laundry Appliances',
        '/appliances/refrigeration':'All Refrigeration Appliances',
        '/appliances/vacuums':'All Vacuums Appliances',
        '/appliances/signature':'All Signature Appliances',
        '/appliances/studio':'All Studio Appliances',
    };

     // Example function to create a title dynamically based on URL structure
     const generateTitleFromPath = (path) => {
        const parts = path.split('/').filter(Boolean); // ['appliances', 'signature', 'WM9500HKA']
        if (parts[0] === 'appliances' && parts.length > 2) {
            // Specific logic for product pages
            const category = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
            const productCode = parts[2];
            return `${category} - Product ${productCode}`;
        }
        return 'Default Product Page Title'; // Fallback for other paths
    };

    // Determine the page title: use the map or generate dynamically
    const pageTitle = pageTitleMap[path] || generateTitleFromPath(path);
 
     // Collect additional data for analytics
     const deviceCategory = window.innerWidth <= 768 ? 'mobile' : (window.innerWidth <= 1024 ? 'tablet' : 'desktop'); // Simplified device detection
     const viewportSize = `${window.innerWidth}x${window.innerHeight}`;
 
    try {
        ReactGA.send({ 
            hitType: "pageview",
            page: location.pathname,          // The path of the page
            location: window.location.href,   // The full URL of the page
            title: pageTitle,               // Use map or generated title
            // title:  pageTitleMap[path] || 'LG Home Appliance Product Guide (US) Default',        // The title of the page
            referrer: document.referrer,      // The referrer URL
            host: window.location.hostname,   // The domain/hostname of the page
            screenResolution: `${window.screen.width}x${window.screen.height}`, // The screen resolution
            viewportSize: viewportSize,     // The viewport size
            userLanguage: navigator.language, // The user's browser language
            deviceCategory: deviceCategory, // Simplified device category
            browser: navigator.userAgent,   // User agent for more detail (or parse for specific browser and version)
      
        });
    } catch (error) {
        console.error('Error logging page view', error);
    }
};

export const logEvent = (eventName, parameters = {}) => {
    try {
        ReactGA.event(eventName, parameters);
        console.log('LOGGED EVENT', eventName, parameters)
    } catch (error) {
        console.error('Error logging event', error);
    }
};