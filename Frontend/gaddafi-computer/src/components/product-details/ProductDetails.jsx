import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "../../utils/client";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const { slug } = useParams(); // Get the slug parameter from the URL

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const result = await client.fetch(
          `*[(_type == "phones" || _type == 'pc' || _type == 'others') && slug.current == $slug]{image, name, price, details, slug, key_description}`,
          { slug }
        );

        if (result && result.length > 0) {
          const item = result[0];
          const imageUrl = await getImageUrl(item.image[0].asset._ref);
          setProduct({ ...item, imageUrl });
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
        setProduct(null);
      }
    };

    fetchProductDetails();
  }, [slug]);

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

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-details">
      <div className="container">
        <div className="product-details__container">
          <div className="row">
            <div className="product__image-container col-md-5">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product__info-container col-md-7">
              <h2>{product.name}</h2>
              <p>Price: GHc {product.price}</p>
              <p className="fw-bold m-0 p-0">Description</p>
              <p>{product.details}</p>
              <p className="fw-bold m-0 p-0">Key Description</p>
              <ol>
                {product.key_description &&
                  product.key_description.map((keyDesc, index) => (
                    <li key={index}>{keyDesc}</li>
                  ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
