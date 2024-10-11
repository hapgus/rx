import { useMemo } from "react";


export const useYearHelper = () => {
    return useMemo(() => {
        const currentYear = new Date().getFullYear();
        const nextYear = currentYear + 1;
        const availabilityOptions = [
            { value: "", label: "Set Availability", disabled: true },
            { value: `available`, label: `Available` },
            { value: `EOL`, label: `EOL` },
            { value: `Q1 ${currentYear}`, label: `Q1 ${currentYear}` },
            { value: `Q2 ${currentYear}`, label: `Q2 ${currentYear}` },
            { value: `Q3 ${currentYear}`, label: `Q3 ${currentYear}` },
            { value: `Q4 ${currentYear}`, label: `Q4 ${currentYear}` },
            { value: `Q1 ${nextYear}`, label: `Q1 ${nextYear}` },
            { value: `Q2 ${nextYear}`, label: `Q2 ${nextYear}` },
            { value: `Q3 ${nextYear}`, label: `Q3 ${nextYear}` },
            { value: `Q4 ${nextYear}`, label: `Q4 ${nextYear}` },
        ]

        return { currentYear, nextYear, availabilityOptions };
    }, []);
}



// NEW 

export const useCategoryOptions = () => {
    return useMemo(() => ({
        "air care": [
            { value: "air care", label: "Air care" },
        ],
        "cooking": [
            { value: "induction ranges", label: "Induction Ranges" },
            { value: "gas ranges", label: "Gas Ranges" },
            { value: "electric ranges", label: "Electric Ranges" },
            { value: "dual fuel ranges", label: "Dual Fuel Ranges" },
            { value: "built-in wall ovens", label: "Built-In Wall Ovens" },
            { value: "built-in cooktops", label: "Built-In Cooktops" },
            { value: "range hoods", label: "Range Hoods" },
            { value: "over-the-range microwaves", label: "Over the Range Microwaves" },
            { value: "countertop microwaves", label: "Countertop Microwaves" },
        ],
        "laundry": [
            { value: "all-in-one", label: "All-In-One" },
            // { value: "washers", label: "Washers" },
            // { value: "dryers", label: "Dryers" },
            // { value: "washtower", label: "WashTower" },
            { value: "washtower", label: "WashTower" },
            { value: "accessories", label: "Accessories" },
            { value: "specialty laundry", label: "Specialty Laundry" },

            { value: "front load washers", label: "Front Load Washers" },
            { value: "top load washers", label: "Top Load Washer" },
            { value: "front load dryers", label: "Front Load Dryers" },
            { value: "top load dryers", label: "Top Load Dryers" },
            { value: "stylers", label: "LG Stylers" },
            
        ],
        "refrigeration": [
            { value: "4-door french door", label: "4-Door French Door" },
            { value: "3-door french door", label: "3-door French Door" },
            { value: "under 33\" french door", label: "33\" and Under French Door" },
            { value: "side-by-side", label: "Side-by-Side" },
            { value: "bottom and top freezer", label: "Bottom and Top Freezer" },
            { value: "single door", label: "Single Door" },
        ],
        "dishwashers": [
            { value: "pocket handle dishwashers", label: "Pocket Handle Dishwashers" },
            { value: "towel bar handle dishwashers", label: "Towel Bar Handle Dishwashers" },
            { value: "specialty dishwashers", label: "Specialty Dishwasher" },
        ],
        "vacuums": [
            { value: "vacuums", label: "Vacuums" },
            // { value: "vacuum", label: "Vacuum" },
        ],
        "signature": [
            { value: "laundry", label: "Laundry" },
            { value: "dishwashers", label: "Dishwashers" },
            { value: "refrigeration", label: "Refrigeration" },
            { value: "ranges", label: "Ranges" },
            { value: "accessories", label: "Accessories" },
        ],
        "studio": [
            { value: "ranges", label: "Ranges" },  
            { value: "refrigeration", label: "Refrigeration" },
            { value: "laundry", label: "Laundry" },
            { value: "dishwashers", label: "Dishwashers" },
            // { value: "dishwasher", label: "Dishwasher" },
            { value: "built-in wall ovens", label: "Built-In Wall Ovens" },
            { value: "built-in cooktops", label: "Built-In Cooktops" },
            { value: "range hoods", label: "Range Hoods" },
            { value: "microwaves", label: "Microwaves" },
            // { value: "stylers", label: "LG Stylers" },
        ]
    }), []);
};

// OLD
// export const useCategoryOptions = () => {
//     return useMemo(() => ({
//         "air care": [
//             { value: "air care", label: "Air care" },
//         ],
//         "cooking": [
//             { value: "ranges", label: "Ranges" },
//             { value: "built-in", label: "Built-in" },
//             { value: "microwaves", label: "Microwaves" },
//         ],
//         "laundry": [
//             { value: "all-in-one", label: "All-In-One" },
//             { value: "washers", label: "Washers" },
//             { value: "dryers", label: "Dryers" },
//             // { value: "washtower", label: "WashTower" },
//             { value: "washtowers", label: "WashTower" },
//             { value: "stylers", label: "Stylers" },
//             { value: "accessories", label: "Accessories" },
//         ],
//         "refrigeration": [
//             { value: "french door", label: "French Door" },
//             { value: "side-by-side", label: "Side-by-Side" },
//             { value: "top and bottom freezer", label: "Top and Bottom Freezer" },
//             { value: "single door", label: "Single Door" },
//         ],
//         "dishwashers": [
//             { value: "dishwasher", label: "Dishwasher" },
//         ],
//         "vacuums": [
//             { value: "vacuum", label: "Vacuum" },
//         ],
//         "signature": [
//             { value: "laundry", label: "Laundry" },
//             { value: "dishwasher", label: "Dishwasher" },
//             { value: "refrigeration", label: "Refrigeration" },
//             { value: "cooking", label: "Cooking" },
//             { value: "accessories", label: "Accessories" },
//         ],
//         "studio": [
//             { value: "laundry", label: "Laundry" },
//             { value: "dishwasher", label: "Dishwasher" },
//             { value: "refrigeration", label: "Refrigeration" },
//             { value: "cooking", label: "Cooking" },
//             { value: "stylers", label: "Stylers" },
//         ]
//     }), []);
// };


export const useCategories = () => {
    return useMemo(() => {
        return [
            { value: "air care", label: "Air care" },
            { value: "cooking", label: "Cooking" },
            { value: "dishwashers", label: "Dishwashers" },
            { value: "laundry", label: "Laundry" },
            { value: "refrigeration", label: "Refrigeration" },
            { value: "vacuums", label: "Vacuums" },
            { value: "signature", label: "Signature" },
            { value: "studio", label: "Studio" },
        ]
    }, [])
}
export const useColumnTitles = () => {
    return useMemo(() => {
        return [
            { value: "stylish design", label: "Stylish Design" },
            { value: "innovations", label: "Innovations" },
            { value: "specifications", label: "Specifications" },
            { value: "organization", label: "Organization" },
        ];
    }, []);
};

export const useColorOptions = () => {
    return useMemo(() => {
        return [
            { color: 'black stainless steel' },
            { color: 'textured steel' },
            { color: 'noble steel' },
            { color: 'black tinted mirror' },
            { color: 'stainless steel' },
            { color: 'essence white', },
            { color: 'white' },
            { color: 'printproof stainless steel' },
            { color: 'black' },
            { color: 'black steel' },
            { color: 'graphite steel' },
            { color: 'middle black' },
            { color: 'alpine white' },
            { color: 'matte black' },
            { color: 'monochrome grey' },
            { color: 'candy apple red' },

            { color: 'nature green' },
            { color: 'cream white' },
            { color: 'espresso dark brown' },
            { color: 'mirror finish' },

            { color: 'metallic charcoal' },
            { color: 'printproof black stainless steel' },
            { color: 'smooth white' },
            { color: 'stainless steel (pcm)', },
            { color: 'platinum silver' },
            { color: 'black ceramic' },
            { color: 'smooth black' },
            { color: 'stainless steel look' },
            { color: 'graphite' },
            { color: 'iron grey' },
            { color: 'matte silver' }
        ];
    }, []);
};

export const useLogoOptions = () => {
    return useMemo(() => {
        // return [
        //     { logo: 'lgThinQ' },
        //     { logo: 'Ada' },
        //     { logo: 'lgDoorInDoorWithCraftIce' },
        //     { logo: 'counterDepthMax' },
        //     { logo: 'energyStar' },
        //     { logo: 'energyStarMostEfficient2023' },
        //     { logo: 'energyStarMostEfficient' },
        //     { logo: 'garageReady' },
        //     { logo: 'innit' },
        //     { logo: 'kompressor' },
        //     { logo: 'rated1ElectricDryer' },
        //     { logo: 'rated1FrenchDoorRefrigerator' },
        //     { logo: 'rated1FrontLoadWasher' },
        //     { logo: 'rated1TopLoadWasher' },
        //     { logo: 'reddot' },
        //     { logo: 'sidechef' },
        //     { logo: 'standardDepthMax' },
        //     { logo: 'ThinQ Care' },
        //     { logo: '2yrWarrantyPartsLabor' },
        //     { logo: 'ThinQ Up' },
        //     { logo: 'washerDryerAllOneCombo' },
        //     { logo: 'lGWashTowerWithCenterControl' },
        //     { logo: 'worksWithAlexa' }
        // ];
        return [
            { logo: 'lgThinQ', label: "ThinQ"},//NEW
            { logo: 'Ada', label:"ADA Compliant" },
            { logo: 'lgDoorInDoorWithCraftIce' , label:"LG Door In Door With Craft Ice"},
            { logo: 'counterDepthMax' , label:"Counter Depth Max"},
            { logo: 'energyStar' , label:"Energy Star"},
            { logo: 'energyStarMostEfficient2023' , label:"Energy Star Most Efficient 2023 "},
            { logo: 'energyStarMostEfficient', label:"Energy Star Most Efficient" },
            { logo: 'garageReady', label:"Garage Ready" },
            { logo: 'innit' , label:"Innit"},
            { logo: 'kompressor' , label:"Kompressor"},
            { logo: 'rated1ElectricDryer', label:"Rated #1 Electric Dryer" },
            { logo: 'rated1FrenchDoorRefrigerator', label:"Rated #1 French Door" },
            { logo: 'rated1FrontLoadWasher', label:"Rated #1 Front Load Washer" },
            { logo: 'rated1TopLoadWasher', label:"Rated #1 Top Load Washer" },
            { logo: 'reddot', label:"Reddot" },
            { logo: 'sidechef',label:"Side Chef" },
            { logo: 'standardDepthMax',label:"Standard Depth Max" },
            { logo: 'ThinQ Care',label:"ThinQ Care" },
            { logo: '2yrWarrantyPartsLabor',label:"2 Year Warranty Parts and Labor" },
            { logo: 'ThinQ Up',label:"ThinQ Up" },
            { logo: 'washerDryerAllOneCombo',label:"Washer Dryer All-In-One Combo" },
            { logo: 'lGWashTowerWithCenterControl',label:"LG WashTower Center Control" },
            { logo: 'worksWithAlexa',label:"Works With Alexa" },
            { logo: 'worksWithHeyGoogle',label:"Works With Google" }
        ];
    }, []);
};