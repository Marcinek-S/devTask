import React, { useState } from "react";
import "../css/sortOptions.css";

function SortOptions(props) {
  const searchFilters = [
    {
      name: "Sortuj po",
      default: "Popularność",
      options: ["Wszystkie", "Cena", "Pojemność"],
    },
    {
      name: "Funkcje",
      default: "Pokaż wszystkie",
      options: [
        "Wszystkie",
        "Drzwi AddWash™",
        "Panel AI Control",
        "Silnik inwerterowy",
        "Wyświetlacz elektroniczny",
      ],
    },
    {
      name: "Klasa energetyczna",
      default: "Pokaż wszystkie",
      options: ["Wszystkie", "A", "B", "D"],
    },
    {
      name: "Pojemność",
      default: "Pokaż wszystkie",
      options: ["Wszystkie", "9kg", "8kg", "10,5kg"],
    },
  ];

  const [picked, setPicked] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setPicked(item);
    setIsOpen(false);
    props.menuChange([filterGroup.name, item]);
  };

  const filterGroup = searchFilters.find((group) => group.name === props.name);

  return (
    <div className="fliterContent">
      <label htmlFor="filterBox">{filterGroup.name}:</label>
      <button className="filterBox" onClick={handleToggle}>
        <div id="filter" className="activeFilter">
          {picked || filterGroup.default}
        </div>
        {isOpen ? (
          <div className="dropDown close"></div>
        ) : (
          <div className="dropDown"></div>
        )}
      </button>
      {isOpen && (
        <ul className="dropDownOptions">
          {filterGroup.options.map((option, index) => (
            <li key={index} onClick={() => handleItemClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SortOptions;
