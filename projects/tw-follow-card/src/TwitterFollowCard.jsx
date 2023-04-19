import { useState } from 'react'

export function TwitterFollowCard ({ children, formattedUsername, username, initialIsFollowing = false }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

  const text = isFollowing ? 'Following' : 'Follow'
  const buttonClassName = isFollowing
    ? 'tw-followButton is-following'
    : 'tw-followButton'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          src={`https://unavatar.io/${username}`}
          alt='Scioli'
          className='tw-followCard-avatar'
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-username'>{formattedUsername(username)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollowing'>Stop Following</span>
        </button>
      </aside>
    </article>
  )
}
