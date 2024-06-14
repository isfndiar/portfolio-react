function LinkNav({ href, label, isActive }) {
  return (
    <a
      className={`${
        isActive ? `hover:bg-green-300 w-full text-center py-2` : ""
      }`}
      href={href}
    >
      {label}
    </a>
  );
}

export default LinkNav;
