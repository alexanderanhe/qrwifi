import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button, Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaArrowAltCircleLeft } from 'react-icons/fa';

export default function NewForm({ create, setImage }) {
  const [values, setValues] = useState({ sid: '', pwd: '' })
  const [checked, setChecked] = useState(true)
  const history = useHistory()

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
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
      history.push(``);
    };
    img.src = `https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=WIFI:S:${values.sid};P:${values.pwd};T:WPA;H:;`;
  }

  return (
    <div>
      <Breadcrumb>
        <Link to="/" className="breadcrumb-item" onClick={() => { setImage(null) }}>
          <FaArrowAltCircleLeft className="text-info"/>
        </Link>
        <Breadcrumb.Item active>New</Breadcrumb.Item>
      </Breadcrumb>
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
        <Button variant="info" type="submit" block>
          Submit
        </Button>
      </Form>
    </div>
  )
}
