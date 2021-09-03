import React from 'react';
import Loader from "../components/utils/loaders/Loader";

export const  WithSuspenseComponent = (Component) => {

    return (props) => {
        return (
           <React.Suspense fallback={<Loader comment="Please, wait. Loading..." size="large"/>}>
                <Component {...props} />
            </React.Suspense>
        );
    }
}
