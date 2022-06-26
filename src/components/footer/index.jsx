import React from "react";
import { BooRow, MessengerGroup, FooterTitle, FooterText } from "./style";

import telegram from "../../assets/images/telegram.png";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";
import { Outlet } from "react-router-dom";


const Footer = () => {

  return (
    <React.Fragment>
      <Outlet/>
      <BooRow>
        <MessengerGroup>
          <MessengerGroup.Telegram>
            <a href="#" ><img src={telegram} /></a>
          </MessengerGroup.Telegram>
          <MessengerGroup.YouTube>
          <a href="#" ><img src={youtube} /></a>
          </MessengerGroup.YouTube>
          <MessengerGroup.Instagram>
          <a href="#" ><img src={instagram} /></a>
          </MessengerGroup.Instagram>
          <MessengerGroup.Facebook>
          <a href="#" ><img src={facebook} /></a>
          </MessengerGroup.Facebook>
        </MessengerGroup>
      </BooRow>
    </React.Fragment>
  );
};

export default Footer;
