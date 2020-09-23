import * as React from 'react';

const HeaderComponent = (): JSX.Element => {
    return (
        <React.Fragment>
            <h3>THIS IS THE HEADER COMPONENT.</h3>
        </React.Fragment>
        )
}

export default React.memo(HeaderComponent);