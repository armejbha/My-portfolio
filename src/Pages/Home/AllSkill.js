import React from 'react';

const AllSkill = () => {
    const expertes = [
        { _id: 1, name: 'Html', description: 'I Know all html5 tag and i also know how to improve site for seo', bgClass: "bg-sky-500" },
        { _id: 3, name: 'Css', description: 'I Know Css3 i can full website design with vanilla css withot help any css framework', bgClass: "bg-sky-500" },
        { _id: 4, name: 'Tawilwind Css', description: 'Tailwind CSS is a utility-first CSS framework for building custom user interfaces', bgClass: "bg-teal-500" },
        { _id: 5, name: 'Bootstrap', description: 'Bootstrap is most usefull css framework,I can design with it.', bgClass: "bg-cyan-500" },
        { _id: 6, name: 'JavaScript', description: 'I Know Vanilla Javascript. i have learned javascript from scratch . and i know all es6 syntax of javascript.', bgClass: "bg-sky-500" },
        { _id: 7, name: 'Node Js', description: 'I Know Node Js. Node js is nothing but a javascript run time environment in server side.', bgClass: "bg-sky-500" },
        { _id: 8, name: 'React', description: 'React JS is a JavaScript library used in web development to build interactive elements on websites', bgClass: "bg-sky-500" },
        { _id: 9, name: 'Github', description: 'I Use Github to host my code . GitHub is a code hosting platform for version control and collaboration.', bgClass: "bg-sky-500" },
        { _id: 10, name: 'MongoDb', description: 'I use Mongodb to Manage my data. MongoDB is an open source NoSQL database management program', bgClass: "bg-sky-500" },
        { _id: 11, name: 'Firebase', description: 'I used it for authentication and website deploy i know all about it', bgClass: "bg-sky-500" },
        { _id: 12, name: 'Heroku', description: 'Heroku is a container-based cloud Platform as a Service. I use heroku to deploy my backend server.', bgClass: "bg-sky-500" },
        { _id: 13, name: 'Express Js', description: 'Express is a minimal and flexible Node.js web application framework', bgClass: "bg-purple-500" },

        { _id: 14, name: 'SASS', description: 'Sass is the most powerful professional grade css extension language in the world.', bgClass: "bg-green-500" },
        { _id: 15, name: 'JWT', description: 'JWT, or JSON Web Token used to share security information between two parties — a client and a server. I use JWT to Secure my server api.', bgClass: "bg-green-500" }
    ]
    return (
        <div className='my-16'>
            <h2 className='text-center font-bold text-4xl my-8'>All My Developement Skills</h2>
            <div className='grid md:grid-cols-4 gap-5'>
                {
                    expertes.map(expert =>
                        <div className='shadow-xl rounded-2xl'>
                            <div className="py-16 mx-10">
                                <h2 className="text-2xl mb-4 border-b-2">{expert.name}</h2>
                                <p>{expert.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div >
    );
};

export default AllSkill;