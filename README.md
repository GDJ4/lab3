# Lab3
## Установка и запуск
### 1. Скачать и установить [node.js](https://nodejs.org/en/download)
Прим.: npm устанавливается в процессе установки node.js
### 2. Проверка установки
```bash
npm -v #выводит версию npm
```
```bash
node -v #выводит версию node.js
```
### 3. Клонирование репозитория
Прим.: неодбходим [git](https://git-scm.com/downloads)
```bash
git clone https://github.com/WhatWouldDarknessSay/fb_lab3.git
```
### 4. Запуск сервера пользователя
```bash
cd fb_lab2/frontend 
```
Установка зависимостей
```bash
npm install express
```
Запуск сервера
```bash
node server.js
```
### 4. Запуск сервера администратора
```bash
cd fb_lab2/admin
```
Установка зависимостей
```bash
npm install express
```
Запуск сервера
```bash
node server.js
```
### 5. Открытие страницы пользователя
Перейти по ссылке:
http://localhost:8080
## Взаимодействие с админ-панелью через cURL
### a) Получить список всех товаров (GET)
```bash
curl -X GET http://localhost:3000/products
```
### b) Добавить новый товар (POST)
```bash
curl -X POST http://localhost:3000/products -H "Content-Type: application/json" -d '{
    "id": 6,
    "name": "Product 6",
    "description": "Description of Product 6",
    "price": 600,
    "category": ["Category 1"]
}'

### c) Удалить товар (DELETE)
```bash
curl -X DELETE http://localhost:3000/products/1
```
