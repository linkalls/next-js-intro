import { postData } from "./server"

export default function Page() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <form className="flex flex-col space-y-4" action={postData}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm rounded-md"
              placeholder="John Doe"
              name="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm rounded-md"
              placeholder="john@example.com"
              name="email" //* これないとpostDataで取得できない
            />
            <button
              className="mt-4  block w-full px-3 py-2 border border-gray-300 shadow-sm focus:ring-primary focus:border-primary sm:text-sm rounded-md"
              type="submit"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
