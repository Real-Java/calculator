

import './initial-data-field.css'

const InitialDataField = (props) => {
    // const {isCostShtripsNds, priceShtrips, isPalletNds, pricePallet, quantityShtrips,         quantityPallets, isPriceDeliveryNds, priceDelivery, isCraneNds,
    // cranePrice, weight, priceSpring, sellingPrice} = props.data;
    const {onValueChange, onChangeNds, reqState} = props;
       
    const redBorder = (prop) => {
        
        if (prop > 0 ){
            return "form-control";
        }else {
            return "form-control is-invalid"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

   
    const numberInputOnWheelPreventChange = (e) => { 
        // Предотвратить изменение входного значения 
        e.target.blur() 
    
        // Предотвратить прокрутку страницы/контейнера 
        e.stopPropagation() 
    
        // Немедленно перефокусироваться, на следующий тик (после выполнения текущей      
        //функции) 
        setTimeout(() => { 
            e.target.focus() 
        }, 0) 
    } 

    const doFormNds = (prop) => {
        
        return <div className="form-check form-switch">
            <input key={prop} onChange={(e) => onChangeNds(e)} className="form-check-input" type="checkbox" role="switch" id={prop} data-toggle={prop} checked={reqState(prop) ? true: false}/>
            <label className="form-check-label" htmlFor="{prop}">НДС</label>
        </div>
    }

    const doFormInputNumber = (name, text, req, reqIs, redBord) => {
        return <form className="form-floating" onSubmit={handleSubmit} key={name}>
                    <input onChange={(e) => onValueChange(e)} onWheel={numberInputOnWheelPreventChange} type="number" min='0' step='0.01' className={redBorder(redBord ? props.data[name] : 1)} id={name} placeholder="number" name={name} value={reqState(name)}/>
                    <label htmlFor={name}>{text} {req ? reqState(reqIs) ? 'с НДС' : 'без НДС' : ''}</label>
                </form>
    }
      
      
    return (
        <div className="container">
            <div className='costShtrips'>
                <div className="row justify-content-center">
                    <h5>Стоимость закупки</h5>
                    <div className='col-10 inits'>
                        {doFormNds('isCostShtripsNds')}
                        {doFormInputNumber('priceShtrips', 'Цена штрипса', true, 'isCostShtripsNds', true)}
                    </div>

                    <div className='col-10 inits'>
                        {doFormInputNumber('quantityShtrips', 'Количество штрипса в тоннах ', false, null, true)}
                    </div>
                    
                    <div className='col-10 inits'>
                        {doFormNds('isPalletNds')}
                        {doFormInputNumber('pricePallet', 'Цена паллета', true, 'isPalletNds', false)}
                      </div>

                    <div className='col-10 inits'>
                        {doFormInputNumber('quantityPallets', 'Количество Паллетов', false, null, false)}
                    </div>

                    <div className='col-10 inits'>
                        {doFormNds('isSpringNds')}
                        {doFormInputNumber('priceSpring', 'Цена пружины', true, 'isSpringNds', true)}
                    </div>
                </div>
            </div>

            <div className="delivery">
                <div className="row justify-content-center">
                    <h5>Доставка</h5>
                    <div className='col-10 inits'>
                        {doFormNds('isPriceDeliveryNds')}
                        {doFormInputNumber('priceDelivery', 'Цена доставки', true, 'isPriceDeliveryNds', false)}
                    </div>

                    <div className='col-10 inits'>
                        {doFormNds('isCraneNds')}
                        {doFormInputNumber('cranePrice', 'Цена автокрана', true, 'isCraneNds', false)}
                    </div>
                </div>
            </div>

            <div className="weight">
                <div className="row justify-content-center">
                    <h5>Расчетный вес 1м профиля</h5>
                    <div className="col-10 inits">
                        {doFormInputNumber('weight', 'вес в кг', false, null, true)}
                    </div>
                </div>
            </div>
            <div className="sellingPrice">
                <div className="row justify-content-center">
                    <h5>Продажа</h5>
                    <div className="col-10 inits">
                        {doFormNds('isSellingNds')}
                        {doFormInputNumber('sellingPrice', 'Цена профиля', true, 'isSellingNds', true)}
                    </div>
                    <div className="col-10 inits">
                        {doFormNds('isSellingSpringNds')}
                        {doFormInputNumber('sellingPriceSpring', 'Цена пружины', true, 'isSellingSpringNds', true)}
                    </div>
                    <div className="col-10 inits">
                        {doFormInputNumber('numberMetersInOrder', 'Кол-во м комплекта в заказе', false, null, true)}
                    </div>
                </div>
            </div>
        </div>
);

}

export default InitialDataField;

