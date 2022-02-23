import React, { Component } from 'react'
import { Background, Card } from '../styles/StyledComponent'
import Email from './Email'

export default class Testimonials extends Component {
    render() {
        return (
            <Background className="py-5 pb-44">
                <div className="flex items-start content-start ml-24">
                    <img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1645544587/proyecto-sprint3-reto1/bg-quotes_hn5j3m.png" alt="comillas" width="50" />
                </div>
                <Background className="flex flex-col justify-start items-center" >
                    <div className="flex flex-row items-center justify-evenly w-10/12">
                        <Card className="mx-3 py-5 flex flex-col justify-center text-white mb-32">
                            <div className="flex flex-col justify-center items-center">
                                <p className="w-5/6">Fylo has improved our team prouctivity by an order an magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                            </div>
                            <div className="flex flex-row my-2 mx-10 items-center">
                                <img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1645543789/proyecto-sprint3-reto1/profile-1_kmenos.jpg" alt="img1" width="50" className="rounded-full" />
                                <div className="flex flex-col mx-5">
                                    <h1 className="font-bold">Satish Patel</h1>
                                    <p className="text-sm">Founde & CEO. Huddle</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="mx-3 py-5 flex flex-col justify-center text-white mb-32">
                            <div className="flex flex-col justify-center items-center">
                                <p className="w-5/6">Fylo has improved our team prouctivity by an order an magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                            </div>
                            <div className="flex flex-row my-2 mx-10 items-center">
                                <img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1645543791/proyecto-sprint3-reto1/profile-2_uhjkyn.jpg" alt="img2" width="50" className="rounded-full" />
                                <div className="flex flex-col mx-5">
                                    <h1 className="font-bold">Bruce McKenzle</h1>
                                    <p className="text-sm">Founde & CEO. Huddle</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="mx-3 py-5 flex flex-col justify-center text-white mb-32">
                            <div className="flex flex-col justify-center items-center">
                                <p className="w-5/6">Fylo has improved our team prouctivity by an order an magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                            </div>
                            <div className="flex flex-row my-2 mx-10 items-center">
                                <img src="https://res.cloudinary.com/dvcxyjkko/image/upload/v1645543794/proyecto-sprint3-reto1/profile-3_hpludc.jpg" alt="img3" width="50" className="rounded-full" />
                                <div className="flex flex-col mx-5">
                                    <h1 className="font-bold">Iva Boyd</h1>
                                    <p className="text-sm">Founde & CEO. Huddle</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Background >
                <Email />
            </Background>

        )
    }
}
