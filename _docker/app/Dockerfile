FROM php:8.1-fpm

# Установка зависимостей
RUN apt-get update && apt-get install -y \
    apt-utils \
    libpq-dev \
    libpng-dev \
    libzip-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    zip unzip \
    git

# Конфигурация и установка расширений PHP
RUN docker-php-ext-configure gd --with-freetype --with-jpeg && \
    docker-php-ext-install pdo_mysql mysqli bcmath gd zip

# Устанавливаем права доступа для /var/www и /tmp
RUN chmod -R 777 /var/www && \
    chmod 1777 /tmp

# Очистка
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

WORKDIR /var/www/bitrix

COPY ./_docker/app/php.ini /usr/local/etc/php/conf.d/php.ini


# # Install composer
# ENV COMPOSER_ALLOW_SUPERUSER=1
# RUN curl -sS https://getcomposer.org/installer | php -- \
#     --filename=composer \
#     --install-dir=/usr/local/bin


