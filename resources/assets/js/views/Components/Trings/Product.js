import React, {Component} from "react";
import {Row, Col, Card, CardHeader, CardBlock, Button, FormGroup, Label, Input, Table, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {postRequest, getRequest} from "../../../helper/network";
import NumberFormat from "react-number-format";

class Product extends Component {
    constructor(props){
        super(props);

        this.state = {
            category: [],
            product: [],
            productId: "",
            name: "",
            nameEdit:"",
            category_id: "",
            category_idEdit: "",
            price: "",
            priceEdit: "",
            quantity: "",
            quantityEdit: "",
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState({
            modal: !this.state.modal
        })
    }

    componentDidMount(){
        this.fetchCategory();
        this.fetchProduct();
    }

    fetchCategory(){
        getRequest('/api/category/show',(res) => {
            this.setState({ category: res.data });
        }, (err) => {
            console.log(err);

        });
    }

    fetchProduct(){
        getRequest('/api/product/showProduct',(res) => {
            this.setState({ product: res.data });
        }, (err) => {
            console.log(err);

        });
    }

    onChangeNameProduct(e){
        this.setState({ name: e.target.value })
    }

    onChangeNameProductEdit(e){
        this.setState({ nameEdit: e.target.value })
    }

    onChangeCategoryId(e){
        this.setState({ category_id: e.target.value })
    }

    onChangeCategoryIdEdit(e){
        this.setState({ category_idEdit: e.target.value })
    }

    onChangePrice(e, values){
        let {formattedValue, value} = values;
        this.setState({ price: value })
    }

    onChangePriceEdit(e, values){
        let {formattedValue, value} = values;
        this.setState({ priceEdit: value })
    }

    onChangeQuantity(e){
        this.setState({ quantity: e.target.value })
    }

    onChangeQuantityEdit(e){
        this.setState({ quantityEdit: e.target.value })
    }

    doCreateProduct(){
        let payload = {
            name: this.state.name,
            category_id: this.state.category_id,
            price: this.state.price,
            quantity: this.state.quantity
        }
        postRequest('/api/product/create',payload,(res) => {
            this.fetchProduct();
            console.log(res);
        }, (err) => {
            console.log(err);

        });
    }

    doEditProduct(e){
        this.setState({
            modal: !this.state.modal
        })
        let payload = {
            id: e.target.id,
            name: this.state.nameEdit,
            category_id: this.state.category_idEdit,
            price: this.state.priceEdit,
            quantity: this.state.quantityEdit
        }
        postRequest('/api/product/edit/'+payload.id,payload,(res) => {
            this.fetchProduct();
            console.log(res);
        }, (err) => {
            console.log(err);

        });
    }

    doDestroyProduct(e){
        let payload = {
            id: e.target.id
        }
        getRequest('/api/product/destroy/'+payload.id,(res) => {
            this.fetchProduct();
            console.log(res);
        }, (err) => {
            console.log(err);

        });
    }

    getProductId(e){
        this.setState({
            productId: e.target.id,
            modal: !this.state.modal
        });
    }

  render() {
    return (
      <div className="animated fadeIn">
          <Col xs="12" sm="12">
            <Card>
              <CardHeader>
                <strong>Product</strong>
                <small> Form</small>
              </CardHeader>
              <CardBlock className="card-body">
                <FormGroup>
                  <Label htmlFor="name">Name Product</Label>
                  <Input type="text" id="name" onChange={this.onChangeNameProduct.bind(this)} placeholder="Enter your product name"/>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="category">Category</Label>
                    <Input type="select" name="category" onChange={this.onChangeCategoryId.bind(this)} id="select">
                    <option>Please Select Category</option>
                    { this.state.category.map((category) => {
                        return (
                            <option key={category.id.toString()} value={category.id}>{category.name}</option>
                        )
                    }) }
                    </Input>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="price">Price, 1 Quantity</Label>
                   <NumberFormat className="form-control" required placeholder="Enter price, 1 quantity" value={this.state.price} thousandSeparator={true} prefix={'Rp '} onChange={this.onChangePrice.bind(this)}/>
                </FormGroup>
                <FormGroup row>
                  <Col>
                    <FormGroup>
                      <Label htmlFor="quantity">Quantity</Label>
                      <Input type="text" id="quantity" onChange={this.onChangeQuantity.bind(this)} placeholder="Enter your quantity"/>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup>
                    <Button color="success" onClick={this.doCreateProduct.bind(this)}>Create</Button>
                </FormGroup>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Active Product
              </CardHeader>
              <CardBlock className="card-body">
                <Table responsive striped>
                  <thead>
                  <tr>
                    <th>Name Product</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                  { this.state.product.map((product) => {
                    return (
                        <tr key={product.id}>
                            <td>{ product.name }</td>
                            <td>{ product.get_category.name }</td>
                            <td>{ product.price }</td>
                            <td>{ product.quantity }</td>
                            <td>
                                <Button onClick={this.getProductId.bind(this)} id={product.id} color="warning">Edit</Button>
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                  <ModalHeader toggle={this.toggle}>Edit Product</ModalHeader>
                                  <ModalBody>
                                  <FormGroup>
                                    <Label htmlFor="name">Product Name</Label>
                                    <Input type="text" id="name" placeholder="Enter your product name" onChange={this.onChangeNameProductEdit.bind(this)}/>

                                    <Label htmlFor="category">Category Name</Label>
                                    <Input type="select" name="category_id" onChange={this.onChangeCategoryIdEdit.bind(this)} id="select">
                                    <option>Please Select Category</option>
                                    { this.state.category.map((category) => {
                                            return (
                                                <option key={category.id.toString()} value={category.id}>{category.name}</option>
                                            )
                                    }) }
                                    </Input>

                                    <Label htmlFor="price">Price, 1 Quantity</Label>
                                    <NumberFormat className="form-control" required placeholder="Enter price, 1 quantity" value={this.state.priceEdit} thousandSeparator={true} prefix={'Rp '} onChange={this.onChangePriceEdit.bind(this)}/>

                                    <Label htmlFor="quantity">Quantity</Label>
                                    <Input type="text" id="quantity" placeholder="Enter your quantity" onChange={this.onChangeQuantityEdit.bind(this)}/>

                                  </FormGroup>
                                  </ModalBody>
                                  <ModalFooter>
                                    <Button color="primary" id={product.id} color="warning" onClick={this.doEditProduct.bind(this)}>Edit</Button>
                                    <Button color="secondary" color="primary" onClick={this.toggle}>Cancel</Button>
                                  </ModalFooter>
                                </Modal>

                                <Button color="danger" id={product.id} onClick={this.doDestroyProduct.bind(this)}>Delete</Button>
                            </td>
                        </tr>
                    )
                  }) }
                  </tbody>
                </Table>
              </CardBlock>
            </Card>
          </Col>
      </div>
    )
  }
}

export default Product;
