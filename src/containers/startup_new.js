import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createStartup } from '../actions/index';
import { Link } from 'react-router';

class StartupNew extends Component {
  constructor(props) {
    super(props);

    this.state = { text: "" };

    this.onInputChange = this.onInputChange.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    return this.props.createStartup(props)
      .then(() => {
        this.context.router.push('/');
      });
  }

  onInputChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    const { fields: { name, link, description, country }, handleSubmit, submitting } = this.props;

    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <form className="column" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
              <h1 className="title">Submit Startup</h1>
              <p className="control">
                <label className="label">Name</label>
                <input className={`input ${name.touched && name.invalid ? 'is-danger' : ''}`} type="text" placeholder="Google" {...name} disabled={submitting} />
                <small className="text-help">
                  {name.touched ? name.error : ''}
                </small>
              </p>
              <p className="control">
                <label className="label">Link</label>
                <input className={`input ${link.touched && link.invalid ? 'is-danger' : ''}`} type="text" placeholder="http://google.com" {...link} disabled={submitting} />
                <small className="text-help">
                  {link.touched ? link.error : ''}
                </small>
              </p>
              <p className="control">
                <label className="label">Short Description</label>
                <input className={`input ${description.touched && description.invalid ? 'is-danger' : ''}`} type="text" placeholder="A search engine for the web." maxLength="140" {...description} onChange={this.onInputChange} value={this.state.text} disabled={submitting} />
                <span className="remaining">{140 - this.state.text.length}</span>
                <small className="text-help">
                  {description.touched ? description.error : ''}
                </small>
              </p>
              <p className="control">
                <label className="label">Locality</label>
                <span className="select">
                  <select {...country} className={`${country.touched && country.invalid ? 'is-danger' : ''}`} disabled={submitting}>
                    <option>Select dropdown</option>
                    <option value="ph">PH</option>
                    <option value="my">MY</option>
                    <option value="sg">SG</option>
                  </select>
                </span>
                <small className="text-help is-block">
                  {country.touched ? country.error : ''}
                </small>
              </p>
              <p className="control">
                <button className={`button is-primary ${submitting ? 'is-loading' : ''}`} disabled={submitting}>Submit</button>
              </p>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

function validate(values) {
  const regexp = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  const errors = {};

  if (!values.name) {
    errors.name = 'Enter a name';
  }

  if (!values.link) {
    errors.link = 'Enter a link';
  } else if (!regexp.test(values.link)) {
    errors.link = 'Link is invalid';
  }

  if (!values.description) {
    errors.description = 'Enter description';
  }

  if (!values.country || values.country === 'Select dropdown') {
    errors.country = 'Select Locality';
  }

  return errors;
}

export default reduxForm({
  form: 'StartupNewForm',
  fields: ['name', 'link', 'description', 'country'],
  validate
}, null, { createStartup })(StartupNew);
