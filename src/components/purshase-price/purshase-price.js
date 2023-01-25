

import './purshase-price.css';


const PurshasePrice = (props) => {
    const {calculatePriceOooWithNds, calculatePriceOooWithoutNds, calculatePriceIp} = props;


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
                    {calculatePriceIp()}
                </div>
                <div className='col-3'>
                    ---
                </div>
            </div>

            <div className="row justify-content-start">
                <div className='col-3'>
                    для ООО
                </div>
                <div className='col-3'>
                    {calculatePriceOooWithoutNds()}
                </div>
                <div className='col-3'>
                {calculatePriceOooWithNds() }
                </div>
            </div>

        </div>
    );
}


export default PurshasePrice;