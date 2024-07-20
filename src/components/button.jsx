export const Button = ({ variant, children }) => {
  if (variant === "secondary") {
    return (
      <button className="btn btn-neutral flex items-center gap-2 text-white">
        {children}
      </button>
    );
  }

  return (
    <button className="bg-yellow-400 flex items-center gap-2 text-black">
      {children}
    </button>
  );
};
