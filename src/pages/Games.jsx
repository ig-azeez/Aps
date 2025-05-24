import React, { useContext } from "react";
import { SearchContext } from "../SearchContext";
import "./Games.css";

import game1 from "../assets/Game_imgs/pubg.jpg";
import game2 from "../assets/Game_imgs/bgmi.jpg";
import game3 from "../assets/Game_imgs/pubglite.jpg";
import game4 from "../assets/Game_imgs/newstate.jpg";
import game5 from "../assets/Game_imgs/call.jpg";
import game6 from "../assets/Game_imgs/ff.jpg";
import game7 from "../assets/Game_imgs/ffmax.jpg";
import game8 from "../assets/Game_imgs/mine.jpg";
import game9 from "../assets/Game_imgs/au.jpg";
import game10 from "../assets/Game_imgs/hill.jpg";
import game11 from "../assets/Game_imgs/ludo.jpg";
import game12 from "../assets/Game_imgs/masala.jpg";
import game13 from "../assets/Game_imgs/carrom1.jpg";
import game14 from "../assets/Game_imgs/farming.jpg";
import game15 from "../assets/Game_imgs/truck.jpg";
import game16 from "../assets/Game_imgs/angry.jpg";
import game17 from "../assets/Game_imgs/asphalt.jpg";















const gamesList = [
  {
    name: "PUBG Mobil",
    img: game1,
    link: "https://apkpure.net/pubg-mobile/com.tencent.ig",
    publisher: "Level Infinite",
    rating: "9.0",
  },
  {
    name: "BGMI",
    img: game2,
    link: "https://apkpure.net/pubg-mobile/com.tencent.ig",
    publisher: "Tencent Games",
    rating: "9.0",
  },
  {
    name: "PUBG lite",
    img: game3,
    link: "https://apkpure.net/pubg-lite-android/com.tencent.iglite",
    publisher: "Tencent Games",
    rating: "9.0",
  },
  {
    name: "PUBG:NEW STATE",
    img: game4,
    link: "https://apkpure.net/new-state-mobile/com.pubg.newstate",
    publisher: "KRAFTON, Inc.",
    rating: "9.0",
  },
  {
    name: "Call of Duty Mobile",
    img: game5,
    link: "https://apkpure.net/call-of-duty/com.activision.callofduty.shooter",
    publisher: "Activision",
    rating: "9.1",
  },
  {
    name: "Free Fire",
    img: game6,
    link: "https://apkpure.net/garena-free-fire-android-2024/com.dts.freefireth",
    publisher: "Garena",
    rating: "8.8",
  }, {
    name: "Free Fire MAX",
    img: game7,
    link: "https://apkpure.net/free-fire-max-android/com.dts.freefiremax",
    publisher: "Garena International I",
    rating: "8.8",
  },
  {
    name: "Minecraft",
    img: game8,
    link: "https://apkpure.net/search?q=minecraft",
    publisher: "Mojang",
    rating: "9.0",
  }, {
    name: "Among Us",
    img: game9,
    link: "https://apkpure.net/search?q=Among+Us",
    publisher: "Innersloth LLC",
    rating: "9.0",
  }, {
    name: "Hill Climb Rancing",
    img: game10,
    link: "https://apkpure.net/search?q=Hill+Climb+Racing",
    publisher: "Fingersoft",
    rating: "9.0",
  },{
    name: "Ludo King",
    img: game11,
    link: "https://apkpure.net/search?q=ludo+king",
    publisher: "Gametion",
    rating: "9.0",
  },{
    name: "Masala Express: Cooking Games",
    img: game12,
    link: "https://apkpure.net/masala-express-cooking-games/com.cympl.masalaexpressgame",
    publisher: "Cympl Studios",
    rating: "9.0",
  },
  {
    name: "Carrom",
    img: game13,
    link: "https://apkpure.net/carrom-games/carrom.games",
    publisher: "Tencent Games",
    rating: "9.0",
  },{
    name: "Farming Simulator",
    img: game14,
    link: "https://apkpure.net/pubg-mobile/com.tencent.ig",
    publisher: "Tencent Games",
    rating: "9.0",
  },{
    name: "Truck Simulator",
    img: game15,
    link: "https://apkpure.net/pubg-mobile/com.tencent.ig",
    publisher: "Tencent Games",
    rating: "9.0",
  },{
    name: "Angry Birds",
    img: game16,
    link: "https://apkpure.net/pubg-mobile/com.tencent.ig",
    publisher: "Tencent Games",
    rating: "9.0",
  },{
    name: "Asphalt",
    img: game17,
    link: "https://apkpure.net/pubg-mobile/com.tencent.ig",
    publisher: "Tencent Games",
    rating: "9.0",
  },




];

const Games = () => {
  const { searchQuery } = useContext(SearchContext);

  const filteredGames = gamesList.filter((game) =>
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="games-grid">
      {filteredGames.length === 0 ? (
        <div className="not-found">Oops! No game found.</div>
      ) : (
        filteredGames.map((game, index) => (
          <div className="games-item" key={index}>
            <img src={game.img} alt={game.name} />
            <div className="games-info">
              <a href={game.link} target="_blank" rel="noopener noreferrer">
                {game.name}
              </a>
              <p className="publisher">{game.publisher}</p>
              <div className="rating">
                <span className="star">★</span>
                <span className="rating-value">{game.rating}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Games;
