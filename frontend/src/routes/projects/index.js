import {h} from 'preact';
import {useEffect, useState} from "preact/hooks";

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [loading, isLoading] = useState(false);

    useEffect(() => {
        isLoading(true)
        fetch('http://localhost:1337/api/projects',
            {
                method: 'GET',
                headers: {
                    Authorization: "Bearer 6d1e960bc7cb9a1d2459ac05e98c4f9e8bb84f515385473f27d314d3b035c914b787eeb9fb23de21cad2b510fec63309f322afd859c96d97ae207324fd4ed30022891dff745c1dbb27ea94952dbc35572624e26fc3f5a0410f04c817c474f2978cb17203b745f83bf01bafe10cb9c9e38dd1e7ef65c14859bb03d2de43cbbaa4"
                }
            }).then(res => res.json()).then(data => {
            setProjects(data.data);
            isLoading(false);
        })
        ;
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
                                <div class="card-subtitle text-gray">{p.attributes.backend} {p.attributes.frontend} {p.attributes.design}</div>
                            </div>
                            <div class="card-body">
                                {p.attributes.description}
                            </div>
                            <div class="card-footer">
                                <a href={p.attributes.repository} className="btn btn-primary" target="_blank" rel="noreferrer">Github</a>
                                <a href={p.attributes.website} className="btn btn-primary" target="_blank" rel="noreferrer">Site</a>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
};

export default Projects;
