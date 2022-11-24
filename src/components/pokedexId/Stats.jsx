import React from 'react'
import './styles/stats.css'

const Stats = ({stats}) => {
    return (
        <div>
            <h2 className='stat-title'>Stats</h2>
            {
                stats?.map( stat => (
                <>
                    <div className='stat-data'>
                        <p className='stat-name'>{stat.stat.name}</p>
                        <p className='stat-value'>{stat.base_stat + '/ 150'}</p>
                    </div>
                    <div className='progress-bar'>
                        <div className='progress-bar-int' style={{width: (stat.base_stat/1.50)+'%' }}></div>
                    </div> 
                </>
                ))
            }
        </div>
    )  
}

export default Stats