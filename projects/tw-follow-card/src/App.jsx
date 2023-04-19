import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  const formattedUsername = (username) => <span>@{username}</span>
  const users = [
    {
      username: 'mat',
      name: 'matheo',
      isFollowing: true
    },
    {
      username: 'gabriel',
      name: 'gabriel',
      isFollowing: false
    }
  ]
  return (
    <section className='App'>
      {users.map((user) => {
        return (
          <TwitterFollowCard
            key={user.username}
            formattedUsername={formattedUsername}
            username={user.username}
            initialIsFollowing={user.isFollowing}
          >
            {user.name}
          </TwitterFollowCard>
        )
      })}
    </section>
  )
}
