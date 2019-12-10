import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";

export class Form extends Component {
  state = {
    keyword: ""
  };

  onValueChange = e => {
    this.setState({ keyword: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { keyword } = this.state
    const { bringData, fetchData } = this.props
    console.log('=> bringData', bringData)

    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>


          <input
            type="text"
            placeholder="City name"
            name="city"
            onChange={this.onValueChange}
          />

          <button onClick={() => fetchData(keyword)}>GO!</button>

                 </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { bringData: state.fetchData };
};

const mapDispatchToProps =  {
  fetchData
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
