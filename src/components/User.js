import React from 'react'
import "../App.css"
import { Card } from 'react-bootstrap'



const User = ({ user }) => {
  return (
    <div className='Container'>
      <Card style={{ borderRadius:'3rem' , width: '21rem' , height: '20rem', left: '38%', top: '8px'}}>
  <Card.Img style={{borderRadius:'3rem'}} variant="center" src= {user.avatar_url} alt = "User Image file" />
  <Card.Body>
    <Card.Text><span>Name of User: </span>{user.name}</Card.Text>
    <Card.Text><span>Followers of {user.name}: </span>{user.followers}</Card.Text>
    <Card.Text><span>Name of Company: </span>{user.company}</Card.Text>
    <Card.Text><span>No. of Repos: </span>{user.public_repos}</Card.Text>
      
  </Card.Body>
</Card>
    </div>
  )
}

export default User
