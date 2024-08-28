
import { IconComponent } from "../../Icon/IconComponent";

import { Label } from "../Label/Label";
import { Feedback } from "../Feedback/Feedback";
import styles from "./TextInput.module.css";
import { useState, useEffect, useRef } from "react";


// THE EXPORT
export const DynamicTextInput = ({
 
    id,
    name,
    labelName,
    errorText,

    secondaryLabel,
    iconType,
    onIconClick,

    children,
    onChange,
    feedback = false,
    value,
    feedbackType,
    feedbackMessage = '',

}) => {
   
    return (
        // <div className={styles.formElementContainer}>
        <div className={styles.mainTextInputContainer}>
            <Label
                  id={id}
                  labelName={labelName}
                  secondaryLabel={secondaryLabel}
            >
                 <div className={styles.inputContainer}>
                    <input
                        {...children}
                        type='text'
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        // onBlur={touchHandler}
                        // onBlur={noTouchValidation === true ? undefined : touchHandler}
                        className={styles.input}
                    />
                    {
                        iconType &&
                        <div className={styles.inputIcon}>
                            <IconComponent onClick={onIconClick} iconType={iconType} />
                        </div>
                    }

                </div>
                {feedback&& <Feedback 
                feedbackType='error' 
                feedbackMessage={feedbackMessage}
                
                />
                }
               
                
            </Label>
           
        </div>
    );
};