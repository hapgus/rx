import { useMemo } from "react";
import { motion } from "framer-motion";
import { useResponsiveStateHook } from "./responsive-hook";

export const useAnimation = (type, delay = 0, directionStart) => {
    return useMemo(() => {
        switch (type) {
            case "dropdownChildrenEffects":
                return {
                    hidden: { opacity: 0, x: 100 },  // Start off-screen to the right
                    visible: {
                        opacity: 1,
                        x: 0,  // Slide into view
                        transition: {
                            type: "spring",  // Use a spring-like motion
                            stiffness: 150,   // Controls speed of the spring effect
                            damping: 10,      // Smooths the spring stop
                            duration: 0.4     // Ensures a smooth animation time
                        }
                    },
                    exit: {
                        opacity: 0,
                        x: 100,  // Slide out to the right when exiting
                        transition: {
                            ease: "easeInOut",
                            duration: 0.3     // Smooth exit duration
                        }
                    }
                };
            case "3dRoationDropdownEffects":
                return {
                    initial: { rotateX: -90, opacity: 0 },  // Start with the dropdown rotated out of view
                    animate: {
                        rotateX: 0,  // Rotate back to 0
                        opacity: 1,
                        transition: {
                            delay,
                            duration: 0.6,
                            ease: [0.6, -0.05, 0.01, 0.99], // Smooth ease for 3D rotation
                            // staggerChildren: 0.1,  // Stagger the appearance of child links
                            // delayChildren: 0.2     // Delay children by 0.2 seconds before stagger begins
                        }
                    },
                    exit: {
                        rotateX: -90,  // Rotate back out of view
                           opacity: 1,
                        transition: {
                            // duration: 0.4, 
                            ease: "easeInOut"
                        }
                    }
                };
            case "tiltDropdownEffects":
                return {
                    initial: { rotateX: -15, y: -30, opacity: 1 },  // Slight tilt and move upwards
                    animate: {
                        rotateX: 0,  // Level out the tilt
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.5,
                            ease: [0.25, 0.8, 0.25, 1]  // Smooth curve for the transition
                        }
                    },
                    exit: {
                        rotateX: -15,  // Tilt slightly again when exiting
                        y: -30,        // Move upwards as it fades out
                        opacity: 0,
                        transition: { duration: 0.4, ease: "easeInOut" }
                    }
                };
            case "depthShadowDropdownEffects":
                return {
                    initial: { y: "-100%", opacity: 0, boxShadow: "0 0 0 rgba(0,0,0,0)" },
                    animate: {
                        y: "0%",
                        opacity: 1,
                        boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",  // Adds depth with shadow
                        transition: {
                            duration: 0.6,
                            ease: [0.42, 0, 0.58, 1]  // Smooth ease for subtle feel
                        }
                    },
                    exit: {
                        y: "-100%",
                        opacity: 0,
                        boxShadow: "0 0 0 rgba(0,0,0,0)",
                        transition: { duration: 0.4, ease: "easeInOut" }
                    }
                };
            case "modalEffects":
                return {
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 0.8 },
                    transition: { duration: 0.5, delay, ease: "easeInOut" }
                };
            case "hoverScale":
                return {
                    whileHover: { scale: 1.05 }, // Slight scale-up on hover
                    whileTap: { scale: 0.95 }, // Scale down slightly on click
                    transition: { duration: 0.3, delay, ease: "easeInOut" },
                }
            case "slideIn":
                return {
                    initial: { opacity: 0, x: 100 }, // Start off-screen to the left
                    animate: { opacity: 1, x: 0 },
                    exit: { opacity: 0, x: -100 }, // Slide out to the right
                    transition: { duration: 0.8, delay, ease: "easeInOut" }
                    // initial: { opacity: 0, x: 20 },
                    // animate: {
                    //     opacity: 1,
                    //     x: 0,
                    //     transition: { duration: 1.3, delay, ease: [0.75, 0, 0, 1] },
                    // },
                    // exit: {
                    //     opacity: 0,
                    //     x: 50,
                    //     transition: { duration: 2.3, ease: [0.75, 0, 0, 1] },
                    // },
                };
            case "slideDown":

                return {
                    initial: { opacity: 0, y: -60 },
                    animate: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1.3, delay, ease: [0.75, 0, 0, 1] },
                    },
                    exit: {
                        opacity: 0,
                        y: -50,
                        transition: { duration: 2.3, ease: [0.75, 0, 0, 1] },
                    },
                };
            case "slideDownTwist":

                return {
                    initial: { opacity: 0, y: -150, scale: 0.9, rotate: 2 }, // Start higher up with scale and slight rotation
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotate: 0,
                        transition: {
                            duration: 1, // Reduced duration for snappiness
                            delay,
                            ease: [0.68, -0.55, 0.27, 1.55], // Custom cubic-bezier for bounce effect
                        },
                    },
                    exit: {
                        opacity: 0,
                        y: -100, // Fall further down
                        transition: {
                            duration: 0.8,
                            ease: "easeInOut", // More subtle exit
                        },
                    },
                };
            case "fade":
                return {
                    initial: { opacity: 0 },
                    animate: { opacity: 1, transition: { duration: 0.3, delay } },
                    exit: { opacity: 0, transition: { duration: 0.3, ease: [0.75, 0, 0, 1] } },
                };

            case "blurFadeIn":
                return {
                    initial: { opacity: 0, filter: "blur(10px)" },
                    // initial: { opacity: 0, filter: "blur(10px)", scale: 0.8 },
                    animate: {
                        opacity: 1,
                        filter: "blur(0px)",
                        transition: { duration: .7, delay },
                        // scale: 1,
                    },
                    exit: {
                        opacity: 0,
                        filter: "blur(10px)",
                        transition: { duration: 0.2 },
                        // scale: 0.8,
                    }
                };

            case "rippleEffect":
                return {
                    initial: { scale: 0.9, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    exit: { scale: 1.1, opacity: 0 },
                    transition: { duration: 0.9, ease: "easeInOut" }
                }
            case "skewEffect":
                return {
                    initial: { skewX: 20, opacity: 0 },
                    animate: { skewX: 0, opacity: 1 },
                    exit: { skewX: -20, opacity: 0 },
                    transition: { duration: 0.5, delay, ease: "easeInOut" }
                }
            case "bounceEffect":
                return {
                    // initial: { y: -50, opacity: 0 },

                    initial: {
                        y: -200,
                        opacity: 0,
                        transition: {
                            type: "spring",
                            stiffness: 150,
                            damping: 20,

                        }
                    },
                    animate: { y: 0, opacity: 1 },
                    exit: { y: 50, opacity: 0 },
                    // exit: { y: 50, opacity: 0 },
                    transition: {
                        type: "spring",
                        stiffness: 150,
                        damping: 20
                    }
                }
            case "bounceRightLoop":
                return {
                    initial: { x: 0 },  // Start at the original position
                    whileHover: {
                        x: [0, 10, 0],  // Move to the right and back (bounce)
                        transition: {
                            duration: 0.6,  // Duration for one bounce
                            ease: "easeInOut",  // Smooth easing
                            repeat: Infinity,  // Keep bouncing
                            repeatType: "loop"  // Loop the animation continuously
                        }
                    },
                    exit: { x: 0 },  // Reset the position when unhovered
                };
            case "elasticBounceEffect":
                return {
                    initial: {
                        y: -200,
                        opacity: 0,
                        scale: 0.9,
                        transition: {
                            type: "spring",
                            stiffness: 100, // Less stiff for a gentler effect
                            damping: 15,    // Softer damping for more springy feel
                        }
                    },
                    animate: { y: 0, opacity: 1, scale: 1 },
                    exit: { y: 50, opacity: 0, scale: 0.9 },
                    transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                    }
                }
            case "rubberBandBounce":
                return {
                    initial: {
                        scale: 0.8,
                        opacity: 0
                    },
                    animate: {
                        scale: [1.2, 0.95, 1.05, 1],
                        opacity: 1,
                        transition: {
                            type: "spring",
                            stiffness: 120,
                            damping: 12
                        }
                    },
                    exit: { scale: 0.8, opacity: 0 },
                    transition: {
                        type: "spring",
                        stiffness: 120,
                        damping: 12
                    }
                }
            case "softFloatBounce":
                return {
                    initial: {
                        y: -150,
                        opacity: 0
                    },
                    animate: {
                        y: [0, -10, 5, 0], // Slight overshoot before settling
                        opacity: 1,
                        transition: {
                            type: "spring",
                            stiffness: 80,  // Much softer bounce
                            damping: 20
                        }
                    },
                    exit: {
                        y: 50,
                        opacity: 0
                    },
                    transition: {
                        type: "spring",
                        stiffness: 80,
                        damping: 20
                    }
                }
            case "quickBounce":
                return {
                    initial: {
                        y: -150,
                        opacity: 0,
                        transition: {
                            type: "spring",
                            stiffness: 200,  // Faster movement
                            damping: 25,
                        }
                    },
                    animate: { y: 0, opacity: 1 },
                    exit: { y: 50, opacity: 0 },
                    transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 25
                    }
                }
            case "overshootBounce":
                return {
                    initial: {
                        y: -250,
                        opacity: 0
                    },
                    animate: {
                        y: [0, -10, 5, 0],
                        opacity: 1,
                        transition: {
                            type: "spring",
                            stiffness: 140,
                            damping: 10
                        }
                    },
                    exit: { y: 50, opacity: 0 },
                    transition: {
                        type: "spring",
                        stiffness: 140,
                        damping: 10
                    }
                }
            case "wipeEffect":
                const clipPathInitial = {
                    right: "inset(0 100% 0 0)",
                    left: "inset(0 0 0 100%)",
                    top: "inset(100% 0 0 0)",
                    bottom: "inset(0 0 100% 0)"
                }[directionStart] || "inset(0 100% 0 0)"; // Default to 'right'

                const clipPathExit = {
                    right: "inset(0 0 0 100%)",
                    left: "inset(0 100% 0 0)",
                    top: "inset(0 0 100% 0)",
                    bottom: "inset(100% 0 0 0)"
                }[directionStart] || "inset(0 0 0 100%)"; // Default to 'right'

                return {
                    initial: { clipPath: clipPathInitial },
                    animate: { clipPath: "inset(0 0 0 0)" },  // Fully revealed
                    exit: { clipPath: clipPathExit },  // Wipe-out
                    transition: { duration: 1, delay, ease: [0.77, 0, 0.175, 1] }
                };
            default:
                return {};
        }
    }, [type, delay, directionStart]);
};


// export const AnimatedComponent = ({ children, type = "fade", delay = 0, isVisible = true }) => {
export const AnimatedComponent = ({ children, type = "fade", delay = 0 }) => {
    const animation = useAnimation(type, delay); // Get the animation based on type

    return (
        <motion.div
            initial={animation.initial}  // Explicitly pass initial
            animate={animation.animate}  // Explicitly pass animate
            exit={animation.exit}        // Explicitly pass exit
            transition={animation.transition} // Ensure transition is passed
        >
            {children}
        </motion.div>
    );
};
export const AnimatedTitle = ({ children, type = "slideIn", as = "h1", className = "", delay = 0 }) => {
    const animation = useAnimation(type, delay);

    const Tag = as; // Allows for dynamic tag rendering, e.g., h1, h2, etc.

    return (
        <motion.div {...animation}>
            <Tag className={className}>
                {children}
            </Tag>
        </motion.div>
    );
};


export const AnimatedImage = ({
    src,
    directionStart = "right",
    type = "blurFadeIn",
    alt,
    delay = 0
}) => {
    const animation = useAnimation(type, delay, directionStart);

    return (
        <motion.img
            {...animation}

            src={src}
            alt={alt}
        />
    );
};


export const AnimatedButton = ({

    type = "hoverScale", // Default animation type
    delay = 0,
    children

}) => {
    const { isMobile } = useResponsiveStateHook(); // Get responsive state to detect mobile
    const animation = useAnimation(type, delay); // Get the animation based on type

    // Conditionally apply animation only if it's not mobile
    const conditionalAnimation = !isMobile ? animation : {}; // Don't apply animation on mobile

    return (
        <motion.div
            {...conditionalAnimation}
style={{width:"100%"}}
        >
            {children}
        </motion.div>
    );
    // return (
    //   <motion.button
    //     onClick={onClick}
    //     style={buttonStyle}
    //     disabled={disabled}
    //     type={buttonType}
    //     {...buttonProps} // Apply animation only if not mobile
    //   >
    //     {children}
    //   </motion.button>
    // );
};