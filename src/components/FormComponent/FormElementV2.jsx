
import { IconComponent } from "../Icon/IconComponent";
import { PageText } from "../Text/Text";

import styles from "./FormElement.module.css";
import { useState, useEffect, useRef } from "react";
import { TextInput } from "./TextInput/TextInput";



export const FormElementV2 = (
    type
) =>{

    const formElementTypes = {
        textinput: <TextInput/>
        // textarea: TextAreaInput,
        // textnumber: TextNumberInput,
        // selectmenu: SelectMenu,
        // checkbox: Checkbox,
    }
    const FormElementComponent = formElementTypes[type];

    return FormElementComponent
}