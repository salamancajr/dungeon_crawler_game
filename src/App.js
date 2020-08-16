import './App.css'
import React, { Component } from 'react'
import { mapData, pixls } from './Level1'
import { Pongball } from './Pongball'

var link1 =
  'url(https://images.unsplash.com/photo-1463428537233-c84b754b2c84?ixlib=rb-0.3.5&s=6e4144dbe91e4dce1df9e12e8a1b47ad&auto=format&fit=crop&w=634&q=80)'
var link2 =
  'url(https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b9017b2f428fb6f35396a3942b843d9d&auto=format&fit=crop&w=700&q=80)'
var dd
var tileTypes = {
  0: {
    name: 'Walls',
    color: link1,
  },
  1: {
    name: 'Open Path',
    color:
      'url(https://images.pexels.com/photos/163604/forest-woods-landscape-road-163604.jpeg?w=940&h=650&auto=compress&cs=tinysrgb)',
  },
  2: {
    name: 'Enemies',
    color:
      'url(https://images.unsplash.com/photo-1489960474137-f8bc8b302475?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0528e0775ffdbf0219c87ffc32b2c727&auto=format&fit=crop&w=920&q=80)',
    backgroundSize: 'cover',
  },
  3: {
    name: 'Honey',
    color:
      'url(https://images.pexels.com/photos/461099/pexels-photo-461099.jpeg?w=940&h=650&auto=compress&cs=tinysrgb)',
    backgroundSize: 'cover',
  },
  4: {
    name: 'Door',
    color:
      'url(https://images.unsplash.com/photo-1510935227643-c9230395ef7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=75888de24365abbb1e4255ed362c3264&auto=format&fit=crop&w=634&q=80)',
    backgroundSize: 'cover',
  },
  5: {
    name: 'Weapon',
    color:
      'url(https://images.unsplash.com/photo-1494801819652-1ca9fe13134c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=41a38ea25d9615a1d36d7785ecff91bd&auto=format&fit=crop&w=634&q=80)',
    backgroundSize: 'cover',
  },
  6: {
    name: 'Walls',
    color:
      'url(https://images.unsplash.com/photo-1499088513455-78ed88b7a5b4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=47d596252f08d70d845dfe0ef4fb0388&auto=format&fit=crop&w=671&q=80)',
    backgroundSize: 'cover',
  },
  7: {
    name: 'Open Path',
    color: link2,
    backgroundSize: 'cover',
  },
  8: {
    name: 'kingSnake',
    color:
      'url(https://images.unsplash.com/photo-1502055319327-d21e69ac431f?ixlib=rb-0.3.5&s=62ef53f1d15e483516d4e0ca24579283&auto=format&fit=crop&w=668&q=80)',
    backgroundSize: 'cover',
  },
  9: {
    name: 'cub',
    color:
      'url(https://images.unsplash.com/photo-1508689863005-6dccd8b40ad8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6ebc65f211bd3aaa55d1cee1c28f9b55&auto=format&fit=crop&w=753&q=80)',
    backgroundSize: 'cover',
  },
}
var newMap = mapData.slice()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      map1: newMap,
      health: 50,
      reset: 1, //used to avoid loading a new map every time an enemy is defeated
      propsX: 0,
      propsY: 0,
      multiple: '',
      multipleY: '',
      toggle: 1,
      pixels: pixls,
      xP: 0,
      level: 1,
      power: 10,
      weapon: [
        'Bear Fists',
        "Cub's Club",
        "Goldie Lock's Dagger",
        'Beehive Bazooka',
        'The Golden Mongoose Axe',
      ],
      counter: 0,
      over: 0,
      s1: 'Game_Over\n:(\nClick_to_continue...',
    }
  }

  componentWillMount() {
    this.setState({ map1: newMap })
  }
  changeMap(event) {
    //newMap updates map after enemy is defeated
    if (event[4] === 50) {
      this.setState({ power: 10, xP: 0, level: 1, counter: 0, over: 0 })
    }
    this.setState({
      propsX: event[0],
      propsY: event[1],
      multiple: event[5],
      multipleY: event[6],
      map1: event[2],
      pixels: event[7],
      reset: event[8],
    })
    newMap = event[2]
    if (typeof event[9] === 'number') {
      this.setState({ xP: this.state.xP + event[9] }, () => {
        if (this.state.xP >= '100') {
          this.setState({
            level: this.state.level + 1,
            xP: this.state.xP - '100',
            power: this.state.power + 10,
          })
        }
      })
    }
    if (typeof event[10] === 'number') {
      this.setState({
        power: this.state.power + event[10],
        counter: this.state.counter + 1,
      })
    }
    const isDark = this.state.toggle === 1

    const takeHealth = Math.floor(event[3] * (isDark ? 0.7 : 1))
    const addHealth = Math.floor(event[4] * (isDark ? 1.3 : 1))
    this.setState(
      { health: this.state.health - takeHealth + addHealth },
      () => {
        if (this.state.health < 0) {
          this.setState({ health: 0 })
        }
        if (this.state.health < 1 && this.state.over === 0) {
          var b = document.getElementById('gameover-text')
          b.innerText = ''
          b.style.display = 'block'
          b.style.fontFamily = 'Caesar Dressing'
          var s1 = 'Game_Over\n:(\nClick_to_continue...'
          var v1 = 0
          var b = document.getElementById('gameover-text')
          this.setState({ over: 1 }, () => {
            if (dd !== false) {
              dd = false
              var arr1 = setInterval(function () {
                if (v1 === 0) {
                  b.innerText = ''
                }
                b.innerText = b.innerText + s1[v1]
                v1 += 1
                if (v1 == s1.length) {
                  clearInterval(arr1)
                }
              }, 100)
            }
          })
        }
      }
    )
    dd = true
    if (event[4] === 100) {
      this.setState({
        health: 50,
        power: 10,
        xP: 0,
        level: 1,
        counter: 0,
        over: 0,
      })
    }
  }
  boardPos() {
    this.pongBall.focusPongBall()
    if (document.getElementById('intro-text').style.display === 'none') {
      this.setState({ toggle: this.state.toggle === 1 ? 2 : 1 })
    }
  }
  render() {
    const nodes = this.state.map1.map((el, i) => {
      if ((el === 1 || el === 7) && this.state.reset === 1) {
        var a = Math.random() * 100
        if (a > 99) {
          el = 3
          newMap.splice(i, 1, 3) //sets random honey on the map on initial load
        }
        if (a < 1.2) {
          el = 2
          newMap.splice(i, 1, 2) //sets random enemies on the map on initial load
        }
        if (a > 1.6 && a < 4.9 && newMap.indexOf(5) === -1) {
          el = 5
          newMap.splice(i, 1, 5)
        }
        this.setState({ reset: 2 })
      }
      const bg = tileTypes[el].color
      const bg1 = tileTypes[el].backgroundSize
      const bg2 = tileTypes[el].name //used to create id to later retrieve their pixel position
      return (
        <div
          className="box"
          style={{
            backgroundImage: bg,
            backgroundSize: bg1,
            fontSize: '4px',
            color: 'red',
          }}
          id={bg2}
        />
      )
    })
    var x = this.state.multiple * 400
    var y = this.state.multipleY * 400
    return (
      <div className="App">
        <div
          className="App2"
          id="camera"
          style={{
            width: '480px',
            height: '400px',
            position: 'absolute',
            overflow: 'hidden',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: 'auto',
            boxShadow: '10px 10px grey',
            borderRadius: '10px',
          }}
        >
          <Pongball
            ref={ref => (this.pongBall = ref)}
            health={this.state.health}
            over={this.state.over}
            toggle={this.state.toggle}
            map1={this.state.map1}
            power={this.state.power}
            onChange={this.changeMap.bind(this)}
          />
          {/*enemies allows us to use the method to find pixel position, map1 will help udpate the map when an enemy is defeated, onChange
        waits for a change in Pongball and sends the argument to the changeMap function*/}
          <div
            id="board"
            style={{
              height: this.state.pixels[0],
              width: this.state.pixels[1],
              position: 'absolute',
              top: -y,
              left: -x,
            }}
          >
            {nodes}
          </div>
          <div
            id="status bar"
            style={{
              fontSize: '12px',
              zIndex: 1,
              position: 'absolute',
              right: 0,
              top: 0,
              width: 80,
              height: 400,
              background: 'rgb(34,48,96)',
              color: 'rgb(154,158,146)',
            }}
          >
            <div style={{ marginTop: 10 }}>
              Health:
              <br />
              <i className="fas fa-hand-holding-heart"></i>
              <br />
              <span style={{ color: 'green' }}>{this.state.health}</span>
              <br />
              Power:
              <br />
              <i className="far fa-star"></i>
              <br />
              <span style={{ color: 'green' }}>{this.state.power}</span>
              <br />
              Level:
              <br />
              <i className="fas fa-level-up-alt"></i>
              <br />
              <span style={{ color: 'green', marginBottom: '10px' }}>
                {this.state.level}
              </span>
              <br />
              XP:
              <br />
              <i className="fas fa-chart-line"></i>
              <br />
              <span style={{ color: 'green', marginBottom: '10px' }}>
                {this.state.xP}%
              </span>
              <br />
              Weapon:
              <br />
              <i className="far fa-hand-rock"></i>
              <br />
              <span
                style={{
                  color: 'green',
                  marginBottom: '10px',
                  fontSize: '10px',
                }}
              >
                {this.state.weapon[this.state.counter]}
              </span>
              <button
                className="button"
                style={{
                  width: '72%',
                  bottom: 20,
                  position: 'absolute',
                  margin: 'auto',
                  textAlign: 'center',
                  left: 0,
                  right: 0,
                  borderRadius: 5,
                }}
                onClick={this.boardPos.bind(this)}
              >
                Toggle Darkness
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App
