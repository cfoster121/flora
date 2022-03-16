import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import CartContent from '../components/CartContent/CartContent';
import '../components/CartContent/cart-content.css';

const Cart = () => {
    const { userId } = useParams();
    const { loading, data } = useQuery(QUERY_USER, {
        variables: { _id: userId },
    });
    const user = data?.user || [];
    console.log('----------------------------');
    console.log(user);

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div id='cart-container' >
          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            
            <CartContent
            user={user}
            />s
          )} */}
          <h1 className='cart-title'>Cart</h1>
          <div className='container-fluid'>
            <CartContent></CartContent>
          </div>
        </div>
    )
};

export default Cart;