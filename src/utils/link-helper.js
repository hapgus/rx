// import { Button } from "../components/ButtonComponent/Button";
import { LinkComponent } from "../components/Links/LinkComponent";
import { Button } from "../components/Button/Button";


const publicUrl = process.env.PUBLIC_URL;

export function ExternalLink({ children, href }) {
    const handleOnClick = (e) => {
        e.preventDefault();
        const width = 600;
        const height = 400;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);

        window.open(href, 'TermsWindow', `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`);
    };

    return <a href={href} onClick={handleOnClick}>{children}</a>;
}

export function ExternalLinkButton({ linkText, href }) {
    const handleOnClick = (e) => {
        e.preventDefault();
        const width = 600;
        const height = 400;
        const left = (window.innerWidth / 2) - (width / 2);
        const top = (window.innerHeight / 2) - (height / 2);

        window.open(href, 'TermsWindow', `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`);
    };
    return <Button
        icon
        iconStyleType='externalLink'
        iconType='externalLink'
        iconPosition="right"
        buttonStyleType="tertiaryGray"
        buttonTextType="action"
        onClick={handleOnClick}
    >
        <a href={href} >{linkText}
        </a>
    </Button>;
}

export function EmailLink({ linkText, href }) {
    return <a href={href}>{linkText}</a>;
}

export function RouteLinks(links) {

    return links.map((link, index) => (
        <li key={index}>
            <LinkComponent
                type='trackedLink'
                href={link.href}
                linkText={link.text}
            />
            {/* {link.text} */}
            {/* <NavigationLink href={link.href} >
                <NavigationText type="navHeaderText">{link.text}</NavigationText>
            </NavigationLink> */}
        </li>
    ));
}

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

// export const rootUrl = 


export const resourceLinks = [
    { href: `/feature-definitions`, text: 'Feature Definitions' },
    { href: `/warranties`, text: 'Limited Warranties' },
    { href: `/model-transitions`, text: 'Model Transitions' }
];

export const stepUpChartLinks = [
    { href: `${publicUrl}/step-up-chart/cooking`, text: 'Cooking Step Up Charts' },
    { href: `${publicUrl}/step-up-chart/dishwashers`, text: 'Dishwasher Step Up Charts' },
    { href: `${publicUrl}/step-up-chart/laundry`, text: 'Laundry Step Up Charts' },
    { href: `${publicUrl}/step-up-chart/refrigeration`, text: 'Refrigeration Step Up Charts' },
    { href: `${publicUrl}/step-up-chart/vacuums`, text: 'Vacuum Step Up Charts' }
];
export const stepUpChartFooterLinks = [
    { href: `${publicUrl}/step-up-chart/cooking`, text: 'Cooking' },
    { href: `${publicUrl}/step-up-chart/dishwashers`, text: 'Dishwashers' },
    { href: `${publicUrl}/step-up-chart/laundry`, text: 'Laundry' },
    { href: `${publicUrl}/step-up-chart/refrigeration`, text: 'Refrigeration' },
    { href: `${publicUrl}/step-up-chart/vacuums`, text: 'Vacuums' }
];
export const categoryLinks = [
    { href: `${publicUrl}/appliances/air-care`, text: 'Air Care' },
    { href: `${publicUrl}/appliances/cooking`, text: 'Cooking' },
    { href: `${publicUrl}/appliances/dishwashers`, text: 'Dishwashers' },
    { href: `${publicUrl}/appliances/laundry`, text: 'Laundry' },
    { href: `${publicUrl}/appliances/refrigeration`, text: 'Refrigeration' },
    { href: `${publicUrl}/appliances/vacuums`, text: 'Vacuums' },
    { href: `${publicUrl}/appliances/signature`, text: 'LG Signature' },
    { href: `${publicUrl}/appliances/studio`, text: 'LG Studio' },
    { href: `${publicUrl}/appliances/`, text: 'All Home Appliances' }
];
export const allCategoryLinks = [
    { href: `${publicUrl}/appliances/air-care`, text: 'Air Care' },
    { href: `${publicUrl}/appliances/cooking`, text: 'Cooking' },
    { href: `${publicUrl}/appliances/dishwashers`, text: 'Dishwashers' },
    { href: `${publicUrl}/appliances/laundry`, text: 'Laundry' },
    { href: `${publicUrl}/appliances/refrigeration`, text: 'Refrigeration' },
    { href: `${publicUrl}/appliances/vacuums`, text: 'Vacuums' },
    { href: `${publicUrl}/appliances/signature`, text: 'LG Signature' },
    { href: `${publicUrl}/appliances/studio`, text: 'LG Studio' },
    { href: `${publicUrl}/appliances/`, text: 'All Home Appliances' }
];
export const allCategoryLink = [
    { href: `/appliances/`, text: 'All Home Appliances' }
];
export const navCategoryLinks = [
    { href: `/appliances/air-care`, text: 'Air Care' },
    { href: `/appliances/cooking`, text: 'Cooking' },
    { href: `/appliances/dishwashers`, text: 'Dishwashers' },
    { href: `/appliances/laundry`, text: 'Laundry' },
    { href: `/appliances/refrigeration`, text: 'Refrigeration' },
    { href: `/appliances/vacuums`, text: 'Vacuums' },
    // { href: `${publicUrl}/appliances/air-care`, text: 'Air Care' },
    // { href: `${publicUrl}/appliances/cooking`, text: 'Cooking' },
    // { href: `${publicUrl}/appliances/dishwashers`, text: 'Dishwashers' },
    // { href: `${publicUrl}/appliances/laundry`, text: 'Laundry' },
    // { href: `${publicUrl}/appliances/refrigeration`, text: 'Refrigeration' },
    // { href: `${publicUrl}/appliances/vacuums`, text: 'Vacuums' },
    // { href: `${publicUrl}/appliances/`, text: 'Explore' }
];
export const navSecondaryCategoryLinks = [
    { href: `/appliances/signature`, text: 'LG Signature' },
    { href: `/appliances/studio`, text: 'LG Studio' },
];

export const exclusiveLinks = [
    { href: `/product-list-builder`, text: 'Product List Builder' },
];


export const externalLinks = [
    { href: 'https://www.lg.com/us/legal', text: 'Terms' },
    { href: 'https://privacy.us.lg.com/policies', text: 'Privacy' },
];

export const nativeEmailLinks = [
    { href: '`mailto:productguide@teamlg.ca', text: 'productguide@teamlg.ca' }
];

export const accountLinks = [
    // { href: 'user-account/profile', text: 'My profile' },
    // { href: 'user-account/saved-lists', text: 'My Saved lists' },
    // { href: '/', text: 'Sign Out' },
    // { href: `${publicUrl}/member/login`, text: 'Sign in' },
    // { href: `${publicUrl}/member/forgot-password`, text: 'Test Forgot Password' },

    // { href: `${publicUrl}/member/sign-up`, text: 'Sign up' },
    { href: `/portal/dashboard`, text: 'Admin Portal' },
    { href: `/saved-lists`, text: 'My saved lists' },
    { href: `/profile`, text: 'My account' },
    // { href: `${publicUrl}/sign-out`, text: 'Sign out' },
    // { href: '/portal/dashboard', text: 'Test Portal Dash' },
    // { href: '/portal/analytics', text: 'Test portal analytics' },
    // { href: '/portal/add-product', text: 'Test Add product' },
    // { href: '/portal/product-directory', text: 'Test see product directory' },
    // { href: '/portal/add-user', text: 'Test Add portal users' },
    // { href: '/portal/user-directory', text: 'Test see user directory' },
]

export const activeUserAccountLinks = [

    { href: '/', text: 'Sign Out' },
    { href: `${publicUrl}/profile`, text: 'My account' },
    { href: `${publicUrl}/saved-lists`, text: 'My account' },
]
export const publicAccountLinks = [
    { href: `${publicUrl}/profile`, text: 'My account' },
    // { href: `${publicUrl}/member/sign-up`, text: 'Create account' },
]
export const inactivePublicAccountLinks = [
    { href: `${publicUrl}/member/login`, text: 'Sign in' },
    { href: `${publicUrl}/member/sign-up`, text: 'Create account' },
]
export const onboardingLinks = [
    { href: '/sign-up', text: 'Sign Up' },
    { href: '/login', text: 'Sign In' },
    { href: '/forgot-password', text: 'Forgot Password' },
]


export const portalDashLinks = [
    { href: `dashboard`, text: 'Overview' },
    { href: `analytics`, text: 'Analytics' },
]

export const superPortalFormLinks = [
    { href: `${publicUrl}/portal/add-product`, text: 'Product Form' },
    { href: `${publicUrl}/portal/add-user`, text: 'User Form' },
]
export const portalFormLinks = [
    { href: `${publicUrl}/portal/add-product`, text: 'Product Form' },
    // { href: `${publicUrl}/portal/add-user`, text: 'User Form' },
]

export const superPortalTableLinks = [

    { href: `${publicUrl}/portal/product-directory`, text: 'Product Table' },
    { href: `${publicUrl}/portal/user-directory`, text: 'Member Table' },
    { href: `${publicUrl}/portal/admin-directory`, text: 'Admin Table' },
    // { href: '/portal/user-directory', text: 'Test see user directory' },
]
export const portalTableLinks = [

    { href: `${publicUrl}/portal/product-directory`, text: 'Product Table' },
    { href: `${publicUrl}/portal/user-directory`, text: 'Member Table' },
    // { href: `${publicUrl}/portal/admin-directory`, text: 'Admin Table' },
    // { href: '/portal/user-directory', text: 'Test see user directory' },
]

export const portalWebsiteLinks = [
    { href: `/`, text: 'www.lgproductguide.com' },
    { href: `/home-depot`, text: 'www.lgproductguide.com/home-depot' },
]

export const portalAdminUserLinks = [
    { href: `/portal/user-directory`, text: 'Member Table' },
]

export const portalSuperAdminUserLinks = [
    { href: `add-user`, text: 'Create User' },
    { href: `user-directory`, text: 'See All Users' },
    { href: `admin-directory`, text: 'See All Admins' },
]
export const portalProductLinks = [
    { href: `product-directory`, text: 'See All Products' },
    { href: `add-product`, text: 'Create Products' },
]