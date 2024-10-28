# Usa una imagen oficial de PHP con Composer y Node.js
FROM php:8.2-fpm

# Instala dependencias necesarias para Laravel
RUN apt-get update && apt-get install -y \
    zip \
    unzip \
    git \
    curl \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo_mysql gd

# Instala Node.js y npm
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

# Instala Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Instala Node.js y npm
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

# Configuración del directorio de trabajo
WORKDIR /var/www/html

# Copia los archivos y ejecuta Composer y npm
COPY . .
RUN composer install
RUN npm install && npm run dev

# Configuración del usuario y permisos para evitar problemas de permisos con volúmenes
RUN chown -R www-data:www-data /var/www/html && \
    chmod -R 755 /var/www/html

# Expone el puerto 9000 para PHP-FPM
EXPOSE 9000

# Comando para iniciar PHP-FPM
CMD ["php-fpm"]