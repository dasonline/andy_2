import withRoot from "../utils/withRoot";
import React from "react";
import { graphql, Link } from "gatsby";
import SEO from "../components/SEO";
import Card from "../components/Card";
import Page from "../components/Page";
import HomeFeatures from "../components/HomeFeatures";
import Button from "@material-ui/core/Button";

import Avatar from "@material-ui/core/Avatar";
import { Gift } from "mdi-material-ui";
import withStyles from "@material-ui/styles/withStyles";
import Img from "gatsby-image"
import { Carousel } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


const styles = () => ({
  root: {
    fontWeight: "bold",
    
  },
});
const Home = props => {
  
  return (
    <Page >
      <SEO title="Home">
        <meta
          content="Beautiful Gatsby Material UI Business Starter. Tiny code. Well organized. Ready to customize and go."
          name="description"
        />
      </SEO>

   
      <Card>
        
        <Carousel >
          {props.data.allFile.edges.map(edge => 
            <Carousel.Item>
            <Img fluid={edge.node.childImageSharp.fluid} />
            </Carousel.Item>
          )}
        </Carousel>
      </Card>
    </Page>
  );
};

export const query = graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "carousel"}}) {
      edges {
        node {
          childImageSharp {
            id
            fluid (maxHeight: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    
    
  }
`;

export default withRoot(withStyles(styles)(Home));
