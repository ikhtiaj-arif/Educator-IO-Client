import React from "react";
import {

  FaHive,
  FaCodiepie,
  FaFortAwesome,
  FaIntercom,
  FaPerbyte,
  FaAmbulance,
  FaBorderAll,
  FaChartArea,
  FaCoins,
} from "react-icons/fa";

const Benifits = () => {
  const category = [
    {
      title: "RTL Ready",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, reprehenderit",
      icon: <FaIntercom />,
    },
    {
      title: "SEO Ready",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, reprehenderit",
      icon: <FaPerbyte />,
    },
    {
      title: "Multilanguage",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, reprehenderit",
      icon: <FaHive />,
    },
    {
      title: "Revolution Slider",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, reprehenderit",
      icon: <FaCodiepie />,
    },
    {
      title: "100% Speed",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, reprehenderit",
      icon: <FaCoins />,
    },
    {
      title: "Live Customizer",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, reprehenderit",
      icon: <FaChartArea />,
    },
    {
      title: "Save Your Time",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, reprehenderit",
      icon: <FaFortAwesome />,
    },
    {
      title: "Wp Bakery Builder",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, reprehenderit",
      icon: <FaAmbulance />,
    },
    {
      title: "Revolution Slider",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, reprehenderit",
      icon: <FaBorderAll />,
    },
  ];

  return (
    <div className="mx-10 grid md:grid-cols-3">
      {category.map((item, ix) => (
        <div key={ix} className="flex p-4">
          <div className=" text-3xl pt-4 px-4">{item.icon}</div>
          <div>
            <h1 className="text-2xl font-bold py-3">{item.title}</h1>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Benifits;
