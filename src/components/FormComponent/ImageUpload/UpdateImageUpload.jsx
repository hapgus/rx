import { useRef, useState, useEffect } from "react";
import Button from "../../Buttons/Buttons";
import Icon from "../../IconElements/Icon";
import styles from "./ImageUpload.module.css"
import TheButton from "../../UI/TheButton";
import TheIcon from "../../UI/TheIcon";

const UpdateImageUpload = (props) => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [isValid, setIsValid] = useState(false)
    const filePickerRef = useRef();

    useEffect(() => {
        if (!selectedFile) {
            return;
        } const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result)
        }
        fileReader.readAsDataURL(selectedFile);

    }, [selectedFile]);

    const pickImageHandler = () => {
        filePickerRef.current.click();//use a dom element without seeing it
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setPreviewUrl(URL.createObjectURL(file));
        // console.log('Selected Image file:', file);
    };
    return (
        <div className={styles.uploadImageContainer}>
            <div className={styles.imageSquare}>
                <div>
                    <label>Upload Product Image</label>
                </div>
                <div>
                    <div>
                        {previewUrl && (
                            <div className={styles.imagePreviewBox}>
                                <img src={selectedFile ? previewUrl : `${process.env.REACT_APP_BACKEND_URL}/` + props.loadedProduct.image} alt="Preview" />
                            </div>
                        )}
                        <input
                            ref={filePickerRef}
                            id={props.id}
                            style={{ display: 'none' }}
                            type="file"
                            accept=".jpg, .png, .jpeg, .webp"
                            onChange={handleFileChange}
                        />
                        <span onClick={pickImageHandler}>
                            <TheButton
                                styleName="black"
                                type="button"
                                animated="true"
                            >
                                {previewUrl ? 'Change Image' : <TheIcon name="plus" />}
                            </TheButton>
                        </span>
                        {/* <Button
                        type="button"
                        onClick={pickImageHandler}>
                        {previewUrl ? 'Change Image' : <Icon name="add" />}
                    </Button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateImageUpload;