import useTranslation from 'next-translate/useTranslation';
import Head from "next/head";

export default function Projects(projects) {

    const {t} = useTranslation('projects')

    return (
        <>
            <Head>
                <title>{t('head.title')}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <h1 className="p-2">
                {t('title')}
            </h1>
            <div className="columns margin-perso-projects">
                {
                    projects.projects.map((p, idx) => {
                        return (
                            <div className="column col-12 mt-2 p-2" key={idx}>
                                <div className="dark-card card ">
                                    <div className="card-header">
                                        <div className="card-subtitle float-right">{t(`type.${p.attributes.type.split(' ')[0].toLowerCase()}`)}</div>

                                        <div className="card-title h5">{p.attributes.title}</div>
                                        <div
                                            className="card-subtitle text-gray">{p.attributes.backend} {p.attributes.frontend} {p.attributes.design}</div>
                                    </div>
                                    <div className="card-body">
                                        {p.attributes.description}
                                    </div>
                                    <div className="card-footer">
                                        <a href={p.attributes.website} className="btn-perso outline-perso float-right" target="_blank"
                                           rel="noreferrer">Site</a>
                                        <a href={p.attributes.repository} className="btn-perso plain float-right" target="_blank"
                                           rel="noreferrer">Github</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>

    )
}

export async function getStaticProps(ctx) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/projects?sort=id:asc&locale=${ctx.locale}`, {
        method: 'GET',
        headers: {
            Authorization: `${process.env.NEXT_PUBLIC_API_TOKEN}`
        }
    });

    const data = await res.json()

    return {
        props: {
            projects: data.data
        }
    }
}
