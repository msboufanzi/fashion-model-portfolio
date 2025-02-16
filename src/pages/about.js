import * as React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Navbar from "../components/navbar"
import Footer from "../components/footer"


const About = ({ data, location }) => {  

  return (
      <div>
        <div>
          <Navbar></Navbar>
        </div>
        <div className="body-global-wrapper">
          <br></br>
          <p className="titleimage">I was born in Casablanca and currently live in the city of Tangier in Morocco. I am 19 years old and exploring the world of fashion. I am a fashion student, and I am passionate about meeting new people, discovering new places, and experiencing different cultures. 
            <br></br>
            <br></br>
            <u>Measurements:</u>
            <br></br>

            Height: 1.86 m

           <br></br>

            Chest circumference: 95 cm

           <br></br>

            Waist circumference: 77 cm

           <br></br>

            Hips circumference: 96 cm

           <br></br>

            Shoulder: 14 cm

          <br></br>

           Shoe size: 41

          <br></br>
            <br></br>
            <a href="mailto:zaakfathallah106@gmail.com" target="_blank" rel="noopener noreferrer">Feel free to email me </a> for contact or message me <a href="https://www.instagram.com/trulyzaak_106/" target="_blank" rel="noopener noreferrer"> on Instagram.</a>.
          </p>
        </div>
        <div>
          <Footer></Footer>
        </div>        
      </div>    
  )
}

export default About

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
