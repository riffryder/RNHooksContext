import React from 'react';

const { Provider, Consumer } = React.createContext();

const assetsData = [
  {
    id: 1,
    symbol: "EPC",
    company: "EdgeWell",
    imageRef: "https://storage.googleapis.com/dailygame/EPC-edgewell.png",
    weight: 0
  },
  {
    id: 1,
    symbol: "EPC",
    company: "EdgeWell",
    imageRef: "https://storage.googleapis.com/dailygame/EPC-edgewell.png",
    weight: 0
  },
  {
    id: 1,
    symbol: "EPC",
    company: "EdgeWell",
    imageRef: "https://storage.googleapis.com/dailygame/EPC-edgewell.png",
    weight: 0
  },
  {
    id: 1,
    symbol: "EPC",
    company: "EdgeWell",
    imageRef: "https://storage.googleapis.com/dailygame/EPC-edgewell.png",
    weight: 0
  },
  {
    id: 1,
    symbol: "EPC",
    company: "EdgeWell",
    imageRef: "https://storage.googleapis.com/dailygame/EPC-edgewell.png",
    weight: 0
  },
  {
    id: 1,
    symbol: "EPC",
    company: "EdgeWell",
    imageRef: "https://storage.googleapis.com/dailygame/EPC-edgewell.png",
    weight: 0
  }
];

class AssetsProvider extends React.Component {
  state = {
    assets: []
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        assets: assetsData
      })
    }, 500);
  }

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    )
  }
}

export { AssetsProvider, Consumer as AssetsConsumer };