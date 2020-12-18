import React, { useEffect, useContext, useRef } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Card from './Card/Card';
import { MenuPanel } from './menuCards.style';
import DataContext from '../../../context/Context';

const MenuCards = () => {
  const {
    lunchData, setLunchData, dinnerData, setDinnerData, setDayOfWeek,
  } = useContext(DataContext);
  // const [lunchData, setLunchData] = useState([]);
  // const [dinnerMealData, setDinnerMeals] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      // const lunchData = await getLunchs();
      // setLunchMeals(lunchData);
      // const dinnerData = await getDinners();
      // setDinnerMeals(dinnerData);
    };
    getInfo();
  }, []);

  const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  const reorder = (list, posStart, posEnd) => {
    const result = Array.from(list.slice(0, 5));
    const valEnd = result[posEnd];
    result[posEnd] = result[posStart];
    result[posStart] = valEnd;
    return result;
  };

  const onDragEndOne = (result) => {
    const { destination, source } = result;
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;
    const newElements = reorder(lunchData, source.index, destination.index);
    setLunchData(newElements);
  };

  const onDragEndTwo = (result) => {
    const { destination, source } = result;
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;
    const newElements = reorder(dinnerData, source.index, destination.index);
    setDinnerData(newElements);
  };

  const buttonRef = useRef(null);
  const getDayNutrients = (dayWeek) => {
    setDayOfWeek(dayWeek);
  };

  return (
    <MenuPanel>
      <main>
        <div className="calendar">
          <div className="calendar__header">
            {week && week.map((day) => (
              <button
                ref={buttonRef}
                type="button"
                onClick={() => getDayNutrients(day)}
                key={day}
              >
                {day}
              </button>
            ))}
          </div>
          { lunchData && (
          <DragDropContext onDragEnd={onDragEndOne}/* where happens */>
            <ul className="calendar__week lunch">
              {lunchData.slice(0, 5).map((el, i) => (
                <Droppable droppableId={el.id} key={el.id}/* drop items: two columns */>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      className="calendar__day day"
                      {...provided.droppableProps}
                    >
                      <Draggable draggableId={el.id} index={i} key={el.id}/* canmove(CARDS) */>
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
          { dinnerData && (
          <DragDropContext onDragEnd={onDragEndTwo}/* AREA DONDE PASA */>
            <ul className="calendar__week lunch">
              {dinnerData.slice(0, 5).map((el, i) => (
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
        {(!dinnerData || !lunchData) && (
        <div className="clickToStart blink">
          <p>
            Click
            {' '}
            <span>random button</span>
            {' '}
            to start
          </p>
        </div>
        )}
      </main>
    </MenuPanel>
  );
};

export default MenuCards;
