import React, { Component } from "react";
import Coin from "../Coin/Coin";
import "./CoinFlipper.css";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    // State üzerinde paranın başlangıçtaki durumunu veriyoruz, başlangıçta "tura" olsun.
    // Daha sonra şu anda paranın dönüp dönmeme durumunu da veriyoruz, başlangıçta para atılmamış olduğundan "false" olarak verdik.
    this.state = {
      side: "tura",
      flipping: false,
      count : 0,
      turaCount : 0,
      yaziCount : 0,
    };
  }
  handleClick = () => {
    // "At!" butonuna tıkladığımızda paranın dönmesini istiyoruz, bu yüzden "flipping" durumunu "true" yapıyoruz.
    this.setState({ flipping: true });
    this.setState({count : this.state.count+ 1});
    var a= Math.floor(Math.random() * 2);
    if(a == 1){
      this.setState({side : "tura"})
      this.setState({turaCount: this.state.turaCount+1})
    }
    else{
      this.setState({side : "yazi"})
      this.setState({yaziCount: this.state.yaziCount+1})  
    }
    // 1 saniye kadar dönmesi yeterli, bu yüzden 1 saniye sonra "flipping" durmunu tekrar "false" yapıyoruz.
    setTimeout(() => this.setState({ flipping: false }), 1000);
  };
  
    
    
    //Math.floor(Math.random() * 2) === 1  ? this.setState({side : "tura"}) : this.setState({side : "yazi"})  
 
  render() {
    return (
      <div className="CoinFlipper">
        <h1>Yazı mı Tura mı?</h1>
        <Coin side={this.state.side} flipping={this.state.flipping} />
        <button onClick={this.handleClick}>At!</button>
        <p>
          Toplam
          <strong> {this.state.count} </strong>
          atıştan
          <strong> {this.state.turaCount} </strong>ü {this.state.side}
          <strong> {this.state.yaziCount} </strong>
          si {this.state.side} geldi.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;