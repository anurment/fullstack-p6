import { useSelector } from 'react-redux'
//import { addNotification, deleteNotification } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  
  if (notification) {
    return (
      <div style={style}>
        {notification}
      </div>
    )
  } else {
    return null
  }
}

export default Notification
