import { MagnifyingGlassRegularIcon } from './Icons.js'

export default function Navegation() {
    return (
        <div className="flex p-5 w-full bg-slate-100">

            <div className="flex w-full">

                <div className="flex items-center">
                    <img src="#" className="w-9 h-9 bg-red-700" />
                    <div className="mx-3 font-bold text-sky-900">intellectus</div>
                    <div className="flex w-10 h-8 items-center justify-center rounded-tl-lg rounded-bl-lg border-r bg-slate-200 px-5">
                        {/* Magnifying Glass Icon */}
                        <MagnifyingGlassRegularIcon></MagnifyingGlassRegularIcon>
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