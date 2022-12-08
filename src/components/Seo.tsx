import React from "react";

interface ISeoProps {
  title: string;
}
const Seo = (props: ISeoProps) => {
  return (
    <title>{props.title} | DevStickers!</title>
  );
};

export default Seo;
