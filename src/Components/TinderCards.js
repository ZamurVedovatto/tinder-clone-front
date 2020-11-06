import React, { useState } from 'react'
import './TinderCards.scss'
import TinderCard from 'react-tinder-card';

export default function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://peaklife.in/wp-content/uploads/2019/06/elon-musk-image.jpg"
    },
    {
      name: "Jeff Bezos",
      url: "https://computerworld.com.br/wp-content/uploads/2020/01/Em-meio-a-investiga%C3%A7%C3%B5es-e-protestos-Bezos-anuncia-US-1-bilh%C3%A3o-para-%C3%8Dndia.jpg"
    },
  ])

  const swiped = (direction, nameToDelete) => {
    console.log("remove", nameToDelete)
    // setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name, " left the screen")
  }

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {
          people.map((person) => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          ))
        }
      </div>
    </div>
  )
}
