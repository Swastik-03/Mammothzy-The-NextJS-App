import { useFormContext } from "react-hook-form"

interface LocationDetailsProps {
  onPrevious: () => void
}

export default function LocationDetails({ onPrevious }: LocationDetailsProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Location Details</h2>
      <div>
        <label htmlFor="locationName" className="block text-sm font-medium text-gray-700 mb-1">
          Location Name
        </label>
        <input
          id="locationName"
          {...register("locationName")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.locationName && <p className="mt-1 text-sm text-red-600">{errors.locationName.message as string}</p>}
      </div>
      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
          Address
        </label>
        <input
          id="address"
          {...register("address")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message as string}</p>}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            City
          </label>
          <input
            id="city"
            {...register("city")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message as string}</p>}
        </div>
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
            State
          </label>
          <input
            id="state"
            {...register("state")}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state.message as string}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
          Zip Code
        </label>
        <input
          id="zipCode"
          {...register("zipCode")}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
        />
        {errors.zipCode && <p className="mt-1 text-sm text-red-600">{errors.zipCode.message as string}</p>}
      </div>
      <div className="flex justify-between">
        <button
          onClick={onPrevious}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        >
          Previous
        </button>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        >
          Submit
        </button>
      </div>
    </div>
  )
}

