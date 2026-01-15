import React from 'react';
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";

const icons = [
  {
    Icon: <BiLogoFacebookCircle />,
    Name: "Facebook",
    Desc: "Facebook is a popular social media platform where people share photos, videos, and ideas, connect with friends, and discover new content."
  },
  {
    Icon: <BiLogoTwitter />,
    Name: "Twitter",
    Desc: "Twitter is a social media platform where users share short messages, news, and opinions instantly, connecting globally through trends and hashtags."
  },
  {
    Icon: <BiLogoInstagram />,
    Name: "Instagram",
    Desc: "Instagram is a social media app where users share photos, videos, and stories, express creativity, and connect with people worldwide."
  },
  {
    Icon: <BiLogoYoutube />,
    Name: "YouTube",
    Desc: "YouTube is a social media platform where users watch, upload, and share videos, learn new things, and entertain millions of viewers globally."
  }
]

export default function Reacticon() {
  return icons.map((iconData, index) =>
    <div className='user icons' key={index}>
      <p>{iconData.Icon}</p>
      <h2>{iconData.Name}</h2>
      <p>{iconData.Desc}</p>
    </div>
  )
}
