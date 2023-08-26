import {Listskills} from '../data/skill'
import { SkillsCard } from './SkillsCard'

export const SkillsGridCard = () => {
  return (
    <>
       <div className="container px-md-1 px-4">
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

 
