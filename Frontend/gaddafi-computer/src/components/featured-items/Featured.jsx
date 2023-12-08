import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../utils/client";
import Card from "../cards/Card";

const Featured = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "phones"]{image, name, price, details, slug}')
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

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
    const fetchData = async () => {
      const newData = [];
      for (const item of data) {
        const imageUrl = await getImageUrl(item.image[0].asset._ref); // Accessing the first image in the array
        if (imageUrl) {
          newData.push({ ...item, imageUrl });
        }
      }
      setData(newData);
    };
    if (data.length > 0) {
      fetchData();
    }
  }, [data]);

  return (
    <div className="featured__container container">
      <div className="row d-flex">
        <div className="header">
          <h3>Phone Accessories</h3>
        </div>
        {data.length === 0 ? (
          <p>Loading...</p>
        ) : (
          data.slice(0, 6).map((card, index) => (
            <div className="col-6 col-md-4 col-lg-2" key={index}>
              <Card
                imageUrl={card.imageUrl}
                name={card.name}
                price={card.price}
                details={card.details}
                slug={card.slug.current}
              />
            </div>
          ))
        )}
        <div className="see-more">
          <Link to="/phonepage" className="see-more__link">
            <p>See more</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
