import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";

export class Form extends Component {
  state = {
    keyword:
      (Object.keys(this.props.bringData).length > 0 && this.props.bringData !=='ERROR')
        ? this.props.bringData.city.name
        : "",
  }
  onValueChange = e => {
    this.setState({ keyword: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { keyword } = this.state;
    const { fetchData } = this.props;
    return (
      <div className="Form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="City name"
            name="city"
            onChange={this.onValueChange}
            value={keyword}
          />

          <button onClick={() => fetchData(keyword)}>GO!</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { bringData: state.fetchData} ;
};

const mapDispatchToProps = {
  fetchData
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
