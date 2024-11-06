import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ users }) {
    function formatDate(isoString) {
        const date = new Date(isoString);
        const options = { year: "numeric", month: "2-digit", day: "2-digit" };
        return date.toLocaleDateString("es-ES", options); // Ajusta 'es-ES' a tu locale
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        {/* table */}

                        <div className="relative flex flex-col w-full h-full text-slate-700 bg-white shadow-md rounded-xl bg-clip-border">
                            <div className="relative mx-4 mt-4 overflow-hidden text-slate-700 bg-white rounded-none bg-clip-border">
                                <div className="flex items-center justify-between ">
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-800">
                                            Users List
                                        </h3>
                                        <p className="text-slate-500">
                                            Edita los usuarios del sistema
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2 shrink-0 sm:flex-row">
                                        <Link
                                            className="flex select-none items-center gap-2 rounded bg-slate-800 py-2.5 px-4 text-xs font-semibold text-white shadow-md shadow-slate-900/10 transition-all hover:shadow-lg hover:shadow-slate-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                            type="button"
                                            href="/new"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                ariaHidden="true"
                                                strokeWidth="2"
                                                className="w-4 h-4"
                                            >
                                                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
                                            </svg>
                                            Añadir Usuario
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="p-0 overflow-scroll">
                                <table className="w-full mt-4 text-left table-auto min-w-max">
                                    <thead>
                                        <tr>
                                            <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                                                <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                                                    Usuario
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="2"
                                                        stroke="currentColor"
                                                        ariaHidden="true"
                                                        className="w-4 h-4"
                                                    >
                                                        <path
                                                            strokeHinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                                        ></path>
                                                    </svg>
                                                </p>
                                            </th>
                                            <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                                                <p className="flex items-center justify-between gap-2 font-sans text-sm font-normal leading-none text-slate-500">
                                                    Telefono
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="2"
                                                        stroke="currentColor"
                                                        ariaHidden="true"
                                                        className="w-4 h-4"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                                        ></path>
                                                    </svg>
                                                </p>
                                            </th>
                                            <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                                                <p className="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500">
                                                    Estado
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke-width="2"
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                        className="w-4 h-4"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                                        ></path>
                                                    </svg>
                                                </p>
                                            </th>
                                            <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                                                <p className="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500">
                                                    Creado
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="2"
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                        className="w-4 h-4"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                                                        ></path>
                                                    </svg>
                                                </p>
                                            </th>
                                            <th className="p-4 transition-colors cursor-pointer border-y border-slate-200 bg-slate-50 hover:bg-slate-100">
                                                <p className="flex items-center justify-between gap-2 font-sans text-sm  font-normal leading-none text-slate-500"></p>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user) => (
                                            <tr>
                                                <td className="p-4 border-b border-slate-200">
                                                    <div className="flex items-center gap-3">
                                                        <img
                                                            src="https://cdn-icons-png.flaticon.com/128/15735/15735364.png"
                                                            alt="John Michael"
                                                            className="relative inline-block h-9 w-9 !rounded-full object-cover object-center"
                                                        />
                                                        <div className="flex flex-col">
                                                            <p className="text-sm font-semibold text-slate-700">
                                                                {`${user.name} ${user.lastname}`}
                                                            </p>
                                                            <p className="text-sm text-slate-500">
                                                                {user.email}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-4 border-b border-slate-200">
                                                    <div className="flex flex-col">
                                                        <p className="text-sm font-semibold text-slate-700">
                                                            {user.phone}
                                                        </p>
                                                        <p className="text-sm text-slate-500">
                                                            Movil
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="p-4 border-b border-slate-200">
                                                    <div className="w-max">
                                                        <div
                                                            className={`${
                                                                user.isactive
                                                                    ? "text-green-900 bg-green-500/20"
                                                                    : "text-red-900 bg-red-500"
                                                            } relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md select-none whitespace-nowrap  `}
                                                        >
                                                            <span className="">
                                                                {user.isactive
                                                                    ? "Active"
                                                                    : "Inactive"}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-4 border-b border-slate-200">
                                                    <p className="text-sm text-slate-500">
                                                        {formatDate(
                                                            user.created_at
                                                        )}
                                                    </p>
                                                </td>
                                                <td className="p-4 border-b border-slate-200">
                                                    <Link
                                                        href={`updateuser/${user.id}`}
                                                        className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-slate-900/10 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                        type="button"
                                                    >
                                                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                fill="currentColor"
                                                                ariaHidden="true"
                                                                className="w-4 h-4"
                                                            >
                                                                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                                                            </svg>
                                                        </span>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* TODO Paginacion */}
                            <div className="flex items-center justify-between p-3">
                                <p className="block text-sm text-slate-500">
                                    Pagina 1 de 10
                                </p>
                                <div className="flex gap-1">
                                    <button
                                        className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                    >
                                        Anterior
                                    </button>
                                    <button
                                        className="rounded border border-slate-300 py-2.5 px-3 text-center text-xs font-semibold text-slate-600 transition-all hover:opacity-75 focus:ring focus:ring-slate-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"
                                    >
                                        Siguiente
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
