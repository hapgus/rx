import { PortalPageHeader, PortalPageBody, PortalPageWrapper } from '../../components/PortalComponent/PortalPageComponent/PortalPageComponents';
import { useState, useReducer } from 'react';


const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                rCount: state.rCount + 1
            };
        case "DECREMENT":
            return {
                rCount: state.rCount - 1
            };
        default:
            return state;
    }
}



const AnalyticsPage = () => {

    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);


    const [state, dispatch] = useReducer(reducer, { rCount: 0 });
    return (
       
        <PortalPageWrapper
         pageTitle='Analytics'
            pageDescription='Website usage and behaviour insights'
        >
           
           <div>
                    <h1>Use State</h1>
                    <p>Count: {count}</p>
                    <div>
                        <span onClick={increment}>Add</span>
                    </div>
                    <br />
                    <div>
                        <span onClick={decrement}>Delete</span>
                    </div>
                </div>
                <div>
                    <h1>Use Reducerer</h1>
                    <p>Count: {state.rCount}</p>
                    <div>
                        <span onClick={() =>dispatch({ type: "INCREMENT"})}>Add</span>
                        <span onClick={() =>dispatch({ type: "DECREMENT"})}>Subtract</span>
                    </div>
                    <br />
                    
                </div>
            <PortalPageBody></PortalPageBody>

        </PortalPageWrapper>

    );
}


export default AnalyticsPage;