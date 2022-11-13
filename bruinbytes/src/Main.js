import Dropzone from './DropZone';
import { GATES } from './data';
import { move } from './functions';
import { DragDropContext } from 'react-beautiful-dnd';
import React from "react";

const initialState = {
  populate: GATES,
  empty: ["hello"],
};

class Main extends React.Component {
  state = initialState;

  onDragEnd = ({ source, destination }) => {
    if (!destination) {
      return;
    }

    this.setState(state => {
      return move(state, source, destination);
    });
  };

  render() {
    const { empty, populate } = this.state;
    return (
      <div className="Main">
        <h1 className="text-center">Drag and Drop Logic Gates</h1>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="container">
            <div className="rows">
              <Dropzone gates={this.state[empty]} id={GATES.type} />
              <Dropzone gates={populate} id="start" />
            </div>
          </div>
        </DragDropContext>
      </div>
    );
  };
};

export default Main;
