export const LGGif = ({ type }) => {
    const typeUrlMap = { armHeartGirl: `/assets/image/gif/arm-heart-girl.gif` }
    const GifUrl = typeUrlMap[type];
    return <img loading='lazy' src={GifUrl} />;
}