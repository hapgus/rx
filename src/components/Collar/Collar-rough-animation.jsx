import { PageText } from "../Text/Text";
import styles from "./Collar.module.css";
import { LinkComponent } from "../Links/LinkComponent";
import { categoryLinks } from "../../utils/link-helper";
import { GridSystem } from "../GridSystem/GridSystem";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
// https://www.youtube.com/watch?v=AqMESJ51e3o

export const Collar = () => {

    const firstText = useRef(null);
    const secondText = useRef(null);
    const slider = useRef(null);
    let xPercent = 0;
    let direction = 1; // sets direction - change to one changes direction

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        requestAnimationFrame(animation);

        gsap.to(slider.current, {
            scrollTrigger:{
                trigger:document.documentElement,
                start:0,
                end:window.innerHeight,
                // scrub:true,
                scrub:0.25, // smoother with slight easing
                 onUpdate:e=> direction = e.direction * -1
            },
            x:"-=300px", //moves slider along x axis by 300px on scroll
           
        })
    }, [])

    const animation = () => {

        if(xPercent <= -100){
            xPercent = 0;
        }

        if(xPercent > 0){ //Ensures inifinte scroll if going right
            xPercent = -100;
        }
        gsap.set(firstText.current, { xPercent: xPercent })
        gsap.set(secondText.current, { xPercent: xPercent })
        xPercent += 0.1 * direction; //number sets spees
        requestAnimationFrame(animation);
    }

    console.log(gsap)
    return (
        <div className={styles.main}>
            <div className={styles.sliderContainer}>

                <div ref={slider} className={styles.slider}>
                    <p ref={firstText} >LG Home Appliances Here -</p>
                    <p ref={secondText}>LG Home Appliances Here -</p>
                </div>
            </div>
        </div>
    );
};
