# Tactivo FieldOps

Tactivo FieldOps is a browser-based maintenance operations dashboard converted from Create React App to **Next.js 15 with the App Router**. The existing dashboard behavior is preserved, including local workspace storage, sign-in and account creation, service requests, work orders, technician profiles, evidence uploads, canvas signatures, backups, and restore.

## Requirements

- Node.js 18.18 or newer (Node.js 20 or 22 LTS is recommended)
- npm
- Visual Studio Code

## Run in VS Code

1. Open **VS Code**.
2. Select **File → Open Folder…** and choose this project folder—the folder containing `package.json`.
3. Open **Terminal → New Terminal**.
4. Install packages:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.
7. Stop the server with `Ctrl+C`.

Useful commands:

```bash
npm run dev      # development server with hot reload
npm run build    # production build check
npm start        # serve the production build after npm run build
```

The dashboard stores its demo workspace in the browser's `localStorage` and the current sign-in session in `sessionStorage`. It does not require a database or environment variables for the current local version.

## Departments and team tasks

Admins can create team members with a department and create tasks for any active staff member. The available departments are **IT Networking, IT Development, Marketing, Accounts, Office Administration, Housekeeping / Office Keeping, Logistics, Field Operations, Human Resources, Procurement, Customer Support, Facilities & Maintenance, Security & Compliance, Finance & Administration, Sales & Business Development, Quality Assurance,** and **General Operations**.

The existing access roles remain available for permissions: Admin, Supervisor, Field Technician, Requestor, and Viewer. Department is stored separately so it describes the person's area of work without changing the permission model.

Use the new **Team tasks** area to create a task, select a department, assign any active staff member, set priority and status, and add a due date. The assignee picker includes the person’s full name, department, and access role. If a department is not selected, the task uses the assignee’s department automatically. Admins can edit or delete tasks. Team members can see tasks assigned to them and tasks for their department. Existing browser data is upgraded automatically with a default department and an empty task list.

## Create a GitHub repository and upload the project

Create an empty repository on GitHub. Do not add a README, `.gitignore`, or license there because this project already contains them. Then run these commands from this project folder in the VS Code terminal:

```bash
git init
git add .
git commit -m "Convert dashboard to Next.js"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace `YOUR-USERNAME/YOUR-REPOSITORY` with the repository path shown by GitHub. If GitHub asks for authentication, complete the browser sign-in or use a GitHub personal access token when prompted by Git.

## Clone it later on another computer

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
cd YOUR-REPOSITORY
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## What changed in the conversion

- Added the Next.js App Router in `app/`.
- Added `app/layout.js` with page metadata and global stylesheet imports.
- Added `app/page.js` as the route for the existing dashboard.
- Marked the interactive dashboard as a client component because it uses React state, browser storage, file inputs, and canvas APIs.
- Replaced Create React App scripts with `next dev`, `next build`, and `next start`.
- Removed the old CRA browser entry point and `public/index.html`.
- Kept the logo in `public/assets/` so it remains available at `/assets/tactivo-logo-transparent.png`.
- Added department selection to team accounts.
- Added admin-created, department-aware Team tasks with assignment, priority, status, due date, search, edit, and delete support.
