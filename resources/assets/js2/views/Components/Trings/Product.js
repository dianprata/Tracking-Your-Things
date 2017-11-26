import React, {Component} from "react";
import {Row, Col, Card, CardImg, CardHeader, CardBlock, Button, FormGroup, Label, Input, Table,} from "reactstrap";
import {postRequest, getRequest} from "../../../helper/network";
import NumberFormat from "react-number-format";
import images from './image.png';

class Product extends Component {
    constructor(props){
        super(props);

        this.state = {
            category: [],
            product: [],
            cart: [],
        };
    }

    componentDidMount(){
        this.fetchProduct();
    }

    fetchProduct(){
        getRequest('/api/product/showProduct', (res) => {
            this.setState({ product: res.data });
            console.log(res.data)
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
                  <p><Button color="primary">-</Button> <Button color="primary" onClick={}>+</Button></p>
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
