import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';

export default function UpdateUser({
    user
}) {

    const { data, put, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            last_name: user.last_name,
            email: user.email,
            is_active: user.is_active,
            phone: user.phone,
        });

    const submit = (e) => {
        e.preventDefault();
        console.log("hola", data);

        put(route('users.delete', { id: user.id }), {
            data: {
                name: data.name,
                last_name: data.last_name,
                email: data.email,
                phone: data.phone,
                is_active: false,
            },
        });

        
    };

    return (
        <section className='m-4' >
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Eliminar usuario
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Desea Eliminar usuario?
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
               

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Si</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">
                            Eliminado
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
