// import React, {useContext} from 'react'
// import UserContext from '../Context/UserContext'

// function profile() {
//     const {User} = useContext(UserContext)
    
// if (!User) return <div>please Login</div>

// return <div>Welcome {User.username}</div>
// }

// export default profile;
import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    
    if (!user) return <div>please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile
