

import { LinkComponent } from '../../../components/Links/LinkComponent';

import { PageText } from '../../../components/Text/Text';
import styles from './not-found.module.css'

//Need alternative grid system - without hero
const NotFoundPage = () => {
    const publicUrl = process.env.PUBLIC_URL;
    return (
        <div className={styles.notFoundPageContainer}>
            <div className={styles.notFoundPageWrapper}>
                <div className={styles.notFoundPage}>
                    {/* <ImageComponent position='center'> */}
                        <img src={`${publicUrl}/assets/image/gif/look-around-white.gif`} alt='lg white logo looking around' className={styles.gifLogo} />
                    {/* </ImageComponent> */}
                    <PageText color='white'type='pageHeaderTitle'>404 Page Not Found</PageText>
                    <PageText color='white'type='pageHeaderSubtitle'>Looks like something went wrong</PageText>
                    <PageText color='white'type='pageHeaderDescription'>Go back to the  <LinkComponent href={publicUrl}>Product Guide</LinkComponent> </PageText>
                    {/* <NavigationLink href='/'>
                        <BodyText type='b0' color='white' >Go back to the Product Guide</BodyText>
                    </NavigationLink> */}
                </div>
            </div>

        </div>
    );
};
export default NotFoundPage;
