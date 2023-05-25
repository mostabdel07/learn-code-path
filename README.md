# Learn Code Path

Welcome to the courses latform Learn Code Path! This web application provides an online platform for users to access and enroll in various courses. It allows instructors to create and manage courses, while students can browse and enroll in courses based on their interests.

## Development Installation

## Client dir

1. Clone the repository: `git clone https://github.com/mostabdel07/learn-code-path.git`
2. Install dependencies in client dir: `npm install`
3. Configure environment variables in api dir: Create a `.env.local` file and set the api call endpoint.
4. Start the server client server: `npm run dev`

## Api dir

1. Install dependencies in api dir: `php composer install`
2. Configure environment variables in api dir: Create a `.env` file and set the required variables (database credentials, API keys, etc.).
3. Set a new hash key with `php artisan key:generate`
4. Create Database tables, structure using `php artisan migrate:fresh --seed`
5. Execute the `.sql` script in api/scripts/ dir to fill the database with data.
6. Start the server api server: `php artisan serve`

## Production Server

Server name: Proven-projectes6
IP: 23.88.119.199
User: root
Password: 8s%BdstT7mC%hWJW

## Production Installation

## Client dir

1. Clone the repository: `git clone https://github.com/mostabdel07/learn-code-path.git`
2. Install dependencies in client dir: `npm install`
3. Configure environment variables in api dir: Create a `.env.local` file and set the api call endpoint.
4. Execute a build using `npm run build`
5. Run server: `pm2 start npm --name "client" -- start`

## Api dir

1. Install dependencies in api dir: `php composer install`
2. Configure environment variables in api dir: Create a `.env` file and set the required variables (database credentials, API keys, etc.).
3. Set a new hash key with `php artisan key:generate`
4. Create Database tables, structure using `php artisan migrate:fresh --seed`
5. Execute the `.sql` script in api/scripts/ dir to fill the database with data.
6. Start the server api server: `pm2 start ecosystem.config.json`

## Configuration

The following environment variables need to be set in the `.env` file:

- `DB_USER`: user1
- `DB_PASSWORD`: learn1234

## Usage

1. Access the application through your web browser at `https://learncodepath.tech`.
2. Sign up for an account as a regular or admin.
3. Browse available courses and view detailed course information.
4. Purchase a course as a student or create a new course as an administrator.
5. Interact with the course content, subscribe to bootcamps, and see your courses in the dashboard.

## File Organization

learn-code-path/
│
client/
├── src/
│ ├── components/ # React components
│ ├── routes/ # Route definitions
│ ├── utils/ # Utility functions
│ ├── App.js # Main application component
│ └── index.js # Entry point
├── public/
│ ├── index.html # HTML template
│ └── favicon.ico # Favicon
├── .gitignore # Git ignore file
├── package.json # NPM dependencies and scripts
│
api/
├── app
│ ├── Console
│ │ └── Commands
│ ├── Exceptions
│ ├── Http
│ │ ├── Controllers
│ │ ├── Middleware
│ │ └── Requests
│ ├── Models
│ └── Providers
├── bootstrap
├── config
├── database
│ ├── factories
│ ├── migrations
│ └── seeds
├── public
├── resources
│ ├── lang
│ ├── views
│ └── assets
├── routes
├── storage
│ ├── app
│ ├── framework
│ └── logs
├── tests
├── vendor
│
├── .gitignore
└── README.md # Project README file

## API Documentation

The Courses Platform Web provides a RESTful API for developers to interact with. Please refer to the [API documentation](api-docs.md) for detailed information on available endpoints, request/response formats, and authentication requirements.

## Troubleshooting

If you encounter any issues or errors while using the application, try the following steps:

1. Ensure that all dependencies are installed correctly.
2. Check the database connection and configuration.
3. Clear your browser cache and cookies.

## Contribution Guidelines

We welcome contributions to enhance the Courses Platform Web. If you would like to contribute, please follow these guidelines:

1. Fork the repository and create a new branch.
2. Make your changes and test them thoroughly.
3. Submit a pull request, providing a clear description of the changes made.
4. Ensure your code follows our coding standards and conventions.

## License

The Courses Platform Web is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the license terms.
