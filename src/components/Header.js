import React, { Component } from 'react'
import { Background } from '../styles/StyledComponent'

export default class Header extends Component {
    render() {
        return (
            <Background className="grid grid-rows-2 grid-cols-2 pl-44">
                <div className="text-white flex flex-col justify-center items-center text-center w-4/6">
                    <img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1645539011/proyecto-sprint3-reto1/icon-access-anywhere_amlmgj.svg" alt="img1" width="120" className='py-2' />
                    <h1 className="font-bold text-xl" >Access your files, anywhere</h1>
                    <p className="text-sm py-2">The ability to user a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
                </div>
                <div className="text-white flex flex-col justify-center items-center text-center w-4/6">
                    <img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1645539016/proyecto-sprint3-reto1/icon-security_qfkd3f.svg" alt="img2" width="120" className='py-2' />
                    <h1 className="font-bold text-xl" >Security you can trust</h1>
                    <p className="text-sm py-2">2-factor authentication and user-controlled encryption a just a couptie os the security features we allow to help secure your files</p>
                </div>
                <div className="text-white flex flex-col justify-center items-center text-center w-4/6">
                    <img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1645539023/proyecto-sprint3-reto1/icon-collaboration_n0t4sd.svg" alt="img3" width="120" className='py-2' />
                    <h1 className="font-bold text-xl" >Real-time collaboration</h1>
                    <p className="text-sm py-2">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                </div>
                <div className="text-white flex flex-col justify-center items-center text-center w-4/6">
                    <img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1645539032/proyecto-sprint3-reto1/icon-any-file_gqviql.svg" alt="img4" width="120" className='py-2' />
                    <h1 className="font-bold text-xl" >Store any type of file</h1>
                    <p className="text-sm py-2">Whether your´e sharing holidays photos or work documents. Fylo has you covered allowing for all file types to be securely stored and shared</p>
                </div>
            </Background>
        )
    }
}
