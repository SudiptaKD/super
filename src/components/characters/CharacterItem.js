import React from 'react'

const CharacterItem = ({ item }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.images.lg} alt='' />
                </div>
            <div className='card-back'>
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>Real Name:</strong> {item.biography.fullName}
              </li>
              <li>
                <strong>Race:</strong> {item.appearance.race} 
              </li>
              <li>
                <strong>Publisher:</strong> {item.biography.publisher}
              </li>
              <li>
                <strong>First Appearance:</strong> {item.biography.firstAppearance}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default CharacterItem
