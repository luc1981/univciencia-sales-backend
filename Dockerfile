# Usamos una versión ligera de Node.js
FROM node:18-slim

# Creamos la carpeta de trabajo dentro del servidor
WORKDIR /app

# Copiamos los archivos de dependencias
COPY package*.json ./

# Instalamos solo lo necesario para producción (más rápido y seguro)
RUN npm install --production

# Copiamos el resto de tu código
COPY . .

# El puerto que usa Cloud Run por defecto es variable, pero le decimos que use el 3000
ENV PORT=3000

# El comando para encender el servidor
CMD ["node", "src/app.js"]