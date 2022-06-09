import {h} from 'preact';
import { usePrerenderData } from "@preact/prerender-data-provider";

const Projects = (props) => {

    const [data, loading, error] = usePrerenderData(props)

    console.log('projects: ', data, loading, error)

    console.log('props : ', props)

    return (
        <div>
            Mes projets
        </div>
    )
};

export default Projects;
