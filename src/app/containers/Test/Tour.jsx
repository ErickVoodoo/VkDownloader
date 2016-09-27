import React from 'react';
import ReactDOM from 'react-dom';

class Shape extends React.Component {
  constructor() {
    super();

    this.state = {
      step: 0,
    };
  }

  componentDidMount() {
    this.setActiveStepElement();
  }

  setActiveStepElement = () => {
    this.props.elements.forEach((item) => {
      const element = document.getElementById(item.id);
      element.style.zIndex = 100;
      returnHTML(
        'first-alert',
        item.content,
        item.position
      );
    });
  };

  render() {
    return (
      <div
        id="inner-modal"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: 'gray',
          top: 0,
          opacity: 0.8,
          zIndex: 10,
        }}
      >
        <button onClick={this.props.onClose}>CLOSE</button>
      </div>
    );
  }
};

function returnHTML(id, content, position) {
  const div = document.createElement('div');
  div.id = id;
  document.getElementById('inner-modal').appendChild(div);
  ReactDOM.render(
    <div
      style={{position: 'absolute',
        background: 'white',
        left: position[0],
        top: position[1]
      }}
    >
      {content}
    </div>,
  div);
}

class Tour extends React.Component {
  componentDidMount = () => {
    let modal = document.getElementById(this.props.portalId);
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'tour-modal';
      document.body.appendChild(modal);
    }
    this.modalElement = modal;
    this.componentDidUpdate();
  };

  onClose = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('tour-modal'));
  };

  componentWillUnmount = () => document.body.removeChild(this.modalElement);

  componentDidUpdate = () => this.props.open && ReactDOM.render(
    <Shape
      onClose={this.onClose}
      elements={this.props.elements}
    />,
    this.modalElement
  );

  render = () => null;
}

export default Tour;
