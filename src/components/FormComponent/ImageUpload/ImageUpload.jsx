import { useRef, useState, useEffect } from 'react'
import styles from './ImageUpload.module.css'
import { IconComponent } from '../../Icon/IconComponent';


const ImageUpload = (props) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [isValid, setIsValid] = useState(false)
    const filePickerRef = useRef();

    useEffect(() => {
        if (!selectedFile) {
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result)
        }
        fileReader.readAsDataURL(selectedFile);

    }, [selectedFile]);

    const pickedHandler = event => {

        if (event.target.files.length === 0) {
            // User canceled the file picker dialog, do nothing
            return;
        }
        let file;
        let fileIsValid = isValid;
        if (event.target.files && event.target.files.length === 1) {
            file = event.target.files[0];
            setSelectedFile(file);
            
            setIsValid(true);
            fileIsValid = true;

        } else {
            setIsValid(false);
            fileIsValid = false
        }

        props.onInput(props.id, file, fileIsValid)
        setIsValid(false)
    };
    const pickImageHandler = () => {
        filePickerRef.current.click();//use a dom element without seeing it
    }
    return (
        <div className={styles.uploadImageContainer}>
            <div className={styles.imageSquare}>
                {
                    previewUrl ?
                        <div className={styles.imagePreviewBox}>
                            <img src={previewUrl} alt="Preview url" />
                        </div>
                        :
                        <div>
                            <p className={styles.labelText}>Upload File</p>
                        </div>
                }
                <span onClick={pickImageHandler}>
                    <button type='button'>
                  
                        {previewUrl ? 'upload': <IconComponent name="plus" />}
                  
                    </button>
                </span>
                {/* <Button
                    type="button"
                    styleName='black'
                    onClick={pickImageHandler}>
                    {previewUrl ? 'Change Image' : <Icon name="add" />}
                </Button> */}

                <input
                    ref={filePickerRef}
                    id={props.id}
                    style={{ display: 'none' }}
                    type="file"
                    accept=".jpg, .png, .jpeg, .webp"
                    onChange={pickedHandler}
                />
                {!isValid && <p>{props.errorText}</p>}
            </div>
        </div>
    )

}


export default ImageUpload;