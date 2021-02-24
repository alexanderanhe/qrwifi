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
        { wifis.map((wifi, index) => {
            return (
              <ListGroup.Item key={ index }>
                <Container>
                  <Row>
                    <Col xs={10} md={11}>
                      <Button variant="light" onClick={() => { clickHandle(wifi.sid) }} block> { wifi.sid } </Button>
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
          })
        }
      </ListGroup>
    </div>
  )
}
