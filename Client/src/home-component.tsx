import React from 'react';
import { getHomeDataFromAPI } from './shared/api-service';
function HomeComponent(): JSX.Element {

    const submitProductDetails = (event: React.MouseEvent): void => {
        event.preventDefault();
        getHomeDataFromAPI().then((response) => {
            console.log(response);
        });
    }
    return (
        <React.Fragment>
            <div data-testid="homediv">
                THIS IS THE HOME COMPONENT.
            </div>
            <div>
                <button onClick={submitProductDetails}>Click ME</button>
            </div>
        </React.Fragment>
    );
}

export default React.memo(HomeComponent);