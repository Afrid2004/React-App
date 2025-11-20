import { v4 as uuidv4 } from "uuid"
export const FaqsData = [
  {
    id: uuidv4(),
    title: "1. What is the purpose of this React project?",
    desc: {
      para: "This project brings together everything you are learning in React—components, props, state, mapping, class components, Formik, Yup, state lifting, event handling—and showcases them in one complete, practical website.",
    }
  },
  {
    id: uuidv4(),
    title: "2. What did you learn from building Card Components?",
    desc: {
      para: "Through different card examples, you learned:",
      list: [
        {
          listdata: "How to pass props"
        },
        {
          listdata: "How to use destructuring"
        },
        {
          listdata: "Reusable component creation"
        },
        {
          listdata: "Displaying repeated content"
        },
        {
          listdata: "Mapping unlimited data into components"
        }
      ]
    }
  },
  {
    id: uuidv4(),
    title: "3. What is demonstrated in the JSON Data Mapping section?",
    desc: {
      para: "You learned how to map unlimited JSON data into card components.This is important for real-life applications where data comes from APIs and needs to be displayed dynamically.",
    }
  },
  {
    id: uuidv4(),
    title: "4. What does Nested Data Mapping mean?",
    desc: {
      para: "Nested data means objects containing arrays or other objects inside them.In this project, you practiced using multiple map() loops to display nested structures in a clean, organized UI.",
    }
  },
  {
    id: uuidv4(),
    title: "5. Why are Class Components included in the project?",
    desc: {
      para: "Even though modern React mostly uses functional components, class components are added to help you understand:",
      list: [
        {
          listdata: "render();"
        },
        {
          listdata: "this.props"
        },
        {
          listdata: "this.state"
        }
      ]
    }
  },
]