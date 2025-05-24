import React, { useContext } from "react";
import { SearchContext } from "../SearchContext";
import "./Apps.css";

import app1 from "../assets/Apps_imgs/wu.jpg";
import app2 from "../assets/Apps_imgs/wb.jpg";
import app3 from "../assets/Apps_imgs/insta.jpg";
import app4 from "../assets/Apps_imgs/instalite.jpg";
import app5 from "../assets/Apps_imgs/snap.jpg";
import app6 from "../assets/Apps_imgs/f.jpg";
import app7 from "../assets/Apps_imgs/fl.jpg";
import app8 from "../assets/Apps_imgs/p.jpg";
import app9 from "../assets/Apps_imgs/pl.jpg";
import app10 from "../assets/Apps_imgs/t.jpg";
import app11 from "../assets/Apps_imgs/x.jpg";
import app12 from "../assets/Apps_imgs/s.jpg";
import app13 from "../assets/Apps_imgs/ama.jpg";
import app14 from "../assets/Apps_imgs/flip.jpg";
import app15 from "../assets/Apps_imgs/z.jpg";
import app16 from "../assets/Apps_imgs/swi.jpg";
import app17 from "../assets/Apps_imgs/domino.jpg";
import app18 from "../assets/Apps_imgs/zepto.jpg";
import app19 from "../assets/Apps_imgs/instamart.jpg";
import app20 from "../assets/Apps_imgs/blinkit.jpg";
import app21 from "../assets/Apps_imgs/foodpanda.jpg";
import app22 from "../assets/Apps_imgs/max.jpg";
import app23 from "../assets/Apps_imgs/share.jpg";
import app24 from "../assets/Apps_imgs/vlc.jpg";
import app25 from "../assets/Apps_imgs/gemini.jpg";
import app26 from "../assets/Apps_imgs/chrome.jpg";
import app27 from "../assets/Apps_imgs/googledrive.jpg";
import app28 from "../assets/Apps_imgs/googlemeet.jpg";
import app29 from "../assets/Apps_imgs/googletranslate.jpg";
import app30 from "../assets/Apps_imgs/googlemap.jpg";
import app31 from "../assets/Apps_imgs/chat.jpg";
import app32 from "../assets/Apps_imgs/d.jpg";
import app33 from "../assets/Apps_imgs/g.jpg";
// import app from "../assets/Apps_imgs/.jpg";










const appsList = [
  {
    name: "WhatsApp Messenger ",
    img: app1,
    link: "https://apkpure.net/whatsapp-android/com.whatsapp",
    publisher: "WhatsApp LLC",
    rating: "7.8",
  },
  {
    name: "Whats App Business",
    img: app2,
    link: "https://apkpure.net/whatsapp-business/com.whatsapp.w4b",
    publisher: "WhatsApp LLC",
    rating: "7.8",
  },
  {
    name: "Instagram",
    img: app3,
    link: "https://www.mediafire.com/file/xyz/youtubemod.apk",
    publisher: "Vanced Team",
    rating: "9.5",
  },
  {
    name: "Instagram Lite",
    img: app4,
    link: "https://www.mediafire.com/file/xyz/fbmod.apk",
    publisher: "FB Tweaks",
    rating: "8.7",
  },
  {
    name: "Snapchat",
    img: app5,
    link: "https://apkpure.net/snapchat/com.snapchat.android",
    publisher: "Snap Inc",
    rating: "9.0",
  },
  {
    name: "Facebook",
    img: app6,
    link: "https://apkpure.net/facebook/com.facebook.katana",
    publisher: "Meta Platforms, Inc.",
    rating: "9.3",
  },
    {
    name: "FaceBook Lite",
    img: app7,
    link: "https://apkpure.net/facebook-lite/com.facebook.lite",
    publisher: "Meta Platforms, Inc.",
    rating: "9.3",
  },
   {
    name: "Pintrest",
    img: app8,
    link: "https://www.mediafire.com/file/xyz/mxmod.apk",
    publisher: "MX Team",
    rating: "9.3",
  },  {
    name: "Pintrest Lite",
    img: app9,
    link: "https://www.mediafire.com/file/xyz/mxmod.apk",
    publisher: "MX Team",
    rating: "9.3",
  },
   {
    name: "Telegram",
    img: app10,
    link: "https://apkpure.net/telegram/org.telegram.messenger",
    publisher: "Telegram FZ-LLC",
    rating: "9.3",
  },
   {
    name: "X",
    img: app11,
    link: "https://apkpure.net/search?q=x",
    publisher: "Elon chicha ka hai",
    rating: "9.3",
  },
{
    name: "Spotify: Music and Podcasts",
    img: app12,
    link: "https://apkpure.net/search?q=x",
    publisher: "Spotify AB",
    rating: "9.3",
  },
  {
    name: "Amazon India Shop, Pay, miniTV",
    img: app13,
    link: "https://apkpure.net/amazon-india-shop-pay-minitv/in.amazon.mShop.android.shopping",
    publisher: "Amazon Mobile LLC",
    rating: "9.1",
  },{
    name: "Flipkart Online Shopping App",
    img: app14,
    link: "https://apkpure.net/flipkart-online-shopping-app/com.flipkart.android",
    publisher: "Flipkart",
    rating: "9.3",
  },{
    name: "Zomato",
    img: app15,
    link: "https://play.google.com/store/search?q=zomato&c=apps&hl=en_IN",
    publisher: "Zomato",
    rating: "9.3",
  },{
    name: "Swiggy",
    img: app16,
    link: "https://play.google.com/store/search?q=swiggy&c=apps&hl=en_IN",
    publisher: "Swiggy",
    rating: "9.3",
  },{
    name: "Domino's Pizza - Food Delivery",
    img: app17,
    link: "https://play.google.com/store/apps/details?id=com.Dominos&hl=en_IN",
    publisher: "Jubilant Foodworks",
    rating: "9.3",
  },{
    name: "zepto",
    img: app18,
    link: "https://play.google.com/store/apps/details?id=com.zeptoconsumerapp&hl=en_IN",
    publisher: "Zepto Marketplace Private Limited",
    rating: "9.3",
  },{
    name: "Instamart",
    img: app19,
    link: "https://www.mediafire.com/file/xyz/mxmod.apk",
    publisher: "MX Team",
    rating: "9.3",
  },{
    name: "Blinkit",
    img: app20,
    link: "https://www.mediafire.com/file/xyz/mxmod.apk",
    publisher: "MX Team",
    rating: "9.3",
  },{
    name: "Foodpanda",
    img: app21,
    link: "https://www.mediafire.com/file/xyz/mxmod.apk",
    publisher: "MX Team",
    rating: "9.3",
  },{
    name: "MX Player",
    img: app22,
    link: "https://www.mediafire.com/file/xyz/mxmod.apk",
    publisher: "MX Team",
    rating: "9.3",
  },{
    name: "Sharechat",
    img: app23,
    link: "https://www.mediafire.com/file/xyz/mxmod.apk",
    publisher: "MX Team",
    rating: "9.3",
  },{
    name: "VLC player",
    img: app24,
    link: "https://www.mediafire.com/file/xyz/mxmod.apk",
    publisher: "MX Team",
    rating: "9.3",
  },{
    name: "Gemini",
    img: app25,
    link: "https://www.mediafire.com/file/xyz/mxmod.apk",
    publisher: "MX Team",
    rating: "9.3",
  },{
    name: "Chrome",
    img: app26,
    link: "https://www.mediafire.com/file/xyz/mxmod.apk",
    publisher: "MX Team",
    rating: "9.3",
  },{
    name: "Google Drive",
    img: app27,
    link: "https://www.mediafire.com/file/xyz/mxmod.apk",
    publisher: "MX Team",
    rating: "9.3",
  },{
    name: "google Meet",
    img: app28,
    link: "https://www.mediafire.com/file/xyz/mxmod.apk",
    publisher: "MX Team",
    rating: "9.3",
  },{
    name: "Google Translatot",
    img: app29,
    link: "https://www.mediafire.com/file/xyz/mxmod.apk",
    publisher: "MX Team",
    rating: "9.3",
  },{
    name: "Google Maps",
    img: app30,
    link: "https://www.mediafire.com/file/xyz/mxmod.apk",
    publisher: "MX Team",
    rating: "9.3",
  },{
    name: "Chat GPT",
    img: app31,
    link: "https://www.mediafire.com/file/xyz/mxmod.apk",
    publisher: "MX Team",
    rating: "9.3",
  },{
    name: "Discord",
    img: app32,
    link: "https://www.mediafire.com/file/xyz/mxmod.apk",
    publisher: "MX Team",
    rating: "9.3",
  },{
    name: "GitHub",
    img: app33,
    link: "https://www.mediafire.com/file/xyz/mxmod.apk",
    publisher: "MX Team",
    rating: "9.3",
  },




];

const Apps = () => {
  const { searchQuery } = useContext(SearchContext);

  const filteredApps = appsList.filter((app) =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="apps-grid">
      {filteredApps.length === 0 ? (
        <div className="not-found">Oops! No app found.</div>
      ) : (
        filteredApps.map((app, index) => (
          <div className="apps-item" key={index}>
            <img src={app.img} alt={app.name} />
            <div className="apps-info">
              <a href={app.link} target="_blank" rel="noopener noreferrer">
                {app.name}
              </a>
              <p className="publisher">{app.publisher}</p>
              <div className="rating">
                <span className="star">★</span>
                <span className="rating-value">{app.rating}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Apps;
