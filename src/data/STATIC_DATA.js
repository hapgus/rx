const publicUrl = process.env.PUBLIC_URL;

export const STEP_UP_CHART_CATEGORIES = {
 cooking:{
    ctaText:'To see more range specs, Built-In Cooking, Microwaves, and more, view',
    ctaUrl:'https://lg.widen.net/s/hkptkrhzff/2024_line_logic_guide_lg_cooking_may',
    charts:[
        `${publicUrl}/assets/image/step-up-charts/lg-line-logic-cooking-01.webp`,
        `${publicUrl}/assets/image/step-up-charts/lg-line-logic-cooking-03.webp`,
        `${publicUrl}/assets/image/step-up-charts/lg-line-logic-cooking-05.webp`,
        `${publicUrl}/assets/image/step-up-charts/lg-line-logic-cooking-07.webp`,
        `${publicUrl}/assets/image/step-up-charts/lg-line-logic-cooking-09.webp`,
    ],
    hero: `${publicUrl}/assets/image/backgrounds/main/cooking-step.png`,

 },  
 refrigeration:{
    ctaText:'To see more refrigerators view',
    ctaUrl:'https://lg.widen.net/s/dtjzjzrjvl/2024_line_logic_guide_lg_refrigeration_june',
    charts:[
        `${publicUrl}/assets/image/step-up-charts/lg-line-logic-fridge-01.webp`,
        `${publicUrl}/assets/image/step-up-charts/lg-line-logic-fridge-02.webp`,
        `${publicUrl}/assets/image/step-up-charts/lg-line-logic-fridge-03.webp`,
        `${publicUrl}/assets/image/step-up-charts/lg-line-logic-fridge-04.webp`,
        `${publicUrl}/assets/image/step-up-charts/lg-line-logic-fridge-05.webp`,
        `${publicUrl}/assets/image/step-up-charts/lg-line-logic-fridge-06.webp`,
    ],
    hero: `${publicUrl}/assets/image/backgrounds/main/fridge-step.png`,
 },
 dishwashers:{
     ctaText:'To see more products view',
    ctaUrl:'https://lg.widen.net/s/vbgb57xncs/2024_line_logic_guide_lg_dishwasher_march',
    charts:[
        `${publicUrl}/assets/image/step-up-charts/lg-line-logic-dish-01.webp`,
        `${publicUrl}/assets/image/step-up-charts/lg-line-logic-dish-02.webp`,
    ],
    hero: `${publicUrl}/assets/image/backgrounds/main/dish-step.png`,
 },
 laundry:{
    ctaText:'To see more laundry, including WashTowers, Stylers, Pairs, and more, view',
   ctaUrl:'https://lg.widen.net/s/tjbz2w8dlp/2024_line_logic_guide_lg_laundry_june',
   charts:[
    `${publicUrl}/assets/image/step-up-charts/lg-line-logic-laundry-04.webp`,
    `${publicUrl}/assets/image/step-up-charts/lg-line-logic-laundry-05.webp`,
    `${publicUrl}/assets/image/step-up-charts/lg-line-logic-laundry-07.webp`,
    `${publicUrl}/assets/image/step-up-charts/lg-line-logic-laundry-08.webp`,
   ],
   hero: `${publicUrl}/assets/image/backgrounds/main/laundry-step.png`
},
vacuums:{
    ctaText:'To see more products view',
   ctaUrl:'https://lg.widen.net/s/wj2j7mcjlh/2024_line_logic_guide_lg_floor_care_june',
   charts:[
    `${publicUrl}/assets/image/step-up-charts/lg-line-logic-floor-01.webp`,
   ],
   hero: `${publicUrl}/assets/image/backgrounds/main/vacuum-step.png`
},

}




export const WARRANTY_DATA = [
    {
        "warranty_category": "Washers",
        "description": [
            "1 year parts and labor (private family use only)",
            "10 years limited on: LG Direct Drive motor"
        ]
    },
    {
        "warranty_category": "Dryers",
        "description": ["1 year parts and labor"]
    },
    {
        "warranty_category": "Refrigerators",
        "description": [
            "1 year parts and labor",
            "5 years parts and labor on : Sealed System (Condenser, Dryer, Connecting Tube and Evaporator) and Compressor"
        ]
    },
    {
        "warranty_category": "Electric and Gas Ranges",
        "description": ["1 year parts and labor"]
    },
    {
        "warranty_category": "Built-in Wall Ovens",
        "description": ["1 year parts and labor"]
    },
    {
        "warranty_category": "Gas and Electric Built-in Cooktops",
        "description": ["1 year parts and labor"]
    },
    {
        "warranty_category": "Microwaves",
        "description": [
            "1 year parts and labor",
            "5 years limited on magnetron",
            "10 years limited on inverter magnetron"
        ]
    },
    {
        "warranty_category": "Dishwashers",
        "description": [
            "LG: 1 year parts and labor",
            "2 years limited on: Main control board, Dishwasher Racks, Stainless steel door liner and stainless steel tub",
            "10 years limited on: LG Direct Drive motor",
            "LG STUDIO DISHWASHERS: 2 years parts and labor",
            "5 years limited on: Main control board, Dishwasher Racks,",
            "Stainless steel door liner and stainless steel tub",
            "10 years limited on: LG Direct Drive motor"
        ]
    },
    // {
    //     "warranty_category": "disclaimer",
    //     "description": [
    //         "All warranties subject change, please see www.lg.com for updates and additional information."
    //     ]
    // }
];

export const FEATURE_DEFINITIONS_DATA = [
    {
        "category": "laundry",
        "subcategory": "lg front load washer features",
        "feature": "LG ThinQ® Technology",
        "definition": "LG ThinQ Technology  Change the way you do laundry with LG washers and dryers with ThinQ technology. Start and stop wash cycles remotely, get notifications when your laundry is done and receive helpful reminders about scheduled maintenance to keep laundry day running smoothly."
    },
    {
        "category": "laundry",
        "subcategory": "lg front load washer features",
        "feature": "LG SideKick™ Pedestal Washer",
        "definition": "LG SideKick™ Pedestal Washer is the perfect size for cleaning smaller loads as often as you need while giving delicates, hand washables and workout wear the special care they deserve."
    },
    {
        "category": "laundry",
        "subcategory": "lg front load washer features",
        "feature": "Compatibility",
        "definition": "The LG SideKick is compatible with our entire portfolio of front load washers to suit different consumer needs and budget requirements."
    },
    {
        "category": "laundry",
        "subcategory": "lg front load washer features",
        "feature": "TurboWash™ 360 Technology",
        "definition": "Clean larger loads under 30 minutes, while enjoying the same great washing performance you expect from LG. With five powerful jets that surround your clothes from every angle, penetrating deep into fabrics, for a more complete clean."
    },
    {
        "category": "laundry",
        "subcategory": "lg front load washer features",
        "feature": "5.8 cu. ft. MEGA Capacity (WM9500)",
        "definition": "When it comes to laundry capacity, big is good, bigger is better, but biggest is best. With the largest capacity washer in its class, now you can wash a king size comforter and full set of bedding in a single load! At 5.8 cu. ft. of mega capacity, you'll definitely have more room to clean. 5.8 CUBIC FEET MEGA CAPACI TY Based on manufacturers published specs of front load washers with a width of 30 inches or less. Trusted & Reliable When it comes to trusted, proven performance, LG is there for you with front load washers-designed to last for years to come."
    },
    {
        "category": "laundry",
        "subcategory": "lg front load washer features",
        "feature": "Trusted and Reliable",
        "definition": "When it comes to trusted, proven performance, LG is there for you with front load washers-designed to last for years to come."
    },
    {
        "category": "laundry",
        "subcategory": "lg front load dryer features",
        "feature": "LG EasyLoad™ Door: Easily Load and Unload",
        "definition": "LG EasyLoad Door Easily Load and Unload  The dual-opening options of the LG EasyLoad door make loading and unloading the dryer easier than ever. Transferring wet clothes from the washer Simply press the release button and pull the door down, hamper style to keep that stray sock from hitting the floor. Removing dry items Swing the door to the side to clear the way for your basket below. Even tight spaces and challenging laundry-room layouts are no match for versatility like this."
    },
    {
        "category": "laundry",
        "subcategory": "lg front load dryer features",
        "feature": "TurboSteam®: Refresh Fabrics and Reduce Wrinkles in 10 Minutes",
        "definition": "You grab your favorite shirt from the closet only to find that the hanger has left indelible imprints on each shoulder. What to do when there's no time to wash? LG TurboSteam™ technology to the rescue. Toss the shirt in the dryer, turn on TurboSteam™ and in just 10 minutes* your shirt is back in tip-top shape. Also helps refresh fabrics and reduce wrinkles in half the time of other steam settings."
    },
    {
        "category": "laundry",
        "subcategory": "lg front load dryer features",
        "feature": "LG SteamFresh™ Cycle: Refresh and Reduce Wrinkles",
        "definition": "Late for the party and no time to iron your favorite outfit? The SteamFresh™ Cycle refreshes, and reduces wrinkles in up to five garments at a time with one 20-minute dryer cycle."
    },
    {
        "category": "laundry",
        "subcategory": "lg front load dryer features",
        "feature": "Sensor Dry System: Automatically Adjusts Drying Time",
        "definition": "Sensor Dry system measures the moisture levels during the cycle and automatically adjusts the drying time."
    },
    {
        "category": "laundry",
        "subcategory": "lg front load dryer features",
        "feature": "Trusted and Reliable",
        "definition": "When it comes to trusted, proven performance, LG is there for you with top of the line dryers—designed to last for years to come."
    },
    {
        "category": "laundry",
        "subcategory": "lg front load dryer features",
        "feature": "ENERGY STAR® Most Efficient for 2023",
        "definition": "This LG washer has been awarded the ENERGY STAR® Most Efficient Mark in 2023. Products that are recognized as the Most Efficient of ENERGY STAR in 2023 help reduce greenhouse gas emissions by meeting rigorous energy efficiency performance levels set by the U.S. Environmental Protection Agency."
    },
    {
        "category": "laundry",
        "subcategory": "lg top load dryer features",
        "feature": "TrueBalance™ Technology – Quiet Operation",
        "definition": "You shouldn’t know your washer is on from the next room. The LG TrueBalance™ anti-vibration system is designed to reduce washer noise and vibration for smooth, quiet performance in any room of the house – even if it's on another floor."
    },
    {
        "category": "laundry",
        "subcategory": "lg top load dryer features",
        "feature": "ENERGY STAR® Most Efficient for 2023",
        "definition": "This LG washer has been awarded the ENERGY STAR® Most Efficient Mark in 2023. Products that are recognized as the Most Efficient of ENERGY STAR in 2023 help reduce greenhouse gas emissions by meeting rigorous energy efficiency performance levels set by the U.S. Environmental Protection Agency."
    },
    {
        "category": "laundry",
        "subcategory": "lg top load dryer features",
        "feature": "Trusted and Reliable",
        "definition": "When it comes to trusted, proven performance, LG is there for you with top load washers—designed to last for years to come."
    },
    {
        "category": "laundry",
        "subcategory": "lg top load dryer features",
        "feature": "TurboWash3D™ Technology",
        "definition": "A powerful jet spray, plus the tub and motor that rotate independently and in opposite directions, creates a powerful water flow that causes garments to rub against each other throughout the cycle for enhanced washing performance."
    },
    {
        "category": "laundry",
        "subcategory": "lg top load dryer features",
        "feature": "Maximize Your Wash Motions with 4-Way Agitator",
        "definition": "Unique 4-way wash action moves clothes left and right, up and down for a thorough yet gentle clean."
    },
    {
        "category": "refrigeration",
        "subcategory": "lg french door refrigeration features",
        "feature": "LG ThinQ® Technology",
        "definition": "LG smart refrigerators let you control key features using the LG ThinQ® app on your smartphone including IcePlus™ and Vacation Mode—it will even send you an alert if the door is left open. Plus, it works with the Google Assistant or Amazon Alexa so you can control your refrigerator with the sound of your voice."
    },
    {
        "category": "refrigeration",
        "subcategory": "lg french door refrigeration features",
        "feature": "LG InstaView® Door-in-Door®",
        "definition": "InstaView® Door-in-Door® refrigerators have a sleek glass panel that allows you to see inside the easy access door without letting the cold air out. Simply knock twice on the glass to illuminate the contents within."
    },
    {
        "category": "refrigeration",
        "subcategory": "lg french door refrigeration features",
        "feature": "LG Door-in-Door® with ColdSaver™ Panel",
        "definition": [
            "Only LG offers its popular Door-in-Door® design to meet the unique needs of consumers. Pioneered by LG, the innovative Door-in-Door® design lets you store and quickly access food in the unique external storage compartment while keeping other items sealed and cold within the refrigerator.",
            "",
            "REDUCE COLD AIR LOSS BY UP TO 47% WITH DOOR-IN-DOOR®",
            "",
            "Unique to LG, the Door-in-Door® ColdSaver™ Panel acts like a barrier keeping cold air in where it matters most - in the inside - giving you peace of mind that food will stay fresh longer. It reduces cold air loss by up to 47%* to help keep food fresher longer, while conserving on precious energy.",
            "",
            "* Percent reduction in exchange rate of air when comparing opening the Door-in-Door® feature, with opening one full standard French Door for 10 seconds. Results based on testing of comparable LG French Door models with those featuring the Door-in-Door® design."
        ]
    },
    {
        "category": "refrigeration",
        "subcategory": "lg french door refrigeration features",
        "feature": "LG Black Stainless Steel Series",
        "definition": "Deep yet brilliantly appealing, the LG Black Stainless Steel Series brings an undeniable lustre to kitchen spaces. It elevates the traditional stainless steel look that has become the standard in today's homes with a satin-smooth, warm and sophisticated finish unlike any other-for a timeless expression that pairs beautifully with any style or color of surrounding cabinetry."
    },
    {
        "category": "refrigeration",
        "subcategory": "lg french door refrigeration features",
        "feature": "PrintProof™ Finish",
        "definition": "Now you can have all of the things you love about stainless, without the need for special cleaners or constant attention. LG’s PrintProof™ fingerprint and smudge resistant finish easily wipes clean with a soft, dry cloth for a distinctive kitchen that handles real-life in style."
    },
    {
        "category": "refrigeration",
        "subcategory": "lg french door refrigeration features",
        "feature": "Slim SpacePlus® Ice System",
        "definition": "Ice makers are great, but not if it means you can’t fit all of your food in the fridge. The LG SpacePlus® Ice System is on the inside door, freeing up valuable space in the fresh food shelf compartments. More space means you can store more food. Our newest models make up to 30% more ice versus previous LG models!"
    },
    {
        "category": "refrigeration",
        "subcategory": "lg side by side refrigeration features",
        "feature": "LG Door-in-Door® with ColdSaver™ Panel",
        "definition": "Only LG offers its popular Door-in Door® design in 4 new Side-By-Side models to meet the unique needs of consumers. From post-workout protein shakes to after-school snacks, LG's Door-in-Door® design keeps all your favorites at your fingertips – all with the push of a button."
    },
    {
        "category": "refrigeration",
        "subcategory": "lg side by side refrigeration features",
        "feature": "",
        "definition": [
            "REDUCES COLD AIR LOSS",
            "",
            "Unique to LG, the LG Door-in-Door® ColdSaver™ Panel acts like a barrier keeping cold air in where it matters most - in the inside - giving you peace of mind that food will stay fresh longer. It reduces cold air loss to help keep food fresher longer while conserving on precious energy."
        ]
    },
    {
        "category": "refrigeration",
        "subcategory": "lg side by side refrigeration features",
        "feature": "SpacePlus® Ice System",
        "definition": "Ice Makers are great, but not if it means you can't fit all your food in the fridge. The LG SpacePlus® Ice System is on the inside freezer door, freeing up valuable space. More space means you can store more food."
    },
    {
        "category": "refrigeration",
        "subcategory": "lg side by side refrigeration features",
        "feature": "Tall Ice & Water Dispenser",
        "definition": "The dispenser is nearly 12\" tall, with an easy access water tap and easy to fill most pitchers and glasses."
    },
    {
        "category": "refrigeration",
        "subcategory": "lg side by side refrigeration features",
        "feature": "Smart Cooling® System",
        "definition": "Smart Cooling technology is designed to maintain superior conditions within the refrigerator. The Linear Compressor reacts quickly to temperature fluctuations and helps keep your food fresher, longer. Meanwhile, strategically-placed vents in every section surround your food with cool, fresh air virtually anywhere you put it."
    },
    {
        "category": "refrigeration",
        "subcategory": "lg top / bottom mount refrigeration features",
        "feature": "Largest Capacity for 33\" Width*",
        "definition": [
            "Get the space you need in a refrigerator that fits your space. Our 33\" wide, 24 cu. ft. refrigerators offer the largest capacity top mount and bottom mount refrigerators to meet your storage needs.",
            "* Largest in total capacity; based on manufacturer’s published specifications as of 12/1/16.",
            "Excludes other LG manufactured products."
        ]
    },
    {
        "category": "refrigeration",
        "subcategory": "lg top / bottom mount refrigeration features",
        "feature": "Multi-Air Flow Freshness System",
        "definition": "Multi-Air Flow System is designed to maintain superior humidity and temperature levels to help keep your food fresher, longer. Digital sensors constantly monitor conditions within the refrigerator and strategically-placed vents in every section to help surround your food with cool air no matter where you put it."
    },
    {
        "category": "refrigeration",
        "subcategory": "lg top / bottom mount refrigeration features",
        "feature": "Bottom Freezer Design – Pull Drawer",
        "definition": "Get easier access to the food you reach for the most by taking advantage of the bottom freezer drawer. You’re in and out of the refrigerator all day, so we put the freezer on the bottom. That means the refrigerator compartment is at eye-level, and that's more convenient for you and your family."
    },
    {
        "category": "refrigeration",
        "subcategory": "lg top / bottom mount refrigeration features",
        "feature": "2 Humidity Controlled Crispers",
        "definition": "Humidity-controlled crispers help maintain humidity to extend the life of your fruits and vegetables."
    },
    {
        "category": "refrigeration",
        "subcategory": "lg top / bottom mount refrigeration features",
        "feature": "Glide N' Serve™ Drawers",
        "definition": "Two humidity-controlled crisper drawers, a full-width Glide-N-Serve® drawer, and a bonus drawer for fruits and vegetables make party preparations easy."
    },
    {
        "category": "refrigeration",
        "subcategory": "lg top / bottom mount refrigeration features",
        "feature": "LED Lighting",
        "definition": "Bright LED panels located in the refrigerator and freezer provide excellent lighting all while saving energy."
    },
    {
        "category": "cooking",
        "subcategory": "lg range features",
        "feature": "ProBake Convection®",
        "definition": [
            "Tired of being burned by inconsistent baking results? Not anymore – LG ProBake Convection® delivers even baking results on every rack, every time*. Inspired by pro-style ranges, this new LG ranged moved the heating element from the bottom of the oven to the back wall for optimal heat distribution. Enjoy consistent browning on top and bottom- with every cookie baked to perfection.",
            "* Compared to LG's conventional ovens"
        ]
    },
    {
        "category": "cooking",
        "subcategory": "lg range features",
        "feature": "EasyClean®",
        "definition": "Got 10 minutes? Then you have time to clean your oven. LG EasyClean® brings you the fastest oven-cleaning feature yet. In three easy steps and 10 quick minutes your oven can be sparkling clean, without strong chemical fumes or high heat.* Simply spray the oven interior with water, press EasyClean® and then in 10 minutes, quickly wipe away leftover grime. And you can still use the traditional self-clean cycle for heavy spills or the occasional deep clean."
    },
    {
        "category": "cooking",
        "subcategory": "lg range features",
        "feature": "Infrared Heating™",
        "definition": [
            "When you’re craving the thrill of the grill but Mother Nature has other ideas, you can still achieve that characteristic seared flavor with LG’s Infrared Heating™ system. The infrared heating element locks in juices while cutting up to 20% off of your cooking time*—with no preheating required.",
            "*Compared to LG's non-infrared heating ovens using chicken breasts, hamburgers, and salmon."
        ]
    },
    {
        "category": "cooking",
        "subcategory": "lg range features",
        "feature": "LG ThinQ® Technology",
        "definition": "With the LG ThinQ® app, you can control your smart oven from anywhere so you don’t have to get up to check how much time is remaining. You can also start preheating and turn the oven on or off from your smartphone, or with voice commands—it even works with the Google Assistant and Amazon Alexa."
    },
    {
        "category": "cooking",
        "subcategory": "lg range features",
        "feature": "Largest Capacity Double Ovens†",
        "definition": [
            "Simplify dinner time with LG’s 7.3 cu. ft. double oven offering our largest capacity available. Use the quick heating upper oven for smaller meals on the go. For bigevents, you’ll have the room you need to cook all yourfavorite dishes, at different temperatures, at the same time. With LG, no meal (or guest list) is too big.",
            "† Largest in total capacity; based on manufacturer’s published specifications as of 12/1/16. Excludes other LG manufactured products."
        ]
    },
    {
        "category": "cooking",
        "subcategory": "lg range features",
        "feature": "Large Capacity Single Ovens",
        "definition": "Bring on your oversize roasts, your 24-pound-plus turkeys, your cavalcade of side dishes. If you can dream it, this huge 6.3 cu. ft. capacity oven can match your menu stride for stride. With this large capacity oven, you can conquer large meals with room to spare."
    },
    {
        "category": "cooking",
        "subcategory": "lg range features",
        "feature": "LG's Fastest Boiling Element & Burner",
        "definition": [
            "UltraHeat™ 4.3kW Elements",
            "Just when you thought it couldn’t get any faster, it did. With 4,300 watts, these dual cooktop elements are the most powerful available.†† Not only do they deliver LG’s fastest boil, they let you match the element size to your cookware for the utmost in flexibility.",
            "",
            "22,000 BTU Burner",
            "Busy cooks, rejoice: LG UltraHeat™ 22,000 BTU burners deliver every bit of the precision you love about gas with even more power. No more waiting around to bring water and other liquids to a boil.",
            "",
            "††As compared with other LG electric models."
        ]
    },
    {
        "category": "cooking",
        "subcategory": "lg range features",
        "feature": "Ergonomic, Tilted Front Controls",
        "definition": "Stop reaching over hot pans to adjust your cooktop elements. Sleek, angled controls put power and visibility at your fingertips while bringing an updated, stylish look to your kitchen."
    },
    {
        "category": "cooking",
        "subcategory": "lg built-in cooktop features",
        "feature": "ThinQ® Smart Technology",
        "definition": "Connect your cooktop with your smart LG range hood or over-the-range microwave via the ThinQ® app to enjoy the convenience of automatic pairing"
    },
    {
        "category": "cooking",
        "subcategory": "lg built-in cooktop features",
        "feature": "UltraHeat™ Burner (22,000 BTU)",
        "definition": "Spend less time waiting and more time cooking. The powerful UltraHeat™ 22,000 BTU Burner brings water and other liquids to a boil quickly."
    },
    {
        "category": "cooking",
        "subcategory": "lg built-in cooktop features",
        "feature": "EasyClean® Stainless Steel Cooktop",
        "definition": "Enjoy the professional look and feel of a modern cooktop that elevates the appearance of any kitchen. The specially-coated EasyClean® Stainless Steel, weighted LED knobs, and continuous cast-iron grates, deliver seamless style and premium form and function to your countertop."
    },
    {
        "category": "cooking",
        "subcategory": "lg built-in cooktop features",
        "feature": "Warming Zone",
        "definition": "This low-wattage element gives you control of temperatures so you can keep cooked foods warm until ready to serve."
    },
    {
        "category": "cooking",
        "subcategory": "lg built-in cooktop features",
        "feature": "Style and Design",
        "definition": "LG’s premium 30\" & 36\" cooktops offers the perfect harmony between style and convenience."
    },
    {
        "category": "cooking",
        "subcategory": "lg built-in cooktop features",
        "feature": "SmoothTouch™ Glass Controls",
        "definition": "Easy to use with just a touch. At a quick glance of the centralized electronic controls users can see which heating element is activated and the smooth surface easily wipes clean"
    },
    {
        "category": "cooking",
        "subcategory": "lg microwave features",
        "feature": "LG ThinQ® Technology",
        "definition": [
            "With the ThinQ® app, you can enjoy remote monitoring, automatically sync your microwave vent fans and lights with your Wi-Fi enabled LG range, adjust settings, set timers.",
            "*Select microwave features work with Alexa and Google Assistant."
        ]
    },
    {
        "category": "cooking",
        "subcategory": "lg microwave features",
        "feature": "Scan-to-Cook",
        "definition": "Change the way you cook with LG microwaves with ThinQ® technology. LG ThinQ’s Scan-to-Cook feature takes the guesswork out of frozen food meal prep. Simply scan the barcode on selected ready-made meals with the ThinQ® app to remotely set cooking time and power level."
    },
    {
        "category": "cooking",
        "subcategory": "lg microwave features",
        "feature": "Stay in Sync",
        "definition": "Connect your compatible Wi-Fi enabled LG microwave and range through the ThinQ® app to enjoy the convenience of automatic pairing. Your microwave's vent and light will automatically turn on and off when your range cooktop is turned on or off, so you won't have to lift a finger when cooking."
    },
    {
        "category": "cooking",
        "subcategory": "lg microwave features",
        "feature": "Sensor Cooking",
        "definition": "Eliminate the guesswork in cooking. Humidity-sensing technology determines when food is cooked and automatically turns off the microwave to help prevent over or undercooking your food."
    },
    {
        "category": "cooking",
        "subcategory": "lg microwave features",
        "feature": "EasyClean™ Interior",
        "definition": [
            "Spills? Splatters? Don’t sweat it. LG’s EasyClean® interior resists stains and buildup, so cleaning your microwave doesn’t have to be a chore. Simply wipe with a damp cloth— no chemicals, no scrubbing, no problem.",
            "*Heavy build-up may require additional manual effort."
        ]
    },
    {
        "category": "cooking",
        "subcategory": "lg microwave features",
        "feature": "ExtendaVent™ 2.0",
        "definition": "Reduce smoke and lingering cooking smells with LG’s enhanced ExtendaVent™ 2.0. Where most over-the-range microwaves only cover the rear of the cooktop, ExtendaVent™ 2.0 provides powerful ventilation over virtually the entire cooktop, back to front. That’s what we call clearing the air."
    },
    {
        "category": "dishwashers",
        "subcategory": "lg dishwasher features",
        "feature": "QuadWash® Pro",
        "definition": "Tackle post-dinner cleanup like a pro with the enhanced cleaning power of QuadWash® Pro. High-pressure jets with 38% more cleaning power*, spray dishes from multiple angles, while soaking them with over one million of microbubbles to help break down stubborn food residue and provide exceptional cleaning performance."
    },
    {
        "category": "dishwashers",
        "subcategory": "lg dishwasher features",
        "feature": "TrueSteam® Technology",
        "definition": "Virtually eliminate the need to pre-wash and reduce water spots by 50% with the newly-enhanced TrueSteam® system.* Powerful yet gentle, TrueSteam® enablesyou to clean everything from delicate stemware to pots and pans with the confidence each one will come out sparkling clean."
    },
    {
        "category": "dishwashers",
        "subcategory": "lg dishwasher features",
        "feature": "EasyRack® Plus",
        "definition": "The EasyRack® Plus system provides outstanding flexibility and convenience. It adjusts to just about any load of dishes to help ensure optimal cleaning performance. With one touch, you can change the hight of the upper rack to three different levels. Easy to adjust on-the-fly, this racking system can shift to handle any challenge your dishes serve up."
    },
    {
        "category": "dishwashers",
        "subcategory": "lg dishwasher features",
        "feature": "Black Stainless Steel Series",
        "definition": "Our new Black Stainless Steel Series elevates the traditional stainless with a deep, satin-smooth and sophisticated finish that also resists fingerprints, so it always looks its best."
    },
    {
        "category": "dishwashers",
        "subcategory": "lg dishwasher features",
        "feature": "Height Adjustable 3rd Rack",
        "definition": "The height adjustable 3rd rack gives you more space to fit everything from long flatware to small espresso cups."
    },
    {
        "category": "dishwashers",
        "subcategory": "lg dishwasher features",
        "feature": "LoDecibel® Quiet Operation 38dB",
        "definition": "LG's technological advances, like the Inverter Direct Drive motor and the advanced 3-stage filtration system, were designed with quiet in mind. At 38dB, this dishwasher is among the quietest dishwashers in its class."
    }
];

export const PRODUCT_DATA = [
    {
        "category": "signature",
        "subcategory": "front load washer",
        "title": "WM9500HKA",
        "subtitle": "LG SIGNATURE 5.8 cu. ft. Large Smart Wi-Fi Enabled Front Load Washer",
        "colors": "black stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStarMostEfficient"
        ],
        "upc": [
            "WM9500HKA (Black Stainless Steel) 048231017039",
            "DLEX9500K Electric (Black Stainless Steel) 048231017046",
            "DLGX9501K Gas (Black Stainless Steel) 048231017053",
            "WDP5K Pedestal (Black Stainless Steel) 048231018364",
            "WD205CK (Black Stainless Steel) 048231017121"
        ],
        "specSheetLink": "https://lg.widen.net/s/bqhxrshqd5/wm9500hka-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5.8 cu. ft. Ultra Large Capacity with NeveRust™ Stainless Steel Drum",
            "30\" Width",
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care",
            "Advanced Tier",
            "TurboWash® 2.0 Technology",
            "LG Steam Technology",
            "ColdWash™ Option",
            "6Motion™ Technology",
            "TrueBalance™ Anti-Vibration System",
            "SenseClean™",
            "Delay Wash (Up to 19 Hours)",
            "Easy Loading 10° TilTub™",
            "Direct Drive Motor with 10-Year Limited Warranty",
            "1,300 RPM",
            "14 Washing Programs",
            "5 Temperature Settings (All Cold Rinses)"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care",
            "Advanced Tier",
            "TurboWash® 2.0 Technology",
            "LG Steam Technology",
            "ColdWash™ Option",
            "6Motion™ Technology",
            "TrueBalance™ Anti-Vibration System",
            "SenseClean™",
            "Delay Wash (Up to 19 Hours)",
            "Easy Loading 10° TilTub™",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Most Efficient"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "On-Door Electronic Control Panel with LED and Full Touch Display",
            "Large Tinted Glass Door with On-Door Controls",
            "Extra Wide Door Opening",
            "Optional Matching Drawer Pedestal",
            "Optional SideKick™ Pedestal Washer (WD205CK)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "signature",
        "subcategory": "front load dryer",
        "title": "DLEX9500K / DLGX9501K",
        "subtitle": "LG SIGNATURE 9.0 cu. ft. Large Smart Wi-Fi Enabled Dryer with TurboSteam™",
        "colors": "black stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": [
            "DLEX9500K Electric (Black Stainless Steel) 048231017046",
            "DLGX9501K Gas (Black Stainless Steel) 048231017053",
            "WM9500HKA (Black Stainless Steel) 048231017039",
            "WDP5K Pedestal (Black Stainless Steel) 048231018364",
            "WD205CK (Black Stainless Steel) 048231017121"
        ],
        "specSheetLink": "https://lg.widen.net/s/9xbbflrbwc/dlex9500k-dlgx9501k-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "9.0 cu. ft. MEGA Capacity with NeveRust™ Stainless Steel Drum",
            "30\" Width",
            "14 Drying Programs",
            "5 Temperature Settings"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care",
            "TurboSteam® Technology",
            "SteamFresh™ Cycle",
            "Sensor Dry System",
            "Precise Temperature Control with Variable Heat Souce",
            "3 Minute Installation Check",
            "FlowSense™ Duct Clogging Indicator",
            "Wrinkle Care Option",
            "Anti-Bacterial Cycle",
            "Damp Dry Signal",
            "LoDecibel™ Quiet Operation"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "On-Door Electronic Control Panel with LED and Full Touch Display",
            "Large Tinted Glass Door with On-Door Controls",
            "Reversible Door",
            "Optional Matching Drawer Pedestal"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "signature",
        "subcategory": "pedestal washer",
        "title": "WD205CK",
        "subtitle": "LG SIGNATURE 29  30 LG SideKick Pedestal Washer",
        "colors": "black stainless steel",
        "logos": [],
        "upc": "WD205CK (Black Stainless Steel) 048231017121",
        "specSheetLink": "https://lg.widen.net/s/8xptfrf8dz/wd205ck-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "1.0 cu. ft. Capacity",
            "Compatible with select 29\" & 30\" Front Load Washers",
            "BPM Direct Drive Motor with 10-Year Limited Warranty",
            "700 RPM",
            "6 Washing Programs (Normal, Intimates, Hand Wash, Active Wear, Rinse+Spin, Tub Clean)",
            "3 Options (Warm Water, Extra Rinse, Child Lock)"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "3Motion Technology",
            "SmartDiagnosis™",
            "Child Lock"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Electronic Control Panel with Remote Control",
            "Transparent Tinted Glass Door Cover",
            "NeveRust™ Stainless Steel Drum"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "signature",
        "subcategory": "pedestal",
        "title": "WDP5K",
        "subtitle": "LG SIGNATURE Laundry Pedestal",
        "colors": "",
        "logos": [],
        "upc": "WDP5K (Black Stainless Steel) 048231018364",
        "specSheetLink": "https://lg.widen.net/s/ls2rtprkh2/wdp5k-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Elevates Appliance for Comfortable Loading and Unloading",
            "Extra Storage Space"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "signature",
        "subcategory": "specialty laundry",
        "title": "LUWM101HWA",
        "subtitle": "LG SIGNATURE Smart Wi-Fi Enabled WasherDryer Combo",
        "colors": "white",
        "logos": [
            "lgThinQ",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "LUWM101HWA (White) 048231020343",
        "specSheetLink": "https://lg.widen.net/s/plk6f9qqx8/luwm101hwa-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "2.8 cu. ft. Capacity",
            "24” Compact Washer / Dryer Combo"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "LG appliances featuring ThinQ® technology (Smart Wi-Fi Enabled)",
            "SmartDiagnosis™",
            "20-Year Warranty on Inverter Direct Drive Motor",
            "TurboWash® 2.0 Technology",
            "Inverter Heat Pump Drying",
            "Steam Technology",
            "Auto Dosing System",
            "Centum System",
            "Quick Circle User Interface"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Glass Touch Front Control Panel",
            "LCD Display",
            "NeveRust™ Stainless Steel Drum"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "signature",
        "subcategory": "pedestal washer",
        "title": "UWD1CW",
        "subtitle": "LG SIGNATURE SideKick Pedestal Washer",
        "colors": "white",
        "logos": [],
        "upc": "UWD1CW 195174006719",
        "specSheetLink": "https://lg.widen.net/s/8pzksr95f5/uwd1cw-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            ".07 cu. ft. Capacity",
            "Compatible with Washer/Dryer Combo (LUWM101HWA)",
            "Direct Drive Motor with 10-Year Limited Warranty",
            "700 RPM",
            "5 Washing Programs (Normal, Intimates, Hand Wash, Active Wear, Rinse+Spin)",
            "6 Options (Spin Only, Tub Clean, Warm Water, Extra, Rinse, Control Lock)"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "3Motion Technology",
            "SmartDiagnosis™",
            "Child Lock"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Electronic Control Panel with Dual LED Display",
            "NeveRust™ Stainless Steel Drum"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "signature",
        "subcategory": "dual fuel range",
        "title": "LUTD4919SN",
        "subtitle": "LG SIGNATURE 7.3 cu. ft. Smart Wi-Fi Enabled Dual Fuel Double Oven Range with ProBake Convection",
        "colors": "textured steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "LUTD4919SN (Textured Steel) 048232335408",
        "specSheetLink": "https://lg.widen.net/s/qkhmxbszjh/lutd4919sn-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "7.3 cu. ft. Total Capacity (3.0 cu. ft. / 4.3 cu. ft.)",
            "5 Sealed Gas Cooktop Burners (1 Oval)",
            "Griddle Plate",
            "Wok Grate"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® App with ThinQ Care",
            "ProBake Convection®",
            "EasyClean® Technology",
            "Self Clean",
            "UltraHeat™ 18,500 BTU Burner",
            "Infrared Heating™"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Stainless Steel Touch Control",
            "VFD Scrolling Display",
            "3 Standard Racks (1 Gliding) with 6 Positions",
            "WideView™ Window",
            "Brilliant Blue Interior"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "signature",
        "subcategory": "french door refrigeration",
        "title": "URNTS3106N",
        "subtitle": "LG SIGNATURE 31 cu. ft. Smart Wi-Fi Enabled InstaView Door-in-Door Refrigerator",
        "colors": "textured steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStarMostEfficient"
        ],
        "upc": "URNTS3106N (Textured Steel) 048231805902",
        "specSheetLink": "https://lg.widen.net/s/vwdfmg6rbc/urnts3106n-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "30.8 cu. ft.",
            "10-Year Limited Manufacturer’s Warranty on Compressor",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™ System",
            "ThinQ® App with ThinQ Care",
            "Smart Cooling Plus System",
            "Auto Open Door™",
            "Wi-Fi Eclipse Display",
            "Auto Open Drawer™ (Freezer)",
            "Custom Chill™ Pantry",
            "FRESHShield™ Cooling",
            "LUMIShelf™",
            "Platinum Fresh Wall",
            "Multi-Air Flow",
            "Electronic Temperature Controls",
            "Integrated Ice & Water Dispenser® with Measured Fill",
            "Premium Water Filtration System",
            "Door Alarm",
            "LoDecibel™ Quiet Operation",
            "Fresh Filter"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "InstaView® Door-in-Door®",
            "Textured Steel™ Finish",
            "Slim SpacePlus® Ice System",
            "Flat Surface Doors with Pocket Handles",
            "Hidden Hinges",
            "Premium LED Interior Light",
            "4 Split Tempered Glass Shelves",
            "EasyReach® Bin",
            "6 Refrigerator Door Bins",
            "6 Freezer Drawers / Shelves",
            "6 Freezer Door Bins / 2 Piece"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "signature",
        "subcategory": "french door refrigeration",
        "title": "URNTC2306N",
        "subtitle": "LG SIGNATURE 23 cu. ft. Smart Wi-Fi Enabled InstaView Door-in-Door Counter-Depth Refrigerator",
        "colors": "textured steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStarMostEfficient"
        ],
        "upc": "URNTC2306N (Textured Steel) 048231805919",
        "specSheetLink": "https://lg.widen.net/s/6wc9jp8wgl/urntc2306n-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "22.8 cu. ft.",
            "Counter Depth",
            "10-Year Limited Manufacturer’s",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™ System",
            "ThinQ® App with ThinQ Care",
            "Smart Cooling Plus System",
            "Auto Open Door™",
            "Wi-Fi Eclipse Display",
            "Auto Open Drawer™ (Freezer)",
            "Custom Chill™ Pantry",
            "FRESHShield™ Cooling",
            "LUMIShelf™",
            "Platinum Fresh Wall",
            "Multi-Air Flow",
            "Electronic Temperature Controls",
            "Integrated Tall Ice & Water Dispenser® with Measured Fill",
            "Premium Water Filtration System",
            "Door Alarm",
            "LoDecibel™ Quiet Operation",
            "Fresh Filter"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "InstaView® Door-in-Door®",
            "Textured Steel™ Finish",
            "Slim SpacePlus® Ice System",
            "Flat Surface Doors with Pocket Handles",
            "Hidden Hinges",
            "Premium LED Interior Light",
            "4 Split Tempered Glass Shelves",
            "EasyReach® Bin",
            "6 Refrigerator Door Bins",
            "6 Freezer Drawers / Shelves",
            "6 Freezer Door Bins / 2 Piece"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "signature",
        "subcategory": "wine cellar refrigerator",
        "title": "URETC1408N",
        "subtitle": "LG SIGNATURE 15.3 cu. ft. Wine Cellar Counter Depth Refrigerator",
        "colors": "textured steel",
        "logos": [
            "lgThinQ",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "URETC1408N (Textured Steel) 048231805926",
        "specSheetLink": "https://lg.widen.net/s/mqq8vptk8d/uretc1408n-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "15.3 cu. ft.",
            "Counter Depth",
            "10-Year Limited Manufacturer’s Warranty on Compressor"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™ System",
            "LG appliances featuring ThinQ® technology (Smart Wi-Fi Enabled)",
            "Smart Cooling Plus System",
            "Auto Open Door™",
            "Wi-Fi Eclipse Display",
            "Auto Open Drawer™ (Freezer)",
            "LUMIShelf™",
            "Platinum Fresh Wall",
            "Multi-Air Flow",
            "Electronic Temperature Controls",
            "Door Alarm",
            "Fresh Filter"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "InstaView®",
            "Textured Steel™ Finish",
            "Flat Surface Doors with Pocket Handles",
            "Hidden Hinges",
            "Premium LED Interior Light",
            "65 Wine Bottle Capacity",
            "5 Refrigerator Sliding Wine Shelves",
            "2 Freezer Drawers"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "signature",
        "subcategory": "dishwasher",
        "title": "LUDP8908SN",
        "subtitle": "LG SIGNATURE Top Control Smart Wi-Fi Enabled Dishwasher with QuadWash",
        "colors": "textured steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStarMostEfficient"
        ],
        "upc": "LUDP8908SN (Textured Steel) 048231339896",
        "specSheetLink": "https://lg.widen.net/s/krpjtgq98p/ludp8908sn-spec-sheet",
        "videos": [
            "https://youtu.be/ehNgbnUYANI",
            "https://youtu.be/Baj92O7Y6Rs"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "15 Place Settings",
            "10 Wash Cycles",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care",
            "TrueSteam® Technology",
            "QuadWash®",
            "Tub Light",
            "NeveRust™ Stainless Steel Steel Tub",
            "Slim Direct Drive Motor",
            "EasyRack® Plus",
            "38 dBA LoDecibel® Quiet Operation",
            "Auto Cycle",
            "Dual Control™ Cycle",
            "Half Wash Mode",
            "Hybrid Condensing Drying System"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Textured Steel™ Finish",
            "Metal Touch Control Panel with LED Display",
            "Matching Commercial Handle",
            "Height Adjustable 3rd Rack",
            "Glide Rail",
            "Wheel Bearing (Lower)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "studio",
        "subcategory": "washer dryer combo",
        "title": "SWWE50N3 / SWWG50N3",
        "subtitle": "Front Load 5.0 cu. ft. Washer and 7.4 cu. ft. Dryer Wash Tower",
        "colors": "noble steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStarMostEfficient",
            "2yrWarrantyPartsLabor"
        ],
        "upc": [
            "SWWE50N3 (Noble Steel) 195174054413",
            "SWWG50N3 (Noble Steel) 195174054420"
        ],
        "specSheetLink": "https://lg.widen.net/s/nsk7sdwbd9/swwe50n3-swwg50n3-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5.0 cu. ft. Front Load Washer",
            "7.4 cu. ft. Front Load Dryer Capacity",
            "NeveRust™ Stainless Steel Drum",
            "12 Washing Programs & 18 Options",
            "12 Drying Programs & 14 Options",
            "2 Year Parts & Labor Limited Warranty",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® App with ThinQ Care",
            "Smart Diagnosis",
            "AAFA Certified",
            "TurboSteam™ Technology",
            "Advanced Washing and Drying with TurboWash™ 360° and Allergiene™",
            "Built-In Intelligence with AI Fabric Sensor"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Noble Steel Finish",
            "Tinted Round Tempered Glass Door",
            "Single Unit Wash Tower™ Design",
            "Touch Electronic Center Control® Panel with LCD Display"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "studio",
        "subcategory": "styler steam closet",
        "title": "S5MSB",
        "subtitle": "Styler Steam Clothing Care System with TrueSteam",
        "colors": "black tinted mirror",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "2yrWarrantyPartsLabor"
        ],
        "upc": "S5MSB (Black Tinted Mirror) 048231028677",
        "specSheetLink": "https://lg.widen.net/s/lkxxpqgmtk/s5msb-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Sanitize",
            "Plug & Go Installation",
            "Functions as a dehumidifier",
            "Dryer Sheet Compartment",
            "Completes your at-home laundry care system",
            "Gentle Dry",
            "Gentle Dry with Pants Crease Care",
            "2 Year Parts & Labor Limited Warranty"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care",
            "Asthma & Allergy Friendly® CERTIFIED Sanitizer",
            "Intertek Certified",
            "TrueSteam®",
            "Remote Start and Cycle Monitoring",
            "Energy Monitoring",
            "Perfect laundry companion, ready to refresh & deodorize"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Black Tinted Mirror finish",
            "Reversible Door",
            "3 LED Interior Lights",
            "Large capacity with Mirror finish for a full-length reflection"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "studio",
        "subcategory": "french door refrigeration",
        "title": "SRFB27S3",
        "subtitle": "26.5 cu. ft. Counter Depth 3-Door French Door Refrigerator",
        "colors": [
            "stainless steel",
            "essence white"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStarMostEfficient"
        ],
        "upc": [
            "SRFB27S3 (PrintProof™ Stainless Steel) 195174054215",
            "SRFB27W3 (Essence White) 195174070116"
        ],
        "specSheetLink": "https://lg.widen.net/s/xttbc8ptwg/srfb27_3-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "26.5 cu. ft. Total Capacity",
            "17.9 cu. ft. Refrigerator Capacity",
            "Counter Depth",
            "Internal Water Dispenser",
            "Glide N’ Serve™ Drawer",
            "2 Year Parts & Labor Limited Warranty",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Smart Diagnosis",
            "ThinQ® App with ThinQ Care",
            "Door Cooling+"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "PrintProof™ Stainless Steel Finish",
            "Fingerprint & Smudge Resistant Exterior",
            "Premium LED"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "studio",
        "subcategory": "french door refrigeration",
        "title": "SRFVC2416S",
        "subtitle": "24 cu. ft. InstaView Door-in-Door",
        "colors": "stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStarMostEfficient"
        ],
        "upc": "SRFVC2416S (PrintProof™ Stainless Steel) 195174024485",
        "specSheetLink": "https://lg.widen.net/s/pddcjxjx8s/srfvc2416s-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "24 cu. ft. Total Capacity",
            "15.4 cu. ft. Refrigerator Capacity",
            "Counter Depth",
            "Measured Fill™",
            "Child Lock",
            "Glide N’ Serve™ Drawer",
            "2 Year Parts & Labor Limited Warranty",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care",
            "Smart Cooling Plus™ System",
            "Dual Ice Maker with Craft Ice™",
            "Door Cooling+"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Flat Door Design",
            "PrintProof™ Stainless Steel Finish",
            "Fingerprint & Smudge Resistant Exterior",
            "Micro Surface LED",
            "InstaView® Door-in-Door®"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "studio",
        "subcategory": "side by side refrigeration",
        "title": "SRSXB2622S",
        "subtitle": "42 Built-In Side-By-Side Refrigerator",
        "colors": "stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStarMostEfficient"
        ],
        "upc": "SRSXB2622S (Stainless Steel) 195174024478",
        "specSheetLink": "https://lg.widen.net/s/w9vxbb2qn7/srsxb2622s-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "25.6 cu. ft. Largest Capacity (in 42” Width Built-in Refrigerator Category*)",
            "Stainless Steel Tall Ice & Water Dispenser",
            "2 Year Parts & Labor Limited Warranty",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Pro-Style Design with Seamless Finish",
            "in Every Edge and Corner",
            "Versatile Interior Design",
            "Sliding Door Baskets, Removable",
            "Drawers, Slam-Proof™ Drawers Soft Closing Door"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "studio",
        "subcategory": "electric range",
        "title": "LSIS6338FE",
        "subtitle": "6.3 cu. ft. Smart Wi-Fi Induction Slide-in Range with ProBake Convection and EasyClean",
        "colors": [
            "printproof stainless steel",
            "essence white"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStarMostEfficient"
        ],
        "upc": [
            "LSIS6338FE (PrintProof™ Stainless Steel) 048231347464",
            "LSGS6338N (Essence White) 195174070031"
        ],
        "specSheetLink": "https://lg.widen.net/s/tz2vxx5cbh/lsis6338f-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "6.3 cu. ft. Large Oven Capacity",
            "Storage Drawer",
            "ProBake Convection™ System",
            "2 Heavy-Duty Racks and Gliding Rack, Air Fry Rack, and 7 Rack positions",
            "12 Hr Automatic Shut Off",
            "Induction Cooktop",
            "2 Year Parts & Labor Limited Warranty"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® App",
            "ProBake Convection®",
            "EasyClean®",
            "Self-Cleaning",
            "Air Sous-Vide"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "LED Display",
            "PrintProof™ Stainless Steel Finish",
            "Matching High End Knobs",
            "GoCook Smart Oven Light",
            "Glass Touch Controls",
            "InstaView® Window (WideView™)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "studio",
        "subcategory": "electric range",
        "title": "LSES6338F",
        "subtitle": "6.3 cu. ft. Smart Wi-Fi Electric Slide-in Range with ProBake Convection and EasyClean",
        "colors": [
            "stainless steel",
            "essence white"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "sidechef"
        ],
        "upc": [
            "LSES6338F (Stainless Steel) 195174020593",
            "LSES6338N (Essence White) 195174070093"
        ],
        "specSheetLink": "https://lg.widen.net/s/dhgkxrhbz7/lses6338_-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "6.3 cu. ft. Large Capacity Oven",
            "Soft Close Range Door",
            "Storage Drawer",
            "LG Exclusive 4-Mode True Convection",
            "2 Year Parts & Labor Limited Warranty"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care",
            "ProBake Convection®",
            "EasyClean®",
            "Air Fry Setting",
            "Air Sous-Vide"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "LED / White Display",
            "InstaView® Window (WideView)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "studio",
        "subcategory": "dual fuel range",
        "title": "LSDS6338F",
        "subtitle": "6.3 cu. ft. Smart Wi-Fi Dual Fuel Slide-in Range with ProBake Convection and EasyClean",
        "colors": "stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "sidechef"
        ],
        "upc": "LSDS6338F (Stainless Steel) 195174020579",
        "specSheetLink": "https://lg.widen.net/s/xm9vfjf5bn/lsds6338f-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "6.3 cu. ft. Large Capacity Oven",
            "Soft Close Range Door",
            "Storage Drawer",
            "5 High Performance Sealed Burners",
            "2 Year Parts & Labor Limited Warranty"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® with Innit and Sidechef\b",
            "ProBake Convection®",
            "EasyClean®",
            "Air Fry Setting",
            "Air Sous-Vide"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "LED / White Display",
            "InstaView® Window (WideView)",
            "PrintProof™ Finish"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "studio",
        "subcategory": "gas range",
        "title": "LSGS6338F",
        "subtitle": "6.3 cu. ft. Smart Wi-Fi Gas Slide-in Range with ProBake Convection and EasyClean",
        "colors": [
            "stainless steel",
            "essence white"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "sidechef"
        ],
        "upc": [
            "LSGS6338F (Stainless Steel) 195174020722",
            "LSGS6338N (Essence White) 195174070086"
        ],
        "specSheetLink": "https://lg.widen.net/s/wplgdxwx6w/lshd3089bd-lshd3689bd-lshd3080st-lshd3680st-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Convection Technology",
            "Storage Drawer",
            "Soft Close Door",
            "Child Lock",
            "LG Exclusive 4-Mode True Convection",
            "2 Year Parts & Labor Limited Warranty"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® App with ThinQ Care\b",
            "ProBake Convection®",
            "EasyClean® Interior",
            "Air Fry Setting",
            "Air Sous-Vide",
            "Scan-to-Cook",
            "EasyClean® Cooktop"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "WideView™ Window",
            "PrintProof™ Finish",
            "Back Lit Lighting",
            "Glass Touch Controls",
            "Pocket Handle"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "studio",
        "subcategory": "chimney hood",
        "title": "LSHD3080ST / LSHD3680ST",
        "subtitle": "30 36 Wall Mount Chimney Hood",
        "colors": "stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": [
            "LSHD3080ST (30\" Stainless Steel) 048231339841",
            "LSHD3680ST (36\" Stainless Steel) 048231339858"
        ],
        "specSheetLink": "https://lg.widen.net/s/d9pdr2nk9b/lsgs6338_-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Available in 30\" and 36\" Widths",
            "22 1/16\" Depth",
            "5” Low-Profile Body",
            "Accomodates Ceilings up to 9' 6\"",
            "IR Touch Controls",
            "6” Round Vertical Internal Blower",
            "2 Year Parts & Labor Limited Warranty"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Wi-Fi Capabilities",
            "UL Listed",
            "RoHS Compliant"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Dual Level LED Lighting",
            "2 Decorative Mesh Dishwasher-Safe Filters",
            "Fingerprint & Smudge Resistant Exterior"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "studio",
        "subcategory": "induction cooktops",
        "title": "CBIS3618B",
        "subtitle": "36 Induction Cooktops",
        "colors": "black",
        "logos": [
            "lgThinQ",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": "CBIS3618B 195174045732",
        "specSheetLink": "https://lg.widen.net/s/kjfvddkwhm/cbis3618b-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Induction Cooktops with 5 Burners (Flexible Burner / 1 Dual / 2 Single)",
            "Flex Cooking Zone",
            "Power Boost",
            "3000W (Boost 4900W) Center Burner",
            "Child Lock",
            "7” TFT - LCD Display",
            "ThinQ® Technology"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "studio",
        "subcategory": "electric cooktops",
        "title": "LSCE305ST / LSCE365ST",
        "subtitle": "30  36 Electric Cooktops",
        "colors": "stainless steel + black",
        "logos": [],
        "upc": [
            "LSCE305ST (Stainless Steel + Black) 048231316620",
            "LSCE365ST (Stainless Steel + Black) 048231316637"
        ],
        "specSheetLink": "https://lg.widen.net/s/8rtcf8zxrj/lsce305st-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Electric Cooktops with 5 Elements",
            "Steady Heat Elements",
            "Double RF 9”/6”, Double LR 8”/5”",
            "Radiant Elements (LSCE305ST)",
            "Triple 12”/9”/6”, Double 9”/6” Radiant Elements (LSCE365ST)",
            "Premium Stainless Steel Trim",
            "SmoothTouch™ Glass Controls",
            "Bridge Element – 7” (LSCE365ST)"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "studio",
        "subcategory": "induction cooktops",
        "title": "CBGS3028S / CBGS3628S",
        "subtitle": "30  36 Gas Cooktops",
        "colors": [
            "stainless steel",
            "essence white"
        ],
        "logos": [],
        "upc": [
            "CBGS3628S 195174040980",
            "CBGS3628S 195174040980",
            "CBGS3028N (Essence White) 195174070147",
            "CBGS3628N (Essence White) 195174070154"
        ],
        "specSheetLink": "https://lg.widen.net/s/crpcsq2r7s/cbgs3028s-cbgs3628s-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Gas Cooktops with 5 Sealed Burners (2 Solid Brass)",
            "30\" / 36\" Options",
            "UltraHeat™ Dual Burner",
            "24000 BTU Center Burner",
            "3 Heavy-Duty Continuous Cast Iron Dishwasher Safe Grates",
            "EasyClean®",
            "Premium Stainless Steel Trim",
            "White LED Backlit Knobs",
            "Pro-Style Design"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "studio",
        "subcategory": "electric cooktops",
        "title": "MHES1738F",
        "subtitle": "1.7 cu. ft. Wi-Fi Enabled Over-the-Range Convection Microwave Oven with Air Fry",
        "colors": [
            "printproof stainless steel",
            "essence white"
        ],
        "logos": [
            "lgThinQ",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": [
            "MHES1738F (PrintProof™ Stainless Steel) 195174025642",
            "MHES1738N (Essence White) 195174070062"
        ],
        "specSheetLink": "https://lg.widen.net/s/65z6fzhsdr/mhes1738_-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Convection Technology",
            "Child Lock",
            "LG Exclusive 4-Mode True Convection",
            "2 Year Parts & Labor Limited Warranty"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology (Wi-Fi Enabled)",
            "EasyClean® Interior",
            "Air Fry Setting",
            "Scan-to-Cook",
            "Steam Cooking"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "WideView™ Window",
            "PrintProof™ Finish",
            "Back Lit Lighting",
            "Glass Touch Controls",
            "Pocket Handle"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "studio",
        "subcategory": "built-in wall oven",
        "title": "WSES4728F",
        "subtitle": "4.7 cu. ft. Single Built-In Wall Oven",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "WSES4728F (PrintProof™ Stainless Steel) 195174022832",
        "specSheetLink": "https://lg.widen.net/s/dhcrfr6r86/wses4728f-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "4.7 cu. ft. Large Capacity",
            "Soft Close Door",
            "Optional Flush Installation",
            "LG Exclusive 4-Mode True Convection",
            "2 Year Parts & Labor Limited Warranty"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "7” Color LCD Touch Display",
            "InstaView® Window (WideView)",
            "PrintProof™ Finish"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care",
            "EasyClean®",
            "Air Fry Setting",
            "Steam Sous-Vide"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "studio",
        "subcategory": "double built-in wall oven",
        "title": "WDES9428F",
        "subtitle": "4.7 4.7 cu. ft. Double Built-In Wall Oven",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "WDES9428F (PrintProof™ Stainless Steel) 195174022825",
        "specSheetLink": "https://lg.widen.net/s/9tw66pfnr7/wdes9428f-spec-sheet",
        "videos": "https://youtu.be/V_bkelQQD0E",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Large Double Oven Capacity (4.7 cu. ft. in both ovens)",
            "Soft Close Door",
            "Optional Flush Installation",
            "LG Exclusive 4-Mode True Convection",
            "2 Year Parts & Labor Limited Warranty"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "7” Color LCD Touch Display",
            "PrintProof™ Finish",
            "InstaView® Window (WideView)"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care",
            "EasyClean®",
            "Air Fry Setting",
            "Steam Sous-Vide"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "studio",
        "subcategory": "combination double wall oven",
        "title": "WCES6428F",
        "subtitle": "1.7 4.7 cu. ft. STUDIO Smart Wi-Fi Enabled Combination Double Wall Oven",
        "colors": "stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "sidechef"
        ],
        "upc": "WCES6428F (PrintProof™ Stainless Steel) 195174024133",
        "specSheetLink": "https://lg.widen.net/s/z2pcgxq9dg/wces6428f-spec-sheet",
        "videos": "https://youtu.be/V_bkelQQD0E",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "6.4 cu. ft. (Upper & Lower) Combination Double Oven Capacity",
            "Soft Close Door",
            "Optional Flush Installation",
            "LG Exclusive 4-Mode True Convection",
            "2 Year Parts & Labor Limited Warranty"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® with Innit and SideChef",
            "EasyClean®",
            "Air Fry Setting",
            "Steam Sous-Vide"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "7” TFT LCD Glass Touch Display",
            "PrintProof™ Finish",
            "InstaView® Window (WideView)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "studio",
        "subcategory": "dishwasher",
        "title": "SDWB24S3",
        "subtitle": "Top Control Wi-Fi Enabled Dishwasher",
        "colors": [
            "stainless steel",
            "essence white"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": [
            "SDWB24S3 (Stainless Steel) 195174054734",
            "SDWB24W3 (Essence White) 195174070130"
        ],
        "specSheetLink": "https://lg.widen.net/s/jfpplmw9xt/sdwb24_3-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "LoDecibel® Quiet Operation (40 dBA)",
            "Height-Adjustable 3rd Rack",
            "NeveRust® Stainless Steel Tub",
            "10 Wash Cycles & 8 Options",
            "2 Year Parts & Labor Limited Warranty",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® App with ThinQ Care",
            "1-Hour Wash & Dry Cycle\b",
            "TrueSteam® Technology",
            "QuadWash® Pro",
            "Dynamic Heat Dry™",
            "SenseClean™ Wash System",
            "EasyRack® Plus System"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": "LED Time Remaining Indicator",
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "studio",
        "subcategory": "dishwasher",
        "title": "SDWD24P3",
        "subtitle": "Top Control Wi-Fi Enabled Panel Ready Dishwasher",
        "colors": "",
        "logos": "energyStarMostEfficient2023",
        "upc": "SDWD24P3 195174053126",
        "specSheetLink": "https://lg.widen.net/s/wb89ltr97q/sdwd24p3-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "LoDecibel® Quiet Operation (45 dBA)",
            "Height-Adjustable 3rd Rack",
            "NeveRust® Stainless Steel Tub",
            "10 Wash Cycles & 8 Options",
            "2 Year Parts & Labor Limited Warranty",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "TrueSteam® Technology",
            "QuadWash®",
            "SenseClean™ Wash System",
            "EasyRack® Plus System"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Panel Ready",
            "LED Time Remaining Indicator"
        ],
        "specTitle4": "Fits Panels Sized:",
        "specList4": [
            "23-1/4\" to 23-3/4\" wide",
            "28-3/8\" to 30-11/16\" high",
            "5/8\" to 7/8\" thick",
            "Between 5.5 and 24.2 lbs."
        ],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "all in one",
        "title": "WM6998H_A",
        "subtitle": "Ventless 5.0 cu. ft. Mega Capacity Smart WashCombo All-in-One WasherDryer with Inverter HeatPump Technology and Direct Drive Motor",
        "colors": [
            "black steel",
            "graphite steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStarMostEfficient",
            "washerDryerAllOneCombo"
        ],
        "upc": [
            "WM6998HBA (Black Steel) 195174070161",
            "WM6998HVA (Graphite Steel) 195174077313"
        ],
        "specSheetLink": "https://lg.widen.net/s/vz2zh2mdbr/wm6998h_a_2023_spec_sheet",
        "videos": [
            "https://youtu.be/fb_J0TqRaRQ",
            "https://youtu.be/y8VUaqpaFc4",
            "https://youtu.be/w9xtkGWQJHQ"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5.0 cu. ft. Mega Capacity",
            "2-in-1 Washer/Dryer Combo",
            "Ventless Inverter Heat Pump",
            "Inverter Direct Drive Washing and Drying Technology with 10-Year Limited Warranty",
            "Built-In Intelligence (AI Fabric, Weight & Soil Level Sensors )",
            "Advanced Washing (TurboWash™ 360° / Allergiene™ Wash Cycle)",
            "ezDispense® Automatic Dispenser",
            "ezLintFilter",
            "Auto Cleaning Condenser™ & Lint Filter Indicator",
            "25 Washing/Drying Programs",
            "5 Tempurature Settings",
            "LoDecibel™ Quiet Operation",
            "NeveRust™ Stainless Steel Drum Closet Depth",
            "1300 Max RPM"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Inverter Heat Pump + Direct Drive Drying Technology",
            "Precise Temerature Control and AI Drying",
            "ThinQ® Technology featuring ThinQ Care and ThinQ UP",
            "TrueBalance™ Anti-Vibration System",
            "Tub Clean Coach",
            "Wrinkle Care Option",
            "TurboSteam™ Technology",
            "Precise Temerature Control and AI Drying"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Sleek Ventless Design",
            "Digital Dial Control with LCD Display and Touch Buttons",
            "Stainless Steel Rimmed Glass Door with Tinted Tempered Glass Cover",
            "Optional Matching ADA Riser Pedestal (WDPS2B, WDPS2V)",
            "Optional Matching Drawer Pedestal (WDP6B, WDP6V)",
            "Optional Sidekick™ Pedestal Washer (WD300CB, WD300CV)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "https://lg.widen.net/s/xmlbpjcltd/lg-washcombo-all-in-one-cycle-guide-fin_lo"
    },
    {
        "category": "laundry",
        "subcategory": "front load washer",
        "title": "WM3400CW",
        "subtitle": "4.5 cu. ft. Front Load Washer",
        "colors": "white",
        "logos": "energyStarMostEfficient",
        "upc": [
            "WM3400CW Washer (White) 048231026772",
            "DLE3400W Electric Dryer (White) 048231028035",
            "DLG3401W Gas Dryer (White) 048231028042"
        ],
        "specSheetLink": "https://lg.widen.net/s/lzzcmdbrnj/wm3400cw-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "4.5 cu. ft. Capacity with NeveRust™ Stainless Steel Drum",
            "Direct Drive Motor with 10-Year Limited Warranty",
            "950 RPM",
            "8 Washing Programs",
            "6 Washing Options"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ColdWash™ Option",
            "TrueBalance™ Anti-Vibration System",
            "SenseClean™",
            "Delay Wash (Up to 19 Hours)",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR Most Efficient"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Electronic Control Panel with LED Display and Dial-A-Cycle™",
            "Touch Buttons",
            "NeveRust™ Stainless Steel Washplate",
            "Optional Matching Drawer Pedestal (WDP6W)",
            "Optional Sidekick™ Pedestal Washer (WD300CW)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "front load matching dryer",
        "title": "DLE3400W / DLG3401W",
        "subtitle": "7.4 cu. ft. Dryer with Sensor Dry Technology",
        "colors": "white",
        "logos": "energyStar",
        "upc": [
            "DLE3400W Electric Dryer (White) 048231028035",
            "DLG3401W Gas Dryer (White) 048231028042",
            "WM3400CW Washer (White) 048231026772"
        ],
        "specSheetLink": "https://lg.widen.net/s/rwtmznjnjp/dle3400w-dlg3401w-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "7.4 cu. ft. Ultra Large Capacity with Aluminized Alloy Steel Drum",
            "8 Drying Programs",
            "6 Drying Options",
            "27\" Width"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "Sensor Dry System",
            "Precise Temperature Control with Variable Heat Souce",
            "3 Minute Installation Check",
            "FlowSense™ Duct Clogging Indicator",
            "Wrinkle Care Option",
            "Damp Dry Signal",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Electronic Control Panel with LED Display and Dial-A-Cycle™",
            "Aluminized Alloy Steel Drum",
            "Optional Matching Drawer Pedestal (WDP6W)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "front load washer",
        "title": "WM3470C_",
        "subtitle": "5.0 cu. ft. Mega Capacity Front Load Washer",
        "colors": [
            "middle black",
            "white"
        ],
        "logos": "energyStarMostEfficient",
        "upc": [
            "WM3470CM (Middle Black) 195174048740",
            "WM3470CW (White) 195174048375"
        ],
        "specSheetLink": "https://lg.widen.net/s/2dp6dhfvpw/wm3470c_-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5.0 cu. ft. Mega Capacity with NeveRust® Stainless Steel Drum",
            "Direct Drive Motor with 10-Year Limited Warranty",
            "1,300 RPM"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Smart Diagnosis",
            "Cold Wash Option",
            "TrueBalance® Anti-Vibration System",
            "6Motion™ Technology",
            "Cold Wash Option",
            "8 Washing Programs",
            "8 Washing Options",
            "5 Temperature Settings",
            "Closet Depth",
            "Delay Wash (Up to 19 Hours)",
            "LoDecibel® Quiet Operation",
            "ENERGY STAR Most Efficient"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Electronic Control Panel with LED Display and Dial-A-Cycle®",
            "Touch Buttons",
            "NeveRust® Stainless Steel Drum",
            "Optional Matching Drawer Pedestal (WDP6_)",
            "Optional Sidekick™ Pedestal Washer (WD300CW - White Only)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "front load matching dryer",
        "title": "DLE3470_ / DLG3471_",
        "subtitle": "7.4 cu. ft. Dryer with Sensor Dry Technology",
        "colors": [
            "middle black",
            "white"
        ],
        "logos": "energyStar",
        "upc": [
            "DLE3470M (Middle Black) 195174048627",
            "DLG3471M (Middle Black) 195174048634",
            "DLE3470W (White) 195174048917",
            "DLG3471W (White) 195174049976"
        ],
        "specSheetLink": "https://lg.widen.net/s/dhwkvrf5dj/dle3470_--dlg3471_-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "7.4 cu. ft. Ultra Large Capacity with Aluminized Alloy Steel Drum",
            "8 Drying Programs",
            "7 Drying Options",
            "3 Temperature Settings",
            "Closet Depth"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Electronic Control Panel with LED Display and Dial-A-Cycle®",
            "Aluminized Alloy Steel Drum",
            "Optional Matching Drawer Pedestal (WDP6_)"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Smart Diagnosis",
            "Sensor Dry System",
            "Precise Temperature Control with Variable Heat Souce",
            "3 Minute Installation Check",
            "FlowSense® Duct Clogging & Lint Filter Indicators",
            "Wrinkle Care Option",
            "Damp Dry Signal",
            "LoDecibel® Quiet Operation",
            "ENERGY STAR® Certified"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "front load washer",
        "title": "WM4000H_A",
        "subtitle": "4.5 cu. ft. Front Load Washer with TurboWash 360 and Built-In Intelligence",
        "colors": [
            "white",
            "black steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStarMostEfficient",
            "rated1FrontLoadWasher"
        ],
        "upc": [
            "WM4000HWA (White) 048231028288",
            "WM4000HBA (Black Steel) 048231028271",
            "DLEX4000W (White) 048231028370",
            "DLGX4001W (White) 048231028387",
            "DLEX4000B (Black Steel) 048231028356",
            "DLGX4001B (Black Steel) 048231028363"
        ],
        "specSheetLink": "https://lg.widen.net/s/zcvk22hgcd/wm4000h_a-spec-sheet",
        "videos": "https://youtu.be/4gEBcTrY_Po",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "4.5 cu. ft. Ultra Capacity with NeveRust™ Stainless Steel Drum",
            "Direct Drive Motor with 10 Year Warranty",
            "1300 Max RPM",
            "12 Washing Cycles",
            "5 Temperature Settings",
            "Closet Depth"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care",
            "AAFA Certified Allergiene™ Cycle",
            "TurboWash™ 360 Technology",
            "6Motion™ Technology",
            "LG Steam Technology",
            "ColdWash™ Option",
            "TrueBalance™ Anti-Vibration System",
            "LoadSense",
            "Tub Clean Coach",
            "CEE Tier 2",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR Most Efficient"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Upfront Electronic Panel with Dual LED Display and Dial-A-Cycle™",
            "Tempered Glass Door with Rose Gold Accents",
            "Stackable with Matching Dryer (Stacking Kit Sold Separately)",
            "Optional Matching Drawer Pedestal (WDP6_)",
            "Optional Sidekick™ Pedestal Washer (WD300C_)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "rated1FrontLoadWasherBadge"
    },
    {
        "category": "laundry",
        "subcategory": "front load matching dryer",
        "title": "DLEX4000_ / DLGX4001_",
        "subtitle": "7.4 cu. ft. Front Load Dryer with TurboSteam and Built-In Intelligence",
        "colors": [
            "white",
            "black steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "rated1ElectricDryer"
        ],
        "upc": [
            "WM4000HWA (White) 048231028288",
            "WM4000HBA (Black Steel) 048231028271",
            "DLEX4000W (White) 048231028370",
            "DLGX4001W (White) 048231028387",
            "DLEX4000B (Black Steel) 048231028356",
            "DLGX4001B (Black Steel) 048231028363"
        ],
        "specSheetLink": "https://lg.widen.net/s/fnzbmw8qbq/dlex4000_-dlgx4001_-spec-sheet",
        "videos": [
            "https://youtu.be/JAWzjvJaJzc",
            "https://youtu.be/w9xtkGWQJHQ"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "7.4 cu. ft. Ultra Large Capacity",
            "12 Drying Cycles",
            "5 Temperature Settings"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® App with ThinQ Care",
            "TurboSteam™",
            "Precise Temperature with Variable Heat Source",
            "AI Fabric Sensor / Smart Pairing™",
            "FlowSense™ Duct Clogging and Lint Filter Indicators",
            "Closet Depth",
            "Reversible Door",
            "Wrinkle Care Option",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Upfront Electronic Panel with Dual LED Display and Dial-A-Cycle™",
            "Tempered Glass Door with Rose Gold Accents",
            "Stackable with Matching Washer (Stacking Kit Sold Separately)",
            "Optional Matching Drawer Pedestal (WDP6_)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "rated1ElectricDryerBadge"
    },
    {
        "category": "laundry",
        "subcategory": "front load washer",
        "title": "WM5500H_A",
        "subtitle": "4.5 cu. ft. Mega Capacity Smart Front Load Washer with TurboWash 360 and AI Built-In Intelligence",
        "colors": [
            "graphite steel",
            "white"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStarMostEfficient",
            "energyStar",
            "reddot"
        ],
        "upc": [
            "WM5500HVA (Graphite Steel) 195174052976",
            "WM5500HWA (White) 195174052990"
        ],
        "specSheetLink": "https://lg.widen.net/s/jgjkdkcchx/wm5500h_a-spec-sheet",
        "videos": [
            "https://youtu.be/fb_J0TqRaRQ",
            "https://youtu.be/4gEBcTrY_Po"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "4.5 cu. ft. Ulta Large Capacity with NeveRust® Stainless Steel Drum",
            "Direct Drive Motor 10-Year Limited Warranty",
            "1,300 RPM",
            "25 Washing Programs",
            "5 Temperature Settings",
            "15 Wash Options",
            "Closet Depth Digital Dial Cycle and Fabric Care Guide"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Smart Diagnosis",
            "ThinQ® App with ThinQ Care",
            "AAFA Certified Washer with Allergiene® Cycle",
            "TurboWash® 360° Technology",
            "AI Fabric Sensors & Smart Pairing™",
            "6Motion Technology",
            "Cold Wash Option",
            "LG Steam Technology",
            "Tub Clean Coach",
            "LoDecibel® Quiet Operation",
            "Advanced Tier",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Digital Dial Control with LCD Display",
            "Stainless Steel Rimmed Glass Door with Tinted Tempered Glass Cover",
            "Stackable with Matching Dyer (Stacking Kit Sold Seperately)",
            "Optional Matching Drawer Pedestal (WDP6_)",
            "Optional Sidekick™ Pedestal Washer (WD300C_)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "https://lg.widen.net/s/dj2wppqnw5/lg-digital-dial-control-cycle-guide-fin_lo"
    },
    {
        "category": "laundry",
        "subcategory": "front load matching dryer",
        "title": "DLEX5500_ / DLGX5501_",
        "subtitle": "7.4 cu. ft. Ultra Large Capacity Smart Wi-Fi Enabled Front Load Dryer with TurboSteam and Built-In Intelligence",
        "colors": [
            "graphite steel",
            "white"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar",
            "reddot"
        ],
        "upc": [
            "DLEX5500V (Graphite Steel) 195174048580",
            "DLGX5501V (Graphite Steel) 195174048894DLEX5500W (White) 195174048603",
            "DLGX5501W (White) 195174048900"
        ],
        "specSheetLink": "https://lg.widen.net/s/nlrkxmtm9w/dlex5500_--dlgx5501_-spec-sheet",
        "videos": "https://youtu.be/w9xtkGWQJHQ",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "7.4 cu. ft. Ultra Large Capacity with NeveRust® Stainless Steel Drum",
            "23 Drying Programs",
            "5 Temperature Settings",
            "12 Dry Options",
            "Closet Depth"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® App with ThinQ Care",
            "TurboSteam® Technology",
            "Precise Temerature with Variable HeatSource",
            "AI Fabric Sensor & Smart Pairing™",
            "NeveRust® Stainless Steel Drum",
            "FlowSense® Duct Clogging & Lint Filter Indicators",
            "Reversible Door",
            "Wrinkle Care Option",
            "LoDecibel® Quiet Operation",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Digital Dial Control with LCD Display and Touch Buttons",
            "Stainless Steel Rimmed Glass Door with Tinted Tempered Glass Cover",
            "Stackable with Matching Dyer (Stacking Kit Sold Seperately)",
            "Optional Matching Drawer Pedestal (WDP6_)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "front load washer",
        "title": "WM5700HVA",
        "subtitle": "4.5 cu. ft. Ultra Large Capacity Smart Front Load Washer with TurboWash 360 and AI Built-In Intelligence",
        "colors": "graphite steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "ThinQ Up",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStarMostEfficient",
            "energyStar",
            "reddot"
        ],
        "upc": [
            "WM5500HVA (Graphite Steel) 195174052976",
            "WM5500HWA (White) 195174052990"
        ],
        "specSheetLink": "https://lg.widen.net/s/wnhjd97grd/wm5700hva-spec-sheet",
        "videos": "https://youtu.be/4gEBcTrY_Po",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "4.5 cu. ft. Ulta Large Capacity with NeveRust™ Stainless Steel Drum",
            "Direct Drive Motor 10-Year Limited Warranty",
            "1,300 RPM",
            "25 Washing Programs",
            "5 Temperature Settings",
            "19 Wash Options",
            "Closet Depth"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Smart Diagnosis",
            "ThinQ® App with ThinQ Care",
            "AAFA Certified Washer with Allergiene® Cycle",
            "TurboWash® 360° Technology",
            "AI Fabric Sensors & Smart Pairing™",
            "ezDispense® Automatic Dispenser",
            "Cold Wash Option",
            "LG Steam Technology",
            "Tub Clean Coach",
            "LoDecibel® Quiet Operation",
            "Advanced Tier"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Digital Dial Control with LCD Display",
            "Stainless Steel Rimmed Glass Door with Tinted Tempered Glass Cover",
            "Stackable with Matching Dyer (Stacking Kit Sold Seperately)",
            "Optional Matching Drawer Pedestal (WDP6V)",
            "Optional Sidekick™ Pedestal Washer (WD300CV)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "https://lg.widen.net/s/dj2wppqnw5/lg-digital-dial-control-cycle-guide-fin_lo"
    },
    {
        "category": "laundry",
        "subcategory": "front load matching dryer",
        "title": "DLHC5502_",
        "subtitle": "7.8 cu. ft. Mega Capacity Smart Front Load Dryer with Dual Inverter HeatPump and Inverter Direct Drive Motor",
        "colors": [
            "graphite steel",
            "black steel",
            "white"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "ThinQ Up",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStarMostEfficient",
            "energyStar",
            "inventerLinearCompressor10YearWarranty"
        ],
        "upc": [
            "DLHC5502V (Graphite Steel) 195174067925",
            "DLHC5502B (Black Steel) 195174069981",
            "DLHC5502W (White) 195174061657"
        ],
        "specSheetLink": "https://lg.widen.net/s/dpnhmjpvfg/dlhc5502_spec_sheet",
        "videos": [
            "https://youtu.be/w9xtkGWQJHQ",
            "https://youtu.be/B1WCSYy6dsM"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "7.8 cu. ft. Mega Capacity",
            "Dual Inverter Heat Pump™ Technology & Inverter Direct Drive Motor System",
            "60% more efficient than Electric Dryers",
            "23 Drying Programs",
            "5 Temperature Settings",
            "NeveRust® Stainless Steel Drum",
            "Closet Depth",
            "3-Stage Lint Filter"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Smart Technology",
            "ThinQ UP™ & ThinQ Care™",
            "Auto Cleaning Condenser™",
            "Built-In Intelligence: AI Sensor Dry with Infrared Sensor",
            "AI Fabric Sensor & Smart Pairing™",
            "NeveRust® Stainless Steel Drum",
            "Advanced Washing: TurboWash® 360° and",
            "Allergiene® Wash Cycle",
            "LoDecibel® Quiet Operation",
            "Wrinkle Care Option",
            "ENERGY STAR® Most Efficient"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Sleek Ventless Design",
            "LCD Digital Dial Control with LCD Display and Touch Buttons",
            "Stainless Steel Rimmed Glass Door with Tinted Tempered Glass Cover",
            "Stackable with Matching Dyer Stacking Kit (HSTK1B)",
            "Stacking Kit Sold Seperately",
            "Optional Matching Drawer Pedestal (WDP6_)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": [
            "inventer linear compressor 10 year warranty",
            "https://lg.widen.net/s/bfnljrpmf5/lg-dlhc5502-heatpump-dryer-cycle-guide-fin_lo"
        ]
    },
    {
        "category": "laundry",
        "subcategory": "front load washer",
        "title": "WM6500H_A",
        "subtitle": "5.0 cu. ft. Mega Capacity Smart Front Load Washer with TurboWash 360 and AI Built-In Intelligence Transition from WM4200H_A",
        "colors": [
            "black steel",
            "white"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStarMostEfficient",
            "energyStar",
            "reddot"
        ],
        "upc": [
            "WM6500HBA (Black) 195174052921",
            "WM6500HWA (White) 195174048689"
        ],
        "specSheetLink": "https://lg.widen.net/s/zg6ccgzf7k/wm6500h_a-spec-sheet",
        "videos": [
            "https://youtu.be/fb_J0TqRaR",
            "https://youtu.be/y8VUaqpaFc4"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5.0 cu. ft. Mega Capacity with NeveRust® Stainless Steel Drum",
            "Direct Drive Motor 10-Year Limited Warranty",
            "1,300 RPM",
            "25 Washing Programs",
            "5 Temperature Settings",
            "15 Wash Options",
            "Closet Depth Digital Dial Cycle and Fabric Care Guide"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Smart Diagnosis",
            "ThinQ® App with ThinQ Care",
            "AAFA Certified Washer with Allergiene® Cycle",
            "TurboWash® 360° Technology",
            "AI Fabric Sensors & Smart Pairing™",
            "6Motion Technology",
            "Cold Wash Option",
            "LG Steam Technology",
            "Tub Clean Coach",
            "LoDecibel® Quiet Operation",
            "Advanced Tier",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Digital Dial Control with LCD Display",
            "Rose Gold Rimmed Glass Door with Tinted Tempered Glass Cover",
            "Stackable with Matching Dyer (Stacking Kit Sold Seperately)",
            "Optional Matching Drawer Pedestal (WDP6_)",
            "Optional Sidekick™ Pedestal Washer (WD300C_)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "https://lg.widen.net/s/dj2wppqnw5/lg-digital-dial-control-cycle-guide-fin_lo"
    },
    {
        "category": "laundry",
        "subcategory": "front load matching dryer",
        "title": "DLEX6500_ / DLGX6501_",
        "subtitle": "7.4 cu. ft. Ultra Large Capacity Smart Wi-Fi Enabled Front Load Dryer with TurboSteam and Built-In Intelligence",
        "colors": [
            "black steel",
            "white"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar",
            "reddot"
        ],
        "upc": [
            "DLEX6500B (Black) 195174052945",
            "DLGX6501B (Black) 195174052969",
            "DLEX6500W (White) 195174049075",
            "DLGX6501W (White) 195174048535"
        ],
        "specSheetLink": "https://lg.widen.net/s/cqgj6zfp2f/dlex6500_--dlgx6501_-spec-sheet",
        "videos": "https://youtu.be/w9xtkGWQJHQ",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "7.4 cu. ft. Ultra Large Capacity",
            "23 Drying Programs",
            "5 Temperature Settings",
            "12 Dry Options",
            "Closet Depth"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® App with ThinQ Care",
            "TurboSteam® Technology",
            "Precise Temerature with Variable Heat Source",
            "AI Fabric Sensor & Smart Pairing™",
            "NeveRust® Stainless Steel Drum",
            "FlowSense® Duct Clogging & Lint Filter Indicators",
            "Reversible Door",
            "Wrinkle Care Option",
            "LoDecibel® Quiet Operation",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Digital Dial Control with LCD Display and Touch Buttons",
            "Rose Gold Rimmed Glass Door with Tinted Tempered Glass Cover",
            "Stackable with Matching Dyer (Stacking Kit Sold Seperately)",
            "Optional Matching Drawer Pedestal (WDP6_)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "front load washer",
        "title": "WM6700HBA",
        "subtitle": "5.0 cu. ft. Mega Capacity Smart Front Load Washer with TurboWash 360 and AI Built-In Intelligence",
        "colors": "black steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStarMostEfficient",
            "reddot"
        ],
        "upc": "WM6700HBA (Black Steel) 195174037058",
        "specSheetLink": "https://lg.widen.net/s/b7wzn7twmf/wm6700hba-spec-sheet",
        "videos": [
            "https://youtu.be/4gEBcTrY_Po",
            "https://youtu.be/JAWzjvJaJzc"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5.0 cu. ft. Mega Capacity with NeveRust™ Stainless Steel Drum",
            "Direct Drive Motor 10-Year Limited Warranty",
            "1,300 RPM",
            "25 Washing Cycles",
            "5 Temperature Settings",
            "19 Wash Options",
            "Closet Depth"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care",
            "AAFA Certified Washer with Allergiene™ Cycle",
            "TurboWash™ 360° Technology",
            "AI Fabric & Soil Level Sensors & Smart Pairing™",
            "ezDispense® Automatic Dispenser",
            "ColdWash™ Option",
            "LG Steam Technology",
            "Tub Clean Coach",
            "LoDecibel™ Quiet Operation",
            "Advanced Tier",
            "ENERGY STAR Most Efficient"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Digital Dial Control with LCD Display",
            "Chrome Rimmed Glass Door with Tinted Tempered Glass Cover",
            "Stackable with Matching Dyer (Stacking Kit Sold Seperately)",
            "Optional Matching Drawer Pedestal (WDP6B)",
            "Optional Sidekick™ Pedestal Washer (WD300CB)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "https://lg.widen.net/s/dj2wppqnw5/lg-digital-dial-control-cycle-guide-fin_lo"
    },
    {
        "category": "laundry",
        "subcategory": "front load matching dryer",
        "title": "DLEX6700B / DLGX6701B",
        "subtitle": "7.4 cu. ft. Ultra Large Capacity Smart Wi-Fi Enabled Front Load Dryer with TurboSteam and Built-In Intelligence",
        "colors": "black steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStarMostEfficient",
            "reddot"
        ],
        "upc": [
            "DLEX6700B (Black Steel) 195174036976",
            "DLGX6701B (Black Steel) 195174036983"
        ],
        "specSheetLink": "https://lg.widen.net/s/7pklg776xs/dlex6700b--dlgx6701b-spec-sheet",
        "videos": "https://youtu.be/w9xtkGWQJHQ",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "7.4 cu. ft. Ultra Large Capacity",
            "23 Drying Cycles",
            "5 Temperature Settings",
            "Closet Depth"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® App with ThinQ Care",
            "TurboSteam™ Technology",
            "Precise Temerature with Variable Heat Source",
            "AI Fabric Sensor & Smart Pairing™",
            "NeveRust™ Stainless Steel Drum",
            "FlowSense® Duct Clogging & Lint Filter Indicators",
            "Reversible Door",
            "Wrinkle Care Option",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Digital Dial Control with LCD Display and Touch Buttons",
            "Chrome Rimmed Glass Door with Tinted Tempered Glass Cover",
            "Stackable with Matching Dyer (Stacking Kit Sold Separately)",
            "Optional Matching Drawer Pedestal (WDP6B)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "front load washer",
        "title": "WM8900HBA",
        "subtitle": "5.2 cu. ft. Front Load Washer with TurboWash and Built-In Intelligence",
        "colors": "black steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStarMostEfficient"
        ],
        "upc": [
            "WM8900HBA Washer (Black Steel) 195174024829",
            "DLEX8900B Dryer (Black Steel Electric) 195174024836",
            "DLGX8901B Dryer (Black Steel Gas) 195174024843"
        ],
        "specSheetLink": "https://lg.widen.net/s/7gvmxbprhw/wm8900hba-spec-sheet",
        "videos": [
            "https://youtu.be/JAWzjvJaJzc",
            "https://youtu.be/4gEBcTrY_Po"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5.2 cu. ft. MEGA Capacity with NeveRust™ Stainless Steel Drum",
            "Direct Drive Motor with 10-Year Warranty",
            "1,300 RPM",
            "14 Washing Cycles",
            "5 Temperature Settings",
            "Closet Depth"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care",
            "AAFA Certified Allergiene™ Cycle",
            "TurboWash® 2.0 Technology",
            "LG Steam Technology",
            "ColdWash™ Option",
            "TrueBalance™ Anti-Vibration System",
            "LoadSense",
            "Tub Clean Coach",
            "Advanced Tier",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR Most Efficient"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Upfront Electronic Panel with Dial-A-Cycle™",
            "Chrome Square Rimmed Glass Door with Dark Blue Tinted Cover",
            "Stackable with Matching Dryer (Stacking Kit Sold Separately)",
            "Optional Matching Drawer Pedestal (WDP5B)",
            "Optional Sidekick™ Pedestal Washer (WD200CB)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "front load matching dryer",
        "title": "DLEX8900B / DLGX8901B",
        "subtitle": "9.0 cu. ft. Front Load Dryer with TurboSteam and Built-In Intelligence",
        "colors": "black steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": [
            "WM8900HBA Washer (Black Steel) 195174024829",
            "DLEX8900B Dryer (Black Steel Electric) 195174024836",
            "DLGX8901B Dryer (Black Steel Gas) 195174024843"
        ],
        "specSheetLink": "https://lg.widen.net/s/xrcznsflml/dlex8900b--dlgx8901b-spec-sheet",
        "videos": "https://youtu.be/JAWzjvJaJzc",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "9.0 cu. ft. MEGA Capacity",
            "12 Drying Cycles",
            "5 Temperature Settings"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® App with ThinQ Care",
            "TurboSteam™",
            "Precise Temperature with Variable Heat Source",
            "AI Fabric Sensor / Smart Pairing™",
            "FlowSense™ Duct Clogging and Lint Filter Indicators",
            "Reversible Door",
            "Wrinkle Care Option",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Upfront Electronic Panel with Dual LED Display and Dial-A-Cycle™",
            "Chrome Square Rimmed Glass Door with Dark Blue Tinted Cover",
            "Stackable with Matching Washer (Stacking Kit Sold Separately)",
            "Optional Matching Drawer Pedestal"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "front load washer",
        "title": "WM8900HBA",
        "subtitle": "5.2 cu. ft. Front Load Washer with TurboWash and Built-In Intelligence",
        "colors": "black steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStarMostEfficient"
        ],
        "upc": [
            "WM8900HBA Washer (Black Steel) 195174024829",
            "DLEX8900B Dryer (Black Steel Electric) 195174024836",
            "DLGX8901B Dryer (Black Steel Gas) 195174024843"
        ],
        "specSheetLink": "https://lg.widen.net/s/7gvmxbprhw/wm8900hba-spec-sheet",
        "videos": [
            "https://youtu.be/JAWzjvJaJzc",
            "https://youtu.be/4gEBcTrY_Po"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5.2 cu. ft. MEGA Capacity with NeveRust™ Stainless Steel Drum",
            "Direct Drive Motor with 10-Year Warranty",
            "1,300 RPM",
            "14 Washing Cycles",
            "5 Temperature Settings",
            "Closet Depth"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care",
            "AAFA Certified Allergiene™ Cycle",
            "TurboWash® 2.0 Technology",
            "LG Steam Technology",
            "ColdWash™ Option",
            "TrueBalance™ Anti-Vibration System",
            "LoadSense",
            "Tub Clean Coach",
            "Advanced Tier",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR Most Efficient"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Upfront Electronic Panel with Dial-A-Cycle™",
            "Chrome Square Rimmed Glass Door with Dark Blue Tinted Cover",
            "Stackable with Matching Dryer (Stacking Kit Sold Separately)",
            "Optional Matching Drawer Pedestal (WDP5B)",
            "Optional Sidekick™ Pedestal Washer (WD200CB)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "front load matching dryer",
        "title": "DLEX8900B / DLGX8901B",
        "subtitle": "9.0 cu. ft. Front Load Dryer with TurboSteam and Built-In Intelligence",
        "colors": "black steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": [
            "WM8900HBA Washer (Black Steel) 195174024829",
            "DLEX8900B Dryer (Black Steel Electric) 195174024836",
            "DLGX8901B Dryer (Black Steel Gas) 195174024843"
        ],
        "specSheetLink": "https://lg.widen.net/s/xrcznsflml/dlex8900b--dlgx8901b-spec-sheet",
        "videos": "https://youtu.be/JAWzjvJaJzc",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "9.0 cu. ft. MEGA Capacity",
            "12 Drying Cycles",
            "5 Temperature Settings"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® App with ThinQ Care",
            "TurboSteam™",
            "Precise Temperature with Variable Heat Source",
            "AI Fabric Sensor / Smart Pairing™",
            "FlowSense™ Duct Clogging and Lint Filter Indicators",
            "Reversible Door",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Upfront Electronic Panel with Dual LED Display and Dial-A-Cycle™",
            "Chrome Square Rimmed Glass Door with Dark Blue Tinted Cover",
            "Stackable with Matching Washer (Stacking Kit Sold Separately)",
            "Optional Matching Drawer Pedestal",
            "Wrinkle Care Option"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "top load washer",
        "title": "WT8400C_",
        "subtitle": "5.5 cu. ft. Top Load Washer with EasyUnload",
        "colors": [
            "alpine white",
            "matte black"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": "WT8400CB (Matte Black) 195174075364 WT8400CW (Alpine White) 195174075388",
        "specSheetLink": "https://lg.widen.net/s/tc69bgkzj8/wt8400c_2024_spec-sheet",
        "videos": [
            "https://youtu.be/KYsKOz6HKT4",
            "https://youtu.be/8Yg8g5_LCKI"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5.5 cu. ft. Mega Capacity",
            "EasyUnload™",
            "Built-In Intelligence: AI Fabric Sensor / Smart Pairing™",
            "Deep Fill",
            "Direct Drive Motor 10-Year Limited Warranty"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® App with ThinQ Care",
            "SmartDiagnosis™",
            "Sensor Dry System",
            "TurboWash3D® Technology",
            "Wrinkle Care Option",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Electronic Control Panel with LED Display",
            "SlamProof™ Glass Lid",
            "NeveRust® Stainless Steel Drum",
            "NeveRust® Stainless Steel Washplate"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "Transition from WT7400CV_WT7400CW"
    },
    {
        "category": "laundry",
        "subcategory": "top load washer",
        "title": "WT8405C_",
        "subtitle": "5.3 cu. ft. Top Load Washer with 4-Way Agitator",
        "colors": [
            "alpine white",
            "matte black"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": "WT8405CB (Matte Black) 195174075371 WT8405CW (Alpine White) 195174075395",
        "specSheetLink": "https://lg.widen.net/s/2xhptp5nmx/wt8405c_2024_spec-sheet",
        "videos": [
            "https://youtu.be/vUw3TQ48s0A",
            "https://youtu.be/8Yg8g5_LCKI"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5.3 cu. ft. Mega Capacity",
            "EasyUnload™",
            "Built-In Intelligence: AI Fabric Sensor / Smart Pairing™",
            "4-Way® Agitator",
            "Direct Drive Motor with 10-Year Limited Warranty",
            "8 Washing Programs",
            "5 Temperature Settings"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care",
            "TurboWash3D™ Technology",
            "SenseClean™ System",
            "SmartRinse™ Jet Spray System",
            "SlamProof™ Lid",
            "TrueBalance™ Anti-Vibration System",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Electronic Control Panel with LED Display",
            "SlamProof™ Glass Lid",
            "Touch Buttons"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "Transition from WT7405_WT7405CW"
    },
    {
        "category": "laundry",
        "subcategory": "top load matching dryer",
        "title": "DLE8400_E / DLG8401_E",
        "subtitle": "7.3 cu. ft. Rear Control Dryer with LG EasyLoad Door",
        "colors": [
            "alpine white",
            "matte black"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": "DLEX8400BE (Matte Black) 195174075425 DLEX8400WE (Alpine White) 195174075449",
        "specSheetLink": "https://lg.widen.net/s/lvqzqbc7gj/dle8400_e_dlg8401_e_2024_spec-sheet",
        "videos": "https://youtu.be/KYsKOz6HKT4",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "7.3 cu. ft. Ultra Large Capacity",
            "EasyLoad™ Door",
            "Built-In Intelligence: AI Sensor Dry™ / Smart Pairing™"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® App with ThinQ Care",
            "SmartDiagnosis™",
            "Sensor Dry System",
            "Precise Temperature Control with Variable Heat Source",
            "FlowSense™ Duct Clogging & Lint Filter Indicators",
            "Wrinkle Care Option",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Electronic Control Panel with LED Display",
            "FlowSense® Duct Clogging & Lint Filter Indicators",
            "Aluminized Alloy Steel Drum",
            "Reversible Door",
            "Wrinkle Care Option"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "Transition from DLE7400_E  DLG7401_E"
    },
    {
        "category": "laundry",
        "subcategory": "top load washer",
        "title": "WT8600CB",
        "subtitle": "5.5 cu. ft. Top Load Washer with EasyUnload",
        "colors": "matte black",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": "WT8600CB (Matte Black) 195174062494",
        "specSheetLink": "https://lg.widen.net/s/g7gvbg6np6/wt8600cb_2024_spec-sheet",
        "videos": [
            "https://youtu.be/8Yg8g5_LCKI",
            "https://youtu.be/GS_OHRW8xlM"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5.5 cu. ft. MEGA Capacity",
            "Direct Drive Motor with 10-Year Limited Warranty",
            "AI Fabric Sensor / Smart Pairing™",
            "ezDispense® Automatic Dispenser",
            "30 Washing Programs",
            "5 Temperature Settings (Cold, Cool, Semi-warm, Warm, Hot)"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care",
            "TurboWash3D™ Technology",
            "6Motion™ Technology",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Sleek, Modern Design:",
            "LCD Digital Dial Control with",
            "LED Display",
            "Display and Dial-A-Cycle™",
            "SlamProof™ Glass Lid"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "Transition from WT7900HBA"
    },
    {
        "category": "laundry",
        "subcategory": "top load matching dryer",
        "title": "DLEX8600 / 8601BE",
        "subtitle": "7.3 cu. ft. Rear Control Dryer with LG EasyLoad Door",
        "colors": "matte black",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": "DLEX8600BE (Matte Black) 195174062432 DLGX8601BE (Matte Black) 195174062449",
        "specSheetLink": "https://lg.widen.net/s/2vsc5qqgbf/dlex8600be_dlgx8601be_2024_spec-sheet",
        "videos": "https://youtu.be/KYsKOz6HKT4",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "7.3 cu. ft. Ultra Large Capacity",
            "EasyLoad™ Door",
            "Built-In Intelligence: AI Sensor Dry™ / Smart Pairing™"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care",
            "TurboSteam™ Technology",
            "Sensor Dry System",
            "FlowSense™ Duct Clogging Indicator",
            "ReduceStatic™ Option",
            "Wrinkle Care Option",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Digital Dial Control with LCD Display",
            "FlowSense® Duct Clogging & Lint Filter Indicators",
            "LCD Digital Dial Control with LED Display",
            "Reversible Door",
            "NeveRust® Stainless Steel Drum"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": [
            "Transition from DLEX7900BE  DLGX7901BE",
            "inventer linear compressor 10 year warranty"
        ]
    },
    {
        "category": "laundry",
        "subcategory": "top load washer",
        "title": "WT6100CW",
        "subtitle": "4.3 cu. ft. Top Load Washer with Impeller and SlamProof Glass Lid",
        "colors": "white",
        "logos": "inventerLinearCompressor10YearWarranty",
        "upc": "WT6100CW (White) 195174070000",
        "specSheetLink": "https://lg.widen.net/s/96tcsp696j/wt6100cw_2024_spec-sheet",
        "videos": [
            "https://youtu.be/8Yg8g5_LCKII",
            "https://youtu.be/GS_OHRW8xlM"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "4.3 cu. ft. Large Capacity",
            "Impeller",
            "Direct Drive Motor with 10-Year Limited Warranty",
            "Deep Fill Option"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "Steam Technology",
            "True Balance® Anti-Vibration System",
            "Auto Suds Removal"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Intelligent Electronic Controls with Dual LED Display",
            "Dial-A-Cycle® Control Knob",
            "SlamProof™ Glass Lid",
            "NeveRust® Stainless Steel Drum"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "inventer linear compressor 10 year warranty"
    },
    {
        "category": "laundry",
        "subcategory": "top load washer",
        "title": "WT6105C_",
        "subtitle": "4.1 cu. ft. Top Load Washer with 4-Way Agitator and TurboDrum Technology",
        "colors": [
            "white",
            "monochrome grey"
        ],
        "logos": [],
        "upc": "WT6105CW (White) 195174035269 WT6105CM (Monochrome Grey) 195174063743",
        "specSheetLink": "https://lg.widen.net/s/qdnmhdsjdp/wt6105c_2024_spec_sheet",
        "videos": "https://youtu.be/vUw3TQ48s0A",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "4.1 cu. ft. Ultra Large Capacity with Stainless Steel Drum",
            "Direct Drive Motor with 10-Year Limited Warranty",
            "800 RPM",
            "8 Washing Programs",
            "4 Washing Options"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Smart Diagnosis",
            "4-Way® Agitator",
            "TurboDrum™ Technology",
            "SlamProof® Glass Lid",
            "TrueBalance® Anti-Vibration System",
            "LoDecibel® Quiet Operation",
            "LoadSense",
            "Deep Fill"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Electronic Control Panel with LED Display and Dial-A-Cycle®",
            "Touch Buttons",
            "Stainless Steel Drum"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "top load matching dryer",
        "title": "DLE6100_  / DLG6101_",
        "subtitle": "7.3 cu. ft. Rear Control Top Load Dryer",
        "colors": [
            "white",
            "monochrome grey"
        ],
        "logos": "energyStar",
        "upc": [
            "DLE6100W (White) 195174035313",
            "DLG6101W (White) 195174035306",
            "DLG6100M (Monochrome Grey) 195174067468",
            "DLG6101M (Monochrome Grey) 195174072240"
        ],
        "specSheetLink": "https://lg.widen.net/s/pqmgwv6mgv/dle6100_dlg6101_2024_spec_sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "7.3 cu. ft. Ultra Large Capacity with Aluminized Alloy Steel Drum",
            "5 Drying Programs",
            "3 Drying Options",
            "3 Temperature Settings",
            "27\" Width"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Sensor Dry System",
            "Precise Temperature Control with Variable Heat Souce",
            "LoDecibel® Quiet Operation",
            "Smart Diagnosis",
            "3 Minute Installation Check",
            "FlowSense® Duct Clogging & Lint Filter Indicators",
            "Damp Dry Signal",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Electronic Control Panel with LED Display and Dial-A-Cycle®",
            "Aluminized Alloy Steel Drum"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "top load washer",
        "title": "WT7000CW",
        "subtitle": "4.5 cu. ft. Rear Control Top Load Washer",
        "colors": "white",
        "logos": [],
        "upc": "DLE7000W (Electric  White) 195174004128 DLG7001W (Gas  White) 195174004135",
        "specSheetLink": "https://lg.widen.net/s/wpvdfg7gph/wt7000cw-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "4.5 cu. ft. Capacity with Stainless Steel Drum",
            "Direct Drive Motor with 10-Year Limited Warranty",
            "800 RPM",
            "8 Washing Programs",
            "9 Washing Options"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ColdWash™ Option",
            "SmartDiagnosis™",
            "SlamProof™ Glass Lid",
            "TrueBalance™ Anti-Vibration System",
            "LoDecibel™",
            "LoadSense",
            "Delay Wash"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Electronic Control Panel with LED Display and Dial-A-Cycle™",
            "Touch Buttons",
            "Stainless Steel Drum"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "top load matching dryer",
        "title": "DLE7000W / DLG7001W",
        "subtitle": "7.3 cu. ft. Rear Control Top Load Dryer with Sensor Dry",
        "colors": "white",
        "logos": "energyStar",
        "upc": "DLE7000W (Electric  White) 195174004128 DLG7001W (Gas  White) 195174004135",
        "specSheetLink": "https://lg.widen.net/s/n7tnqvn5dt/dle7000w-dlg7001w-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "7.3 cu. ft. Ultra Large Capacity",
            "8 Drying Programs",
            "7 Drying Options",
            "27\" Width"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Sensor Dry System",
            "Precise Temperature Control with Variable Heat Souce",
            "LoDecibel™ Quiet Operation",
            "SmartDiagnosis™",
            "3 Minute Installation Check",
            "FlowSense™ Duct Clogging Indicator & Lint Filter Indicators",
            "Wrinkle Care Option",
            "Damp Dry Signal",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Electronic Control Panel with LED Display and Dial-A-Cycle™",
            "Aluminized Alloy Steel Drum"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "top load washer",
        "title": "WT7005CW",
        "subtitle": "4.3 cu. ft. Top Load Washer with 4-Way Agitator and TurboDrum Technology",
        "colors": "white",
        "logos": [],
        "upc": "WT7005CW (White) 195174004487 DLE7000W (Electric  White) 195174004128 DLG7001W (Gas  White) 195174004135",
        "specSheetLink": "https://lg.https//lg.widen.net/s/kxgznz29dk/wt7005cw-spec-sheetmjsm/wt7405c_-spec-sheet",
        "videos": "https://youtu.be/vUw3TQ48s0A",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "4.3 cu. ft. Capacity with NeveRust™ Stainless Steel Drum",
            "Direct Drive Motor with 10-Year Limited Warranty",
            "800 RPM",
            "8 Washing Programs",
            "9 Washing Options"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ColdWash™ Option",
            "SmartDiagnosis™",
            "SlamProof™ Lid",
            "TrueBalance™ Anti-Vibration System",
            "LoadSense",
            "Delay Wash (Up to 19 Hours)"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Electronic Control Panel with LED Display and Dial-A-Cycle™",
            "Touch Buttons",
            "NeveRust™ Stainless Steel Drum"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "top load matching dryer",
        "title": "DLE7000W / DLG7001W",
        "subtitle": "7.3 cu. ft. Rear Control Top Load Dryer with Sensor Dry",
        "colors": "white",
        "logos": "energyStar",
        "upc": "WT7005CW (White) 195174004487 DLE7000W (Electric  White) 195174004128 DLG7001W (Gas  White) 195174004135",
        "specSheetLink": "https://lg.widen.net/s/n7tnqvn5dt/dle7000w-dlg7001w-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "7.3 cu. ft. Ultra Large Capacity",
            "8 Drying Programs",
            "7 Drying Options",
            "27\" Width"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Sensor Dry System",
            "Precise Temperature Control with Variable Heat Souce",
            "LoDecibel™ Quiet Operation",
            "SmartDiagnosis™",
            "3 Minute Installation Check",
            "FlowSense™ Duct Clogging Indicator & Lint Filter Indicators",
            "Wrinkle Care Option",
            "Damp Dry Signal",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Electronic Control Panel with LED Display and Dial-A-Cycle™",
            "Aluminized Alloy Steel Drum"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "top load washer",
        "title": "WT7150C_",
        "subtitle": "5.0 cu. ft. Rear Control Top Load Washer",
        "colors": [
            "middle black",
            "white"
        ],
        "logos": [
            "energyStar",
            "rated1TopLoadWasher"
        ],
        "upc": "WT7150CM (Middle Black) 195174050217 DLE7150M (Middle Black) 195174050811 DLG7151M (Middle Black) 195174050828",
        "specSheetLink": "https://lg.widen.net/s/gvkfmkfbbd/wt7150c_-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5.0 cu. ft. Capacity",
            "Direct Drive Motor with 10-Year Limited Warranty",
            "800 RPM",
            "8 Washing Programs",
            "9 Washing Options"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ColdWash™ Option",
            "SmartRinse™ Jet Spray System",
            "SmartDiagnosis™",
            "SlamProof® Lid",
            "TrueBalance® Anti-Vibration System",
            "SenseClean™",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Electronic Control Panel with LED Display and Dial-A-Cycle®",
            "Touch Buttons",
            "Stainless Steel Drum"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "top load matching dryer",
        "title": "DLE7150_ / DLG7151_",
        "subtitle": "7.3 cu. ft. Rear Control Top Load Dryer",
        "colors": [
            "middle black",
            "white"
        ],
        "logos": "energyStar",
        "upc": "WT7150CM (Middle Black) 195174050217 DLE7150M (Middle Black) 195174050811 DLG7151M (Middle Black) 195174050828",
        "specSheetLink": "https://lg.widen.net/s/8dm57sbbtt/dle7150_--dlg7151_-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "7.3 cu. ft. Ultra Large Capacity",
            "8 Drying Programs",
            "7 Drying Options",
            "27\" Width"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Sensor Dry System",
            "Precise Temperature Control with Variable Heater",
            "LoDecibel® Quiet Operation",
            "SmartDiagnosis™",
            "3 Minute Installation Check",
            "FlowSense® Duct Clogging Indicator",
            "Wrinkle Care Option",
            "Damp Dry Signal",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Intelligent Electronic Controls with LED Display and Dial-A-Cycle®",
            "Aluminized Alloy Steel Drum"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "top load washer",
        "title": "WT7155CW",
        "subtitle": "4.8 cu. ft. Top Load Washer",
        "colors": "white",
        "logos": "energyStar",
        "upc": "WT7155CW (White) 195174026700 DLE7150W (Electric  White) 048231028448 DLG7151W (Gas  White) 048231028455",
        "specSheetLink": "https://lg.widen.net/s/bpvlvccdjn/wt7155cw-spec-sheet",
        "videos": "https://youtu.be/vUw3TQ48s0A",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "4.8 cu. ft. Capacity with Stainless Steel Drum",
            "Direct Drive Motor 10-Year Limited Warranty",
            "800 RPM",
            "8 Washing Programs",
            "9 Washing Options"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "4-Way™ Agitator",
            "TurboDrum™ Technology",
            "6Motion™ Technology",
            "SmartDiagnosis™",
            "ColdWash™ Technology",
            "TrueBalance™ Anti-Vibration System",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Electronic Control Panel with LED Display and Dial-A-Cycle™",
            "Touch Buttons",
            "NeveRust™ Stainless Steel Tub",
            "SlamProof™ Lid"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "top load matching dryer",
        "title": "DLE7150W / DLG7151W",
        "subtitle": "7.3 cu. ft. Rear Control Top Load Dryer",
        "colors": "white",
        "logos": "energyStar",
        "upc": [
            "WT7155CW (White) 195174026700",
            "DLE7150W (Electric  White) 048231028448",
            "DLG7151W (Gas  White) 048231028455"
        ],
        "specSheetLink": "https://lg.widen.net/s/8dm57sbbtt/dle7150_--dlg7151_-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "7.3 cu. ft. Ultra Large Capacity",
            "8 Drying Programs",
            "7 Drying Options",
            "27\" Width"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Sensor Dry System",
            "Precise Temperature Control with Variable Heater",
            "LoDecibel™ Quiet Operation",
            "SmartDiagnosis™",
            "3 Minute Installation Check",
            "FlowSense™ Duct Clogging Indicator",
            "Wrinkle Care Option",
            "Damp Dry Signal",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Intelligent Electronic Controls with LED Display and Dial-A-Cycle™",
            "Aluminized Alloy Steel Drum"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "specialty laundry",
        "title": "WM1455HWA",
        "subtitle": "2.4 cu. ft. Compact Front Load Washer with Built-In Intelligence",
        "colors": "white",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": [
            "WM1455HWA (White) 048231027960",
            "DLHC1455W (White) 048231027977"
        ],
        "specSheetLink": "https://lg.widen.net/s/sxxzffgrp6/wm1455h_a-spec-sheet",
        "videos": "https://youtu.be/GS_OHRW8xlM",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "2.4 cu. ft. Large Capacity with NeveRust™ Stainless Steel Drum",
            "24\" Width",
            "Direct Drive Motor with 10-Year Limited Warranty",
            "1,400 RPM",
            "14 Washing Programs",
            "9 Wash Options",
            "5 Temperature Settings"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care",
            "AAFA Certified LG Washer",
            "TrueBalance™ Anti-Vibration System",
            "LoadSense",
            "Delay Wash (Up to 19 hours)",
            "Tempered Glass Door",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Upfront Electronic Control Panel with Dial-A-Cycle™",
            "Chrome Rimmed Glass Door"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "specialty laundry",
        "title": "DLHC1455W",
        "subtitle": "4.2 cu. ft. Compact Front Load Dryer with Dual Inverter HeatPump Technology",
        "colors": "white",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": [
            "DLHC1455W (White) 048231027977",
            "WM1455HWA (White) 048231027960"
        ],
        "specSheetLink": "https://lg.widen.net/s/7mkmcrkhgw/dlhc1455_-spec-sheet",
        "videos": "https://youtu.be/GS_OHRW8xlM",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "4.2 cu. ft. Large Capacity with NeveRust™ Stainless Steel Drum",
            "14 Drying Programs",
            "12 Options",
            "24\" Width"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® App with ThinQ Care",
            "Auto Cleaning Condenser",
            "Sensor Dry System",
            "Dual Inverter HeatPump™ Technology",
            "Precise Temperature Control with Variable Compressor",
            "Wrinkle Care Option",
            "Delicates Cycle",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Intelligent Electronic Control Panel with LED Display and Dial-A-Cycle™",
            "Tempered Glass Door"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "specialty laundry",
        "title": "WM3555H_A",
        "subtitle": "2.4 cu. ft. Compact Front Load Washer & Dryer Combo",
        "colors": [
            "white",
            "graphite steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": [
            "WM3555HWA (White) 048231028004",
            "WM3555HVA (Graphite Steel) 048231028028"
        ],
        "specSheetLink": "https://lg.widen.net/s/hhkrhhjnnf/wm3555h_a-spec-sheet",
        "videos": "https://youtu.be/GS_OHRW8xlM",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "2.4 cu. ft. Compact Capacity with NeveRust™ Stainless Steel Drum",
            "24\" Width",
            "Direct Drive Motor with 10-Year Limited Warranty",
            "1,400 RPM",
            "14 Washing Programs",
            "13 Wash Options",
            "5 Temperature Settings"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care",
            "AAFA Certified LG Washer",
            "TrueBalance™ Anti-Vibration System",
            "LoadSense",
            "Easy Loading TilTub™",
            "NeveRust™ Stainless Steel Drum",
            "Tempered Glass Door"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Upfront Electronic Control Panel with Dial-A-Cycle™",
            "Tempered Glass Door"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "specialty laundry",
        "title": "WM3998HBA",
        "subtitle": "4.5 cu. ft. Front Load Washer & Dryer Combo",
        "colors": "black steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "WM3998HBA (Black Steel) 048231027946",
        "specSheetLink": "https://lg.widen.net/s/n9cmzsh7tw/wm3998hba-spec-sheet",
        "videos": "https://youtu.be/GS_OHRW8xlM",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "4.5 cu. ft. Ultra Large Capacity with NeveRust™ Stainless Steel Drum",
            "Direct Drive Motor with 10-Year Limited Warranty",
            "1,300 RPM",
            "14 Washing Programs",
            "5 Temperature Settings (All Cold Rinses)"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care",
            "AAFA Certified Sanitary Cycle",
            "Ventless Condensing Drying",
            "LG Steam Technology",
            "ColdWash™ Technology",
            "6Motion™ Technology",
            "TrueBalance™ Anti-Vibration System",
            "SenseClean™",
            "Easy Loading TilTub™"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Upfront Electronic Control Panel with Dual",
            "LED Display and Dial-A-Cycle™",
            "Chrome Square Rimmed Glass Door with Dark Blue Tinted Round Cover"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "wash tower",
        "title": "WKHC252H_A",
        "subtitle": "Single Unit LG WashTower with Center Control 5.0 cu. ft. Front Load Washer & 7.8 cu. ft. Electric Ventless Heat Pump Dryer",
        "colors": [
            "black steel",
            "white"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "ThinQ Up",
            "lGWashTowerWithCenterControl",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": [
            "WKE100HVA (Graphite Steel) 048231029353",
            "WKG101HVA (Graphite Steel) 048231029377",
            "WKE100HWA (White) 048231029360",
            "WKG101HWA (White) 048231029384"
        ],
        "specSheetLink": "https://lg.widen.net/s/jkrlxgjbhj/wkhc252h_a-spec-sheet",
        "videos": [
            "https://youtu.be/8Yg8g5_LCKI",
            "https://youtu.be/y8VUaqpaFc4"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Mega Capacity 5.0 cu. ft. Front Load Washer and 7.8 cu. ft. Ventless Dryer",
            "Dual Inverter HeatPump™ Technology & Inverter Direct Drive Motor System\"",
            "60% more efficient than Electric Dryers",
            "26 Washing Programs / 25 Drying Programs",
            "5 Temperature Settings",
            "10-Year Limited Warranty on Direct Drive Motor (Washer and Dryer)",
            "NeveRust® Stainless Steel Drum",
            "3-Stage Lint Filter"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Smart Technology with ThinQ UP™ & ThinQ Care™",
            "Auto Cleaning Condenser™ & 3-Stage Lint Filter",
            "Built-In Intelligence: AI Sensor Dry with Infrared Sensor",
            "AI Fabric Sensor & Smart Pairing™",
            "NeveRust® Stainless Steel Drum",
            "Advanced Washing: TurboWash® 360° and Allergiene® Wash Cycle",
            "AAFA Certified Washer with Allergiene® Cycle",
            "LoDecibel® Quiet Operation",
            "Wrinkle Care Option",
            "Most Efficient ENERGY STAR® Washer and ENERGY STAR® Certified Dryer"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "LCD Center Control® Panel",
            "Touch Buttons",
            "Tempered Glass Doors"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "wash tower",
        "title": "WKHC152HWA",
        "subtitle": "Single Unit LG WashTower with Center Control 2.4 cu. ft. Front Load Washer and 4.2 cu. ft. Electric Ventless Heat Pump Dryer",
        "colors": "white",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "ThinQ Up",
            "lGWashTowerWithCenterControl",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar",
            "energyStarMostEfficient"
        ],
        "upc": [],
        "specSheetLink": "https://lg.widen.net/s/rgcj2hzfqd/wkhc152hwa_spec-sheet",
        "videos": "https://youtu.be/8Yg8g5_LCKI",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Compact Capacity 2.4 cu. ft. Washer and 4.2 cu. ft. Dryer Single Unit WashTower™ Design",
            "Dual Inverter HeatPump™ Technology (Dryer) & Inverter Direct Drive Motor System (Washer)",
            "5 Temperature Settings",
            "10-Year Limited Warranty on Direct Drive Motor (Washer)",
            "NeveRust® Stainless Steel Drum",
            "3-Stage Lint Filter"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Smart Technology",
            "ThinQ UP™ & ThinQ Care™",
            "Auto Cleaning Condenser™ & 3-Stage Lint Filter",
            "Built-In Intelligence: AI Sensor Dry with Infrared Sensor",
            "AI Fabric Sensor & Smart Pairing™",
            "Advanced Washing: TurboWash® 360° and Allergiene® Wash Cycle",
            "AAFA Certified Washer with Allergiene® Cycle",
            "LoDecibel® Quiet Operation",
            "Wrinkle Care Option",
            "Most Efficient ENERGY STAR® Washer and ENERGY STAR® Certified Dryer"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "LCD Center Control® Panel",
            "Touch Buttons",
            "Tempered Glass Doors"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "inventer linear compressor 10 year warranty"
    },
    {
        "category": "laundry",
        "subcategory": "wash tower",
        "title": "WKE100H_A / WKG101H_A",
        "subtitle": "Single Unit LG Wash Tower with Center Control 4.5 cu. ft. Front Load Washer and 7.4 cu. ft. Dryer",
        "colors": [
            "white",
            "graphite steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "lGWashTowerWithCenterControl",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": [],
        "specSheetLink": "https://lg.widen.net/s/jjzkbzlpzz/wke100h_a--wkg101h_a-spec-sheet",
        "videos": "https://youtu.be/y8VUaqpaFc4",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "4.5 cu. ft. Front Load Washer and 7.4 cu. ft. Dryer",
            "Direct Drive Motor with 10-Year Warranty",
            "6 Washing Cycles / 6 Drying Cycles",
            "5 Temperature Settings"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care",
            "AAFA Certified Allergiene™ Cycle",
            "LG Steam Technology",
            "TrueBalance® Anti-Vibration System",
            "LoadSense",
            "Tub Clean Coach",
            "AI Fabric Sensor / Smart Pairing™",
            "Wrinkle Care Option",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "https://lg.widen.net/s/bfbxgfjgkv/lg-wkhc252-washtower-cycle-guide-fin_lo"
    },
    {
        "category": "laundry",
        "subcategory": "wash tower",
        "title": "WKEX200H_A / WKGX201H_A",
        "subtitle": "Single Unit LG Wash Tower with Center Control 4.5 cu. ft. Front Load Washer and 7.4 cu. ft. Dryer",
        "colors": [
            "candy apple red",
            "nature green",
            "black steel",
            "white"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "lGWashTowerWithCenterControl",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": [],
        "specSheetLink": "https://lg.widen.net/s/hqlxkzjznh/wkex200h_a--wkgx201h_a-spec-sheet",
        "videos": [
            "https://youtu.be/8Yg8g5_LCKI",
            "https://youtu.be/y8VUaqpaFc4"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "4.5 cu. ft. Front Load Washer and 7.4 cu. ft. Dryer",
            "Direct Drive Motor with 10-Year Warranty",
            "6 Washing Cycles / 6 Drying Cycles",
            "5 Temperature Settings"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "SmartDiagnosis™",
            "ThinQ® App with ThinQ Care",
            "AAFA Certified Allergiene™ Cycle",
            "TurboWash® 360 Technology",
            "LG Steam Technology",
            "TrueBalance® Anti-Vibration System",
            "LoadSense",
            "Tub Clean Coach",
            "AI Fabric Sensor and Smart Pairing™",
            "Wrinkle Care Option",
            "FlowSense® Duct Clogging Indicator",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "wash tower",
        "title": "WKEX300HBA / WKGX301HBA",
        "subtitle": "Single Unit LG Wash Tower with Center Control 5.0 cu. ft. Front Load Washer and 7.4 cu. ft. Dryer",
        "colors": "black steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "lGWashTowerWithCenterControl",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": [],
        "specSheetLink": "https://lg.widen.net/s/l69fscv5nl/wkex300hba--wkgx301hba-spec-sheet",
        "videos": "https://youtu.be/y8VUaqpaFc4",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5.0 cu. ft. Front Load Washer and 7.4 cu. ft. Dryer",
            "Direct Drive Motor with 10-Year Warranty",
            "26 Washing Programs / 25 Drying Programs",
            "18 Washing Options / 14 Drying Options",
            "5 Temperature Settings",
            "Closet Depth"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Smart Diagnosis",
            "ThinQ® App with ThinQ Care",
            "AAFA Certified Washer with Allergiene® Cycle",
            "TurboWash® 360 Technology",
            "NeveRust® Stainless Steel Drum",
            "ezDispense® Automatic Dispenser",
            "AI Fabric / Soil Sensors and Smart Pairing™",
            "Cold Wash Option",
            "TrueBalance® Anti-Vibration System",
            "TurboSteam® Technology",
            "Wrinkle Care Option",
            "FlowSense® Duct Clogging Indicator",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "LCD Center Control® Panel",
            "Touch Buttons"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "pedestal washer",
        "title": "WD200CB",
        "subtitle": "29  30 LG SideKick Pedestal Washer",
        "colors": "black steel",
        "logos": [],
        "upc": "WD200CB (Black Steel) 048231026482",
        "specSheetLink": "https://lg.widen.net/s/q6lnzbvb9j/wd200_-spec-sheet",
        "videos": "https://youtu.be/q4xnIMMAfVY",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Compatible with select 29\" & 30\" Front Load Washers",
            "1.0 cu. ft. Capacity with NeveRust™ Stainless Steel Drum",
            "Direct Drive Motor with 10-Year Limited Warranty",
            "700 RPM",
            "6 Washing Programs (Normal, Intimates, Hand Wash, Active Wear, Rinse+Spin, Tub Clean)",
            "3 Options",
            "(Warm Water, Extra Rinse, Child Lock)"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "3Motion Technology",
            "SmartDiagnosis™",
            "Child Lock"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": "Electronic Control Panel with LED Display",
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "pedestal washer",
        "title": "WD300C_",
        "subtitle": "27 LG SideKick Pedestal Washer",
        "colors": [
            "black steel",
            "graphite steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": [
            "WD300CB (Black Steel) 195174038291",
            "WD300CV (Graphite Steel) 195174043271",
            "WD300CW (White) 195174038314"
        ],
        "specSheetLink": "https://lg.widen.net/s/nwmbsgsmbc/wd300c_-spec-sheet",
        "videos": "https://youtu.be/q4xnIMMAfVY",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Compatible with select 27” Front Load Washers",
            "1.0 cu. ft. Capacity",
            "NeveRust® Stainless Steel Tub",
            "Direct Drive Motor with 10-Year Limited Warranty",
            "6 Wash Programs (Normal, Intimates,",
            "Hand Wash, Rinse+Spin, Tub Clean, Downloaded)",
            "5 Wash Options (Warm Water, Rinse, Control Lock, Wi-Fi, Remote Start)"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "3Motion Technology",
            "SmartDiagnosis™",
            "Child Lock"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": "Electronic Control Panel with LED Display",
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "lg styler",
        "title": "S5WBC",
        "subtitle": "LG Styler Steam Closet with TrueSteam Technology and Exclusive Moving Hangers",
        "colors": "cream white",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "S5WBC (Cream White) 195174054970",
        "specSheetLink": "https://lg.widen.net/s/flxt2l7hdj/s5wbc-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Capacity - 14.3 lbs. / 5 Items + 1 (Pants) 180 RPM (M/Hanger)",
            "Wi-Fi Enabled",
            "Reversible Door",
            "Portable Water Fill Container (no hose)",
            "Portable Water Drainage Container (no hose needed)",
            "1 Year Parts and Labor, 10-Year Smart Inverter Compressor Limited Warranty"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "TrueSteam®+B36:B40",
            "Heat-Pump System (Inverter) LG Exclusive Moving Hangers Pants Press Care",
            "ThinQ® App with ThinQ Care"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Touch Control Hidden Display",
            "Interior Lights",
            "Versatile Rack"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "lg styler",
        "title": "S3RFBN / S3WFBN / S3MFBN",
        "subtitle": "LG STYLER Steam Clothing Care",
        "colors": [
            "espresso dark brown",
            "white",
            "mirror finish"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "S3RFBN (Espresso Dark Brown) 048231025164 S3WFBN (White) 048231026314",
        "specSheetLink": "https://lg.widen.net/s/ms5lrnzgpd/s3rfbn-s3wfbn-s3mfbn-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "REFRESH - Reduce wrinkles and keep clothes smelling fresh",
            "SANITARY - Reduces odors and allergens by TrueSteam®",
            "GENTLE DRY - Gently dries clothing at low temperature with Heat Pump",
            "PANTS CREASE CARE - Keeps pants creased while reducing wrinkles elsewhere",
            "Capacity - 11.5 lbs. / 3 Items + 1 (Pants)",
            "Touch Control Hidden Display",
            "Wi-Fi Enabled",
            "TrueSteam®",
            "Heat-Pump System (Inverter)",
            "Interior Lights",
            "Reversible Door",
            "ThinQ® App with ThinQ Care",
            "Versatile Rack",
            "Portable Water Fill Container (no hose needed)",
            "Portable Water Drainage Container (no hose needed)",
            "2 Year Parts and Labor (In Home Service),",
            "10-Year Smart Inverter Compressor"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "laundry",
        "subcategory": "lg styler",
        "title": "S3CW",
        "subtitle": "LG Styler Steam Closet with TrueSteam Technology and Exclusive Moving Hangers",
        "colors": "metallic charcoal",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "S3CW (Metallic Charcoal) 195174 013113",
        "specSheetLink": "https://lg.widen.net/s/kgdr2ggvms/s3cw-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "REFRESH - Reduce wrinkles and keep clothes smelling fresh",
            "SANITARY - Reduces odors and allergens by TrueSteam®",
            "GENTLE DRY - Gently dries clothing at low temperature with Heat Pump",
            "Capacity - 11.4 lbs. (5.2kg) / 3 hangers (2 included)",
            "Touch Control Hidden Display",
            "Wi-Fi Enabled",
            "TrueSteam®",
            "Heat-Pump System (Inverter)",
            "Interior Lights",
            "Reversible Door",
            "ThinQ® App with ThinQ Care",
            "Portable Water Fill Container (no hose needed)",
            "Portable Water Drainage Container (no hose needed)",
            "1 Year Parts and Labor, 10-Year Smart Inverter Compressor Limited Warranty"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "4 - door french door refrigeration",
        "title": "LF29S8365S",
        "subtitle": "29 cu. ft. MyColor 4-Door French Door Refrigerator",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "standardDepthMax"
        ],
        "upc": [
            "LF29S8365S (PrintProof™ Stainless Steel)",
            "195174078945"
        ],
        "specSheetLink": "https://lg.widen.net/s/8wjgzctrkj/lf29s8365s_2024_spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Standard-Depth MAX, 29 cu. ft.",
            "InstaView® MyColor™ with Door-in-Door®",
            "Flat Door with Pocket Handle Design",
            "Full-Convert Drawer™",
            "External Ice & Water Dispenser",
            "Slam-Resistant Door"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "LG ThinQ® featuring ThinQ Care",
            "LG Smart Cooling System",
            "IcePlus™ Production",
            "Door Alarm",
            "LoDecibel™ Quiet Operation",
            "Smart Pull™ Freezer Pocket Handle",
            "Dual Ice Maker",
            "Cool Guard",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "Flat Door with Dual Handle Design",
            "Full-Covert Drawer with Divider",
            "Spill Protector™ Tempered Glass",
            "Hybrid Cantilevered Shelves",
            "6 Door Bins",
            "2 Humidity Crispers",
            "2-Tier Organization Freezer Drawers"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "4 - door french door refrigeration",
        "title": "LMWS27626S",
        "subtitle": "4-Door French Door Refrigerator with Internal Water Dispenser",
        "colors": "printproof stainless steel",
        "logos": "energyStar",
        "upc": [
            "LMWS27626S (PrintProof™ Stainless Steel)",
            "048231806442"
        ],
        "specSheetLink": "https://lg.widen.net/s/cr2qmqgzxg/lmws27626s-spec-sheet",
        "videos": "https://youtu.be/zQqsq_TRKRU",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "26.9 cu. ft.",
            "Fingerprint & Smudge Resistant Exterior",
            "Contoured Doors with Matching Commercial Handles",
            "Hidden Hinges",
            "Premium LED Interior Light"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Smart Cooling™ System",
            "Internal Water Dispenser",
            "SmartDiagnosis™ System",
            "Linear Compressor",
            "10-Year Limited Manufacturer’s Warranty on Compressor",
            "Multi-Air Flow™ System",
            "Electronic/Digital Temperature Controls",
            "Premium Water Filtration System",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "4 SpillProtector™ Tempered Glass Shelves",
            "2 Crispers",
            "6 Door Bins",
            "2-Tier Organization™ Freezer",
            "DuraBase™ Solid Drawer Base",
            "Glide N’ Serve™ Drawer"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "4 - door french door refrigeration",
        "title": "LMWC23626S",
        "subtitle": "4-Door French Door Refrigerator with Internal Water Dispenser",
        "colors": "printproof stainless steel",
        "logos": "energyStar",
        "upc": [
            "LMWC23626S (PrintProof™ Stainless Steel)",
            "048231807036"
        ],
        "specSheetLink": "https://lg.widen.net/s/prk5s8tsjh/lmwc23626s-spec-sheet",
        "videos": "https://youtu.be/zQqsq_TRKRU",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "22.7 cu. ft.",
            "4 Door French Door",
            "Large Capacity with Double Freezer Drawers",
            "PrintProof™ Easy CareFinish",
            "Hidden Hinges"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Smart Cooling™ System",
            "Linear Compressor",
            "Door Cooling+",
            "Internal Water Dispenser",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified",
            "Multi-Air Flow™ System"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "Spill Protector™ Tempered Glass Shelves",
            "2 Humidity Crisper Bins",
            "Glide N’ Serve™ Drawer",
            "DuraBase™ Solid Drawer Base",
            "6 Total Bins"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "4 - door french door refrigeration",
        "title": "LRMWS2906S",
        "subtitle": "29 cu. ft. 4-Door French Door Refrigerator with Slim Design Water Dispenser",
        "colors": "stainless steel",
        "logos": "energyStar",
        "upc": [
            "LRMWS2906S (Stainless Steel)",
            "195174033036",
            "LRMWS2906D (Black Stainless Steel)",
            "195174035740"
        ],
        "specSheetLink": "https://lg.widen.net/s/jhhmvlglpm/lrmws2906_-spec-sheet",
        "videos": "https://youtu.be/zQqsq_TRKRU",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "29 cu. ft. Capacity",
            "Automatic Ice Maker",
            "Double Freezer Drawers",
            "ENERGY STAR® Qualified"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Smart Diagnosis",
            "Door Cooling+",
            "External Water Dispenser with More Chilled Water",
            "Factory Installed Automatic Ice Maker",
            "IcePlus™",
            "Linear Cooling™",
            "Electronic/Digital Temperature Controls",
            "LoDecibel™ Quiet Operation",
            "Multi-Air Flow System"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Premium LED Lighting",
            "Fingerprint and Smudge Resistant, Easy-to-Clean Finish",
            "DuraBase™ Solid Drawer Base"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "4 - door french door refrigeration",
        "title": "LMXS28626_",
        "subtitle": "4-Door French Door Refrigerator",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": [
            "LMXS28626S (Stainless Steel)",
            "048231794787",
            "LMXS28626D (Black Stainless Steel)",
            "048231794770"
        ],
        "specSheetLink": "https://lg.widen.net/s/vzh6p52mt5/lmxs28626_-spec-sheet",
        "videos": "https://youtu.be/nQClpbOhrNU",
        "specTitle1": "STYLISH DESIGN",
        "specList1": [
            "27.8 cu. ft.",
            "French Door",
            "PrintProof™ Easy Care Stainless Finish",
            "Slim SpacePlus® Ice System",
            "Contoured Doors with Matching Commercial Handles",
            "Hidden Hinges",
            "Premium LED Interior Light"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "LG appliances featuring ThinQ® technology (Smart Wi-Fi Enabled)",
            "Smart Cooling® System",
            "SmartDiagnosis™ System",
            "ThinQ Care",
            "Linear Compressor",
            "10-Year Limited Manufacturer’s Warranty on Compressor",
            "Multi-Air Flow Cooling",
            "Electronic Temperature Controls",
            "Tall Ice & Water Dispenser",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified",
            "Fresh Air Filter"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "SpillProtector™ Tempered Glass Shelf /",
            "1 Folding Shelf",
            "6 Door Bins (2 Adjustable Gallon Sized)",
            "Double Freezer Drawers",
            "2 crispers",
            "2-Tier Organization™ Freezer",
            "6 Door Bins"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "4 - door french door refrigeration",
        "title": "LF30S8210S",
        "subtitle": "30 cu.ft. 4-Door French Door Standard Depth Max TM Refrigerator",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "energyStar",
            "standardDepthMax"
        ],
        "upc": [
            "LF30S8210S (PrintProof™ Stainless Steel)",
            "195174060803"
        ],
        "specSheetLink": "https://lg.widen.net/s/qr27lpqq5z/lf30s8210s-spec-sheet",
        "videos": [
            "https://youtu.be/3tbCBbQCoB0",
            "https://youtu.be/AwuWqNRkix0"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "30 cu. ft.",
            "Flat Door with Pocket Handle Design",
            "Full-Convert Drawer™",
            "Internal Water Dispenser",
            "Slam-Resistant Door",
            "Cool Guard"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "LG ThinQ® featuring ThinQ Care (Smart Wi-Fi Enabled)",
            "IcePlus™ Production",
            "Door Alarm",
            "LoDecibel™ Quiet Operation",
            "Smart Pull™ Freezer Pocket Handle",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "Flat Door with Pocket Handle Design",
            "Full-Covert Drawer with Divider",
            "Spill Protector™ Tempered Glass",
            "Hybrid Cantilevered Shelves",
            "6 Door Bins",
            "2 Humidity Crispers",
            "2-Tier Organization Freezer Drawers"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "standard depth max badge"
    },
    {
        "category": "refrigeration",
        "subcategory": "4 - door french door refrigeration",
        "title": "LF29H8330_",
        "subtitle": "29 cu.ft. 4-Door French Door Standard Depth Max TM Refrigerator with Dual Ice Maker",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "energyStar",
            "standardDepthMax"
        ],
        "upc": [
            "LF29H8330S (PrintProof™ Stainless Steel)",
            "195174069875",
            "LF29H8330D (PrintProof™ Black Stainless Steel)",
            "195174069844"
        ],
        "specSheetLink": "https://lg.widen.net/s/wtqdxx6jtn/lf29h8330_-spec-sheet",
        "videos": [
            "https://youtu.be/3tbCBbQCoB0",
            "https://youtu.be/AwuWqNRkix0"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "29 cu.ft.",
            "Flat Door with Dual Handle Design",
            "Full-Convert Drawer™",
            "External Ice & Water Dispenser",
            "Slam-Resistant Door",
            "Cool Guard",
            "Dual Ice Maker"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "LG ThinQ® featuring ThinQ Care (Smart Wi-Fi Enabled)",
            "IcePlus™ Production",
            "Door Alarm",
            "LoDecibel™ Quiet Operation",
            "Smart Pull™ Freezer Pocket Handle",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "Flat Door with Dual Handle Design",
            "Full-Covert Drawer with Divider",
            "Spill Protector™ Tempered Glass",
            "Hybrid Cantilevered Shelves",
            "6 Door Bins",
            "2 Humidity Crispers",
            "2-Tier Organization Freezer Drawers"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "standard depth max badge"
    },
    {
        "category": "refrigeration",
        "subcategory": "4 - door french door refrigeration",
        "title": "LF29S8330_",
        "subtitle": "29 cu.ft. 4-Door French Door Standard Depth Max TM Refrigerator with Dual Ice Maker",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "energyStar",
            "standardDepthMax"
        ],
        "upc": [
            "LF29S8330S (PrintProof™ Stainless Steel)",
            "195174068496",
            "LF29S8330D (PrintProof™ Black Stainless Steel)",
            "195174068540"
        ],
        "specSheetLink": "https://lg.widen.net/s/2tplgfg8cl/lf29s8330_spec-sheet",
        "videos": [
            "https://youtu.be/3tbCBbQCoB0",
            "https://youtu.be/AwuWqNRkix0"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "29 cu.ft.",
            "Flat Door with Pocket Handle Design",
            "Full-Convert Drawer™",
            "External Ice & Water Dispenser",
            "Slam-Resistant Door",
            "Cool Guard",
            "Dual Ice Maker"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "LG ThinQ® featuring ThinQ Care (Smart Wi-Fi Enabled)",
            "IcePlus™ Production",
            "Door Alarm",
            "LoDecibel™ Quiet Operation",
            "Smart Pull™ Freezer Pocket Handle",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "Flat Door with Dual Handle Design",
            "Full-Covert Drawer with Divider",
            "Spill Protector™ Tempered Glass",
            "Hybrid Cantilevered Shelves",
            "6 Door Bins",
            "2 Humidity Crispers",
            "2-Tier Organization Freezer Drawers"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "standard depth max badge"
    },
    {
        "category": "refrigeration",
        "subcategory": "4 - door french door refrigeration",
        "title": "LF26C8210S",
        "subtitle": "25.5 cu. ft. Standard Depth Max 4-Door French Door Refrigerator",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "energyStar",
            "counterDepthMax"
        ],
        "upc": [
            "LF26C8210S (PrintProof™ Stainless Steel)",
            "195174083932"
        ],
        "specSheetLink": "https://lg.widen.net/s/ss7tl8kvn8/lf26c8210s_2024_spec_sheet",
        "videos": [
            "https://youtu.be/AwuWqNRkix0",
            "https://youtu.be/zQqsq_TRKRU"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Counter-Depth MAX, 25.5 cu. ft.",
            "30 cu. ft.",
            "Flat Door with Dual Handle Design",
            "Full-Convert Drawer™",
            "Internal Water Dispenser",
            "Slam-Resistant Door"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "LG ThinQ® featuring ThinQ Care LG Smart Cooling System",
            "IcePlus™ Production",
            "Door Alarm",
            "LoDecibel™ Quiet Operation",
            "Smart Pull™ Freezer Pocket Handle",
            "Cool Guard",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "Flat Door with Pocket Handle Design",
            "Full-Covert Drawer with Divider",
            "Spill Protector™ Tempered Glass",
            "Hybrid Cantilevered Shelves",
            "6 Door Bins",
            "2 Humidity Crispers",
            "2-Tier Organization Freezer Drawers"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "standard depth max badge"
    },
    {
        "category": "refrigeration",
        "subcategory": "4 - door french door refrigeration",
        "title": "LF25G8330S",
        "subtitle": "25 cu. ft. Standard Depth Max4-Door French Door Refrigerator",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "energyStar",
            "counterDepthMax"
        ],
        "upc": [
            "LF25G8330S (PrintProof™ Stainless Steel)",
            "195174073964"
        ],
        "specSheetLink": "https://lg.widen.net/s/d6vg5smkcq/lf25g8330s_spec-sheet",
        "videos": [
            "https://youtu.be/AwuWqNRkix0",
            "https://youtu.be/zQqsq_TRKRU"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Counter-Depth MAX, 25 cu. ft.",
            "Flat Door with Pocket Handle Design",
            "Full-Convert Drawer™",
            "External Ice & Water Dispenser",
            "Slam-Resistant Door"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "LG ThinQ® featuring ThinQ Care",
            "LG Smart Cooling System",
            "IcePlus™ Production",
            "Door Alarm",
            "LoDecibel™ Quiet Operation",
            "Smart Pull™ Freezer Pocket Handle",
            "Dual Ice Maker",
            "Cool Guard",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "Flat Door with Dual Handle Design",
            "Full-Covert Drawer with Divider",
            "Spill Protector™ Tempered Glass",
            "Hybrid Cantilevered Shelves",
            "6 Door Bins",
            "2 Humidity Crispers",
            "2-Tier Organization Freezer Drawers"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "counter depth max badge"
    },
    {
        "category": "refrigeration",
        "subcategory": "4 - door french door refrigeration",
        "title": "LRMDS3006_",
        "subtitle": "29.5 cu. ft. 4-Door French Door Refrigerator with Door-in-Door",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar",
            "lgDoorInDoorWithCraftIce"
        ],
        "upc": [
            "LRMDS3006S (PrintProof™ Stainless Steel)",
            "048231803205",
            "LRMDS3006D (PrintProof™ Black Stainless Steel)",
            "048231803212"
        ],
        "specSheetLink": "https://lg.widen.net/s/kpqwgq55ls/lrmds3006_-spec-sheet",
        "videos": [
            "https://youtu.be/brQEIoupfxM",
            "https://youtu.be/AwuWqNRkix0"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "29.5 cu. ft.",
            "Fits a 35 3/4\" Width Opening",
            "PrintProof™ Easy Care Stainless Finish",
            "LED Interior Light",
            "Contoured Doors with Matching Commercial Handles",
            "Hidden Hinges"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Full-Convert™ Drawer",
            "Smart Cooling Plus™ System",
            "SmartDiagnosis™ System",
            "Dual Ice Maker with Craft Ice™",
            "ThinQ® App with ThinQ Care",
            "Linear Compressor",
            "Slim SpacePlus® Ice System",
            "Electronic/Digital Temperature Controls",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified",
            "Door-in-Door® with Adjustable Bin"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "4 Spill Protector™ Tempered Glass Shelves",
            "2 Humidity Crispers",
            "8 Total Bins (Including Door-in-Door®)",
            "DuraBase™ Solid Freezer Drawer Base",
            "3-Tier Organization Freezer"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "4 - door french door refrigeration",
        "title": "LRMDC2306S",
        "subtitle": "22.5 cu. ft. 4-Door French Door Refrigerator with Door-in-Door",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar",
            "lgDoorInDoorWithCraftIce"
        ],
        "upc": [
            "LRMDC2306S (PrintProof™ Stainless Steel)",
            "048231807289"
        ],
        "specSheetLink": "https://lg.widen.net/s/7lmnzxxqtv/lrmdc2306_-spec-sheet",
        "videos": [
            "https://youtu.be/3tbCBbQCoB0",
            "https://youtu.be/brQEIoupfxM"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "22.5 cu. ft.",
            "Fits a 35 3/4\" Width Opening",
            "PrintProof™ Easy Care Stainless Finish",
            "Contoured Doors with Matching z Commercial Handles",
            "Hidden Hinges",
            "LED Interior Light"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Full-Convert™ Drawer",
            "Smart Cooling Plus™ System",
            "SmartDiagnosis™ System",
            "Dual Ice Maker with Craft Ice™",
            "ThinQ® App with ThinQ Care",
            "Linear Compressor",
            "Slim SpacePlus® Ice System",
            "Electronic/Digital Temperature Controls",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified",
            "Door-in-Door® with adjustable bin"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "4 Spill Protector™ Tempered Glass Shelves",
            "8 Total Bins (Including Door-in-Door®)",
            "3-Tier Organization Freezer",
            "2 Humidity Crispers",
            "DuraBase™ Solid Freezer Drawer Base"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "4 - door french door refrigeration",
        "title": "LRMXS3006S",
        "subtitle": "29.5 cu. ft. 4-Door French Door Refrigerator",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "energyStar"
        ],
        "upc": "LRMXS3006S (Stainless Steel) 195174032992",
        "specSheetLink": "https://lg.widen.net/s/bfvmvvpqcp/lrmxs3006s-spec-sheet",
        "videos": [
            "https://youtu.be/zQqsq_TRKRU",
            "https://youtu.be/oq22ciG5SnQ"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "29.5 cu. ft.",
            "Fits a 35 3/4\" Width Opening",
            "PrintProof™ Easy Care Stainless Finish",
            "LED Interior Light",
            "Contoured Doors with Matching Commercial Handles",
            "Measured Fill Ice and Water Dispenser",
            "Hidden Hinges"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Full-Convert™ Drawer",
            "Dual Ice Maker with Craft Ice™",
            "Smart Cooling Plus™ System",
            "ThinQ® App with ThinQ Care",
            "SmartDiagnosis™ System",
            "Slim SpacePlus® Ice System",
            "Electronic/Digital Temperature Controls",
            "LoDecibel™ Quiet Operation",
            "Cool Guard Metal Back Wall",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "4 Spill Protector™ Tempered Glass Shelves",
            "2 Humidity Crispers",
            "8 Total Bins (Including Door-in-Door®)",
            "DuraBase™ Solid Freezer Drawer Base",
            "3-Tier Organization Freezer"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "4 - door french door refrigeration",
        "title": "LRMVS3006S",
        "subtitle": "29.5 cu. ft. 4-Door French Door Refrigerator with InstaView Door-in-Door",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar",
            "lgDoorInDoorWithCraftIce"
        ],
        "upc": "LRMVS3006S (PrintProof Stainless Steel) 048231806145",
        "specSheetLink": "https://lg.widen.net/s/qkvgdflzxv/lrmvs3006_-spec-sheet",
        "videos": [
            "https://youtu.be/oq22ciG5SnQ",
            "https://youtu.be/brQEIoupfxM",
            "https://youtu.be/3tbCBbQCoB0"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "29.5 cu. ft.",
            "Fits a 35 3/4\" Width Opening",
            "PrintProof™ Easy Care Stainless Finish",
            "InstaView® Door-in-Door®",
            "LED Interior Light",
            "Contoured Doors with MatchingCommercial Handles",
            "Hidden Hinges"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Full-Convert™ Drawer\b",
            "Smart Cooling Plus™ System",
            "SmartDiagnosis™ System",
            "Dual Ice Maker with Craft Ice™",
            "ThinQ® App with ThinQ Care",
            "Linear Compressor",
            "Slim SpacePlus® Ice System",
            "Electronic/Digital Temperature Controls",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified",
            "InstaView® Door-in-Door®"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "4 Spill Protector™ Tempered Glass Shelves",
            "2 Humidity Crispers",
            "6 Total Bins (Including Door-in-Door®)",
            "DuraBase™ Solid Freezer Drawer Base",
            "3-Tier Organization Freezer"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "4 - door french door refrigeration",
        "title": "LRMVC2306_",
        "subtitle": "22.5 cu. ft. 4-Door French Door Refrigerator with InstaView Door-in-Door",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar",
            "lgDoorInDoorWithCraftIce"
        ],
        "upc": [
            "LRMVC2306S (PrintProof Stainless Steel) 048231806183",
            "LRMVC2306D (PrintProof Black Stainless Steel) 048231806190"
        ],
        "specSheetLink": "https://lg.widen.net/s/snljrncrgp/lrmvc2306_-spec-sheet",
        "videos": [
            "https://youtu.be/oq22ciG5SnQ",
            "https://youtu.be/brQEIoupfxM",
            "https://youtu.be/3tbCBbQCoB0"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "22.5 cu. ft.",
            "Fits a 35 3/4\" Width Opening",
            "PrintProof™ Easy Care Stainless Finish",
            "SmartPull™ Freezer Handle",
            "Micro Surface LED Interior Light",
            "Contoured Doors with Matching Commercial Handles",
            "Hidden Hinges"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Full-Convert™ Drawer\b",
            "Smart Cooling Plus™ System",
            "SmartDiagnosis™ System",
            "ThinQ® App with ThinQ Care",
            "Door Alarm",
            "Dual Ice Maker with Craft Ice™",
            "Slim SpacePlus®",
            "Electronic/Digital Temperature Controls",
            "LoDecibel™ Quiet Operation",
            "IcePlus™ Accelerated Freezing Function",
            "ENERGY STAR® Certified",
            "InstaView® Door-in-Door®"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "4 Spill Protector™ Tempered Glass Shelves",
            "2 Humidity Crispers",
            "6 Total Bins (Including Door-in-Door®)",
            "DuraBase™ Solid Drawer Base"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "4 - door french door refrigeration",
        "title": "LMXS28596_",
        "subtitle": "27.6 cu. ft. 4-Door French Door Refrigerator with InstaView Door-in-Door",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": [
            "LMXS28596S (PrintProof™ Stainless Steel)",
            "048231803571",
            "LMXS28596D (PrintProof™ Black Stainless Steel)",
            "048231803595"
        ],
        "specSheetLink": "https://lg.widen.net/s/q7kf5dh6xb/lmxs28596_-spec-sheet",
        "videos": [
            "https://youtu.be/nQClpbOhrNU",
            "https://youtu.be/oq22ciG5SnQ"
        ],
        "specTitle1": "STYLISH DESIGN",
        "specList1": [
            "27.6 cu. ft.",
            "Fits a 35 3/4\" Width Opening",
            "PrintProof™ Easy Care Stainless Finish",
            "InstaView® Door-in-Door®",
            "LED Interior Light",
            "Contoured Doors with Matching Commercial Handles",
            "Hidden Hinges"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Smart Cooling® System",
            "SmartDiagnosis™ System",
            "ThinQ® App with ThinQ Care",
            "Linear Compressor",
            "10-Year Manufacturer’s Limited Warranty on Compressor",
            "Slim SpacePlus® Ice System",
            "Electronic/Digital Temperature Controls",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "4 Spill Protector™ Tempered Glass Shelves",
            "Full Width, Glide N’ Serve™ Drawer",
            "2 Humidity Crispers",
            "7 Total Bins (Including Door-in-Door®)",
            "DuraBase™ Solid Freezer Drawer Base",
            "2-Tier Organization Freezer"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "4 - door french door refrigeration",
        "title": "LMXC22626S",
        "subtitle": "23 cu. ft. 4-Door French Door Refrigerator",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": [
            "LMXC22626S (PrintProof™ Stainless Steel)",
            "195174004937"
        ],
        "specSheetLink": "https://lg.widen.net/s/t5665m2h5b/lmxc22626_-spec-sheet",
        "videos": "https://youtu.be/zQqsq_TRKRU",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "23 cu. ft.",
            "4 Door French Door",
            "Counter Depth with Double Freezer Drawers",
            "PrintProof™ Easy CareFinish",
            "Dispenser Light",
            "Ice and Water Dispenser",
            "Hidden Hinges"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Smart Inverter Compressor",
            "SmartDiagnosis™ System",
            "ThinQ® App with ThinQ Care",
            "Door Cooling+",
            "Pharmaceutical Water Dispenser",
            "Sabbath Mode",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified",
            "Fresh Air Filter"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "Spill Protector™ Tempered Glass Shelves",
            "Folding Shelf",
            "2 Humidity Crisper Bins",
            "Glide N’ Serve™ Drawer",
            "Slim SpacePlus® Ice System",
            "DuraBase™ Solid Drawer Base",
            "6 Total Bins (2 Adjustable Gallon Sized)",
            "SmartPull Handle™"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "3 - door french door refrigeration",
        "title": "LRFCS29D6S",
        "subtitle": "29 cu. ft. Smart PrintProof 3-Door French Door Refrigerator",
        "colors": "printproof stainless steel",
        "logos": "energyStar",
        "upc": [
            "LRFCS29D6S (Stainless Steel)",
            "195174047071"
        ],
        "specSheetLink": "https://lg.widen.net/s/nlcrfjrnms/lrfcs29d6s-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "29 cu. ft. Ultra-Large Capacity",
            "Automatic Ice Maker",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Door Cooling+",
            "Factory Installed Automatic Ice Maker",
            "2 Crispers + Glide N' Serve® Drawer",
            "Smart Pull® Handle"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Sleek, Minimalist Design",
            "PrintProof™ Finish"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "3 - door french door refrigeration",
        "title": "LRFWS2906_",
        "subtitle": "29 cu. ft. Ultra-Large Capacity PrintProof Stainless Steel 3-Door French Door Refrigerator",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": "energyStar",
        "upc": [
            "LRFWS2906S (PrintProof™ Stainless Steel)",
            "195174002278",
            "LRFWS2906D (PrintProof™ Black Stainless Steel)",
            "195174002292"
        ],
        "specSheetLink": "https://lg.widen.net/s/lhxwjwztnj/lrfws2906_-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "29 cu. ft. Ultra Large Capacity",
            "More Chilled Water",
            "Automatic Ice Maker",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "External Water Dispenser with More Chilled Water",
            "Factory Installed Automatic Ice Maker",
            "IcePlus™",
            "External Water Dispenser with LED Light",
            "Larger Chilled Water",
            "2 Crispers + Glide N' Serve® Drawer",
            "Smart Pull® Handle",
            "Multi-Air Flow System"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Premium LED Lighting",
            "Slim Design Water Dispenser",
            "PrintProof™ Finish and Smudge Resistant",
            "Exterior"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "3 - door french door refrigeration",
        "title": "LRFS28XB_",
        "subtitle": "28 cu. ft. Ultra-Capacity Standard Depth 3-Door French Door, Ice and Water with Single Ice Refrigerator Transition from LFXS26973_  LFXS28968_",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": [
            "LRFS28XBS (PrintProof™ Stainless Steel)",
            "195174055243",
            "LRFS28XBD (PrintProof™ Black Stainless Steel)",
            "195174057094"
        ],
        "specSheetLink": "https://lg.widen.net/s/x5fsz5ljfv/lrfs28xb_-spec-sheet",
        "videos": "https://youtu.be/nQClpbOhrNU",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "28 cu. ft. Ultra-Large Capacity",
            "Pharmaceutical Water Filter",
            "Automatic Ice Maker",
            "10-Year Manufacturer's Limited Warranty on Compressor",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "Door Cooling+",
            "Factory Installed Automatic Ice Maker",
            "IcePlus™",
            "Tall Ice & Water Dispenser® with Pharmaceutical Water Filter",
            "2 Crispers + Glide N' Serve® Drawer",
            "Slim SpacePlus® Ice System",
            "Smart Cooling® System",
            "Smart Pull® Handle",
            "Multi-Air Flow System"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": "PrintProof™ Finish",
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "3 - door french door refrigeration",
        "title": "LRFLS3206S",
        "subtitle": "32 cu.ft. 3-Door French Door Standard-Depth MAX Capacity",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "energyStar",
            "standardDepthMax"
        ],
        "upc": [
            "LRFLS3206S (PrintProof™ Stainless Steel)",
            "195174065808"
        ],
        "specSheetLink": "https://lg.widen.net/s/d58jbrvtzh/lrfls3206s-spec-sheet",
        "videos": [
            "https://youtu.be/zQqsq_TRKRU",
            "https://youtu.be/nQClpbOhrNU"
        ],
        "specTitle1": "ORGANIZATION",
        "specList1": [
            "4 Split Shelves",
            "Spill Protector™ Tempered Glass",
            "2 Humidity Crispers",
            "8 Door Bins",
            "2-Tier Organization Freezer Drawers"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "LG ThinQ® featuring ThinQ Care (Smart Wi-Fi Enabled)",
            "Smart Cooling® System",
            "Door Cooling+",
            "SmartDiagnosis™ System",
            "IcePlus™ Production",
            "Door Alarm",
            "LoDecibel™ Quiet Operation",
            "Smart Pull™ Freezer Door Handle",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "31.7 cu. ft.",
            "",
            "Sleek, Minimalist Design",
            "Internal Water Dispenser",
            "Factory Installed Automatic Ice Maker",
            "Cool Guard"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "standard depth max badge]"
    },
    {
        "category": "refrigeration",
        "subcategory": "3 - door french door refrigeration",
        "title": "LRFLC2706S",
        "subtitle": "26.5 cu. ft. Counter-Depth Max 3-Door French Door Refrigerator",
        "colors": "stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar",
            "counterDepthMax"
        ],
        "upc": [
            "LRFLC2706S (Stainless Steel)",
            "195174039274"
        ],
        "specSheetLink": "https://lg.widen.net/s/dnklvwdwlk/lrflc2706s-spec-sheet",
        "videos": [
            "https://youtu.be/3tbCBbQCoB0",
            "https://youtu.be/nQClpbOhrNU"
        ],
        "specTitle1": "ORGANIZATION",
        "specList1": [
            "4 Spill Protector™ Tempered Glass Shelves",
            "Glide N’ Serve™ Drawer",
            "2 Humidity Crispers",
            "8 Total Bins (2 Adjustable Gallon Sized)",
            "DuraBase™ Solid Freezer Drawer Base"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Door Cooling+",
            "Internal Water Dispenser",
            "SmartDiagnosis™ System",
            "Sabbath Mode",
            "10-Year Manufacturer’s Limited Warranty on Compressor",
            "Smart Inverter Compressor",
            "CoolGuard",
            "Decibel™ Quiet Operation",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "26.5 cu. ft.",
            "Fits a 35 3/4\" Width Opening",
            "Counter-Depth Max",
            "LED Interior Light",
            "Modern Sleek Design",
            "Hidden Hinges"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "standard depth max badge]"
    },
    {
        "category": "refrigeration",
        "subcategory": "3 - door french door refrigeration",
        "title": "LRFXS3106S",
        "subtitle": "31 cu.ft. Capacity 3-Door French Door Standard-Depth MAX Refrigerator with Four Types of Ice",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "energyStar",
            "standardDepthMax"
        ],
        "upc": [
            "LRFXS3106S (PrintProof™ Stainless Steel)",
            "195174065792"
        ],
        "specSheetLink": "https://lg.widen.net/s/dxw2nw2wmv/lrfxs3106s-spec-sheet",
        "videos": [
            "https://youtu.be/zQqsq_TRKRU",
            "https://youtu.be/nQClpbOhrNUU"
        ],
        "specTitle1": "ORGANIZATION",
        "specList1": [
            "Hybrid Cantilevered Shelves",
            "Spill Protector™ Tempered Glass",
            "2 Humidity Crispers",
            "Glide N’ Serve® Drawer",
            "6 Total Bins (2 Adjustable Gallon Sized)",
            "Pull Drawer Freezer Door",
            "2-Tier Organization Freezer Drawers"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "LG ThinQ® featuring ThinQ Care (Smart Wi-Fi Enabled)",
            "Smart Cooling® System",
            "Door Cooling+",
            "SmartDiagnosis™ System",
            "Dual Ice Maker",
            "IcePlus™ Production",
            "Door Alarm",
            "LoDecibel™ Quiet Operation",
            "Smart Pull™ Freezer Door Handle",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "26.5 cu. ft.",
            "Fits a 35 3/4\" Width Opening",
            "Counter-Depth Max",
            "LED Interior Light",
            "Modern Sleek Design",
            "Hidden Hinges"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "standard depth max badge]"
    },
    {
        "category": "refrigeration",
        "subcategory": "4 - door french door refrigeration",
        "title": "LRFXC2606S",
        "subtitle": "26 cu. ft. 3-Door French Door, Counter-Depth MAX, Ice and Water with Dual Ice Refrigerator",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar",
            "counterDepthMax"
        ],
        "upc": [
            "LRFXC2606S (PrintProof™ Stainless Steel)",
            "195174057339"
        ],
        "specSheetLink": "https://lg.widen.net/s/rmhpm7zxqw/lrfxc2606s-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "26 cu. ft.",
            "Counter-Depth MAX",
            "10-Year Manufacturer's Limited Warranty on Compressor",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "Door Cooling+",
            "Dual Ice Maker",
            "IcePlus™",
            "Smooth Touch Dispenser",
            "Tall Ice & Water Dispenser®",
            "2 Crispers + Glide N' Serve® Pantry Drawer",
            "Slim SpacePlus® Ice System",
            "Smart Inverter Compressor",
            "Smart Pull® Handle",
            "Fresh Air Filter"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Sophisticated Style & Design",
            "Stainless Steel Interior Panel",
            "Cool Guard"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "3 - door french door refrigeration",
        "title": "LF31S6360S",
        "subtitle": "31 cu. ft. Standard-Depth Max 3-Door French Door Refrigerator Transition from LRFOC2606S",
        "colors": "stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "ThinQ Up",
            "Ada",
            "energyStar"
        ],
        "upc": [
            "LF31S6360S (PrintProof™ Stainless Steel)",
            "195174081549"
        ],
        "specSheetLink": "https://lg.widen.net/s/kshwbft55t/lf31s6360s_spec-sheet",
        "videos": "https://youtu.be/zQqsq_TRKRU",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Standard-Depth MAX, 31 cu. ft.",
            "Edge-to-Edge InstaView® Design",
            "LG Smart Cooling System",
            "Dual Ice Makers",
            "Tall Ice & Water Dispenser®",
            "Slim SpacePlus® Ice System"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Door Cooling+",
            "Dual Ice Makers",
            "SmartDiagnosis™ System",
            "Auto Closing Door Hinge",
            "Smart Inverter Compressor",
            "10-Year Manufacturer’s Limited Warranty on Compressor",
            "Fresh Air Filter",
            "CoolGuard",
            "Decibel™ Quiet Operation",
            "ENERGY STAR® Certified",
            "LG ThinQ® with ThinQ Care™ and ThinQ UP™"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "4 Spill Protector™ Tempered Glass Shelves",
            "Glide N’ Serve™ Drawer",
            "2 Humidity Crispers",
            "8 Total Bins (2 Adjustable Gallon Sized)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "3 - door french door refrigeration",
        "title": "LF26C6360S",
        "subtitle": "26 cu. ft. Counter-Depth Max 3-Door French Door Refrigerator Transition from LRFOC2606S",
        "colors": "stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "ThinQ Up",
            "Ada"
        ],
        "upc": [
            "LF31S6360S (PrintProof™ Stainless Steel)",
            "195174081549"
        ],
        "specSheetLink": "https://lg.widen.net/s/k789w8gvvs/lf26c6360s_2024-refrigeration-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Counter-Depth MAX, 26 cu. ft.",
            "Edge-to-Edge InstaView® Design",
            "LG Smart Cooling System",
            "Dual Ice Makers",
            "Tall Ice & Water Dispenser®",
            "Slim SpacePlus® Ice System"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Door Cooling+",
            "Dual Ice Makers",
            "SmartDiagnosis™ System",
            "Auto Closing Door Hinge",
            "Smart Inverter Compressor",
            "10-Year Manufacturer’s Limited Warranty on Compressor",
            "Fresh Air Filter",
            "CoolGuard",
            "Decibel™ Quiet Operation",
            "ENERGY STAR® Certified",
            "LG ThinQ® with ThinQ Care™ and ThinQ UP™"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "4 Spill Protector™ Tempered Glass Shelves",
            "Glide N’ Serve™ Drawer",
            "2 Humidity Crispers",
            "8 Total Bins (2 Adjustable Gallon Sized)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "3 - door french door refrigeration",
        "title": "LRYXC2606_",
        "subtitle": "26 cu. ft. Capacity 3-Door French Door Counter-Depth Refrigerator with Four Types of Ice",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": [
            "LRYXC2606S (PrintProof™ Stainless Steel)",
            "195174037690",
            "LRYXC2606D (PrintProof™ Black Stainless Steel)",
            "195174037706"
        ],
        "specSheetLink": "https://lg.widen.net/s/nwbdp5x8qv/lryxc2606_-spec-sheet",
        "videos": [
            "https://youtu.be/yVU1p5vOdmQ",
            "https://youtu.be/o21MBa5Xiqk",
            "https://youtu.be/SDHWbToggwY"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "26 cu. ft.",
            "Counter-Depth MAX",
            "Premium LED Lighting",
            "10-Year Manufacturer's Limited Warranty on Compressor",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "Door Cooling+",
            "IcePlus™",
            "4 types of ice",
            "Smooth Touch Dispenser",
            "UVnano™ Water Dispenser",
            "Tall Ice & Water Dispenser®",
            "Multi-Air Flow System",
            "Smart Inverter Compressor",
            "Fresh Air Filter"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Welcome Lighting",
            "Premium Ice Bin Design",
            "2 Crispers + Glide N' Serve® Pantry Drawer",
            "3-Tier Organization™ Freezer",
            "Slim SpacePlus® Ice System",
            "Cool Guard with Backlit Lighting",
            "PrintProof™ Finish",
            "Smart Pull® Handle"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "3 - door french door refrigeration",
        "title": "LRYKC2606_",
        "subtitle": "26 cu. ft. Smart Mirror InstaView Counter-Depth MAX 3-Door French Door Refrigerator",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar",
            "counterDepthMax"
        ],
        "upc": [
            "LRYKC2606S (PrintProof™ Stainless Steel)",
            "195174034828",
            "LRYKC2606D (PrintProof™ Black Stainless Steel)",
            "195174037669"
        ],
        "specSheetLink": "https://lg.widen.net/s/sxrkrdghsm/lrykc2606_-spec-sheet",
        "videos": [
            "https://youtu.be/yVU1p5vOdmQ",
            "https://youtu.be/nQClpbOhrNU",
            "https://youtu.be/o21MBa5Xiqk",
            "https://youtu.be/SDHWbToggwY"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "26 cu. ft.",
            "Counter-Depth MAX",
            "Premium LED Lighting",
            "10-Year Manufacturer's Limited Warranty on Compressor",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "Door-in-Door® with adjustable bin",
            "Door Cooling+",
            "IcePlus™",
            "4 types of ice",
            "Smooth Touch Dispenser",
            "UVnano™ Water Dispenser",
            "Tall Ice & Water Dispenser®",
            "Multi-Air Flow System",
            "Smart Inverter Compressor",
            "Fresh Air Filter"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Welcome Lighting",
            "Premium Ice Bin Design",
            "2 Crispers + Glide N' Serve® Drawer",
            "3-Tier Organization™ Freezer",
            "Slim SpacePlus® Ice System",
            "Cool Guard with Back Lit Lighting"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "counter depth max badge"
    },
    {
        "category": "refrigeration",
        "subcategory": "3 - door french door refrigeration",
        "title": "LRFCS25D3S",
        "subtitle": "25 cu. ft. Ultra-Large Capacity 3-Door French Door Refrigerator (33 Width)",
        "colors": "printproof stainless steel",
        "logos": "energyStar",
        "upc": [
            "LRFCS25D3S (PrintProof™ Stainless Steel)",
            "048231807814"
        ],
        "specSheetLink": "https://lg.widen.net/s/cjjzgrdp86/lrfcs25d3s-spec-sheet",
        "videos": "https://youtu.be/zQqsq_TRKRU",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "25 cu. ft. Ultra Large Capacity",
            "33\" Width",
            "10-Year Manufacturer's Limited Warranty on Compressor",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Door Cooling+",
            "2 Crispers + Glide N' Serve® Drawer",
            "Smart Cooling® System",
            "Multi-Air Flow System"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Sophisticated Style & Design",
            "PrintProof™ and Smudge Resistant, Easy-to-Clean Finish"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "3 - door french door refrigeration",
        "title": "LF21G6200S",
        "subtitle": "21 cu.ft. Capacity 3-Door French Door Refrigerator (33 Width)",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "energyStar"
        ],
        "upc": [
            "LF21G6200S (PrintProof™ Stainless Steel)",
            "195174069943"
        ],
        "specSheetLink": "https://lg.widen.net/s/6glfz8swq7/lf21g6200s-spec-sheet",
        "videos": "https://youtu.be/nQClpbOhrNU",
        "specTitle1": "STYLISH DESIGN",
        "specList1": [
            "21 cu.ft.",
            "33” Width",
            "Flat Door with Dual Handle Design",
            "Factory Installed Automatic Ice Maker"
        ],
        "specTitle2": "ORGANIZATION",
        "specList2": [
            "Flat Door with Dual Handle Design",
            "Tempered Glass",
            "2 Humidity Crispers",
            "6 Door Bins",
            "Pull Drawer Freezer Door",
            "2-Tier Organization Freezer Drawers"
        ],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [
            "LG ThinQ® featuring ThinQ Care (Smart Wi-Fi Enabled)",
            "IcePlus™ Production",
            "Door Alarm",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "3 - door french door refrigeration",
        "title": "LRFXS2503_",
        "subtitle": "33 Wide 3-Door French Door Refrigerator",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": [
            "LRFXS2503S (PrintProof™ Stainless Steel)",
            "772454071928",
            "LRFXS2503D (PrintProof™ Black Stainless Steel)",
            "772454071935"
        ],
        "specSheetLink": "https://lg.widen.net/s/qj2gmlrhj9/lrfxs2503_-spec-sheet",
        "videos": "https://youtu.be/nQClpbOhrNU",
        "specTitle1": "STYLISH DESIGN",
        "specList1": [
            "24.5 cu. ft.",
            "Fits a 32 3/4\" Width Opening",
            "PrintProof™ Easy Care Stainless Finish",
            "SmartPull™ Freezer Handle",
            "LED Interior Light",
            "Contoured Doors with Matching Commercial Handles",
            "Hidden Hinges"
        ],
        "specTitle2": "ORGANIZATION",
        "specList2": [
            "4 Spill Protector™ Tempered Glass Shelves",
            "2 Humidity Crispers",
            "6 Total Bins (3 Adjustable, 3 Gallon Sized)",
            "DuraBase™ Solid Freezer Drawer Base"
        ],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [
            "Smart Cooling Plus™ System",
            "SmartDiagnosis™ System",
            "ThinQ® App with ThinQ Care",
            "Smart Inverter Compressor",
            "Door Alarm",
            "Multi-Air Flow™ System",
            "10-Year Manufacturer’s Limited Warranty on Compressor",
            "DoorCooling+",
            "Electronic/Digital Temperature Controls",
            "IcePlus™ Accelerated Freezing Function",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "3 - door french door refrigeration",
        "title": "LFCS22520_",
        "subtitle": "22 cu. ft. Super Capacity 3-Door French Door Refrigerator (30 Width)",
        "colors": [
            "stainless steel",
            "black stainless steel"
        ],
        "logos": "energyStar",
        "upc": [
            "LFCS22520S (Stainless Steel)",
            "048231787307",
            "LFCS22520D (Black Stainless Steel )",
            "048231795135"
        ],
        "specSheetLink": "https://lg.widen.net/s/t5snfpvphc/lfcs22520-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "22 cu. ft. Super Capacity",
            "10-Year Manufacturer's Limited Warranty on Compressor",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Factory Installed Ice Maker",
            "2 Crispers + Glide N' Serve® Drawer",
            "Smart Cooling® System",
            "Multi-Air Flow System",
            "LoDecibel™ Quiet Operation"
        ],
        "specTitle3": "",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "3 - door french door refrigeration",
        "title": "LFDS22520S",
        "subtitle": "21.8 cu. ft. 3-Door French Door Refrigerator (30 Width)",
        "colors": "stainless steel",
        "logos": "energyStar",
        "upc": [
            "LFDS22520S (Stainless Steel)",
            "048231795319"
        ],
        "specSheetLink": "https://lg.widen.net/s/mcxbbxjhkm/lfds22520s-spec-sheet",
        "videos": [],
        "specTitle1": "STYLISH DESIGN",
        "specList1": [
            "21.8 cu. ft.",
            "3-Door French Door",
            "Smart Cooling® System",
            "Contoured Doors with Matching Commercial Handles",
            "Hidden Hinges",
            "Premium LED Interior Light"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Smart Inverter Compressor",
            "10-Year Manufacturer’s Limited Warranty on Compressor",
            "Multi-Air Flow Cooling",
            "Electronic Temperature Controls",
            "IcePlus™ Accelerated Freezing Function",
            "SmartDiagnosis™ System",
            "External Water Dispenser",
            "Door Alarm",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "4 Split Shelves",
            "SpillProtector™ Tempered Glass Shelves",
            "Full Width, Glide N’ Serve™ Drawer",
            "2 Humidity Crispers",
            "7 Door Bins (5 Gallon Sized, 2 Half)",
            "DuraBase™ Solid Freezer Drawer Base"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "3 - door french door refrigeration",
        "title": "LRFDS3016S",
        "subtitle": "3-Door French Door Refrigerator",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar",
            "lgDoorInDoorWithCraftIce"
        ],
        "upc": [],
        "specSheetLink": "https://lg.widen.net/s/wdhgmbtdms/lrfds3016_-spec-sheet",
        "videos": [
            "https://youtu.be/UzVFxGPGElQ",
            "https://youtu.be/yVU1p5vOdmQ"
        ],
        "specTitle1": "ORGANIZATION",
        "specList1": [
            "4 Spill Protector™ Tempered Glass Shelves",
            "10 Total Bins (Including Door-in-Door®)",
            "3-Tier Organization Freezer",
            "2 Humidity Crispers",
            "DuraBase™ Solid Freezer Drawer Base"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Smart Cooling Plus™ System",
            "SmartDiagnosis™ System",
            "Dual Ice Maker with Craft Ice™",
            "ThinQ® App with ThinQ Care",
            "Linear Compressor",
            "Slim SpacePlus® Ice System",
            "Electronic/Digital Temperature Controls",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified",
            "Door-In-Door® with Adjustable Bin"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "29.7 cu. ft.",
            "Fits a 35 3/4\" Width Opening",
            "PrintProof™ Easy Care Stainless Finish",
            "Contoured Doors with Matching Commercial Handles",
            "Hidden Hinges",
            "LED Interior Light"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "3 - door french door refrigeration",
        "title": "LRFVC2406S",
        "subtitle": "3-Door French Door Refrigerator with InstaView Door-in-Door",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar",
            "lgDoorInDoorWithCraftIce",
            "rated1FrenchDoorRefrigerator"
        ],
        "upc": [],
        "specSheetLink": "https://lg.widen.net/s/spt8xkwsgj/lrfvc2406_-spec-sheet",
        "videos": [
            "https://youtu.be/zQqsq_TRKRU",
            "https://youtu.be/nQClpbOhrNU",
            "https://youtu.be/UzVFxGPGElQ"
        ],
        "specTitle1": "ORGANIZATION",
        "specList1": [
            "4 Spill Protector™ Tempered Glass Shelves",
            "Glide N’ Serve™ Drawer",
            "2 Humidity Crispers",
            "10 Total Bins (Including Door-in-Door®)",
            "DuraBase™ Solid Freezer Drawer Base"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Smart Cooling Plus™ System",
            "SmartDiagnosis™ System",
            "Dual Ice Maker with Craft Ice™",
            "ThinQ® App with ThinQ Care",
            "Door Alarm",
            "Measure Fill",
            "10-Year Manufacturer’s Limited Warranty on Inverter Compressor",
            "Slim SpacePlus®",
            "Electronic/Digital Temperature Controls",
            "IcePlus™ Accelerated Freezing Function",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "23.5 cu. ft.",
            "Fits a 35 3/4\" Width Opening",
            "PrintProof™ Easy Care Stainless Finish",
            "InstaView® Door-in-Door®",
            "SmartPull™ Freezer Handle",
            "Micro Surface LED Interior Light",
            "Contoured Doors with Matching Commercial Handles",
            "Hidden Hinges",
            "CoolGuard™"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "1 rated french door refrigerator badge"
    },
    {
        "category": "refrigeration",
        "subcategory": "3 - door french door refrigeration",
        "title": "LFXS26973_",
        "subtitle": "26.2 cu. ft. Smart Wi-Fi Enabled Large-Capacity 3-Door French Door Refrigerator with Dual Ice Makers",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": "energyStar",
        "upc": [
            "LFXS26973S (PrintProof™ Stainless Steel)",
            "048231797122",
            "LFXS26973D (PrintProof™ Black Stainless Steel)",
            "048231797115"
        ],
        "specSheetLink": "https://lg.widen.net/s/ttwrczzlf7/lfxs26973_-spec-sheet",
        "videos": [],
        "specTitle1": "ORGANIZATION",
        "specList1": [
            "4 Split Shelves",
            "Hybrid Cantilevered Shelves",
            "Spill Protector™ Tempered Glass",
            "2 Humidity Crispers",
            "Glide N’ Serve® Drawer",
            "6 Total Bins (2 Adjustable Gallon Sized)",
            "Pull Drawer Freezer Door",
            "2-Tier Organization Freezer Drawers",
            "DuraBase™ Solid Freezer Drawer Base",
            "Freezer Drawer Divider"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "LG appliances featuring ThinQ® technology (Smart Wi-Fi Enabled)",
            "Smart Cooling® System",
            "SmartDiagnosis™ System",
            "Dual Ice Maker",
            "ThinQ Care",
            "IcePlus™ Production",
            "Door Alarm",
            "LoDecibel™ Quiet Operation",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "26.2 cu. ft.",
            "PrintProof™ Finish",
            "Slim SpacePlus® Ice System",
            "Integrated Tall Ice & Water Dispenser",
            "Contour Door",
            "Hidden Hinges",
            "Ceiling LED"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "side-by-side refrigeration",
        "title": "LRSWS2806S",
        "subtitle": "28 cu. ft. Side-by-Side Refrigerator with External Water Dispenser",
        "colors": "printproof stainless steel",
        "logos": [],
        "upc": "UPC CODES  LRSWS2806S (PrintProof Stainless Steel) 195174042304",
        "specSheetLink": "https://lg.widen.net/s/7qgmgnsrsc/lrsws2806s-spec-sheet",
        "videos": "https://youtu.be/zQqsq_TRKRU",
        "specTitle1": "STYLISH DESIGN",
        "specList1": [
            "28 cu. ft. Ultra-Large Capacity",
            "Automatic Ice Maker",
            "DOE Compliant"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Door Cooling+",
            "Factory Installed Automatic Ice Maker",
            "Linear Cooling™",
            "Multi-Air Flow System"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "PrintProof™ Finish",
            "Flat Panel Door Design with Pocket Handles",
            "LED Display"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "side-by-side refrigeration",
        "title": "LRSXS2706_",
        "subtitle": "27 cu. ft. Side-by-Side Refrigerator with Smooth Touch Ice Dispenser",
        "colors": [
            "printproof stainless steel",
            "smooth white",
            "stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": [
            "LRSXS2706S (PrintProof Stainless Steel) 195174007723",
            "LRSXS2706V (Stainless Steel Look) 195174007747",
            "LRSXS2706W (Smooth White) 195174007778"
        ],
        "specSheetLink": "https://lg.widen.net/s/9pcvc6qhn8/lrsxs2706_-spec-sheet",
        "videos": [],
        "specTitle1": "STYLISH DESIGN",
        "specList1": [
            "27.2 cu. ft.",
            "SpacePlus® Ice System",
            "Premium LED lighting in Refrigerator and Freezer",
            "Ice & Water Dispenser",
            "Sleek, flat-panel design with pocket handles",
            "Hidden Hinges"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Smooth Touch Ice Dispenser",
            "Interior Touch Display Controls",
            "SpacePlus® Ice System",
            "Multi-Air Flow + Door Cooling+",
            "LoDecibel™ Quiet Operation",
            "Door Alarm"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "4 Refrigerator Shelves",
            "4 Refrigerator Door Bins",
            "5 Freezer Shelves, 1 Drawers"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "side-by-side refrigeration",
        "title": "LRSOS2706_",
        "subtitle": "27 cu. ft. Large Capacity Side-by-Side InstaView Refrigerator with Craft Ice",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": [
            "LRSOS2706S (PrintProof Stainless Steel) 195174007631",
            "LRSOS2706D (PrintProof Black Stainless Steel) 195174007624"
        ],
        "specSheetLink": "https://lg.widen.net/s/sgqvhm9mfg/lrsos2706_-spec-sheet",
        "videos": [
            "https://youtu.be/nQClpbOhrNU",
            "https://youtu.be/UzVFxGPGElQ",
            "https://youtu.be/dZBJ1yRfuck"
        ],
        "specTitle1": "STYLISH DESIGN",
        "specList1": [
            "PrintProof™ Finish",
            "Edge-to-Edge InstaView® Design",
            "Interior LED Lighting",
            "Interior Touch Display Controls",
            "Flat Panel Door Design with Pocket Handles",
            "Smooth Touch Dispenser",
            "Cool Guard Interior Panel"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "Door Cooling+",
            "Dual Ice Maker with Craft Ice™",
            "IcePlus™",
            "Tall Ice & Water Dispenser® with Pharmaceutical Water Filter",
            "UVnano™ Water Dispenser",
            "Smart Inverter Compressor",
            "SpacePlus® Ice System",
            "Multi-Air Flow System"
        ],
        "specTitle3": "SPECIFICATIONS",
        "__EMPTY": "",
        "specList3": [
            "27 cu. ft. Ultra-Large Capacity",
            "10-Year Manufacturer's Limited Warranty on Compressor",
            "ENERGY STAR® Certified"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "side-by-side refrigeration",
        "title": "LRSXC2306S",
        "subtitle": "23 cu. ft. Side-by-Side Counter Depth Refrigerator with Smooth Touch Ice Dispenser",
        "colors": "stainless steel",
        "logos": [],
        "upc": "LRSXC2306S (Stainless Steel) 195174024614",
        "specSheetLink": "https://lg.widen.net/s/rvk6znpvms/lrsxc2306_-spec-sheet",
        "videos": [],
        "specTitle1": "STYLISH DESIGN",
        "specList1": [
            "22.5 cu. ft.",
            "Counter Depth",
            "Ice & Water Dispenser",
            "SpacePlus® Ice System",
            "Premium LED lighting in Refrigerator and Freezer",
            "Sleek, flat-panel design with pocket handles",
            "Hidden Hinges"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Smooth Touch Ice Dispenser",
            "Interior Touch Display Controls",
            "SpacePlus® Ice System",
            "Multi-Air Flow + Door Cooling+",
            "LoDecibel™ Quiet Operation",
            "Door Alarm"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "4 Refrigerator Shelves",
            "4 Refrigerator Door Bins",
            "5 Freezer Shelves, 1 Drawers"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "top mount refrigeration",
        "title": "LT11C2000V",
        "subtitle": "11 cu. ft. Compact Design Top Freezer Refrigerator",
        "colors": "stainless steel",
        "logos": [],
        "upc": "LT11C2000V (Stainless Steel Look) 195174065129",
        "specSheetLink": "https://lg.widen.net/s/tnllbwzld6/lt11c2000v-spec-sheet",
        "videos": [],
        "specTitle1": "STYLISH DESIGN",
        "specList1": [
            "11.1 cu. ft",
            "23 5/8\" Width",
            "Contoured Doors with Pocket Handles",
            "LED Interior Lighting"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Multi-Air Flow™ System",
            "LoDecibel™ Quiet Operation",
            "Electronic/Digital Temperatur Controls",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "3 Refrigerator Shelves (2 Fixed + 1 Sliding)",
            "1 Refrigerator Crisper Bin",
            "2 Freezer Bins"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "top mount refrigeration",
        "title": "LT18S2100_",
        "subtitle": "Top Mount Refrigerator",
        "colors": [
            "printproof stainless steel",
            "white"
        ],
        "logos": "energyStar",
        "upc": [
            "LT18S2100S 195174071205",
            "LT18S2100W 195174076873"
        ],
        "specSheetLink": "https://lg.widen.net/s/qpz5nkgbcp/lt18s2100_-spec-sheet",
        "videos": [],
        "specTitle1": "STYLISH DESIGN",
        "specList1": [
            "18 cu. ft",
            "27 1/.2\" Width",
            "Black décor Pocket",
            "Premium LED Lighting",
            "Smart Inverter Compressor"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Multi-Air Flow™ System",
            "LoDecibel™ Quiet Operation",
            "Electronic/Digital Temperatur Controls",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "2 Refrigerator Shelves",
            "2 Freezer Bins"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "top mount refrigeration",
        "title": "LTCS20020_",
        "subtitle": "Top Mount Refrigerator",
        "colors": [
            "stainless steel",
            "smooth white",
            "black"
        ],
        "logos": "energyStar",
        "upc": [
            "LTCS20020S (Stainless Steel) 048231805179",
            "LTCS20020W (Smooth White) 195174001448",
            "LTCS20020B (Smooth Black) 195174004548"
        ],
        "specSheetLink": "https://lg.widen.net/s/rcm8tnhkhg/ltcs20020_-spec-sheet",
        "videos": [],
        "specTitle1": "STYLISH DESIGN",
        "specList1": [
            "20.2 cu. ft.",
            "29 3/4\" Width",
            "Premium LED Interior Light",
            "Contoured Doors with Pocket Handles"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Multi-Air Flow Cooling",
            "Inverter Compressor",
            "6 -10 Year Manufacturer’s Limited Warranty on Inverter Compressor",
            "LoDecibel™ Quiet Operatio"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "1 Freezer Drawer",
            "2 Full Freezer Bins",
            "2 Refrigerator Door Bins"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "top mount refrigeration",
        "title": "LTCS20030S",
        "subtitle": "Top Mount Refrigerator",
        "colors": "stainless steel",
        "logos": [
            "energyStar",
            "garageReady"
        ],
        "upc": [
            "LTCS20030S (Stainless Steel)",
            "048231807227"
        ],
        "specSheetLink": "https://lg.widen.net/s/xfs7wxsxgs/ltcs20030s-spec-sheet",
        "videos": [],
        "specTitle1": "STYLISH DESIGN",
        "specList1": [
            "20.2 cu. ft.",
            "29 3/4\" Width",
            "Contoured Doors with Pocket Handles",
            "Tempered Glass Shelves",
            "Ceiling LED lighting"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Multi-Air Flow™ System",
            "LoDecibel™ Quiet Operation",
            "Electronic/Digital Temperature Controls",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "2 Refrigerator Shelves",
            "2 Refrigerator Door Bins",
            "2 Humidity Crispers",
            "2 Full Freezer Bins"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "top mount refrigeration",
        "title": "LRTLS2403S",
        "subtitle": "24 cu. ft. Top Freezer Refrigerator",
        "colors": "stainless steel",
        "logos": [
            "energyStar",
            "garageReady"
        ],
        "upc": [
            "LRTLS2403S (Stainless Steel)",
            "195174014233"
        ],
        "specSheetLink": "https://lg.widen.net/s/lvjlwzhwnv/lrtls2403s-spec-sheet",
        "videos": [],
        "specTitle1": "STYLISH DESIGN",
        "specList1": [
            "23.8 cu. ft.",
            "33\" Width",
            "Contoured Doors with Pocket Handles",
            "Internal Water Dispenser",
            "Spill Protector™ Tempered Glass Shelves",
            "Ceiling LED lighting"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Multi-Air Flow™ System",
            "LoDecibel™ Quiet Operation",
            "Electronic/Digital Temperatur Controls",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "2 Refrigerator Shelves",
            "2 Humidity Crispers",
            "2 Full Freezer Bins",
            "2 Refrigerator Door Bins"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "bottom mount refrigeration",
        "title": "LRBCC1204S",
        "subtitle": "Bottom Freezer Refrigerator",
        "colors": "printproof stainless steel",
        "logos": "energyStar",
        "upc": [
            "LRBCC1204S (PrintProof™ Stainless Steel)",
            "048231807364"
        ],
        "specSheetLink": "https://lg.widen.net/s/rglhlrnsgl/lrbcc1204s-spec-sheet",
        "videos": [],
        "specTitle1": "STYLISH DESIGN",
        "specList1": [
            "12 cu. ft.",
            "23 1/2\" Width",
            "Premium LED Interior Light",
            "Contoured Doors with Pocket Handles",
            "Hidden Hinges"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Multi-Air Flow Cooling",
            "LoDecibel™ Quiet Operation",
            "SmartDiagnosis™ System",
            "Electronic Temperature Controls",
            "Door Alarm",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "2 Freezer Drawers",
            "1 Crisper",
            "3 Refrigerator Door Bins"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "bottom mount refrigeration",
        "title": "LRBNC1104S",
        "subtitle": "Bottom Freezer Refrigerator",
        "colors": "printproof stainless steel",
        "logos": "energyStar",
        "upc": [
            "LRBNC1104S (PrintProof™ Stainless Steel)",
            "195174001868"
        ],
        "specSheetLink": "https://lg.widen.net/s/mw2kljgqsb/lrbnc1104s-spec-sheet",
        "videos": [],
        "specTitle1": "STYLISH DESIGN",
        "specList1": [
            "10.8 cu. ft.",
            "23.42\" Width",
            "Premium LED Interior Light",
            "Contoured Doors with Pocket Handles",
            "Hidden Hinges"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Multi-Air Flow Cooling",
            "SmartDiagnosis™ System",
            "Electronic Temperature Controls",
            "6 -10 Year Manufacturer’s Limited Warranty on Inverter Compressor",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "2 Freezer Drawers",
            "1 Crisper Bin",
            "3 Refrigerator Door Bins"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "bottom mount refrigeration",
        "title": "LBNC15231V",
        "subtitle": "14.7 cu. ft. Bottom Freezer Refrigerator 28” Wide",
        "colors": "stainless steel (pcm)",
        "logos": "energyStar",
        "upc": [
            "LBNC15231V (Platinum Silver PCM)",
            "772454071300"
        ],
        "specSheetLink": "https://lg.widen.net/s/kmgfskbkll/lbnc15231v-spec-sheet",
        "videos": [],
        "specTitle1": "STYLISH DESIGN",
        "specList1": [
            "14.7 cu. ft.",
            "27 3/8\" Width",
            "Ceiling LED Lighting",
            "Reversible Door",
            "Contoured Doors with Pocket Handles",
            "Hidden Hinges"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Multi-Air Flow™ System",
            "Door Cooling+",
            "Linear Compressor",
            "10-Year Manufacturer’s Limited Warranty on Compressor",
            "LoDecibel™ Quiet Operation",
            "SmartDiagnosis™ System",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "1 Crisper",
            "6 Refrigerator Door Bins",
            "3 Freezer Drawers"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "1 rated bottom freezer refrigerator badge"
    },
    {
        "category": "refrigeration",
        "subcategory": "bottom mount refrigeration",
        "title": "LRDCS2603_",
        "subtitle": "Bottom Freezer Refrigerator",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": "energyStar",
        "upc": [
            "LRDCS2603S (PrintProof™ Stainless Steel)",
            "048231803885",
            "LRDCS2603D (PrintProof™ Black Stainless Steel)",
            "195174001455"
        ],
        "specSheetLink": "https://lg.widen.net/s/wxld9sdghd/lrdcs2603-spec-sheet",
        "videos": [],
        "specTitle1": "STYLISH DESIGN",
        "specList1": [
            "25.5 cu. ft.",
            "Premium LED Lighting",
            "Contoured Doors with Matching Handles",
            "Hidden Hinges"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Smart Cooling™ System",
            "Multi-Air Flow™ System",
            "Inverter Compressor",
            "10-Year Manufacturer’s Limited Warranty on Inverter Compressor",
            "LoDecibel™ Quiet Operation",
            "SmartDiagnosis™ System",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "Full Width, Glide N’ Serve™ Drawer",
            "2 Humidity Crispers",
            "5 Refrigerator Door Bins (2 Gallon Sized, 2 Half, 1 Small)"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "2 rated bottom freezer refrigerator badge"
    },
    {
        "category": "refrigeration",
        "subcategory": "single door refrigeration",
        "title": "LROFC0605V",
        "subtitle": "5.8 cu. ft. Single Door Freezer",
        "colors": "platinum silver",
        "logos": "energyStar",
        "upc": [
            "LROFC0605V (Platinum Silver)",
            "195174003008"
        ],
        "specSheetLink": "https://lg.widen.net/s/wwrjldq2qb/lrofc0605v-spec-sheet",
        "videos": [],
        "specTitle1": "STYLISH DESIGN",
        "specList1": [
            "5.3 cu. ft.",
            "20 7/8\" Width",
            "Contoured Doors with Pocket Handles",
            "Hidden Hinges"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Direct Cooling System",
            "Inverter Compressor",
            "Knob Dial Temperature Controls"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "Easy-Reach Organization",
            "6 Freezer Shelves",
            "1 Lower Bin",
            "4 Freezer Door Bins"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "refrigeration",
        "subcategory": "single door refrigeration",
        "title": "LRONC0605V",
        "subtitle": "5.79 cu. ft. Single Door Refrigerator",
        "colors": "platinum silver3",
        "logos": [],
        "upc": [
            "LRONC0605V (Platinum Silver3)",
            "1951740390386"
        ],
        "specSheetLink": "https://lg.widen.net/s/8xcvvdxnhk/lronc0605v-spec-sheet",
        "videos": [],
        "specTitle1": "STYLISH DESIGN",
        "specList1": [
            "5.79 cu. ft.",
            "20 5/8\" Width",
            "Contoured Doors with Pocket Handles",
            "Hidden Hinges"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Direct Cooling System",
            "Manual Ice Tray",
            "Inverter Compressor",
            "Knob Dial Temperature Controls"
        ],
        "specTitle3": "ORGANIZATION",
        "__EMPTY": "",
        "specList3": [
            "2 Refrigerator Shelves",
            "1 Crisper Bin",
            "1 Basket Egg and 2 Full Refrigerator Door Bins"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "electric ranges",
        "title": "LTEL7337_",
        "subtitle": "7.3 cu. ft. Smart Wi-Fi Enabled Electric Double Oven Slide-In Range with ProBake Convection and InstaView",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": [
            "LTEL7337F (PrintProof™ Stainless Steel)",
            "48231344067",
            "LTEL7337D (PrintProof™ Black Stainless Steel)",
            "48231344074"
        ],
        "specSheetLink": "https://lg.widen.net/s/qlghhbvvfv/ltel7337_-spec-sheet",
        "videos": [
            "https://youtu.be/TIyw0jr76Mw",
            "https://youtu.be/67MfK417R_8"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "7.3 cu. ft. Total Oven Capacity (3.0 cu. ft. / 4.3 cu. ft.)",
            "Tall Upper Oven (6”)",
            "5 Radiant Elements"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "SmartDiagnosis™",
            "EasyClean® Technology",
            "UltraHeat™ 3200W Element Built-In",
            "Air Fry with ProBake® Convection"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "PrintProof™ Finish",
            "SmoothTouch™ Glass Controls",
            "2 Standard Racks with 4 Positions",
            "InstaView® & WideView™ Window",
            "Brilliant Blue Interior",
            "Front Control Knobs"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "electric ranges",
        "title": "LSEL6337F",
        "subtitle": "6.3 cu. ft. Smart Wi-Fi Enabled ProBake Convection InstaView Electric Slide-in Range with Air Fry & Air Sous-Vide",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "LSEL6337F (PrintProof™ Stainless Steel) 048231341820",
        "specSheetLink": "https://lg.widen.net/s/vsk77xxbk8/lsel6337_-spec-sheet",
        "videos": [
            "https://youtu.be/TIyw0jr76Mw",
            "https://youtu.be/67MfK417R_8",
            "https://youtu.be/k6xBG0Ay-TI",
            "https://youtu.be/Q61fB4wjpf4"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "6.3 cu. ft. Total Oven Capacity",
            "0.8 cu. ft. Storage Drawer",
            "5 Radiant Elements",
            "Built-In Air Fry with ProBake Convection®",
            "Air Sous-Vide",
            "EasyClean® + Self Clean"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "SmartDiagnosis™\b",
            "Radiant Cooktop with UltraHeat™",
            "ProBake Convection®",
            "EasyClean® + Self Clean",
            "Air Sous-Vide",
            "Tovala, Nestle and Kraft-Heinz",
            "Certified Sabbath mode",
            "Air Fry Tray"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Glass Touch Controls (SmoothTouch™)",
            "InstaView® & WideView™ Window",
            "PrintProof™ Finish",
            "Front Tilt-Control Knobs LED Illuminated",
            "2 Standard Racks with 7 Positions"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "electric ranges",
        "title": "LSIL6336FE 6.3",
        "subtitle": "cu. ft. Smart Induction Slide-in Range with Air Fry, ProBake Convection and Air Sous Vide",
        "colors": "printproof stainless steel",
        "logos": "energyStar",
        "upc": "LSIL6336FE (PrintProof Stainless Steel) 048231347471",
        "specSheetLink": "https://lg.widen.net/s/82mjfl9bcn/lsil6336fe-spec-sheet",
        "videos": [
            "https://youtu.be/TIyw0jr76Mw",
            "https://youtu.be/67MfK417R_8",
            "https://youtu.be/k6xBG0Ay-TI",
            "https://youtu.be/Q61fB4wjpf4"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "6.3 cu. ft. Large Capacity",
            "5 Elements (4 Induction, 1 Radiant)",
            "0.8 cu. ft. Storage Drawer",
            "ProBake Convection®",
            "Built-in Air Fry",
            "EasyClean® + Self Clean"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "ProBake Convection®",
            "Air Fry with Air Fry Tray",
            "Air Sous-Vide",
            "EasyClean® + Self Clean",
            "Scan-to-cook",
            "Voice Control (Works with Amazon Alexa and Google Assistant)",
            "LG Smart Hood and OTR Connectivity",
            "Certified Sabbath Mode",
            "2 Heavy Duty Racks",
            "Temperature Probe"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "SmoothTouch® Glass Controls",
            "InstaView® & WideView™ Window",
            "PrintProof® Stainless Steel",
            "Brilliant Blue Interior"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "electric ranges",
        "title": "LSEL6335_E",
        "subtitle": "6.3 cu. ft. Smart Wi-Fi Enabled ProBake Convection InstaView Electric Slide-in Range with Air Fry",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": "energyStar",
        "upc": "LSEL6335FE (PrintProof Stainless Steel) 048231347396 LSEL6335DE (PrintProof Black Stainless Steel) 048231347402",
        "specSheetLink": "https://lg.widen.net/s/fxkqgtxcxq/lsel6335fe_spec-sheet",
        "videos": [
            "https://youtu.be/TIyw0jr76Mw",
            "https://youtu.be/67MfK417R_8",
            "https://youtu.be/Q61fB4wjpf4"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "6.3 cu. ft. Total Oven Capacity",
            "0.8 cu. ft. Storage Drawer",
            "5 Radiant Elements",
            "Built-In Air Fry with ProBake Convection®",
            "EasyClean® + Self Clean",
            "E-Star® Certified"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "SmartDiagnosis™\b",
            "Radiant Cooktop with UltraHeat™",
            "ProBake Convection®",
            "EasyClean® + Self Clean",
            "Tovala, Nestle and Kraft-Heinz",
            "Certified Sabbath mode",
            "Air Fry Tray"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Glass Touch Controls (SmoothTouch™)",
            "InstaView® & WideView™ Window",
            "PrintProof™ Finish",
            "Front Tilt-Control Knobs",
            "2 Standard Racks with 7 Positions"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "induction ranges",
        "title": "LSIL6334FE",
        "subtitle": "6.3 cu. ft. Smart Induction Slide-in Range with Air Fry and ProBake Convection",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "ThinQ Up",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "sidechef",
            "energyStar"
        ],
        "upc": 48231347488,
        "specSheetLink": "https://lg.widen.net/s/klfn2cgldg/lsil6334fe_2023_spec_sheet_range",
        "videos": [
            "https://youtu.be/TIyw0jr76Mw",
            "https://youtu.be/WLdA8MIswyA",
            "https://youtu.be/67MfK417R_8"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "4 Induction Elements",
            "0.8 cu. ft. Storage Drawer",
            "ProBake Convection®",
            "Built-in Air Fry + Tray",
            "EasyClean® + Self Clean",
            "Certified Sabbath Mode",
            "2 Standard Racks"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "ProBake Convection®",
            "Air Fry with Air Fry Tray",
            "EasyClean® + Self Clean",
            "Scan-to-cook",
            "Voice Control (Works with Amazon Alexa and Google Assistant)",
            "LG Smart Hood and OTR Connectivity",
            "Energy Efficiency Indicator",
            "Voice Control (Works with Amazon Alexa and Google Assistant)",
            "LG Smart Hood and OTR Connectivity",
            "Certified Sabbath Mode",
            "2 Heavy Duty Racks",
            "Temperature Probe"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "SmoothTouch® Glass Controls",
            "WideView™ Window",
            "PrintProof® Stainless Steel",
            "Brilliant Blue Interior"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "induction ranges",
        "title": "LSEL6333_",
        "subtitle": "6.3 cu. ft. Smart Wi-Fi Enabled Fan Convection Electric Slide-in Range with Air Fry & EasyClean",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": [
            "LSEL6333F (PrintProof™ Stainless Steel)",
            "048231341905",
            "LSEL6333D (PrintProof™ Black Stainless Steel)",
            "048231342018"
        ],
        "specSheetLink": "https://lg.widen.net/s/vdsxsqbbbf/lsel6333_-spec-sheet",
        "videos": [
            "https://youtu.be/TIyw0jr76Mw",
            "https://youtu.be/67MfK417R_8"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "6.3 cu. ft. Large Capacity",
            "5 Radiants Elements",
            "Fan Convection",
            "Built-In Air Fry",
            "EasyClean® + Self Clean"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "SmartDiagnosis™",
            "Radiant Cooktop with UltraHeat™",
            "EasyClean®+ Self Clean",
            "Built-In Air Fry with Fan Convection",
            "Works with Amazon Alexa, Google Assistant, SIDECHEF, lnnit, Nestle, Kraft-Heinz",
            "Certified Sabbath Mode",
            "Air Fry Tray"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Glass Touch Control (SmoothTouch™)",
            "WideView™ Window",
            "PrintProof™ Finish",
            "Front-Tilt Weighted Control Knobs",
            "2 Standard Racks with 7 Positions"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "induction ranges",
        "title": "LSEL6331F",
        "subtitle": "6.3 cu. ft. Smart Wi-Fi Enabled Electric Slide-in Range with EasyClean",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": [
            "LSEL6331F (PrintProof™ Stainless Steel)",
            "048231342025"
        ],
        "specSheetLink": "https://lg.widen.net/s/vn2fzs2lw9/lsel6331f-spec-sheet",
        "videos": [
            "https://youtu.be/67MfK417R_8",
            "https://youtu.be/Q61fB4wjpf4"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "6.3 cu. ft. Capacity",
            "0.8 cu. ft. Storage Drawer",
            "5 Radiant Elements",
            "EasyClean® + Self Clean"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "SmartDiagnosis™",
            "EasyClean® + Self Clean",
            "Scan-to-cook",
            "Works with Amazon Alexa, Google Assistant, SIDECHEF, lnnit, Nestle, Kraft-Heinz",
            "Certified Sabbath mode"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "SmoothTouch™ Glass Controls",
            "WideView™ Window",
            "Pro-Style Weighted Knobs",
            "PrintProof™ Finish",
            "2 Standard Racks with 7 Positions"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "induction ranges",
        "title": "LSIL6332FE",
        "subtitle": "6.3 cu. ft. Smart Induction Slide-in Range with Air Fry and Fan Convection",
        "colors": "stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "ThinQ Up",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "sidechef",
            "energyStar",
            "innit"
        ],
        "upc": [
            "LSIL6332FE (Stainless Steel)",
            "48231347495"
        ],
        "specSheetLink": "https://lg.widen.net/s/nfzlpvjgxm/lsil6332fe_2024_spec-sheet",
        "videos": [
            "https://youtu.be/TIyw0jr76Mw",
            "https://youtu.be/Q61fB4wjpf4"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "6.3 cu. ft. Large Capacity",
            "ThinQ® Technology with ThinQ Care & ThinQ UP",
            "Fan Convection with Air Fry",
            "EasyClean® and Self Clean",
            "Cookware Compatibility Indicator",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Smart Technology",
            "3.9kW Induction Element",
            "Fan Convection",
            "Air Fry",
            "EasyClean® and Self Clean",
            "Cookware Compatibility Indicator"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "SmoothTouch® Glass Controls",
            "WideView™ Window",
            "PrintProof® Stainless Steel",
            "Brilliant Blue Interior"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "electric ranges",
        "title": "LDE4413ST",
        "subtitle": "7.3 cu. ft. Freestanding Electric Double Oven Range with ProBake Convection & EasyClean Technology",
        "colors": "stainless steel",
        "logos": [],
        "upc": "LDE4413ST (Stainless Steel) 048231 319508",
        "specSheetLink": "https://lg.widen.net/s/x9dpswxlqb/lde4413_-spec-sheet",
        "videos": "https://youtu.be/67MfK417R_8",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "7.3 cu. ft. Total Oven Capacity",
            "Tall Upper Oven (6”)",
            "5 Radiant Elements",
            "* Available only on Black Stainless Steel model"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ProBake Convection®",
            "EasyClean® Technology",
            "Self Clean (Upper and Lower Ovens)",
            "UltraHeat™ 3200W Element (3.0 cu. ft. / 4.3 cu. ft.)"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Fingerprint & Smudge Resistant Exterior*",
            "SmoothTouch™ Glass Controls",
            "VFD Scrolling Display",
            "3 Standard Racks with 7 Positions",
            "WideView™ Window",
            "Brilliant Blue Interior",
            "Front Tilt Control Knobs"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "electric ranges",
        "title": "LREL6325_",
        "subtitle": "6.3 cu. ft. Smart Wi-Fi Enabled True Convection InstaView Electric Range with Air Fry",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": [
            "LREL6325F (PrintProof™ Stainless Steel)",
            "048231341455",
            "LREL6325D (PrintProof™ Black Stainless Steel)",
            "048231341462"
        ],
        "specSheetLink": "https://lg.widen.net/s/nrjxsdgkqv/lrel6325_-spec-sheet",
        "videos": [
            "https://youtu.be/67MfK417R_8",
            "https://youtu.be/TIyw0jr76Mw"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "6.3 cu. ft. Capacity",
            "5 Cooktop Elements with Warming Zone",
            "3 Full-Width Racks with 7 Rack Positions"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "SmartDiagnosis™",
            "EasyClean® + Self Clean",
            "InstaView® Window",
            "Built-In Air Fry with True Convection",
            "UltraHeat™ 3200W Element"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "PrintProof™ Finish",
            "SmoothTouch™ Glass Control System",
            "Ceramic Glass, Stainless Steel Cooktop Finish",
            "Brilliant Blue Interior",
            "WideView™ Window"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "electric ranges",
        "title": "LREL6323_",
        "subtitle": "6.3 cu. ft. Smart Wi-Fi Enabled Fan Convection Electric Range with Air Fry & EasyClean",
        "colors": [
            "stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": [
            "LREL6323S (Stainless Steel)",
            "048231341431",
            "LREL6323BD (PrintProof™ Black Stainless Steel)",
            "048231341448"
        ],
        "specSheetLink": "https://lg.widen.net/s/nrjxsdgkqv/lrel6325_-spec-sheet",
        "videos": [
            "https://youtu.be/67MfK417R_8",
            "https://youtu.be/TIyw0jr76Mw"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "6.3 cu. ft. Capacity",
            "5 Cooktop Elements",
            "2 Full-Width Racks with 7 Rack Positions"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "EasyClean® + Self Clean",
            "Built-In Air Fry with Fan Convection",
            "3200W UltraHeat™"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Touchpad Control System",
            "Halogen Oven Light",
            "WideView™ Window",
            "Ceramic Glass, Stainless Steel Coooktop Finish",
            "Stainless Steel Control Knobs",
            "PrintProof™ Black Stainless Steel",
            "Brilliant Blue Interior"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "electric ranges",
        "title": "LREL6321S",
        "subtitle": "6.3 cu. ft. Smart Wi-Fi Enabled Electric Range with EasyClean",
        "colors": "stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "LREL6321S (Stainless Steel) 048231341417",
        "specSheetLink": "https://lg.widen.net/s/wfbghchpx8/lrel6321s-spec-sheet",
        "videos": "https://youtu.be/67MfK417R_8",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "6.3 cu. ft. Total Oven Capacity",
            "5 Radiant Elements",
            "2 Full-Width Racks with 7 Rack Positions"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "SmartDiagnosis™",
            "EasyClean® Technology",
            "UltraHeat™ 3200W Element Built-In Air Fry with ProBake® Convection"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Touchpad Control System",
            "Halogen Oven Light",
            "WideView™ Window",
            "Porcelain Enamel Coooktop Finish",
            "Stainless Steel Knobs",
            "Brilliant Blue Interior"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "2 rated electric range badge"
    },
    {
        "category": "cooking",
        "subcategory": "gas ranges",
        "title": "LTGL6937_",
        "subtitle": "6.9 cu. ft. Smart Wi-Fi Enabled Gas Double Oven Slide-In Range with ProBake Convection and InstaView",
        "colors": [
            "stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": [
            "LTGL6937F (PrintProof™ Stainless Steel)",
            "048231344173",
            "LTGL6937D (PrintProof™ Black Stainless Steel)",
            "048231344098"
        ],
        "specSheetLink": "https://lg.widen.net/s/lsmrdxfsp6/ltgl6937_-spec-sheet",
        "videos": [
            "https://youtu.be/67MfK417R_8",
            "https://youtu.be/TIyw0jr76Mw"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "6.9 cu. ft. Capacity",
            "22K BTU on Edge-to-Edge Cooktop",
            "EasyClean® + Self Clean"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "SmartDiagnosis™",
            "EasyClean® + Self Clean",
            "Built-In Air Fry with ProBake® Convection"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "PrintProof™ Finish*",
            "Glass Touch (SmoothTouch™)",
            "2 Standard Racks with 4 Rack Positions",
            "Front Control Knobs",
            "InstaView® & WideView™ Window",
            "Brilliant Blue Interior"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "gas ranges",
        "title": "LSGL6337F",
        "subtitle": "6.3 cu. ft. Smart Wi-Fi Enabled ProBake Convection InstaView Gas Slide-in Range with Air Fry & Air Sous-Vide",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": [
            "LSGL6337F (PrintProof™ Stainless Steel)",
            "048231341868"
        ],
        "specSheetLink": "https://lg.widen.net/s/wrvvmmmltv/lsgl6337_-spec-sheet",
        "videos": [
            "https://youtu.be/Q61fB4wjpf4",
            "https://youtu.be/67MfK417R_8",
            "https://youtu.be/TIyw0jr76Mw",
            "https://youtu.be/k6xBG0Ay-TI"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "6.3 cu. ft. Capacity",
            "0.8 cu. ft. Storage Drawer",
            "22K BTU on Edge-to-Edge Cooktop",
            "Air Sous-Vide",
            "Built-In Air Fry with ProBake Convection®",
            "EasyClean® + Self Clean"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "SmartDiagnosis™",
            "ProBake Convection®",
            "EasyClean® + Self Clean",
            "Air Sous-Vide",
            "Tovala, Nestle and Kraft-Heinz",
            "Certified Sabbath mode",
            "Air Fry Tray",
            "Wok Grate",
            "Cast Iron Griddle",
            "Meat Probe",
            "*This feature only works with LSGL6337F"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Glass Touch Controls (SmoothTouch™)",
            "InstaView® & WideView™ Window",
            "PrintProof™ Finish",
            "Front Tilt-Control Knobs LED Illuminated",
            "2 Standard Racks with 7 Positions"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "gas ranges",
        "title": "LSDL6336F",
        "subtitle": "6.3 cu. ft. Smart Wi-Fi Enabled ProBake Convection Dual Fuel Slide-in Range with Air Fry",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "LSDL6336F (PrintProof Stainless Steel) 048231342629",
        "specSheetLink": "https://lg.widen.net/s/nbgmdljrj6/lsdl6336_-spec-sheet",
        "videos": [
            "https://youtu.be/67MfK417R_8",
            "https://youtu.be/TIyw0jr76Mw",
            "https://youtu.be/k6xBG0Ay-TI"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "6.3 cu. ft. Large Capacity",
            "Storage Drawer",
            "22K BTU on Edge-to-Edge Cooktop",
            "Air Sous-Vide",
            "Built-In Air Fry with ProBake Convection®",
            "EasyClean® + Self Clean"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "SmartDiagnosis™",
            "ProBake Convection®",
            "EasyClean® + Self Clean",
            "Air Sous-Vide",
            "Works with Amazon Alexa, Google Assistant, SideChef",
            "Certified Sabbath Mode",
            "Air Fry Tray",
            "Griddle Plate"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Glass Touch Controls (SmoothTouch™)",
            "InstaView® & WideView™ Window",
            "PrintProof™ Finish",
            "Front Tilt - Control Knobs",
            "2 Heavy Duty Oven Racks with 7 Positions"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "gas ranges",
        "title": "LSGL6335_",
        "subtitle": "",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": [
            "LSGL6335F (PrintProof Stainless Steel) 048231341882",
            "LSGL6335D (PrintProof Black Stainless Steel) 048231341899"
        ],
        "specSheetLink": "https://lg.widen.net/s/8ksmwx2lsr/lsgl6335_-spec-sheet",
        "videos": [
            "https://youtu.be/67MfK417R_8",
            "https://youtu.be/TIyw0jr76Mw"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "6.3 cu. ft. Capacity",
            "20K BTU on Edge-to-Edge Cooktop",
            "Built-In Air Fry with ProBake Convection®",
            "EasyClean® + Self Clean"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "SmartDiagnosis™",
            "ProBake Convection®",
            "EasyClean® + Self Clean",
            "Tovala, Nestle and Kraft-Heinz",
            "Certified Sabbath mode",
            "Air Fry Tray",
            "Cast Iron Griddle",
            "*This feature only works with LSGL6335F"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Glass Touch Controls (SmoothTouch™)",
            "InstaView® & WideView Tinted Window",
            "PrintProof™ Finish",
            "Front Tilt-Control Knobs",
            "2 Standard Racks with 7 Positions"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "gas ranges",
        "title": "LSGL5833_",
        "subtitle": "5.8 cu. ft. Smart Wi-Fi Enabled Fan Convection Gas Slide-in Range with Air Fry & EasyClean",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": [
            "LSGL5833F (PrintProof Stainless Steel) 048231341912",
            "LSGL5833D (PrintProof Black Stainless Steel) 048231342032"
        ],
        "specSheetLink": "https://lg.widen.net/s/zvrb98b52x/lsgl5833_-spec-sheet",
        "videos": [
            "https://youtu.be/67MfK417R_8",
            "https://youtu.be/TIyw0jr76Mw"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5.8 cu. ft. Large Capacity",
            "20K BTU on Edge-to-Edge Cooktop",
            "Fan Convection",
            "Built-In Air Fry",
            "EasyClean® + Self Clean"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "SmartDiagnosis™",
            "20K BTU Edge-to-edge Cooktop with UltraHeat™",
            "EasyClean® + Self Clean Technology (Smart Wi-Fi Enabled)",
            "Built-In Air Fry with Fan Convection",
            "Works with Amazon Alexa, Google Assistant, SIDECHEF, lnnit, Nestle, Kraft-Heinz",
            "Certified Sabbath Mode",
            "Air Fry Tray",
            "Cast Iron Griddle"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Glass Touch Control (SmoothTouch™)",
            "WideView™ Window",
            "PrintProof™ Finish",
            "Front-Tilt Weighted Control Knobs",
            "2 Standard Racks with 7 Positions"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "gas ranges",
        "title": "LSGL5831F",
        "subtitle": "5.8 cu. ft. Smart Wi-Fi Enabled Gas Slide-in Range with EasyClean",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "LSGL5831F (PrintProof Stainless Steel) 048231342049",
        "specSheetLink": "https://lg.widen.net/s/kqscrv5frg/lsgl5831f-spec-sheet",
        "videos": [
            "https://youtu.be/Q61fB4wjpf4",
            "https://youtu.be/67MfK417R_8"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5.8 cu. ft. Capacity",
            "0.8 cu. ft. Storage Drawer",
            "17K BTU on Edge-to-Edge Cooktop",
            "EasyClean® + Self Clean"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "SmartDiagnosis™",
            "17K BTU Burner with SuperBoil™",
            "EasyClean® + Self Clean",
            "Scan-to-cook",
            "Works with Amazon Alexa, Google Assistant, SIDECHEF, lnnit, Nestle, Kraft-Heinz",
            "Certified Sabbath mode"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "SmoothTouch™ Glass Controls",
            "WideView™ Window",
            "Pro-Style Weighted Knobs",
            "PrintProof™ Finish",
            "2 Standard Racks with 7 Positions"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "gas ranges",
        "title": "LDG4313ST",
        "subtitle": "6.9 cu. ft. Freestanding Gas Double Oven Range with ProBake Convection & EasyClean Technology",
        "colors": "stainless steel",
        "logos": [],
        "upc": "LDG4313ST (Stainless Steel) 048231319454",
        "specSheetLink": "https://lg.widen.net/s/b7dztvtkx2/ldg4313_-spec-sheet",
        "videos": "https://youtu.be/67MfK417R_8",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "6.9 cu. ft. Total Oven Capacity (2.6 cu. ft. / 4.3 cu. ft.)",
            "5 Sealed Gas Cooktop Burners (1 Oval)"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "UltraHeat™ 18,500 BTU Burner",
            "ProBake Convection®",
            "EasyClean® Technology",
            "Self Clean (Upper and Lower Ovens)",
            "* Available only on Black Stainless Steel model"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Fingerprint & Smudge Resistant Exterior*",
            "SmoothTouch™ Glass Controls",
            "VFD Scrolling Display",
            "3 Standard Racks with 6 Positions",
            "WideView™ Window",
            "Brilliant Blue Interior",
            "Front Tilt Control Knobs"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "gas ranges",
        "title": "LRGL5825_",
        "subtitle": "5.8 cu. ft. Smart Wi-Fi Enabled True Convection InstaView Gas Range with Air Fry",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": [
            "LRGL5825F (PrintProof Stainless Steel) 048231341516",
            "LRGL5825D (PrintProof Black Stainless Steel) 048231341523"
        ],
        "specSheetLink": "https://lg.widen.net/s/q6fqxmxdbs/lrgl5825_-spec-sheet",
        "videos": [
            "https://youtu.be/67MfK417R_8",
            "https://youtu.be/TIyw0jr76Mw"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5.8 cu. ft. Capacity",
            "Storage Drawer",
            "5 Sealed Cooktop Burners with 5th Oval Burner",
            "Griddle Plate"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "UltraHeat™ 20K BTU Power Burner",
            "Built-In Air Fry with True Convection",
            "EasyClean® + Self Clean",
            "InstaView® Window",
            "* Available only on Stainless Steel and Black Stainless",
            "Steel models"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "PrintProof™ Finish*",
            "SmoothTouch™ Glass Control System",
            "2 Standard Racks with 7 Rack Positions",
            "Porcelain Enamel Cooktop Finish",
            "WideView™ Window",
            "Stainless Steel Knobs"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "gas ranges",
        "title": "LRGL5823_",
        "subtitle": "5.8 cu. ft. Smart Wi-Fi Enabled Fan Convection Gas Range with Air Fry & EasyClean",
        "colors": [
            "stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": [
            "LRGL5823S (Stainless Steel) 048231341493",
            "LRGL5823D (PrintProof Black Stainless Steel) 048231341509"
        ],
        "specSheetLink": "https://lg.widen.net/s/gjtdkxlmlj/lrgl5823_-spec-sheet",
        "videos": "https://youtu.be/67MfK417R_8",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5.8 cu. ft. Capacity",
            "Storage Drawer",
            "5 Sealed Cooktop Burners with 5th Oval Burner",
            "Griddle Plate"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "SmartDiagnosis™",
            "20,000 BTU UltraHeat™",
            "EasyClean® + Self Clean",
            "Built-In Air Fry with Fan Convection",
            "* Available only on Black Stainless Steel model"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "PrintProof™ Finish*",
            "Touchpad Control System",
            "2 Standard Racks with 7 Rack Positions",
            "Porcelain Enamel Cooktop Finish",
            "WideView™ Window",
            "Brilliant Blue Interior",
            "Stainless Steel Control Knobs"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "gas ranges",
        "title": "LRGL5821S",
        "subtitle": "5.8 cu. ft. Smart Wi-Fi Enabled Gas Range with EasyClean",
        "colors": "stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "LRGL5821S (Stainless Steel) 048231341479",
        "specSheetLink": "https://lg.widen.net/s/ppqhpkmlwh/lrgl5821s-spec-sheet",
        "videos": "https://youtu.be/67MfK417R_8",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5.8 cu. ft. Capacity",
            "Storage Drawer",
            "5 High Performance Cooktop Burners"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "SmartDiagnosis™",
            "17,000 BTU SuperBoil™",
            "EasyClean® Technology"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Halogen Oven Light",
            "2 Standard Racks w/ 7 Positions",
            "WideView™ Window",
            "Porcelain Enamel Cooktop Finish",
            "Stainless Steel Control Knobs",
            "Touchpad Control System",
            "Brilliant Blue Interior"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "built-in wall ovens",
        "title": "WSEP4727F",
        "subtitle": "4.7 cu. ft. Smart Single Wall Oven with True Convection, InstaView, Air Fry and Steam Sous Vide",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "WSEP4727F (PrintProof Stainless Steel) 048231344302",
        "specSheetLink": "https://lg.widen.net/s/tdmwwjccqp/wsep4727f-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "4.7 cu. ft. Large Capacity",
            "30\" Width",
            "True Convection",
            "Air Fry",
            "Steam Sous-Vide",
            "EasyClean® + Self Clean"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "True Convection",
            "Air Fry",
            "Steam Sous-Vide and Steam Cook",
            "EasyClean® + Self Clean",
            "Scan-to-cook",
            "Voice Control (Works with Amazon Alexa and Google Assistant)",
            "Certified Sabbath Mode",
            "2 Heavy Duty Racks",
            "Temperature Probe",
            "Air Fry Tray"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Backlit SmoothTouch® Glass Controls",
            "InstaView® & WideView™ Window",
            "PrintProof® Stainless Steel",
            "Brilliant Blue Interior",
            "Standard or Flush Installation",
            "Bottom Cosmetic Trim Included"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "built-in wall ovens",
        "title": "WSEP4723_",
        "subtitle": "4.7 cu. ft. Smart Single Wall Oven with Convection and Air Fry",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "WSEP4723F (PrintProof Stainless Steel) 048231344777 WSEP4723D (PrintProof Black Stainless Steel) 048231344784",
        "specSheetLink": "https://lg.widen.net/s/gwrdlhw2kt/wsep4723_-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "4.7 cu. ft. Large Capacity",
            "30\" Width",
            "Fan Convection",
            "Air Fry",
            "EasyClean® + Self Clean"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "Fan Convection",
            "Air Fry",
            "EasyClean® + Self Clean",
            "Scan-to-cook",
            "Voice Control (Works with Amazon Alexa and Google Assistant)",
            "Certified Sabbath Mode",
            "2 Heavy Duty Racks",
            "Air Fry Tray"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "SmoothTouch® Glass Controls",
            "PrintProof® Finish",
            "Brilliant Blue Interior",
            "Standard or Flush Installation",
            "Bottom Cosmetic Trim Included"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "built-in wall ovens",
        "title": "WDEP9427F",
        "subtitle": "9.4 cu. ft. Smart Double Wall Oven with True Convection, InstaView, Air Fry and Steam Sous Vide",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "WDEP9427F (PrintProof Stainless Steel) 048231344289",
        "specSheetLink": "https://lg.widen.net/s/kpq62tjl7p/wdep9427f-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "9.4 cu. ft. Large Capacity",
            "30\" Width",
            "True Convection",
            "Air Fry",
            "Steam Sous-Vide (Upper)",
            "EasyClean® + Self Clean"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "True Convection",
            "Air Fry (Both Ovens)",
            "Steam Sous-Vide and Steam Cook (Upper)",
            "EasyClean® + Self Clean",
            "Scan-to-cook",
            "Voice Control (Works with Amazon Alexa",
            "and Google Assistant)",
            "Certified Sabbath Mode",
            "4 Heavy Duty Racks",
            "Temperature Probe (Upper)",
            "Air Fry Tray"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Backlit SmoothTouch® Glass Controls",
            "InstaView® & WideView™ Window",
            "PrintProof® Stainless Steel",
            "Brilliant Blue Interior",
            "Standard or Flush Installation",
            "Bottom Cosmetic Trim Included"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "built-in wall ovens",
        "title": "WDEP9423_",
        "subtitle": "9.4 cu. ft. Smart Double Wall Oven with Convection and Air Fry",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "WDEP9423F (PrintProof Stainless Steel) 048231344791 WDEP9423D (PrintProof Black Stainless Steel) 048231344807",
        "specSheetLink": "https://lg.widen.net/s/xln6zbxwnl/wdep9423_-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "9.4 cu. ft. Large Capacity",
            "30\" Width",
            "Fan Convection",
            "Air Fry",
            "EasyClean® + Self Clean"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "Fan Convection",
            "Air Fry (Both Ovens)",
            "EasyClean® + Self Clean",
            "Scan-to-cook",
            "Voice Control (Works with Amazon Alexa and Google Assistant)",
            "Certified Sabbath Mode",
            "4 Heavy Duty Racks",
            "Air Fry Tray"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "SmoothTouch® Glass Controls",
            "PrintProof® Finish",
            "Brilliant Blue Interior",
            "Standard or Flush Installation",
            "Bottom Cosmetic Trim Included"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "built-in wall ovens",
        "title": "WCEP6423_",
        "subtitle": "1.7 4.7 cu. ft. Smart Combination Wall Oven with Convection and Air Fry",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "WCEP6423F (PrintProof Stainless Steel) 048231344753 WCEP6423D (PrintProof Black Stainless Steel) 048231345323",
        "specSheetLink": "https://lg.widen.net/s/fhpdtc8vms/wcep6423_-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "9.4 cu. ft. Large Capacity",
            "30\" Width",
            "Convection Microwave (Upper)",
            "Fan Convection",
            "Air Fry",
            "EasyClean® + Self Clean"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "Fan Convection (Lower)",
            "Convection Microwave (Upper)",
            "Air Fry (Both Ovens)",
            "EasyClean® + Self Clean",
            "Scan-to-cook",
            "Voice Control (Works with Amazon Alexa and Google Assistant)",
            "Certified Sabbath Mode",
            "2 Heavy Duty Racks",
            "Air Fry Tray"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "SmoothTouch® Glass Controls",
            "PrintProof® Finish",
            "Brilliant Blue Interior",
            "Standard or Flush Installation",
            "Bottom Cosmetic Trim Included"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "built-in wall ovens",
        "title": "WCEP6427F",
        "subtitle": "1.7 4.7 cu. ft. Smart Combination Wall Oven with True Convection, Air Fry and EasyClean",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "WCEP6427F (PrintProof Stainless Steel) 048231344326",
        "specSheetLink": "https://lg.widen.net/s/5vlbqljgl2/wcep6427f-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "6.4 cu. ft. Large Capacity",
            "30\" Width",
            "Speed Oven (Upper)",
            "True Convection (Lower)",
            "Air Fry (Both Ovens)",
            "Steam Sous-Vide (Lower)",
            "EasyClean® + Self Clean"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "ThinQ® Technology & ThinQ Care",
            "True Convection (Lower)",
            "Speed Oven (Upper)",
            "Air Fry (Both Ovens)",
            "Steam Sous-Vide and Steam Cook (Upper)",
            "EasyClean® + Self Clean",
            "Scan-to-cook",
            "Voice Control (Works with Amazon Alexa and Google Assistant)",
            "Certified Sabbath Mode",
            "2 Heavy Duty Racks",
            "Temperature Probe (Lower)",
            "Air Fry Tray"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Backlit SmoothTouch® Glass Controls",
            "InstaView® & WideView™ Window",
            "PrintProof® Stainless Steel",
            "Brilliant Blue Interior",
            "Standard or Flush Installation",
            "Bottom Cosmetic Trim Included"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "built-in wall ovens",
        "title": "MZBZ1715S",
        "subtitle": "1.7 cu. ft. Smart Wi-Fi Enabled TurboCook Speed Oven with Convection and Air Fry",
        "colors": "stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "MZBZ1715S (Stainless Steel) 048231341974",
        "specSheetLink": "https://lg.widen.net/s/jcfwdsg6wd/mzbz1715_-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "1.7 cu. ft. Capacity",
            "Convection Technology",
            "Air Fry",
            "Sensor Cooking"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "LG appliances featuring ThinQ® technology (Smart Wi-Fi Enabled)",
            "SmartDiagnosis™",
            "TurboCook™ Speed Oven Technology",
            "Air Fry",
            "Scan-to-cook",
            "50+ Preset Cooking Functions",
            "Includes Air Fry Pan, Metal Tray, Glass Tray & Rotating Ring"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "SmoothTouch™ Glass Controls",
            "WideView™ Window",
            "Stainless Steel Interior"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "built-in electric cooktops",
        "title": "CBIH3617BE",
        "subtitle": "36 Induction Cooktop with 5.0kW Power Element and SmoothTouch Controls",
        "colors": "black",
        "logos": [
            "lgThinQ",
            "ThinQ Up",
            "energyStar"
        ],
        "upc": "CBIH3617BE (Black) 48231347587",
        "specSheetLink": "https://lg.widen.net/s/86xh6lnzvb/cbih3617_2024_spec-sheet_cooktop",
        "videos": "https://youtu.be/NPns1D4SHK4",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5 Induction Elements",
            "5.0kW Power Element",
            "Simmer Keys",
            "Power Boost",
            "Bridge Element",
            "Cookware Compatibility Indicator",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Simmer Keys",
            "Power Boost",
            "Bridge Element",
            "Cookware Compatibility Indicator",
            "Hood / OTR / Cooktop Sync",
            "ENERGY STAR® Certified"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "Backlit SmoothTouch® Glass Controls",
            "Cooking Element LED Bar"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "built-in electric cooktops",
        "title": "CBIH3613BE",
        "subtitle": "36 Induction Cooktop with 4.3kW Power Element and SmoothTouch Controls",
        "colors": "black ceramic",
        "logos": [
            "lgThinQ",
            "ThinQ Up",
            "energyStar"
        ],
        "upc": "CBIH3613BE (Black Ceramic) 048231347594",
        "specSheetLink": "https://lg.widen.net/s/phnvnvzrmn/cbih3613be_2023_spec_sheet_cooktop",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5 Induction Elements",
            "UltraHeat™4.3kW Element",
            "Simmer Key for Each element",
            "6\", 7\", 11\" Elements",
            "Power Boost Mode temporarily maximizes",
            "an element's power output"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Built-in Cooking Timer",
            "LG Smart Hood and OTR Connectivity",
            "LG ThinQ® Technology featuring ThinQ UP",
            "Cookware Compatibility Indicator",
            "Cookware Detection"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "SmoothTouch® Glass Controls",
            "Front Center Controls",
            "Smooth Ceramic Surface Cleans Easily"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "built-in electric cooktops",
        "title": "CBIH3013BE",
        "subtitle": "30 Induction Cooktop with 4.3kW Power Element and SmoothTouch Controls",
        "colors": "black ceramic",
        "logos": [
            "lgThinQ",
            "ThinQ Up",
            "energyStar"
        ],
        "upc": "CBIH3013BE (Black Ceramic) 048231347570",
        "specSheetLink": "https://lg.widen.net/s/jzmlgw5xhb/cbih3013be_2023_spec_sheet_cooktop",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "4 Induction Elements",
            "UltraHeat™4.3kW Element",
            "Simmer Key for each Element",
            "6\", 7\", 10\" Elements",
            "Power Boost Mode temporarily maximizes",
            "an element's power output"
        ],
        "specTitle2": "INNOVATIONS",
        "specList2": [
            "Built-in Cooking Timer",
            "LG Smart Hood and OTR Connectivity",
            "LG ThinQ® Technology featuring ThinQ UP",
            "Cookware Compatibility Indicator",
            "Cookware Detection"
        ],
        "specTitle3": "STYLISH DESIGN",
        "__EMPTY": "",
        "specList3": [
            "SmoothTouch® Glass Controls",
            "Front Center Controls",
            "Smooth Ceramic Surface Cleans Easily"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "built-in electric cooktops",
        "title": "LCE3010SB",
        "subtitle": "30 Built-In Radiant Electric Cooktop",
        "colors": "smooth black",
        "logos": [],
        "upc": "LCG3011ST (Stainless Steel) 048231317306",
        "specSheetLink": "https://lg.widen.net/s/nkrkrbxbcx/lce3010-spec-sheet",
        "videos": [],
        "specTitle1": "FEATURES",
        "specList1": [
            "30\" Cooktop",
            "5 Radiant Elements",
            "Dual Elements RF - 9\"/6\"",
            "6\", 7\", 8\" Elements",
            "SmoothTouch™ Glass Controls",
            "Smooth Cooktop Surface",
            "6\" Warming Zone (100W)\b"
        ],
        "specTitle2": "",
        "specList2": [],
        "specTitle3": "",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "1 rated electric cooktop badge"
    },
    {
        "category": "cooking",
        "subcategory": "built-in electric cooktops",
        "title": "LCE3610SB",
        "subtitle": "36 Built-In Radiant Electric Cooktop",
        "colors": "smooth black",
        "logos": [],
        "upc": "LCE3610SB (Smooth Black) 048231317122",
        "specSheetLink": "https://lg.widen.net/s/xbkblpdvxq/lce3610-spec-sheet",
        "videos": [],
        "specTitle1": "FEATURES",
        "specList1": [
            "36\" Cooktop",
            "5 Radiant Elements",
            "Triple Element 12\"/9\"/6\"",
            "Dual Elements 9\"/6\"",
            "Dual Elements 8\"/5\"",
            "Single 6\" Element",
            "SmoothTouch™ Glass Controls",
            "Smooth Cooktop Surface",
            "6\" Warming Zone (100W)"
        ],
        "specTitle2": "",
        "specList2": [],
        "specTitle3": "",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": "1 rated electric cooktop badge"
    },
    {
        "category": "cooking",
        "subcategory": "built-in gas cooktops",
        "title": "CBGJ3027S",
        "subtitle": "30 Smart Gas Cooktop with 22K BTU, EasyClean Cooktop, and ThinQ",
        "colors": "stainless steel",
        "logos": [
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "CBGJ3027S (Stainless Steel) 048231345224",
        "specSheetLink": "https://lg.widen.net/s/zfspclqpcj/cbgj3027s-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5 Sealed Gas Burners",
            "30\" Width",
            "ThinQ® Technology",
            "22K BTU UltraHeat™ Dual Burner",
            "EasyClean® Stainless"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "EasyClean® Stainless",
            "Edge-to-edge Heavy Duty Cast Iron Grates",
            "LED Illuminated Weighted Knobs",
            "Cast Iron Griddle"
        ],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [
            "ThinQ® Technology",
            "Autoreignition",
            "EasyClean® Stainless",
            "LG Smart Range / OTR Connectivity"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "built-in gas cooktops",
        "title": "CBGJ3023_",
        "subtitle": "30 Gas Cooktop with 20K BTU Burner and EasyClean Cooktop",
        "colors": "stainless steel",
        "logos": [],
        "upc": "CBGJ3023S (Stainless Steel) 048231345231 CBGJ3023D (Black Stainless Steel) 048231345347",
        "specSheetLink": "https://lg.widen.net/s/zf6xl89qdq/cbgj3023_-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5 Sealed Gas Burners",
            "30\" Width",
            "20K BTU UltraHeat™ Burner",
            "EasyClean® Stainless (*Stainless Color Only)",
            "Autoreignition"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "Edge-to-edge Heavy Duty Cast Iron Grates",
            "EasyClean® Stainless (*Stainless Color Only)"
        ],
        "specTitle3": "",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "built-in gas cooktops",
        "title": "CBGJ3627S",
        "subtitle": "36 Smart Gas Cooktop with 22K BTU, EasyClean Cooktop, and ThinQ",
        "colors": "stainless steel",
        "logos": [
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "CBGJ3627S (Stainless Steel) 048231345316",
        "specSheetLink": "https://lg.widen.net/s/t2bsrnxnqp/cbgj3627s-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5 Sealed Gas Burners",
            "36\" Width",
            "ThinQ® Technology",
            "22K BTU UltraHeat™ Dual Burner",
            "EasyClean® Stainless"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "EasyClean® Stainless",
            "Edge-to-edge Heavy Duty Cast Iron Grates",
            "LED Illuminated Weighted Knobs",
            "Cast Iron Griddle"
        ],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [
            "ThinQ® Technology",
            "Autoreignition",
            "EasyClean® Stainless",
            "LG Smart Range / OTR Connectivity"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "built-in gas cooktops",
        "title": "CBGJ3623_",
        "subtitle": "36 Gas Cooktop with 20K BTU Burner and EasyClean Cooktop",
        "colors": [
            "stainless steel",
            "black stainless steel"
        ],
        "logos": [],
        "upc": [
            "CBGJ3623S (Stainless Steel) 048231344692",
            "CBGJ3623D (Black Stainless Steel) 048231345330"
        ],
        "specSheetLink": "https://lg.widen.net/s/nrvjwsg9pj/cbgj3623_-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "5 Sealed Gas Burners",
            "36\" Width",
            "20K BTU UltraHeat™ Burner",
            "EasyClean® Stainless (*Stainless Color Only)",
            "Autoreignition"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "Edge-to-edge Heavy Duty Cast Iron Grates",
            "EasyClean® Stainless (*Stainless Color Only)"
        ],
        "specTitle3": "",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "range hood",
        "title": "HCED3015_ / HCED3615_",
        "subtitle": "30  36 Wall Mount Range Hood",
        "colors": [
            "stainless steel",
            "black stainless steel"
        ],
        "logos": "lgThinQ",
        "upc": [
            "HCED3015S (30) 048231341370",
            "HCED3615S (36) 048231341387",
            "HCED3015D (30) 048231341677",
            "HCED3615D (36) 048231341684"
        ],
        "specSheetLink": "https://lg.widen.net/s/ttnhzxpvqx/hced3015_-hced3615_-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Available in 30\" and 36\" Widths",
            "22 1/16\" Depth",
            "5\" Low-Profile Body",
            "Accomodates Ceilings up to 9' 6\"",
            "5-Speed IR Touch Controls",
            "Vertical Internal Blower",
            "1 Year Parts & Labor Limited Warranty"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "Dual-Level LED Lighting",
            "2 Decorative Mesh Dishwasher-Safe filters"
        ],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [
            "RoHS Compliant",
            "Connects with LG Smart Ranges and Cooktops"
        ],
        "specTitle4": "Parts and Accessories for LG Hoods",
        "specList4": [
            "MUA006A.......Make Up air kit",
            "Z0F-C091........Replacement Charcoal Filter",
            "Z1C-00AN.......Duct Cover Extension",
            "ZRC-01AN.......Recirculating Kit",
            "Please note: Extensions are not available for LG Black Stainless Steel Hoods"
        ],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "over-the-range microwaves",
        "title": "MVEF1337F",
        "subtitle": "1.3 cu. ft. Over-the-Range Microwave Oven with EasyClean",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Up",
            "innit",
            "sidechef"
        ],
        "upc": "MVEF1337F (PrintProof Stainless Steel) 48231345606",
        "specSheetLink": "https://lg.widen.net/s/wdwcvcgtb2/mvef1337f_spec_sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "1.3 cu. ft Oven Capacity",
            "ThinQ® App with Scan-to-Cook & Auto Sync to Smart LG Ranges",
            "ThinQ UP",
            "EasyClean® Interior",
            "SmoothTouch® Glass Controls"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "WideView™ Window",
            "With Pocket Handle\"",
            "SmoothTouch® Glass Controls",
            "Zero Clearance Door",
            "EasyClean® Interior"
        ],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [
            "ThinQ® Smart Technology",
            "1000 W",
            "Hexagonal Stabilizer Ring",
            "Sensor Cooking",
            "550 CFM",
            "Taller cavity for taller items"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "over-the-range microwaves",
        "title": "MVEF1323F",
        "subtitle": "1.3 cu. ft. Over-the-Range Microwave Oven with EasyClean",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Up",
            "innit",
            "sidechef"
        ],
        "upc": "MVEF1323F (PrintProof Stainless Steel) 48231345620",
        "specSheetLink": "https://lg.widen.net/s/m7bl5cvsmn/mvef1323f_spec_sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "1.3 cu. ft Oven Capacity",
            "ThinQ® App with Scan-to-Cook & Auto Sync to Smart LG Ranges",
            "ThinQ UP",
            "EasyClean® Interior",
            "SmoothTouch® Glass Controls"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "WideView™ Window",
            "With Pocket Handle\"",
            "SmoothTouch® Glass Controls",
            "Zero Clearance Door",
            "EasyClean® Interior"
        ],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [
            "ThinQ® Smart Technology",
            "1000 W",
            "Hexagonal Stabilizer Ring",
            "Sensor Cooking",
            "400 CFM",
            "Taller cavity for taller items"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "over-the-range microwaves",
        "title": "MHEC1737_",
        "subtitle": "1.7 cu. ft. Wi-Fi Enabled Over-the-Range Convection Microwave Oven with Air Fry (30)",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [],
        "upc": [
            "MHEC1737F (PrintProof Stainless Steel) 048231342148 048231342148",
            "MHEC1737D (PrintProof Black Stainless Steel) 048231342155"
        ],
        "specSheetLink": "https://lg.widen.net/s/bltlsghq65/mhec1737_-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "1.7 cu. ft. Oven Capacity",
            "13.5\" Turntable Diameter",
            "300 CFM Ventilation",
            "5-speed Ventilation",
            "Microwave: 950 Watts Convection: 1650 Watts",
            "Sensor Cooking"
        ],
        "specTitle2": "FEATURES",
        "specList2": [
            "SmoothTouch™ Glass Controls",
            "ThinQ® App",
            "Scan-to-Cook",
            "Connects with Smart LG Ranges",
            "WideView™ Window"
        ],
        "specTitle3": "",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "over-the-range microwaves",
        "title": "MVEL2137_",
        "subtitle": "2.1 cu. ft. Smart Wi-Fi Enabled Over-the-Range Microwave Oven with ExtendaVent 2.0 & EasyClean",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [],
        "upc": [
            "MVEL2137F (PrintProof Stainless Steel) 048231342124",
            "MVEL2137D (PrintProof Black Stainless Steel) 048231342131"
        ],
        "specSheetLink": "https://lg.widen.net/s/xbtzbhjvvj/mvel2137_-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "2.1 cu. ft. Oven Capacity",
            "14.2\" Turntable Diameter",
            "400 CFM Ventilation",
            "4-speed Ventilation",
            "1050 Watts",
            "Auto & Sensor Cook",
            "Pocket Handle"
        ],
        "specTitle2": "FEATURES",
        "specList2": [
            "EasyClean® Interior",
            "SmoothTouch™ Backlit Glass Controls",
            "ExtendaVent™ 2.0",
            "ThinQ® App",
            "Scan-to-Cook",
            "Steam Cook",
            "Connects with Smart LG Ranges",
            "WideView™ Window"
        ],
        "specTitle3": "",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "over-the-range microwaves",
        "title": "MVEL2125F",
        "subtitle": "2.1 cu. ft. Smart Wi-Fi Enabled Over-the-Range Microwave Oven with ExtendaVent 2.0 & EasyClean",
        "colors": "printproof stainless steel",
        "logos": [],
        "upc": "MVEL2125F (PrintProof Stainless Steel) 048231342100",
        "specSheetLink": "https://lg.widen.net/s/qb6whdlctk/mvel2125_-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "2.1 cu. ft. Oven Capacity",
            "14.2\" Turntable Diameter",
            "400 CFM Ventilation",
            "4-speed Ventilation",
            "1050 Watts",
            "Auto & Sensor Cook",
            "Traditional Handle"
        ],
        "specTitle2": "FEATURES",
        "specList2": [
            "EasyClean® Interior",
            "SmoothTouch™ Glass Controls",
            "ExtendaVent™ 2.0",
            "ThinQ® App",
            "Scan-to-Cook",
            "Connects with Smart LG Ranges",
            "WideView™ Window"
        ],
        "specTitle3": "",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "over-the-range microwaves",
        "title": "MVEL2033_",
        "subtitle": "2.0 cu. ft. Smart Wi-Fi Enabled Over-the-Range Microwave Oven with EasyClean",
        "colors": [
            "printproof black stainless steel",
            "printproof stainless steel"
        ],
        "logos": [],
        "upc": [
            "MVEL2033F (PrintProof Stainless Steel) 048231342087",
            "MVEL2033D (PrintProof Black Stainless Steel) 048231342094"
        ],
        "specSheetLink": "https://lg.widen.net/s/wpmjfhttjt/mvel2033_-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "2.1 cu. ft. Oven Capacity",
            "14.2\" Turntable Diameter",
            "400 CFM Ventilation",
            "4-speed Ventilation",
            "1050 Watts",
            "Auto & Sensor Cook",
            "Pocket Handle"
        ],
        "specTitle2": "FEATURES",
        "specList2": [
            "EasyClean® Interior",
            "SmoothTouch™ Glass Controls",
            "ThinQ® App",
            "Scan-to-Cook",
            "Steam Cook",
            "Connects with Smart LG Ranges",
            "WideView™ Window"
        ],
        "specTitle3": "",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "over-the-range microwaves",
        "title": "MVEM1825_",
        "subtitle": "1.8 cu. ft. Smart Wi-Fi Enabled Over-the-Range Microwave Oven with EasyClean Transition from LMV1831_, LMV1831SS",
        "colors": [
            "printproof black stainless steel",
            "printproof stainless steel"
        ],
        "logos": [],
        "upc": [
            "MVEM1825F (PrintProof Stainless Steel) 048231342063",
            "MVEM1825D (PrintProof Black Stainless Steel) 048231342070"
        ],
        "specSheetLink": "https://lg.widen.net/s/qxpxb26gpf/mvem1825_-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "1.8 cu. ft. Oven Capacity",
            "12.6\" Turntable Diameter",
            "300 CFM Ventilation",
            "2-Speed Ventilation",
            "1000 Watts",
            "Auto & Sensor Cook"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "EasyClean® Interior",
            "SmoothTouch™ Glass Controls",
            "Traditional Handle",
            "WideView™ Window"
        ],
        "specTitle3": "FEATURES",
        "__EMPTY": "",
        "specList3": [
            "ThinQ® App",
            "Scan-to-Cook",
            "Connects with Smart LG Ranges",
            "WideView™ Window"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "over-the-range microwaves",
        "title": "MVEM1721F",
        "subtitle": "1.7 cu. ft. Over-the-Range Microwave Oven with EasyClean",
        "colors": "printproof stainless steel",
        "logos": [],
        "upc": "MVEM1721F 048231346849",
        "specSheetLink": "https://lg.widen.net/s/tz9t8qlwpv/mvem1721f_2024_spec_sheet_microwave",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "1.7 cu. ft Oven Capacity",
            "WideView™ Window",
            "EasyClean® Interior",
            "PrintProof® Stainless Steel"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "Membrane Controls",
            "WideView™ Window with Handle",
            "PrintProof® Stainless Steel",
            "White LED Display"
        ],
        "specTitle3": "FEATURES",
        "__EMPTY": "",
        "specList3": [
            "1000 W",
            "300 CFM",
            "Auto Touch Functions:",
            "- Auto reheat (5 options)",
            "- Auto cook (8 options)",
            "- Popcorn",
            "- Potato",
            "- Vegetable(4 options)",
            "- Beverage",
            "- Defrost (4 options) + time",
            "- Soften (4 options)",
            "- Melt (4 options)\"",
            "Auto / Time Defrost"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "counter-top microwaves",
        "title": "MSER0990S",
        "subtitle": "0.9 cu. ft. NeoChef Countertop Microwave with Smart Inverter and EasyClean Interior",
        "colors": "stainless steel",
        "logos": [],
        "upc": "MSER0990S (Stainless Steel) 48231347280",
        "specSheetLink": "",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Smart Inverter",
            "0.9 cu. ft.",
            "EasyClean® Interior",
            "Sensor Cook",
            "2-Step Open Door"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "SmoothTouch® Glass Controls",
            "2-Step Open Door"
        ],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [
            "Smart Inverter",
            "1200W",
            "Hexagonal Stabilizer Ring",
            "Auto Defrost and Rapid Defrost",
            "SmartDiagnosis™",
            "Sensor Cook: Bacon, Fresh Vegetable, Frozen Entrée, Frozen Vegetable, Oatmeal, Potato, Rice, Beverage, Casserole, Dinner Plate, Pie, Pizza"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "counter-top microwaves",
        "title": "MSER2090_",
        "subtitle": "2.0 cu. ft. NeoChef Countertop Microwave with Smart Inverter and EasyClean Interior",
        "colors": "stainless steel",
        "logos": [],
        "upc": "MSER2090S (Stainless Steel) 048231347259 MSER2090D (Black Stainless Steel) 048231347266",
        "specSheetLink": "https://lg.widen.net/s/zvbtmkrq6h/mser2090s_2024_cooking_spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Smart Inverter",
            "2.0 cu. ft.",
            "EasyClean® Interior",
            "Sensor Cook",
            "2-Step Open Door"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "SmoothTouch® Glass Controls",
            "2-Step Open Door"
        ],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [
            "Smart Inverter",
            "1200W",
            "Hexagonal Stabilizer Ring",
            "Auto Defrost and Rapid Defrost",
            "SmartDiagnosis™",
            "Sensor Cook: Bacon, Fresh Vegetable,",
            "Frozen Entrée, Frozen Vegetable, Oatmeal, Potato, Rice, Beverage, Casserole, Dinner Plate, Pie, Pizza"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "counter-top microwaves",
        "title": "MSER1590S",
        "subtitle": "1.5 cu. ft. NeoChef Countertop Microwave with Smart Inverter and EasyClean Interior",
        "colors": "stainless steel",
        "logos": [],
        "upc": "MSER1590S (Stainless Steel) 48231347273",
        "specSheetLink": "https://lg.widen.net/s/tlnqqhmplc/mser1590s_2024_spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Smart Inverter",
            "1.5 cu. ft.",
            "EasyClean® Interior",
            "Sensor Cook",
            "2-Step Open Door"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "SmoothTouch® Glass Controls",
            "2-Step Open Door"
        ],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [
            "Smart Inverter",
            "1200W",
            "Hexagonal Stabilizer Ring",
            "Auto Defrost and Rapid Defrost",
            "SmartDiagnosis™",
            "Sensor Cook: Bacon, Fresh Vegetable, Frozen Entrée, Frozen Vegetable, Oatmeal, Potato, Rice, Beverage, Casserole, Dinner Plate, Pie, Pizza"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "counter-top microwaves",
        "title": "LMC0975ST",
        "subtitle": "0.9 cu. ft. NeoChef Countertop Microwave with Smart Inverter and EasyClean",
        "colors": "stainless steel",
        "logos": [],
        "upc": "LMC0975ST (Stainless Steel) 048232337273",
        "specSheetLink": "https://lg.widen.net/s/rhqmqhghnb/lmc0975-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "1,000 Watts Power",
            "Smart Inverter",
            "EasyClean® Interior",
            "SmoothTouch™ Glass Touch + Panel Touch",
            "Hexagonal Stable Ring",
            "10-Year Warranty on Magnetron"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "counter-top microwaves",
        "title": "LMC1575ST",
        "subtitle": "1.5 cu. ft. LG Black Stainless Steel Series NeoChef Countertop Microwave with Smart Inverter and EasyClean",
        "colors": "stainless steel",
        "logos": [],
        "upc": "UPC CODES  LMC1575ST (Stainless Steel) 048232337228",
        "specSheetLink": "https://lg.widen.net/s/pjq8jvcddz/lmc1575-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "1.5 cu. ft. Capacity",
            "1,200 Watts Power",
            "Fingerprint and Smudge Resistant",
            "Smart Inverter",
            "EasyClean® Interior",
            "SmoothTouch™ Glass Touch + Panel Touch",
            "Sensor Cook"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "counter-top microwaves",
        "title": "LMC2075_",
        "subtitle": "2.0 cu. ft. LG Black Stainless Steel Series NeoChef Countertop Microwave with Smart Inverter and EasyClean",
        "colors": "stainless steel",
        "logos": [],
        "upc": "LMC2075BD (Black Stainless Steel) 048231337181 LMC2075ST (Stainless Steel) 048231337198",
        "specSheetLink": "https://lg.widen.net/s/6whbc7xrgw/lmc2075-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "1,200 Watts Power",
            "Smart Inverter",
            "EasyClean® Interior",
            "SmoothTouch™ Glass Touch",
            "Sensor Cook",
            "Trim Kit Available"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "cooking",
        "subcategory": "counter-top microwave accessory",
        "title": "MK2030N_",
        "subtitle": "Microwave Trim Kit",
        "colors": [
            "black stainless steel",
            "stainless steel"
        ],
        "logos": [],
        "upc": "UPC CODES  MK2030NBD (Black Stainless Steel) 048231339988 MK2030NST (Stainless Steel) 048231339971",
        "specSheetLink": "https://lg.widen.net/s/l7nxvmrb5x/mk2030n-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "24 39/64\" Interior and 29 23/32\" Exterior Width",
            "Fits 2.0 cu. ft. Microwave models: LMC2075ST/BD and MSER2090 S/D"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "dishwashers",
        "subcategory": "dishwasher",
        "title": "ADFD5448AT",
        "subtitle": "ADA Compliant Front Control Wi-Fi Enabled Dishwasher with QuadWash",
        "colors": "stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Up",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": "ADFD5448AT (Stainless Steel) 048231341714",
        "specSheetLink": "https://lg.widen.net/s/zszfwmvcnc/adfd5448at-spec-sheet",
        "videos": [
            "https://youtu.be/alWrZggzQL0",
            "https://youtu.be/Baj92O7Y6R"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "48dB",
            "14 Place Settings",
            "ADA Compliant",
            "NeveRust™ Stainless Steel Tub",
            "3 Spray Arms (Top, Upper, Lower)",
            "9 Wash Cycles",
            "7 Options",
            "Delay Start",
            "ENERGY STAR® Qualified"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "Pocket Handle",
            "Front Control"
        ],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [
            "QuadWash™",
            "Inverter Direct Drive™ Motor",
            "Auto Open Dry",
            "SenseClean™ Wash System",
            "Auto Cycle",
            "3 - Stage Filtration System",
            "EasyRack® Plus System",
            "Auto Leak Detection",
            "LG appliances featuring ThinQ® technology (Smart Wi-Fi Enabled)",
            "SmartDiagnosis™",
            "ThinQ Care",
            "4 Downloadable Cycles"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "dishwashers",
        "subcategory": "dishwasher",
        "title": "LDFC2423_",
        "subtitle": "Front Control Dishwasher with LoDecibel Operation and Dynamic Dry",
        "colors": [
            "stainless steel look",
            "black",
            "white"
        ],
        "logos": "energyStar",
        "upc": [
            "LDFC2423V (Stainless Steel Look) 048231345354",
            "LDFC2423W (White) 048231345378",
            "LDFC2423B (Black) 048231345361"
        ],
        "specSheetLink": "https://lg.widen.net/s/kj2fwqfnqc/ldfc2423c-spec-sheet",
        "videos": "https://youtu.be/alWrZggzQL0",
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "52dB",
            "15 Place Settings",
            "NeveRust™ Stainless Steel Tub",
            "3 Spray Arms (Top, Upper, Lower)",
            "5 Wash Cycles",
            "6 Options",
            "Delay Start",
            "2023 ENERGY STAR Most Efficient"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "Pocket Handle",
            "Front Control"
        ],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [
            "Conventional Spray Arm",
            "Inverter Direct Drive™ Motor",
            "Dynamic Dry",
            "SenseClean™ Wash System",
            "Auto Cycle",
            "3 - Stage Filtration System",
            "Manual Upper Rack Adjustment",
            "Auto Leak Detection"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "dishwashers",
        "subcategory": "dishwasher",
        "title": "LDFN3432T",
        "subtitle": "Front Control Dishwasher with QuadWash",
        "colors": "stainless steel",
        "logos": "energyStar",
        "upc": "LDFN3432T (Stainless Steel) 048231341950",
        "specSheetLink": "https://lg.widen.net/s/swnm9fsczm/ldfn3432t-spec-sheet",
        "videos": [
            "https://youtu.be/alWrZggzQL0",
            "https://youtu.be/Baj92O7Y6R"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "50dB",
            "15 Place Settings",
            "NeveRust™ Stainless Steel Tub",
            "3 Spray Arms (Top, Upper, Lower)",
            "5 Wash Cycles",
            "6 Options",
            "Delay Start",
            "ENERGY STAR® Qualified"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "Pocket Handle",
            "Front Control"
        ],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [
            "QuadWash™",
            "Inverter Direct Drive™ Motor",
            "Dynamic Dry",
            "SenseClean™ Wash System",
            "Auto Cycle",
            "3 - Stage Filtration System",
            "Manual Upper Rack Adjustment",
            "Auto Leak Detection"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "dishwashers",
        "subcategory": "dishwasher",
        "title": "LDFN4542_",
        "subtitle": "Front Control Dishwasher with QuadWash",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": "energyStar",
        "upc": [
            "LDFN4542S (PrintProof  Stainless Steel) 048231341943",
            "LDFN4542D (PrintProof  Black Stainless Steel) 048231342001",
            "LDFN4542W (White) 048231341998 LDFN4542B (Black) 048231341981"
        ],
        "specSheetLink": "https://lg.widen.net/s/2kb9bcx6b2/ldfn4542_-spec-sheet",
        "videos": [
            "https://youtu.be/alWrZggzQL0",
            "https://youtu.be/Baj92O7Y6R"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "48dB",
            "15 Place Settings",
            "3rd Rack",
            "NeveRust™ Stainless Steel Tub",
            "3 Spray Arms (Top, Upper, Lower)",
            "9 Wash Cycles",
            "8 Options",
            "Delay Start",
            "ENERGY STAR® Qualified"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "Pocket Handle",
            "Front Control"
        ],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [
            "QuadWash™",
            "Inverter Direct Drive™ Motor",
            "Dynamic Dry",
            "SenseClean™ Wash System",
            "Auto Cycle",
            "3 - Stage Filtration System",
            "EasyRack® Plus System",
            "Auto Leak Detection",
            "NFC Tag On",
            "SmartDiagnosis™"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "dishwashers",
        "subcategory": "dishwasher",
        "title": "LDTS5552_",
        "subtitle": "Top Control wi-fi Enabled Dishwasher with QuadWash and TrueSteam",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": "LDTS5552S (PrintProof Stainless Steel) 048231342346 LDTS5552D (PrintProof Black Stainless Steel) 048231342568",
        "specSheetLink": "https://lg.widen.net/s/jnmllwv8qr/ldts5552_-spec-sheet",
        "videos": [
            "https://youtu.be/Baj92O7Y6Rs",
            "https://youtu.be/alWrZggzQL0",
            "https://youtu.be/ehNgbnUYANI"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "46dB",
            "15 Place Settings",
            "3rd Rack",
            "NeveRust™ Stainless Steel Tub",
            "3 Spray Arms (Top, Upper, Lower)",
            "10 Wash Cycles",
            "9 Options",
            "Delay Start",
            "ENERGY STAR® Qualified"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "Towel Bar",
            "Top Control"
        ],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [
            "TrueSteam™ Technology",
            "QuadWash™",
            "Inverter Direct Drive™ Motor",
            "Dynamic Dry",
            "SenseClean™ Wash System",
            "Auto Cycle",
            "3 - Stage Filtration System",
            "EasyRack® Plus System",
            "Auto Leak Detection",
            "LG appliances featuring ThinQ® technology (Smart Wi-Fi Enabled)",
            "SmartDiagnosis™",
            "ThinQ Care",
            "4 Downloadable Cycles"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "dishwashers",
        "subcategory": "dishwasher",
        "title": "LDTH5554SD",
        "subtitle": "Smart Top Control Dishwasher with 1-Hour Wash & Dry, QuadWash Pro and Dynamic Heat Dry",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": "LDTH5554S (PrintProof Stainless Steel) 048231347709 LDTH5554D (PrintProof Black Stainless Steel) 048231347716",
        "specSheetLink": "https://lg.widen.net/s/fbtjnvp2sv/ldth5554s_d_2024_spec_sheet",
        "videos": [
            "https://youtu.be/yJmDDU9spMo",
            "https://youtu.be/EvJJzn00Ues",
            "https://youtu.be/alWrZggzQL0"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "46dB",
            "15 Place Settings",
            "1 Hour Wash and Dry Cycle",
            "3rd Rack",
            "NeveRust(TM) Stainless Steel Tub",
            "3 Spray Arms (Top, Upper, Lower)",
            "10 Wash Cycles",
            "9 Options",
            "Delay Start",
            "Heated Dry",
            "ENERGY STAR® Qualified"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "Towel Bar",
            "Top Control"
        ],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [
            "QuadWash™ Pro",
            "Inverter Direct Drive™ Motor",
            "Dynamic Dry",
            "SenseClean™ Wash System",
            "Auto Cycle",
            "3 - Stage Filtration System",
            "EasyRack™ Plus System with Glide Rails",
            "Auto Leak Detection",
            "LG appliances featuring ThinQ® technology (Wi-Fi Enabled)",
            "SmartDiagnosis™",
            "ThinQ Care",
            "Remote Start",
            "7 Downloadable Cycles"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "dishwashers",
        "subcategory": "dishwasher",
        "title": "LDPH5554SD",
        "subtitle": "Smart Top Control Dishwasher with 1-Hour Wash & Dry, QuadWash Pro and Dynamic Heat Dry",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "ThinQ Up",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": "LDPH5554S (PrintProof Stainless Steel) 048231347686 LDPH5554D (PrintProof Black Stainless Steel) 048231347693",
        "specSheetLink": "https://lg.widen.net/s/rccbqrtqss/ldph5554s_d_2024_spec_sheet",
        "videos": [
            "https://youtu.be/yJmDDU9spMo",
            "https://youtu.be/Baj92O7Y6Rs",
            "https://youtu.be/alWrZggzQL0"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "46dB",
            "15 Place Settings",
            "1 Hour Wash and Dry Cycle",
            "3rd Rack",
            "NeveRust(TM) Stainless Steel Tub",
            "3 Spray Arms (Top, Upper, Lower)",
            "10 Wash Cycles",
            "9 Options",
            "Delay Start",
            "Heated Dry",
            "ENERGY STAR® Qualified"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "Pocket Handle",
            "Top Control",
            "Hidden Front Display Count Down Timer"
        ],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [
            "QuadWash™",
            "Inverter Direct Drive™ Motor",
            "Dynamic Dry",
            "SenseClean™ Wash System",
            "Auto Cycle",
            "3 - Stage Filtration System",
            "EasyRack® Plus System",
            "Auto Leak Detection",
            "LG appliances featuring ThinQ® technology (Smart Wi-Fi Enabled)",
            "SmartDiagnosis™",
            "ThinQ Care",
            "4 Downloadable Cycles"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "dishwashers",
        "subcategory": "dishwasher",
        "title": "LDPS6762_",
        "subtitle": "Top Control Smart Wi-Fi Enabled Dishwasher with QuadWash Pro, Dynamic Dry and TrueSteam",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": "LDPS6762S (PrintProof Stainless Steel) 048231342667 LDPS6762D (PrintProof Black Stainless Steel) 048231344197",
        "specSheetLink": "https://lg.widen.net/s/z6wbb2kfww/ldps6762_-spec-sheet",
        "videos": [
            "https://youtu.be/EvJJzn00Ues",
            "https://youtu.be/ehNgbnUYANI",
            "https://youtu.be/alWrZggzQL0"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "44dB",
            "15 Place Settings",
            "Adjustable 3rd Rack",
            "NeveRust™ Stainless Steel Tub",
            "3 Spray Arms (Top, Upper, Lower)",
            "7 Wash Cycles",
            "8 Options",
            "Delay Start",
            "ENERGY STAR® Qualified"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "Pocket Handle",
            "Top Control",
            "Hidden Front Display Count Down Timer"
        ],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [
            "TrueSteam™ Technology",
            "QuadWash™ Pro",
            "Inverter Direct Drive™ Motor",
            "Dynamic Dry",
            "SenseClean™ Wash System",
            "Auto Cycle",
            "3 - Stage Filtration System",
            "EasyRack™ Plus System with Glide Rails",
            "Auto Leak Detection",
            "LG appliances featuring ThinQ® technology (Wi-Fi Enabled)",
            "SmartDiagnosis™",
            "ThinQ Care",
            "Remote Start",
            "7 Downloadable Cycles"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "dishwashers",
        "subcategory": "dishwasher",
        "title": "LDTH7972_",
        "subtitle": "Smart Top Control Dishwasher with 1-Hour Wash & Dry, QuadWash Pro, TrueSteam and Dynamic Heat Dry",
        "colors": "printproof stainless steel",
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": [
            "LDTH7972S (PrintProof  Stainless Steel) 048231342650",
            "LDTH7972D (PrintProof  Black Stainless Steel) 048231344180"
        ],
        "specSheetLink": "https://lg.widen.net/s/xkxssgjwxv/ldth7972_-spec-sheet",
        "videos": [
            "https://youtu.be/ehNgbnUYANI",
            "https://youtu.be/EvJJzn00Ues",
            "https://youtu.be/alWrZggzQL0",
            "https://youtu.be/C9EKUs7xVLM",
            "https://youtu.be/yJmDDU9spMo"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "42dB",
            "15 Place Settings",
            "1 Hour Wash and Dry Cycle",
            "More Adjustable 3rd Rack",
            "NeveRust™ Stainless Steel Tub",
            "3 Spray Arms (Top, Upper, Lower)",
            "7 Wash Cycles",
            "8 Options",
            "Delay Start",
            "Heated Dry",
            "ENERGY STAR® Qualified"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "Towel Bar",
            "Top Control"
        ],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [
            "TrueSteam™ Technology",
            "QuadWash™ Pro",
            "Inverter Direct Drive™ Motor",
            "Dynamic Heat Dry™",
            "SenseClean™ Wash System",
            "Auto Cycle",
            "3 - Stage Filtration System",
            "EasyRack® Plus System with Glide Rails",
            "Auto Leak Detection",
            "LG appliances featuring ThinQ® technology (Wi-Fi Enabled)",
            "SmartDiagnosis™",
            "ThinQ Care",
            "Remote Start",
            "7 Downloadable Cycles"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "dishwashers",
        "subcategory": "dishwasher",
        "title": "LDPH7972_",
        "subtitle": "Smart Top Control Dishwasher with 1-Hour Wash & Dry, QuadWash Pro, TrueSteam and Dynamic Heat Dry",
        "colors": [
            "printproof stainless steel",
            "printproof black stainless steel"
        ],
        "logos": [
            "lgThinQ",
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa"
        ],
        "upc": [
            "LDPH7972S (PrintProof Stainless Steel) 48231344586",
            "LDPH7972D (PrintProof Black Stainless Steel) 48231344593"
        ],
        "specSheetLink": "https://lg.widen.net/s/pgf8cnbqkr/ldph7972_-spec-sheet",
        "videos": [
            "https://youtu.be/ehNgbnUYANI",
            "https://youtu.be/EvJJzn00Ues",
            "https://youtu.be/alWrZggzQL0",
            "https://youtu.be/C9EKUs7xVLM",
            "https://youtu.be/yJmDDU9spMo"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "42dB",
            "15 Place Settings",
            "1 Hour Wash and Dry Cycle",
            "More Adjustable 3rd Rack",
            "NeveRust™ Stainless Steel Tub",
            "3 Spray Arms (Top, Upper, Lower)",
            "7 Wash Cycles",
            "8 Options",
            "Delay Start",
            "Heated Dry",
            "ENERGY STAR® Qualified"
        ],
        "specTitle2": "STYLISH DESIGN",
        "specList2": [
            "Towel Bar",
            "Top Control",
            "Hidden Front Display Count Down Timer"
        ],
        "specTitle3": "INNOVATIONS",
        "__EMPTY": "",
        "specList3": [
            "TrueSteam™ Technology",
            "QuadWash™ Pro",
            "Inverter Direct Drive™ Motor",
            "Dynamic Heat Dry™",
            "SenseClean™ Wash System",
            "Auto Cycle",
            "3 - Stage Filtration System",
            "EasyRack® Plus System with Glide Rails",
            "Auto Leak Detection",
            "LG appliances featuring ThinQ® technology (Wi-Fi Enabled)",
            "SmartDiagnosis™",
            "ThinQ Care",
            "Remote Start",
            "7 Downloadable Cycles"
        ],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "vacuums",
        "subcategory": "vacuum",
        "title": "A949KTMS",
        "subtitle": "Auto Empty Tower with Cordless Stick Vacuum & Power Mop Pro Nozzle with Dual Floor Max Nozzle Transition from A939KBGS",
        "colors": "graphite",
        "logos": [
            "lgThinQ",
            "kompressor"
        ],
        "upc": "UPC CODES  A949KTMS (Graphite) 048231346818",
        "specSheetLink": "https://lg.widen.net/s/wrtlxdhcjc/a949ktms-spec-sheet",
        "videos": [
            "https://youtu.be/mBC3GaJbj20",
            "https://youtu.be/qez0wsOIgFY",
            "https://youtu.be/n60P-WlWWiA",
            "https://youtu.be/QZTfpSvCMIE"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Kompressor® Technology",
            "2 Quick Release Batteries with 200 minutes run time",
            "Auto-Empty Charge Stand",
            "One-Touch Control",
            "Washable Cyclone and Filters",
            "Telescoping Wand",
            "5-Step Filtration System",
            "Smart Inverter Motor™",
            "Power Mop Pro Nozzle",
            "Dual Floor Max Nozzle",
            "Detachable Handheld Vacuum",
            "Charging Indicator",
            "Filter Maintenance Indicator",
            "Power Mini Nozzle",
            "LG ThinQ® featuring"
        ],
        "specTitle2": "AIO TOWER",
        "specList2": [
            "Auto-Empty Charge Stand",
            "Dual Battery Charging",
            "Capacitive Touch Controls",
            "3-Step Filtration System",
            "Washable Filters",
            "0.6 L Bag",
            "83db",
            "45s Empty Cycle Time",
            "Bag Full Indicator"
        ],
        "specTitle3": "",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "vacuums",
        "subcategory": "vacuum",
        "title": "A937KGMS",
        "subtitle": "LG CordZero Cordless Stick Vacuum with All-in-One Tower",
        "colors": "iron grey",
        "logos": [
            "lgThinQ",
            "kompressor"
        ],
        "upc": "UPC CODES  A937KGMS (Iron Grey) 048231344609",
        "specSheetLink": "https://lg.widen.net/s/mggqdxzp8n/a937kgms-spec-sheet",
        "videos": [
            "https://youtu.be/mBC3GaJbj20",
            "https://youtu.be/qez0wsOIgFY",
            "https://youtu.be/n60P-WlWWiA",
            "https://youtu.be/QZTfpSvCMIE"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Kompressor® Technology",
            "2 Quick Release batteries with up to 120 minutes run time",
            "Auto-Empty Charge Stand",
            "One-Touch Control",
            "Washable Cyclone and Filters",
            "5-Step Filtration System",
            "Telescoping Wand",
            "Power Mini Nozzle (for stairs or pet hair pickup on furniture)",
            "Universal Power Nozzle (for carpet and hard floors)",
            "Combination Tool",
            "Converts to Handheld Vacuum",
            "Charging Indicator - Filter",
            "Maintenance Indicator",
            "LG ThinQ® featuring",
            "Smart Diagnosis (Wi-Fi Enabled)",
            "Smart Inverter Motor™ with 10-Year",
            "Limited Warranty"
        ],
        "specTitle2": "AIO TOWER",
        "specList2": [
            "Auto-Empty Charge Stand",
            "Dual Battery Charging",
            "Capacitive Touch Controls",
            "3-Step Filtration System",
            "Washable Filters (pre / exhaust)",
            "2.5 L Bag",
            "83db",
            "45s Empty Cycle Time",
            "Bag Full Indicator"
        ],
        "specTitle3": "",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "vacuums",
        "subcategory": "vacuum",
        "title": "A931KWM",
        "subtitle": "Auto Empty Tower with Cordless Stick Vacuum & Dual Floor Max Nozzle Transition from A927KGMS",
        "colors": "essence white",
        "logos": [
            "lgThinQ",
            "kompressor"
        ],
        "upc": "UPC CODES  A931KWM (Essence white) 048231346801",
        "specSheetLink": "https://lg.widen.net/s/2xsrpvtk2n/a931kwm-spec-sheet",
        "videos": [
            "https://youtu.be/mBC3GaJbj20",
            "https://youtu.be/n60P-WlWWiA",
            "https://youtu.be/QZTfpSvCMIE"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Kompressor® Technology",
            "1 Quick Release Battery",
            "Auto-Empty Charge Stand",
            "One-Touch Control",
            "Washable Cyclone and Filters",
            "Telescoping Wand",
            "5-Step Filtration System",
            "Smart Inverter Motor™",
            "Dual Floor Max Nozzle",
            "Detachable Handheld Vacuum",
            "Charging Indicator",
            "Filter Maintenance Indicator",
            "LG ThinQ® featuring"
        ],
        "specTitle2": "AIO TOWER",
        "specList2": [
            "Auto-Empty Charge Stand",
            "3-Step Filtration System",
            "Washable Filters",
            "0.6 L Bag",
            "84db",
            "45s Empty Cycle Time",
            "Bag Full Indicator"
        ],
        "specTitle3": "",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "vacuums",
        "subcategory": "vacuum",
        "title": "A925KSM",
        "subtitle": "LG CordZero A9 ThinQ Kompressor Stick Vacuum",
        "colors": "matte silver",
        "logos": [
            "lgThinQ",
            "kompressor"
        ],
        "upc": "UPC CODES  A925KSM (Matte Silver) 048231029759",
        "specSheetLink": "https://lg.widen.net/s/lhfdtplhcm/a925ksm-spec-sheet",
        "videos": [
            "https://youtu.be/qez0wsOIgFY",
            "https://youtu.be/n60P-WlWWiA",
            "https://youtu.be/QZTfpSvCMIE"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "Kompressor® Technology",
            "2 Quick Release batteries with up to 120 minutes run time",
            "Portable Charging Stand",
            "Wall Mount Charge Stand",
            "Battery Life Indicator",
            "One-Touch Control",
            "Washable Cyclone and Filters",
            "5-Step Filtration System",
            "Telescoping Wand",
            "ThinQ® App via built-in Wi-Fi",
            "Universal Power Nozzle (for carpet and hard floors)",
            "Converts to Handheld Vacuum",
            "Smart Inverter Motor™ with 10-Year Limited Warranty"
        ],
        "specTitle2": "",
        "specList2": [],
        "specTitle3": "",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "vacuums",
        "subcategory": "vacuum",
        "title": "A913BM",
        "subtitle": "LG CordZero A9 Cordless Stick Vacuum",
        "colors": "matte black",
        "logos": [],
        "upc": "A913BM (Matte Black  Silver) 048231029124",
        "specSheetLink": "https://lg.widen.net/s/hq88nvfrtk/a913bm-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "1 Quick Release battery with up to 50 minutes run time",
            "Portable Charging Stand",
            "Wall Mount Charge Stand",
            "Battery Life Indicator",
            "One-Touch Control",
            "Washable Cyclone and Filters",
            "5-Step Filtration System",
            "Telescoping Wand",
            "Universal Power Nozzle (for carpet and hard floors)",
            "Converts to Handheld Vacuum",
            "Smart Inverter Motor™ with 10-Year Limited Warranty"
        ],
        "specTitle2": "",
        "specList2": [],
        "specTitle3": "",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "vacuums",
        "subcategory": "vacuum",
        "title": "V-TOTALCARE",
        "subtitle": "A9 Total Care Kit",
        "colors": "black",
        "logos": [],
        "upc": [],
        "specSheetLink": "https://lg.widen.net/s/wzgsbbxbbr/a9-total-care-kit-spec-sheet",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "LG Vacuum Cleaning Tools and Attachments Designed for use with A9 CordZero Vacuums.",
            "Includes five tools to enhance cleaning performance and applications:",
            "Flexible Crevice Tool reaches under furniture and appliances.",
            "Multiangle Brush twists up to 90° for hard-to-reach cleaning.",
            "Hard Dirt Tool uses firm bristles to remove embedded debris.",
            "Mattress Tool for upholstery and bedding.",
            "Extension Hose provides extra reach."
        ],
        "specTitle2": "",
        "specList2": [],
        "specTitle3": "",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "air care",
        "subcategory": "air care",
        "title": "AS560DWR0",
        "subtitle": "LG PuriCare 360 Air Purifier",
        "colors": "white",
        "logos": [
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": "AS560DWR0 (White) 048231600071",
        "specSheetLink": "https://lg.widen.net/s/jsjqtj9ktt/as560dwr0-spec-sheet",
        "videos": [
            "https://youtu.be/9asXS5Fk1ns",
            "https://youtu.be/44u2Dp9-78c",
            "https://youtu.be/TO7X8ZSP2Zo"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "360° Purification",
            "Clean Booster",
            "True HEPA Filter",
            "PM 1.0 Sensor",
            "Smart Indicator",
            "LG ThinQ® Technology",
            "Google Assistant and Amazon Alexa compatibility",
            "LoDecibel™ Quiet Operation",
            "Inverter Motor - 10 Year Warranty",
            "Stylish Design",
            "Filter Replacement Alarm",
            "Child Lock",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "",
        "specList2": [],
        "specTitle3": "",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "air care",
        "subcategory": "air care",
        "title": "AS330DWR0",
        "subtitle": "LG PuriCare 360 Single Air Purifier",
        "colors": "white",
        "logos": [
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": "UPC CODES  AS330DWR0 (White) 048231600095",
        "specSheetLink": "https://lg.widen.net/s/zcg5vrfswr/as330dwr0-spec-sheet",
        "videos": [
            "https://youtu.be/9asXS5Fk1ns",
            "https://youtu.be/44u2Dp9-78c",
            "https://youtu.be/TO7X8ZSP2Zo"
        ],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "360° Purification",
            "Clean Booster",
            "True HEPA Filter",
            "PM 1.0 Sensor",
            "Smart Indicator",
            "LG ThinQ® Technology",
            "Google Assistant and Amazon Alexa compatibility",
            "LoDecibel™ Quiet Operation",
            "Inverter Motor - 10 Year Warranty",
            "Stylish Design",
            "Filter Replacement Alarm",
            "Child Lock",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "",
        "specList2": [],
        "specTitle3": "",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "air care",
        "subcategory": "air care",
        "title": "UD501KOJ5",
        "subtitle": "LG PuriCare 50-Pint Dehumidifier with Pump & Wi-Fi",
        "colors": "black",
        "logos": [
            "ThinQ Care",
            "worksWithHeyGoogle",
            "worksWithAlexa",
            "energyStar"
        ],
        "upc": "UPC CODES  UD501KOJ5 (Black) 048231601146",
        "specSheetLink": "https://lg.widen.net/s/nccwdsz9wd/ud501koj5-spec-sheets",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "50 pint daily capacity",
            "Built-In Drain Pump with DC motor",
            "LG ThinQ® Technology (Wi-Fi)",
            "Google Assistant and Amazon Alexa compatibility",
            "dBA Level (Front) 49/46",
            "dBA Level (Back) 52/49",
            "Power Failure Auto Restart",
            "Airflow Blockage Alarm",
            "Full Bucket Indicator with Auto Shut-Off",
            "Easy to remove, side mount bucket",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "",
        "specList2": [],
        "specTitle3": "",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    },
    {
        "category": "air care",
        "subcategory": "air care",
        "title": "UD501KOG5",
        "subtitle": "LG PuriCare 50-Pint Dehumidifier",
        "colors": "black",
        "logos": "energyStar",
        "upc": "UPC CODES  UD501KOG5 (Black) 048231601009",
        "specSheetLink": "https://lg.widen.net/s/l77dvflwpt/ud501kog5-spec-sheets",
        "videos": [],
        "specTitle1": "SPECIFICATIONS",
        "specList1": [
            "50 pint daily capacity",
            "dBA Level (Front) 49/46",
            "dBA Level (Back) 52/49",
            "Power Failure Auto Restart",
            "Airflow Blockage Alarm",
            "Full Bucket Indicator with Auto Shut-Off",
            "Easy to remove, side mount bucket",
            "ENERGY STAR® Certified"
        ],
        "specTitle2": "",
        "specList2": [],
        "specTitle3": "",
        "__EMPTY": "",
        "specList3": [],
        "specTitle4": "",
        "specList4": [],
        "image": "",
        "specSheetQrcode": "",
        "store": "LG US",
        "availability": "available",
        "msrp": 0,
        "Other items": []
    }
]


