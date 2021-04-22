import './stripe-button.styles.scss';

import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({price}) => {
    const priceInCents = price * 100;
    const publishableKey = "pk_test_51IiyNWLGKZd25Pz5OiGZrohn8mFr3eVcKk9R1i2LTaT0cQDkeQRP7N4SHqzwYgqluF0ADVxZ1W7owIMXkjPPU5Bm00p3UUVwgb";

    const onToken = token => {
        // This is where we communicate with the backend to pass the charge
        console.log(token);
        alert("Payment Successful");
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="F-merch"
            billingAddress
            shippingAddress
            description={`Your total is ${price}USD`}
            price={priceInCents}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeButton;