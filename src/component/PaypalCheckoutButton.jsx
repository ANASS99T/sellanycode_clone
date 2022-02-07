import { useState, useEffect } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import transactionService from '../services/Transaction.service';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

const PaypalCheckoutButton = (props) => {
  const { product } = props;
  // console.log(product)
  const [myProduct, setMyProduct] = useState({});
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const [already, setAlready] = useState(false);
  const [isOwner, setIsOwner] = useState(true);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    setMyProduct({ description: product?.name, amount: product?.priceSingle });
    // console.log(product?.id)
    transactionService
      .isOwner({ product: product?.id })
      .then((res) => {
        console.log(res?.isOwner);
        setIsOwner(res?.isOwner);
        setMessage('You are the owner of this item');
        setType('warning');
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleApprove = (orderID) => {
    // Confirm the order in the backend

    setPaidFor(true);
  };

  const FailedPayment = () => {
    alert(message);
    console.log('Faild payment');
  };

  if (!paidFor)
    return (
      <div>
        <PayPalButtons
          style={{ color: 'gold', shape: 'pill', label: 'buynow' }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: myProduct?.description,
                  amount: {
                    value: myProduct?.amount,
                  },
                },
              ],
            });
          }}
          onClick={(data, actions) => {
            if (isOwner) {
              setMessage('You are the owner of this item');

              return actions.reject();
            } else if (already) {
              alert(
                'You already bought this product. Go to your account downloads to view your item'
              );
              return actions.reject();
            } else {
              return actions.resolve();
            }
          }}
          onApprove={async (data, actions) => {
            const order = await actions.order.capture();
            console.log('order : ', order);
            handleApprove(data.orderID);
          }}
          onError={(err) => {
            FailedPayment();
            setError(err);
            console.log('paypal error: ', err);
          }}
          onCancel={() => {
            console.log('order cancelled');
          }}
        />
        {/* <Collapse in={open}>
          <Alert
            severity={type}
            action={
              <IconButton
                aria-label='close'
                color='inherit'
                size='small'
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize='inherit' />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {message}
          </Alert>
        </Collapse> */}
      </div>
    );
  else
    return (
      <div className='text-primary text-center'>
        Thank you for your purchase!
      </div>
    );
};

export default PaypalCheckoutButton;
