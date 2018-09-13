import React from 'react';
export default class SelectGroupBtnWidget extends React.Component {

  selectGroup(){
    const { group } = this.props;
    this.props.selectWasteGroup(group);
  }

  render() {
    const { group } = this.props;
    return (
       <button type="button" className="btn btn-primary switch-category-btn" key={group} onClick={this.selectGroup.bind(this)}>{group}</button>
    );
  }
}
