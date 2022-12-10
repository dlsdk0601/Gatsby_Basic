import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

// eslint-disable-next-line no-undef
const Blog = (props: PageProps<Queries.BlogTitlesQuery>) => {
  return (
    <Layout title="blog">
      <ul>
        {props.data.allFile.nodes.map((item, index) => <li key={index}>{item.name}</li>)}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query BlogTitles {
      allFile {
          nodes {
              name
          }
      }
  }
`;

export const Head = () => <Seo title="Blog" />;

export default Blog;
