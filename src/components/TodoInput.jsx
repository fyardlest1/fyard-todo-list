import React, { Component } from 'react';

class TodoInput extends Component {
    render() {
        const { item, handleChange, handleSubmit, editItem } = this.props
        return (
            <div className='card card-body my-3'>
                <form onSubmit={handleSubmit}>
                    <div className="input-group mb-3">
                        <span className="input-group-text bg-primary text-white" >
                            <i className="fas fa-book"/>
                        </span>
                        <input 
                            type="text" className="form-control text-capitalize" 
                            placeholder="add todo item" 
                            value={item}
                            onChange={handleChange} />
                    </div>
                    <button type="submit" className='btn btn-block text-uppercase btn-primary'>
                        <i className="fas fa-plus-circle"/>
                        add item
                    </button>
                </form>
            </div>
        );
    }
}

export default TodoInput;