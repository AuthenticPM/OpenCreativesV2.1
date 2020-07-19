import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            flexDirection: 'column',
            height:'25vh',
            backgroundColor: '#1a202c'
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              color: "white",
              padding: "1rem",
            }}
          >
            Latest Stories
          </h1>
          <br/>
          <p
            className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              textAlign: "center",
              color: "white",
              lineHeight: "1",
              padding: "0.25em",
            }}
          >
            Lorem ipsum dolar sit amet
          </p>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
