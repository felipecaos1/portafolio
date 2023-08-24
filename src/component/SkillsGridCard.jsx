import {Listskills} from '../data/skill'
import { SkillsCard } from './SkillsCard'

export const SkillsGridCard = () => {
  return (
    <>
       <div className="container">
            <div className="row">
                {
                    Listskills.map( item => (
                        <SkillsCard key={item.id} {...item}/>
                    ))
                }
            </div>
        </div>
    </>
  )
}

 
