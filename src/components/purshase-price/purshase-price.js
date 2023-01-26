

import './purshase-price.css';


const PurshasePrice = (props) => {
    const {calculatePriceOooWithNds, calculatePriceOooWithoutNds, calculatePriceIp} = props;


    return (
        <div className="container  sticky-top">
            
            <div className="row justify-content-center">
                <div>
                    <h2>Себестоимость 1м профиля</h2>
                    <div className='col-12'>
                        для ИП {calculatePriceIp()} р. без НДС
                    </div>
                    <div className='col-12'>
                        для ООО {calculatePriceOooWithoutNds()} р. без НДС {calculatePriceOooWithNds()} с НДС
                    </div>
                </div>
            </div> 
        </div>   
         
    );
}


export default PurshasePrice;