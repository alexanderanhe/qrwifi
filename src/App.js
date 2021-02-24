import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import useLocalStorage from './hooks/useLocalStorage'
import Navigation from './components/Navigation'
import Canvas from './components/Canvas'
import NewForm from './components/NewForm'
import Storage from './Storage'
import './App.css'

function App() {
  const [ wifis, setWifis ] = useLocalStorage('data', [])
  const [ image, setImage ] = useLocalStorage('image', [])


  const createWifi = ({sid, pwd, image}) => {
    console.log({sid, pwd, image})
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
      <Navigation/>
      <Container style={{ marginTop: '1rem' }}>
        <Switch>
          <Route exact path="/">
          { !image && <Storage wifis={wifis} select={selectWifi} remove={removeWifi}/> }
            { image && <Canvas image={image} setImage={setImage} /> }
          </Route>
          <Route path="/new">
            <NewForm create={ createWifi }/>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
