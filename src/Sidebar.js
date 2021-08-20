import { Button, IconButton } from '@material-ui/core'
import { AccessTime, Add, Duo, ExpandMore, Inbox, LabelImportant, NearMe, Person, Phone, Star } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { openSendMessage } from './features/mailSlice'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'

function Sidebar() {
  const dispatch = useDispatch()
  return (
    <div className="sidebar">
      <Button 
        startIcon={<Add fontSize="large" />} 
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
        >
        Compose
      </Button>
      <SidebarOption Icon={Inbox} title="Inbox" number={54} selected={true} />
      <SidebarOption Icon={Star} title="Starred" number={3} />
      <SidebarOption Icon={AccessTime} title="Snoozed" number={7} />
      <SidebarOption Icon={LabelImportant} title="Important" number={3} />
      <SidebarOption Icon={NearMe} title="Sent" number={3} />
      <SidebarOption Icon={ExpandMore} title="More" number={3} />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton><Person /></IconButton>
          <IconButton><Duo /></IconButton>
          <IconButton><Phone /></IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
