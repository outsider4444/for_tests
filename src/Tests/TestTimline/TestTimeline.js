import React, {useState} from 'react';
import classes from "./TestTimeline.module.css";
import {Timeline} from 'primereact/timeline';
import {PrimeReactProvider} from 'primereact/api';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import {Link, NavLink} from "react-router-dom";


const TestTimeline = (props) => {
    // const [cardList, setCardList] = useState([
    //     {id: 1, order: 1, text: "Карточка 1"},
    //     {id: 2, order: 2, text: "Карточка 2"},
    //     {id: 3, order: 3, text: "Карточка 3"},
    //     {id: 4, order: 4, text: "Карточка 4"},
    // ])
    const [currentCard, setCurrentCard] = useState(null)

    function dragStartHandler(e, card) {
        console.log(card)
        setCurrentCard(card);
    }

    function dragEndHandler(e) {
        e.target.style.backgroundColor = "white"
    }

    function dragOverHandler(e) {
        e.preventDefault()
        e.target.style.backgroundColor = "lightgray"
    }

    function dropHandler(e, card) {
        e.preventDefault();
        setEventList(eventList.map(c => {
            if (c.id === card.id) {
                return {...c, order: currentCard.order}
            }
            if (c.id === currentCard.id) {
                return {...c, order: card.order}
            }
            return c
        }))
        e.target.style.backgroundColor = "white"
    }

    const sortCards = (a, b) => {
        if (a.order > b.order) {
            return 1;
        } else {
            return -1;
        }
    }
    const years = ["998", "2020", "2023", "2022"]
    const [eventList, setEventList] = useState([
        {id: 1, order: 1, text: "Петр 1"},
        {id: 2, order: 2, text: "Петр 2"},
        {id: 3, order: 3, text: "Петр 3"},
        {id: 4, order: 4, text: "Петр 4"},
    ])

    function check(){
        console.log(eventList)
    }

    return (
        <div className={classes.content}>
            <PrimeReactProvider>
                <div className={classes.card_timeline}>
                    <Timeline value={years} className={classes.timeLineBar + " p-timeline-left"} layout="horizontal" align="bottom"
                              content={(item) => item}/>
                    <div className={classes.eventsList}>
                        {eventList.sort(sortCards).map(el =>
                            <div key={el.id}
                                 onDragStart={(e) => dragStartHandler(e, el)}
                                 onDragLeave={(e) => dragEndHandler(e)}
                                 onDragEnd={(e) => dragEndHandler(e)}
                                 onDragOver={(e) => dragOverHandler(e)}
                                 onDrop={(e) => dropHandler(e, el)}
                                 draggable={true}
                                 className={classes.eventPlaceDefault}>{el.text}</div>
                        )}
                    </div>
                </div>
            </PrimeReactProvider>
            <br/>
            <button onClick={check}>Проверить</button>
            <NavLink to={"/test/"}>Выйти</NavLink>
        </div>
    );
};

export default TestTimeline;
