import { recentWorkList } from "../data/RecentWork"
import RecentWorkCard from "./RecentWorkCard"


 export const RecentWorkGrid = () => {

  return (
    <>
        <div className="container px-md-1 px-4">
            <div className="row g-3 mb-5">
                {
                    recentWorkList.map( item => (
                        <RecentWorkCard key={item.id} {...item}/>
                        ))
                }
            </div>
        </div>
    </>
  )
}

