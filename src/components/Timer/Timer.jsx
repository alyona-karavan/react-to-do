import { Component } from 'react'

export default class Timer extends Component {
  state = {
    minutes: this.props.timer.minutes,
    seconds: this.props.timer.seconds,
    running: this.props.timer.running,
    paused: this.props.timer.paused,
    startTime: this.props.timer.startTime,
  }

  componentDidMount() {
    const { timer } = this.props
    this.setState({
      minutes: timer.minutes,
      seconds: timer.seconds,
      running: timer.running,
      paused: timer.paused,
      startTime: timer.startTime,
    })
    console.log(this.state)
  }

  componentWillUnmount() {
    this.stopTimer()
    this.updateParent()
  }

  stopTimer = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  updateParent = () => {
    const finalState = {
      ...this.state,
      running: false,
      paused: true,
    }
    this.props.onTimerUpdate(finalState)
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
      const totalSeconds = this.state.minutes * 60 + this.state.seconds
      if (totalSeconds > 0) {
        const newSeconds = totalSeconds - 1
        const newMinutes = Math.floor(newSeconds / 60)
        const newSecondsRemainder = newSeconds % 60
        this.setState({ minutes: newMinutes, seconds: newSecondsRemainder })
      } else {
        this.setState({ running: false })
        clearInterval(this.intervalId)
      }
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
