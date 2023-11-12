import { Link } from "react-router-dom";

function Button({ children, to, type, className, onClick }) {
  const baseStyle =
    "inline-block rounded-full px-2 py-3 font-semibold tracking-wide transition-colors duration-300 focus:outline-none focus:ring disabled:cursor-not-allowed md:px-5 md:py-2.5 text-xl";

  const btn = {
    toggle:
      "rounded-full text-stone-800 relative z-10 bg-transparent px-6 py-2 focus:outline-none ",
    signIn:
      "group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-600 bg-fuchsia-500",
    callToAction: `${baseStyle} bg-yellow-400 text-stone-800 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300 focus:ring-offset-2`,
    sm: `${baseStyle} text-pink-600 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring-yellow-300 focus:ring-offset-2`,
    clearCart: `${baseStyle} bg-gray-200 hover:bg-gray-300 text-stone-800 focus:bg-yellow-300 focus:ring-yellow-300 focus:ring-offset-2`,
  };

  if (to)
    return (
      <Link className={`${btn[type]} ${className}`} to={to}>
        <button onClick={onClick}>{children}</button>
      </Link>
    );

  return (
    <button onClick={onClick} className={`${btn[type]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
