import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react'

export default function Index({ user }) {
  return (
    <AuthenticatedLayout
        header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Detalles Usuario
            </h2>

            
        }
    >
      <Head title="Details user" />

      
    </AuthenticatedLayout>
  )
}