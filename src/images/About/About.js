import React from 'react';
import myPic from '../../images/banner/me-.png';
const About = () => {
    return (
        <div className='md:w-1/2 w-10/12 mx-auto shadow-lg p-5 mt-5'>
            <div className='md:w-1/2 w-8/12 mx-auto'>
                <img className='rounded-full w-full' src={myPic} alt="" />
            </div>
            <div>
                <h3 className='text-center text-2xl font-bold my-4'>Abdur Rahim</h3>
                {/* <p className='text-align'>Here i don't write my personal information.I am write what is my goal.Now my goal is become a junior web developer.That why i am admitted Web Development course with Jhankar Mahbub course.Along with this course i am trying a lot of myself.I am doing home work,assigment and other following instruction.I am optimistic one day I will be able to reach my goal.</p> */}
            </div>
        </div>
    );
};

export default About;