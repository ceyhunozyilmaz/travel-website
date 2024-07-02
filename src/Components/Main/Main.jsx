import React from "react";
import "./main.scss";

// Img data
import borabora from "../../assets/borabora.jpg";
import maui from "../../assets/maui.jpg";
import paris from "../../assets/paris.jpg";
import kyoto from "../../assets/kyoto.jpg";
import santorini from "../../assets/santorini.jpg";
import banff from "../../assets/canada.jpg";
import rome from "../../assets/roma.jpg";
import sydney from "../../assets/sydney.jpg";
import capetown from "../../assets/capetown.jpg";

// import icon
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbClipboardCheck } from "react-icons/tb";

const Data = [
  {
    id: 1,
    imgSrc: borabora,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities.",
  },
  {
    id: 2,
    imgSrc: maui,
    destTitle: "Maui",
    location: "Hawaii, USA",
    grade: "ADVENTURE",
    fees: "$1200",
    description:
      "Known for its beautiful beaches and the famous Road to Hana, Maui offers a mix of relaxation and adventure with stunning landscapes and luxurious resorts.",
  },
  {
    id: 3,
    imgSrc: paris,
    destTitle: "Paris",
    location: "France",
    grade: "CULTURAL EXPERIENCE",
    fees: "$900",
    description:
      "The city of love, Paris is renowned for its art, fashion, gastronomy, and culture. Iconic landmarks such as the Eiffel Tower and Louvre Museum await your visit.",
  },
  {
    id: 4,
    imgSrc: kyoto,
    destTitle: "Kyoto",
    location: "Japan",
    grade: "HISTORICAL",
    fees: "$850",
    description:
      "Kyoto, once the capital of Japan, is famous for its classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines, and traditional wooden houses.",
  },
  {
    id: 5,
    imgSrc: santorini,
    destTitle: "Santorini",
    location: "Greece",
    grade: "RELAXATION",
    fees: "$1100",
    description:
      "Santorini is known for its stunning sunsets, white-washed houses, and beautiful beaches. It is a perfect destination for honeymooners and relaxation seekers.",
  },
  {
    id: 6,
    imgSrc: banff,
    destTitle: "Banff",
    location: "Canada",
    grade: "NATURE",
    fees: "$600",
    description:
      "Banff National Park offers stunning mountain scenery, turquoise lakes, and abundant wildlife. It’s a paradise for hikers, skiers, and nature lovers.",
  },
  {
    id: 7,
    imgSrc: rome,
    destTitle: "Rome",
    location: "Italy",
    grade: "HISTORICAL",
    fees: "$950",
    description:
      "Rome, the Eternal City, is a treasure trove of art, history, and culture. Visit ancient ruins, world-class museums, and iconic landmarks like the Colosseum and Vatican.",
  },
  {
    id: 8,
    imgSrc: sydney,
    destTitle: "Sydney",
    location: "Australia",
    grade: "URBAN ADVENTURE",
    fees: "$1300",
    description:
      "Sydney is known for its Sydney Opera House, Harbour Bridge, and beautiful beaches. Enjoy vibrant city life, world-class dining, and outdoor adventures.",
  },
  {
    id: 9,
    imgSrc: capetown,
    destTitle: "Cape Town",
    location: "South Africa",
    grade: "CULTURAL",
    fees: "$700",
    description:
      "Cape Town boasts stunning natural beauty, from Table Mountain to Cape Point. Explore its rich history, diverse culture, and vibrant arts scene.",
  },
];

const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">En Çok Ziyaret Edilenler</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="contient flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    İNCELE <TbClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
