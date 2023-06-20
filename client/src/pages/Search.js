import React from "react";
import Layout from "../components/Layout/Layout";
import { useSearch } from "../context/search";
import { useCart } from "../context/cart";
import "../styles/HomePage.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [values, setValues] = useSearch();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  return (
    <Layout title={"Search Results"}>
      <div
        className="container home-page dashboard "
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products found"
              : `Found ${values?.results.length} Product`}
          </h6>
          <div className="d-flex flex-wrap">
            {values?.results.map((p) => (
              <div class="card m-2" style={{ width: "18rem" }}>
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

                    <button
                      className="btn btn-dark ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success(`${p.name} added to cart`);
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
