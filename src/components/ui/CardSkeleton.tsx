import React from 'react'

const CardSkeleton = () => {
  return (
    <div className="card shadow-md animate-pulse">
      <div className="h-48 bg-base-300"></div>
      <div className="flex-1 py-8 space-y-4 p-4 bg-base-content">
        <div className="w-full h-6 rounded bg-base-300"></div>
        <div className="w-full h-6 rounded bg-base-300"></div>
        <div className="w-3/4 h-6 rounded bg-base-300"></div>
      </div>
    </div>
  )
}

export default CardSkeleton
