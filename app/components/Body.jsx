import React from 'react'
import Secondleftmenu from "./secondleftmenu"
import LeftSidemenu from "./leftSidemenu"
import Chat from "./Chat"
import RightSidemenu from "./RightSidemenu"

const Body = () => {
  return (
    <div className='flex h-dvh max-h-screen'>
      <LeftSidemenu />
      <Secondleftmenu />
      <Chat />
      <RightSidemenu />
    </div>
  )
}

export default Body
