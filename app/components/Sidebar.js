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
                        <img src="#" className="w-6 h-6 bg-black mx-2" />
                        <img src="#" className="w-6 h-6 bg-black mx-2" />
                        <img src="#" className="w-6 h-6 bg-black mx-2" />
                        <input type="text" id="#" className="w-36 h-8 border-black border-y border-l text-sm bg-slate-200 pl-2 rounded-tl-lg rounded-bl-lg text-gray-800" placeholder="Seleccionar fechas" />
                        <div className="flex w-10 h-8 items-center justify-center border-black border-y border-r rounded-tr-lg rounded-br-lg bg-slate-200 px-5">
                            <svg className="pointer-events-none absolute w-5 fill-gray-500 transition" viewBox="0 0 20 20">
                                <path d="M16.254,3.399h-0.695V3.052c0-0.576-0.467-1.042-1.041-1.042c-0.576,0-1.043,0.467-1.043,1.042v0.347H6.526V3.052c0-0.576-0.467-1.042-1.042-1.042S4.441,2.476,4.441,3.052v0.347H3.747c-0.768,0-1.39,0.622-1.39,1.39v11.813c0,0.768,0.622,1.39,1.39,1.39h12.507c0.768,0,1.391-0.622,1.391-1.39V4.789C17.645,4.021,17.021,3.399,16.254,3.399z M14.17,3.052c0-0.192,0.154-0.348,0.348-0.348c0.191,0,0.348,0.156,0.348,0.348v0.347H14.17V3.052z M5.136,3.052c0-0.192,0.156-0.348,0.348-0.348S5.831,2.86,5.831,3.052v0.347H5.136V3.052z M16.949,16.602c0,0.384-0.311,0.694-0.695,0.694H3.747c-0.384,0-0.695-0.311-0.695-0.694V7.568h13.897V16.602z M16.949,6.874H3.052V4.789c0-0.383,0.311-0.695,0.695-0.695h12.507c0.385,0,0.695,0.312,0.695,0.695V6.874z M5.484,11.737c0.576,0,1.042-0.467,1.042-1.042c0-0.576-0.467-1.043-1.042-1.043s-1.042,0.467-1.042,1.043C4.441,11.271,4.908,11.737,5.484,11.737z M5.484,10.348c0.192,0,0.347,0.155,0.347,0.348c0,0.191-0.155,0.348-0.347,0.348s-0.348-0.156-0.348-0.348C5.136,10.503,5.292,10.348,5.484,10.348z M14.518,11.737c0.574,0,1.041-0.467,1.041-1.042c0-0.576-0.467-1.043-1.041-1.043c-0.576,0-1.043,0.467-1.043,1.043C13.475,11.271,13.941,11.737,14.518,11.737z M14.518,10.348c0.191,0,0.348,0.155,0.348,0.348c0,0.191-0.156,0.348-0.348,0.348c-0.193,0-0.348-0.156-0.348-0.348C14.17,10.503,14.324,10.348,14.518,10.348z M14.518,15.212c0.574,0,1.041-0.467,1.041-1.043c0-0.575-0.467-1.042-1.041-1.042c-0.576,0-1.043,0.467-1.043,1.042C13.475,14.745,13.941,15.212,14.518,15.212z M14.518,13.822c0.191,0,0.348,0.155,0.348,0.347c0,0.192-0.156,0.348-0.348,0.348c-0.193,0-0.348-0.155-0.348-0.348C14.17,13.978,14.324,13.822,14.518,13.822z M10,15.212c0.575,0,1.042-0.467,1.042-1.043c0-0.575-0.467-1.042-1.042-1.042c-0.576,0-1.042,0.467-1.042,1.042C8.958,14.745,9.425,15.212,10,15.212z M10,13.822c0.192,0,0.348,0.155,0.348,0.347c0,0.192-0.156,0.348-0.348,0.348s-0.348-0.155-0.348-0.348C9.653,13.978,9.809,13.822,10,13.822z M5.484,15.212c0.576,0,1.042-0.467,1.042-1.043c0-0.575-0.467-1.042-1.042-1.042s-1.042,0.467-1.042,1.042C4.441,14.745,4.908,15.212,5.484,15.212z M5.484,13.822c0.192,0,0.347,0.155,0.347,0.347c0,0.192-0.155,0.348-0.347,0.348s-0.348-0.155-0.348-0.348C5.136,13.978,5.292,13.822,5.484,13.822z M10,11.737c0.575,0,1.042-0.467,1.042-1.042c0-0.576-0.467-1.043-1.042-1.043c-0.576,0-1.042,0.467-1.042,1.043C8.958,11.271,9.425,11.737,10,11.737z M10,10.348c0.192,0,0.348,0.155,0.348,0.348c0,0.191-0.156,0.348-0.348,0.348s-0.348-0.156-0.348-0.348C9.653,10.503,9.809,10.348,10,10.348z" />
                            </svg>
                        </div>

                        <img src="#" className="w-6 h-6 bg-black mx-2" />
                        <img src="#" className="w-6 h-6 bg-black mL-2" />
                        


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