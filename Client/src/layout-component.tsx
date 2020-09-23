import * as React from 'react';

const HeaderComponent = React.lazy(() => import('./header-component'));
const FooterComponent = React.lazy(() => import('./footer-component'));

function layoutComponent(RouteComponent: React.ReactType): React.ComponentClass {
    return class extends React.Component {
        render(): JSX.Element {
            return (
                <React.Fragment>
                    <header>
                        <HeaderComponent></HeaderComponent>
                    </header>
                    <div className="menu">
                        <a href="/home">HOME</a>
                        <a href="/about">ABOUT</a>
                    </div>

                    <div className="body_sec">
                        <section id="Content">
                            <RouteComponent {...this.props}></RouteComponent>
                        </section>
                    </div>
                    <footer>
                        <FooterComponent></FooterComponent>
                    </footer>
                </React.Fragment>
            );
        }
    }
}

export default layoutComponent;