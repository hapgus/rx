import { GridSystem } from "../GridSystem/GridSystem";
import styles from "./HeroComponent.module.css";

import { PageText } from "../Text/Text";
import { AnimatedImage, AnimatedComponent} from "../../hooks/use-framer-motion";

import { LinkComponent } from "../Links/LinkComponent";
import { capitalizeFirstLetterEachWord  } from "../../utils/helper-functions";
import { ExternalLink } from "../Links/ExternalLink";


export const HeroComponent = ({
    subtitle,
    title,
    description,
    imgAlt,
    imgSrc,
    externalLinkCallout = false,
    internalLinkCallout = false,
    calloutLinkUrl,
    calloutLinkText,
    calloutText
}) => {
    console.log(imgAlt, imgSrc)
    return (
        <div className={styles.pageHeaderContainer}>
            <GridSystem gridType="spread" containerBorderBottom="1px solid #D0CBC1" >
                <div className={styles.contentWrapper}>
                    <div className={styles.heroGridContainer}>

                        <div className={styles.heroGridWrapper}>

                            <div className={styles.gridItem1}>
                                <div className={styles.gridItem1TextWrapper}>
                                    <div className={styles.headlineTitles}>
                                        {
                                            subtitle &&
                                            <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.2}>
                                                <div className={styles.subtitle}>
                                                    <PageText type="heroSubtitle">{subtitle}</PageText>
                                                </div>
                                            </AnimatedComponent>
                                        }
                                        {
                                            title &&
                                            <AnimatedComponent type="bounceEffect">
                                                <div className={styles.title}>
                                                    <PageText type="heroTitle">{title && capitalizeFirstLetterEachWord(title)}</PageText>
                                                </div>
                                            </AnimatedComponent>
                                        }
                                    </div>
                                    {
                                        description &&
                                        <AnimatedComponent type="wipeEffect" directionStart='left' delay={0.5}>
                                            <div className={styles.description}>
                                                <PageText type="heroDescription">{description}</PageText>

                                            </div>
                                        </AnimatedComponent>
                                    }
                                </div>

                                <div className={styles.heroCallout}>
                                    <PageText type="bodySubtitle">
                                        {calloutText}
                                        {" "}
                                        <span className={styles.ctaLinkText}>
                                            {
                                                externalLinkCallout === true ?
                                                    <ExternalLink href={calloutLinkUrl}>{calloutLinkText}</ExternalLink>
                                                    : null
                                            }
                                            {
                                                internalLinkCallout === true ?
                                                    <LinkComponent href={calloutLinkUrl}>{calloutLinkText}</LinkComponent>
                                                    : null

                                            }

                                        </span>
                                    </PageText>

                                </div>

                            </div>
                            <div className={styles.gridItem2}>
                                <div className={styles.gridItem2Image}>
                                    {/* <div className={styles.iconShapeWrapper}>
                                        <IconComponent iconType="backgroundShape" />
                                    </div> */}
                                    <AnimatedImage
                                        type="wipeEffect" directionStart='left' delay={1}
                                        src={imgSrc}
                                        alt={imgAlt}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </GridSystem>

        </div>
    )
}