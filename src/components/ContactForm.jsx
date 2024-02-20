import React, {useState} from 'react'



const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);

}

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="flex justify-center items-center h-screen w-full -z-10">
            <p className="font-playfair">Contact</p>
        </div>
    )
}