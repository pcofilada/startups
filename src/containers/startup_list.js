import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStartups } from '../actions/index';

class StartupList extends Component {
  componentWillMount() {
    this.props.fetchStartups();
  }

  renderList() {
    return this.props.startups.map((startup) => {
      return (
        <div className="column is-third" key={startup.id}>
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src="http://placehold.it/300x225" alt="" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-5">{startup.name}</p>
                  <p className="subtitle is-6">{startup.country.toUpperCase()}</p>
                </div>
              </div>
              <div className="content">
                {startup.description}
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.renderList()}
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return { startups: state.startups };
}

export default connect(mapStateToProps, {fetchStartups})(StartupList);
