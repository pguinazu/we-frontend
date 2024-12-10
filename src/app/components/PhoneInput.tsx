import { TextField, Autocomplete, InputAdornment } from '@mui/material';
import { useForm } from '../contexts/SignUpContext';
import countries from '../../../public/select-options/countries.json';
import * as yup from 'yup';
import { useState } from 'react';

interface PhoneInputProps {
  onValidChange: (isValid: boolean) => void;
}

export default function PhoneInput({ onValidChange }: Readonly<PhoneInputProps>) {
  const { formData, setFormData } = useForm();
  const [errors, setErrors] = useState<{ phoneNumber?: string }>({});
  const [touched, setTouched] = useState<{ phoneNumber: boolean }>({ phoneNumber: false });

  // Validaciones con yup
  const phoneSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(/^\d+$/, 'El número de teléfono debe contener solo números')
      .required('El número de teléfono es obligatorio'),
  });

  const validatePhoneNumber = (value: string) => {
    try {
      phoneSchema.validateSyncAt('phoneNumber', { phoneNumber: value });
      setErrors((prev) => ({ ...prev, phoneNumber: undefined }));
      onValidChange(true); // Notificar que es válido
    } catch (error: unknown) {
      if (error instanceof yup.ValidationError) {
        setErrors((prev) => ({ ...prev, phoneNumber: error.message }));
        onValidChange(false); // Notificar que no es válido
      }
    }
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Actualizar siempre el valor en el campo para que el usuario lo vea
    setFormData({ ...formData, phoneNumber: value });

    // Validar el valor después de cada cambio
    validatePhoneNumber(value);
  };

  const handleBlur = (field: keyof typeof touched) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleCountryCodeChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: { label: string; code: string } | null
  ) => {
    if (newValue) {
      setFormData({ ...formData, phoneCountryCode: newValue.code });
    }
  };

  const countryCodes = countries;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-start">
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
              sx={{ minWidth: 120 }}
              inputProps={{
                ...params.inputProps,
                readOnly: false, // Evitar escritura manual, pero mantener interacción
              }}
            />
          )}
        />
        <TextField
          label="Teléfono"
          placeholder="11-2563-2500"
          variant="filled"
          value={formData.phoneNumber}
          onChange={handlePhoneChange}
          onBlur={() => handleBlur('phoneNumber')} // Marcar el campo como "tocado" al salir
          fullWidth
          error={!!errors.phoneNumber} // Mostrar error inmediatamente si es inválido
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
            startAdornment: (
              <InputAdornment position="start">{formData.phoneCountryCode}</InputAdornment>
            ),
          }}
        />
      </div>
      {errors.phoneNumber && (
        <div className="text-red-500 text-sm mt-1 w-full">
          {errors.phoneNumber}
        </div>
      )}
    </div>
  );
}
