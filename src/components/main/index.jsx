import React from "react";
import { Container } from "react-bootstrap";
import { BooRow, BooCol, BooButton, EyeIcon, Wrapper } from "./style";

import bakalavr from "../../assets/images/bakalavr.jpg";

import { Link } from "react-router-dom";

const Main = () => {

   

  return (
    <Container>
      <BooRow>
        <BooCol bgimg={bakalavr}>
          <Wrapper className="wrapper" >
            <Wrapper.Title>Bakalavr-2021</Wrapper.Title>
            <Wrapper.SubTitle>Ma'lumotlar soni: 948211</Wrapper.SubTitle>
          </Wrapper>
          <Link to={'/bakalavr'} > <BooButton><EyeIcon/> Batafsil</BooButton></Link>
        </BooCol>
      </BooRow>
    </Container>
  );
};

export default Main;
