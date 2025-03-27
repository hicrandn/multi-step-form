Job Application Form with Multi-Step Flow
This is a multi-step job application form built using React, Next.js 15, Zod, React Hook Form, Tailwind CSS, ShadCN, and DummyJSON API for handling form submissions. The project is implemented using TypeScript for type safety and scalability.

Features
Multi-step Form: The form is divided into multiple steps to capture different sections of the job application (e.g., Personal Info, Education, Work Experience, and Upload Documents).

Validation: Zod is used for schema validation, ensuring that the data submitted meets the required format.

Form Management: React Hook Form is used for efficient form management, including handling validation, errors, and data submission.

Type Safety: The project uses TypeScript to ensure type safety throughout the application.

Styling: Tailwind CSS and ShadCN are used for clean, responsive, and modern design.

API Integration: The form data is submitted to the DummyJSON API on the final step using server-side actions for improved performance.

Tech Stack
React: A JavaScript library for building user interfaces.

Next.js 15: A React framework that enables server-side rendering, static site generation, and routing.

Zod: A TypeScript-first schema declaration and validation library.

React Hook Form: A library for managing form states in React with minimal re-renders.

TypeScript: A statically typed superset of JavaScript that adds type safety and enhances development productivity.

Tailwind CSS: A utility-first CSS framework for creating custom designs.

ShadCN: A component library that integrates with Tailwind CSS for consistent and reusable UI components.

DummyJSON: A fake REST API for testing and prototyping.

Fill out the job application form by navigating through the following steps:

Step 1: Personal Information

Step 2: Education

Step 3: Work Experience

Step 4: Upload Documents

After completing the last step, the form data will be sent to the DummyJSON API via a POST request, and you will receive a response with the submitted data.