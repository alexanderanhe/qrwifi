import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import useLocalStorage from './hooks/useLocalStorage'
import Navigation from './components/Navigation'
import Canvas from './components/Canvas'
import NewForm from './components/NewForm'
import Storage from './components/Storage'
import './App.css'

function App() {
  const [ wifis, setWifis ] = useLocalStorage('data', [])
  const [ image, setImage ] = useLocalStorage('image', [])
  // const history = useHistory()


  const createWifi = ({sid, pwd, image}) => {
    setWifis(prevWifis => {
      let madeChange = false
      const wifis = prevWifis.map(wifi => {
        if (wifi.sid === sid) {
          madeChange = true
          wifi.pwd = pwd
          wifi.image = image
        }
        return wifi
      })
      if (madeChange) {
        return wifis
      } else {
        return [...prevWifis, { sid, pwd, image }]
      }
    })
    // setImage({sid, pwd, image})
  }

  const removeWifi = (sid) => {
    setWifis(prevWifis => {
      const wifis = prevWifis.filter(wifi => {
        return wifi.sid !== sid
      })
      return wifis
    })
  }

  const selectWifi = (sid) => {
    const selImage = wifis.find(wifi => wifi.sid === sid)
    setImage(selImage)
  }

  return (
    <Router>
      <Navigation setImage={ setImage }/>
      <Container>
        <Switch>
          <Route exact path="/">
            <Storage wifis={wifis} select={selectWifi} remove={removeWifi}/>
            { image && <Redirect to="/qr" /> }
          </Route>
          <Route path="/qr">
            { image && <Canvas image={image} setImage={ setImage }/> }
            { !image && <Redirect push to="/" /> }
          </Route>
          <Route path="/new">
            <NewForm create={ createWifi } setImage={ setImage }/>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
