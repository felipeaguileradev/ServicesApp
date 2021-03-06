import React from 'react'

const Stats = () => {
  return (
    <div className="w-full shadow stats">
      <div className="stat place-items-center place-content-center ">
        <div className="stat-title">Downloads</div>
        <div className="stat-value">310M</div>
        <div className="stat-desc">Jan 1st - Feb 1st</div>
      </div>
      <div className="stat place-items-center place-content-center">
        <div className="stat-title">New Users</div>
        <div className="stat-value text-success">4,200</div>
        <div className="stat-desc text-success">↗︎ 400 (22%)</div>
      </div>
      <div className="stat place-items-center place-content-center">
        <div className="stat-title">New Registers</div>
        <div className="stat-value text-error">1,200</div>
        <div className="stat-desc text-error">↘︎ 90 (14%)</div>
      </div>
    </div>
  )
}

export default Stats
