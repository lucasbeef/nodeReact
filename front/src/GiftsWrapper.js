import React from 'react';
import Gift from './Gift';
import './App.css';

class GiftsWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gifts: []
    };

    this.removeGift = this.removeGift.bind(this);
  }

  removeGift() {
    console.log('remove gift ')
  }

  render() {
    return (
      <div className="GiftWrapper">
        <form>
          <input type="text" />
          <button type="submit"> Ajouter </button>
        </form>

        <div className="GiftList">
          <Gift name="Ferrari LaFerrari" remove={this.removeGift} />
          <Gift name="Palace en Espagne" remove={this.removeGift} />
        </div>

        <button type="button" className="mail"> Dear Santa Florian, send me my gifts</button>
      </div>
    )
  }
}

export default GiftsWrapper
