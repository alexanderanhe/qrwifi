import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function NewForm({ create }) {
  const [values, setValues] = useState({ sid: '', pwd: '' });
  const [checked, setChecked] = useState(true);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    var canvas = document.createElement("canvas");
    var img = new Image();
    img.crossOrigin = "Anonymous"
    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var image = canvas.toDataURL("image/png");
      // const i = dataURL.replace(/^data:image\/(png|jpg);base64,/, "")
      create( {...values, image } );
    };
    img.src = `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=WIFI:S:${values.sid};P:${values.pwd};T:WPA;H:;`;
  }

  return (
    <div>
      <Form  onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Network</Form.Label>
          <Form.Control type="text" placeholder="Write Network" onChange={handleChange('sid')} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type={ checked ? 'text' : 'password' }  onChange={handleChange('pwd')} placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Show me password"
              defaultChecked={ checked }
              onChange={() => setChecked(!checked)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}
