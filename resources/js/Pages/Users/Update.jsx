import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Transition } from "@headlessui/react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function UpdateUser({ user }) {
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            id: user.id,
            name: user.name,
            lastname: user.lastname,
            phone: user.phone,
            isactive: user.isactive,
            email: user.email,
        });

    const [active, setActive] = useState(user.isactive === 1 ? true : false);
    console.log(user);

    const onChange = (e) => {
        setActive(e.target.checked);
        setData("isactive", e.target.checked);
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        patch(route("users.update"), {
            ...data,
            isactive: active,
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Actualizar Usuario
                </h2>
            }
        >
            <Head title="Profile" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                    <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                        <section className="max-w-xl ">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">
                                    Profile Information
                                </h2>

                                <p className="mt-1 text-sm text-gray-600">
                                    Update your account's profile information
                                    and email address.
                                </p>
                            </header>

                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div>
                                    <InputLabel htmlFor="name" value="Name" />

                                    <TextInput
                                        id="name"
                                        className="mt-1 block w-full"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        required
                                        isFocused
                                        autoComplete="name"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.name}
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="lastname"
                                        value="Last Name"
                                    />

                                    <TextInput
                                        id="lastname"
                                        className="mt-1 block w-full"
                                        value={data.lastname}
                                        onChange={(e) =>
                                            setData("lastname", e.target.value)
                                        }
                                        required
                                        isFocused
                                        autoComplete="lastname"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.lastname}
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="phone" value="Phone" />

                                    <TextInput
                                        id="phone"
                                        className="mt-1 block w-full"
                                        value={data.phone}
                                        onChange={(e) =>
                                            setData("phone", e.target.value)
                                        }
                                        required
                                        isFocused
                                        autoComplete="name"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.phone}
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="isactive"
                                        value="Is Active"
                                    />

                                    <input
                                        id="isactive"
                                        className="mt-1 block"
                                        checked={active}
                                        type="checkbox"
                                        onChange={onChange}
                                        isFocused
                                        autoComplete="isactive"
                                    />
                                </div>

                                <div>
                                    <InputLabel htmlFor="email" value="Email" />

                                    <TextInput
                                        id="email"
                                        type="email"
                                        className="mt-1 block w-full"
                                        value={data.email}
                                        onChange={(e) =>
                                            setData("email", e.target.value)
                                        }
                                        required
                                        autoComplete="username"
                                        disabled
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.email}
                                    />
                                </div>

                                <div className="flex items-center gap-4">
                                    <PrimaryButton disabled={processing}>
                                        Save
                                    </PrimaryButton>

                                    <Transition
                                        show={recentlySuccessful}
                                        enter="transition ease-in-out"
                                        enterFrom="opacity-0"
                                        leave="transition ease-in-out"
                                        leaveTo="opacity-0"
                                    >
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Saved.
                                        </p>

                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Saved.
                                        </p>
                                    </Transition>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
