import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline" style={{margin:'0 0 8rem 0'}}>
    {gridItems.map((item) => (
      <div key={item.text} className="column is-4">
        <section className="section f-box">
        <a href={item.link} target="_blank" rel="noopener noreferrer">
          <div className="has-text-centered">
            <div
              style={{
                width: '140px',
                display: 'inline-block',
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
            <h4 className="title">{item.title}</h4>
          </div>
          <p>{item.text}</p>
         </a>  
        </section>
      </div>
    ))}
  </div>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
