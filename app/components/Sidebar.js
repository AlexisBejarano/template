export default function Sidebar() {
    return (
        <div className="w-max h-screen drop-shadow-lg bg-slate-100">
            <div className="bg-slate-400 h-10 flex items-center px-4">
                <div className="font-semibold">Log</div>
                <div className="flex ml-auto">
                    <img src="#" className="w-6 h-6 bg-black mx-2"/>
                    <img src="#" className="w-6 h-6 bg-black mx-2"/>
                    <img src="#" className="w-6 h-6 bg-black mx-2"/>
                    <input type="search" id="#" className="rounded-md h-6 w-48" />
                    <img src="#" className="w-6 h-6 bg-black mx-2"/>
                    <img src="#" className="w-6 h-6 bg-black mL-2"/>
                </div>
            </div>

            {/* ESTO SE AGREGARA CON UNA FUNCION. PENTIENDE! */}

            <table class="table-fixed">
                <thead>
                    <tr className="border-b border-gray-600 h-10">
                        <th className="px-2"><input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></th>
                        <th className="px-2">Objetivo</th>
                        <th className="px-2">Fecha</th>
                        <th className="px-2">Tipo</th>
                        <th className="px-2">Acciones</th>
                        <th className="px-2"><img src="#" className="w-6 h-6 bg-black"/></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b cursor-pointer border-gray-600 h-10">
                        <td className="px-2"><input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                        <td className="px-2">+5233142766</td>
                        <td className="px-2">04.06.2024 22:56</td>
                        <td className="px-2"></td>
                        <td className="px-2"><img src="#" className="w-6 h-6 mx-auto bg-black"/></td>
                        <td className="px-2"><img src="#" className="w-6 h-6 mx-auto bg-black"/></td>
                    </tr>
                    <tr className="border-b cursor-pointer border-gray-600 h-10">
                        <td className="px-2"><input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                        <td className="px-2">+5233142766</td>
                        <td className="px-2">04.06.2024 22:56</td>
                        <td className="px-2"></td>
                        <td className="px-2"><img src="#" className="w-6 h-6 mx-auto bg-black"/></td>
                        <td className="px-2"><img src="#" className="w-6 h-6 mx-auto bg-black"/></td>
                    </tr>
                    <tr className="border-b cursor-pointer border-gray-600 h-10">
                        <td className="px-2"><input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                        <td className="px-2">+5233142766</td>
                        <td className="px-2">04.06.2024 22:56</td>
                        <td className="px-2"></td>
                        <td className="px-2"><img src="#" className="w-6 h-6 mx-auto bg-black"/></td>
                        <td className="px-2"><img src="#" className="w-6 h-6 mx-auto bg-black"/></td>
                    </tr>
                    <tr className="border-b cursor-pointer border-gray-600 h-10">
                        <td className="px-2"><input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                        <td className="px-2">+5233142766</td>
                        <td className="px-2">04.06.2024 22:56</td>
                        <td className="px-2"></td>
                        <td className="px-2"><img src="#" className="w-6 h-6 mx-auto bg-black"/></td>
                        <td className="px-2"><img src="#" className="w-6 h-6 mx-auto bg-black"/></td>
                    </tr>
                    <tr className="border-b cursor-pointer border-gray-600 h-10">
                        <td className="px-2"><input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                        <td className="px-2">+5233142766</td>
                        <td className="px-2">04.06.2024 22:56</td>
                        <td className="px-2"></td>
                        <td className="px-2"><img src="#" className="w-6 h-6 mx-auto bg-black"/></td>
                        <td className="px-2"><img src="#" className="w-6 h-6 mx-auto bg-black"/></td>
                    </tr>
                    <tr className="border-b cursor-pointer border-gray-600 h-10">
                        <td className="px-2"><input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                        <td className="px-2">+5233142766</td>
                        <td className="px-2">04.06.2024 22:56</td>
                        <td className="px-2"></td>
                        <td className="px-2"><img src="#" className="w-6 h-6 mx-auto bg-black"/></td>
                        <td className="px-2"><img src="#" className="w-6 h-6 mx-auto bg-black"/></td>
                    </tr>
                    <tr className="border-b cursor-pointer border-gray-600 h-10">
                        <td className="px-2"><input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                        <td className="px-2">+5233142766</td>
                        <td className="px-2">04.06.2024 22:56</td>
                        <td className="px-2"></td>
                        <td className="px-2"><img src="#" className="w-6 h-6 mx-auto bg-black"/></td>
                        <td className="px-2"><img src="#" className="w-6 h-6 mx-auto bg-black"/></td>
                    </tr>
                    <tr className="border-b cursor-pointer border-gray-600 h-10">
                        <td className="px-2"><input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" /></td>
                        <td className="px-2">+5233142766</td>
                        <td className="px-2">04.06.2024 22:56</td>
                        <td className="px-2"></td>
                        <td className="px-2"><img src="#" className="w-6 h-6 mx-auto bg-black"/></td>
                        <td className="px-2"><img src="#" className="w-6 h-6 mx-auto bg-black"/></td>
                    </tr>


                </tbody>
            </table>

        </div>
    );
}