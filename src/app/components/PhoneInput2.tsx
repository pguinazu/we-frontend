import { TextField, Autocomplete, InputAdornment } from '@mui/material';
import { SetStateAction, useState } from 'react';
import countries from '../../../public/select-options/countries.json';

export default function PhoneInput2() {
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('');
  
  const handlePhoneChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setPhone(event.target.value);
  };

  const handleCountryCodeChange = (event: any, newValue: { label: string; code: string } | null) => {
    if (newValue) setCountryCode(newValue.code);
  };

  const countryCodes = countries;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <Autocomplete
          options={countryCodes}
          getOptionLabel={(option) => `${option.label} (${option.code})`}
          onChange={handleCountryCodeChange}
          style={{backgroundColor: '#FAFAFA'}}
          renderInput={(params) => (
            <TextField {...params} label="País" variant="filled" style={{backgroundColor: '#FAFAFA'}}/>
          )}
          sx={{ minWidth: 120 }}
        />
        <TextField
          label="Teléfono"
          placeholder="11-2563-2500"
          variant="filled"
          value={phone}
          onChange={handlePhoneChange}
          fullWidth
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
            startAdornment: (
              <InputAdornment position="start">{countryCode}</InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
}
