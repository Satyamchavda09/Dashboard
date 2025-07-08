/** @format */

function SocialBox() {
  return (
    <div className="flex flex-col px-4 space-y-4 lg:flex-row justify-evenly mt-4">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="shadow-lg flex flex-col items-center rounded-lg overflow-hidden">
          <div className="bg-blue-500 w-full h-22 flex justify-center items-center">
            <i class="ri-facebook-fill text-4xl text-white"></i>
          </div>
          <div className="flex justify-between gap-2 px-5 py-5">
            <div className="text-center px-2">
              <h2 className="font-semibold">35K</h2>
              <h3 className="text-zinc-400">Friends</h3>
            </div>
            <div className="text-center px-2">
              <h2 className="font-semibold">128</h2>
              <h3 className="text-zinc-400">Feeds</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SocialBox;
