export const useLinkConfig = () => {


    // --------------------------------------------
    //--CATEGORIES
    // --------------------------------------------
    const categoryLinks = [
        { href: `/appliances/air-care`, text: 'Air Care' },
        { href: `/appliances/cooking`, text: 'Cooking' },
        { href: `/appliances/dishwashers`, text: 'Dishwashers' },
        { href: `/appliances/laundry`, text: 'Laundry' },
        { href: `/appliances/refrigeration`, text: 'Refrigeration' },
        { href: `/appliances/vacuums`, text: 'Vacuums' },
        { href: `/appliances/signature`, text: 'LG SIGNATURE' },
        { href: `/appliances/studio`, text: 'LG STUDIO' },
        { href: `/appliances/`, text: 'All Home Appliances' }
    ];
    const allCategoryLink = [
        { href: `/appliances/`, text: 'All Home Appliances' }
    ];
    const navCategoryLinks = [
        { href: `/appliances/air-care`, text: 'Air Care' },
        { href: `/appliances/cooking`, text: 'Cooking' },
        { href: `/appliances/dishwashers`, text: 'Dishwashers' },
        { href: `/appliances/laundry`, text: 'Laundry' },
        { href: `/appliances/refrigeration`, text: 'Refrigeration' },
        { href: `/appliances/vacuums`, text: 'Vacuums' },
    ];
    const navSecondaryCategoryLinks = [
        { href: `/appliances/signature`, text: 'LG Signature' },
        { href: `/appliances/studio`, text: 'LG Studio' },
    ];

    // --------------------------------------------
    //--RESOURCES
    // --------------------------------------------

    const resourceLinks = [
        { href: `/feature-definitions`, text: 'Feature Definitions' },
        { href: `/warranties`, text: 'Limited Warranties' },
        { href: `/model-transitions`, text: 'Model Transitions' }
    ];

    // Define step-up chart links
    const stepUpChartLinks = [
        { href: `/step-up-chart/cooking`, text: 'Cooking Step Up Charts' },
        { href: `/step-up-chart/dishwashers`, text: 'Dishwasher Step Up Charts' },
        { href: `/step-up-chart/laundry`, text: 'Laundry Step Up Charts' },
        { href: `/step-up-chart/refrigeration`, text: 'Refrigeration Step Up Charts' },
        { href: `/step-up-chart/vacuums`, text: 'Vacuum Step Up Charts' }
    ];

    // --------------------------------------------
    //--EXCLUSIVE
    // --------------------------------------------

    const exclusiveLinks = [
        { href: `/product-list-builder`, text: 'Product List Builder' }
    ];


    // --------------------------------------------
    //--EXTERNAL
    // --------------------------------------------
    const externalLinks = [
        { href: 'https://www.lg.com/us/legal', text: 'Terms' },
        { href: 'https://privacy.us.lg.com/policies', text: 'Privacy' },
        { href: 'https://www.lghapassport.com/home', text: 'LG Passport' }
    ];

    const nativeEmailLinks = [
        { href: 'mailto:productguide@teamlg.ca', text: 'productguide@teamlg.ca' }
    ];


    // --------------------------------------------
    //--PORTAL
    // --------------------------------------------
    const portalDashLinks = [
        { href: `/portal/overview`, text: 'Overview' },
        { href: `/portal/analytics`, text: 'Analytics' },
    ]

    const superPortalFormLinks = [
        { href: `/portal/add-product`, text: 'Product Form' },
        { href: `/portal/add-user`, text: 'User Form' },
    ]

    const portalFormLinks = [
        { href: `/portal/add-product`, text: 'Product Form' },
    ]

    const superPortalTableLinks = [

        { href: `/portal/product-directory`, text: 'Product Table' },
        { href: `/portal/user-directory`, text: 'Member Table' },
        { href: `/portal/admin-directory`, text: 'Admin Table' },

    ]


    const portalTableLinks = [
        { href: `/portal/product-directory`, text: 'Product Table' },
        { href: `/portal/user-directory`, text: 'Member Table' },
    ]

    const portalWebsiteLinks = [
        { href: `/`, text: 'LG Exclusive Product Guide' },
        { href: `/home-depot`, text: 'LG Home Depot Product Guide' },
    ]

    const portalAdminUserLinks = [
        { href: `/portal/user-directory`, text: 'Member Table' },
    ]

    const portalSuperAdminUserLinks = [
        { href: `/portal/add-user`, text: 'Create User' },
        { href: `/portal/user-directory`, text: 'See All Users' },
        { href: `/portal/admin-directory`, text: 'See All Admins' },
    ]
    const portalProductLinks = [
        { href: `/portal/product-directory`, text: 'See All Products' },
        { href: `/portal/add-product`, text: 'Create Products' },
    ]
    const portalAdminProfileLinks = [
        {href:`/profile`, text:"My Profile"}
    ]

    return {
        categoryLinks,
        allCategoryLink,
        navCategoryLinks,
        navSecondaryCategoryLinks, 
        
        resourceLinks, 
        stepUpChartLinks, 
        exclusiveLinks, 
        externalLinks,
        nativeEmailLinks,
        superPortalFormLinks,
        portalFormLinks,
        superPortalTableLinks, 
        portalTableLinks, 
        portalWebsiteLinks, 
        portalAdminUserLinks, 
        portalSuperAdminUserLinks, 
        portalProductLinks,
        portalDashLinks,

        portalAdminProfileLinks
    };
};
