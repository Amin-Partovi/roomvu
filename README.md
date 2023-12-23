


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


# How to run project

## Package Manager


In the project directory, you can use Yarn as the package manager. First, run:

    yarn

This command installs all the project's dependencies. To start the local development server, use the following command:

    yarn dev

The project will be accessible at [http://localhost:3000](http://localhost:3000/).
To build the project for production use the following command:

    yarn build

To serve the production build, you can use the following command:

    yarn start

Again, the project will be accessible at [http://localhost:3000](http://localhost:3000/).

## Docker


To run the project in a Docker container, execute the following command to create an image and run a container:

    docker compose up

Now the project is available at [http://localhost:3000](http://localhost:3000/).
If you need to stop the container, first, get a list of running containers using:

    docker container ls

Then stop the container using:

    docker stop <container-name>

# Folder structure

the structure of the project is inspired by Atomic Design.



    .
    src/
    ├── components/
    │   ├── elements/
    │   │   ├── postListItem/
    │   │   │   ├── PostListItem.tsx
    │   │   │   ├── PostListItem.test.tsx
    │   │   │   └── post-list-item.module.scss
    │   │   ├── spinner
    │   │   ├── ...
    │   │   └── index.ts
    │   └── fragments/
    │       ├── themeToggle/
    │       │   ├── ThemeToggle.tsx
    │       │   ├── ThemeToggle.test.tsx
    │       │   └── theme-toggle.module.scss
    │       ├── ...
    │       └── index.ts
    ├── app/
    │   ├── _layout/
    │   │   ├── Header.tsx
    │   │   ├── header.module.scss
    │   │   └── ...
    │   ├── page.tsx
    │   ├── home.module.scss
    │   ├── home.test.tsx
    │   ├── [id]/
    │   │   ├── page.tsx
    │   │   ├── post-detail.module.scss
    │   │   └── PostDetail.test.tsx
    │   └── ...
    ├── utils/
    │   ├── formateDate
    │   ├── request
    │   ├── ...
    │   └── index.ts
    ├── hooks/
    │   ├── useFetchData.ts
    │   ├── ...
    │   └── index.ts
    ├── queries/
    │   ├── posts/
    │   │   ├── usePostsQuery.ts
    │   │   ├── types.ts
    │   │   └── ...
    │   └── index.ts
    └── types/
        ├── generalTypes.ts
        ├── ...
        └── index.ts



src folder divided to the following modules:

Elements: This folder contains shared components, also known as common components, that cannot be further divided into smaller independent components.
Fragments: Fragments are reusable components that are built using elements. They combine multiple elements to form more complex and self-contained components.
app: The _layouts is a private folder encompasses components related to the overall layout and container structure of the application. These components define the high-level structure and positioning of other components. The routes are organized based on the Next.js app router.

In addition to these modules, there are other ones such as utils, hooks, queries, ...

Within this architecture, each module except app directory has its own index file that serves as a central point of export for all the components within that module.

# About the project

The project relies on three APIs: https://jsonplaceholder.typicode.com/posts and https://jsonplaceholder.typicode.com/posts/[id].

A Toggle Switch provided to change the theme of the website. Its state is stored using Redux and persisted in local storage.  

Data fetching is efficiently handled by React Query, which retrieves data on the client side.

It's worth noting that due to time constraints, tests were only written for specific cases, and not all aspects of the project were covered.
