import React, { memo } from 'react'

const MemoComponent = () => {
  return (
    <div>
      <h2 className='mb-3'>Understanding memo in React</h2>
      <p>In React, every time a parent component re-renders, its child components also re-render by default, even if their props haven’t changed. This can slow down your application, especially when dealing with heavy or complex components. To optimize performance, React provides React.memo, a higher-order component that remembers the rendered output of a functional component. When a component is wrapped with memo, React skips re-rendering it unless its props change. In practice, you can do this by writing export default memo(Component). This simple approach prevents unnecessary renders, improves app efficiency, and ensures smoother performance. React.memo is particularly useful for functional components that receive props but don’t need to update every time the parent re-renders. By combining memo with proper state management, you can optimize your React application without complicating your code.</p>
    </div>
  )
}

export default memo(MemoComponent);