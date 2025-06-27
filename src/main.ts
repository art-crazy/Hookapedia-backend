// import * as dotenv from 'dotenv';
// dotenv.config();
//
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { NestExpressApplication } from '@nestjs/platform-express';
//
// async function bootstrap() {
//   const app = await NestFactory.create<NestExpressApplication>(AppModule);
//
//   // Устанавливаем глобальный префикс /api
//   app.setGlobalPrefix('api');
//
//   // Настройка CORS (можно подправить список origin под себя)
//   app.enableCors({
//     origin: (origin, callback) => {
//       if (
//         !origin ||
//         ['https://chto-prigotovit.ru', 'https://www.chto-prigotovit.ru'].includes(origin) ||
//         /^http:\/\/localhost:\d+$/.test(origin)
//       ) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//     credentials: true,
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
//     allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
//     exposedHeaders: ['Content-Length', 'Content-Range'],
//   });
//
//   // Swagger конфигурация
//   const config = new DocumentBuilder()
//     .setTitle('Nom Nom Nom API')
//     .setDescription('Документация API для бэкенда Nom Nom Nom')
//     .setVersion('1.0')
//     .addBearerAuth()
//     .build();
//
//   const document = SwaggerModule.createDocument(app, config);
//
//   SwaggerModule.setup('api/docs', app, document, {
//     customSiteTitle: 'Nom Nom Nom API - Документация',
//     swaggerOptions: {
//       persistAuthorization: true,
//     },
//   });
//
//   const port = process.env.PORT ?? 3001;
//   await app.listen(port, '0.0.0.0');
//
//   console.log(`🚀 Приложение запущено на: http://localhost:${port}`);
//   console.log(`📚 Документация API доступна по адресу: http://localhost:${port}/api/docs`);
// }
//
// bootstrap();

// Импорт необходимых модулей и библиотек
import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core'; // Основной класс для создания NestJS приложения
import { AppModule } from './app.module'; // Корневой модуль приложения
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'; // Модули для Swagger документации
import { NestExpressApplication } from '@nestjs/platform-express'; // Тип для приложения Express

// Основная функция запуска приложения
async function bootstrap() {
  // Создаем экземпляр приложения NestJS с использованием Express под капотом
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Устанавливаем глобальный префикс для всех API маршрутов (все маршруты будут начинаться с /api)
  app.setGlobalPrefix('api', {
    // exclude: ['docs', 'docs-json'], // явно исключаем swagger-роуты
  });

  // Настраиваем CORS (механизм безопасности браузеров)
  app.enableCors({
    origin: (origin, callback) => {
      if (!origin ||
        ['https://chto-prigotovit.ru', 'https://www.chto-prigotovit.ru'].includes(origin) ||
        /^http:\/\/localhost:\d+$/.test(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'X-Requested-With',
      'Accept',
      'Origin',
    ],
    exposedHeaders: ['Content-Length', 'Content-Range'],
  });

  // Конфигурация Swagger документации
  const config = new DocumentBuilder()
    .setTitle('Nom Nom Nom API') // Заголовок документации
    .setDescription('API документация для Nom Nom Nom') // Описание
    .setVersion('1.0') // Версия API
    .addBearerAuth() // Добавляем поддержку Bearer авторизации
    .build(); // Собираем конфигурацию

  // Создаем Swagger документ на основе конфигурации и приложения
  const document = SwaggerModule.createDocument(app, config);

  // Настраиваем Swagger UI (веб-интерфейс документации)
  SwaggerModule.setup('api/docs', app, document, {
    customSiteTitle: 'API Documentation',
    swaggerOptions: {
      // url: '/api/docs-json',
      persistAuthorization: true,
    },
    // 👇 ВАЖНО: устанавливаем абсолютный путь к Swagger UI ассетам
    // customCssUrl: '/api/docs/swagger-ui.css',
    // customJs: [
    //   '/api/docs/swagger-ui-bundle.js',
    //   '/api/docs/swagger-ui-standalone-preset.js',
    // ],
  });



  // Запускаем приложение на указанном порте (или 3000 по умолчанию)
  await app.listen(process.env.PORT || 3001);
}

// Вызываем функцию bootstrap для запуска приложения
bootstrap();
