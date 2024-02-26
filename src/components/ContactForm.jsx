import React, {useState, useRef} from 'react';
import {motion} from 'framer-motion';





export default function ContactForm() {
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
            <div className='xl:mt-12 xl:top-12 top-24 absolute xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
            <motion.div
               animate={{
                rotate: [0, 0, -10, 10, 0],
               }} 
               className='flex flex-col p-8 rounded-sm border-2 border-slate-100'
            >
                    <h3 className='font-playfair font-bold text-2xl'>Get in Touch</h3>
                <form
                    ref = {formRef}
                    onSubmit = {handleSubmit}
                    className='mt-6 flex flex-col'
                >
                    <label className='flex flex-row'>
                        <span className='font-playfair font-medium mr-4 mt-2'>Your Name: </span>
                        <input 
                            type = "text"
                            name = "name"
                            value = {form.name}
                            onChange = {handleChange}
                            placeholder = "What's your name?"
                            className='py-2 px-6 border-2 font-medium font-playfair placeholder:text-slate-300'
                        />
                    </label>
                    <label className='flex flex-row'>
                        <span className='font-playfair font-medium mr-4 mt-8'>Your Email: </span>
                        <input 
                            type="email"
                            name="email"
                            value = {form.email}
                            onChange={handleChange}
                            placeholder="What's your email?"
                            className='py-2 px-6 border-2 mt-6 font-medium font-playfair placeholder:text-slate-300'
                        />

                    </label>
                </form>
                </motion.div>

            </div>
        </>
    )
}