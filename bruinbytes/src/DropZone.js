import React from "react";
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Dropzone = ({ gates, id }) => (
    <div className="column col-4">
        <div className="divider" data-content={id} />
        <Droppable droppableId={id}>
        {provided => {
            return (
            <div className="menu gate-list" {...provided.droppableProps} ref={provided.innerRef}>
                {gates.map(({ name }, index) => (
                    <Gate key={name} name={name} index={index} />
                ))}
                {provided.placeholder}
            </div>
            );
        }}
        </Droppable>
    </div>
);

const Gate = ({ name, index }) => (
    <Draggable key={name} draggableId={name} index={index}>
        {provided => {
            return (
                <div className="menu-item tile tile-centered" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <figure style={{ backgroundColor: 'transparent' }} className="avatar tile-icon">
                        <img style={{ width: '5%', height: 'auto' }} src={`gate_icons/${name}.png`} alt={name} />
                    </figure>
                </div>
            );
        }}
    </Draggable>
);

export default Dropzone;