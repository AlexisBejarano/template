import { MagnifyingGlassBoldIcon, LocationIcon, ReturnIcon, CalendarIcon, FilterIcon, KebabIcon} from './Icons.js'

export default function Sidebar() {

    const dataList = [
        { objetivo: "+5233142766", fechaData: "04.06.2024 22:56", tipo: " ", imgAcciones: "#", imgFiltrar: "#" },
        { objetivo: "+5232323142", fechaData: "06.02.2024 12:12", tipo: " ", imgAcciones: "#", imgFiltrar: "#" },
        { objetivo: "+5253323423", fechaData: "28.12.2024 04:02", tipo: " ", imgAcciones: "#", imgFiltrar: "#" },
        { objetivo: "+5245453234", fechaData: "01.06.2024 10:32", tipo: " ", imgAcciones: "#", imgFiltrar: "#" },
    ];

    const porMientras = ">";

    return (
        <div className="flex">
            <div className="w-max h-screen drop-shadow-lg bg-slate-100">
                <div className="bg-slate-300 h-10 flex items-center px-4">
                    <div className="font-semibold">Log</div>
                    <div className="flex ml-auto items-center">

                        {/* BUTTON Magnifying Glass Bold*/}
                        <button className="w-6 h-6 mx-1">
                            <MagnifyingGlassBoldIcon></MagnifyingGlassBoldIcon>

                        </button>

                        {/* BUTTON LOCATION */}
                        <button className="w-6 h-6 mx-1">
                            <LocationIcon></LocationIcon>
                        </button>

                        {/* BUTTON RETURN */}
                        <button className="w-6 h-6 mx-1">
                            <ReturnIcon></ReturnIcon>
                        </button>

                        <input type="text" id="#" className="w-36 h-8 border-black border-y border-l text-sm bg-slate-200 pl-2 rounded-tl-lg rounded-bl-lg text-gray-800" placeholder="Seleccionar fechas" />
                        {/* BUTTON CALENDAR */}
                        <div className="flex w-10 h-8 items-center justify-center border-black border-y border-r rounded-tr-lg rounded-br-lg bg-slate-200 px-5">
                            <CalendarIcon></CalendarIcon>
                        </div>

                        <button className="w-6 h-6 ml-2">
                        {/* BUTTON FILTER */}
                            <FilterIcon></FilterIcon>
                        </button>

                        {/* BUTTON KEBAB */}
                        <button className="w-6 h-6">
                            <KebabIcon></KebabIcon>
                        </button>


                    </div>
                </div>

                <table className="table-fixed">
                    <thead>
                        <tr className="border-b border-gray-600 h-10">
                            <th className="px-2"><input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></th>
                            <th className="px-2">Objetivo</th>
                            <th className="px-2">Fecha</th>
                            <th className="px-2">Tipo</th>
                            <th className="px-2">Acciones</th>
                            <th className="px-2"><img src="#" className="w-6 h-6 bg-black" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataList.map((tableList, index) => (
                            <tr key={index} className="border-b cursor-pointer border-gray-600 h-10">
                                <td className="px-2"><input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                                <td className="px-2">{tableList.objetivo}</td>
                                <td className="px-2">{tableList.fechaData}</td>
                                <td className="px-2">{tableList.tipo}</td>
                                <td className="px-2"><img src={tableList.imgAcciones} className="w-6 h-6 mx-auto bg-black" /></td>
                                <td className="px-2"><img src={tableList.imgFiltrar} className="w-6 h-6 mx-auto bg-black" /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
            <button className="w-8 h-10 bg-slate-300 items-center flex">
                <div className="mx-auto">{porMientras}</div>
            </button>
        </div>
    );
}