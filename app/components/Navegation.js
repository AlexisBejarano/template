export default function Navegation() {
    return (
        <div className="flex p-5 w-full bg-slate-100">

            <div className="flex w-full">

                <div className="flex items-center">
                    <img src="#" className="w-9 h-9 bg-red-700" />
                    <div className="mx-3 font-bold text-sky-900">intellectus</div>
                    <div className="flex w-10 h-8 items-center justify-center rounded-tl-lg rounded-bl-lg border-r bg-slate-200 px-5">
                        <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                            <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                        </svg>
                    </div>
                    <input type="text" id="#" className="w-64 h-8 text-sm bg-slate-200 rounded-tr-lg rounded-br-lg text-gray-800" placeholder="Localice un único MSISDN o IMSI..." />
                </div>

                <div className="flex ml-auto items-center">
                    {['Core', 'Descubrimiento', 'Webint', 'Registro de llamadas'].map((item, index) => (
                        <div key={index} className="flex items-center mx-1 cursor-pointer">
                            <img src="#" className="w-6 h-6 bg-red-700" />
                            <div className="text-xs mx-1">{item}</div>
                        </div>
                    ))}
                    <div className="border border-black opacity-20 mx-2"></div>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, index) => (
                            <img src="#" key={index} className="w-7 h-7 mx-2 bg-red-700 rounded-xl cursor-pointer" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}