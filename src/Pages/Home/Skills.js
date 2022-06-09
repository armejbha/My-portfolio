import React from 'react';

const Skills = () => {
    const expertes = [
        { _id: 1, name: 'React', description: 'The Most Popular Javascript Library' },
        { _id: 4, name: 'Express Js', description: 'The Most popular node js Framework' },
        { _id: 3, name: 'Tawilwind Css', description: 'The Most Popular CSS FrameWork' },
        { _id: 4, name: 'Bootstrap', description: 'The Most Popular CSS Framework' },
        { _id: 5, name: 'SASS', description: 'Preprocessor scripting language Complied into CSS' }
    ]
    return (
        <div>
            <h2 className='text-center font-bold text-4xl mt-16 mb-8'>What I Know</h2>
            <div className='grid md:grid-cols-5 gap-5'>
                {
                    expertes.map(expert =>
                        <div className="card shadow-xl">
                            <div className="card-body py-24">
                                <h2 className="card-title">{expert.name}</h2>
                                <p>{expert.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Skills;