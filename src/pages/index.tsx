import * as React from "react";
import type { PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Welcome to DevStickers ">
      <div />
      <StaticImage src="https://images.unsplash.com/photo-1625768376503-68d2495d78c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80" alt="sample" />
    </Layout> 
  );
};

// 각 페이지 마다 Head 컴포넌트를 만들어서 Head 설정 할 수 잇음
export const Head = () => <Seo title="Home" />;

export default IndexPage;

