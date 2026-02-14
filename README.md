SSR React App (Server-Side Rendering with Express)
  A simple Server-Side Rendered (SSR) React application built using React.js, Express.js, and MongoDB.
  The project demonstrates SEO-friendly rendering, API integration, and client-side hydration.


Features
  1.  Server-Side Rendering using ReactDOMServer
  2.  Express.js backend
  3.  MongoDB database integration
  4.  API endpoint for dynamic data
  5.  Client-side hydration
  6.  SEO-friendly initial HTML
  7.  Webpack/Babel bundling support
     
Tech Stack
  Frontend
    React.js
    ReactDOMServer
    Axios (for API calls)
  Backend
    Node.js
    Express.js
  Build Tools
    Webpack
    Babel
    
Project Structure
ssr-react-app/
     build/                  
     src/
       client/            
       server/             
       components/         
     webpack.config.js
     package.json
     README.md

Installation
1. Clone the Repository
2. Install Dependencies (npm install)
3. Running the Project (1. npm run dev 2. npm run build)
4. Start Production Server (npm start)
   
How SSR Works in This Project
1. User requests page → Express server handles request.
2. React components rendered on server using: (ReactDOMServer.renderToString())
3. HTML sent to browser with pre-rendered content.
4. Client-side JavaScript hydrates the app using: (ReactDOM.hydrateRoot())

Author
Shivam Sharma
Full Stack Developer
BE CSE – React, Node.js, Express.js
