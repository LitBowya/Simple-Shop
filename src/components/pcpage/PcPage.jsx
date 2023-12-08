import { useState, useEffect } from "react";
import client from "../../utils/client";
import Card from "../cards/Card";

const PcPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "pc"]{image, name, price, details, slug}')
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
    <div className="featured__container container mt-0 pt-0">
      <div className="phonepage__header row">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide col-md-8 header__left-side"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://thwartsystemsgh.com/images/Laptop_Computers/Computer-Accessories.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item active">
              <img
                src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2023_09/3596444/230228-gaming-accessories-vl-2x1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.ebuyer.com/blog/wp-content/uploads/2022/10/shutterstock_693701887.jpg"
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
                src="https://miro.medium.com/v2/resize:fit:1400/1*GWSSIrJ_EauYcXugvbUqHA.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex">
        <div className="header">
          <h3>Pc Accessories</h3>
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

export default PcPage;
