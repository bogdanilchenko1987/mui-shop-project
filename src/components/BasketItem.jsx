import { Close } from '@mui/icons-material';
import { IconButton, ListItem, Typography } from '@mui/material';

const BasketItem = ({ removeFromOrder, price, id, name, quantity }) => {
  return (
    <ListItem>
      <Typography variant="body1">
        {name} {price}hrn x{quantity}
      </Typography>

      <IconButton onClick={() => removeFromOrder(id)}>
        <Close />
      </IconButton>
    </ListItem>
  );
};

export default BasketItem;
