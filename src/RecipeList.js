import React from "react";

function RecipeList({ recipes, deleteRecipe }) { //Component to list the recipes and allow us to delete them.

  const rows = recipes.map(({ name, cuisine, photo, ingredients, preparation }, index) => ( 
    <tr key={index}>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td> <img src = {photo}/></td>
      <td className="content_td"><p>{ingredients}</p></td>
      <td className="content_td"><p>{preparation}</p></td>
      <td> <button name="delete" onClick={() => deleteRecipe(index)} >Delete</button> </td>
    </tr>
  ));
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
 return ( // <th> Is the header items and {rows} represent the variable of our items compiled in a table.
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
