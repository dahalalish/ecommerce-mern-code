import React from "react";
import Layout from "../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.webp"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            We may collect personal information such as your name, email
            address, shipping address, phone number, and payment details when
            you place an order on our website. We will only collect the
            necessary information required to fulfill your order and provide you
            with a smooth shopping experience.
          </p>

          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
          <p>add privacy policy</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
