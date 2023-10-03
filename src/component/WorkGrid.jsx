
import { WorkItem } from './WorkItem';

export const WorkGrid = ({data}) => {
    return (
        <>
            <div className="container mb-5 px-md-1 px-4">
                <div className="row">
                    {
                        data.map( item =>(
                            <WorkItem key={item.id+item.name[0]} {...item}/>
                        ))
                    }
                </div>
            </div>
        </>
    );
}


