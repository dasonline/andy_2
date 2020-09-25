import withRoot from "../../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import List from "../../components/List";

const Products = props => {
  const products = props.data.allMarkdownRemark.edges;
  return (
    <Page title="Products">
      <SEO title="Products" />
      <List items={products} />
    </Page>
  );
};

export const query = graphql`
  query ProductsQuery {
    
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            coverImage
          }
        }
      }
    }
  }
`;

export default withRoot(Products);
