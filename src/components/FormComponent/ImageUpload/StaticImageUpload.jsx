import { Button } from '../../Button/Button'
import { IconComponent } from '../../Icon/IconComponent'
import { PageText } from '../../Text/Text'
import styles from './StaticImageUpload.module.css'
import { useRef } from 'react'

export const StaticImageUpload = ({
    iconType = 'uploadArrow',
    itemName = 'Media',
    previewUrl,
    // selectedFile,
  
    handleFileChange,
}) => {



    const filePickerRef = useRef();

    const pickImageHandler = () => {
        filePickerRef.current.click();
    }
    
    

    // console.log(previewUrl)
    return (
        <div className={styles.imageUploadContainer}>
            <div className={styles.imageUploadHeader}>
                <div className={styles.title}>
                    <PageText>{`Add ${itemName}`}</PageText>
                </div>
                <div className={styles.description}>

                    <PageText>{`Upload your ${itemName} file. The file name must match the title of the applicable product.`}</PageText>
                </div>
            </div>

            {
                // previewUrl || selectedFile ? (
                    previewUrl ? (
                    <div className={styles.imageUploadBodyPreview}>
                        <div className={styles.imageWrapper}>
                        <img alt='image preview' src={previewUrl} />
                            {/* <img alt='image dish' src={previewUrl ? previewUrl : selectedFile} /> */}
                        </div>
                        <div className={styles.imageUploadFooterPreview}>
                            <div className={styles.bodyActionContainer}>
                                <input
                                    ref={filePickerRef}
                                    style={{ display: 'none' }}
                                    type="file"
                                    accept=".jpg, .png, .jpeg, .webp"
                                    onChange={handleFileChange} />
                                <div className={styles.buttonWrapper}>
                                    <Button onClick={pickImageHandler} buttonStyleType='secondary'>Chnage selection</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={styles.imageUploadBody}>
                        <div className={styles.bodyIcon}>
                            <IconComponent iconType={iconType} />
                        </div>
                        <div className={styles.bodyText}>
                            <div className={styles.bodyTitle}>
                                <PageText>Upload your image</PageText>
                            </div>
                            <div className={styles.bodyDescription}>
                                <PageText>JPEG, PNG, WEBP formats, up to 2MB</PageText>
                            </div>
                        </div>
                        <div className={styles.bodyActionContainer}>
                            <input
                                ref={filePickerRef}
                                style={{ display: 'none' }}
                                type="file"
                                accept=".jpg, .png, .jpeg, .webp"
                                onChange={handleFileChange} />
                            <div className={styles.buttonWrapper}>
                                <Button onClick={pickImageHandler} buttonStyleType='secondary'>Upload image</Button>
                            </div>
                        </div>
                    </div>
                )
            }


            <div className={styles.imageUploadFooter}>

                <div className={styles.footerDescription}>

                    <PageText>{`Files over 2MB or not of JPEG, PNG, or WEBP format will not be accepted. `}</PageText>
                </div>
            </div>
        </div>
    )

}