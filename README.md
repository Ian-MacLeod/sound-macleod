# SoundMacLeod

## About

SoundMacLeod is a web application inspired by SoundCloud that allows it's users to upload, share, and listen to music. At the outset, [design documents](https://github.com/Ian-MacLeod/sound-macleod/wiki) were drawn up to guide the development process. The project was created within a ten day period between 4/3/18 and 4/13/18.

[Check out the live version here](https://sound-macleod.herokuapp.com)

## Technologies Used

* The backend for SoundMacLeod is built on Ruby on Rails and PostgreSQL.
* Passwords are hashed and salted using BCrypt.
* User uploads and other static assets are hosted on AWS S3 and served by Rails via Carrierwave.
* The frontend was created using React with Redux to manage state.
* npm and Webpack are used to bundle files.
* React-Player is used to manage the state of the audio player.
* Wavesurfer.js is used to generate waveforms.
* React-Sortable-HOC is used to create ui components that manage ordered lists of items.
* Style is written using SASS

## Features & Implementation

### Users

Users can sign up, sign in, and sign out. Each user has a profile that displays their uploaded tracks, comments, playlists, and liked tracks

### Tracks

Users can upload, listen to, and delete tracks

### Track Player and Waveforms:

One of the challenges in building SoundMacLeod was keeping the state of the player synced up with the state of the waveforms displayed by each track. Additionally, SoundMacLeod remembers the progress you have made in a song if you play a different one or navigate to a different page. To address this, I added an object mapping track ids to progress in the redux store. Ultimately, the player slice of the redux store ended up looking like this:

```
player: {
  currentPlaylistId: null,
  lastPlayerSeek: 0.4328125,
  lastWaveFormSeek: 0.6456410,
  nextUp: [22, 8, 12],
  playing: false
  progressByTrackId: {21: 0.4306445, 13: 0.7256410}
  trackId: 21
}
```

### Continuous play

Tracks continue to play without interruption while navigating from one page to another.

### Track Queue

To extend the seamless listening experience, if a user wants to have additional songs play after their current one finishes, they can add them to a queue which will play once the current song is complete. Once a user has added songs to the queue, he or she can also manage the order of the queue or remove songs.

![Track Queue](https://github.com/Ian-MacLeod/sound-macleod/raw/master/blob/next-up.gif)

### Comments

Users can comment on tracks and delete their own comments

### Likes

Users can Like tracks. Tracks that they have liked are visible in their profile.

### Playlists

Users can create and edit playlists. Playing a playlist will add all of the songs in the playlist to the track queue.

![Add to Playlist](https://github.com/Ian-MacLeod/sound-macleod/raw/master/blob/add-to-playlist.gif)

### Modals

Sound MacLeod uses modals to display the majority of it's forms. To achieve a consistent and reusable look and avoid repeating code, I created a custom modal component. To activate a modal, an action is dispatched with a payload containing the component that should be presented by the modal as well as any props that component should receive.

```javascript
//modal_holder_container.jsx
const mapStateToProps = ({ ui: { modal } }) => modal;

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

// modal_holder.js
class ModalHolder extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleComponentClick(e) {
    e.stopPropagation();
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(e) {
    if (this.props.isOpen && e.key === "Escape") {
      this.props.closeModal();
    }
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    const Component = this.props.component;
    return (
      <div
        className={"modal-bg " + (this.props.isOpen ? "open" : "")}
        onClick={this.props.closeModal}
      >
        {this.props.isOpen && (
          <div onClick={this.handleComponentClick} className="modal-holder">
            <Component
              closeModal={this.props.closeModal}
              {...this.props.childProps}
            />
          </div>
        )}
      </div>
    );
  }
}
```

## Future Directions

* Keep track of recently played tracks in the track queue (store the last few on the server between each session)
* Play count for tracks
* Search
* Infinite scrolling
