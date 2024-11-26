import { TextField, Autocomplete, InputAdornment } from '@mui/material';
import { useForm } from '../LoginContext';
import countries from '../../../public/select-options/countries.json';

export default function PhoneInput2() {
  const { formData, setFormData } = useForm();

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, phoneNumber: event.target.value });
  };

  const handleCountryCodeChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: { label: string; code: string } | null
  ) => {
    if (newValue) setFormData({ ...formData, phoneCountryCode: newValue.code });
  };

  const countryCodes = countries;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <Autocomplete
          options={countryCodes}
          getOptionLabel={(option) => `${option.label} (${option.code})`}
          onChange={handleCountryCodeChange}
          style={{ backgroundColor: '#FAFAFA' }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="País"
              variant="filled"
              style={{ backgroundColor: '#FAFAFA' }}
            />
          )}
          sx={{ minWidth: 120 }}
        />
        <TextField
          label="Teléfono"
          placeholder="11-2563-2500"
          variant="filled"
          value={formData.phoneNumber}
          onChange={handlePhoneChange}
          fullWidth
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
            startAdornment: (
              <InputAdornment position="start">{formData.phoneCountryCode}</InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
}
