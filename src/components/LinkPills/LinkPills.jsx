import { LinkComponent } from "../Links/LinkComponent"
import { Button } from "../Button/Button";

export const LinkPills = ({links}) => {
    return (
        <div className={styles.searchOptionButtonWrapper}>
            {links.map((link, idx) =>
                <span key={idx}>
                    <LinkComponent href={link.href}>
                        <Button buttonStyleType="primary">{link.text}</Button>
                    </LinkComponent>
                </span>
            )};
        </div>
    );
}
