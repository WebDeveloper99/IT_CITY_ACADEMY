import React from 'react'
import { BooContainer } from './style'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

import Home from '../pages/home'
import Bakalavr from '../pages/bakalavr'
import Magistr from '../pages/magistr'
import Transfer from '../pages/transfer'
import Texnikum from '../pages/texnikum'


import { Navigate, Route, Routes } from 'react-router-dom'
 

const Root = () => {

    return (
      <React.Fragment>
        <BooContainer>
          <Routes>
            <Route path={"/"} element={<Navbar />}>
              <Route path={"/"} element={<Footer />}>
                <Route path={"/home"} element={<Home />} />
                <Route path={"/bakalavr"} element={<Bakalavr />} />
                <Route path="/" element={<Navigate to={"/home"} />} />
                <Route path="*" element={<h1 style={{ margin: "100px 650px" }}>404</h1>} />
              </Route>
            </Route>
          </Routes>
        </BooContainer>
      </React.Fragment>
    );
}

export default Root