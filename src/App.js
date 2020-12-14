import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

// import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: 'wake up'
      },
      {
        id: 2,
        title: 'setup the day'
      },
    ],
    id: uuidv4(),
    item: '',
    editItem: false
  }

  // handle method
  handleChange = (e) => {
    //
  }

  handleSubmit = (e) => {
    //
  }

  handleDelete = (id) => {
    //
  }

  handleEdit = (id) => {
    //
  }

  clearList = () => {
    //
  }

  render() {  
    console.log(this.state)  

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">
              todo input
            </h3>
            <TodoInput 
              item={this.state.item} 
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem} 
            />
            <TodoList 
              items={this.state.items}
              handleDelete={this.handleDelete}
              clearList={this.clearList}
              handleEdit={this.handleEdit} 
            />
          </div>
        </div>
      </div>
  );
  }
}

export default App;
