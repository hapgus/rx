import { EmptyListPage } from './EmptyListPage';
import { ActiveListPage } from './ActiveListPage';
import { useBuilderHook } from '../../../hooks/use-builder-hooks';
import { PrintScreen } from '../../../components/Print/PrintScreen';

const Productlistpage = () => {

    const { productsInList } = useBuilderHook();
    
    if (productsInList.length !== 0) {
        return (
            <>
                <PrintScreen />
                <ActiveListPage/>
            </>
        );
    }
    
    if (productsInList.length === 0) {return <EmptyListPage/>}
}

export default Productlistpage;