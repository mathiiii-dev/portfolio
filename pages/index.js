import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  const { t } = useTranslation("home");

  const [displayedEmail] = useState("mathias.micheli [at] outlook.fr");
  const [email] = useState("mathias.micheli@outlook.fr");

  const copyToClipboard = async (str, e) => {
    const useToast = (await import("@kayoshi-dev/usetoast")).default;
    const { createToast } = useToast();

    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      createToast(t("email"), "info", `<i class="icon icon-check"></i>`);
      return navigator.clipboard.writeText(str);
    }
    return Promise.reject("The Clipboard API is not available.");
  };

  return (
    <div className="columns margin-perso">
      <Head>
        <title>{t("head.title")}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="column col-6 col-lg-auto">
        <p className="mb-0 pt-2 text-normal">
          📍 {t("near")} Chambéry, FR{" "}
          <img src="/flag/france.svg" className="svg" />
        </p>
        <h1 className={`text-bold p-2 ${styles.title}`}>{t("title")} 👋</h1>
        <div className={styles.border}>
          <p className={`${styles.text} text-justify p-2`}>
            {t("presentation")}
          </p>
          <p className={`${styles.text} text-justify p-2`}>
            {t("opportunities")} <img src="/flag/usa.svg" className="svg" />{" "}
            <img src="/flag/canada.svg" className="svg" />
          </p>
        </div>
        <div className="columns dark-card card-margin">
          <div className="column col-10 col-lg-auto">
            <button
              onClick={() => copyToClipboard(email)}
              className="btn btn-actions text-light bg-dark p-2 float-right"
            >
              <i className="icon icon-copy">Copie</i>
            </button>
            <p>{t("contact")}</p>
            <p className="text-large" id="mail">
              {displayedEmail}
            </p>
          </div>
        </div>
      </div>
      <div className="column col-sm-12 col-md-6 card-margin">
        <p className="text-center">{t("stack")}</p>
        <div className={`${styles.circle} ${styles.radiusu} my-2 p-centered`}>
          <div className={styles.stack}>
            <img
              src="/logo/symfony.png"
              alt="symfony"
              className="img-responsive resize-img float-left m-2"
            />
            <img
              src="/logo/sql.png"
              alt="sql"
              className="img-responsive resize-img float-right m-2"
            />
            <img
              src="/logo/php.svg"
              alt="php"
              className="img-responsive resize-img float-left m-2"
            />
            <img
              src="/logo/strapi.webp"
              alt="strapi"
              className="img-responsive resize-img float-right m-2"
            />
          </div>
        </div>
        <p
          className={`p-centered text-center ${styles.textr} ${styles.radiusbd}`}
        >
          <span className={styles.dot} />
          Backend
        </p>
        <div className="columns m-2 p-2">
          <div className="column col-6 col-sm-auto">
            <div
              className={`${styles.circle} ${styles.radiusd} my-2 p-centered`}
            >
              <div className={styles.stack}>
                <img
                  src="/logo/css.png"
                  alt="sql"
                  className="img-responsive resize-img float-left mt-2"
                />
                <img
                  src="/logo/mantine.png"
                  alt="mantine"
                  className="img-responsive resize-img float-right m-2"
                />
                <img
                  src="/logo/bootstrap.png"
                  alt="bootstrap"
                  className="img-responsive resize-img float-left mx-2"
                />
              </div>
            </div>
            <p
              className={`p-centered text-center ${styles.textr} ${styles.radiusbd}`}
            >
              <span className={styles.dot} />
              Design
            </p>
          </div>
          <div className="column col-6 p-centered">
            <div
              className={`${styles.circle} ${styles.radiust} my-2 p-centered`}
            >
              <div className={styles.stack}>
                <img
                  src="/logo/next.png"
                  alt="next"
                  className="img-responsive resize-img float-right m-2"
                />
                <img
                  src="/logo/nuxt.png"
                  alt="nuxt"
                  className="img-responsive resize-img float-left m-2"
                />
                <img
                  src="/logo/twig.png"
                  alt="twig"
                  className="img-responsive resize-img float-right m-2"
                />
              </div>
            </div>
            <p
              className={`p-centered text-center ${styles.textr} ${styles.radiustf}`}
            >
              <span className={styles.dot} />
              Frontend
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
