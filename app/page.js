import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex p-5 w-full bg-orange-300">

        <div className="flex w-full">

          <div className="flex items-center">
            <div className="w-9 h-9 bg-red-700"></div>
            <div className="mx-3 font-bold text-sky-900">intellectus</div>
            <input type="search" id="#" className="rounded-md h-6" />
          </div>

          <div className="flex ml-auto">
            <div className="flex items-center mx-1">
              <div className="w-6 h-6 bg-red-700 opacity-15"></div>
              <div className="text-sm mx-1">Core</div>
            </div>
            <div className="flex items-center mx-1">
              <div className="w-6 h-6 bg-red-700 opacity-15"></div>
              <div className="text-sm mx-1">Descubrimiento</div>
            </div>
            <div className="flex items-center mx-1">
              <div className="w-6 h-6 bg-red-700 opacity-15"></div>
              <div className="text-sm mx-1">Webint</div>
            </div>
            <div className="flex items-center mx-1">
              <div className="w-6 h-6 bg-red-700 opacity-15"></div>
              <div className="text-sm mx-1">Registro de llamadas</div>
            </div>
            <div className="border border-black opacity-20 mx-2"></div>
            <div className="flex items-center">
              <div className="w-7 h-7 mx-2 bg-red-700 opacity-15 rounded-xl"></div>
              <div className="w-7 h-7 mx-2 bg-red-700 opacity-15 rounded-xl"></div>
              <div className="w-7 h-7 mx-2 bg-red-700 opacity-15 rounded-xl"></div>
              <div className="w-7 h-7 mx-2 bg-red-700 opacity-15 rounded-xl"></div>
              <div className="w-7 h-7 mx-2 bg-red-700 opacity-15 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
