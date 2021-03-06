import React, { Component } from "react";
import RecipeDetails from "./Recipe-details";

class RecipeListing extends Component {
  constructor() {
    super();
    this.state = {
      detailsHidden: true,
    };
  }

  //This is for toggle the list

  toggleDetails(e) {
    this.setState({
      detailsHidden: !this.state.detailsHidden,
    });
  }

  render() {
    if (this.state.detailsHidden) {
      return (
        <li className="recipe-listing">
          <div
            className="detail-toggle"
            onClick={this.toggleDetails.bind(this)}
          >
            {this.props.name}
          </div>
        </li>
      );
    } else {
      return (
        <li className="recipe-listing">
          <div
            className="detail-toggle"
            onClick={this.toggleDetails.bind(this)}
          >
            {this.props.name}
          </div>
          <RecipeDetails
            modifyRecipe={this.props.modifyRecipe}
            deleteRecipe={this.props.deleteRecipe}
            ingredients={this.props.ingredients}
            name={this.props.name}
          />
        </li>
      );
    }
  }
}

export default RecipeListing;
