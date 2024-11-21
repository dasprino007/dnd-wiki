import { useEffect, useState } from 'react'
import "../css/wiki.css"
import { useParams } from 'react-router-dom'
import MonsterInfoboxes from '../components/infoboxes/MonsterInfobox'

function MonsterDetail() {
  const { id } = useParams()
  const [monster, setMonster] = useState([])
  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/monsters/${id}`)
      .then(data => data.json())
      .then(data => setMonster(data))
      .catch(err => console.error(err))
  })
  const monsterData = {
    image: monster.image,
    name: monster.name,
    size: monster.size,
    type: monster.type,
    alignment: monster.alignment,
    strength: monster.strength,
    dexterity: monster.dexterity,
    constitution: monster.constitution,
    wisdom: monster.wisdom,
    charisma: monster.charisma,
    hit_points: monster.hit_points,
    armor_class: monster.armor_class,
    hit_dice: monster.hit_dice,
    speed: monster.speed
  };

  return (
    <>
      <section className='flex flex-row gap-3'>
        <section className='text-test'>
          <h1>{monster.name}</h1>
          {monster?.desc ? <p>{monster?.desc}</p> : undefined}
          <div id='status'>
          <h2>Status</h2>

          </div>
          <div id='actions'>
          <h2>Ações</h2>
            {monster?.actions?.map(data => {
                return (
                  <>
                  <div className='text-actions'>
                    <h3>{data.name}</h3>
                    {data?.multiattack_type ? <span className='subtext'>multi ataque : {data?.multiattack_type}</span> : undefined}
                    <p>{data.desc}</p>
                    {data?.attack_bonus ? <><span>Ataque bonus :{data?.attack_bonus}</span></> : undefined}

                    {data?.damage ? <><h4>Danos:</h4></> : undefined}
                    <ul className='mb-2'>
                    {data.damage?.map(dano => {
                      return(
                        <>
                          <li><span>{dano?.damage_type.name}</span>, dano: {dano?.damage_dice}</li>
                        </>
                      )
                    })}
                    </ul>

                    {data?.actions.length > 1 ? <><h4>tipos de ações</h4></> : undefined}
                      {data.actions?.map(action => {
                        return(
                          <>
                          <h5>{action.action_name}</h5>
                          <p>tipo: <span>{action.type}</span></p>
                          </>
                        )
                      })}
                  </div>
                    
                  </>)
            })}
          </div>
        </section>
            <MonsterInfoboxes monster={monsterData}/>
      </section>
    </>
  )
}

export default MonsterDetail
