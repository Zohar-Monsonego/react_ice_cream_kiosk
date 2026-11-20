import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import FlavorCard from "./components/FlavorCard.jsx";
import Header from "./components/Header.jsx";
import OrderSummary from "./components/OrderSummary.jsx";

function App() {
  const [flavors_arr, setFlavors] = useState([
    {
      id: 1,
      name: "Vanilla",
      flavor_icon: "🍦",
      isSoldOut: false,
      scoopsSelector: 0,
    },
    {
      id: 2,
      name: "Chocolate",
      flavor_icon: "🍫",
      isSoldOut: false,
      scoopsSelector: 0,
    },
    {
      id: 3,
      name: "Strawberry",
      flavor_icon: "🍓",
      isSoldOut: false,
      scoopsSelector: 0,
    },
    {
      id: 4,
      name: "Cookies",
      flavor_icon: "🍪",
      isSoldOut: false,
      scoopsSelector: 0,
    },
    {
      id: 5,
      name: "Cheese cake",
      flavor_icon: "🍰",
      isSoldOut: true,
      scoopsSelector: 0,
    },
    {
      id: 6,
      name: "Donuts",
      flavor_icon: "🍩",
      isSoldOut: true,
      scoopsSelector: 0,
    },
  ]);

  const [scoopLimit, setScoopLimit] = useState(5);
  const [showOnlyAvailable, setOnlyAvailable] = useState(false);

  //calculating the sum of the total scoops added
  let sum_of_total_scoops = 0;
  flavors_arr.forEach((flavor) => {
    sum_of_total_scoops += flavor.scoopsSelector;
  });

  function addScoop(id) {
    console.log("addScoop called with id:", id);

    console.log("Total scoops:", sum_of_total_scoops);
    if (sum_of_total_scoops >= scoopLimit) {
      return;
    }

    const updated_flavors_arr = flavors_arr.map((flavor) => {
      if (
        flavor.id === id &&
        !flavor.isSoldOut &&
        sum_of_total_scoops < scoopLimit
      ) {
        return {
          ...flavor,
          scoopsSelector: flavor.scoopsSelector + 1,
        };
      }

      return flavor;
    });

    console.log("Updated flavors:", updated_flavors_arr);

    setFlavors(updated_flavors_arr);
  }

  function removeScoop(id) {
    console.log("removeScoop called with id:", id);
    const updated_flavors_arr = flavors_arr.map((flavor) => {
      if (flavor.id === id && flavor.scoopsSelector > 0) {
        return {
          ...flavor,
          scoopsSelector: flavor.scoopsSelector - 1,
        };
      }

      return flavor;
    });

    setFlavors(updated_flavors_arr);
  }

  //a new array for the flavors, in case the showOnlyAvailable is true or false
  let filtered_flavors = [];

  if (showOnlyAvailable === true) {
    filtered_flavors = flavors_arr.filter((flavor) => {
      return flavor.isSoldOut === false;
    });
  } else {
    filtered_flavors = flavors_arr;
  }

  //calling the function: 'setShowOnlyAvailable' to update the 'setShowOnlyAvailable' variable

  function updateAvailable() {
    setOnlyAvailable(!showOnlyAvailable);
  }

  return (
    <>
      <div>
        <Header header_text={"ICE CREAM KIOSK"} />
        <section className="show_only_available_section">
          <p className="show_only_p">Show Only Available</p>
          <button
            className="show_only_available_button"
            onClick={updateAvailable}
          >
            {showOnlyAvailable ? "On" : "Off"}
          </button>
        </section>

        <p className="up_to_5_scoops_text">
          {sum_of_total_scoops === 5 ? "You can add only up to 5 scoops!" : ""}
        </p>

        <section className="flavors_card_section">
          {filtered_flavors.map((flavor) => (
            <FlavorCard
              flavor_icon={flavor.flavor_icon}
              flavor_name={flavor.name}
              isSold={flavor.isSoldOut}
              scoopsSelector={flavor.scoopsSelector}
              addScoop={() => addScoop(flavor.id)}
              removeScoop={() => removeScoop(flavor.id)}
              total_scoops={sum_of_total_scoops}
            />
          ))}
        </section>

        <OrderSummary total_scoops={sum_of_total_scoops} />
      </div>
    </>
  );
}

export default App;
