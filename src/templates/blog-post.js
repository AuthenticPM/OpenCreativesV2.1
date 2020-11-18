import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  featuredimage,
  date,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          body { background-color: white; border-top: 6px solid #381696 }
        `,
        }}
      />

      <div className="container">
        {featuredimage ? (
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div
                className="blogPostHero full-width-image"
                style={{
                  backgroundImage: `url(${
                    !!featuredimage.childImageSharp
                      ? featuredimage.childImageSharp.fluid.src
                      : featuredimage
                  })`,
                  backgroundPosition: `center center`,
                  backgroundSize: `cover`,
                  borderRadius: "10px",
                  alignItems:'center',
                  display:'grid',
                  width:'100%',
                  textAlign:'center',
                  height:'35vh'
                }}
              >
                
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <section className="section">
        {helmet || ""}
        <div
          className="container content"
          style={{ padding: "1rem 0", textAlign: "left" }}
        >
          <div className="columns">
            <div className="column is-10 is-offset-1 bpTitle">
                  <h1
                    className="title is-size-2 has-text-weight-bold is-bold-light"
                    style={{ marginBottom: "0rem", color:'#000' }}
                  >
                    {title}
                  </h1>
                  <p style={{ color:'#000' }}>{date}</p>
              <p>{description}</p>
              <PostContent content={content} />
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map((tag) => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

BlogPostTemplate.propTypes = {
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  date: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout pg="blog">
      <BlogPostTemplate
        featuredimage={post.frontmatter.featuredimage}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        date(formatString: "MMMM DD, YYYY")
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
