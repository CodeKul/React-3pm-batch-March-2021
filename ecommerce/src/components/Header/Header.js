import React from 'react'
import {NavLink} from "react-router-dom"
import {connect} from "react-redux"

const Header = ({cartLength}) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >

<div className="container">
    <NavLink className="navbar-brand">Ecommerce</NavLink>

<div>

<ul className="navbar-nav ml-auto">
    <li className="nav-item">
        <NavLink className="nav-link" to={"/cart"}> <i className="fa fa-shopping-cart mr-2"/> Cart {cartLength? `(${cartLength})`:""}</NavLink>   
   
    </li>
</ul>
</div>
</div>
        </nav>
    )

}

const mapStateToProps = (state) => {
    return {
        cartLength: state.shop.cart.length
    }
}

export default connect(mapStateToProps, null)(Header);


