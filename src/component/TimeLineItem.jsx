export const TimeLineItem = ({ año, titulo, description }) => {
  return (
    <>
    <div className="momento">
        <div className="header">
            <h3>{año}</h3>
            <h3>{titulo}</h3>
        </div>
        <div className="descripcion">
            <ul className="list-style">
            {
                description.map(item =>(
                        <li key={item[1]}>{item}</li>        
                    ))
            }
            </ul>
        </div>
    </div>
    </>
);
};
