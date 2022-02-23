import React, { useState } from 'react'
import { BackgroundIntro, Button1, Error } from '../styles/StyledComponent'

const Email = () => {

    const [error, setError] = useState(false)
    const [email, setEmail] = useState('')
    const expresion = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (expresion.email.test(email)) {
            setError(false)
        }
        else {
            console.log('no funciona');
            setError(true)
        }
    }

    const handleOnchange = (e) => {
        setEmail(e.target.value)
    }

    return (
        <BackgroundIntro className="text-white flex flex-col justify-center items-center my-10 mx-52 py-5 absolute rounded-lg">
            <div className=" flex flex-col justify-center items-center text-center p-5 w-5/6">
                <h1 className="font-bold text-2xl pb-3">Get early access today</h1>
                <p>It only takes a minute to sign up and pur free starter tier is extremely generous. If you have any question, our support team would be happy to help you</p>
            </div>
            <div className="flex flex-row justify-evenly items-center w-5/6 my-3">
                <input type="email" name="email" value={email} placeholder="email@example.com" onChange={handleOnchange} className='text-black py-2 px-5 w-4/6 rounded-full' />
                <Button1 onClick={handleSubmit} className="rounded-3xl p-2 px-5 ml-5">Get Started For Free</Button1>
            </div>
            <Error className="mr-96">
                {error &&
                    <p>Please enter a valid email address</p>
                }
            </Error>
        </BackgroundIntro>
    )
}

export default Email