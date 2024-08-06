



export const LGComponent = ({ type }) => {
    const publicUrl = process.env.PUBLIC_URL;

    const typeUrlMap = {
        // hands:`${publicUrl}/assets/image/character/characters.png`,
        boyTop: `${publicUrl}/assets/image/characters/boy-top.webp`,
        boyHands:`${publicUrl}/assets/image/characters/boy-hands.webp`,
        girlFull: `${publicUrl}/assets/image/characters/girl-full.webp`,
        girlHand: `${publicUrl}/assets/image/characters/girl-hand.webp`,
        boyFull: `${publicUrl}/assets/image/characters/boy-full.webp`,
 
    }

 
    const LGCharacterUrl = typeUrlMap[type];

    return <img src={LGCharacterUrl} />;

}