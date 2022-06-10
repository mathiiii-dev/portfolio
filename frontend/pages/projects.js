export default function Projects(projects) {
    console.log(projects)
    return (
        projects.projects.map((p, idx) => {
            console.log(p, projects)
            return (
                <div className="dark-card card mt-2" key={idx}>
                    <div className="card-header">
                        <div className="card-title h5">{p.attributes.title}</div>
                        <div
                            className="card-subtitle text-gray">{p.attributes.backend} {p.attributes.frontend} {p.attributes.design}</div>
                    </div>
                    <div className="card-body">
                        {p.attributes.description}
                    </div>
                    <div className="card-footer">
                        <a href={p.attributes.repository} className="btn btn-primary" target="_blank"
                           rel="noreferrer">Github</a>
                        <a href={p.attributes.website} className="btn btn-primary" target="_blank"
                           rel="noreferrer">Site</a>
                    </div>
                </div>
            )
        })
    )
}

export async function getStaticProps() {

    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/projects`, {
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
