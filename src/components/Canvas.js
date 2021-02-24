import React, { useRef, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'

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
      <Card style={{ maxWidth: '25rem' }}>
        <canvas ref={canvasRef}/>
        <Card.Body>
          <Card.Title>{ image.sid }</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{ image.pwd }</Card.Subtitle>
        </Card.Body>
      </Card>
      <Button variant="link" onClick={() => { setImage(null)}}>Back</Button>
    </>
  )
}
