import React from 'react'
import { BooNavbar, BooNav, BooRow, BooCol, NavText } from './style'
import logo from '../../assets/images/logo-brand.png'
import { Outlet } from 'react-router-dom';


const Navbar = () => {

  return (
    <React.Fragment>
      <BooNavbar>
          <BooRow>
            <BooCol flex=".7">
              <BooNavbar.Brand href="#home">
                <img src={logo} width="100" height="100" />
              </BooNavbar.Brand>
            </BooCol>
            <BooCol flex="3">
              <NavText>IT CITY ACADEMY</NavText>
            </BooCol>
            <BooCol flex="1">
              <BooNav>
                <BooNav.Link href="/uz">uz</BooNav.Link>
                <BooNav.Link href="/ru">ru</BooNav.Link>
                <BooNav.Link href="/en">en</BooNav.Link>
              </BooNav>
            </BooCol>
          </BooRow>
      </BooNavbar>
      <Outlet/>
    </React.Fragment>
  );
}

export default Navbar