# Project title: SportSee

# Project demo: https://sweet-semifreddo-14d948.netlify.app/profile/12

# Front-end

## Description

SportSee is a startup dedicated to sports coaching. This project involves developing the new user profile page, which will allow the user to track the number of sessions completed as well as the number of calories burned.

This project is part of the OpenClassrooms curriculum and can be found [here](https://openclassrooms.com/fr/paths/516/projects/812/assignment).

## Technologies Used

- React 18
- Recharts
- Fetch
- Figma (for design and component reference)

## Features

- Responsive design based on Figma maquettes, which can be found [here](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?type=design&node-id=0-1&mode=design&t=sNR3A6MLzHlxXxDR-0).
- Display of the number of sessions completed by the user
- Display of the number of calories burned by the user
- Integration of charts and diagrams to present sports analysis data
- Data retrieval via an API

## Getting Started

### Installation

1. Clone the repository to your local machine.

```
git clone https://github.com/a-melouk/Sportsee
```

2. Navigate to the frontend directory.

```
cd Sportsee/Frontend
```

3. Install the dependencies using npm install.

```
npm install
```

4. Start the development server with npm start.

```
npm start
```

# Backend

## 1. General information

**Note:** The backend for SportSee is a fork from the repository at https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.
To start the backend, you are free to use Docker or not. In this documentation, we will see several methods to launch the backend easily.

## 2. Project (**without Docker**)

### 2.1 Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

### 2.2 Launching the project

1. Navigate to the backend directory.

```
cd Sportsee/Backend
```

- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.

## 3. Project (**with Docker**)

### 2.1 Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop)

### 2.2 Starting the project

- The `docker image build --no-cache -t micro-api .` command will allow you to build your image.
- The `docker container run --name micro-api -p 3000:3000 -dt micro-api yarn` command will allow you to create your Docker container and run your image on port 3000.
- The `docker container stop micro-api` command will allow you to stop your micro-api.
- The `docker container rm micro-api` command will allow you to delete your micro-api container.

### 2.3 Vscode and container remotes

Finally, if you have VsCode, you can easily launch your project in a docker environment.

You will need the [Remote Development extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack). Once you have this extension installed, just click on the `Reopen in Container` button.

Once in the container, run the `yarn dev` command.

## 4. Endpoints

### 4.1 Possible endpoints

This project includes four endpoints that you will be able to use:

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).

**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

### 4.2 Examples of queries

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.](../Frontend/README.md)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).
