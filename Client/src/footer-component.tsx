import * as React from 'react';

const FooterComponent = (): JSX.Element => {
    return (
        <React.Fragment>
            <h3>THIS IS THE FOOTER COMPONENT.</h3>
        </React.Fragment>
    );
}

export default React.memo(FooterComponent);