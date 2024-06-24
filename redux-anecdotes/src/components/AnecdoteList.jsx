import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { addNotification, deleteNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return(
    <li>
      {anecdote.content}<br />
      has {anecdote.votes} votes
      <button onClick={handleClick}> vote </button>
    </li>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const handleVote = (anecdote) => {
    dispatch(voteAnecdote(anecdote.id))
    dispatch(addNotification(`you voted '${anecdote.content}'`))
    setTimeout(() => {
      dispatch(deleteNotification())
    }, 5000)
  }


  return(
    <ul>
      {anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase())).sort((a, b) => b.votes - a.votes).map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => 
            handleVote(anecdote)
          }
        />
      )}
    </ul>
  )
}

export default AnecdoteList
