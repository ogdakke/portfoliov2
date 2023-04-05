export default function PostTitle({ children }) {
  return (
    <h1 className="mb-12 text-left text-4xl font-bold leading-tight tracking-tighter sm:text-6xl md:text-7xl md:leading-none">
      {children}
    </h1>
  );
}
