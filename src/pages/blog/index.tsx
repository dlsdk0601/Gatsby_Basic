import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

// eslint-disable-next-line no-undef
const Index = (props: PageProps<Queries.BlogPostsQuery>) => {
  return (
    <Layout title="blog">
      <section>
        {props.data.allMdx.nodes.map((item, index) => (
          <article key={index}>
            <Link to={`/blog/${item.frontmatter?.slug}`}>
              <h3>{item.frontmatter?.title ?? ""}</h3>
              <h5>{item.frontmatter?.category ?? ""}</h5>
              <h5>{item?.frontmatter?.date ?? ""}</h5>
              <h5>{item?.frontmatter?.author ?? ""}</h5>
              <p>{item.excerpt}</p>
            </Link>
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
                  author,
                  slug, 
                  date(formatString: "YYYY.MM.DD")
              }
              excerpt(pruneLength: 50)
          }
      }
  }
`;

export const Head = () => <Seo title="Index" />;

export default Index;
