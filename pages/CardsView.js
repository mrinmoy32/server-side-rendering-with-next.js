import React from 'react'
import Card from './Card'
import { initialCards, addItem } from './cardsSlice'
import { useSelector, useDispatch } from 'react-redux'
import styles from './cards.module.css'

function CardsView() {
    const cards = useSelector((state) => state.cards.cards);
    const dispatch = useDispatch();
    dispatch(initialCards());
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <img src='logo.png' className={styles.logo} />
            </header>
            <div className={styles.grid}>
                {cards.map(card => <Card key={card.id} />)}
            </div>
            {/* <button onClick={()=>{dispatch(additem)}}>Add Item</button> */}
        </div>
    )
}

export default CardsView