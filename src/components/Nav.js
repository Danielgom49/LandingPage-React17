import React, { Component } from 'react'
import { BackgroundIntro } from '../styles/StyledComponent'

export default class Nav extends Component {
    render() {
        return (
            <BackgroundIntro className="flex flex-row justify-between items-center p-8">
                <div>
                    <img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1645536914/proyecto-sprint3-reto1/logo_ti5twh.svg" alt="logo" width="100" />
                </div>
                <div>
                    <ul className=" flex flex-row justify-around">
                        <li className="px-5 hover:text-white"><a href="/" className="hover:underline">Features</a></li>
                        <li className="px-5 hover:text-white"><a href="/" className="hover:underline">Team</a></li>
                        <li className="px-5 hover:text-white"><a href="/" className="hover:underline">Sign in</a></li>
                    </ul>
                </div>
            </BackgroundIntro>
        )
    }
}