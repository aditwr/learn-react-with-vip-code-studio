export default function Button({ type = "primary", onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={
        (type === "primary"
          ? "bg-blue-600 text-white"
          : type === "secondary"
          ? "bg-neutral-100 text-neutral-800"
          : "bg-green-800 text-white") + " px-4 py-2 rounded-sm"
      }
    >
      {children}
    </button>
  );
}
