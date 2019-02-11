import React, {Component} from "react";

interface IProps {
    product: {
        key: number,
        name: string,
        price: number,
        description: string,
    }
}

function Product(props: IProps) {
    return (
        <div>
            <h2>{props.product.name}</h2>
            <p>R${props.product.price}
            - {props.product.description}</p>
            <hr></hr>
        </div>
    );
}

export default Product;

/*
productComponents = ProductsData.map(
    item => <Product 
        product={{
            key: item.id,
            name: item.name,
            price: item.price,
            description: item.description,
        }} 
    />)

render() {
    return (
        <div>
            {this.productComponents}
        </div>
    );
}
*/