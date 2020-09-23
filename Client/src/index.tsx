import React, { Suspense }  from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import layoutComponent from './layout-component';
import '../css/main.scss';
const HomeComponent = React.lazy(() => import('./home-component'));
const AboutComponent = React.lazy(() => import('./about-component'));

const Index = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <section>
                    <Switch>
                        <Route path="/" exact component={layoutComponent(HomeComponent)}></Route>
                        <Route path={"/home"} component={layoutComponent(HomeComponent)}></Route>
                        <Route path={"/about"} component={layoutComponent(AboutComponent)}></Route>
                    </Switch>
                </section>
            </Suspense>
        </BrowserRouter>
    );
}
render(<Index></Index>, document.getElementById('react-root'));