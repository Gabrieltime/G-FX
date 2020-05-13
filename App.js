import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button,
    Table,
    FormGroup,
    Card, 
    CardTitle, 
    CardText, 
    InputGroupAddon,
    Breadcrumb,  
    InputGroup, 
    InputGroupText, 
    Input,
    BreadcrumbItem,
    Form, 
    Label,
    Alert,
    ListGroup, 
    ListGroupItem,
    TabContent, 
    TabPane,CustomInput
} from 'reactstrap';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//charts
import { Chart } from "react-google-charts";
import { render } from "react-dom";

const options = {
    title: "Age vs. Weight comparison",
    hAxis: { title: "Age", viewWindow: { min: 0, max: 15 } },
    vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
    legend: "none"
  };
  const data = [
    ["Age", "Weight"],
    [8, 12],
    [4, 5.5],
    [11, 14],
    [4, 5],
    [3, 3.5],
    [6.5, 7]
  ];

var chartData = [];




class App extends Component {
    
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


    render() {
        return (
            <div>
                <Navbar color="inverse" light expand="md">

                    <NavbarBrand href="/">Goliath-fx</NavbarBrand>
                    
                    <NavbarToggler onClick={this.toggle} />
                    
                    <Collapse isOpen={this.state.isOpen} navbar>

                        <Nav className="ml-auto" navbar>

                            <NavItem>
                                <Button color="secondary">Go out</Button>
                            </NavItem>
                            
                        </Nav>

                    </Collapse>
               
                </Navbar>

                <Row>
                    <Col xs="12">
                        <ListGroup horizontal>
                            <ListGroupItem tag="a" href="#"></ListGroupItem>
                            <ListGroupItem tag="a" href="#"></ListGroupItem>
                            <ListGroupItem tag="a" href="#"></ListGroupItem>
                            <ListGroupItem tag="a" href="#"></ListGroupItem>
                            <ListGroupItem tag="a" href="#"></ListGroupItem>
                            <ListGroupItem tag="a" href="#"></ListGroupItem>
                            <ListGroupItem tag="a" href="#"></ListGroupItem>
                            <ListGroupItem tag="a" href="#"></ListGroupItem>
                            <ListGroupItem tag="a" href="#"></ListGroupItem>
                        
                        </ListGroup>
                        <br></br>
                    </Col>
                    <Col xs="3">
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                           
                            <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Auto trading" />
                            <hr></hr>
                            <p>Numero Cuenta: 503595</p>
                            <p>Balance: 1399.05</p>
                            <p>Equidad: 1313.87</p>
                            <p>Margen libre: 1271.43</p>
                            <p>Nivel de Margen (%): 3095.48 </p>
                            <p>Margen: 42.44</p>
                        </Card>
                        <br></br>
                        <Card body >
                            <p>Estatus</p>
                            <Input type="select" bsSize="sm">
                                <option>Pendiente</option>
                                <option>Cancelado</option>
                                <option>Completado</option>
                                <option>Procesado</option>
                            </Input>
                            <br></br>
                            <Table striped>
                                <thead>
                                    <tr>
                                    <th>Coin</th>
                                    <th>Last Price</th>
                                    <th>Change</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="align-middle"> BTC/ETH</td>
                                        <td class="crypt-down align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="" data-original-title="$ 0.05">0.000056</span></td>
                                        <td> <span class="d-block">5.3424984</span> <b class="crypt-down">-5.4%</b> </td>
                                        
                                    </tr>
                                    <tr>
                                        <td class="align-middle"> BTC/ETH</td>
                                        <td class="crypt-down align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="" data-original-title="$ 0.05">0.000056</span></td>
                                        <td> <span class="d-block">5.3424984</span> <b class="crypt-down">-5.4%</b> </td>
                                        
                                    </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                    <Col xs="6">
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <Chart
                            chartType="ScatterChart"
                            data={data}
                            xs="6"
                            options={options}
                            width="100%"
                            height="400px"
                            legendToggle
                            />       
                        {/* <Chart
                            chartType="ScatterChart"
                            rows={[[8, 12], [4, 5.5], [11, 14], [4, 5], [3, 3.5], [6.5, 7]]}
                            columns={[
                                {
                                type: "number",
                                label: "Age"
                                },
                                {
                                type: "number",
                                label: "Weight"
                                }
                            ]}
                            options={
                                // Chart options
                                {
                                title: "Age vs. Weight comparison",
                                hAxis: {
                                    title: "Age",
                                    viewWindow: { min: 0, max: 15 }
                                },
                                vAxis: { title: "Weight", viewWindow: { min: 0, max: 15 } },
                                legend: "none"
                                }
                            }
                            width={"100%"}
                            height={"400px"}
                            legendToggle
                            />     */}
                        </Card>
                        <br></br>
                        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                            <FormGroup>
                                <Input type="select" bsSize="sm">
                                    <option>execution by market</option>
                                    <option>Buy Limit</option>
                                    <option>Sell Limit</option>
                                    <option>Buy Stop</option>
                                    <option>Sell Stop</option>
                                </Input>
                                <br></br>
                                <Input xs="6" type="text" placeholder="0.00"  id="" bsSize="sm"/>
                                <br></br>
                                <Row>
                                    <Col>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <Button color="danger">-</Button>
                                            </InputGroupAddon>
                                            <Input placeholder="0.00" />
                                            <InputGroupAddon addonType="append">
                                                <Button color="success">+</Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                    <Col>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend">
                                                <Button color="danger">-</Button>
                                            </InputGroupAddon>
                                            <Input placeholder="0.00" />
                                            <InputGroupAddon addonType="append">
                                                <Button color="success">+</Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <br></br>
                                <Form inline>
                                    <Button 
                                        tag="a"
                                        color="danger"
                                        size="large"
                                        href=""
                                        target="_blank"
                                    >
                                        SELL
                                    </Button>
                                    <Button 
                                        tag="a"
                                        color="success"
                                        size="large"
                                        href=""
                                        target="_blank"
                                    >
                                        BUY
                                    </Button>
                                </Form>
                            </FormGroup>
                        </Card>
                    </Col>
                    <Col xs="3">
                        <p>Mercados</p>
                            <Input type="select" bsSize="sm">
                                <option>Cripto monedas</option>
                                <option>Forex</option>
                            </Input>
                            <br></br>
                        <Table dark>
                            <thead>
                                <tr>
                                    <th>Coin</th>
                                    <th>Last Price</th>
                                    <th>Change</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="align-middle"> BTC/ETH</td>
                                    <td class="crypt-down align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="" data-original-title="$ 0.05">0.000056</span></td>
                                    <td> <span class="d-block">5.3424984</span> <b class="crypt-down">-5.4%</b> </td>
                                </tr>
                                <tr>
                                    <td class="align-middle"> LTC/ETH</td>
                                    <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="" data-original-title="$ 0.05">0.0000564</span></td>
                                    <td> <span class="d-block">6.6768876</span> <span>6.7%</span> </td>
                                </tr>
                                <tr>
                                    <td class="align-middle"> ERC20/ETH</td>
                                    <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="" data-original-title="$ 0.05">0.0000234</span></td>
                                    <td> <span class="d-block">6.6768876</span> <b class="crypt-down">-7.7%</b> </td>
                                </tr>
                                <tr>
                                    <td class="align-middle"> DOGE/ETH</td>
                                    <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="" data-original-title="$ 0.05">0.000344</span></td>
                                    <td> <span class="d-block">6.6768876</span> <b class="crypt-up">+3.7%</b> </td>
                                </tr>
                                <tr>
                                    <td class="align-middle"> XMR/ETH</td>
                                    <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="" data-original-title="$ 0.05">0.000344</span></td>
                                    <td> <span class="d-block">6.6768876</span> <span>3.7%</span> </td>
                                </tr>
                                <tr>
                                    <td class="align-middle"> HMB/ETH</td>
                                    <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="" data-original-title="$ 0.05">0.000344</span></td>
                                    <td> <span class="d-block">6.6768876</span> <span class="crypt-up"><b>+3.7%</b></span> </td>
                                </tr>
                                <tr>
                                    <td class="align-middle"> FTN/ETH</td>
                                    <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="" data-original-title="$ 0.05">0.000344</span></td>
                                    <td> <span class="d-block">6.6768876</span> <span class="crypt-up"><b>+3.7%</b></span> </td>
                                </tr>
                                <tr>
                                    <td class="align-middle"> MGC/ETH</td>
                                    <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="" data-original-title="$ 0.05">0.000344</span></td>
                                    <td> <span class="d-block">6.6768876</span> <span class="crypt-up"><b>+3.7%</b></span> </td>
                                </tr>
                                <tr>
                                    <td class="align-middle"> IOTE/ETH</td>
                                    <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="" data-original-title="$ 0.05">0.56723</span></td>
                                    <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                </tr>
                                <tr>
                                    <td class="align-middle"> YTA/ETH</td>
                                    <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="" data-original-title="$ 0.05">0.56723</span></td>
                                    <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                </tr>
                                <tr>
                                    <td class="align-middle"> PQR/ETH</td>
                                    <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="" data-original-title="$ 0.05">0.56723</span></td>
                                    <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                </tr>
                                <tr>
                                    <td class="align-middle"> PAX/ETH</td>
                                    <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="" data-original-title="$ 0.05">0.000344</span></td>
                                    <td> <span class="d-block">6.6768876</span> <span class="crypt-up"><b>+3.7%</b></span> </td>
                                </tr>
                                <tr>
                                    <td class="align-middle"> VBT/ETH</td>
                                    <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="" data-original-title="$ 0.05">0.56723</span></td>
                                    <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                </tr>
                                <tr>
                                    <td class="align-middle"> CCE/ETH</td>
                                    <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="" data-original-title="$ 0.05">0.56723</span></td>
                                    <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                </tr>
                                <tr>
                                    <td class="align-middle"> QTUM/ETH</td>
                                    <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="" data-original-title="$ 0.05">0.56723</span></td>
                                    <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                </tr>
                                <tr>
                                    <td class="align-middle"> BOA/ETH</td>
                                    <td class="align-middle"><span class="pr-2" data-toggle="tooltip" data-placement="right" title="" data-original-title="$ 0.05">0.56723</span></td>
                                    <td> <span class="d-block">9.34546</span> <span>6.7%</span> </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </div>
        );
    }
}
export default App;