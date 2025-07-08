/** @format */

function ItemBox() {
  return (
    <div className="flex flex-col  px-4 space-y-3 lg:flex-row justify-evenly">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="shadow-lg p-11 flex flex-col items-center">
          <i className="ri-user-3-fill text-amber-400 text-5xl"></i>
          <h1 className="text-xl">2500</h1>
          <h2 className="text-lg text-zinc-400">Welcome</h2>
        </div>
      ))}
    </div>
  );
}

export default ItemBox;
