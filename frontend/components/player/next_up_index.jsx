import React from "react";
import { SortableContainer, arrayMove } from "react-sortable-hoc";

import NextUpIndexItem from "./next_up_index_item_container";

const NextUpList = SortableContainer(({ trackIds }) => {
  return (
    <ul>
      {trackIds.map((id, index) => (
        <NextUpIndexItem key={index} index={index} trackId={id} />
      ))}
    </ul>
  );
});

class NextUpComponent extends React.Component {
  constructor(props) {
    super(props);
    this.onSortEnd = this.onSortEnd.bind(this);
  }

  onSortEnd({ oldIndex, newIndex }) {
    const newTrackIds = arrayMove(this.props.trackIds, oldIndex, newIndex);
    this.props.newNextUp(newTrackIds);
  }
  render() {
    return (
      <div className="next-up-box">
        <h2>Next Up</h2>
        <NextUpList trackIds={this.props.trackIds} onSortEnd={this.onSortEnd} />
      </div>
    );
  }
}

export default NextUpComponent;
