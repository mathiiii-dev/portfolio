import {h} from 'preact';
import {usePrerenderData} from '@preact/prerender-data-provider';


const Projects = (props) => {

    const [data, loading, error] = usePrerenderData(props);

    if (loading) return <h1>Loading...</h1>;

    if (error) return <p>Error: {error}</p>;

    if (typeof window !== "undefined") {
        return (
            <>
                {data &&
                data.data.data.map((p, idx) => {
                    console.log(p, data)
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
    }
};

export default Projects;
