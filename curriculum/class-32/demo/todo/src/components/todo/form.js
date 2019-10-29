import React from 'react';
import { useState } from 'react';
import uuid from 'uuid/v4';

    let Form = (props) => {
      let [item, setItem] = useState({});

      let handleInputChange = e => {
        let { name, value } = e.target;
        setItem({
          ...item,
          [name]: value,
        });
      };

      let addItem = (e) => {

        e.preventDefault();
        e.target.reset();

        const defaults = { _id: uuid(), complete:false };
        const newItem = Object.assign({}, item, defaults);

        props.addItem(newItem);

        setItem({});
      };

      return (
          <div>
            <h3>Add Item</h3>
            <form onSubmit={addItem}>
              <label>
                <span>To Do Item</span>
                <input
                  name="text"
                  placeholder="Add To Do List Item"
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <span>Difficulty Rating</span>
                <input type="range" min="1" max="5" name="difficulty" defaultValue="3" onChange={handleInputChange} />
              </label>
              <label>
                <span>Assigned To</span>
                <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
              </label>
              <label>
                <span>Due</span>
                <input type="date" name="due" onChange={handleInputChange} />
              </label>
              <button>Add Item</button>
            </form>
          </div>
      );
    }

    export default Form;

