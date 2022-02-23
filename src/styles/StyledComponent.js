import styled from 'styled-components'

export const BackgroundIntro = styled.div`
    background-color:hsl(217, 28%, 15%);
    li{
        color:hsl(0, 0%, 100%);
    }
`

export const BackgroundImage = styled.div`
    background-color:hsl(217, 28%, 15%);
    background-image: url('https://res.cloudinary.com/dvcxyjkko/image/upload/v1645575969/proyecto-sprint3-reto1/bg-curvy-desktop_d46mlt.svg');
    background-repeat: no-repeat;
    background-position: bottom;
`


export const Background = styled.div`
    background-color: hsl(218, 28%, 13%);
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