
const EvolutionRequirements = (DetailDatas) => {
  
  let levelupRequirments = [];
   
  if(DetailDatas) {
    if (DetailDatas.min_level) {
      levelupRequirments.push(
        <p className="evolution_Details" key={'level'+ DetailDatas.min_level}>
          Level {DetailDatas.min_level}
        </p>
      )
    }
    
    if (DetailDatas.min_happiness) {
      levelupRequirments.push(
        <p className="evolution_Details" key={DetailDatas.min_happiness}>
          Happiness {DetailDatas.min_happiness}
        </p>
      )
    }

    if (DetailDatas.min_beauty) {
      levelupRequirments.push(
        <p className="evolution_Details" key={DetailDatas.min_beauty} >
          Beauty {DetailDatas.min_beauty}
        </p>
      )
    }
    
    if (DetailDatas.held_item) {
      levelupRequirments.push(
        <p className="evolution_Details" key={DetailDatas.held_item.name}>
          Hold {DetailDatas.held_item.name}
        </p>
      )
    }

    if (DetailDatas.known_move) {
      levelupRequirments.push(
        <p className="evolution_Details" key={DetailDatas.known_move.name} >
          After {DetailDatas.known_move.name} learned
        </p>
      )
    }

    if (DetailDatas.known_move_type) {
      levelupRequirments.push(
        <p className="evolution_Details" key={DetailDatas.known_move_type.name} >
          knowing {DetailDatas.known_move_type.name} move 
        </p>
      )
    }

    if (DetailDatas.location) {
      levelupRequirments.push(
        <p className="evolution_Details" key={DetailDatas.location.name}>
          Level up in {DetailDatas.location.name} area
        </p>
      )
    }

    if (DetailDatas.time_of_day) {
      levelupRequirments.push(
        <p className="evolution_Details -mt-2" key={DetailDatas.time_of_day}>
          {DetailDatas.time_of_day}time
        </p>
      )
    }

    if (DetailDatas.party_species) {
      levelupRequirments.push(
        <p className="evolution_Details" key={DetailDatas.party_species.name}>
          with { DetailDatas.party_species.name} <br/> in party
        </p>
      )
    }

    if (DetailDatas.party_type) {
      levelupRequirments.push(
        <p className="evolution_Details -mt-2" key={DetailDatas.party_type.name}>
          { DetailDatas.party_type.name} type <br/> Pokémon in party
        </p>
      )
    }

    return { levelupRequirments }
  }
  
 
}

export default EvolutionRequirements;
