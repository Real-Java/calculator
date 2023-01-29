import { Container, Row, Col, Table} from 'react-bootstrap';

import './purshase-price.css';


const PurshasePrice = (props) => {
    const {calculatePriceOooWithNds, calculatePriceOooWithoutNds, calculatePriceIp, netProfitIp, netProfitSpringIp, netProfitOOO, netProfitSpringOOO, netProfitComplectIp, netProfitComplectOOO} = props;


    return (
        <Container className="container sticky-top">
            
            <Row>
                <h6>Себестоимость 1м профиля</h6>
                <Col>
                    <Table striped bordered hover size="sm"  className='col-12 table'>
                        <thead>
                            <tr>
                                <th>Предприятие</th>
                                <th>без НДС</th>
                                <th>с НДС</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                        <tr>
                            <th>ИП</th>
                            <th>{calculatePriceIp()}</th>
                            <th>---</th>
                        </tr>
                        <tr>
                            <th>ООО</th>
                            <th>{calculatePriceOooWithoutNds()}</th>
                            <th>{calculatePriceOooWithNds()}</th>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
                
            </Row> 

            <Row>
                <h6>продажа профиля</h6>
                <Col>
                    <Table striped bordered hover size="sm"  className='col-12 table'>
                        <thead>
                            <tr>
                                <th>Предприятие</th>
                                <th>прибыль</th>
                                <th>% наценки</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>ИП</th>
                                <th>{netProfitIp().price}</th>
                                <th>{netProfitIp().percent}</th>
                            </tr>
                            <tr>
                                <th>ООО</th>
                                <th>{netProfitOOO().price}</th>
                                <th>{netProfitOOO().percent}</th>
                            </tr>
                        </tbody>
                    </Table>
                </Col>

                
            </Row>

             <Row>
                <h6>продажа пружины</h6>

                <Col>
                    <Table striped bordered hover size="sm"  className='col-12 table'>
                        <thead>
                            <tr>
                                <th>Предприятие</th>
                                <th>прибыль</th>
                                <th>% наценки</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>ИП</th>
                                <th>{netProfitSpringIp().price}</th>
                                <th>{netProfitSpringIp().percent}</th>
                            </tr>
                            <tr>
                                <th>ООО</th>
                                <th>{netProfitSpringOOO().price}</th>
                                <th>{netProfitSpringOOO().percent}</th>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                
            </Row>

            <Row>
                <h6>продажа комплекта</h6>
                <Col>
                    <Table striped bordered hover size="sm"  className='col-12 table'>
                        <thead>
                            <tr>
                                <th>Предприятие</th>
                                <th>Цена комплекта без НДС</th>
                                <th>Цена комплекта с НДС</th>
                                <th>прибыль</th>
                                <th>% наценки</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>ИП</th>
                                <th>{netProfitComplectIp().priceComplect}</th>
                                <th>---</th>
                                <th>{netProfitComplectIp().profit}</th>
                                <th>{netProfitComplectIp().percent}</th>
                            </tr>
                            <tr>
                                <th>ООО</th>
                                <th>{netProfitComplectOOO().priceComplectWithoutNds}</th>
                                <th>{netProfitComplectOOO().priceComplectWithNds}</th>
                                <th>{netProfitComplectOOO().profit}</th>
                                <th>{netProfitComplectOOO().percent}</th>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                
            </Row>

            <Row>
                <h6>Сумма прибыли</h6>
                <Col>
                    <Table striped bordered hover size="sm"  className='col-12 table'>
                        <thead>
                            <tr>
                                <th>Предприятие</th>
                                <th>Сумма прибыли</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>ИП</th>
                                <th>{netProfitComplectIp().sum}</th>
                            </tr>
                            <tr>
                                <th>ООО</th>
                                <th>{netProfitComplectOOO().sum}</th>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>   
    );
}


export default PurshasePrice;