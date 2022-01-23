import React, { Component } from "react";
import RecipeListing from "./Recipe-listing";

class IndexView extends Component {
  render() {
    if (this.props.recipeBank === "") {
      return <div>List is Loading...</div>;
    } else {
      return (
        <div className="IndexView">
          <ul id="IndexViewList">
            <div>
              {this.props.recipeBank.map((item) => (
                <RecipeListing
                  modifyRecipe={this.props.modifyRecipe}
                  deleteRecipe={this.props.deleteRecipe}
                  key={item.name}
                  name={item.name}
                  ingredients={item.ingredients}
                />
              ))}
            </div>
          </ul>
        </div>
      );
    }
  }
}

export default IndexView;
