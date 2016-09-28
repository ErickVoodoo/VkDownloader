import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const divIDS = {
  main: 'tour-modal',
  shadow: 'modal-shadow',
  closeButton: 'close-button',
  nextButton: 'next-button',
};

const createDefaultButton = ({ label, onClick }) => <button onClick={onClick}>{label}</button>;

const checkAndFixElementAttributes = (element) => {
  const fixedElement = element;
  if (typeof element.id !== 'string') {
    fixedElement.id = null;
  }
  if (typeof element.position !== 'object') {
    fixedElement.id = null;
  } else if (element.position.length !== 2) {
    fixedElement.position[0] = fixedElement.position[0] || 0;
    fixedElement.position[1] = fixedElement.position[1] || 0;
  }
  return fixedElement;
};

const unfade = (element) => {
  const el = element;
  let op = 0.1;
  let left = 54;
  el.style.display = 'block';
  el.style.left = -left;
  const timer = setInterval(() => {
    if (op >= 1) {
      clearInterval(timer);
    }
    el.style.opacity = op;
    el.style.left = -left;
    el.style.filter = `alpha(opacity=${op * 100})`;
    op += op * 0.1;
    left -= 2;
  }, 10);
};

const createEmptyDiv = ({ id = '', type = 'div', appendTo = divIDS.main, style = {} }) => {
  const block = document.createElement(type);
  block.id = id;
  for (let i = 0; i < Object.keys(style).length; i++) {
    block.style[Object.keys(style)[i]] = style[Object.keys(style)[i]];
  }
  document.getElementById(appendTo).appendChild(block);
  return block;
};

const createHint = ({ id, content, position, onClickNextStep, nextButton }) => {
  const div = createEmptyDiv({
    id,
    style: {
      position: 'absolute',
      marginLeft: `calc(${((position[0]) * 100) / window.innerWidth}% - 32px)`,
      top: position[1] - 32,
      background: 'white',
      zIndex: 12,
      opacity: 0,
    },
  });

  unfade(document.getElementById(id));

  ReactDOM.render(
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 16,
      }}
    >
      {content}
      { nextButton ?
        <div
          style={{
            marginTop: 16,
          }}
          onClick={onClickNextStep}
        >
          {nextButton}
        </div> :
        createDefaultButton({ label: 'Next', onClick: onClickNextStep })
      }
    </div>,
  div);
};

class Shape extends React.Component {
  static propTypes = {
    onClickDestroy: PropTypes.func,
    elements: PropTypes.array,
    nextButton: PropTypes.element,
    closeButton: PropTypes.element,
  };

  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };
  }

  componentDidMount = () => {
    this.setActiveStepElement();
    createEmptyDiv({
      id: divIDS.shadow,
      style: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        background: '#000',
        top: 0,
        opacity: 0.8,
        zIndex: 10,
      },
    });
    createEmptyDiv({
      id: divIDS.closeButton,
      style: {
        position: 'fixed',
        bottom: 0,
        textAlign: 'center',
        right: 0,
        left: 0,
        zIndex: 13,
        marginBottom: 40,
      },
    });

    ReactDOM.render(
      this.props.closeButton ?
        <div onClick={this.props.onClickDestroy}>
          {this.props.closeButton}
        </div> :
      createDefaultButton({ label: 'close', onClick: this.props.onClickDestroy }),
      document.getElementById(divIDS.closeButton)
    );
  }

  componentDidUpdate = () => {
    this.setActiveStepElement();
  }

  onClickNextStep = () => {
    this.setState({
      step: this.state.step + 1,
    });
    this.forceUpdate();
  };

  setActiveStepElement = () => {
    const { elements } = this.props;
    const element = checkAndFixElementAttributes(elements[this.state.step]);
    const divElement = document.getElementById(element.id);
    if (divElement) {
      this.clearModalAndDropZindex();
      divElement.style.zIndex = 11;
      const { offsetLeft, offsetTop } = divElement;
      createHint({
        id: `${element.id}-hint`,
        content: element.content,
        position: [
          offsetLeft - element.position[0],
          offsetTop - element.position[1],
        ],
        onClickNextStep:
          this.state.step !== (elements.length - 1) ? this.onClickNextStep : this.props.onClickDestroy,
        nextButton: this.props.nextButton,
      });
    } else {
      this.onClickNextStep();
    }
  };

  clearModalAndDropZindex = () => {
    const modalNode = document.getElementById(divIDS.main);

    for (let i = 0; i < modalNode.childNodes.length; i++) {
      if ((modalNode.childNodes[i].nodeName === 'div' ||
        modalNode.childNodes[i].nodeName === 'DIV') &&
        modalNode.childNodes[i].id !== divIDS.shadow &&
        modalNode.childNodes[i].id !== divIDS.closeButton
      ) {
        modalNode.removeChild(modalNode.childNodes[i]);
      }
    }

    const { elements } = this.props;
    elements.forEach((item) => {
      if (document.getElementById(item.id)) {
        document.getElementById(item.id).style.zIndex = 0;
      }
    });
  };

  render = () => null;
}

class Tour extends React.Component {
  static propTypes = {
    open: PropTypes.bool,
    elements: PropTypes.array,
    nextButton: PropTypes.element,
    closeButton: PropTypes.element,
    onClose: PropTypes.func,
  };

  componentDidMount = () => {
    let modal = document.getElementById('tour-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'tour-modal';
      document.body.appendChild(modal);
    }
    this.modalElement = modal;
    this.componentDidUpdate();
  };

  componentDidUpdate = () => this.props.open && ReactDOM.render(
    <Shape
      onClickDestroy={this.onClickDestroy}
      nextButton={this.props.nextButton}
      closeButton={this.props.closeButton}
      elements={this.props.elements}
    />,
    this.modalElement
  );

  componentWillUnmount = () => document.body.removeChild(this.modalElement);

  onClickDestroy = () => {
    this.props.onClose();
    ReactDOM.unmountComponentAtNode(document.getElementById('tour-modal'));
  };

  render = () => null;
}

export default Tour;

/* eslint-disable */
// <Tour
//   open={this.state.open} //открыт сейчас тур или нет
//   onClose={this.onOpen} //дополнительное действие на закрытие тура
//   nextButton={ //внешний вид next кнопки
//     <MuiThemeProvider muiTheme={getMuiTheme()}>
//       <RaisedButton
//         label="next"
//       />
//     </MuiThemeProvider>}
//   closeButton={ //внешний вид close кнопки
//     <MuiThemeProvider muiTheme={getMuiTheme()}>
//       <RaisedButton
//         label="close"
//       />
//     </MuiThemeProvider>}
//   elements={[ //элементы которые будут подсвечены
//     {
//       id: 'first-block', //id элемента в dom дереве
//       position: [100, 100], // позиция на которую надо делать сдвиг относительно родительского верхнего левого угла [x, y]
//       content: <div>Here is first block!</div>, //контент который будет показываться пользователю на определенном степе
//     },
//     {
//       id: 'second-block',
//       position: [100, 100],
//       content: <div>Here is second block!</div>,
//     },
//     {
//       id: 'third-block',
//       position: [100, 100],
//       content: <div>Here is third block!</div>,
//     },
//     {
//       id: 'fourth-block',
//       position: [100, 100],
//       content: <div>Here is fourth block!</div>,
//     },
//   ]}
// />
