import styled, { keyframes } from 'styled-components'
import { Navbar, Nav, Row, Col } from 'react-bootstrap'



// --------------Animation---------------

const BrandAnimation = keyframes`
 0% { 
     transform: rotateY(0deg);
  }
 100% { 
     transform: rotateY(360deg);
  }
`



export const BooNavbar = styled(Navbar)`
display: flex;
position: relative;
max-width: 1440px;
height: 120px;
margin: 0 auto;
margin: 20px;
background: #fff;


::before, ::after
{
  content: "";
  z-index: -1;
  position: absolute;
  top: 62%;
  left: 15px;
  bottom: 25px;
  width: 50%;
  height: 20%;
  max-width:300px;
  background: transparent;
  -webkit-box-shadow: 0 35px 20px #555;
  -moz-box-shadow: 0 35px 20px #777;
  box-shadow: 0 15px 30px #777;
  -webkit-transform: rotate(-4deg);
  -moz-transform: rotate(-4deg);
  -o-transform: rotate(-4deg);
  -ms-transform: rotate(-4deg);
  transform: rotate(-4deg);
}
::after
{
  -webkit-transform: rotate(8deg);
  -moz-transform: rotate(4deg);
  -o-transform: rotate(4deg);
  -ms-transform: rotate(4deg);
  transform: rotate(4deg);
  right: 15px;
  left: auto;
}




`

export const BooRow = styled(Row)`
width: 100%;
margin: 0 auto;
border: 1px solid #cccccc;
background: #fff;


`


export const BooCol = styled(Col)`
flex: ${({flex})=> flex ? flex : ''};

`


export const NavText = styled.div`
font-size: 24px;
font-weight: bold;
font-family: 'Times New Roman';
text-align: center;
justify-content: center;
align-items: center;
margin-top: 5px;

`


BooNavbar.Brand = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 120px;
align-items: center;
justify-content: center;
transition: 2s all ease-in;
img{
    border-radius: 50%;
    animation-name: ${BrandAnimation};
    animation-duration: 5s;
    animation-play-state: running;
    animation-iteration-count: infinite;
}

`

export const BooNav = styled(Nav)`

font-size: 20px;
font-weight: bold;
justify-content: space-evenly;

`





