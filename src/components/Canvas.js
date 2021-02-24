import React, { useRef, useEffect } from 'react'
import { Card, Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleLeft } from 'react-icons/fa';

export default function Canvas({ image, setImage }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = 300
    canvas.height = 300
    const ctx = canvas.getContext('2d')
    var img = new Image();
    img.onload = function(){
      ctx.drawImage(img,0,0); // Or at whatever offset you like
    };
    img.src = image.image;
  }, [image])

  return (
    <>
      <Breadcrumb>
        <Link to="/" className="breadcrumb-item" onClick={() => { setImage(null) }}>
          <FaArrowAltCircleLeft className="text-info"/>
        </Link>
        <Breadcrumb.Item active>QR</Breadcrumb.Item>
      </Breadcrumb>
      <Card style={{ maxWidth: '25rem', margin: '0 auto', border: '0' }}>
        <canvas ref={canvasRef}/>
        <Card.Body className="text-center">
          <Card.Text>
            Scan the QR code above with your camera app.
          </Card.Text>
          <Card.Title>{ image.sid }</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{ image.pwd }</Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  )
}
