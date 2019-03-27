import React, { Component } from 'react'

class AjouterRecette extends Component {
    state = {
        nom: '',
        image: '',
        ingredients:'',
        instructions:''
    }

    render () {
        return (
          <div className="card">
            <form className="admin-form ajouter-recette">
              <input className="nom" type="text" />
              <input className="image" type="text" />
              <textarea name="ingredients" cols="30" row="3" ></textarea>
              <textarea name="instructions" cols="30" row="15" ></textarea>
            </form>
          </div>
        )
    }
}

export default AjouterRecette