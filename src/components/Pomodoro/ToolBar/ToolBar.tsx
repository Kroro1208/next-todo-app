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
      <div className='flex items-center justify-between gap-3 px-3'>
        <PlayList />
        <p>切り替えを大切に</p>
        <UserMenu />
      </div>
    </div>
  )
}

export default ToolBar
