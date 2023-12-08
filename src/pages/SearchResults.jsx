import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import client from "../utils/client";
import Card from "../components/cards/Card";

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("term");
  const [searchResults, setSearchResults] = useState([]);

  const getImageUrl = async (imageRef) => {
    try {
      const asset = await client.fetch(`*[_id == "${imageRef}"]{url}`);
      if (asset && asset.length > 0) {
        return asset[0].url;
      }
    } catch (error) {
      console.error("Error fetching image URL:", error);
    }
    return null;
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if (searchTerm) {
          const results = await client.fetch(
            `*[(_type in ["phones", "pc", "others"]) && name match "${searchTerm}*"]{image, name, price, details, slug}`
          );
          const newData = [];
          for (const item of results) {
            const imageUrl = await getImageUrl(item.image[0].asset._ref);
            if (imageUrl) {
              newData.push({ ...item, imageUrl });
            }
          }
          setSearchResults(newData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSearchResults();
  }, [searchTerm]);

  return (
    <div className="search__results-container container my-2">
      <h4>Searched For: {searchTerm.toLocaleLowerCase()}</h4>
      <div className="row">
        {searchResults.map((card, index) => (
          <div className="col-6 col-md-4 col-lg-2" key={index}>
            <Card
              imageUrl={card.imageUrl}
              name={card.name}
              price={card.price}
              details={card.details}
              slug={card.slug.current}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
