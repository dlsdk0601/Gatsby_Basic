import React from "react";
import { Link } from "gatsby";

interface ILayoutProps {
    children: any;
    title: string;
}
const Layout = (props: ILayoutProps) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      <main>
        {props.children}
        <h1>{props.title}</h1>
      </main>
    </div>
  );
};

export default Layout;
