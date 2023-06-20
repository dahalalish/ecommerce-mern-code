import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.webp"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-primary bg-gradient p-2 text-white text-center">
            CONTACT US
          </h1>
          <p className="text-justify mt-2">
            Feel free to call anytime for query about product.We are 24X7
            available for you.
          </p>
          <p className="mt-3">
            <BiMailSend />
            :www.help@ecommerce-app.com
          </p>
          <p className="mt-3">
            <BiPhoneCall />
            :12-34567890
          </p>{" "}
          <p className="mt-3">
            <BiSupport />: 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
