import { useState, useEffect } from "react";
import client from "../../utils/client";

const Header = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "images"]{image, name, largetext, smalltext}')
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
      <header className="header">
        <div className="header__container container">
          <div className="row">
            <div className="header__container-left col-md-6">
              <img src={data[3].imageUrl} alt={data[3].name} />
              <div className="text text1">
                <h3 className="title">{data[3].largetext}</h3>
                <p className="subtitle">{data[3].smalltext}</p>
              </div>
            </div>
            <div className="header__container-right col-md-6">
              <div className="header__right-top">
                <div className="row">
                  <div className="header__top-leftImage col-6">
                    <img src={data[4].imageUrl} alt={data[4].name} />
                    <div className="text text2">
                      <h3 className="title">{data[4].largetext}</h3>
                      <p className="subtitle">{data[4].smalltext}</p>
                    </div>
                  </div>
                  <div className="header__top-rightImage col-6">
                    <img src={data[2].imageUrl} alt={data[2].name} />
                    <div className="text text3">
                      <h3 className="title">{data[2].largetext}</h3>
                      <p className="subtitle">{data[2].smalltext}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="header__right-down">
                <div className="row">
                  <div className="header__down-leftImage col-6">
                    <img src={data[0].imageUrl} alt={data[0].name} />
                    <div className="text text4">
                      <h3 className="title">{data[0].largetext}</h3>
                      <p className="subtitle">{data[0].smalltext}</p>
                    </div>
                  </div>
                  <div className="header__down-rightImage col-6">
                    <img src={data[1].imageUrl} alt={data[1].name} />
                    <div className="text text5">
                      <h3 className="title">{data[1].largetext}</h3>
                      <p className="subtitle">{data[1].smalltext}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

