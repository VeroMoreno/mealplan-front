import React, { useState, useEffect, useContext } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { getLunchs, getDinners } from '../../../services/meal-service';
import Card from './Card/Card';
import { MenuPanel } from './menuCards.style';
// import StaticContext from '../../../context/Context';

const MenuCards = () => {
  // const { mealDataContext, setMealDataContext } = useContext(StaticContext);
  const [lunchMealData, setLunchMeals] = useState([]);
  const [dinnerMealData, setDinnerMeals] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      const lunchData = await getLunchs();
      setLunchMeals(lunchData);
      const dinnerData = await getDinners();
      setDinnerMeals(dinnerData);
    };
    getInfo();
  }, []);

  const week = ['Mon', 'Thu', 'Wed', 'Thur', 'Fri'];

  const reorderTWO = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEndOne = (result) => {
    const { destination, source } = result;
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;
    const newElements = reorderTWO(lunchMealData, source.index, destination.index);
    setLunchMeals(newElements);
  };

  const onDragEndTwo = (result) => {
    const { destination, source } = result;
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;
    const newElements = reorderTWO(dinnerMealData, source.index, destination.index);
    setDinnerMeals(newElements);
  };

  return (
    <MenuPanel>
      <main>
        <div className="calendar">
          <div className="calendar__header">
            {week && week.map((day) => (
              <p key={day}>{day}</p>
            ))}
          </div>
          { lunchMealData && (
          <DragDropContext onDragEnd={onDragEndOne}/* where happens */>
            <ul className="calendar__week lunch">
              {lunchMealData.slice(0, 5).map((el, i) => (
                <Droppable droppableId={el.id} key={el.id}/* drop items: 2 COLUMNAS */>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      className="calendar__day day"
                      {...provided.droppableProps}
                    >
                      <Draggable draggableId={el.id} index={i} key={el.id}/* PUEDOMOVER(CARDS) */>
                        {(provided) => (
                          // eslint-disable-next-line max-len
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <Card
                              key={el}
                              name={el.name}
                            />
                          </div>
                        )}
                      </Draggable>
                      {provided.placeholder}
                    </li>
                  )}
                </Droppable>
              ))}
            </ul>
          </DragDropContext>
          )}
          { dinnerMealData && (
          <DragDropContext onDragEnd={onDragEndTwo}/* AREA DONDE PASA */>
            <ul className="calendar__week lunch">
              {dinnerMealData.slice(0, 5).map((el, i) => (
                // eslint-disable-next-line max-len
                <Droppable droppableId={el.id} key={el.id}/* ZONAS DONDE SOLTAMOS ELEMENTOS: 2 COLUMNAS */>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      className="calendar__day day"
                      {...provided.droppableProps}
                    >
                      <Draggable draggableId={el.id} index={i} key={el.id}/* PUEDOMOVER(CARDS) */>
                        {(provided) => (
                          // eslint-disable-next-line max-len
                          <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <Card
                              key={el}
                              name={el.name}
                            />
                          </div>
                        )}
                      </Draggable>
                      {provided.placeholder}
                    </li>
                  )}
                </Droppable>
              ))}
            </ul>
          </DragDropContext>
          )}
        </div>
      </main>
    </MenuPanel>
  );
};

export default MenuCards;
