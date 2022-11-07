const Error = ({ children }) => {
  return (
    <div
      data-testid="errorIdComp"
      className="bg-red-800 text-white text-center p-3 
            uppercase font-bold mb-3 rounded-md"
    >
      {children}
    </div>
  );
};

export default Error;
