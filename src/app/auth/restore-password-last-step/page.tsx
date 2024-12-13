"use client"

import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import Button from "@/app/components/Button";
import Title from "@/app/components/Title";
import Subtitle from "@/app/components/Subtitle";
import { Visibility, VisibilityOff, ErrorOutline } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const validationSchema = Yup.object({
    password: Yup.string()
      .matches(/[A-Z]/, "Debe contener al menos una mayúscula")
      .matches(/\d/, "Debe contener al menos un número")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Debe contener al menos un carácter especial"
      )
      .min(8, "Debe tener entre 8 y 16 caracteres")
      .max(16, "Debe tener entre 8 y 16 caracteres")
      .required("La contraseña es obligatoria"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), undefined], "Las contraseñas deben coincidir")
      .required("Confirmar contraseña es obligatorio"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log('Formulario enviado:', values);
    },
  });

  const passwordValidationRules = [
    {
      label: 'La contraseña debe tener mínimo 8 caracteres y máximo 16 caracteres',
      isValid: formik.values.password.length >= 8 && formik.values.password.length <= 16,
    },
    {
      label: 'La contraseña debe contener al menos una Mayúscula',
      isValid: /[A-Z]/.test(formik.values.password || ''),
    },
    {
      label: 'La contraseña debe contener al menos un número',
      isValid: /\d/.test(formik.values.password || ''),
    },
    {
      label: 'La contraseña debe contener al menos un carácter especial',
      isValid: /[!@#$%^&*(),.?":{}|<>]/.test(formik.values.password || ''),
    },
  ];

  const isFormValid = formik.isValid && formik.dirty && !formik.isSubmitting && formik.values.password === formik.values.confirmPassword;

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen px-6"
      style={{
        background: "linear-gradient(3.12deg, #000000 3.74%, #232323 79.77%, #434343 124.44%)",
      }}
    >
      <div className="w-full max-w-xs mb-4">
        <div className="flex items-center gap-3 mb-2 px-2 pt-9">
          <Title text="Crear nueva contraseña" textAlign="left" />
        </div>
        <div className="w-full">
          <Subtitle
            text="Crea tu nueva contraseña para poder ingresar a tu cuenta"
            textAlign="left"
          />
        </div>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="relative w-full max-w-xs p-3 bg-[#202020] shadow-md rounded-md flex flex-col gap-6"
      >
        {/* Password Field */}
        <div className="relative">
          <TextField
            label="Contraseña"
            placeholder="Contraseña"
            variant="filled"
            type={
              formik.errors.password && formik.touched.password
                ? 'text'
                : showPassword
                ? 'text'
                : 'password'
            }
            fullWidth
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            InputProps={{
              style: { backgroundColor: '#FAFAFA' },
              endAdornment: (
                <InputAdornment position="end">
                  {formik.errors.password && formik.touched.password ? (
                    <ErrorOutline color="error" />
                  ) : (
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />

          {/* Password Validation Rules */}
          {(formik.touched.password || formik.values.password) && (
            <ul className="mt-2 text-sm list-disc pl-5">
              {passwordValidationRules.map((rule, index) => (
                <li
                  key={index}
                  className={rule.isValid ? 'text-white' : 'text-red-500'}
                >
                  {rule.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Confirm Password Field */}
        <TextField
          label="Confirmar contraseña"
          placeholder="Repetir contraseña"
          variant="filled"
          type={
            formik.errors.confirmPassword && formik.touched.confirmPassword
              ? 'text'
              : showConfirmPassword
              ? 'text'
              : 'password'
          }
          fullWidth
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
          InputProps={{
            style: { backgroundColor: '#FAFAFA' },
            endAdornment: (
              <InputAdornment position="end">
                {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                  <ErrorOutline color="error" />
                ) : (
                  <IconButton onClick={handleClickShowConfirmPassword}>
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />

        <Button
          label="Restablecer contraseña"
          type="submit"
          fullWidth={true}
          className="bg-[#FAFAFA] text-[#202022]"
          disabled={!isFormValid}
        />
      </form>
    </div>
  );
};

export default LoginPage;
