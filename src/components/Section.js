import React, { Component } from 'react'
import { Background, Link } from '../styles/StyledComponent'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

export default class Section extends Component {
    render() {
        return (
            <Background className="flex flex-row items-center justify-around p-10 pl-20">
                <div className=" mx-5">
                    <img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1645540217/proyecto-sprint3-reto1/illustration-stay-productive_zgxzut.png" alt="img1" width="600" />
                </div>
                <div className="text-white mx-5">
                    <h1 className="font-bold text-3xl w-2/5 my-3">Stay productive, wherever you are</h1>
                    <p className="py-2 w-5/6">Never let location be an issue when accessing your files. Fyle has you coverred for all of you file storage needs.</p>
                    <p className="py-2 w-5/6">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required</p>
                    <Link href="/" className="flex flex-row w-2/6 hover:text-white items-center">
                        <p className="pl-1 pr-3 text-lg">See how Fylo works</p>
                        <BsFillArrowRightCircleFill className="text-xl" />
                    </Link>
                </div>
            </Background>
        )
    }
}
