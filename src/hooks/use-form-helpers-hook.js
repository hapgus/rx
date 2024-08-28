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

export const useCategoryOptions = () => {
    return useMemo(() => ({
        "air care": [
            { value: "air care", label: "Air care" },
        ],
        "cooking": [
            { value: "ranges", label: "Ranges" },
            { value: "built-in", label: "Built-in" },
            { value: "microwaves", label: "Microwaves" },
        ],
        "laundry": [
            { value: "all-in-one", label: "All-In-One" },
            { value: "washers", label: "Washers" },
            { value: "dryers", label: "Dryers" },
            { value: "washtower", label: "WashTower" },
            { value: "stylers", label: "Stylers" },
            { value: "accessories", label: "Accessories" },
        ],
        "refrigeration": [
            { value: "french door", label: "French Door" },
            { value: "side-by-side", label: "Side-by-Side" },
            { value: "top and bottom freezer", label: "Top and Bottom Freezer" },
            { value: "single door", label: "Single Door" },
        ],
        "dishwashers": [
            { value: "dishwasher", label: "Dishwasher" },
        ],
        "vacuums": [
            { value: "vacuum", label: "vacuum" },
        ],
        "signature": [
            { value: "laundry", label: "Laundry" },
            { value: "dishwasher", label: "Dishwasher" },
            { value: "refrigeration", label: "Refrigeration" },
            { value: "cooking", label: "Cooking" },
            { value: "accessories", label: "Accessories" },
        ],
        "studio": [
            { value: "laundry", label: "Laundry" },
            { value: "dishwasher", label: "Dishwasher" },
            { value: "refrigeration", label: "Refrigeration" },
            { value: "cooking", label: "Cooking" },
            { value: "stylers", label: "Stylers" },
        ]
    }), []);
};

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
            { color: 'apline white' },
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
        return [
            { logo: 'lgThinQ' },
            { logo: 'Ada' },
            { logo: 'lgDoorInDoorWithCraftIce' },
            { logo: 'counterDepthMax' },
            { logo: 'energyStar' },
            { logo: 'energyStarMostEfficient2023' },
            { logo: 'energyStarMostEfficient' },
            { logo: 'garageReady' },
            { logo: 'innit' },
            { logo: 'kompressor' },
            { logo: 'rated1ElectricDryer' },
            { logo: 'rated1FrenchDoorRefrigerator' },
            { logo: 'rated1FrontLoadWasher' },
            { logo: 'rated1TopLoadWasher' },
            { logo: 'reddot' },
            { logo: 'sidechef' },
            { logo: 'standardDepthMax' },
            { logo: 'ThinQ Care' },
            { logo: '2yrWarrantyPartsLabor' },
            { logo: 'ThinQ Up' },
            { logo: 'washerDryerAllOneCombo' },
            { logo: 'lGWashTowerWithCenterControl' },
            { logo: 'worksWithAlexa' }
        ];
    }, []);
};