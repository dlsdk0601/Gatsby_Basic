import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

// eslint-disable-next-line no-undef
const Blog = (props: PageProps<Queries.BlogPostsQuery>) => {
  return (
    <Layout title="blog">
      <section>
        {props.data.allMdx.nodes.map((item, index) => (
          <article key={index}>
            <h3>{item.frontmatter?.title ?? ""}</h3>
            <h5>{item.frontmatter?.category ?? ""}</h5>
            <h5>{item?.frontmatter?.date ?? ""}</h5>
            <p>{item.excerpt}</p>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export const query = graphql`
  query BlogPosts {
      allMdx {
          nodes {
              frontmatter {
                  title,
                  category, 
                  date(formatString: "YYYY.MM.DD")
              }
              excerpt(pruneLength: 50)
          }
      }
  }
`;

export const Head = () => <Seo title="Blog" />;

export default Blog;
