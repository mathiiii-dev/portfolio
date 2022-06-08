import {h} from 'preact';
import {Router} from 'preact-router';
import Header from './header';
// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import { TranslateProvider } from '@denysvuika/preact-translate';
import Projects from "../routes/projects";

const App = () => {
    return (
        <TranslateProvider lang="fr">
            <div id="app" className="container grid-xl">
                <Header />
                <Router>
                    <Home path="/" />
                    <Projects path="/projects" />
                </Router>
            </div>
        </TranslateProvider>
    )
}

export default App;
