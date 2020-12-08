import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
const Cards = () => {
    return(
        <div className="cards">
            <div className="card1">
        <Card style={{ width: '22rem', border: 'none' }}>
        <Card.Img style= {{height: '29rem', backgroundsize: 'cover'}}  variant="top" src="https://images.pexels.com/photos/4055337/pexels-photo-4055337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <Card.Body>
          <Card.Title><h3>Keep Your Child Warm</h3></Card.Title>
          <Card.Text>
          <h4>Shop for our  donated jackets to keep your children warm this winter.
 
 </h4>
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className="card2">
        <Card style={{ width: '22rem', border: 'none' }}>
        <Card.Img style= {{height: '29rem',  backgroundsize: 'cover'}} variant="top" src="https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <Card.Body>
          <Card.Title><h3>Featured Charities</h3>
</Card.Title>
          <Card.Text>
          <h4>Check out the newest charities 
            to join Garms and what they have to offer.</h4>
          </Card.Text>
          
        </Card.Body>
      </Card >
      </div>
      <div className="card3">
        <Card style={{ width: '22rem', border: 'none' }}>
        <Card.Img style= {{height: '29rem', backgroundsize: 'cover'}} variant="top" src="https://images.unsplash.com/photo-1575356891535-a79c0bc6bffc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYXJpdHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        <Card.Body>
          <Card.Title> <h3>Donations</h3>
          </Card.Title>
          <Card.Text>
          <h4>Sell your unwanted clothes or donate money to your chosen charities.</h4>
          </Card.Text>
          
        </Card.Body>
      </Card>
      </div>
      </div>
    )
}

export default Cards;