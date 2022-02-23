import styled from 'styled-components'

export const BackgroundIntro = styled.div`
    background-color:hsl(217, 28%, 15%);
    li{
        color:hsl(0, 0%, 100%);
    }

    @media screen and (max-width: 768px) {
        width: 375px;
        padding:20px;
        ul{
            display:flex;
            justify-content:space-between;
        }
        li{
            padding:0px 10px;
            font-size:14px;
        } 
        
    }
`

export const BgEmails = styled.div`
    background-color:hsl(217, 28%, 15%);
    @media screen and (max-width: 768px) {
        margin: 0px;
        margin-top: 1000px;
        width: 320px;
        div{
            width: 250px;
        }
        h1{
            font-size: 14px;
            width: 320px;
        }
        p{
            font-size: 14px;
        }
        .form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 300px;

            input{
                width: 200px;
                padding: 15px;
            }
            button{
                margin: 0px;
                margin-top: 20px;
                width: 200px;
                padding: 15px;
            }
        }
        .error{
            margin: 0;
            padding-left: 10px;
        }
    }

`

export const BackgroundImage = styled.div`
    background-color:hsl(217, 28%, 15%);
    background-image: url('https://res.cloudinary.com/dvcxyjkko/image/upload/v1645575969/proyecto-sprint3-reto1/bg-curvy-desktop_d46mlt.svg');
    background-repeat: no-repeat;
    background-position: bottom;
    @media screen and (max-width: 768px) {
        width: 375px;
        padding-top:20px ;
        img{
            width: 300px;
        }
        h1{
            font-size: 22px;
            width: 290px;
        }
        p{
            font-size: 14px;
            width: 290px;
        }
        button{
            font-size: 14px;
            width: 220px;
            padding:12px 10px;
        }
    }
`


export const Background = styled.div`
    background-color: hsl(218, 28%, 13%);
    @media screen and (max-width: 768px) {
        width: 375px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        img{
            width: 300px;
        }
        .images{
            width: 100px;
        }
        h1{
            font-size: 18px;
            text-align: center  
        }
        .title-section{
            width: 375px;
            font-size: 20px;
        }
        p{
            padding: 10px;
            width: 300px;
        }
        .p-section{
            width: 375px;
            padding-left: 25px;
            padding-right: 10px;
        }
        a{
            width: 200px;
            margin: 10px 20px;
            padding-right: 0px;
            display: flex;
            justify-content:space-evenly;
            p{
                font-size: 14px;
            }
        }


        .comillas{
            width: 30px;
            margin-left: 0px;
            margin-right: 250px;
        }

            .testimonial{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 200px;
                margin: 0px 20px;
                margin-bottom: 300px;
                padding-top: 0;
                div{
                    padding: 10px;
                    margin: 10px 0px;
                }
                img{
                    width:50px
                }
                p{
                    width: 300px;
                    font-size: 14px;
                    padding: 0px;
                }
                .user{
                    margin: 0;
                    padding: 0;
                    div{
                        padding: 0 10px;
                        h1{
                            font-size:14px;
                            text-align: left;
                        }
                        p{
                            font-size: 14px;
                        }
                    }
                }
            }
    }
`

export const Button1 = styled.button`
    background: -prefix-linear-gradient(top, hsl(176, 68%, 64%), hsl(198, 60%, 50%));
    background: linear-gradient(to bottom, hsl(176, 68%, 64%), hsl(198, 60%, 50%));
    &:hover{
        background:  hsl(176, 68%, 64%);
    }
`

export const Link = styled.a`
    color: hsl(176, 68%, 64%);
    border-bottom: 2px solid hsl(176, 68%, 64%);
    &:hover{
        color: white;
        border-bottom: 2px solid white;
    }
`

export const Card = styled.div`
    background-color: hsl(219, 30%, 18%);
    border-radius: 5px;
`

export const BgFooter = styled.div`
    background-color: hsl(216, 53%, 9%);

    @media screen and (max-width: 768px) {
        width: 375px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 300px;

        .footer{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            div{
                margin-top: 20px;
            }
            p{
                width: 300px;
            }
            .list{
                display: flex;
                flex-direction: column;
                ul{
                    margin-top:20px
                }
            }
            .social{
                display: flex;
                margin: 20px 100px;
            }
        }
    }

`

export const Social = styled.div`
    &:hover{
        color:hsl(176, 68%, 64%);
        border-color:hsl(176, 68%, 64%);
        cursor:pointer;
    }
`

export const Error = styled.div`
    color: hsl(0, 100%, 63%);
`