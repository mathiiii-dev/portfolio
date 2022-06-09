import {h} from 'preact';
import {Router} from 'preact-router';
import Header from './header';
// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import {TranslateProvider} from '@denysvuika/preact-translate';
import Projects from "../routes/projects";
import {Provider} from "@preact/prerender-data-provider"

const App = (props) => {
    console.log('app.js : ', props)
    return (
        <Provider value={props}>
            <TranslateProvider lang="fr">
                <div id="app" className="container grid-xl">
                    <Header />
                    <Router>
                        <Home path="/" />
                        <Projects path="/projects" />
                    </Router>
                </div>
            </TranslateProvider>
        </Provider>
    )
}

export default App;
