import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../../utils/client";

const Departments = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "department"]{image, name, largetext, smalltext}')
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
    <div className="departments__container">
      <div className="container">
        <div className="departments">
          <h3 className="header">Departments</h3>
          <div className="department__container">
            <div className="row">
              <div className="department__container-info col-6">
                <Link to="/pcpage">
                  <img
                    src={data[1].imageUrl}
                    alt={data[1].name}
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="department__container-info col-6">
                <Link to="/phonepage">
                  <img
                    src={data[2].imageUrl}
                    alt={data[2].name}
                    className="img-fluid"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
