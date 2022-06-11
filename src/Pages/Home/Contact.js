import React from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
const Contact = () => {
    const contactMe = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_fac3r5l', 'template_wqbj9go', e.target, 'SlwxzNz7VIgHMEnMC')
            .then((result) => {
                swal("Email Sent!", "Thanks For Contact Me");
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });

    }

    return (
        <div id='contact' className='mt-12 bg-base-200 mb-12'>
            <div className='md:w-3/12 w-11/12 mx-auto py-8 '>
                <div className='text-center'>
                    <h4 className='text-sm font-bold'>Contact Me</h4>
                </div>
                <form className='mt-4' onSubmit={contactMe}>
                    <input className='block w-full outline-0 px-4 py-2 rounded-lg' type="email" name="email" id="" placeholder='Email Address' required />
                    <input className='block w-full outline-0 px-4 py-2 rounded-lg mt-2' type="text" name="subject" id="" placeholder='Subject' required />
                    <textarea className='block w-full outline-0 px-4 py-2 rounded-lg mt-2' name="message" id="" cols="30" rows="5" placeholder='Your Message'></textarea>
                    <input type="submit" value="Submit" className="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase font-bold text-white mt-4 block mx-auto" required />
                </form>
            </div>
        </div>
    );
};

export default Contact;