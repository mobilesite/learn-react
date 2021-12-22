import React from 'react';
import Input from '../Input';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: 18,
      isAgree: false
    };
  }

  onChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ?
      target.checked :
      target.value;

    this.setState({
      [target.name]: value
    });
  }

  onSubmit = (e) => {
    alert(`
      姓名：${this.state.name}
      年龄：${this.state.age}
      是否同意隐私协议：${this.state.isAgree}
    `);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="name">姓名</label>
        <Input
          name="name"
          id="name"
          type="text"
          value={this.state.name}
          onChange={this.onChange}
          placeholder="请输入"
        />

        <label htmlFor="age">年龄</label>
        <Input
          name="age"
          id="age"
          type="number"
          value={this.state.age}
          onChange={this.onChange}
        />

        <label htmlFor="isAgree">是否同意隐私协议</label>
        <Input
          name="isAgree"
          id="isAgree"
          type="checkbox"
          checked={this.state.isAgree}
          onChange={this.onChange}
        />

        <input type="submit" value="提交"/>
      </form>
    )
  }
}
