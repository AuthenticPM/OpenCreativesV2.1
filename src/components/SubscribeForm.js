import React from 'react'
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class SubscribeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    return (
      <section className="section" >
              
              <form
                name="subscribe"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                className="columns"
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="subscribe" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                
                <div className="column">
                  <div className="columns">
                    <div className="control column is-8">
                        <input
                        className="input"
                        type={"email"}
                        name={"email"}
                        onChange={this.handleChange}
                        id={"email"}
                        required={true}
                        placeholder="Your email"
                        />
                    </div>
                    <div className="field has-text-left column is-4">
                        <button className="button is-link btnSubs" type="submit" >
                            Subscribe
                        </button>
                    </div>
                  </div>
                </div>

              </form>
        
      </section>
    );
  }
}
