import { TextField, MenuItem, Select, InputAdornment } from '@mui/material';
import { SetStateAction, useState } from 'react';

export default function PhoneInput() {
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+54'); // Valor predeterminado para Argentina
  
  const handlePhoneChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setPhone(event.target.value);
  };

  const handleCountryCodeChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setCountryCode(event.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <Select
          value={countryCode}
          onChange={handleCountryCodeChange}
          variant="filled"
          sx={{ minWidth: 80 }}
          style={{backgroundColor: '#FAFAFA'}}
        >
          <MenuItem value="+54">🇦🇷 +54 Argentina</MenuItem>
          <MenuItem value="+1">🇺🇸 +1 USA</MenuItem>
          <MenuItem value="+44">🇬🇧 +44 UK</MenuItem>
          {/* Agrega más opciones de país */}
        </Select>
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
