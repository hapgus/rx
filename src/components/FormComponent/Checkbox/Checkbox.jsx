import styles from './Checkbox.module.css'


export const Checkbox = ({id, name, value, checked, labelName, onChange}) => {

    const handleSelectionChange = event => {
        onChange(event.target.value, event.target.checked);
    }

    return (
        <div className={styles.checkboxRow}>
            <label htmlFor={id} className={styles.checkboxLabel}>
                {labelName}
            </label>
            <input
                type="checkbox"
                id={id}

                name={name}
                value={value}
                checked={checked}
                onChange={handleSelectionChange}
                className={styles.checkboxInput}
            />
        </div>
    );
};
