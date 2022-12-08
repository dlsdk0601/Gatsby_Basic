import * as React from "react";
import type { PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout title="Welcome to DevStickers ">
      <div />
    </Layout> 
  );
};

// 각 페이지 마다 Head 컴포넌트를 만들어서 Head 설정 할 수 잇음
export const Head = () => <Seo title="Home" />;

export default IndexPage;

