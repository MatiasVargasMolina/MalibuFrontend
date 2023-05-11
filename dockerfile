# Imagen base
FROM node:14

# Directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración
COPY frontend/package*.json ./

# Instalar dependencias
RUN npm install

# Copiar código fuente
COPY frontend/ .

# Exponer el puerto
EXPOSE 5173

# Comando para iniciar el servidor de desarrollo
CMD ["npm", "run", "dev"]