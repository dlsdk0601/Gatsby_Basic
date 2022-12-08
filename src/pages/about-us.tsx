import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const AboutUs = () => {
  return (
    <Layout title="About is">
      <div>
        <p>We are the happies sticker stroe.</p>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="AboutUs" />;

export default AboutUs;


