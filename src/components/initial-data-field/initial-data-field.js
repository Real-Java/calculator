import {Component} from 'react';

import './initial-data-field.css'

class InitialDataField extends Component{
    constructor(props){
        super(props);
        this.state = {
            isCostShtripsNds: false,
            priceShtrips: '',
            isPalletNds: false,
            quantityShtrips: '',
            quantityPallets: '',
            isPriceDeliveryNds: false,
            priceDelivery: '',
            isCraneNds: false,
            cranePrice: '',
            weight: ''
        }
    }

    onCostShtripsNds = () => {
        this.setState(({isCostShtripsNds}) => (
            {
                isCostShtripsNds: !isCostShtripsNds
            }
        ))
    }

    onPriceShtrips = (e) => {
        this.setState ({priceShtrips: e.target.value});
    }

    onSwitchPalletNds = () => {
        this.setState(({isPalletNds}) => (
            {
                isPalletNds: !isPalletNds
            }
        ))
        console.log(this.state.isPalletNds);
    }

    onQuantityShtrips = (e) => {
        this.setState({quantityShtrips: e.target.value})
        console.log(this.state.quantityShtrips);
    }

    onQuantityPallets = (e) => {
        this.setState({quantityPallets: e.target.value})
        console.log(this.state.quantityPallets);
    }

    onPriceDeliveryNds = () => {
        this.setState(({isPriceDeliveryNds}) => ({
            isPriceDeliveryNds: !isPriceDeliveryNds
        }))
        console.log(this.state.isPriceDeliveryNds);
    }

    onPriceDelivery = (e) => {
        this.setState({priceDelivery: e.target.value})
        console.log(this.state.priceDelivery);
    }

    onCraneNds = () => {
        this.setState(({isCraneNds}) => ({
            isCraneNds: !isCraneNds
        }))
    }

    onCranePrice = (e) => {
        this.setState({cranePrice: e.target.value})
        console.log(this.state.cranePrice);
    }

    onWeight = (e) => {
        this.setState({weight: e.target.value});
        console.log(this.state.weight);
    }
    


    render() {
            // is-invalid
            const {isCostShtripsNds} = this.state;
    return (
        <div className="container">
            <div className='costShtrips'>
            <h1>Калькулятор расчета профиля</h1>
            <div className="row justify-content-center">
                <h2>Стоимость на заводе</h2>
                <div className='col-5 inits'>
                    <div className="form-check form-switch">
                        <input onChange={this.onCostShtripsNds} className="form-check-input" type="checkbox" role="switch" id="switchNds1"/>
                        <label className="form-check-label" htmlFor="switchNds1">НДС</label>
                    </div>
                    
                    <form className="form-floating">
                         <input onChange={this.onPriceShtrips} type="number" min='0' step='0.01' className="form-control" id="priceShtrips" placeholder="number"/>
                        <label htmlFor="priceShtrips">Цена штрипса {isCostShtripsNds ? 'с НДС' : 'без НДС'}</label>
                    </form>
                </div>
                
                <div className='col-5 inits'>
                    <div className="form-check form-switch">
                        <input onChange={this.onSwitchPalletNds} className="form-check-input" type="checkbox" role="switch" id="switchPallet"/>
                        <label className="form-check-label" htmlFor="switchPallet">НДС</label>
                    </div>
                    <form className="form-floating">
                        
                        <input type="number" min='0' className="form-control is-invalid" id="palletPrice" placeholder="number"/>
                        <label htmlFor="palletPrice">Цена паллета {this.state.isPalletNds ? 'с НДС' : 'без НДС'}</label>
                    </form>

                </div>
             </div>

             <div className="row justify-content-center">
                <div className='col-5 inits'>
                    <form className="form-floating">
                        <input onChange={this.onQuantityShtrips} type="number" min='0' step='any' className="form-control is-invalid" id="quantityShtrips" placeholder="number"/>
                        <label htmlFor="quantityShtrips">Количество штрипса в тоннах</label>
                    </form>
                </div>
                
                <div className='col-5 inits'>
                    <form className="form-floating">
                        <input onChange={this.onQuantityPallets} type="number" min='0' className="form-control is-invalid" id="quantityPallets" placeholder="number"/>
                        <label htmlFor="quantityPallets">Количество Паллетов</label>
                    </form>
                </div>
             </div>
            </div>

            <div className="delivery">
                <div className="row justify-content-center">
                    <h2>Доставка</h2>
                    <div className='col-5 inits'>
                        <div className="form-check form-switch">
                            <input onChange={this.onPriceDeliveryNds} className="form-check-input" type="checkbox" role="switch" id="switchNds2"/>
                            <label className="form-check-label" htmlFor="switchNds2">НДС</label>
                        </div>
                        <form className="form-floating">
                            
                            <input onChange={this.onPriceDelivery} type="number" min='0' className="form-control is-invalid" id="deliveryPrice" placeholder="number"/>
                            <label htmlFor="deliveryPrice">Цена доставки {this.state.isPriceDeliveryNds ? 'с НДС' : 'без НДС'}</label>
                        </form>
                    </div>

                    <div className='col-5 inits'>
                        <div className="form-check form-switch">
                            <input onChange={this.onCraneNds} className="form-check-input" type="checkbox" role="switch" id="switchNds3"/>
                            <label className="form-check-label" htmlFor="switchNds3">НДС</label>
                        </div>
                        <form className="form-floating">
                            <input onChange={this.onCranePrice} type="number" min='0' className="form-control is-invalid" id="crane" placeholder="number"/>
                            <label htmlFor="crane">Цена автокрана {this.state.isCraneNds ? 'с НДС' : 'без НДС'}</label>
                        </form>
                    </div>
                </div>
            </div>

            <div className="weight">
                <div className="row justify-content-center">
                    <h2>Расчетный вес 1м профиля</h2>
                    <div className="col-5">
                    <form className="form-floating">
                             <input onChange={this.onWeight} type="number" min='0' step='any' className="form-control is-invalid" id="weight" placeholder="number"/>
                            <label htmlFor="weight">вес в кг.</label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default InitialDataField;

