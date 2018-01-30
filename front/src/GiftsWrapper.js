import React from 'react';
import Gift from './Gift';
import GiftInput from './GiftInput';
import './App.css';
import axios from 'axios';

class GiftsWrapper extends React.Component {
  constructor(props) {
    super(props);

    axios.defaults.baseURL = 'http://localhost:3000';

    this.state = {
      gifts: []
    };

    this.fetchGifts = this.fetchGifts.bind(this);
    this.createGift = this.createGift.bind(this);
    this.removeGift = this.removeGift.bind(this);
    this.mailSanta = this.mailSanta.bind(this);
  }

  componentDidMount() {
    this.fetchGifts()
  }

  fetchGifts() {
    axios.get('/')
    .then((res) => {
      this.setState({gifts: res.data});
    });
  }

  createGift(name) {
    axios.post('/', {"name": name})
    .then((res) => {
      if (res.data) {
        let giftsCopy = this.state.gifts.slice()
        giftsCopy.push(res.data)
        this.setState({gifts: giftsCopy})
      }
    })
  }

  removeGift(giftId) {
    axios.delete('/' + giftId)
    .then((res) => {
      let giftsCopy = this.state.gifts.slice()
      const deletedItemIndex = giftsCopy.findIndex((element) => {
        return (element.id === giftId)
      });
      giftsCopy.splice(deletedItemIndex, 1)
      this.setState({gifts: giftsCopy})
    })
  }

  mailSanta() {
    let giftNames = this.state.gifts.map((element) => {
      return element.name
    });

    axios.post('/mailSanta', {gifts: giftNames})
  }

  renderGifts() {
    let gifts = []
    for (var i = 0; i < this.state.gifts.length; i++) {
      gifts.push(
        <Gift
          key={this.state.gifts[i].id}
          gift={this.state.gifts[i]}
          remove={this.removeGift} />
      )
    }
    return gifts
  }

  render() {
    return (
      <div className="GiftWrapper">
        <GiftInput onSubmit={this.createGift}/>

        <div className="GiftList">
          {this.renderGifts()}
        </div>

        <button
          type="button"
          className="mail"
          onClick={this.mailSanta}>
          Dear Santa Florian, send me my gifts
        </button>
      </div>
    )
  }
}

export default GiftsWrapper
