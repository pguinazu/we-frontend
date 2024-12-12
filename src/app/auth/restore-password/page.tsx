"use client"

import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/app/components/Button";
import Title from "@/app/components/Title";
import Subtitle from "@/app/components/Subtitle";
import { ErrorOutline, InfoOutlined } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const RestorePasswordLastStep = () => {
    const router = useRouter();

  // Esquema de validación de Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .email("Ingrese un correo electrónico válido")
      .required("El correo electrónico es obligatorio"),
  });

  // Configuración de Formik
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log('Form values:', values);
      router.push('/auth/restore-password-last-step'); 
    },
  });

  return (
    <div
      className="flex flex-col items-center justify-start min-h-screen px-6"
      style={{
        background: "linear-gradient(3.12deg, #000000 3.74%, #232323 79.77%, #434343 124.44%)",
      }}
    >
      <div className="w-full max-w-xs mb-4">
        <div className="flex items-center gap-3 mb-2 px-2 pt-9">
          <Title text="Recuperar tu cuenta" textAlign="left" />
        </div>
        <div className="w-full">
          <Subtitle
            text="Ingresa tu correo electrónico para buscar tu cuenta"
            textAlign="left"
          />
        </div>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="relative w-full max-w-xs p-3 bg-[#202020] shadow-md rounded-md flex flex-col gap-6"
      >
        <TextField
          label="Correo electrónico"
          placeholder="juan@gmail.com"
          variant="filled"
          name="username"
          fullWidth
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={Boolean(formik.errors.username && formik.touched.username)}
          helperText={formik.touched.username && formik.errors.username}
          InputProps={{
            style: { backgroundColor: "#FAFAFA" },
            endAdornment: (
              formik.errors.username && formik.touched.username && (
                <InputAdornment position="end">
                  <ErrorOutline color="error" />
                </InputAdornment>
              )
            ),
          }}
        />
        <Button
          label="Recibir código"
          className="w-full"
          type="submit"
          disabled={!formik.isValid || !formik.touched.username}
        />
      </form>

      <div className="w-full bg-[#202020] p-5 rounded-lg shadow-md mt-6 flex items-center gap-4">
        <InfoOutlined className="text-[#FAFAFA] w-5 h-5 shrink-0" />
        <Subtitle
          text="Si tenés problemas con el código de ingreso revisa en spam o intenta ingresar con otro correo."
          textAlign="left"
          className="text-[#FAFAFA]"
        />
      </div>

      <div className="text-center mt-6 text-[#FAFAFA] text-[14px]">
        ¿No recibiste el código?{" "}
        <a href="/auth/login" className="underline">
          Reenviar código
        </a>
      </div>
    </div>
  );
};

export default RestorePasswordLastStep;
