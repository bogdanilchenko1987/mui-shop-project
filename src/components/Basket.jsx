import { ShoppingBasket } from '@mui/icons-material';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import BasketItem from './BasketItem';

const Basket = props => {
  const {
    cartOpen,
    cartClose = Function.prototype,
    order = [],
    removeFromOrder,
  } = props;

  return (
    <Drawer anchor="right" open={cartOpen} onClose={cartClose}>
      <List sx={{ width: '400px' }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Basket" />
        </ListItem>
        <Divider />

        {!order.length ? (
          <ListItem>Basket is Empty!</ListItem>
        ) : (
          <>
            {order.map(item => (
              <BasketItem
                key={item.name}
                removeFromOrder={removeFromOrder}
                {...item}
              />
            ))}
            <Divider />
            <ListItem>
              <Typography sx={{ fontWeight: 700 }}>
                Total Price:{' '}
                {order.reduce((acc, item) => {
                  return acc + item.price * item.quantity;
                }, 0)}{' '}
                hrn.
              </Typography>
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  );
};

export default Basket;

// const Basket = props => {
//   const {
//     cartOpen,
//     cartClose = Function.prototype,
//     order = [],
//     removeFromOrder,
//   } = props;

//   return (
//     <Drawer anchor="right" open={cartOpen} onClose={cartClose}>
//       <List sx={{ width: '300px' }}>
//         <ListItem>
//           <ListItemIcon>
//             <ShoppingBasket />
//           </ListItemIcon>
//           <ListItemText primary="Basket" />
//         </ListItem>
//         <Divider />
//         {!order.lenght ? (
//           <ListItem>Basket is Empty</ListItem>
//         ) : (
//           order.map(item => (
//             <BasketItem
//               key={item.name}
//               removeFromOrder={removeFromOrder}
//               {...item}
//             />
//           ))
//         )}
//       </List>
//     </Drawer>
//   );
// };

// export default Basket;
