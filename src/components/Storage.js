import React from 'react'
import { ListGroup, Button, Container, Row, Col } from 'react-bootstrap'
import { FaTrashAlt } from 'react-icons/fa';

export default function Storage({ wifis, remove, select }) {

  const clickHandle = (sid) => {
    console.log('Select', sid)
    select(sid)
  }

  const clickDeleteHandle = (sid) => {
    console.log('Delete', sid)
    remove(sid)
  }

  return (
    <div>
      <ListGroup defaultActiveKey="#link1">
        { wifis.length ? wifis.map((wifi, index) => {
            return (
              <ListGroup.Item key={ index }>
                <Container>
                  <Row>
                    <Col xs={10} md={11} onClick={() => { clickHandle(wifi.sid) }} className="pointer">
                      <span className="align-middle">{ wifi.sid }</span>
                    </Col>
                    <Col xs={2} md={1}>
                      <Button variant="outline-danger"
                            style={{ border: 'none' }}
                            onClick={() => { clickDeleteHandle(wifi.sid) }}><FaTrashAlt/></Button>
                    </Col>
                  </Row>
                </Container>
              </ListGroup.Item>
            )
          }) : <div className="text-center">There are no saved networks, please add new ones in the blue button above</div>
        }
      </ListGroup>
    </div>
  )
}
