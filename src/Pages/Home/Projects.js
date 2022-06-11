import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div id='projects' className='my-16'>
            <h2 className='text-center font-bold text-3xl my-8'>My Projects</h2>
            <div className='grid md:grid-cols-3 gap-5'>
                {
                    projects?.map(project =>
                        <div>
                            <div className='p-4'>
                                <img src={project.img} alt="project images" />
                            </div>
                            <div className='rounded-lg shadow-2xl px-4 py-2'>
                                <h2 className="font-bold text-3xl">{project.name}</h2>
                                <h4 className='font-semibold text-lg'>{project.purpose}</h4>
                                <p>{project.description}</p>
                                <div className='mt-4'>
                                    <Link to={project.link}><button className='btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase font-bold text-white mt-4 block mx-auto'>SEE DETAILS</button></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;