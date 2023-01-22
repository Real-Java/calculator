import {Component} from 'react';

import './initial-data-field.css'

class InitialDataField extends Component{
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
            weight: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }    

    onCostShtripsNds = () => {
        this.setState(({isCostShtripsNds}) => (
            {
                isCostShtripsNds: !isCostShtripsNds
            }
        ))
    }

    onSwitchPalletNds = () => {
        this.setState(({isPalletNds}) => (
            {
                isPalletNds: !isPalletNds
            }
        ))
        console.log(this.state.isPalletNds);
    }

    onPriceDeliveryNds = () => {
        this.setState(({isPriceDeliveryNds}) => ({
            isPriceDeliveryNds: !isPriceDeliveryNds
        }))
        console.log(this.state.isPriceDeliveryNds);
    }
 
    onCraneNds = () => {
        this.setState(({isCraneNds}) => ({
            isCraneNds: !isCraneNds
        }))
    }

    render() {
            // is-invalid
        return (
        <div className="container">
            <div className='costShtrips'>
            <h1>Калькулятор расчета профиля</h1>
            <div className="row justify-content-center">
                <h2>Стоимость на заводе</h2>
                <div className='col-5 inits'>
                    <div className="form-check form-switch">
                        <input onChange={this.onCostShtripsNds} className="form-check-input" type="checkbox" role="switch" id="switchNds1" name="isCostShtripsNds"
                        value={this.isCostShtripsNds}/>
                        <label className="form-check-label" htmlFor="switchNds1">НДС</label>
                    </div>
                    
                    <form className="form-floating">
                         <input onChange={this.onValueChange} type="number" min='0' step='0.01' className="form-control" id="priceShtrips" placeholder="number" name="priceShtrips"/>
                        <label htmlFor="priceShtrips">Цена штрипса {this.state.isCostShtripsNds ? 'с НДС' : 'без НДС'}</label>
                    </form>
                </div>
                
                <div className='col-5 inits'>
                    <div className="form-check form-switch">
                        <input onChange={this.onSwitchPalletNds} className="form-check-input" type="checkbox" role="switch" id="switchPallet" name="isPalletNds"/>
                        <label className="form-check-label" htmlFor="switchPallet">НДС</label>
                    </div>
                    <form className="form-floating">
                        <input onChange={this.onValueChange} type="number" min='0' className="form-control is-invalid" id="palletPrice" placeholder="number" name="pricePallet" value={this.state.pricePallet}/>
                        <label htmlFor="palletPrice">Цена паллета {this.state.isPalletNds ? 'с НДС' : 'без НДС'}</label>
                    </form>

                </div>
             </div>

             <div className="row justify-content-center">
                <div className='col-5 inits'>
                    <form className="form-floating">
                        <input onChange={this.onValueChange} type="number" min='0' step='any' className="form-control is-invalid" id="quantityShtrips" placeholder="number" name="quantityShtrips" value={this.state.quantityShtrips}/>
                        <label htmlFor="quantityShtrips">Количество штрипса в тоннах</label>
                    </form>
                </div>
                
                <div className='col-5 inits'>
                    <form className="form-floating">
                        <input onChange={this.onValueChange} type="number" min='0' className="form-control is-invalid" id="quantityPallets" placeholder="number" name="quantityPallets" value={this.state.quantityPallets}/>
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
                            
                            <input onChange={this.onValueChange} type="number" min='0' className="form-control is-invalid" id="deliveryPrice" placeholder="number" name="priceDelivery" value={this.state.priceDelivery}/>
                            <label htmlFor="deliveryPrice">Цена доставки {this.state.isPriceDeliveryNds ? 'с НДС' : 'без НДС'}</label>
                        </form>
                    </div>

                    <div className='col-5 inits'>
                        <div className="form-check form-switch">
                            <input onChange={this.onCraneNds} className="form-check-input" type="checkbox" role="switch" id="switchNds3"/>
                            <label className="form-check-label" htmlFor="switchNds3">НДС</label>
                        </div>
                        <form className="form-floating">
                            <input onChange={this.onValueChange} type="number" min='0' className="form-control is-invalid" id="crane" placeholder="number" name="cranePrice" value={this.state.cranePrice}/>
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
                             <input onChange={this.onValueChange} type="number" min='0' step='any' className="form-control is-invalid" id="weight" placeholder="number" name="weight" value={this.state.weight}/>
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

