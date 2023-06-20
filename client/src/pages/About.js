import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img src="/images/about.jpeg" alt="about" style={{ width: "100%" }} />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Our Ecommerce App is dedicated to revolutionizing the way you shop
            by providing a convenient and secure platform for online shopping.
            With a diverse range of products, intuitive navigation, and
            personalized recommendations, we strive to exceed your expectations.
            Our team is committed to delivering an exceptional shopping
            experience while prioritizing your privacy and security. Join our
            community of satisfied customers and embark on a journey of
            convenience and endless possibilities. Happy shopping with us!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
