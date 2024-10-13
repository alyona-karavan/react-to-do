import { Component } from 'react'

export default class Taimer extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    running: false,
    paused: false,
    startTime: 0,
  }
  componentDidMount() {
    const { timer } = this.props

    if (timer) {
      this.setState({
        minutes: timer.minutes,
        seconds: timer.seconds,
        running: timer.running,
        paused: timer.paused,
        startTime: timer.startTime,
      })
    }
  }

  componentWillUnmount() {
    this.setState({ paused: true })
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  pauseTimer = (event) => {
    event.stopPropagation()
    if (this.state.running) {
      this.setState({ running: false, paused: true, elapsedTime: new Date() - this.state.startTime })
    }
  }

  startTimer = (event) => {
    event.stopPropagation()
    if (!this.state.running) {
      if (this.state.paused) {
        this.setState({ running: true, paused: false, startTime: new Date() - this.state.elapsedTime })
      } else {
        this.setState({ running: true, startTime: new Date() })
      }
      this.intervalId = setInterval(this.updateTimer, 1000)
    }
  }

  updateTimer = () => {
    if (this.state.running) {
      const currentTime = new Date()
      const elapsed = currentTime - this.state.startTime
      this.setState({ minutes: Math.floor(elapsed / 60000), seconds: Math.floor((elapsed % 60000) / 1000) })
      this.props.onTimerUpdate(this.state)
    }
  }

  render() {
    return (
      <span className="description">
        <button className="icon icon-pause" onClick={this.pauseTimer}></button>
        <button className="icon icon-play" onClick={this.startTimer}></button>
        {this.state.minutes}:{this.state.seconds.toString().padStart(2, '0')}
      </span>
    )
  }
}
