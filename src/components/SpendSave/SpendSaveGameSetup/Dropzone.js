import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'


const Dropzone = ({ isDropDisabled, choices, id }) => (
  
    <div className=''>
    
      <Droppable droppableId={id} isDropDisabled={isDropDisabled}>
        {provided => {
          return (
            <div className="grid grid-rows-4 grid-flow-col" {...provided.droppableProps} ref={provided.innerRef}>
              {choices.map(({ name }, index) => (
                <Choice key={name} name={name} index={index} />
              ))}
              {provided.placeholder}
              <div>
                
              </div>
            </div>
            
          );
        }}
      </Droppable>
    </div>
    
  );
  
  const Choice = ({ name, index }) => (
    <Draggable key={name} draggableId={name} index={index}>
      {provided => {
        return (
          <div
            className=""
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <figure style={{ backgroundColor: 'transparent',
          height: 100, width: 100 }} className="avatar tile-icon">
              <img src={`../spendSaveIcons/${name.toLowerCase().replace(' ', '-')}.png`} alt={name} />
            </figure>
            
          </div>
        );
      }}
    </Draggable>
  );
  
  export default Dropzone;