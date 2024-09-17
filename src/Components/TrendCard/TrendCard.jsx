import React from 'react'
import { TrendsData } from '../../Data/TrendsData'
import Share from '../../img/share.png'

const TrendCard = (data) => {
  return (
    <div className="TrendCard bg-white/70 dark:bg-slate-800 rounded-3xl gap-1 p-5 items-center">

        <h3 className="font-bold text-center pb-2 dark:text-white">Trends Today</h3>

        {TrendsData.map((trend) => {
            return (
                <div className="trend flex flex-col gap-1 p-1 dark:text-white">
                    <span><b>#{trend.name}</b></span>
                    <span className='text-xs dark:text-white/80'>{trend.shares}K shares</span>
                    <span></span>
                    <hr className='h-[0.1rem] border-none bg-gray-300 dark:bg-blue-700/20'/>
                </div>
            )
        })}
    </div>
  )
}

export default TrendCard
