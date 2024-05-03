import { TextField } from '@mui/material';

const Search = props => {
  const { onChange, value } = props;

  return (
    <TextField
      sx={{ mb: '1.5rem' }}
      label="search"
      variant="standard"
      type="search"
      value={value}
      onChange={onChange}
    />
  );
};

export default Search;
