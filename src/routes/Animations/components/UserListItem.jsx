import React from 'react'
import './UserListItem.scss'
import posed from 'react-pose'

const UserListItem = React.forwardRef((props, ref) => {
    return (
        <li ref={ref} className="UserListItem">
            <img src={props.photo} alt="" />
            <p>{props.name}</p>
        </li>
    )
})

// opacity: () => {} is necessary to rerender the component,
// as when it's spawned it has no pose
const PosedUserListItem = posed(UserListItem)({
    open: { y: 0, opacity: () => {} },
    closed: { y: 20, opacity: () => {} }
})

export default PosedUserListItem