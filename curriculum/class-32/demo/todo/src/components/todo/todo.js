import React from 'react';
import { When } from '../if';
import Modal from '../modal';
import Header from './header';
import Form from './form';
import Item from './item';
import Details from './details';

import './todo.scss';

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      showDetails: false,
      details: {},
    };
  }

  addItem = item => {
    this.setState(state => ({
      todoList: [...state.todoList, item],
    }));
  }

  deleteItem = id => {

    this.setState(state => ({
      todoList: state.todoList.filter(item => item._id !== id),
    }));

  };

  saveItem = updatedItem => {

    this.setState(state => ({
      todoList: state.todoList.map(item =>
        item._id === updatedItem._id ? updatedItem : item
      ),
    }));

  };

  toggleComplete = id => {
    this.setState(state => ({
      todoList: state.todoList.map(item =>
        item._id === id ? {
          ...item,
          complete: !item.complete,
        } : item
      ),
    }));
  };

  toggleDetails = id => {
    this.setState(state => {
      let item = state.todoList.find(item => item._id === id);
      return {
        details: item || {},
        showDetails: !!item,
      };
    });
  }

  render() {
    return (
      <>
        <Header todoList={this.state.todoList} />

        <section className="todo">
          <Form addItem={this.addItem} />

          <div>
            <ul>
              { this.state.todoList.map(item => (
                <Item item={item}
                  toggleComplete={this.toggleComplete}
                  toggleDetails={this.toggleDetails}
                  deleteItem={this.deleteItem}
                  />
              ))}
            </ul>
          </div>
        </section>

        <When condition={this.state.showDetails}>
          <Modal title="To Do Item" close={this.toggleDetails}>
            <Details
              details={this.state.details}
              />
          </Modal>
        </When>
      </>
    );
  }
}

export default ToDo;
