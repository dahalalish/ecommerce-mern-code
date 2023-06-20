import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/CategoryProductStyles.css";

const CategoryProduct = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params?.slug) getProductsByCat();
  }, [params?.slug]);

  const getProductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="container mt-3 category">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} result found</h6>
        <div className="row">
          {" "}
          <div className="col-md-9 offset-1">
            <div className="d-flex flex-wrap ">
              {products?.map((p) => (
                <div class="card m-2" key={p._id}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    class="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <div className="card-name-price">
                      <h5 className="card-title">{p.name}</h5>
                      <h5 className="card-title card-price">
                        {p.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </h5>
                    </div>

                    <p class="card-text">{p.description.substring(0, 40)}...</p>
                    <div className="card-name-price">
                      <button
                        className="btn btn-info btn-gradient ms-1"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        More Details
                      </button>
                      {/* <button className="btn btn-secondary ms-1">
                    Add to cart
                  </button> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
