import { useEffect, useState } from 'react'
import "./css/monster.css"
function App() {
  const [monster, setMonster] = useState([])
  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/monsters/adult-black-dragon")
    .then(data => data.json())
    .then(data => setMonster(data))
    .catch(err => console.error(err))
  })

  return (
    <>
    <aside>
      <h2>menu temporario</h2>
    </aside>
    <section className='flex flex-row gap-3'>
      <div className='text-test'>
        <h1>{monster.name}</h1>
        <h2>proficiencias</h2>
      </div>
      <figure className='infocard'>
      <div>
        <img className='thumbnail' src={`https://www.dnd5eapi.co${monster.image}`} alt="" />
        <h2 id='name'>
          {monster.name}
        </h2>
        <h3 id='type aligment' className='subtext'>
          {monster.type}, {monster.alignment}
        </h3>
      </div>
      <h2>stats</h2>
      <ul className='atributes flex gap-2'>
          <li id='strength'>
              <h4>STR</h4>
              <p>{monster.strength}</p>
          </li>
          <li id='dexterity'>
              <h4>DEX</h4>
              <p>{monster.dexterity}</p>
          </li>
          <li id='constitution'>
              <h4>CON</h4>
              <p>{monster.constitution}</p>
          </li>
          <li id='wisdom'>
              <h4>WIS</h4>
              <p>{monster.wisdom}</p>
          </li>
          <li id='charisma'>
              <h4>CHA</h4>
              <p>{monster.charisma}</p>
          </li>
        </ul>
      <div>
          <h3>Armor class: {monster?.armor_class?.map(armor => `${armor.value}, ${armor.type}`)}</h3>
          <h3>Hitpoints: <span>{monster.hit_points}</span></h3>
          <h3>Dado de dano: <span>{monster.hit_dice}</span></h3>
          <h3>velocidade: <span>{monster?.speed?.walk}</span></h3>
      </div>
      </figure>
    </section>
    </>
  )
}

export default App
