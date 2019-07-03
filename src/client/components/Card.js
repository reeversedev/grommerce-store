import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <div className="image-wrapper">
            <img
              src="//cdn.grofers.com/app/images/products/normal/pro_333324.jpg?ts=1539070972"
              alt="Placeholder image"
            />
          </div>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">
                Aashirvaad Shudh Chakki Whole Wheat Atta
              </p>
              <p className="subtitle is-6">@johnsmith</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
