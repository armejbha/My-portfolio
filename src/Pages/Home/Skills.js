import React from 'react';
import { Link } from 'react-router-dom';

const Skills = () => {
    const expertes = [
        { _id: 1, name: 'React', description: 'The Most Popular Javascript Library', bgClass: "bg-sky-500" },
        { _id: 4, name: 'Express Js', description: 'The Most popular node js Framework', bgClass: "bg-purple-500" },
        { _id: 3, name: 'Tawilwind Css', description: 'The Most Popular CSS FrameWork', bgClass: "bg-teal-500" },
        { _id: 4, name: 'Bootstrap', description: 'The Most Popular CSS Framework', bgClass: "bg-cyan-500" },
        { _id: 5, name: 'SASS', description: 'Preprocessor scripting language Complied into CSS', bgClass: "bg-green-500" }
    ]
    return (
        <div className='my-16'>
            <h2 className='text-center font-bold text-4xl my-8'>What I Know</h2>
            <div className='grid md:grid-cols-5 gap-5'>
                {
                    expertes.map(expert =>
                        <div className={`${expert.bgClass} rounded-2xl`}>
                            <div className="py-24 mx-10">
                                <h2 className="text-2xl mb-4">{expert.name}</h2>
                                <p>{expert.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            <Link to='/allskill'><button className='mt-8 btn btn-primary bg-gradient-to-r from-secondary to-primary text-white block mx-auto px-16'>See All Skills</button></Link>
        </div >
    );
};

export default Skills;