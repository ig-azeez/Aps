import React, { useContext } from "react";
import { SearchContext } from "../SearchContext";
import "./Editing.css";
import app1 from "../assets/Editing_imgs/Capcut.jpg";
import app2 from "../assets/Editing_imgs/Hypic.jpg";
import app3 from "../assets/Editing_imgs/Lightroom.jpg";
import app4 from "../assets/Editing_imgs/picsart.png";
import app5 from "../assets/Editing_imgs/VN.jpg";
import app6 from "../assets/Editing_imgs/alightmoton.png";
import app7 from "../assets/Editing_imgs/inshot.jpg";
import app8 from "../assets/Editing_imgs/toonme.jpg";
import app9 from "../assets/Editing_imgs/Snapseed.jpg";
import app10 from "../assets/Editing_imgs/canva.jpg";
import app11 from "../assets/Editing_imgs/Pictureeditor.jpg";
import app12 from "../assets/Editing_imgs/kinemaster.jpg";
 import app13 from "../assets/Editing_imgs/remini.jpg";
import app14 from "../assets/Editing_imgs/adobe.jpg";
import app15 from "../assets/Editing_imgs/vit.jpg";
import app16 from "../assets/Editing_imgs/aivideo.jpg";
import app17 from "../assets/Editing_imgs/youcut.jpg";
import app18 from "../assets/Editing_imgs/ps.jpg";
import app19 from "../assets/Editing_imgs/collage.jpg";
import app20 from "../assets/Editing_imgs/photoroom.jpg";
import app21 from "../assets/Editing_imgs/filmora.jpg";


const editingApps = [
  {
    name: "Capcut",
    img: app1,
    link: "https://apkpure.net/search?q=capcut",
    publisher: "Bytedance Pte. Ltd.",
    rating: "9.5",
  },
  {
    name: "Hypic",
    img: app2,
    link: "https://apkpure.net/hypic-photo-editor-ai/com.bytedance.hypic",
    publisher: "Bytedance",
    rating: "8.2",
  },
  {
    name: "Lightroom",
    img: app3,
    link: "https://apkpure.net/lightroom/com.adobe.lrmobile",
    publisher: "Adobe",
    rating: "9.0",
  },
  {
    name: "Picsart",
    img: app4,
    link: "https://apkpure.net/inshot/com.camerasideas.instashot",
    publisher: "InShot Inc.",
    rating: "8.7",
  },
  {
    name: "VN Editor",
    img: app5,
    link: "https://apkpure.net/search?q=vn",
    publisher: "VN LLC",
    rating: "8.6",
  },
  {
    name: "Remini",
    img: app6,
    link: "https://apkpure.net/remini/com.bigwinepot.nwdn.international",
    publisher: "BigWinePot Inc.",
    rating: "9.1",
  },
  {
    name: "Inshot",
    img: app7,
    link: "https://apkpure.net/remini/com.bigwinepot.nwdn.international",
    publisher: "BigWinePot Inc.",
    rating: "9.1",
  },
  {
    name: "ToonMe",
    img: app8,
    link: "https://apkpure.net/vn/com.frontrow.vlog",
    publisher: "VN LLC",
    rating: "8.6",
  },
  {
    name: "Picture Editor",
    img: app9,
    link: "https://apkpure.net/vn/com.frontrow.vlog",
    publisher: "VN LLC",
    rating: "8.6",
  },
  {
    name: "Snap Seed",
    img: app10,
    link: "https://apkpure.net/snapseed/com.niksoftware.snapseed",
    publisher: "Google LLC",
    rating: "8.6",
  },
  {
    name: "Canva",
    img: app11,
    link: "https://apkpure.net/guide-for-canva-graphic-design-video/com.canva.ds.guide",
    publisher: "Ayour Tur",
    rating: "8.6",
  },
   {
    name: "KineMaster - Video Editor",
    img: app12,
    link: "https://apkpure.net/kinemaster-video-editor-free/com.nexstreaming.app.kinemasterfree",
    publisher: "KineMaster, Video Editor Experts Group",
    rating: "8.6",
  },
   {
    name: "Renimi",
    img: app13,
    link: "https://apkpure.net/search?q=remini",
    publisher: "Bending Spoons",
    rating: "8.6",
  },
   {
    name: "Adobe",
    img: app14,
    link: "https://apkpure.net/vn/com.frontrow.vlog",
    publisher: "VN LLC",
    rating: "8.6",
  },
   {
    name: " Vit",
    img: app15,
    link: "https://apkpure.net/vn/com.frontrow.vlog",
    publisher: "VN LLC",
    rating: "8.6",
  },
  {
    name: "Ai Video Editor",
    img: app16,
    link: "https://apkpure.net/vn/com.frontrow.vlog",
    publisher: "VN LLC",
    rating: "8.6",
  },
  {
    name: "You Cut",
    img: app17,
    link: "https://apkpure.net/vn/com.frontrow.vlog",
    publisher: "VN LLC",
    rating: "8.6",
  },
  {
    name: "Photo Shoot",
    img: app18,
    link: "https://apkpure.net/vn/com.frontrow.vlog",
    publisher: "VN LLC",
    rating: "8.6",
  },
  {
    name: "Collage photo",
    img: app19,
    link: "https://apkpure.net/vn/com.frontrow.vlog",
    publisher: "VN LLC",
    rating: "8.6",
  },{
    name: "Photo Room",
    img: app20,
    link: "https://apkpure.net/vn/com.frontrow.vlog",
    publisher: "VN LLC",
    rating: "8.6",
  },
  {
    name: "Filmora",
    img: app21,
    link: "https://apkpure.net/filmora-movie-video-editor/com.wondershare.filmorago",
    publisher: "Wondershare Filmora",
    rating: "8.6",
  },

];
const EditingAppsGrid = () => {
  const { searchQuery } = useContext(SearchContext);

  const filteredApps = editingApps.filter((app) =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
  <div className="editing-grid">
    {filteredApps.length === 0 ? (
      <div className="not-found">Oops! No app found.</div>
    ) : (
      filteredApps.map((app, index) => (
        <div className="editing-item" key={index}>
          <img src={app.img} alt={app.name} />
          <div className="editing-info">
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

export default EditingAppsGrid;