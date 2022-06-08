import {h} from 'preact';
import {useState, useContext} from "preact/hooks";
import {TranslateContext} from '@denysvuika/preact-translate';

const Home = () => {

    const {t} = useContext(TranslateContext);

    const [email] = useState('mathias.micheli@outlook.fr');

    const copyToClipboard = str => {
        if (navigator && navigator.clipboard && navigator.clipboard.writeText)
            return navigator.clipboard.writeText(str);
        return Promise.reject('The Clipboard API is not available.');
    };

    const getFlagEmoji = countryCode => {
        const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map(char => 127397 + char.charCodeAt());
        return String.fromCodePoint(...codePoints);
    }

    return (
        <div className="columns margin-perso">
            <div className="column col-6 col-lg-auto">
                <p className="mb-0 pt-2">📍 Curienne, FR {getFlagEmoji('FR')}</p>
                <h1 className="text-bold p-2">
                    {t('home.title')} 👋
                </h1>
                <p className="text-justify p-2">
                    {t('home.presentation')}
                </p>
                <p class="p-2">
                    {t('home.opportunities')} {getFlagEmoji('US')} {getFlagEmoji('CA')}
                </p>
                <div className="columns dark-card">
                    <div className="column col-10 col-lg-auto">
                        <p class="p-2">
                            {t('home.contact')}
                        </p>
                        <p className="text-large p-2" id="mail">{email}</p>
                    </div>
                    <div className="column col-2">
                        <button onClick={() => copyToClipboard(email)} className="btn btn-link text-light bg-dark p-2">
                            <i className="icon icon-copy">Copie</i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="column col-sm-12 col-md-6">
                <p class="text-center">{t('home.stack')}</p>
                <div className="bg-circle radius-1 my-2 p-centered">
                    <div className="stack">
                        <img src="/assets/logo/symfony.png" alt="symfony" className="img-responsive resize-img float-left m-2" />
                        <img src="/assets/logo/sql.png" alt="sql" className="img-responsive resize-img float-right m-2" />
                        <img src="/assets/logo/php.svg" alt="php" className="img-responsive resize-img float-left m-2" />
                        <img src="/assets/logo/strapi.webp" alt="strapi" className="img-responsive resize-img float-right m-2" />
                    </div>
                    <p className="text-center">Backend</p>
                </div>
                <div className="columns m-2 p-2">
                    <div className="column col-6 col-lg-auto">
                        <div className="bg-circle radius-2 my-2 p-centered" >
                            <div className="stack">
                                <img src="/assets/logo/css.png" alt="sql" className="img-responsive resize-img float-left mt-2" />
                                <img src="/assets/logo/mantine.png" alt="mantine" className="img-responsive resize-img float-right m-2" />
                                <img src="/assets/logo/bootstrap.png" alt="bootstrap" className="img-responsive resize-img float-left mx-2" />
                            </div>
                            <p className="text-center">Design</p>
                        </div>
                    </div>
                    <div className="column col-6">
                        <div className="bg-circle radius-3 my-2 p-centered">
                            <div className="stack">
                                <img src="/assets/logo/next.png" alt="next" className="img-responsive resize-img float-right m-2" />
                                <img src="/assets/logo/nuxt.png" alt="nuxt" className="img-responsive resize-img float-left m-2" />
                                <img src="/assets/logo/preact.png" alt="preact" className="img-responsive resize-img float-right m-2" />
                            </div>
                            <p className="text-center">Frontend</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
};

export default Home;
