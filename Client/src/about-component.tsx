import React from 'react';

function AboutComponent(): JSX.Element {
    return (
        <React.Fragment>
            <div>
                THIS IS THE ABOUT COMPONENT.
            </div>
        </React.Fragment>
    );
}

export default React.memo(AboutComponent);