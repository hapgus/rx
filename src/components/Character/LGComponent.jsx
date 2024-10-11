export const LGComponent = ({ type }) => {
    const typeUrlMap = {
        boyTop: `/assets/image/characters/boy-top.webp`,
        boyHands:`/assets/image/characters/boy-hands.webp`,
        girlFull: `/assets/image/characters/girl-full.webp`,
        girlHand: `/assets/image/characters/girl-hand.webp`,
        boyFull: `/assets/image/characters/boy-full.webp`,
        boyFullCrop: `/assets/image/characters/boy-full-crop.webp`,
    }
    const LGCharacterUrl = typeUrlMap[type];
    return <img loading='lazy' src={LGCharacterUrl} />;

}