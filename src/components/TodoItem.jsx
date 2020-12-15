import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const { title, handleDelete, handleEdit } = this.props
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between">
                <h6> {title} </h6>
                <div className="todo-icon">
                    <span className='mx-2 text-success' onClick={handleEdit}>
                        <i className="fas fa-edit" />
                    </span>
                    <span className='mx-2 text-danger' >
                        <i className="far fa-trash-alt" onClick={handleDelete}/>
                    </span>
                </div>
            </li>
        );
    }
}

export default TodoItem;