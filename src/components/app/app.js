import { Component } from 'react';

import InitialDataField from '../initial-data-field/initial-data-field';
import PurshasePrice from '../purshase-price/purshase-price';

import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isCostShtripsNds: (localStorage.getItem('isCostShtripsNds') === 'true' ? true : false) || false,
            priceShtrips: (localStorage.getItem('priceShtrips') ? localStorage.getItem('priceShtrips') : ''),
            isPalletNds: (localStorage.getItem('isPalletNds') === 'true' ? true : false) || false,
            pricePallet: (localStorage.getItem('pricePallet') ? localStorage.getItem('pricePallet') : ''),
            quantityShtrips: (localStorage.getItem('quantityShtrips') ? localStorage.getItem('quantityShtrips') : ''),
            quantityPallets: (localStorage.getItem('quantityPallets') ? localStorage.getItem('quantityPallets') : ''),
            isPriceDeliveryNds: (localStorage.getItem('isPriceDeliveryNds') === 'true' ? true : false) || false,
            priceDelivery: (localStorage.getItem('priceDelivery') ? localStorage.getItem('priceDelivery') : ''),
            isCraneNds: (localStorage.getItem('isCraneNds') === 'true' ? true : false) || false,
            cranePrice: (localStorage.getItem('cranePrice') ? localStorage.getItem('cranePrice') : ''),
            weight: (localStorage.getItem('weight') ? localStorage.getItem('weight') : ''),
            isSpringNds: (localStorage.getItem('isSpringNds') === 'true' ? true : false) || false,
            priceSpring: (localStorage.getItem('priceSpring') ? localStorage.getItem('priceSpring') : ''),
            isSellingNds: (localStorage.getItem('isSellingNds') === 'true' ? true : false) || false,
            sellingPrice: (localStorage.getItem('sellingPrice') ? localStorage.getItem('sellingPrice') : ''),
            isSellingSpringNds: (localStorage.getItem('isSellingSpringNds') === 'true' ? true : false) || false,
            sellingPriceSpring: (localStorage.getItem('sellingPriceSpring') ? localStorage.getItem('sellingPriceSpring') : ''),
            numberMetersInOrder: ''
        }
     }
    
    onValueChange = (e) => {
        this.setState({
           [e.target.name]: e.target.value
        });
         localStorage.setItem(e.target.name, e.target.value);
    }    

    onChangeNds = (e) => {
        const data = e.currentTarget.getAttribute('data-toggle');
        localStorage.setItem(data, !this.state[data]);
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
        const {priceShtrips,pricePallet, quantityShtrips, quantityPallets, priceDelivery,
            cranePrice, weight} = this.state;
        let price = '---';
        if (+priceShtrips > 0 && +quantityShtrips > 0 && +weight > 0){
            price = ((+priceShtrips + ((+pricePallet * +quantityPallets) + +priceDelivery + +cranePrice) / +quantityShtrips) / 1000 * +weight).toFixed(2);
        }
      
        if (price <= 0 || Number.isNaN(price)) {
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

    netProfitIp = () => {

        const {sellingPrice} = this.state;
        let price = '---';
        let percent = '---';
        const calculatePriceIp = this.calculatePriceIp();
        if (+sellingPrice > 0 && calculatePriceIp > 0){
        price = ((+sellingPrice - calculatePriceIp) - (+sellingPrice - calculatePriceIp) * 0.15).toFixed(2);
        percent = ((+sellingPrice - +calculatePriceIp) / +calculatePriceIp * 100).toFixed(2);  
        }
        if (Number.isNaN(price)) {
            price = '---';
        }
        return {price, percent};
    }

    netProfitOOO = () => {
        const {sellingPrice, isSellingNds} = this.state;
        const sellingPriceWithoutNds = isSellingNds ? +sellingPrice / 1.2 : sellingPrice;
        
        let price = '---';
        let percent = '---';
        const calculatePriceOooWithoutNds = this.calculatePriceOooWithoutNds();
        if (+sellingPriceWithoutNds > 0 && +calculatePriceOooWithoutNds > 0){
            price = (+sellingPriceWithoutNds - +calculatePriceOooWithoutNds - ((+sellingPriceWithoutNds - +calculatePriceOooWithoutNds) * 0.2)).toFixed(2);
            percent = ((+sellingPriceWithoutNds - +calculatePriceOooWithoutNds) / +calculatePriceOooWithoutNds * 100).toFixed(2);
        }
        
        if (Number.isNaN(price)) {
            price = '---';
        }
        return {price: price, percent: percent};
    }

    netProfitSpringIp = () => {
        const {sellingPriceSpring, priceSpring} = this.state;
        let price = '---';
        let percent = '---';
        if (+sellingPriceSpring > 0 && +priceSpring > 0){
            price = (+sellingPriceSpring - +priceSpring - ((+sellingPriceSpring - +priceSpring) * 0.15)).toFixed(2);
            percent = ((+sellingPriceSpring - +priceSpring) / +priceSpring * 100).toFixed(2);
        }

        if (Number.isNaN(price)) {
            price = '---';
        }
        return {price: price, percent: percent};
    }

    netProfitSpringOOO = () => {
        const {sellingPriceSpring, priceSpring, isSellingSpringNds, isSpringNds} = this.state;
        let price = '---';
        let percent = '---';
        if (+sellingPriceSpring > 0 && +priceSpring > 0){
            const sellingPriceSpringWithoutNds = isSellingSpringNds ? sellingPriceSpring / 1.2 : sellingPriceSpring;
            const priceSpringWithoutNds = isSpringNds ? priceSpring / 1.2 : priceSpring;
            price = (+sellingPriceSpringWithoutNds - +priceSpringWithoutNds - ((+sellingPriceSpringWithoutNds - +priceSpringWithoutNds) * 0.2)).toFixed(2);
            percent = ((+sellingPriceSpringWithoutNds - +priceSpringWithoutNds) / +priceSpringWithoutNds * 100).toFixed(2);
        }
        if (Number.isNaN(price)) {
            price = '---';
        }
        return {price: price, percent: percent};
    }

    netProfitComplectIp = () => {
        const {priceSpring, sellingPrice, sellingPriceSpring, numberMetersInOrder} = this.state;
        let profit = '---';
        let percent = '---';
        let priceComplect = '---';
        let sum = '---';
        const netProfitSpringIp = this.netProfitSpringIp().price;
        const netProfitIp = this.netProfitIp().price;
        if (+netProfitSpringIp > 0 && +netProfitIp > 0){
            profit = (+netProfitSpringIp + +netProfitIp).toFixed(2);
            const purshasePrice = (+priceSpring + +this.calculatePriceIp()).toFixed(2);
            priceComplect = (+sellingPriceSpring + +sellingPrice).toFixed(2);
            percent = ((+priceComplect - +purshasePrice) / +purshasePrice * 100).toFixed(2);
            sum = (+numberMetersInOrder * profit).toFixed(2);
        }

        if (+sum <= 0 || Number.isNaN(sum)){
            sum = '---';
        }

        return {profit: profit, priceComplect: priceComplect, percent: percent, sum: sum}
    }

    netProfitComplectOOO = () => {
        const {priceSpring, sellingPrice, sellingPriceSpring, isSpringNds, isSellingSpringNds, isSellingNds, numberMetersInOrder} = this.state;
        let profit = '---';
        let percent = '---';
        let priceComplectWithoutNds = '---';
        let priceComplectWithNds = '---';
        let sum = '---';
        const netProfitSpringOOO = this.netProfitSpringOOO().price;
        const netProfitOOO = this.netProfitOOO().price;
        if (+netProfitSpringOOO > 0 && netProfitOOO > 0){

            profit = (+netProfitSpringOOO + +netProfitOOO).toFixed(2);

            const purshasePrice = ((isSpringNds ? +priceSpring / 1.2 : +priceSpring) + +this.calculatePriceOooWithoutNds()).toFixed(2);

            priceComplectWithoutNds = ((isSellingSpringNds ? +sellingPriceSpring / 1.2 : +sellingPriceSpring)  + (isSellingNds ? +sellingPrice / 1.2 : +sellingPrice)).toFixed(2);

            priceComplectWithNds = (+priceComplectWithoutNds + (+priceComplectWithoutNds * 0.2)).toFixed(2);

            percent = ((+priceComplectWithoutNds - +purshasePrice) / +purshasePrice * 100).toFixed(2);

            sum = (+numberMetersInOrder * +profit).toFixed(2);
        }

        if(+sum <= 0 || Number.isNaN(sum)) {
            sum = '---';
        }

        return {profit: profit, priceComplectWithoutNds: priceComplectWithoutNds, priceComplectWithNds: priceComplectWithNds, percent: percent, sum: sum};
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
                            calculatePriceOooWithNds={this.calculatePriceOooWithNds}
                            netProfitIp={this.netProfitIp}
                            netProfitOOO={this.netProfitOOO}
                            netProfitSpringIp={this.netProfitSpringIp}
                            netProfitSpringOOO={this.netProfitSpringOOO}
                            netProfitComplectIp={this.netProfitComplectIp}
                            netProfitComplectOOO={this.netProfitComplectOOO}/>
                        </div>
                    </div>
                </div>       
            </div> 
        );
    }
}
export default App;