import React from 'react';
export default class SelectGroupBtnWidget extends React.Component {

  selectGroup(){
    const { group } = this.props;
    this.props.selectWasteGroup(group);
  }

  render() {
    const { group, selected_waste_group } = this.props;
    var active = (group == selected_waste_group ? 'active' : '');
    var className = `btn btn-primary switch-category-btn ${active}`;

    return (
       <button type="button" className={className} key={group} onClick={this.selectGroup.bind(this)}>{group}</button>
    );
  }
}
