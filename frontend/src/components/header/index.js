import {h} from 'preact';
import {useContext} from 'preact/hooks';
import {TranslateContext} from '@denysvuika/preact-translate';

const Header = () => {

    const {setLang, t} = useContext(TranslateContext);

    return (
        <header className="navbar my-2 py-2">
            <section className="navbar-section">
                <a href="/" className="btn btn-link text-light">
                    {t('header.home')}
                </a>
                <a href="/projects" className="btn btn-link text-light">
                    {t('header.projects')}
                </a>
            </section>
            <section className="navbar-section">
                <a href="https://github.com/mathiiii-dev" className="btn bg-secondary s-rounded mr-2 text-dark" target="_blank" rel="noreferrer">
                    Github
                </a>
                <a href="https://twitter.com/_devMathias" className="btn bg-dark text-light s-rounded mx-2" target="_blank" rel="noreferrer">
                    Twitter
                </a>
                <button className="btn btn-link" onClick={() => setLang('en')}>
                    <h4>🇺🇸</h4>
                </button>
                <button className="btn btn-link" onClick={() => setLang('fr')}>
                    <h4>🇫🇷</h4>
                </button>
            </section>
        </header>
    )
}

export default Header;
