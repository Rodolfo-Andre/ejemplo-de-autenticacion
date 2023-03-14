# Ejemplo de autenticación con React y Supabase

## Descripción

Aplicación desarrollada con React + TypeScript que simula una autenticación ya sea por email con contraseña o por medio de aplicaciones de terceros como es el caso de Google y GitHub. La interfaz está construida por la librería MUI para una mejora en la apariencia visual.

## Instalación

Para ejecutar la aplicación en tu entorno local, deberás tener en cuenta lo siguiente:

- Contar con una cuenta de Supabase. Es fácil de crear y es gratis pero con algunas limitaciones de hardware y sin servicios adicionales.

Luego dentro del proyecto crear un archivo **.env** la cual se tendrá que exponer algunas variables. Toma como ejemplo el siguiente formato:

```bash
VITE_SUPABASE_URL=
VITE_SUPABASE_KEY=
VITE_SITE_KEY=
```

Una vez configurado el archivo **.env** procedemos a instalar las dependecias que necesita el proyecto para poder funcionar, para ello ejecutamos lo siguiente:

```bash
npm i
```

Este comando nos creará una carpeta **node_modules** que contienen todas las depedencias del proyecto, entre ellas se encuentra las librerías usadas como **(Yup, Formik, MUI, Supabase, entre otros)**. Ahora sí, podemos ejecutar el proyecto, escribimos el siguiente comando:

```bash
npm run dev
```
