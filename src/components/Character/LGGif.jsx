



export const LGGif = ({ type }) => {


    const typeUrlMap = {
    
        handHeartBoy: `/assets/image/gif/hand-heart-boy.gif`,
        armHeartGirl:`/assets/image/gif/arm-heart-girl.gif`,
       
    }

 
    const GifUrl = typeUrlMap[type];

    return <img loading='lazy' src={GifUrl} />;

}