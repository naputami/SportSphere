export const Button = ({ variant, children }) => {
  if (variant === "secondary") {
    return (
      <button className="btn btn-neutral flex items-center gap-2 text-white">
        {children}
      </button>
    );
  }

  return (
    <button className="btn bg-yellow-theme hover:bg-yellow-theme text-black">
      {children}
    </button>
  );
};
