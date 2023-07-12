
import Link from 'next/link'

export default function Home() {
  return (
  <>
   <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12">
        <div className="max-w-lg mx-auto bg-white shadow rounded-lg px-6 py-8">
          <h1 className="text-2xl font-semibold mb-4">Invoice Creator</h1>
          <p className="text-gray-600 mb-6">
            Easily create professional invoices with our simple and intuitive interface.
          </p>
          <Link
            href="/create"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  </>
  )
}
