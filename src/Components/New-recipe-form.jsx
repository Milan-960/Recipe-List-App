import React, { Component } from "react";
import ReactDOM from "react-dom";

class NewRecipeForm extends Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
      textareaText: "",
      originalName: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.isExistingRecipe = this.isExistingRecipe.bind(this);
    this.buildStringFromIngredients =
      this.buildStringFromIngredients.bind(this);
  }

  closeNewRecipeForm() {
    ReactDOM.unmountComponentAtNode(document.getElementById("new-container"));
  }

  componentWillMount() {
    this.setState({
      originalName: this.props.name,
    });

    if (this.props.ingredients) {
      this.setState({
        inputText: this.props.name,
        textareaText: this.buildStringFromIngredients(this.props.ingredients),
      });

      this.recipeToEdit = {
        name: this.props.name,
        ingredients: this.buildStringFromIngredients(this.props.ingredients),
      };
    }
  }

  handleSubmit(event) {
    // Change local storage to the file that was submitted.

    var newRecipeDetails = {
      title: this.state.inputText.trim() ? this.state.inputText : "Untitled",
      ingredients: this.getIngredientsFromString(this.state.textareaText),
    };

    // use a callback function

    if (this.recipeToEdit) {
      this.props.modifyRecipe(newRecipeDetails, this.state.originalName);
    } else {
      this.props.addRecipe(newRecipeDetails);
    }

    //add a check - if there is no title or no ingredients, don't add them to the table.

    this.closeNewRecipeForm();
  }

  isExistingRecipe() {
    return this.recipeToEdit;
  }

  getIngredientsFromString(str) {
    return str.split(",").map((ingredient) => ingredient.trim());
  }

  buildStringFromIngredients(arr) {
    return arr.join(", ");
  }

  render() {
    return (
      <form className="new-recipe-form" onSubmit={this.handleSubmit}>
        <div className="new-recipe-header">
          <p className="m-font">Add a Recipe</p>
          <p className="close-icon" onClick={this.closeNewRecipeForm}>
            &#10005;
          </p>
        </div>
        <hr />
        <div className="new-recipe-body">
          <div>
            <p>Recipe</p>
            <input
              type="text"
              placeholder="Recipe Name"
              value={this.state.inputText}
              onChange={(event) =>
                this.setState({ inputText: event.target.value })
              }
            />
          </div>
          <div>
            <p>Ingredients</p>
            <textarea
              placeholder="Enter ingredients, Separated, By commas"
              value={this.state.textareaText}
              onChange={(event) =>
                this.setState({ textareaText: event.target.value })
              }
            ></textarea>
          </div>
        </div>
        <div className="new-recipe-footer">
          <button type="submit" className="add-recipe-button">
            Add a Recipe
          </button>
          <button className="edit-btn">Close</button>
        </div>
      </form>
    );
  }
}

export default NewRecipeForm;
