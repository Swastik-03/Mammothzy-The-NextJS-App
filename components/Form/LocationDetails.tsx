import { useFormContext, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

interface LocationDetailsProps {
  onPrevious: () => void;
}

export default function LocationDetails({ onPrevious }: LocationDetailsProps) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman & Nicobar",
    "Chandigarh",
    "Dadra & Nagar Haveli",
    "Daman & Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  return (
    <div className="space-y-[14px]">
      <div className="pb-[40px] space-y-[14px]" style={{ borderBottom: '1px solid rgba(231, 231, 231, 1)', }}>
        <div>
          <h2 className="font-inter text-[18px] font-bold leading-[24px] text-left">Location Details</h2>
          <p className="font-inter text-[14px] font-normal leading-[20px] text-left text-[rgba(107,107,107,1)]">
            Please specify the address for where the activity takes place.
          </p>
        </div>

        {/* Address Line 1 */}
        <div className="space-y-2">
          <label htmlFor="address1" className="font-inter text-[12px] font-medium leading-[20px] text-left block">
            Address Line 1
            <span className="text-red-600"> * </span>
          </label>
          <input
            id="address1"
            {...register("address1")}
            className="font-inter text-[14px] font-medium leading-[20px] text-left w-full h-[42px] px-[16px] py-[8px] gap-[8px] rounded-full border border-[#E5E5E5] placeholder-[rgba(107, 107, 107, 1)] placeholder:font-inter placeholder:text-[12px] placeholder:font-normal"
            placeholder="House no and street name"
          />
          {errors.address1 && <p className="mt-1 text-sm text-red-600">{errors.address1.message as string}</p>}
        </div>

        {/* Address Line 2 */}
        <div className="space-y-2">
          <label htmlFor="address2" className="font-inter text-[12px] font-medium leading-[20px] text-left block">
            Address Line 2
          </label>
          <input
            id="address2"
            {...register("address2")}
            className="font-inter text-[14px] font-medium leading-[20px] text-left w-full h-[42px] px-[16px] py-[8px] gap-[8px] rounded-full border border-[#E5E5E5] placeholder-[rgba(107, 107, 107, 1)] placeholder:font-inter placeholder:text-[12px] placeholder:font-normal"
            placeholder="Other information, e.g., building name, landmark, etc."
          />
          {errors.address2 && <p className="mt-1 text-sm text-red-600">{errors.address2.message as string}</p>}
        </div>

        {/* ZIP Code */}
        <div className="space-y-2">
          <label htmlFor="zipCode" className="font-inter text-[12px] font-medium leading-[20px] text-left block">
            ZIP Code
            <span className="text-red-600"> * </span>
          </label>
          <input
            id="zipCode"
            {...register("zipCode")}
            className="font-inter text-[14px] font-medium leading-[20px] text-left w-full h-[42px] px-[16px] py-[8px] gap-[8px] rounded-full border border-[#E5E5E5] placeholder-[rgba(107, 107, 107, 1)] placeholder:font-inter placeholder:text-[12px] placeholder:font-normal"
            placeholder="eg: 123 467"
          />
          {errors.zipCode && <p className="mt-1 text-sm text-red-600">{errors.zipCode.message as string}</p>}
        </div>

        {/* City & State Fields in Grid */}
        <div className="grid grid-cols-2 gap-4">
          {/* City */}
          <div className="space-y-2">
            <label htmlFor="city" className="font-inter text-[12px] font-medium leading-[20px] text-left block">
              City
              <span className="text-red-600"> * </span>
            </label>
            <input
              id="city"
              {...register("city")}
              className="font-inter text-[14px] font-medium leading-[20px] text-left w-full h-[42px] px-[16px] py-[8px] gap-[8px] rounded-full border border-[#E5E5E5] placeholder-[rgba(107, 107, 107, 1)] placeholder:font-inter placeholder:text-[12px] placeholder:font-normal"
              placeholder="Enter city name"
            />
            {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message as string}</p>}
          </div>

          {/* State Dropdown */}
          <div className="space-y-2">
            <label htmlFor="state" className="font-inter text-[12px] font-medium leading-[20px] text-left block">
              State
              <span className="text-red-600"> * </span>
            </label>
            <select
              id="state"
              {...register("state")}
              className="font-inter text-[14px] font-medium leading-[20px] text-left w-full h-[42px] px-[16px] py-[8px] gap-[8px] rounded-full border border-[#E5E5E5] bg-white text-gray-700"
            >
              <option value="" disabled selected hidden>
                Your State
              </option>
              {indianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.state && <p className="mt-1 text-sm text-red-600">{errors.state.message as string}</p>}
          </div>
        </div>
      </div>
      <div className="space-y-[14px]">
        <div>
          <h2 className="font-inter text-[18px] font-bold leading-[24px] text-left">Contact Details</h2>
          <p className="font-inter text-[14px] font-normal leading-[20px] text-left text-[rgba(107,107,107,1)]">
            Please provide contact information for this activity.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">

          <Controller
            name="contactNumber" // Bind to form state
            control={control} // Use control from useFormContext
            render={({ field }) => (
              <PhoneInput
                {...field} // Spread field to link to form state
                placeholder="Contact Number *"
                inputStyle={{
                  width: "100%",
                  height: "42px",
                  borderRadius: "9999px",
                  border: "1px solid #E5E5E5",
                  fontFamily: "sans-serif Inter",
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "20px",
                }}
                inputClass="placeholder-[rgba(107, 107, 107, 1)] placeholder:font-inter placeholder:text-[12px] placeholder:font-normal focus:border-[2px] focus:border-black"
                buttonStyle={{
                  borderRight: "1px solid rgba(231, 231, 231, 1)",
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              />
            )}
          />

          {/* <PhoneInput placeholder="Contact Number"
          
            inputStyle={{
              width:"100%",
              height:"42px",
              borderRadius:"9999px",
              border:"1px solid #E5E5E5",
              fontFamily:'sans-serif Inter',
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "20px",
            }}
            
            inputClass="placeholder-[rgba(107, 107, 107, 1)] placeholder:font-inter placeholder:text-[12px] placeholder:font-normal focus:border-[2px] focus:border-black"
            buttonStyle={{borderRight: '1px solid rgba(231, 231, 231, 1)', marginTop:"5px", marginBottom:"5px"}}
            /> */}

          <input
            id="contactName"
            {...register("contactName")}
            className="font-inter text-[14px] font-medium leading-[20px] text-left w-full h-[42px] px-[16px] py-[8px] gap-[8px] rounded-full border border-[#E5E5E5] placeholder-[rgba(107, 107, 107, 1)] placeholder:font-inter placeholder:text-[12px] placeholder:font-normal"
            placeholder="Contact Name"
          />
        </div>
      </div>

      {/* Previous & Submit Buttons */}
      <div className="flex space-x-5">
        <button
          onClick={onPrevious}
          className="bg-[rgba(247,247,247,1)] hover:bg-[rgba(230,230,230,1)] text-black font-medium border border-[#e5e5e5] py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        >
          Previous
        </button>
        <button
          type="submit"
          className="bg-[rgba(0,29,68,1)] hover:bg-[rgba(50,50,68,1)] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
        >
          Submit
        </button>
      </div>
    </div>
  );
}