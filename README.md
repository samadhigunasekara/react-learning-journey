# My React Learning Journey

This repository documents my progress and experiments while learning React, primarily following Mosh Hamedani's "Ultimate React Course" on YouTube. It serves as a practical record of concepts learned, components built, and best practices adopted throughout my journey to master React.

## About This Repository

This repository is a live showcase of my evolving React skills. Each commit and new component represents a step forward in understanding fundamental React concepts, including:

-   **Component-Based Architecture:** Building reusable UI components.
-   **State Management:** Utilizing `useState` hook for managing component state.
-   **Props:** Passing data between components.
-   **Event Handling:** Responding to user interactions.
-   **Conditional Rendering:** Displaying UI elements based on conditions.
-   **Lists and Keys:** Efficiently rendering collections of data.
-   **Styling in React:** Integrating CSS with React components.
-   **(Future topics may include):** `useEffect`, Context API, Redux/Zustand, React Router, fetching data, form handling, and more.

The goal is to demonstrate practical application of theoretical knowledge and to have a tangible collection of working React examples.

## Featured Components & Concepts (Current Examples)

### `ListGroup` Component

A dynamic and reusable list component that:
-   Accepts an array of `items` and a `heading` as props.
-   Renders a list of items.
-   Highlights the currently selected item using `useState`.
-   Utilizes an `onSelectItem` prop to communicate the selected item back to the parent component.
-   Demonstrates conditional rendering for when no items are found.

**Key React Concepts Demonstrated:**
-   Functional Components
-   Props (passing `items`, `heading`, `onSelectItem`)
-   `useState` Hook (for `selectedIndex`)
-   Event Handling (`onClick`)
-   Mapping over arrays (`.map()`)
-   Conditional Rendering (`items.length === 0 && <p>...`)
-   TypeScript Interfaces for Prop Type Checking

### `Alert` Component

A simple, generic alert component that:
-   Accepts `children` as a prop, allowing it to render any content (text, other components, HTML elements) passed into it.
-   Applies basic Bootstrap alert styling.

**Key React Concepts Demonstrated:**
-   Functional Components
-   Props (`children: ReactNode`)
-   Component Reusability

## How to Run Locally

To explore these components and the application:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/samadhigunasekara/react-learning-journey.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd react-learning-journey
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    This will typically open the application in your browser at `http://localhost:5173` (or a similar port).

## What's Next?

I will continue to update this repository with new components, features, and refactorings as I progress through the React course. My aim is to build a solid foundation in React and eventually move on to more complex projects and advanced topics.

## Learning Resources

-   [Mosh Hamedani's Ultimate React Course (YouTube)](https://www.youtube.com/@programmingwithmosh)
-   [React Official Documentation](https://react.dev/)
-   [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
