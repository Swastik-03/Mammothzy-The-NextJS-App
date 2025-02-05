"use client"

import { useFormContext } from "react-hook-form"
import { useState, useEffect } from "react"
import { CheckIcon } from "lucide-react"

interface ActivityDetailsProps {
  onSaveAndNext: () => void
}

const activityCats = ["Adventure & Games", "Creative Expression", "Food & Drink", "Learning & Development", "Sports and Fitness", "Volunteering", "Other"]
export default function ActivityDetails({ onSaveAndNext }: ActivityDetailsProps) {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext()

  const [showOtherInput, setShowOtherInput] = useState(false)
  const activityCat = watch("activityCat")

  useEffect(() => {
    setShowOtherInput(activityCat === "Other")
  }, [activityCat])

  const handleActivityCatChange = (type: string) => {
    if (activityCat === type) {
      // If the clicked type is already selected, deselect it
      setValue("activityCat", "")
    } else {
      setValue("activityCat", type)
    }
  }

  return (
    <div className="space-y-[14px]">
      <h2 className="font-inter text-[18px] font-bold leading-[24px] text-left">Activity Details</h2>
      <div className="space-y-2">
        <label htmlFor="activityName" className="font-inter text-[12px] font-medium leading-[20px] text-left block">
          Activity Name
          <span className="text-red-600"> * </span>
        </label>
        <input
          id="activityName"
          {...register("activityName")}
          className="font-inter text-[14px] font-medium leading-[20px] text-left w-full h-[42px] px-[16px] py-[8px] gap-[8px] rounded-full border border-[#E5E5E5] placeholder-[rgba(107, 107, 107, 1)] placeholder:font-inter placeholder:text-[12px] placeholder:font-normal"
          placeholder="Eg: Cooking class in Palo Alto"
        />
        {errors.activityName && <p className="mt-1 text-sm text-red-600">{errors.activityName.message as string}</p>}
      </div>
      <div>
        <label className="font-inter text-[14px] font-medium leading-[20px] text-left block">Select the best category to describe your activity <span className="text-red-600"> * </span></label>
        <div>
          {activityCats.map((type) => (
            <div key={type} className="font-inter text-sm font-normal leading-5 text-left block">
              <button
                type="button"
                onClick={() => handleActivityCatChange(type)}
                className="flex items-center space-x-2 cursor-pointer w-full p-2"
              >
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center ${activityCat === type ? "bg-black border-black" : "border-gray-300"
                    }`}
                >
                  {activityCat === type && <CheckIcon className="w-3 h-3 stroke-4 text-white " />}
                </div>
                <span className="font-inter text-[14px] font-normal leading-[20px] text-left underline-offset-[from-font] decoration-none">{type}</span>
              </button>
            </div>
          ))}
        </div>
        {showOtherInput && (
          <input
            {...register("ActivityCat")}
            placeholder="Specify the category"
            className="w-full h-[42px] px-[16px] font-inter text-[14px] font-medium leading-[20px] text-left py-[8px] gap-[8px] rounded-full border border-[#E5E5E5] mt-2 placeholder-[rgba(107, 107, 107, 1)] placeholder:font-inter placeholder:text-[12px] placeholder:font-normal"
          />
        )}
        {errors.activityCat && <p className="mt-1 text-sm text-red-600">{errors.activityCat.message as string}</p>}
      </div>
      <div className="space-y-2">
        <label
          htmlFor="activityDesc"
          className="font-inter text-[14px] font-medium leading-[20px] text-left block"
        >
          About the Activity
        </label>
        <textarea
          id="activityDesc"
          placeholder="Activity Description"
          {...register("activityDesc")}
          className="font-inter text-[14px] font-medium leading-[20px] text-left w-full h-[148px] pt-[8px] pb-0 px-3 gap-[10px] rounded-[10px] border-[1.5px] border-solid border-[#E7ECF4] placeholder:text-[#6B6B6B] placeholder:font-inter placeholder:text-[14px] placeholder:font-normal resize-none"
        />

        {errors.activityDesc && <p className="mt-1 text-sm text-red-600">{errors.activityDesc.message as string}</p>}
      </div>

      <div className="space-y-2">
        <label className="font-inter text-[14px] font-medium leading-[20px] text-left block">
          Please select the activity type <span className="text-red-600"> * </span>
        </label>
        <div>
          {["Indoor", "Outdoor", "Virtual"].map((type) => (
            <div key={type} className="font-inter text-sm font-normal leading-5 text-left block">
              <label
                htmlFor={type}
                className="flex items-center space-x-2 cursor-pointer w-full p-2"
              >
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center ${watch("activityType") === type ? "bg-black border-black" : "border-gray-300"}`}
                >
                  {watch("activityType") === type && <CheckIcon className="w-3 h-3 stroke-4 text-white " />}
                </div>
                <input
                  type="radio"
                  id={type}
                  value={type}
                  {...register("activityType", { required: "Please select an activity type" })}
                  className="hidden"
                />
                <span className="font-inter text-[14px] font-normal leading-[20px] text-left underline-offset-[from-font] decoration-none">{type}</span>
              </label>
            </div>
          ))}
        </div>
        {errors.activityType && <p className="mt-1 text-sm text-red-600">{errors.activityType.message as string}</p>}
      </div>

      <div className="space-y-2">
        <label className="font-inter text-[14px] font-medium leading-[20px] text-left block">
          Please select the type of location <span className="text-red-600"> * </span>
        </label>
        <div>
          {["Provider Location", "User Location"].map((type) => (
            <div key={type} className="font-inter text-sm font-normal leading-5 text-left block">
              <label
                htmlFor={type}
                className="flex items-center space-x-2 cursor-pointer w-full p-2"
              >
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center ${watch("activitylocType") === type ? "bg-black border-black" : "border-gray-300"}`}
                >
                  {watch("activitylocType") === type && <CheckIcon className="w-3 h-3 stroke-4 text-white " />}
                </div>
                <input
                  type="radio"
                  id={type}
                  value={type}
                  {...register("activitylocType", { required: "Please select the type of location" })}
                  className="hidden"
                />
                <span className="font-inter text-[14px] font-normal leading-[20px] text-left underline-offset-[from-font] decoration-none">{type}</span>
              </label>
            </div>
          ))}
        </div>
        {errors.activitylocType && <p className="mt-1 text-sm text-red-600">{errors.activitylocType.message as string}</p>}
      </div>
      <button
        onClick={onSaveAndNext}
        className="w-[169px] h-[44px] px-[20px] py-[12px] gap-[10px] rounded-full text-white bg-[rgba(0,29,68,1)]"
      >
        Save and Next
      </button>
    </div>
  )
}

