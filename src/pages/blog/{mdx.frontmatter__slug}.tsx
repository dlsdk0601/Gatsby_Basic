import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

interface IBlogPostProps {
  data: Queries.PostDetailQuery;
  children?: any
}

const BlogPost = ({ data, children }: IBlogPostProps) => {
  return (
    <Layout title="Blog post">
      <div>{children}</div>
    </Layout>
  );
};

export const query = graphql`
    query PostDetail($frontmatter__slug: String) {
        mdx(frontmatter: {slug: {eq: 
            $frontmatter__slug
        }}){
            body
            frontmatter {
                author,
                title,
                category,
                date,
                slug
            }
        }
    }
`;

export const Head = ({ data }: IBlogPostProps) => <Seo title={data.mdx?.frontmatter?.title ?? ""} />;
export default BlogPost;
