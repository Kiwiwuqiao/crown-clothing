import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51HzEF7FXQIgvaIYmRs1KadJQXcTQPQgi2lbejNYO9fJqbYiaRsU0Uc6oBPM2ZiY27BHEUzX' +
        'DFoe14IBJyczQm41H00kHPK5pbl'

    const onToken = token => {
        axios({
            url: "payment",
            method: "post",
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert("Payment Successful!!")

        }).catch(error => {

            alert("There was an error. Please use the provided card details for payment")
        })

    }

    return (<StripeCheckout
        label="Pay Now"
        name="Crown Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
    />)
}

export default StripeCheckoutButton