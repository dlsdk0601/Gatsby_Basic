import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

interface IBlogPostProps {
  data: Queries.PostDetailQuery;
  children?: any
}

const BlogPost = ({ data, children }: IBlogPostProps) => {
  const image = getImage(
    data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData ?? null,
  );

  return (
    <Layout title="Blog post">
      <GatsbyImage alt={data.mdx?.frontmatter?.title ?? ""} image={image as any} />
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
                slug,
                headerImage {
                    childImageSharp {
                        gatsbyImageData(height: 450)
                    }
                }
            }
        }
    }
`;

export const Head = ({ data }: IBlogPostProps) => <Seo title={data.mdx?.frontmatter?.title ?? ""} />;
export default BlogPost;
