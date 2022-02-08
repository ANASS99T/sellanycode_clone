import { useState, useEffect } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';
import transactionService from '../services/Transaction.service';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { AlertTitle } from '@mui/material';

const PaypalCheckoutButton = (props) => {
  const { product } = props;
  // console.log(product)
  const [myProduct, setMyProduct] = useState({});
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const [already, setAlready] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
      console.log({ description: product?.name, amount: product?.priceSingle })
    setMyProduct({ description: product?.name, amount: product?.priceSingle });
    // console.log(product?.id)
    transactionService
      .isOwner({ product: product?.id })
      .then((res) => {
        console.log("is owner : ", res?.isOwner)

        if (res?.isOwner) {
          setIsOwner(true);
          setMessage('You are the owner of this item');
          setType('warning');
        } else {
          setIsOwner(false);
          setMessage('You are the owner of this item');
          setType('warning');
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage('An error occured');
        setType('error');
      });

    transactionService
      .hasProduct({ product: product?.id })
      .then((res) => {
          console.log("Has porduct : ", res?.hasProduct)
        if (res?.hasProduct) {
          setAlready(true);
          setMessage(
            'You already bought this product. Go to your account downloads to view your item'
          );
          setType('warning');
        } else {
          setAlready(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage('An error occured');
        setType('error');
      });
  }, []);

  const handleApprove = (orderID) => {
    // Confirm the order in the backend
    transactionService
      .successTransactions({
        product: product?.id,
        amount: product?.priceSingle,
        reference: orderID,
      })
      .then((res) => {
        setMessage('Thank you for your purchase!');
        setType('success');
        setPaidFor(true);
      })
      .catch((err) => {
        console.log(err);
        setMessage('An error occured');
        setType('error');
      });
  };

  const FailedPayment = () => {
    transactionService
      .failedTransaction({
        product: product?.id,
        amount: product?.priceSingle,
        reference: '-',
      })
      .then((res) => {
        setMessage('Transaction failed');
        setType('error');
        setPaidFor(true);
      })
      .catch((err) => {
        console.log(err);
        setMessage('An error occured');
        setType('error');
      });
  };

//   if (!paidFor)
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
              //   setMessage('You are the owner of this item');
              setTimeout(() => {
                return setOpen(true);
              }, 300);
            } else if (already) {
              //   setMessage('You are the owner of this item');
              setTimeout(() => {
                return setOpen(true);
              }, 300);
              //   return actions.reject();
              // } else {
              //   return actions.resolve();
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
        <Collapse
          in={open}
          style={{
            maxWidth: '500px',
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: '1000',
          }}
        >
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
            <AlertTitle style={{ textTransform: 'capitalize' }}>
              {type}
            </AlertTitle>
            {message}
          </Alert>
        </Collapse>
      </div>
    );
//   else
//     return (
//       <div className='text-primary text-center'>
//         Thank you for your purchase!
//       </div>
//     );
};

export default PaypalCheckoutButton;
