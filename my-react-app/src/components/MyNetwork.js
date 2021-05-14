import React from 'react'
import Card from 'react-bootstrap/Card'

export default function MyNetwork() {
    return (
        <div>
            <div className="manageNetwork">
            <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Manage My Network</Card.Title>
   
    <Card.Text>
    <li>Connections</li>
    <li>Teammates</li>
    <li>Contacts</li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
            </div>

            <div className="newConnections">
                
            </div>
        </div>
    )
}
