
const EvolutionRequirements = (DetailDatas) => {
  
  let levelupRequirments = [];
   
  if(DetailDatas) {
    
    if (DetailDatas.held_item) {
      levelupRequirments.push(
        <p className="evolution_Details">Hold {DetailDatas.held_item.name}</p>
      )
    }

    if (DetailDatas.known_move) {
      levelupRequirments.push(
        <p className="evolution_Details">After {DetailDatas.known_move.name} learned</p>
      )
    }

    if (DetailDatas.min_level) {
      levelupRequirments.push(
        <p className="evolution_Details">Level {DetailDatas.min_level}</p>
      )
    }
    
    if (DetailDatas.min_happiness) {
      levelupRequirments.push(
        <p className="evolution_Details">Happiness {DetailDatas.min_happiness}</p>
      )
    }

    if (DetailDatas.min_beauty) {
      levelupRequirments.push(
        <p className="evolution_Details">Beauty {DetailDatas.min_beauty}</p>
      )
    }

    if (DetailDatas.location) {
      levelupRequirments.push(
        <p className="evolution_Details">Level up in {DetailDatas.location.name} area</p>
      )
    }

    if (DetailDatas.time_of_day) {
      levelupRequirments.push(
        <p className="evolution_Details -mt-2">{DetailDatas.time_of_day}time</p>
      )
    }

    if (DetailDatas.party_species) {
      levelupRequirments.push(
        <p className="evolution_Details">with { DetailDatas.party_species.name} <br/> in party</p>
      )
    }

    if (DetailDatas.party_type) {
      levelupRequirments.push(
        <p className="evolution_Details -mt-2">{ DetailDatas.party_type.name} type <br/> Pokémon in party</p>
      )
    }
    
    return { levelupRequirments }
  }
  
 
}

export default EvolutionRequirements;
