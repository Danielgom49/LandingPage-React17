import React, { Component } from 'react'
import { BackgroundImage, Button1 } from '../styles/StyledComponent'

export default class Main extends Component {
    render() {
        return (
            <BackgroundImage className=" flex flex-col justify-center items-center">
                <div>
                    <img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1645537677/proyecto-sprint3-reto1/illustration-intro_todoxa.png" alt="img1" width="400" />
                </div>
                <div className="text-white flex flex-col items-center m-10 w-1/2 text-center">
                    <h1 className="font-bold text-3xl m-2">All your files in one secure location accessible anywhere</h1>
                    <p className="text-lg">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
                    <Button1 className="rounded-3xl p-3 w-3/12 mt-2">Get Started</Button1>
                </div>
            </BackgroundImage>
        )
    }
}
