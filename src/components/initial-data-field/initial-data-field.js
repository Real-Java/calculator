

import './initial-data-field.css'

const InitialDataField = (props) => {
    const {isCostShtripsNds, priceShtrips, isPalletNds, pricePallet, quantityShtrips,         quantityPallets, isPriceDeliveryNds, priceDelivery, isCraneNds,
    cranePrice, weight, priceSpring, sellingPriceIP} = props.data;
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
                <div className="row justify-content-center">
                    <h2>Стоимость на заводе</h2>
                    <div className='col-10 inits'>
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

                    <div className='col-10 inits'>
                        <form className="form-floating">
                            <input onChange={(e) => onValueChange(e)} type="number" min='0' step='any' className={redBorder(quantityShtrips)} id="quantityShtrips" placeholder="number" name="quantityShtrips"/>
                            <label htmlFor="quantityShtrips">Количество штрипса в тоннах</label>
                        </form>
                    </div>
                    
                    <div className='col-10 inits'>
                        <div className="form-check form-switch">
                            <input onChange={(e) => onChangeNds(e)} className="form-check-input" type="checkbox" role="switch" id="switchNds2" data-toggle="isPalletNds"/>
                            <label className="form-check-label" htmlFor="switchNds2">НДС</label>
                        </div>
                        <form className="form-floating">
                            <input onChange={(e) => onValueChange(e)} type="number" min='0' className="form-control" id="palletPrice" placeholder="number" name="pricePallet"/>
                            <label htmlFor="palletPrice">Цена паллета {reqState('isPalletNds') ? 'с НДС' : 'без НДС'}</label>
                        </form>

                    </div>

                    <div className='col-10 inits'>
                        <form className="form-floating">
                            <input onChange={(e) => onValueChange(e)} type="number" min='0' className="form-control" id="quantityPallets" placeholder="number" name="quantityPallets"/>
                            <label htmlFor="quantityPallets">Количество Паллетов</label>
                        </form>
                    </div>
                    <div className='col-10 inits'>
                        <div className="form-check form-switch">
                            <input onChange={(e) => onChangeNds(e)} className="form-check-input" type="checkbox" role="switch" id="switchNds3" data-toggle="isSpringNds"
                            />
                            <label className="form-check-label" htmlFor="switchNds3">НДС</label>
                        </div>
                    
                        <form className="form-floating">
                                <input onChange={(e) => onValueChange(e)} type="number" min='0' step='0.01' className={redBorder(priceSpring)} id="priceSpring" placeholder="number" name="priceSpring"/>
                            <label htmlFor="priceSpring">Цена пружины {reqState('isSpringNds') ? 'с НДС' : 'без НДС'}</label>
                        </form>
                    </div>
                 </div>
            </div>

            <div className="delivery">
                <div className="row justify-content-center">
                    <h2>Доставка</h2>
                    <div className='col-10 inits'>
                        <div className="form-check form-switch">
                            <input onChange={(e) => onChangeNds(e)} className="form-check-input" type="checkbox" role="switch" id="switchNds4"
                            data-toggle="isPriceDeliveryNds"/>
                            <label className="form-check-label" htmlFor="switchNds4">НДС</label>
                        </div>
                        <form className="form-floating">
                            
                            <input onChange={(e) => onValueChange(e)} type="number" min='0' className="form-control" id="deliveryPrice" placeholder="number" name="priceDelivery"/>
                            <label htmlFor="deliveryPrice">Цена доставки {reqState('isPriceDeliveryNds') ? 'с НДС' : 'без НДС'}</label>
                        </form>
                    </div>

                    <div className='col-10 inits'>
                        <div className="form-check form-switch">
                            <input onChange={(e) => onChangeNds(e)} className="form-check-input" type="checkbox" role="switch" id="switchNds5"
                            data-toggle="isCraneNds"/>
                            <label className="form-check-label" htmlFor="switchNds5">НДС</label>
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
                    <div className="col-10 inits">
                    <form className="form-floating">
                                <input onChange={(e) => onValueChange(e)} type="number" min='0' step='any' className={redBorder(weight)} id="weight" placeholder="number" name="weight"/>
                            <label htmlFor="weight">вес в кг.</label>
                        </form>
                    </div>
                </div>
            </div>
            <div className="sellingPrice">
                <div className="row justify-content-center">
                    <h2>Продажа профиля</h2>
                    <div className="col-10 inits">
                    <div className="form-check form-switch">
                        <input onChange={(e) => onChangeNds(e)} className="form-check-input" type="checkbox" role="switch" id="switchNds6" data-toggle="isSellingNds"/>
                        <label className="form-check-label" htmlFor="switchNds6">НДС</label>
                    </div>
                        <form className="form-floating">
                            <input onChange={(e) => onValueChange(e)} type="number" min='0' step='0.01' className={redBorder(sellingPriceIP)} id="sellingPriceIP" placeholder="number" name="sellingPriceIP"/>
                        <label htmlFor="sellingPriceIP">Цена профиля {reqState('isSellingNds') ? 'с НДС' : 'без НДС'}</label>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
);

}

export default InitialDataField;

