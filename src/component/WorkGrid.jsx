
import { WorkItem } from './WorkItem';

export const WorkGrid = ({data}) => {
    return (
        <>
            <div className="container mb-5">
                <div className="row">
                    {
                        data.map( item =>(
                            <WorkItem key={item.id} {...item}/>
                        ))
                    }
                </div>
            </div>
        </>
    );
}


