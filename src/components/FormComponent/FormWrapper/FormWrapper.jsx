import styles from './FormWrapper.module.css'
export const FormWrapper = ({children}) => {
    return<div className={styles.formWrapperContainer}>{children}</div>
}