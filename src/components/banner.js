import { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { fetchArtworks } from "../state/product.action";

function App() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="hero">
      <h1> Pearson Wood Craft Store </h1>

      <p className="text">
        You are at the best place to discover and collect classic items crafted
        from only the fine woods gathered across the world.
      </p>

      <div className="banner-items">
        <div>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="searchbar"
            placeholder="Find a craft work"
          />
        </div>

        <div>
          <button
            onClick={() => dispatch(fetchArtworks(searchText))}
            className={"hero-button"}
          >
            Find Craftwork
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
