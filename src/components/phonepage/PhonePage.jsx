import { useState, useEffect } from "react";
import client from "../../utils/client";
import Card from "../cards/Card";

const PhonePage = () => {
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
    <div className="featured__container PhonePage__container container">
      <div className="phonepage__header row">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide col-md-8 header__left-side"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://beebom.com/wp-content/uploads/2016/12/18-Essential-Smartphone-Accessories-You-Can-Buy-in-2019.jpg?w=750&quality=75"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item active">
              <img
                src="https://cdn.thewirecutter.com/wp-content/media/2023/10/usbchubs-2048px-7937-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=1024"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.gizchina.com/wp-content/uploads/images/2023/03/mobile-phone-accessories.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="d-none d-md-block col-md-4">
          <div className="header__right-side">
            <div className="header__image-container">
              <img
                src="https://m.media-amazon.com/images/I/61YACWtUUYL.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex pb-4">
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
      </div>
    </div>
  );
};

export default PhonePage;
