const initState = {
    products: [],
    TotalPrice: 0,
    TotalQuantity: 0
}

const CartReducer = (state = initState, action) => {
    let findpro;
        let index;
    switch (action.type) {
        
        case 'ADD_TO_CART':

            // action.payload ye mere pas Details.js page se arha h jb m detail page m add to cart button ko click krha ho
            const { product, quantity } = action.payload;
            console.log(`${product.id} , ${quantity}`);
            // console.log(typeof quantity);
            // const check = this.state.products.find(product => product.id === action.payload.product.id)
            const check = state.products.find(pr => pr.id === product.id);

            if (check) {
                return state;
            } else {
                const Tprice = state.TotalPrice + product.discountprice * quantity;
                const Tquantities = state.TotalQuantity + quantity;
                // here we update the quantity value
                product.quantity = quantity;

                // we update initState value here is given in top

                return {
                    ...state, products: [...state.products, product], TotalPrice: Tprice,
                    TotalQuantity: Tquantities
                }
                // console.log(Tprice);
            }
            case 'INC':
                // yha hm jha se id arha h or jo product ki id h usko match krhe h
                findpro = state.products.find(product => product.id === action.payload);
                // yha hm product ki id nhi product ka index maloom krha h take new element add krsake
                index = state.products.findIndex(product => product.id === action.payload);
                // yha hm btn click krne pr increment apply krhe h
                findpro.quantity += 1;
                // YHA hm product ki index dekh kr array ki value update krhe h
                state.products[index] = findpro;
                return{
                    ...state,
                    TotalPrice: state.TotalPrice + findpro.discountprice,
                    TotalQuantity : state.TotalQuantity + 1
                }
                case 'DEC':
                    findpro = state.products.find(product => product.id === action.payload);
                    index = state.products.findIndex(product => product.id === action.payload);
                    if(findpro.quantity > 1){
                        findpro.quantity -= 1;
                        state.products[index] = findpro;
                        return{
                            ...state,
                            TotalPrice: state.TotalPrice - findpro.discountprice,
                            TotalQuantity : state.TotalQuantity - 1
                        }
    
                    }
                    else{
                        return state;
                    }
                case 'REMOVE':
                    findpro = state.products.find(product => product.id === action.payload);
                    const filtered = state.products.filter(product => product.id !== action.payload);
                    return{
                        ...state,
                        products : filtered,
                        TotalPrice: state.TotalPrice - findpro.discountprice * findpro.quantity,
                        TotalQuantity : state.TotalQuantity - findpro.quantity
                    }
                   
        default:
            return state;
    }
}

export default CartReducer;