import React from 'react';

const Projects = () => {
    const projects = [
        { _id: 1, link: 'https://manufacter-e2227.web.app/', description: 'This website have two type of users normal and admin.Admin can add new product cancel purchase order.It also include firebase authentication systerm.Normal user update their profile.', name: "Tools Manufacter", purpose: 'A Website for esstial home tools seller', client: 'https://github.com/armejbha/tools-manufacter-client', server: 'https://github.com/armejbha/tools-manufacter-server' },
        { _id: 1, link: 'https://independent-service-prov-237f3.web.app/', description: `This is financial support website.Here you can get any financial  support package.It's inlclude firebase authentication systerm.If you don't sign in you can't booking any financial support.`, name: 'Financial Consaltant', purpose: 'A Website for Financial support consaltant', client: 'https://github.com/armejbha/laptop-warehouse-client', server: 'https://github.com/armejbha/laptop-warehouse-server' }
    ]
    return (
        <div>
            <h2 className='text-center font-bold text-3xl mt-16 mb-8'>My Projects</h2>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    projects.map(project =>
                        <div>
                            <div className='h-full p-4'>
                                <iframe className='w-full h-full' src={project.link} title='project'></iframe>
                            </div>
                            <div className="rounded-lg shadow-2xl px-4 py-2 mt-4">
                                <h2 className="font-bold text-3xl">{project.name}</h2>
                                <h4 className='font-semibold text-lg'>{project.purpose}</h4>
                                <p>{project.description}</p>
                                <div className='flex justify-between items-center mt-4'>
                                    <div>
                                        <a className='btn btn-xs mr-2 px-4' href={project.client}>Client</a>
                                        <a className='btn btn-xs' href={project.server}>Server</a>
                                    </div>
                                    <div>
                                        <a className='btn btn-xs' href={project.link}>Live Site</a>
                                    </div>
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