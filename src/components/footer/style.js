import { Row } from 'react-bootstrap'
import styled from 'styled-components'


export const BooRow = styled(Row)`
width: 90%;
margin: 0 auto;
border-bottom: 1px solid #ccc;
padding: 30px 0;

`


export const MessengerGroup = styled.div`
display: flex;
width: 30%;
height: 80px;
margin: 8px auto;
align-items: end;
justify-content: space-around;

`


MessengerGroup.Telegram = styled.div`
display: flex;
margin: 5px 20px;
cursor: pointer;
position: relative;
transition: 0.3s all linear;

img{
    width: 36px;
    height: 36px;
}
:hover{
    transform: rotate(360deg) scale(1.2);
    margin: 15px 20px;
    ::after{
        display: block;
        z-index: -1;
    }
}

::after{
    content: '';
    display: none;
    width: 50px;
    height: 50px;
    position: absolute;
    top: -7px;
    left: -7px;
    border: 2px solid rgb(28, 138, 219);
    border-radius: 50%;
}

`


MessengerGroup.YouTube = styled(MessengerGroup.Telegram)`
::after{
    border: 2px solid rgb(204, 32, 45);
}

`

MessengerGroup.Instagram = styled(MessengerGroup.Telegram)`
img{
    width: 40px;
    height: 40px;
}
::after{
    top: -5px;
    left: -5px;
}

:hover{
    ::after{
        border-color: #e61a93;
    }
}

`

MessengerGroup.Facebook = styled(MessengerGroup.Telegram)`
::after{
    content: '';
    border: 2px solid rgb(24, 119, 242);
}

`


export const FooterTitle = styled.div`
display: flex;
align-items: center;
margin-bottom: 10px;
font-size: 16px;
font-weight: bold;

img{
    margin-left: 5px;
}

a{
    text-decoration: none;
    margin-left: 5px;
}

`



export const FooterText = styled.div`
display: flex;
align-items: center;
font-size: 16px;
font-weight: 500;
word-wrap: break-word;

`


