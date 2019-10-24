class App extends React.Component {
  render() {
    let items = [
      { text: 'Finish Lab 28', complete: false },
      { text: 'Practice Lab 28', complete: true },
    ];

    return (
      <section class="todo">
        <Header count={items.length} />
        <div>
          <Form />
        </div>
        <List items={items} />
      </section>
    );
  }
}

class Form extends React.Component {
  render() {
    return (
      <form method="post" id="todoForm">
        <input id="item" placeholder="Add To Do List Item" />
      </form>
    )
  }
}

class Header {
  render() {
    return (
      <header id="header">
        <h2>There are {this.props.count} Items To Complete</h2>
      </header>
    );
  }
}

class List {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <Item item={item} />
        ))}
      </ul>
    )
  }
}

class Item {
  render() {
    let { complete, id, text } = this.props.item;
    return (
        <li class={`complete-${complete}`}>
          <span id={id}>
            {text}
          </span>
          <button>delete</button>
        </li>
    )
  }
}