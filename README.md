
# Cars Register


This project focuses on TypeScript and React, featuring a form to manage the registration of people and their vehicles. It implements CRUD operations (Create, Read, Update, Delete) through integration with an external API.

## Key Features


- Complete Vehicle Registration Management with full CRUD functionality
- Optimistic UI Updates for seamless user interactions
- Data Fetching and Caching using React Query
- Input Validation to ensure data integrity
- Clean and Maintainable Code, following best practices
- Well-Organized Folder Structure for easy understanding and maintainability
- Custom Hooks for better data handling and improved code readability
- Data Skeletons displayed while fetching information
- Error Handling with clear user feedback
- Design Pattern Implementation for scalable architecture
- Dark Mode support for improved user experience

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_API_BASE_URL="https://my.api.mockaroo.com/"`
`NEXT_PUBLIC_SK`


## Run Locally

Clone the project

```bash
  git clone https://github.com/CaiqueMorales20/cars-register
```

Go to the project directory

```bash
  cd cars-register
```

Install dependencies

```bash
  bun install
```

Run the development server:

```bash
  bun run dev
```


## Tech Stack

**React.js**: A JavaScript library for building dynamic user interfaces with reusable components and efficient rendering using a virtual DOM.

**Next.js**: A React framework that supports server-side rendering and static site generation, improving performance and SEO while simplifying routing and API integration.

**Shadcn/ui**: A component library providing customizable UI elements, allowing rapid development with a consistent design language.

**TanStack Query** (React Query): A powerful library for managing server state, simplifying data fetching, caching, and synchronization for better performance.

**Sonner**: A library for alerts and notifications that offers customizable prompts for real-time user feedback.

**Zod**: A TypeScript-first validation library for advanced form validation, ensuring data integrity with clear error messages.

**React Hook Form**: A form management library that optimizes performance and integrates easily with validation libraries.

**ESLint**: A static code analysis tool that enforces coding standards and identifies potential issues in JavaScript code.

**Axios**: A promise-based HTTP client for making API requests, offering a clean syntax and support for interceptors.

**Prettier**: A code formatter that maintains a consistent style, automatically sorting Tailwind CSS classes and formatting code.

**plugin-simple-import-sort**: A plugin for organizing imports, enhancing code clarity and navigation by enforcing a consistent order.

**Tailwind CSS**: A utility-first CSS framework that speeds up UI development with a wide range of pre-defined classes for responsive design.


## Demo

You can access the live system at: [https://cars-register-eight.vercel.app/](https://cars-register-eight.vercel.app/)
## Deployment

The application is hosted on [Vercel](https://vercel.com/), a platform that offers seamless deployment for frontend applications built with frameworks like React.