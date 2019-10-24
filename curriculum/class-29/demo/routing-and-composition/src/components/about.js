import React from 'react';

import { If } from './if';
import Modal from './modal';

// export default () => (
//   <>
//     <h2>About Me</h2>
//     <p>Keith is tired.</p>
//   </>
// );

export default class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  hideModal = () => {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <>
        <h2>About</h2>
        <button onClick={() => this.setState({ showModal: true })}>Show Modal</button>
        <If condition={this.state.showModal}>
          <Modal title="More About Me" close={this.hideModal}>
            <p>I am hungry</p>
            <p>I am warm</p>
          </Modal>
        </If>
      </>
    );
  }
}