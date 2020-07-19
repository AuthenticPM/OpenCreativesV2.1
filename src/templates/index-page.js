import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Features from "../components/Features";
import ContactForm from "../components/ContactForm";
import SubscribeForm from "../components/SubscribeForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faMedal } from "@fortawesome/free-solid-svg-icons";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

export const IndexPageTemplate = ({
         image,
         title,
         heading,
         subheading,
         mainpitch1,
         mainpitch2,
         intro,
         main,
         contact,
       }) => (
         <div>
           <div
             className="full-width-image margin-top-0"
             style={{
               backgroundImage: `url(${
                 !!image.childImageSharp
                   ? image.childImageSharp.fluid.src
                   : image
               })`,
               backgroundPosition: `center center`,
               backgroundSize: `cover`,
             }}
           >
             <div
               style={{
                 display: "flex",
                 height: "150px",
                 lineHeight: "1",
                 justifyContent: "space-around",
                 alignItems: "left",
                 flexDirection: "column",
               }}
             >
               <h1
                 className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                 style={{
                   textAlign: "center",
                   color: "white",
                   lineHeight: "1",
                   padding: "0.25em",
                 }}
               >
                 {heading}
               </h1>
               <p
                 className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                 style={{
                   textAlign: "center",
                   color: "white",
                   lineHeight: "1",
                   padding: "0.25em",
                 }}
               >
                 {subheading}
               </p>

               <SubscribeForm />  

             </div>
             <div className="hBtm" >
              <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
              </svg>
            </div>
           </div>
           <section
             className="section section--gradient"
             style={{ marginTop: "-10rem" }}
           >
             <div className="container">
               <div className="section">
                 <div className="columns">
                   <div className="column is-10 is-offset-1">
                     <div className="content">
                       <div className="columns">
                         <div
                           className="column is-6"
                           style={{ display: "flex" }}
                         >
                           <section className="tile">
                             <div className="has-text-centered top-box">
                               <div className="f-icon icon-faAward">
                                 <FontAwesomeIcon icon={faAward} size="lg" />
                               </div>
                               <h4 className="title">{mainpitch1.title}</h4>
                               <p>{mainpitch1.description}</p>
                             </div>
                           </section>
                         </div>
                         <div
                           className="column is-6"
                           style={{ display: "flex" }}
                         >
                           <section className="tile">
                             <div className="has-text-centered top-box">
                               <div className="f-icon icon-faMedal">
                                 <FontAwesomeIcon icon={faMedal} size="lg" />
                               </div>
                               <h4 className="title">{mainpitch2.title}</h4>
                               <p>{mainpitch2.description}</p>
                             </div>
                           </section>
                         </div>
                       </div>

                       <section className="section">
                         <div className="columns">
                           <div className="column is-12 has-text-centered">
                             <h1>{intro.heading}</h1>
                             <p>{intro.description}</p>
                           </div>
                         </div>
                       </section>

                       <Features gridItems={intro.blurbs} />

                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </section>

           <div className="content s-last-box">
           <div className="sTop" >
              <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
              </svg>
            </div>
             <div className="container">
               <div className="columns">
                 <div className="column is-10 is-offset-1">

                   <section className="section" style={{padding:'3rem 1.5rem 8rem 1.5rem'}}>
                     <div className="columns">
                       <div className="column is-6">
                         <PreviewCompatibleImage imageInfo={main} />
                       </div>
                       <div className="column is-6">
                         <h1>{main.heading}</h1>
                         <p>{main.description}</p>
                       </div>
                     </div>
                   </section>

                 </div>
               </div>
             </div>
           </div>

           <div className="content bg-gray-900">
           <div className="cTop" >
              <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
              </svg>
            </div>
             <div className="container">
               <div className="columns">
                 <div className="column is-10 is-offset-1">

                   <section className="section c-header">
                     <div className="columns">
                       <div className="column is-12 has-text-centered">
                         <h1>{contact.title}</h1>
                         <p>{contact.description}</p>
                       </div>
                     </div>
                   </section>

                   <ContactForm />

                 </div>
               </div>
             </div>
           </div>

         </div>
       );

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch1: PropTypes.object,
  mainpitch2: PropTypes.object,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.object,
  contact: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch1={frontmatter.mainpitch1}
        mainpitch2={frontmatter.mainpitch2}
        intro={frontmatter.intro}
        main={frontmatter.main}
        contact={frontmatter.contact}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch1 {
          title
          description
        }
        mainpitch2 {
          title
          description
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 140, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            link
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        contact {
          title
          description
          heading
          text
        }
      }
    }
  }
`;
