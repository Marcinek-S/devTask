import { useState, useEffect } from "react";
import "./css/app.css";
import "./css/sort.css";
import SortOptions from "./components/SortOptions";
import Card from "./components/Card";

const products = [
  {
    id: 1,
    name: "WW90T754ABT, Pralka QuickDrive™, 9 kg, biała",
    img: require("./img/quickDrive.png"),
    capacity: "9kg",
    size: "55 x 60 x 85 cm",
    functions: [
      "Drzwi AddWash™",
      "Panel AI Control",
      "Silnik inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
    energy: "A",
    priceTimeStart: "15.09.2022",
    priceTimeEnd: "21.09.2022",
    price: 3199,
    loan: [true, "53,31 zł x 60 rat"],
  },
  {
    id: 2,
    name: " WW10T654DLH, Pralka EcoBubble™, 8 kg, biała",
    img: require("./img/ecoBubble.png"),
    capacity: "10,5kg",
    size: "55 x 60 x 85 cm",
    functions: [
      "Drzwi AddWash™",
      "Panel AI Control",
      "Silnik inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
    energy: "B",
    priceTimeStart: "15.09.2022",
    priceTimeEnd: "21.09.2022",
    price: 3199,
    loan: [true, "53,31 zł x 60 rat"],
  },
  {
    id: 3,
    name: "WW90T654DLH, Pralka EcoBubble™, 8 kg, biała",
    img: require("./img/ecoBubble.png"),
    capacity: "8kg",
    size: "55 x 60 x 85 cm",
    functions: [
      "Drzwi AddWash™",
      "Panel AI Control",
      "Silnik inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
    energy: "C",
    priceTimeStart: "15.09.2022",
    priceTimeEnd: "21.09.2022",
    price: 3199,
    loan: [true, "53,31 zł x 60 rat"],
  },
  {
    id: 4,
    name: "WW90T754ABT, Pralka QuickDrive™, 9 kg, biała",
    img: require("./img/quickDrive.png"),
    capacity: "9kg",
    size: "55 x 60 x 85 cm",
    functions: [
      "Drzwi AddWash™",
      "Panel AI Control",
      "Silnik inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
    energy: "D",
    priceTimeStart: "15.09.2022",
    priceTimeEnd: "21.09.2022",
    price: 3199,
    loan: [false, ""],
  },
  {
    id: 5,
    name: "WW10T654DLH, Pralka EcoBubble™, 10,5 kg, biała",
    img: require("./img/ecoBubble.png"),
    capacity: "10,5kg",
    size: "55 x 60 x 85 cm",
    functions: [
      "Drzwi AddWash™",
      "Panel AI Control",
      "Silnik inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
    energy: "E",
    priceTimeStart: "15.09.2022",
    priceTimeEnd: "21.09.2022",
    price: 3199,
    loan: [false, ""],
  },
  {
    id: 6,
    name: "WW90T654DLH, Pralka EcoBubble™, 8 kg, biała",
    img: require("./img/ecoBubble.png"),
    capacity: "8kg",
    size: "55 x 60 x 85 cm",
    functions: [
      "Drzwi AddWash™",
      "Panel AI Control",
      "Silnik inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
    energy: "F",
    priceTimeStart: "15.09.2022",
    priceTimeEnd: "21.09.2022",
    price: 3199,
    loan: [false, ""],
  },
  {
    id: 7,
    name: "Pralka QuickDrive 8kg",
    img: require("./img/quickDrive.png"),
    capacity: "8kg",
    size: "55 x 60 x 85 cm",
    functions: ["Drzwi AddWash™", "Panel AI Control", "Silnik inwerterowy"],
    energy: "A",
    priceTimeStart: "15.09.2022",
    priceTimeEnd: "21.09.2022",
    price: 2500,
    loan: [false, ""],
  },
  {
    id: 8,
    name: "Pralka EcoBubble 9kg",
    img: require("./img/ecoBubble.png"),
    capacity: "9kg",
    size: "55 x 60 x 85 cm",
    functions: ["Panel AI Control", "Wyświetlacz elektroniczny"],
    energy: "B",
    priceTimeStart: "15.09.2022",
    priceTimeEnd: "21.09.2022",
    price: 2800,
    loan: [false, ""],
  },
  {
    id: 9,
    name: "Pralka QuickDrive 10,5kg",
    img: require("./img/quickDrive.png"),
    capacity: "10,5kg",
    size: "55 x 60 x 85 cm",
    functions: [
      "Drzwi AddWash™",
      "Silnik inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
    energy: "C",
    priceTimeStart: "15.09.2022",
    priceTimeEnd: "21.09.2022",
    price: 2600,
    loan: [false, ""],
  },
  {
    id: 10,
    name: "Pralka EcoBubble 8kg",
    img: require("./img/ecoBubble.png"),
    capacity: "8kg",
    size: "55 x 60 x 85 cm",
    functions: ["Drzwi AddWash™", "Panel AI Control"],
    energy: "D",
    priceTimeStart: "15.09.2022",
    priceTimeEnd: "21.09.2022",
    price: 3000,
    loan: [false, ""],
  },
  {
    id: 11,
    name: "Pralka QuickDrive 9kg",
    img: require("./img/quickDrive.png"),
    capacity: "9kg",
    size: "55 x 60 x 85 cm",
    functions: [
      "Panel AI Control",
      "Silnik inwerterowy",
      "Wyświetlacz elektroniczny",
    ],
    energy: "E",
    priceTimeStart: "15.09.2022",
    priceTimeEnd: "21.09.2022",
    price: 3200,
    loan: [false, ""],
  },
  {
    id: 12,
    name: "Pralka EcoBubble 10,5kg",
    img: require("./img/ecoBubble.png"),
    capacity: "10,5kg",
    size: "55 x 60 x 85 cm",
    functions: ["Drzwi AddWash™", "Silnik inwerterowy"],
    energy: "F",
    priceTimeStart: "15.09.2022",
    priceTimeEnd: "21.09.2022",
    price: 3400,
    loan: [false, ""],
  },
];
function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [filterOptions, setFilterOptions] = useState({
    "Sortuj po": "",
    Funkcje: "",
    "Klasa energetyczna": "",
    Pojemność: "",
  });
  const [filteredProd, setFilteredProd] = useState(products);
  useEffect(() => {
    let updatedProd = [...products];

    if (filterOptions["Funkcje"] === "Wszystkie") {
      updatedProd = products;
    } else if (filterOptions["Funkcje"] !== "") {
      updatedProd = updatedProd.filter((prod) =>
        prod.functions.includes(filterOptions["Funkcje"])
      );
    }

    if (filterOptions["Klasa energetyczna"] === "Wszystkie") {
      updatedProd = products;
    } else if (filterOptions["Klasa energetyczna"] !== "") {
      updatedProd = products.filter((prod) =>
        prod.energy.includes(filterOptions["Klasa energetyczna"])
      );
    }
    if (filterOptions["Pojemność"] === "Wszystkie") {
      updatedProd = products;
    } else if (filterOptions["Pojemność"] !== "") {
      updatedProd = updatedProd.filter((prod) =>
        prod.capacity.includes(filterOptions["Pojemność"])
      );
    }

    if (filterOptions["Sortuj po"] === "Wszystkie") {
      updatedProd = products;
    } else if (filterOptions["Sortuj po"] === "Cena") {
      updatedProd = updatedProd.sort((a, b) => a.price - b.price);
    } else if (filterOptions["Sortuj po"] === "Pojemność") {
      updatedProd = updatedProd.sort(
        (a, b) =>
          parseInt(a.capacity.replace("kg", "")) -
          parseInt(b.capacity.replace("kg", ""))
      );
    }

    setFilteredProd(updatedProd);
  }, [filterOptions]);

  function pick(e) {
    e.currentTarget.classList.toggle("active");
    if (e.currentTarget.classList.contains("active")) {
      e.currentTarget.textContent = "wybrane";
    } else {
      e.currentTarget.textContent = "wybierz";
    }
  }

  function sorter(option) {
    if (option[0] === "Sortuj po") {
      setFilterOptions((prevOptions) => ({
        ...prevOptions,
        [option[0]]: option[1],
      }));
    } else if (option[0] === "Funkcje") {
      setFilterOptions((prevOptions) => ({
        ...prevOptions,
        [option[0]]: option[1],
      }));
    } else if (option[0] === "Klasa energetyczna") {
      setFilterOptions((prevOptions) => ({
        ...prevOptions,
        [option[0]]: option[1],
      }));
    } else if (option[0] === "Pojemność") {
      setFilterOptions((prevOptions) => ({
        ...prevOptions,
        [option[0]]: option[1],
      }));
    }
  }

  function searchHandler(e) {
    setSearchQuery(e.target.value);
  }

  const finalProducts = filteredProd
    .filter((prod) =>
      prod.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, visibleProducts);

  const handleShowMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 3);
  };

  return (
    <div className="App">
      <div className="headline">
        <h1>Wybierz urządzenie</h1>
      </div>
      <div className="content">
        <div className="searchContainer">
          <div className="searchBar">
            <input
              type="text"
              className="search"
              placeholder="Search..."
              onChange={searchHandler}
            />
          </div>
        </div>
        <div className="filterContainer">
          <SortOptions name="Sortuj po" menuChange={sorter} />
          <SortOptions name="Funkcje" menuChange={sorter} />
          <SortOptions name="Klasa energetyczna" menuChange={sorter} />
          <SortOptions name="Pojemność" menuChange={sorter} />
        </div>
        <div className="results">
          <span>Liczba wynikow: {finalProducts.length}</span>
        </div>
        <div className="productsDisplay">
          <div className="productList">
            {finalProducts.map((products) => (
              <Card
                key={products.id}
                src={products.img}
                name={products.name}
                capacity={products.capacity.replace("kg", "")}
                size={products.size}
                functions={products.functions.map((x) => x + ", ")}
                energy={products.energy}
                priceTimeStart={products.priceTimeStart}
                priceTimeEnd={products.priceTimeEnd}
                price={products.price}
                loan={`${products.loan[0] ? products.loan[1] : ""}  `}
                pickProduct={pick}
              />
            ))}
          </div>
        </div>
        <div className="showMore" onClick={handleShowMore}>
          <span>Pokaż więcej</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="6"
            viewBox="0 0 7 6"
            fill="none"
          >
            <path d="M3.5 5.5L6.53109 0.25H0.468911L3.5 5.5Z" fill="#007AFF" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
