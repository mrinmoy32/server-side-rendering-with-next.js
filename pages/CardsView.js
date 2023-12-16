import React, { useEffect } from 'react'
import Card from './Card'
import { initialCards, addItem } from './cardsSlice'
import { useSelector, useDispatch } from 'react-redux'
import styles from './cards.module.css'
import { v4 as uuidv4 } from 'uuid';

function CardsView() {
    const myUuid = uuidv4();
    const cards = useSelector((state) => state.cards.cards);
    const dispatch = useDispatch();
    useEffect(() => { dispatch(initialCards()) }, [])

    const newItem = {
        id: myUuid,
        "animation": "card",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."
    }
    console.log(cards)
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <img src='logo.png' className={styles.logo} />
            </header>
            <div className={styles.grid}>
                {cards.map(card => <Card key={card.id} />)}
            </div>
            <button onClick={() => { dispatch(addItem(newItem)) }}>Add Item</button>
        </div>
    )
}

export default CardsView