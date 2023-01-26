import { Component } from 'react';

import InitialDataField from '../initial-data-field/initial-data-field';
import PurshasePrice from '../purshase-price/purshase-price';
import SellingPrice from '../selling-price/selling-price';

import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isCostShtripsNds: false,
            priceShtrips: '',
            isPalletNds: false,
            pricePallet: '',
            quantityShtrips: '',
            quantityPallets: '',
            isPriceDeliveryNds: false,
            priceDelivery: '',
            isCraneNds: false,
            cranePrice: '',
            weight: '',
            isSpringNds: false,
            priceSpring: '',
            isSellingNds: false,
            sellingPriceIP: ''
        }
    }
        

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }    

    onChangeNds = (e) => {
        const data = e.currentTarget.getAttribute('data-toggle');
        this.setState(state => (
            {
                [data]: !state[data]
            }
        ));
    }

    reqState = (prop) => {
        return this.state[prop];
    }
    
    calculatePriceIp = () => {
        const {priceShtrips, pricePallet, quantityShtrips, quantityPallets, priceDelivery,
            cranePrice, weight} = this.state;
        let price = '---';
        if (priceShtrips > 0 && quantityShtrips > 0 && weight > 0){
            price = ((+priceShtrips + ((+pricePallet * quantityPallets) + +priceDelivery + +cranePrice) / +quantityShtrips) / 1000 * +weight).toFixed(2);
        }
      
        if (price <= 0 || price === NaN) {
            price = '---';
        }
        return price;
    }

    calculatePriceOooWithoutNds = () => {
        const {isCostShtripsNds, priceShtrips, isPalletNds, pricePallet, quantityShtrips, quantityPallets, isPriceDeliveryNds, priceDelivery, isCraneNds,
            cranePrice, weight} = this.state;
        let price = '---';
        if (+priceShtrips > 0 && +quantityShtrips > 0 && +weight > 0){
        price = (((isCostShtripsNds ? +priceShtrips / 1.2 : +priceShtrips) + 
                        (((isPalletNds ? +pricePallet / 1.2 : +pricePallet) * +quantityPallets) + (isPriceDeliveryNds ? +priceDelivery / 1.2 : +priceDelivery) + (isCraneNds ? +cranePrice / 1.2 : +cranePrice)) / +quantityShtrips) / 1000 * +weight).toFixed(2);
        }
        return price;
    }

    calculatePriceOooWithNds = () => {
        const price = this.calculatePriceOooWithoutNds();
        if (+price > 0) {
            return (+price + (+price * 0.2)).toFixed(2);
        }
        return '---';
    }
  
   
    render() {
        return (
            <div className="app">
                <h1>Калькулятор расчета профиля</h1>
                <div className='container'>
                    <div className="row">
                        <div className='InitialDataField col-7'>
                            <InitialDataField
                                data={this.state}
                                onValueChange={this.onValueChange}
                                onChangeNds={this.onChangeNds}
                                reqState={this.reqState}/>

                        
                        </div>

                        <div className='purshasePrice col-5'>
                        <PurshasePrice
                            calculatePriceIp={this.calculatePriceIp}
                            calculatePriceOooWithoutNds={this.calculatePriceOooWithoutNds}
                            calculatePriceOooWithNds={this.calculatePriceOooWithNds}/>
                        </div>
                    </div>
                </div>       
            </div> 
        );
    }
}
export default App;