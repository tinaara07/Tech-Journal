# Tech-Journal

This project is a CMS-style blog site designed specifically for developers to publish their articles, thoughts, and opinions on tech topics. It follows the Model-View-Controller (MVC) architecture and allows users to interact with blog posts and comments in a secure environment. The app uses Handlebars.js for templating, Sequelize as the ORM for interacting with the database, and express-session for user authentication.

The application mimics a WordPress-style blog site, where users can:

Publish new blog posts.
Comment on other users’ blog posts.
Update or delete their own posts.
Manage their account and log in or out as needed.
Technologies Used:
Node.js: JavaScript runtime for building the server.
Express.js: Web framework used for routing and handling HTTP requests.
Sequelize: ORM (Object-Relational Mapper) to interact with the database.
MySQL: Database to store user information, blog posts, and comments.
Handlebars.js: Templating engine for rendering views.
express-session: Used for managing user authentication and session state.
User Story
As a developer who writes about tech
I want a CMS-style blog site
So that I can publish articles, blog posts, and my thoughts and opinions.

Acceptance Criteria


Homepage:
When a user visits the site for the first time, they will be presented with the homepage, which includes:

Existing blog posts (if any).
Navigation links for the homepage and dashboard.
Option to log in.
Homepage Navigation:
When the user clicks on the homepage link in the navigation, they will be taken back to the homepage.

Sign-Up & Login:

Clicking on any navigation link other than the homepage prompts the user to sign up or log in.
If the user chooses to sign up, they will be prompted to create a username and password.
After clicking the sign-up button, their credentials will be saved, and they will be logged in.
Authenticated User:
When signed in, the user will see navigation links for:

Homepage.
Dashboard.
Option to log out.
Blog Posts and Comments:

The homepage will display the blog post title and the date created.
Clicking on a blog post will show the full post with the title, contents, post creator’s username, and date created.
The signed-in user will be able to leave a comment, which will be saved and displayed with the username and date.
Dashboard:

When the user clicks on the dashboard link, they will see their existing posts and have the option to add a new blog post.
Clicking the "add new post" button will prompt them to input a title and contents for the new blog post.
Upon creating a new post, the user will be taken back to the dashboard, where the post is saved.
Editing and Deleting Posts:

Users can edit or delete any of their blog posts directly from the dashboard.
Log Out:

Clicking on the logout option will sign the user out of the site.
Session Expiry:

If the user is idle for a specified amount of time, they will be prompted to log in again before being able to add, update, or delete posts.
Installation
To set up and run this project locally:


Features


User Authentication: User authentication is powered by express-session, which ensures that users can only perform specific actions (e.g., creating, updating, or deleting posts) if they are logged in.
Create and Manage Posts: Users can create, edit, and delete blog posts from their dashboard.
Comments on Posts: Logged-in users can leave comments on blog posts. Comments will display with the user's username and date created.
Session Timeout: Users are logged out after a specified idle period for security.
Contributing
If you'd like to contribute to this project, feel free to fork the repository, create a branch for your changes, and submit a pull request. Please ensure that any new features or bug fixes are well-tested.


Deployed link

https://tech-journal-ahbv.onrender.com/


![image](https://github.com/user-attachments/assets/fb605118-2ad7-4eef-897f-535a10cbc967)

![image](https://github.com/user-attachments/assets/18ead9d2-2928-4088-883a-d1b0bc4d4626)

![image](https://github.com/user-attachments/assets/1e117d3c-8041-4262-8611-dcb58b38c758)



