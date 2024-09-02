
import ReactGA from 'react-ga4';

export const initializeGA = () => {
    const initGA = ReactGA.initialize('G-SCG6TQW9TN');
    console.log('initGA', initGA)
    return initGA;
}
export const logPageView = ({location}) => {
    // ReactGA.set({ page: window.location.pathname });
    // ReactGA.pageview(window.location.pathname);
    ReactGA.send({
        hitType: "pageview",
        page:location,
    });
}

export const logEvent = (category, action, label = null, value = null) => {
    return ReactGA.event({
        category: category,
        action: action,
        label: label,
        value: value
    });
}
