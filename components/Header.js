import useTranslation from "next-translate/useTranslation";
import setLanguage from "next-translate/setLanguage";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useState } from "react";

export default function Header() {
  const { t, lang } = useTranslation("header");
  const [open, isOpen] = useState(false);

  return (
    <>
      <header className="navbar my-2 py-2 hide-sm">
        <section className="navbar-section">
          <Link href={`${lang}/`}>
            <span className="btn btn-link text-light">{t("home")}</span>
          </Link>
        </section>
        <section className="navbar-section">
          <a
            href="https://github.com/mathiiii-dev"
            className="btn-perso plain"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://twitter.com/_devMathias"
            className={"btn-perso outline-perso"}
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          <button className="btn btn-link" onClick={() => setLanguage("en")}>
            <img src="/flag/usa.svg" className="svg" />
          </button>
          <button className="btn btn-link" onClick={() => setLanguage("fr")}>
            <img src="/flag/france.svg" className="svg" />
          </button>
        </section>
      </header>
      <header className="navbar my-2 py-2 show-sm">
        <button
          className={open ? "d-hide" : `btn-perso plain ${styles.burger}`}
        >
          <i className="icon icon-menu" onClick={() => isOpen(true)} />
        </button>
        <button
          className={open ? `btn-perso plain ${styles.burger}` : "d-hide"}
        >
          <i className="icon icon-cross" onClick={() => isOpen(false)} />
        </button>
        <div className={open ? "" : "d-hide"}>
          <ul className="menu dark-card mt-2">
            <li className="menu-item m-2 p-1">
              <Link href={`/${lang}`}>
                <span className={`btn-perso outline-perso ${styles.full}`}>
                  {t("home")}
                </span>
              </Link>
            </li>
            <li className="menu-item m-2 p-1">
              <Link href={`${lang}/projects`}>
                <span className={`btn-perso outline-perso ${styles.full}`}>
                  {t("projects")}
                </span>
              </Link>
            </li>
            <li className="menu-item m-2 p-1">
              <Link href="https://github.com/mathiiii-dev">
                <span className={`btn-perso outline-perso ${styles.full}`}>
                  Github
                </span>
              </Link>
            </li>
            <li className="menu-item m-2 p-1">
              <Link href="https://twitter.com/_devMathias">
                <span className={`btn-perso outline-perso ${styles.full}`}>
                  Twitter
                </span>
              </Link>
            </li>
            <li className="menu-item m-2 p-1 text-center">
              <button
                className="btn btn-link"
                onClick={() => setLanguage("en")}
              >
                <img src="/flag/usa.svg" className="svg" />
              </button>
            </li>
            <li className="menu-item m-2 p-1 text-center">
              <button
                className="btn btn-link"
                onClick={() => setLanguage("fr")}
              >
                <img src="/flag/france.svg" className="svg" />
              </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
