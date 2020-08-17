

<h1 align="center">
    <img alt="IBM Watson Text To Speech" title="#IBM Watson Text To Speech" src="https://i0.wp.com/silversharksolutions.com.br/wp-content/uploads/2018/07/IBM-Watson_logo2-e1493752611672.png" />
</h1>

<h1 align="center">
   :green_circle: <a href="#"> IBM Watson Text To Speech </a> 🔵
</h1>

<h3 align="center">
    IBM Watson Text To Speech
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/viniciusbsneto/text-to-speech?color=green">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/viniciusbsneto/text-to-speech">
  
  <a href="https://github.com/viniciusbsneto/text-to-speech/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/viniciusbsneto/text-to-speech">
  </a>
    
   <img alt="License" src="https://img.shields.io/badge/license-MIT-green">
   <a href="https://github.com/viniciusbsneto/text-to-speech/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/viniciusbsneto/text-to-speech?style=social">
  </a>

  <a href="https://github.com/viniciusbsneto">
    <img alt="made by viniciusbsneto" src="https://img.shields.io/badge/-viniciusbsneto-green">
  </a>
</p>


<h4 align="center"> 
	 Status: Core Finished 🚧 Improving UI... 🚧
</h4>

<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#pending-to-do">Pending (to do)</a> •
 <a href="#how-it-works">How it works</a> • 
 <a href="#tech-stack">Tech Stack</a> •  
 <a href="#author">Author</a> • 
 <a href="#user-content-license">License</a>
</p>


## :speech_balloon: About

IBM Watson Text To Speech

---

## :bulb: Features

- [x] Add text comment
- [x] Listen to speech (text comment converted into audio)
  - Using IBM Watson Text To Speech from IBM Cloud Services
- [x] Audio player
  - Play, stop and resume speech

---

## :hammer_and_wrench: Pending (in progress...) :hourglass_flowing_sand:
1. [ ] **Improve UI**
  - Add UI feedback while comment text is being converted to audio.
2. [ ] **Responsive Design**
  - Application is not entirely responsive yet. Still working on that.
3. [ ] **Tests**
  - Write tests with Jest. I should be pushing some tests very soon.
4. [ ] **Improve performance**
  - Look for re-rendering effects and eliminate them.

### :pushpin: Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git] (https://git-scm.com), [Yarn] (https://yarnpkg.com/), [Docker] (https://www.docker.com/)
In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)

### Running the application

```bash

# Clone this repository
$ git clone git@github.com:viniciusbsneto/text-to-speech.git

```
#### Back-end
```bash

# Run MySQL docker container with parameters <database_name> and <database_user_password> of your choice
$ docker run -p 3306:3306 --name <container_name> -e MYSQL_ROOT_PASSWORD=<database_user_password> -d mysql:latest

# Check if the container has started
$ docker ps

# If it hasn't been started, run:
$ docker start <container_name>

# Enter MySQL container
$ docker exec -it <container_name> bash

# Access MySQL terminal with root user
$ mysql -u root -p

# Create a database
CREATE DATABASE <database_name>;

# MySQL 8 (latest) has caching_sha2_password as an authentication method by default. NodeJS has not support for it yet.
# mysql_native_password should be used. Substitute <password> for a password of your choice in the following query and run it.
# Root user should not be used, but for now it's ok for the purpose of this application. DO NOT REMOVE STRING MARKS.
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '<password>';
FLUSH PRIVILEGES;

# Access the back-end project folder and open it in a code editor
$ cd text-to-speech/backend

# Set ormconfig.json file with your information (username, password, database)

# Rename .env.example file to .env and provide your API Key and API URL of your IBM Watson Text To Speech Service instance.

# Install dependencies
$ yarn

# Start the application
$ yarn dev:server

# Yarn script will start the application at http://localhost:3333

```
#### Front-end
```bash

# Access the front-end project folder
$ cd text-to-speech/frontend

# Install dependencies
$ yarn

# Start the application
$ yarn start

# Yarn script will start the application at http://localhost:3000

```
---

## :toolbox: Tech Stack

The following tools were used in the construction of the project:

#### [](https://github.com/viniciusbsneto/catch-and-mall#catch-and-mall-web-application)**Text To Speech Web Application**

-   **[Typescript](https://www.typescriptlang.org/)**
-   **[React](https://en.reactjs.org/)**
-   **[Create-React-App](https://create-react-app.dev/)**
-   **[Styled-Components](https://styled-components.com/)**
-   **[Axios](https://github.com/axios/axios)**
-   **[NodeJS](https://nodejs.org/)**
-   **[Express](https://expressjs.com/)**
-   **[CORS](https://yarnpkg.com/package/cors)**
-   **[UUIDV4](https://yarnpkg.com/package/uuid)**
-   **[TypeORM](https://typeorm.io/#/)**
-   **[MySQL](https://www.mysql.com/)**
-   **[Docker](https://www.docker.com/)**
-   **[IBM Watson Text To Speech Node SDK](https://github.com/watson-developer-cloud/text-to-speech-nodejs)**
-   **[DotEnv](https://yarnpkg.com/package/dotenv)**


> See the file  [package.json](https://github.com/viniciusbsneto/text-to-speech/blob/master/package.json)

#### [](https://github.com/viniciusbsneto/text-to-speech#utilit%C3%A1rios)**Utilitários**

-   Code Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Linter:  **[ESLint](https://eslint.org/)**
-   Code Formatter:  **[Prettier](https://prettier.io/)**
-   Editor Plugin:  **[EditorConfig](https://editorconfig.org/)**
-   Markdown:  **[StackEdit](https://stackedit.io/)**,  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**

---

## :handshake: How to contribute

1. Fork the project.
2. Create a new branch with your changes: `git checkout -b my-feature`
3. Save your changes and create a commit message telling you what you did: `git commit -m" feature: My new feature "`
4. Submit your changes: `git push origin my-feature`

---

## :technologist: Author

 <img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/17788722?v=4" width="100px;" alt="Vinícius Neto"/> 
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Vinícius%20Neto-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/vinicius-neto/)](https://www.linkedin.com/in/vinicius-neto/) 
[![Gmail Badge](https://img.shields.io/badge/-viniciusbsneto@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:viniciusbsneto@gmail.com)](mailto:viniciusbsneto@gmail.com)

---

## :memo: License

This project is under the license [MIT](./LICENSE).

Made with love by Vinícius Neto 👋🏽 [Get in Touch!](Https://www.linkedin.com/in/vinicius-neto/)
