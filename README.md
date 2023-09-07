nginx, php-fpm 8.1, mysql 8.0, node 20.x

Ubuntu ставил версии 22.04.2 LTS.

Bitrix ставил в эту же папку, в папку bitrix. Она создасться после команды docker-compose up -d

Composer, git, node устанавливаются глобально в контейнере. Для использования нужно зайти в контейнер.

Команды:

docker-compose up -d;

docker-compose down;

docker rmi Image <name> - удалить образ;

docker build -t <name> . - пересобирает образ;

sudo chmod -R 777 <path>;

посмотреть запущенные контейнеры - docker ps;

зайти в контейнер - docker exec -it --user root <container_name> /bin/bash;