import { Button } from './Button';
import { LinkComponent } from '../Links/LinkComponent';
import styles from './FeatureButtons.module.css'

export const FeatureButtons = ({ links }) => {

    return (
        <div className={styles.buttonWrapper}>
            {
                links && links.map((e, idx) =>
                    <div key={idx}>
                        <LinkComponent href={e.href} >
                            <Button buttonStyleType='primary' >{e.text}</Button>
                        </LinkComponent>
                    </div>
                )
            }
        </div>
    );
}