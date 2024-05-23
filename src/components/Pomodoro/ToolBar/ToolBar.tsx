import React from 'react'
import PlayList from '../PlayList/PlayList'
import UserMenu from '../UserMenu/UserMenu'
import Timer from '../Timer/Timer'

const ToolBar = () => {
  return (
    <div className=''>
      <div>
          <Timer />
      </div>
      <div className='flex gap-3'>
        <PlayList />
        <UserMenu />
      </div>
    </div>
  )
}

export default ToolBar
