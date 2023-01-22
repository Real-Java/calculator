import InitialDataField from '../initial-data-field/initial-data-field';
import { Component } from 'react';
import './purshase-price.css';


class PurshasePrice extends Component{
    constructor(props){
        super(props)
    }

    // calculatePriceIp = () => {
    //     const {priceShtrips, quantityShtrips, quantityPallets,
    //         priceDelivery, cranePrice, weight} = InitialDataField.state;
    //         console.log(priceShtrips); //////////////остановился здесь
    // }

    render () {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <h2>Себестоимость 1м профиля</h2>
                    <div className='col-3'>
                        без НДС
                    </div>
                    <div className='col-3'>
                        с НДС
                    </div>
                </div>
          
                <div className="row justify-content-start">
                    <div className='col-3'>
                        для ИП
                    </div>
                    <div className='col-3'>
                        {/* {this.calculatePriceIp()} */}
                    </div>
                    <div className='col-3'>

                    </div>
                </div>

            </div>
        );
    }
}

export default PurshasePrice;