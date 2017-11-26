import React, {Component} from "react";
import {Row, Col, Card, CardImg, CardHeader, CardBlock, Button, FormGroup, Label, Input, Table, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {postRequest, getRequest} from "../../../helper/network";
import NumberFormat from "react-number-format";
import images from './image.png';

class Product extends Component {
    constructor(props){
        super(props);

        this.state = {
            product: [],
            modal: false,
            quantity: "",
            productPrice: "",
            totalPrice: "",
        };

        this.toggle = this.toggle.bind(this);
    }

    componentDidMount(){
        this.fetchProduct();
    }

    toggle(){
        this.setState({
            modal: !this.state.modal
        })
    }

    fetchProduct(){
        getRequest('/api/product/showProduct', (res) => {
            this.setState({ product: res.data });
            console.log(res.data)
        }, (err) => {
            console.log(err);
        });
    }

    doBuy(e){
        let payload = {
            id : e.target.id
        }
        postRequest('/api/product/'+payload.id+'/buy', (res) => {
            console.log(res.data)
        }, (err) => {
            console.log(err)
        })
    }

    getX(e){
        this.setState({
            quantity: e.target.value
         })
    }

    doCheck(e){
        this.setState = {
            modal:!this.state.modal
        }

        let payload = {
            id: e.target.id
        }

        getRequest('/api/product/showProduct/'+payload.id+'/'+this.state.quantity, (res) => {

        }, (err) => {
            console.log(err);
        });
    }


  render() {
    return (
      <div className="animated fadeIn">
      { this.state.product.map((product) => {
          return(
            <Col xs="12" sm="6" md="4" key={product.id}>
              <Card className="card-accent-primary">
                <CardHeader>
                  {product.name}
                </CardHeader>
                <CardBlock className="card-body">
                  <CardImg src={images}/>
                  <p>Price :</p><p>Rp. {product.price}</p>
                  <p>Quantity : <input type="text" name="quantity" onChange={this.getX.bind(this)}/></p>
                  <p>
                      <Button id={product.id} onClick={this.doCheck.bind(this)} color="success">Buy</Button>
                      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                        <FormGroup>
                          <Label htmlFor="name">Name</Label>
                          <Input type="text" name="name" placeholder="Enter your product name"/>

                          <Label htmlFor="phonenumber">Nomor Handphone</Label>
                          <Input type="text" name="phonenumber"/>

                          <Label htmlFor="totalPrice">Total Price</Label>
                          <p>{this.state.totalPrice}</p>
                        </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="primary" onClick={this.toggle}>Send</Button>{' '}
                          <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                      </Modal>
                  </p>
                </CardBlock>
              </Card>
            </Col>
          )
      }) }
      </div>
    )
  }
}

export default Product;
