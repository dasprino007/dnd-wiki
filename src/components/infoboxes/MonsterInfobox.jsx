function MonsterInfoboxes(monster) {
    return ( 
        <figure className='infocard'>
        <div>
          <img className='thumbnail' src={`https://www.dnd5eapi.co${monster.image}`} alt="" />
          <h2 id='name' className='text-xl'>
            {monster.name}
          </h2>
          <p id='size type aligment' className='subtext'>
            {monster.size} {monster.type}, {monster.alignment}
          </p>
        </div>

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

        <h2 className='text-lg'>status:</h2>
        <div>
          <h3>Hitpoints: <span>{monster.hit_points}</span></h3>
          <h3>Armor class: {monster?.armor_class?.map(armor => `${armor.value}, ${armor.type}`)}</h3>
          <h3>Dado de dano: <span>{monster.hit_dice}</span></h3>
          <h3>velocidade: <span>{monster?.speed?.walk}</span></h3>
        </div>
      </figure>
     );
}

export default MonsterInfoboxes;