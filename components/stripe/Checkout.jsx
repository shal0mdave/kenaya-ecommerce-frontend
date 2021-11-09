import React from 'react'
import { toast } from 'react-toastify'
import StripeCheckout from 'react-stripe-checkout'


const STRIPE_PUBLISHABLE_KEY = `pk_test_51JtqhpIcqjp9zaLavrvXYFONKjKdQ4CT3fL5ELfX6wxjhVWaCmGldA22oWH8dtvh8N9aMz9KjGyv2Fx4iHNlSnsW00KRkUdXeB`;

const CURRENCY = 'USD';

const fromDollarToCent = amount => parseInt(amount * 100);


const onToken = (amount, description) => token => {
    toast.success('Payment Successful')
    console.log(token)
}


const Checkout = ({ name, description, amount, label }) =>
  <StripeCheckout
     label={label}
     name={name}
     description={description}
     amount={fromDollarToCent(amount)}
     token={onToken(amount, description)}
     currency={CURRENCY}
     stripeKey={STRIPE_PUBLISHABLE_KEY}
     zipCode
     email
     allowRememberMe
  />

export default Checkout;