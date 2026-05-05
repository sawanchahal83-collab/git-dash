Props are read‑only inputs passed from a parent component to a child component, allowing data to flow down the component tree (e.g., <Greeting name="Sawan" /> passes the name prop).

State is internal, mutable data managed within a component that can change over time and trigger re‑renders, such as a counter that increments when a button is clicked.

useState is a React Hook that lets functional components hold and update state without needing a class, returning a pair [value, setValue] so you can easily manage variables like count.

useEffect is another React Hook that handles side effects such as fetching data, setting up timers, or subscribing to events, running after render and optionally cleaning up when the component unmounts.