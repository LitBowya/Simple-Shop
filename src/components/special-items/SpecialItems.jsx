import { useState, useEffect } from "react";
import client from "../../utils/client";

const Header = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "special_items"]{image, name, largetext, smalltext}')
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const getImageUrls = async () => {
    const newData = await Promise.all(
      data.map(async (item) => {
        const asset = await client.fetch(
          `*[_id == "${item.image.asset._ref}"]{url}`
        ); // Fetch the URL of the asset
        return { ...item, imageUrl: asset[0].url }; // Add imageUrl to the item
      })
    );
    setData(newData);
  };

  useEffect(() => {
    if (data.length > 0) {
      getImageUrls();
    }
  }, [data]);

  if (data.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="specialitems">
        <div className="specialitems__container container">
          <h3 className="head">Deals</h3>
          <div className="row">
            <div className="specialitems__info col-6 col-md-4">
              <div
                className="specialitems__info-1"
                style={{
                  backgroundImage: `url(${data[0].imageUrl})`,
                }}
              >
                <div className="text text4">
                  <h3 className="title text-black">{data[0].largetext}</h3>
                  <p className="subtitle">{data[0].smalltext}</p>
                </div>
              </div>
            </div>
            <div className="specialitems__info col-6 col-md-8">
              <div
                className="specialitems__info-2"
                style={{
                  backgroundImage: `url(${data[1].imageUrl})`,
                }}
              >
                <div className="text text4">
                  <h3 className="title">{data[1].largetext}</h3>
                  <p className="subtitle">{data[1].smalltext}</p>
                </div>
              </div>
            </div>
            <div className="specialitems__info col-6 col-md-8">
              <div
                className="specialitems__info-3"
                style={{
                  backgroundImage: `url(${data[2].imageUrl})`,
                }}
              >
                <div className="text text4">
                  <h3 className="title">{data[2].largetext}</h3>
                  <p className="subtitle">{data[2].smalltext}</p>
                </div>
              </div>
            </div>
            <div className="specialitems__info col-6 col-md-4">
              <div
                className="specialitems__info-4"
                style={{
                  backgroundImage: `url(${data[3].imageUrl})`,
                }}
              >
                <div className="text text4">
                  <h3 className="title">{data[3].largetext}</h3>
                  <p className="subtitle">{data[3].smalltext}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
