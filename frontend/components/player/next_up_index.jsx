import React from "react";
import { SortableContainer, arrayMove } from "react-sortable-hoc";
import { Link } from "react-router-dom";

import ImageDefault from "../image_default";
import PlayPauseButton from "../play_pause_button/play_pause_button_container";
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
    const { user, track, trackIds } = this.props;
    return (
      <div className="next-up-box">
        <header>
          <h2>Next Up</h2>
          <button>Clear</button>
          <a className="close">×</a>
        </header>
        <div className="scroll-container">
          <div className="currently-playing next-up-list-item">
            <div className="image">
              <ImageDefault src={track.image.url} />
              <PlayPauseButton trackId={track.id} />
            </div>
            <div className="info">
              <p>
                <Link to={`/users/${user.id}`} className="username">
                  {user.username}
                </Link>
              </p>
              <p>
                <Link to={`/tracks/${track.id}`} className="title">
                  {track.title}
                </Link>
              </p>
            </div>
          </div>
          <NextUpList trackIds={trackIds} onSortEnd={this.onSortEnd} />
        </div>
      </div>
    );
  }
}

export default NextUpComponent;
