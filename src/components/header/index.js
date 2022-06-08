import {h} from 'preact';
import {useContext} from 'preact/hooks';
import {TranslateContext} from '@denysvuika/preact-translate';


const Header = () => {

    const {setLang, t} = useContext(TranslateContext);

    return (
        <header className="navbar my-2 py-2">
            <section className="navbar-section">
                <a href="/" className="btn btn-link">
                    {t('header.home')}
                </a>
                <a href="/projects" className="btn btn-link">
                    {t('header.projects')}
                </a>
            </section>
            <section className="navbar-center">
                <button className="btn btn-link" onClick={() => setLang('en')}>
                    <h2>🇺🇸</h2>
                </button>
                <button className="btn btn-link" onClick={() => setLang('fr')}>
                    <h2>🇫🇷</h2>
                </button>
            </section>
            <section className="navbar-section">
                <a href="https://github.com/mathiiii-dev" className="btn btn-link" target="_blank">
                    <button className="btn bg-gray">Github</button>
                </a>
                <a href="https://twitter.com/_devMathias" className="btn btn-link" target="_blank">
                    <button className="btn bg-dark">Twitter</button>
                </a>

            </section>
        </header>
    )
}

export default Header;
