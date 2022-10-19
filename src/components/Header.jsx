function Header({ data, loading }) {
  return loading ? (
    <>loading</>
  ) : (
    <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
      {data.mainTitleCollection.items[0].titleP1} {''}
      <span className="text-indigo-600">
        {data.mainTitleCollection.items[0].titleP2}
      </span>
    </h1>
  );
}

export default Header;
