# SDEV 255 Final Project Course Management System
## A Node.js web application for managing college course enrollments
*Note: While I'm also doing this because it's good practice and makes the project more comprehensible, I'm partially adding this because I felt my existing comments were a little lacking in professionalism; This is a college class, so I haven't been taking that as seriously as I could be. That's not because I can't, but because this is a learning environment, professionalism isn't the core goal, learning and results are. In my mind, that means I should let go and show that I'm not perfect instead of feigning perfection or remaining perfectly stoic and professional. As a result, this README features not just a breakdown of project objectives, additional features, and installation instructions, but an analysis of this projects failings and points that taught me something valuable.*

---

## Key features:

### Stage 1:
- Course CRUD routes implemented in full. Courses contain a natural ID that can be derived into domain information and a unique in-domain identifier, a name, a description, and a number representing credit hours.
- Courses are listed on a central index.ejs page, but also have their own individual pages containing more detailed information.
- All links are functional.

### Stage 2:
- User login and authentication fully functioning. While there are several security issues I am not happy with, I took several steps early on to implement modern security features outside of course requirements. The existing holes render the site vulnerable to direct attacks, but a variety of basic attack vectors have been preempted and prevented.
- A simple role and relationship system has been implemented that prevents users from performing non-permitted actions. Students may not access teacher-specific pages and vise-versa. In many cases users are not even served links to these pages, and are still redirected if they somehow manage to access these pages despite that. Teachers are also prevented from accessing the edit or delete routes for courses they did not create.
- Users are able to search and filter courses on the course index page. Students have access to a personalized dashboard containing courses they are currently enrolled in.

### Additional Features:

#### Security:
- Argon2id password hashing with aggressive settings. Excusing a few major issues, this system is fit for industry deployment managing high-sensitivity user accounts.
- Standard session security settings like same-site rules on cookies prevent a variety of attack vectors.

#### System Management:
- "Admin"-type user accounts that can only be created via direct editing of the database. These accounts are given an extended suite of permissions and should be *heavily* restricted in any sensitive application, but they provide a great deal of functionality in managing things like orphaned courses and moderating course descriptions.
- Several custom middlware functions for authentication allow rapid customization of a route's access permissions.

#### Convenience & UX:
- The site has been designed around a few central pages with maximum usability, and many core operations can be performed from multiple of these pages, allowing a fluid user experience.
- While I originally intended to implement Bootstrap for a more responsive and convenient to design user interface, that had to be scrapped to focus on core functionality and polishing what I had. Instead I attempted to recreate some of the behaviors of Bootstrap elements in pure CSS, and intentionally tweaked some of these settings in an attempt to create user interface responses that were visually engaging to interact with.
- While not technically supporting mobile devices, the existing layout and structure is perfectly servicable on both mobile and desktop environments.

---

## Installation:
1. Clone the existing repository to a local machine.
2. Run ```npm i``` from the file system to install dependencies.
3. While already included, you may also run ```npx prisma generate``` and ```npx prisma migrate dev --name init``` to ensure the database is properly loaded on your machine.
4. Run ```npm run dev``` to launch the server.

### Sample Test Accounts:
These accounts are purely for testing purposes, and have been given convenient but highly insecure passwords as a result.

1. Khepri
- Password: 1234
- Type: Admin, proceed with caution.

2. Username: Taylor
- Password: Skitter
- Type: Teacher

3. Username: A_Normal_Student
- Password: Test1
- Type: Student

---

## Technical Documentation:

### Tech Stack:
- Backend: Node.js and Express
- Database: SQLite through Prisma ORM
- Frontend: EJS templates
- Security: Argon2id and express-session

### Project Structure:
- /controllers: Site logic and page serving.
- /routes: Sie route definitions.
- /middleware: Custom Middleware files.
- /views: EJS templates. Partials stored in subfolder /partials.
- /prisma: Database schema.

### Key dependencies:
- Express: Framework for handling server logic.
- Argon2: Password hashing and security.
- Prisma: Database ORM.
- Express-session: Session management and authentication.

---

## Known Issues:

### Security:
- Argon2id modified to use uuidv4 from the user account in place of standard, more secure automatic salt generation. This not only introduces a security flaw but complicates the server logic, slows password generation, and can easily result in unintended behavior.
- Several routes are not fully verified to a satisfactory degree, allowing a user aware of these routes to access them without permissions. While most of these are not major concerns, it still presents an attack vector of unacceptable proportion.
- Session cookies are poorly and inconsistently validated, allowing a user who compromises the session cookie to breach security to an unacceptable degree.
- Username is not required to be unique in the database, but redundancies are prevented server-side. Circumvention of this code would allow insertion of redundant usernames into the database, potentially resulting in unexpected behavior.
- Test accounts with highly insecure passwords and no password restrictions act as a major security vulnerability.

### Functionality:
- Argon2id is set with extremely aggressive parameters (most notably a 2 GiB memory cost) that heavily occupy memory and necessitate exceptionally long loading times when signing in or creating an account. This would be less severe on a dedicated server equipped for this load, but as-is, there's a potentially frustrating wait time in these actions.
- Incomplete bug testing for edge cases. Unexpected behavior is entirely possible.
- Improperly managed server-side code with several redundancies and inefficient sections.
- Several "bonus" functions like teacher-course relationships, user profile updating, and more detailed user profiles not implemented.

## Lessons Learned:
Several major problems I experienced during this project that had significant, negative impacts on the final product were a result of a consistent failure to read documentation and implementation comprehensively, and a consistent "crunch" state encouraging disregard for seemingly difficult but unnecessary pieces of core functionality -for example error handling. Failure to address these neglected functional components compounded stress and complicated the process of extending the project, only intensifying the anxiety and disfunction that caused these issues in the first place. By using these core failings and known issues as not a source of criticism, but a checklist of potential issues to account for at the start of my next project, I hope to make significant and immediate strides in my capabilities, and prevent past issues from reoccuring.
