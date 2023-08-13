import { CurrentUser } from './CurrentUser'
import { UsersObjectType } from './HW2'
import { FC } from 'react'

type UserList2PropsType = {
  users: UsersObjectType
  filterUsers: () => void
}

export const UserList2: FC<UserList2PropsType> = ({ users, filterUsers }) => {
  return (
    <div id={'hw02-users'}>
      <h2>User List:</h2>

      <button id={'hw02-filter-button'} onClick={filterUsers}>
        SHOW ME FRIENDS FROM LA
      </button>

      <ul>
        {users.myFriends.map((user) => (
          <CurrentUser key={user.id} user={user} />
        ))}
      </ul>
    </div>
  )
}
