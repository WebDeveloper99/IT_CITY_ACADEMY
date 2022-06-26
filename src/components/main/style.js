import styled from 'styled-components'
import { EyeOutlined } from '@ant-design/icons'
import ParticleBackground from 'react-particle-backgrounds'
import { Row, Col, Button } from 'react-bootstrap'




export const BooRow = styled(Row)`
width: 100%;
margin: 0 auto;
padding: 10px 20px;

`



export const BooCol = styled(Col)`
position: relative;
height: 260px;
border: 1px solid #cccccc;
border-bottom: 1px solid transparent;
flex: ${({flex})=> flex ? flex : ''};
margin: 10px 20px;
padding: 2%;
text-align: center;
align-items: center;
justify-content: center;
background-color: #fff;
background-image: url(${({bgimg})=>bgimg});  
background-repeat: no-repeat;
background-position-x: 500px;
background-position-y: 10px;
background-size: 210px;
border-radius: 12px;
transition: 0.3s all ease-in-out;

::before, ::after
{
  content: "";
  z-index: -1;
  position: absolute;
  transition: 0.3s all ease-in-out;
  bottom: 33px;
  left: 10px;
  width: 50%;
  top: 80%;
  max-width:300px;
  background: transparent;
  -webkit-box-shadow: 0 35px 20px #777;
  -moz-box-shadow: 0 35px 20px #777;
  box-shadow: 0 35px 20px #777;
  -webkit-transform: rotate(-0deg);
  -moz-transform: rotate(-0deg);
  -o-transform: rotate(-0deg);
  -ms-transform: rotate(-0deg);
  transform: rotate(-0deg);
}
::after
{
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
    right: 10px;
    left: auto;
}


:hover{
    background-color: #f1f1f1;
    :before{
        -webkit-transform: rotate(-8deg);
        -moz-transform: rotate(-8deg);
        -o-transform: rotate(-8deg);
        -ms-transform: rotate(-8deg);
        transform: rotate(-8deg);
    }
    :after{
        -webkit-transform: rotate(8deg);
        -moz-transform: rotate(8deg);
        -o-transform: rotate(8deg);
        -ms-transform: rotate(8deg);
        transform: rotate(8deg);
    }
    .wrapper{
        color: #fff;
        background-color: rgba(0,0,0, 0.7);
    }

}

`



export const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 80%;
height: 60%;
background-color: rgba(12, 95, 216, 0.7);
position: absolute;
top: 15%;
left: 10%;
border-radius: 12px;
color: #fff;
transition: 0.6s all ease-in-out;
align-items: center;
justify-content: center;

`

Wrapper.Title = styled.div`
display: flex;
flex-wrap: nowrap;
font-size: 20px;
font-weight: bold;
font-family: Tahoma;
justify-content: center;
text-align: center;

`

Wrapper.SubTitle = styled(Wrapper.Title)`
font-size: 16px;
font-weight: bold;
margin-top: 1%;

`



export const BooButton = styled(Button)`
width: 50%;
position: absolute;
bottom: 15%;
left: 25%;
border: 4px solid #fff;
transition: 0.3s all ease-in-out;
border-top-left-radius: 20px;
border-top-right-radius: 20px;

:hover{
    width: 80%;
    left: 10%;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    opacity: 1;
}

`


export const EyeIcon = styled(EyeOutlined)`
color: #fff;

`


export const BackGround = styled(ParticleBackground)`
width: 54%!important;
height: 650px!important;
position: fixed;


`