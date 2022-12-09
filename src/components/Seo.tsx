import React from "react";
import { graphql, useStaticQuery } from "gatsby";

interface ISeoProps {
  title: string;
}
const Seo = (props: ISeoProps) => {
  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site{
        siteMetadata {
          title 
        }
      }
    }
  `);

  return (
    <title>{props.title} | {data.site?.siteMetadata?.title}</title>
  );
};

export default Seo;
