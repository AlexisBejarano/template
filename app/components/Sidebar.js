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

                        <button className="w-6 h-6 mx-1">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </g>
                            </svg>
                        </button>

                        <button className="w-6 h-6 mx-1">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M19 12C19 15.866 15.866 19 12 19M19 12C19 8.13401 15.866 5 12 5M19 12H21M12 19C8.13401 19 5 15.866 5 12M12 19V21M5 12C5 8.13401 8.13401 5 12 5M5 12H3M12 5V3M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </g>
                            </svg>
                        </button>

                        <button className="w-6 h-6 mx-1">
                            <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M0 0h48v48H0z" fill="none"></path>
                                    <g id="Shopicon">
                                        <path d="M10,22v2c0,7.72,6.28,14,14,14s14-6.28,14-14s-6.28-14-14-14h-4V4l-8,8l8,8v-6h4c5.514,0,10,4.486,10,10s-4.486,10-10,10 s-10-4.486-10-10v-2H10z"></path>
                                    </g>
                                </g>
                            </svg>
                        </button>

                        <input type="text" id="#" className="w-36 h-8 border-black border-y border-l text-sm bg-slate-200 pl-2 rounded-tl-lg rounded-bl-lg text-gray-800" placeholder="Seleccionar fechas" />
                        <div className="flex w-10 h-8 items-center justify-center border-black border-y border-r rounded-tr-lg rounded-br-lg bg-slate-200 px-5">
                            <svg className="pointer-events-none absolute w-5 fill-gray-500 transition" viewBox="0 0 20 20">
                                <path d="M16.254,3.399h-0.695V3.052c0-0.576-0.467-1.042-1.041-1.042c-0.576,0-1.043,0.467-1.043,1.042v0.347H6.526V3.052c0-0.576-0.467-1.042-1.042-1.042S4.441,2.476,4.441,3.052v0.347H3.747c-0.768,0-1.39,0.622-1.39,1.39v11.813c0,0.768,0.622,1.39,1.39,1.39h12.507c0.768,0,1.391-0.622,1.391-1.39V4.789C17.645,4.021,17.021,3.399,16.254,3.399z M14.17,3.052c0-0.192,0.154-0.348,0.348-0.348c0.191,0,0.348,0.156,0.348,0.348v0.347H14.17V3.052z M5.136,3.052c0-0.192,0.156-0.348,0.348-0.348S5.831,2.86,5.831,3.052v0.347H5.136V3.052z M16.949,16.602c0,0.384-0.311,0.694-0.695,0.694H3.747c-0.384,0-0.695-0.311-0.695-0.694V7.568h13.897V16.602z M16.949,6.874H3.052V4.789c0-0.383,0.311-0.695,0.695-0.695h12.507c0.385,0,0.695,0.312,0.695,0.695V6.874z M5.484,11.737c0.576,0,1.042-0.467,1.042-1.042c0-0.576-0.467-1.043-1.042-1.043s-1.042,0.467-1.042,1.043C4.441,11.271,4.908,11.737,5.484,11.737z M5.484,10.348c0.192,0,0.347,0.155,0.347,0.348c0,0.191-0.155,0.348-0.347,0.348s-0.348-0.156-0.348-0.348C5.136,10.503,5.292,10.348,5.484,10.348z M14.518,11.737c0.574,0,1.041-0.467,1.041-1.042c0-0.576-0.467-1.043-1.041-1.043c-0.576,0-1.043,0.467-1.043,1.043C13.475,11.271,13.941,11.737,14.518,11.737z M14.518,10.348c0.191,0,0.348,0.155,0.348,0.348c0,0.191-0.156,0.348-0.348,0.348c-0.193,0-0.348-0.156-0.348-0.348C14.17,10.503,14.324,10.348,14.518,10.348z M14.518,15.212c0.574,0,1.041-0.467,1.041-1.043c0-0.575-0.467-1.042-1.041-1.042c-0.576,0-1.043,0.467-1.043,1.042C13.475,14.745,13.941,15.212,14.518,15.212z M14.518,13.822c0.191,0,0.348,0.155,0.348,0.347c0,0.192-0.156,0.348-0.348,0.348c-0.193,0-0.348-0.155-0.348-0.348C14.17,13.978,14.324,13.822,14.518,13.822z M10,15.212c0.575,0,1.042-0.467,1.042-1.043c0-0.575-0.467-1.042-1.042-1.042c-0.576,0-1.042,0.467-1.042,1.042C8.958,14.745,9.425,15.212,10,15.212z M10,13.822c0.192,0,0.348,0.155,0.348,0.347c0,0.192-0.156,0.348-0.348,0.348s-0.348-0.155-0.348-0.348C9.653,13.978,9.809,13.822,10,13.822z M5.484,15.212c0.576,0,1.042-0.467,1.042-1.043c0-0.575-0.467-1.042-1.042-1.042s-1.042,0.467-1.042,1.042C4.441,14.745,4.908,15.212,5.484,15.212z M5.484,13.822c0.192,0,0.347,0.155,0.347,0.347c0,0.192-0.155,0.348-0.347,0.348s-0.348-0.155-0.348-0.348C5.136,13.978,5.292,13.822,5.484,13.822z M10,11.737c0.575,0,1.042-0.467,1.042-1.042c0-0.576-0.467-1.043-1.042-1.043c-0.576,0-1.042,0.467-1.042,1.043C8.958,11.271,9.425,11.737,10,11.737z M10,10.348c0.192,0,0.348,0.155,0.348,0.348c0,0.191-0.156,0.348-0.348,0.348s-0.348-0.156-0.348-0.348C9.653,10.503,9.809,10.348,10,10.348z" />
                            </svg>
                        </div>

                        <button className="w-6 h-6 ml-2">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M20.17 3.91C20.1063 3.78712 20.0102 3.68399 19.8921 3.61173C19.774 3.53947 19.6384 3.50084 19.5 3.5H12.5C12.3011 3.5 12.1103 3.57902 11.9697 3.71967C11.829 3.86032 11.75 4.05109 11.75 4.25C11.75 4.44891 11.829 4.63968 11.9697 4.78033C12.1103 4.92098 12.3011 5 12.5 5H18L16.15 7.56C16.0333 7.71913 15.9846 7.9181 16.0146 8.11314C16.0446 8.30818 16.1509 8.4833 16.31 8.6C16.4691 8.7167 16.6681 8.7654 16.8631 8.73539C17.0582 8.70538 17.2333 8.59913 17.35 8.44L20.1 4.69C20.1846 4.58007 20.2361 4.44832 20.2484 4.31018C20.2608 4.17204 20.2336 4.03323 20.17 3.91Z" fill="#000000"></path>
                                    <path d="M8.65 3.72005C8.65 3.72005 8.65 3.72005 8.6 3.72005C8.54296 3.67085 8.47893 3.63041 8.41 3.60005C8.33943 3.57294 8.26534 3.5561 8.19 3.55005H4.5C4.36157 3.55089 4.226 3.58952 4.10792 3.66178C3.98984 3.73404 3.89375 3.83717 3.83 3.96005C3.76636 4.08328 3.73915 4.22209 3.75155 4.36023C3.76395 4.49837 3.81544 4.63011 3.9 4.74005L9.25 12V19.75C9.25259 19.9482 9.33244 20.1374 9.47253 20.2775C9.61263 20.4176 9.80189 20.4975 10 20.5H14C14.1981 20.4975 14.3874 20.4176 14.5275 20.2775C14.6676 20.1374 14.7474 19.9482 14.75 19.75V12L14.81 11.91L18.47 15.53C18.5392 15.6002 18.6218 15.6557 18.7128 15.6935C18.8038 15.7313 18.9015 15.7505 19 15.75C19.0986 15.7511 19.1964 15.7321 19.2875 15.6943C19.3786 15.6565 19.4611 15.6006 19.53 15.53C19.6704 15.3894 19.7493 15.1988 19.7493 15C19.7493 14.8013 19.6704 14.6107 19.53 14.47L8.65 3.72005ZM13.4 11.31C13.302 11.4357 13.2492 11.5907 13.25 11.75V19H10.75V11.75C10.7508 11.5907 10.698 11.4357 10.6 11.31L6 5.00005H7.82L13.73 10.85L13.4 11.31Z" fill="#000000"></path>
                                </g>
                            </svg>
                        </button>
                        <button className="w-6 h-6">
                            <svg viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <title></title>
                                    <g id="Complete">
                                        <g id="F-More">
                                            <path d="M12,16a2,2,0,1,1-2,2A2,2,0,0,1,12,16ZM10,6a2,2,0,1,0,2-2A2,2,0,0,0,10,6Zm0,6a2,2,0,1,0,2-2A2,2,0,0,0,10,12Z" id="Vertical"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
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