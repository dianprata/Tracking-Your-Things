import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Footer from '../../components/Footer/';
import Dashboard from '../../views/Dashboard/';
import Charts from '../../views/Charts/';
import Widgets from '../../views/Widgets/';
import Buttons from '../../views/Components/Buttons/';
import Cards from '../../views/Components/Cards/';
import Forms from '../../views/Components/Forms/';
import Modals from '../../views/Components/Modals/';
import SocialButtons from '../../views/Components/SocialButtons/';
import Switches from '../../views/Components/Switches/';
import Tables from '../../views/Components/Tables/';
import Tabs from '../../views/Components/Tabs/';
import FontAwesome from '../../views/Icons/FontAwesome/';
import SimpleLineIcons from '../../views/Icons/SimpleLineIcons/';
import memberVerify from '../../views/Components/Member/Verify';
import productTrings from '../../views/Components/Trings/Product';
import categoryTrings from '../../views/Components/Trings/Category';
import shippingTrings from '../../views/Components/Trings/Shipping';
import historyTrings from '../../views/Components/Trings/History';
import Cookies from 'universal-cookie';
import localStorage from "localStorage";


class Full extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.getCookie();
    }

    getCookie(){
        const cookies = new Cookies();
        let getCookies = cookies.get('token');

        localStorage.setItem('sessionStorage', getCookies);
    }

    render() {
        return (
            <div className="app">
                <Header/>
                <div className="app-body">
                    <Sidebar {...this.props}/>
                    <main className="main">
                        <Breadcrumb/>
                        <Container fluid>
                            <Switch>
                                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                                <Route path="/member/verify-and-deactive" name="Member Verify & Deactive" component={memberVerify} />
                                <Route path="/trings/product" name="Trings Product" component={productTrings}/>
                                <Route path="/trings/category" name="Trings Category" component={categoryTrings}/>
                                <Route path="/trings/shipping" name="Trings Shipping" component={shippingTrings}/>
                                <Route path="/trings/history" name="Trings History" component={historyTrings}/>
                                <Route path="/components/buttons" name="Buttons" component={Buttons}/>
                                <Route path="/components/cards" name="Cards" component={Cards}/>
                                <Route path="/components/forms" name="Forms" component={Forms}/>
                                <Route path="/components/modals" name="Modals" component={Modals}/>
                                <Route path="/components/social-buttons" name="Social Buttons"
                                       component={SocialButtons}/>
                                <Route path="/components/switches" name="Swithces" component={Switches}/>
                                <Route path="/components/tables" name="Tables" component={Tables}/>
                                <Route path="/components/tabs" name="Tabs" component={Tabs}/>
                                <Route path="/icons/font-awesome" name="Font Awesome" component={FontAwesome}/>
                                <Route path="/icons/simple-line-icons" name="Simple Line Icons"
                                       component={SimpleLineIcons}/>
                                <Route path="/widgets" name="Widgets" component={Widgets}/>
                                <Route path="/charts" name="Charts" component={Charts}/>
                                <Redirect from="/" to="/dashboard"/>
                            </Switch>
                        </Container>
                    </main>
                </div>
                <Footer/>
            </div>
    );
    }
    }

    export default Full;
