



export const LGComponent = ({ type }) => {
    const publicUrl = process.env.PUBLIC_URL;

    const typeUrlMap = {
        hands:`${publicUrl}/assets/image/character/characters.png`,
        // boyTop: `${publicUrl}/assets/image/character/boy-top.png`,
        // boyHand:{`${publicUrl}/`} "/assets/image/character/boy-hand.png",
        girlFull: `${publicUrl}/assets/image/characters/girl-full.webp`,
 
    }

 
    const LGCharacterUrl = typeUrlMap[type];

    return <img src={LGCharacterUrl} />;

}