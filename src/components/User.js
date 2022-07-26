import React from 'react'
import "../App.css"
import { Card } from 'react-bootstrap'



const User = ({ user }) => {
  return (
    <div >
      <Card style={{width: '16rem'}}>
        <Card.Img style={{ width: '16rem', height: '15rem' }} src={user.avatar_url} alt="User Image file" />
        <Card.Body>
          <Card.Text><span><strong> Name of User:</strong> </span>{user.name}</Card.Text>
          <Card.Text><span><strong> Followers of {user.name}: </strong> </span>{user.followers}</Card.Text>
          <Card.Text><span><strong> Name of Company:</strong> </span>{user.company}</Card.Text>
          <Card.Text><span><strong> No. of Repos: </strong></span>{user.public_repos}</Card.Text>

        </Card.Body>
      </Card>
    </div>
  )
}

export default User
