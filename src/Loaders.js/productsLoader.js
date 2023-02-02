const productsLoader =()=>{

    const products  =fetch("product.json");

    return products;

}

export default productsLoader;