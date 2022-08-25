import React, { useState } from "react";

function RecipeCreate({ addRecipe }) { //This Function is used to add component to create recipe items
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  
  
  const [formData, setFormData] = useState({ ...initialFormState }); // giving State to our form's data, where the initial state is simply our initial form.

  const handleChange = ({ target }) => {
    //This tracks all changes to the form inputs and changes value of the form elements to match the inputs
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    //submit handler, this will prevent default, run addPosts with the form data as a prop and then reset our form data back to the initial defaults.
    event.preventDefault();
    addRecipe(formData);
    setFormData({ ...initialFormState });
  };

  
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
 return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
                required= {true}
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                required= {true}
              />
            </td>
            <td>
              <input
                id="photo"
                type="url"
                name="photo"
                placeholder="URL"
                onChange={handleChange}
                value={formData.photo}
                required= {true}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                required= {true}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="preparation"
                onChange={handleChange}
                value={formData.preparation}
                required= {true}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;