function Header({ titleP1, titleP2 }) {
  return (
    <h1
      data-testid="h1Id"
      className="font-black text-5xl text-center md:w-2/3 mx-auto"
    >
      {titleP1} {''}
      <span className="text-indigo-600">{titleP2}</span>
    </h1>
  );
}

export default Header;
