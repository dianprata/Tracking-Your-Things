import React, {Component} from "react";
import {Row, Col, Card, CardHeader, CardBlock, Button} from "reactstrap";
import axios from "axios";

class show extends Component {
    constructor(props){
        super(props);

        this.state = {
            post: []
        }
    }

    componentDidMount(){
        this.fetchPost();
    }

    fetchPost(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            this.setState({ post: res.data })
            console.log(res.data);
        }).catch((err)=>{
           console.log(err);
        });
    }

    render() {
        return (
            <div className="animated fadeIn">
                { this.state.post.map((post) => {
                    return (
                        <Col xs="12" sm="6" md="4" key={post.id.toString()}>
                            <Card className="text-white bg-danger">
                                <CardHeader>
                                    {post.title}
                                </CardHeader>
                                <CardBlock className="card-body">
                                    {post.body}
                                </CardBlock>
                            </Card>
                        </Col>
                    )
                }) }
            </div>
        )
    }
}

export default show;
