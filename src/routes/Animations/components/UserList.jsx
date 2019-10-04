import React from 'react'
import './UserList.scss'
import UserListItem from './UserListItem.jsx'
import LoadingButton from './LoadingButton.jsx'
import posed from 'react-pose';

const PosedUl = posed.ul({
    open: {
        staggerChildren: 200,
        transition: { duration: 1000 }
    },
    closed: {
    }
});

export default class UserList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            loading: false,
            users: []
        }
    }

    componentDidMount() {
        this.fetchUsers()
    }

    fetchUsers = () => {
        this.setState({users: [], loading: true })

        fetch('https://uifaces.co/api?limit=6', {
            method: 'GET',
            headers: {
                "X-API-KEY": "287d5fe3e37390872df11b733a78cc"
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('Failed to get users from API')
                }
            })
            .then(users => {
                this.setState({ users })
            })
            .catch(err => {
                this.setState({ error: err })
                console.error(err)
            })
            .finally(() => this.setState({ loading: false }))
    }

    render() {
        const pose = this.state.users.length > 0 ? 'open' : 'closed'
        const { loading } = this.state
        return (
            <div className="UserList">
                <header>
                    <h3>Contacts</h3>
                    <LoadingButton pose={loading ? 'loading' : 'idle'} onClick={this.fetchUsers}></LoadingButton>
                </header>
                {loading && <small>Loading...</small>}
                <PosedUl pose={pose}>
                    {this.state.users.map((user, i) => <UserListItem key={i} name={user.name} photo={user.photo}></UserListItem>)}
                </PosedUl>
            </div>
        )
    }
}