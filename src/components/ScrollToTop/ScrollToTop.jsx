

import { IconComponent } from "../Icon/IconComponent";
import styles from "./ScrollToTop.module.css"




const ScrollToTop = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (


        <div
           
            onClick={scrollToTop}
            className={styles.scrollToTopcontainer}
        >
            <IconComponent iconType='xClose'/>
          
                {/* <TheButton
                    animated="true"
                    icon
                    buttonIcon ="true"
                    iconName="caretUp"
                    styleName="lightIconButton"
                  
                /> */}
                {/* <Icon name="arrow-up" /> */}

   
        </div>
    )
}

export default ScrollToTop;