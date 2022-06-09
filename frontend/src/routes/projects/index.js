import {h} from 'preact';
import {useEffect, useState} from "preact/hooks";

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [loading, isLoading] = useState(false);

    useEffect(async () => {
        isLoading(true)
        const res = await fetch(`${process.env.PREACT_APP_STRAPI_URL}/projects`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${process.env.PREACT_APP_API_TOKEN}`
                }
            })
        const data = await res.json();
        if(data) {
            setProjects(data.data)
            isLoading(false)
        }
    }, [])



    if (loading) {
        return <p>Loading ...</p>
    }

    return (
        <>
            {
                projects.map((p, idx) => {
                    console.log(p, projects)
                    return (
                        <div class="dark-card card mt-2" key={idx}>
                            <div class="card-header">
                                <div class="card-title h5">{p.attributes.title}</div>
                                <div
                                    class="card-subtitle text-gray">{p.attributes.backend} {p.attributes.frontend} {p.attributes.design}</div>
                            </div>
                            <div class="card-body">
                                {p.attributes.description}
                            </div>
                            <div class="card-footer">
                                <a href={p.attributes.repository} className="btn btn-primary" target="_blank"
                                   rel="noreferrer">Github</a>
                                <a href={p.attributes.website} className="btn btn-primary" target="_blank"
                                   rel="noreferrer">Site</a>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
};

export default Projects;
