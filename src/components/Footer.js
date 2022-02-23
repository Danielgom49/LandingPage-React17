import React, { Component } from 'react'
import { BgFooter, Social } from '../styles/StyledComponent'
import { HiLocationMarker } from 'react-icons/hi'
import { RiFacebookFill } from 'react-icons/ri'
import { IoLogoTwitter } from 'react-icons/io'
import { BsInstagram } from 'react-icons/bs'



export default class Footer extends Component {
    render() {
        return (
            <BgFooter className="p-10 pt-52 text-white">
                <div className="mb-5">
                    <img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1645536914/proyecto-sprint3-reto1/logo_ti5twh.svg" alt="logo" />
                </div>
                <div className="flex flex-row justify-between items-start">
                    <div>
                        <div className="flex flex-row justify-around items-start">
                            <HiLocationMarker className="text-xl" />
                            <p className="text-sm mx-5">Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor<br /> incididunt ut labore et dolore magna aliqua</p>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-start">
                        <div className="flex flex-row justify-around items-center my-1">
                            <img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1645550218/proyecto-sprint3-reto1/icon-phone_clzf6u.svg" alt="celphone" />
                            <p className="px-2">+1-543-123-4567</p>
                        </div>
                        <div className="flex flex-row justify-around my-1">
                            <img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1645549613/proyecto-sprint3-reto1/icon-email_mtextm.svg" alt="gmail" />
                            <p className="px-2">example@fylo.com</p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-around items-start">
                        <ul className="mx-5">
                            <li className="py-2 hover:font-bold"><a href="/">About Us</a></li>
                            <li className="py-2 hover:font-bold"><a href="/">Jobs</a></li>
                            <li className="py-2 hover:font-bold"><a href="/">Press</a></li>
                            <li className="py-2 hover:font-bold"><a href="/">Blog</a></li>
                        </ul>
                        <ul className="mx-5">
                            <li className="py-2 hover:font-bold"><a href="/">Contact Us</a></li>
                            <li className="py-2 hover:font-bold"><a href="/">Terms</a></li>
                            <li className="py-2 hover:font-bold"><a href="/">Privacy</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-row">
                        <Social className="text-sm border-solid border-2 border-white rounded-full p-2 m-2">
                            <a href="/"><RiFacebookFill /></a>
                        </Social>
                        <Social className="text-sm border-solid border-2 border-white rounded-full p-2 m-2">
                            <a href="/"><IoLogoTwitter /></a>
                        </Social>
                        <Social className="text-sm border-solid border-2 border-white rounded-full p-2 m-2">
                            <a href="/"><BsInstagram /></a>
                        </Social>
                    </div>
                </div>
            </BgFooter>
        )
    }
}
