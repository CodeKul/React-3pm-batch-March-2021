import React from 'react'
import {connect} from 'react-redux'
import Link from 'react-router-dom'
import {addProductToCart} from "../../actions"
import {formatMoney} from "../../pipes/priceFormatter"

const ProductDetail = (props) => {
    const {
        title,
        images,
        brand,
        price,
        cpu,
        camera,
        size,weight,
        display,
        battery,
        memory,
        description,
        id,
    } = props.product;

    const onCart = () => {
        props.dispatch(addProductToCart(props.product))
    };

    return(
        <aside className="col-sm-7">
            <article className="card-body p-5">
                <h3 className="title mb-3">
                    {title}
                </h3>

                <p className="price-detail-wrap">
                    <span className="price text-warning h3">
                        <span className="currency">$</span>
                        <span className="num">{formatMoney(price)}</span>
                    </span>
                </p>

                <dl className="item-property">
                    <dt>Description</dt>
                    <dd><p className="text-capitalize">{description}</p></dd>
                </dl>

                <dl className="param param-feature">
                    <dt>Brand</dt>
                    <dd className="text-capitalize">{brand}</dd>
                </dl>


                <dl className="param param-feature">
                    <dt>Size</dt>
                    <dd className="text-capitalize">{size}</dd>
                </dl>

                <dl className="param param-feature">
                    <dt>Camera</dt>
                    <dd className="text-capitalize">{camera}</dd>
                </dl>

                <dl className="param param-feature">
                    <dt>CPU</dt>
                    <dd className="text-capitalize">{cpu}</dd>
                </dl>

                <dl className="param param-feature">
                    <dt>Memory</dt>
                    <dd className="text-capitalize">{memory}</dd>
                </dl>

                <dl className="param param-feature">
                    <dt>Display</dt>
                    <dd className="text-capitalize">{display}</dd>
                </dl>

                <dl className="param param-feature">
                    <dt>Battery</dt>
                    <dd className="text-capitalize">{battery}</dd>
                </dl>

                <hr />

                <hr />

                <button
                onClick={onCart}
                className="btn btn-lg btn-outline-primary text-uppercase">
                    <i className="fa fa-shopping-cart">Add to cart</i>
                </button>
                
                
            </article>
        </aside>
    )
}

export default connect()(ProductDetail);