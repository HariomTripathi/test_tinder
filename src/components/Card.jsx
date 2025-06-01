import React from 'react'

const Card = ({user}) => {
  return (
    <div>
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={user?.photourl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{user?.firstName+" "+user?.secondName}</h2>
    <p>{user?.gender+" "+user?.age}</p>
   <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card