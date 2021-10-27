const initstate = {
    products: [{
        id: 1,
        name: "men check t-shirt for summer season",
        image: '1.jpg',
        price: 20,
        discount: 2,
        discountprice: 20 - 2 / 100 * 20,
        quantity: 1,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
        id: 2,
        name: "women t-shirt for summer",
        image: '2.jpg',
        price: 30,
        discount: 5,
        discountprice: 30 - 4 / 100 * 30,
        quantity: 1,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
        id: 3,
        name: "man trouser for all season",
        image: '3.jpg',
        price: 15,
        discount: 3,
        discountprice: 15 - 3 / 100 * 15,
        quantity: 1,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
        id: 4,
        name: "shoes for all seasons",
        image: '4.jpg',
        price: 50,
        discount: 4,
        discountprice: 50 - 5 / 100 * 50,
        quantity: 1,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
        id: 5,
        name: "female soot for summer",
        image: '5.jpg',
        price: 25,
        discount: 2,
        discountprice: 25 - 2 / 100 * 25,
        quantity: 1,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
        id: 6,
        name: "male jeans",
        image: '6.jpg',
        price: 60,
        discount: 6,
        discountprice: 60 - 6 / 100 * 60,
        quantity: 1,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    }, {
        id: 7,
        name: "male trouser for all season",
        image: '7.jpg',
        price: 20,
        discount: 2,
        discountprice: 35 - 2 / 100 * 35,
        quantity: 1,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    }, {
        id: 8,
        name: "male jacket for winter",
        image: '8.jpg',
        price: 95,
        discount: 4,
        discountprice: 95 - 4 / 100 * 95,
        quantity: 1,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
        id: 9,
        name: "men t-shirt for summer",
        image: '9.jpg',
        price: 20,
        discount: 2,
        discountprice: 20 - 2 / 100 * 20,
        quantity: 1,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
        id: 10,
        name: "male jacket for all season",
        image: '10.jpg',
        price: 20,
        discount: 4,
        discountprice: 95 - 4 / 100 * 95,
        quantity: 1,
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    ],
    product:{

    }
}


const ProductsReducer = (state = initstate, action) => {
    switch (action.type) {
        case "PRODUCT":
            return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default: 
        return state;
    }
}

export default ProductsReducer;