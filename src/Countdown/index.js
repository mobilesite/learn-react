import React from 'react';

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().getTime()
    };
  }

  render() {
    console.log('render');
    if (!this.props.show) {
      return <></>
    }

    const timeLeft = Math.floor((this.props.endTime - (this.state.currentTime - this.props.timeDiff)) / 1000);
    this.timeLeft = timeLeft;

    if (this.timeLeft <= 0) {
      clearInterval(this.timerId);
    }

    return <div>{this.formatTime(timeLeft)}</div>
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
    if (this.timeLeft <= 0) this.props.onTimeUp();
  }

  componentDidUpdate() {
    if (this.timeLeft <= 0) this.props.onTimeUp();
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      currentTime: new Date().getTime()
    });
  }

  formatTime(time) {
    const dd = this.padStart(Math.floor(time / (3600 * 24)));
    const hh = this.padStart(Math.floor(time % (3600 * 24) / 3600));
    const mm = this.padStart(Math.floor(time % 3600 / 60));
    const ss = this.padStart(Math.floor(time % 3600 % 60));

    let res = `${hh}:${mm}:${ss}`;

    if (dd > 0) {
      res = `${dd}天${res}`;
    }

    return res;
  }

  padStart(num) {
    return `${num}`.padStart(2, '0');
  }
}

export default Countdown;
