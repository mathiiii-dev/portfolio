import {useState} from "react";
import useTranslation from 'next-translate/useTranslation'
import styles from '../styles/Home.module.css'

export default function Home() {

    const {t} = useTranslation('home')

    const [email] = useState('mathias.micheli@outlook.fr')

    const copyToClipboard = async (str, e) => {

        const useToast = (await import('@kayoshi-dev/usetoast')).default
        const {createToast} = useToast();

        if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
            createToast(
                t('email'),
                "info",
                `<i class="icon icon-check"></i>`
            );
            return navigator.clipboard.writeText(str);
        }
        return Promise.reject('The Clipboard API is not available.');
    }

    return (
        <div className="columns margin-perso">
            <div className="column col-6 col-lg-auto">
                <p className="mb-0 pt-2 text-normal">📍 {t('near')} Chambéry, FR <img src="/flag/france.svg"
                                                                                      className="svg"/></p>
                <h1 className="text-bold p-2">
                    {t('title')} 👋
                </h1>
                <p className="text-justify p-2">
                    {t('presentation')}
                </p>
                <p className="p-2">
                    {t('opportunities')} <img src="/flag/usa.svg" className="svg"/> <img src="/flag/canada.svg"
                                                                                         className="svg"/>
                </p>
                <div className="columns dark-card">
                    <div className="column col-10 col-lg-auto">
                        <p className="p-2">
                            {t('contact')}
                        </p>
                        <p className="text-large p-2" id="mail">{email}</p>
                    </div>
                    <div className="column col-2">
                        <button onClick={() => copyToClipboard(email)}
                                className="btn btn-actions text-light bg-dark p-2">
                            <i className="icon icon-copy">Copie</i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="column col-sm-12 col-md-6">
                <p className="text-center">{t('stack')}</p>
                <div className={`${styles.circle} ${styles.radiusu} my-2 p-centered`}>
                    <div className={styles.stack}>
                        <img src="/logo/symfony.png" alt="symfony"
                             className="img-responsive resize-img float-left m-2"/>
                        <img src="/logo/sql.png" alt="sql" className="img-responsive resize-img float-right m-2"/>
                        <img src="/logo/php.svg" alt="php" className="img-responsive resize-img float-left m-2"/>
                        <img src="/logo/strapi.webp" alt="strapi"
                             className="img-responsive resize-img float-right m-2"/>
                    </div>
                    <p className="text-center">Backend</p>
                </div>
                <div className="columns m-2 p-2">
                    <div className="column col-6 col-sm-auto">
                        <div className={`${styles.circle} ${styles.radiusd} my-2 p-centered`}>
                            <div className={styles.stack}>
                                <img src="/logo/css.png" alt="sql"
                                     className="img-responsive resize-img float-left mt-2"/>
                                <img src="/logo/mantine.png" alt="mantine"
                                     className="img-responsive resize-img float-right m-2"/>
                                <img src="/logo/bootstrap.png" alt="bootstrap"
                                     className="img-responsive resize-img float-left mx-2"/>
                            </div>
                            <p className="text-center">Design</p>
                        </div>
                    </div>
                    <div className="column col-6">
                        <div className={`${styles.circle} ${styles.radiust} my-2 p-centered`}>
                            <div className={styles.stack}>
                                <img src="/logo/next.png" alt="next"
                                     className="img-responsive resize-img float-right m-2"/>
                                <img src="/logo/nuxt.png" alt="nuxt"
                                     className="img-responsive resize-img float-left m-2"/>
                                <img src="/logo/twig.png" alt="twig"
                                     className="img-responsive resize-img float-right m-2"/>
                            </div>
                            <p className="text-center">Frontend</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
