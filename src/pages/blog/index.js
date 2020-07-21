import React from 'react'
import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import PropTypes from "prop-types";

const BlogIndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
    return (
      <Layout pg="blog">
        <style dangerouslySetInnerHTML={{__html: `
      body { background-color: white; border-top: 6px solid #381696 }
    `}} />
        <div className="full-width-image-container margin-top-0"
          style={{
            paddingTop:'0',
            flexDirection: 'column',
            height: '25vh',
            paddingRight:'12px',
            paddingLeft:'12px'
          }}
        >
          <h1 className="has-text-weight-bold b-h1" >
            {frontmatter.blog.title}
          </h1>
          <br/>
          <p className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen b-p" >
            {frontmatter.blog.description}
          </p>

        </div>

        <section className="section" style={{ paddingTop : '10px'}}>
          <div className="container" style={{ maxWidth : '1140px'}}>
            <div className="content">
              <h3 className="b-h2">Blog Posts ↓</h3>
              <BlogRoll />
            </div>
          </div>
        </section>

      </Layout>
    );
};

BlogIndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default BlogIndexPage;

export const pageQuery = graphql`
  query BlogIndexPage {
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
        blog {
          title
          description
        }
      }
    }
  }
`;