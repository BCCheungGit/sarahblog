import React, {useState, useRef} from 'react';
import {motion} from 'framer-motion';
import { slideIn } from '../../utils/motion';
import { fadeIn } from '../../utils/motion';

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const formRef = useRef();
    const handleChange = (e) => {
        const { name, value} = e.target;
    
        setForm({...form, [name]: value})
    
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted!");
    }

    return (
        <>
            <div className='xl:mt-12 xl:top-20 justify-center top-24 w-screen h-auto absolute items-center flex-col flex gap-10 overflow-hidden'>
            <motion.div
               initial= "hidden"
                animate="show"
                variants={fadeIn("left", "tween", 0, 0.5)}
                className='flex flex-col p-8 rounded-sm border-t-2 border-b-2 border-slate-300 justify-center items-center w-3/5'
            >
                    <h3 className='font-playfair text-2xl'>EMAIL</h3>
                <form
                    ref = {formRef}
                    onSubmit = {handleSubmit}
                    className='mt-6 flex flex-col'
                >
                    <label className='flex flex-col'>
                        <span className='font-playfair font-medium mr-4 mt-4'>Your Name: </span>
                        <input 
                            type = "text"
                            name = "name"
                            value = {form.name}
                            onChange = {handleChange}
                            placeholder = "What's your name?"
                            className='py-2 px-6 border-2 mt-2 font-medium font-playfair placeholder:text-slate-300'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='font-playfair font-medium mr-4 mt-4'>Your Email: </span>
                        <input 
                            type="email"
                            name="email"
                            value = {form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className='py-2 px-6 border-2 mt-2 font-medium font-playfair placeholder:text-slate-300'
                        />

                    </label>
                    <label className='flex flex-col'>
                        <span className='font-playfair font-medium mr-4 mt-4'>Your Message: </span>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="What's your message?"
                            className='py-2 h-24 px-6 border-2 mt-2 font-medium font-playfair placeholder:text-slate-300'
                        />

                    </label>

                </form>
                </motion.div>

                <motion.div
                initial = {{ x: "50%", opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 1}}

                className='flex flex-col p-8 rounded-sm mb-8 border-b-2 border-slate-300 justify-center items-center w-3/5'
                >
                 <h3 className='font-playfair text-2xl'>SOCIAL</h3>
                 <ul className='flex flex-col'>
                        <li className='font-lato font-medium mt-4'>Twitter: @twitter</li>
                        <li className='font-lato font-medium mt-4'>Instagram: @instagram</li>
                        <li className='font-lato font-medium mt-4'>Facebook: @facebook</li>

                 </ul>
                </motion.div>
            </div>
        </>
    )
}