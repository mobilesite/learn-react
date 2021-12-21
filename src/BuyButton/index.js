import React from 'react';
import Countdown from '../Countdown';

class BuyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTimeUp: false,
      timeDiff: 0,
      showCountdown: false
    };
    this.endTime = new Date().getTime() + 10000;
  }

  render() {
    console.log('render');

    return (
      <div className="buy">
        {
          this.state.isTimeUp ?
            <button onClick={this.handleClick}>抢购</button>
            :
            <Countdown
              show={this.state.showCountdown}
              endTime={this.endTime}
              timeDiff={this.state.timeDiff}
              onTimeUp={this.timeUpHandler}
            />
        }
      </div>
    );
  }

  async componentDidMount() {
    const timeDiff = await this.getTimeDiff();
    this.setState({
      timeDiff,
      showCountdown: true
    });
  }

  timeUpHandler = () => {
    console.log('倒计时结束');
    this.setState({
      isTimeUp: true
    });
  }

  // 模拟获取客户端当前时间 - 服务器的当前时间的时间差
  getTimeDiff() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(1000);
      }, 3000);
    });
  }

  handleClick() {
    console.log('buy');
  }
}

export default BuyButton;
