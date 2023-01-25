

import './initial-data-field.css'

const InitialDataField = (props) => {
    const {isCostShtripsNds, priceShtrips, isPalletNds, pricePallet, quantityShtrips,         quantityPallets, isPriceDeliveryNds, priceDelivery, isCraneNds,
    cranePrice, weight} = props.data;
    const {onValueChange, onChangeNds, reqState} = props;
       
    const redBorder = (prop) => {
        if (prop > 0 ){
            return "form-control";
        }else {
            return "form-control is-invalid"
        }
    }
    return (
        <div className="container">
            <div className='costShtrips'>
            <h1>Калькулятор расчета профиля</h1>
            <div className="row justify-content-center">
                <h2>Стоимость на заводе</h2>
                <div className='col-5 inits'>
                    <div className="form-check form-switch">
                        <input onChange={(e) => onChangeNds(e)} className="form-check-input" type="checkbox" role="switch" id="switchNds1" data-toggle="isCostShtripsNds"
                        />
                        <label className="form-check-label" htmlFor="switchNds1">НДС</label>
                    </div>
                    
                    <form className="form-floating">
                            <input onChange={(e) => onValueChange(e)} type="number" min='0' step='0.01' className={redBorder(priceShtrips)} id="priceShtrips" placeholder="number" name="priceShtrips"/>
                        <label htmlFor="priceShtrips">Цена штрипса {reqState('isCostShtripsNds') ? 'с НДС' : 'без НДС'}</label>
                    </form>
                </div>
                
                <div className='col-5 inits'>
                    <div className="form-check form-switch">
                        <input onChange={(e) => onChangeNds(e)} className="form-check-input" type="checkbox" role="switch" id="switchPallet" data-toggle="isPalletNds"/>
                        <label className="form-check-label" htmlFor="switchPallet">НДС</label>
                    </div>
                    <form className="form-floating">
                        <input onChange={(e) => onValueChange(e)} type="number" min='0' className="form-control" id="palletPrice" placeholder="number" name="pricePallet"/>
                        <label htmlFor="palletPrice">Цена паллета {reqState('isPalletNds') ? 'с НДС' : 'без НДС'}</label>
                    </form>

                </div>
                </div>

                <div className="row justify-content-center">
                <div className='col-5 inits'>
                    <form className="form-floating">
                        <input onChange={(e) => onValueChange(e)} type="number" min='0' step='any' className={redBorder(quantityShtrips)} id="quantityShtrips" placeholder="number" name="quantityShtrips"/>
                        <label htmlFor="quantityShtrips">Количество штрипса в тоннах</label>
                    </form>
                </div>
                
                <div className='col-5 inits'>
                    <form className="form-floating">
                        <input onChange={(e) => onValueChange(e)} type="number" min='0' className="form-control" id="quantityPallets" placeholder="number" name="quantityPallets"/>
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
                            <input onChange={(e) => onChangeNds(e)} className="form-check-input" type="checkbox" role="switch" id="switchNds2"
                            data-toggle="isPriceDeliveryNds"/>
                            <label className="form-check-label" htmlFor="switchNds2">НДС</label>
                        </div>
                        <form className="form-floating">
                            
                            <input onChange={(e) => onValueChange(e)} type="number" min='0' className="form-control" id="deliveryPrice" placeholder="number" name="priceDelivery"/>
                            <label htmlFor="deliveryPrice">Цена доставки {reqState('isPriceDeliveryNds') ? 'с НДС' : 'без НДС'}</label>
                        </form>
                    </div>

                    <div className='col-5 inits'>
                        <div className="form-check form-switch">
                            <input onChange={(e) => onChangeNds(e)} className="form-check-input" type="checkbox" role="switch" id="switchNds3"
                            data-toggle="isCraneNds"/>
                            <label className="form-check-label" htmlFor="switchNds3">НДС</label>
                        </div>
                        <form className="form-floating">
                            <input onChange={(e) => onValueChange(e)} type="number" min='0' className="form-control" id="crane" placeholder="number" name="cranePrice"/>
                            <label htmlFor="crane">Цена автокрана {reqState('isCraneNds') ? 'с НДС' : 'без НДС'}</label>
                        </form>
                    </div>
                </div>
            </div>

            <div className="weight">
                <div className="row justify-content-center">
                    <h2>Расчетный вес 1м профиля</h2>
                    <div className="col-5">
                    <form className="form-floating">
                                <input onChange={(e) => onValueChange(e)} type="number" min='0' step='any' className={redBorder(weight)} id="weight" placeholder="number" name="weight"/>
                            <label htmlFor="weight">вес в кг.</label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
);

}

export default InitialDataField;

