import React from 'react'

export const SkillsCard = ({name,url}) => {
  return (
    <>
      <div className="col-md-2 col-4 text-center">
          <img src={url} alt={name}  width='50px' height='50px' style={{filter:'grayscale(1)'}} />
          <h5 className='text-center mt-1'>{name}</h5>
      </div>
    </>
  )
}

 
