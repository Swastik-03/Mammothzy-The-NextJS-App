"use client"

import { useState } from "react"
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import ActivityDetails from "./ActivityDetails"
import LocationDetails from "./LocationDetails"
import SuccessModal from "./SuccessModal"

// Schema for form validation using Zod
const formSchema = z.object({
  activityName: z.string().min(1, "Activity name is required"),
  activityCat: z.string().min(1, "Activity Category is required"),
  // startDate: z.string().min(1, "Start date is required"),
  // endDate: z.string().min(1, "End date is required"),
  // price: z.string().min(1, "Price is required"),
  activityDesc: z.string().min(1, "Activity Description is required"),
  activityType: z.string().min(1, "Activity Type is required"),
  activitylocType: z.string().min(1, "Type of location is required"),
  locationName: z.string().min(1, "Location name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(1, "Zip code is required"),
})

type FormData = z.infer<typeof formSchema>

export default function ActivityForm() {
  const [activeTab, setActiveTab] = useState("activity")
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    setShowSuccessModal(true)
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  const handleSaveAndNext = async () => {
    const isValid = await methods.trigger([
      "activityName", "activityCat", "activityDesc","activityType","activitylocType"
    ])
    if (isValid) {
      const confirmMessage = "Please confirm that all details are filled correctly:"
      const formData = methods.getValues()
      const detailsMessage = `
        Activity Name: ${formData.activityName}
        Activity Category: ${formData.activityCat}
        Activity Description: ${formData.activityDesc}
        Activity Type: ${formData.activityType}
        activitylocType: ${formData.activitylocType}
      `
      if (window.confirm(confirmMessage + "\n\n" + detailsMessage)) {
        setActiveTab("location")
      }
    }
  }

  const resetForm = () => {
    methods.reset()
    setActiveTab("activity")
    setShowSuccessModal(false)
  }

  return (
    <FormProvider {...methods}>
      <div className="mr-[112px] ml-[112px] mt-8 mb-8">

        <div className="flex">
          <div>
            <div className="font-inter text-[24px] font-bold leading-[31.2px] text-left">
              Create new Activity
            </div>

            <div className="mt-8">
              <button
                onClick={() => handleTabChange("activity")}
                className="w-full h-[48px] p-[12px] px-[28px] py-[12px] border-b-[1px] border-transparent rounded-[8px] flex items-center"
                style={{
                  background: activeTab === "activity" ? 'rgba(247, 247, 247, 1)' : 'transparent',
                  boxShadow: activeTab === "activity" ? '0px 1px 2px 0px rgba(85, 73, 75, 0.05)' : 'none',
                  color: activeTab === "activity" ? 'inherit' : 'rgba(107, 107, 107, 1)', // Changes color based on active tab
                  fontSize: '16px',
                  fontWeight: activeTab=="activity" ? '600':'400',
                  lineHeight: '24px',
                  textAlign: 'left',
                  textUnderlinePosition: 'from-font',
                  textDecorationSkipInk: 'none',
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"  // Ensures the icon inherits the text color
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"  // Add some margin between icon and text
                >
                  <path d="M5.15002 2V22" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.15002 4H16.35C19.05 4 19.65 5.5 17.75 7.4L16.55 8.6C15.75 9.4 15.75 10.7 16.55 11.4L17.75 12.6C19.65 14.5 18.95 16 16.35 16H5.15002" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Activity Details
              </button>


              {/* Button for Location Details */}
              <button
                onClick={() => handleTabChange("location")}
                className="w-full h-[48px] p-[12px] px-[28px] py-[12px] gap-2 border-b-[1px] border-transparent rounded-[8px] flex items-center"
                style={{
                  background: activeTab === "location" ? 'rgba(247, 247, 247, 1)' : 'transparent',
                  boxShadow: activeTab === "location" ? '0px 1px 2px 0px rgba(85, 73, 75, 0.05)' : 'none',
                  color: activeTab === "location" ? 'inherit' : 'rgba(107, 107, 107, 1)', // Changes color based on active tab
                  fontSize: '16px',
                  fontWeight: activeTab=="location" ? '600':'400',
                  lineHeight: '24px',
                  textAlign: 'left',
                  textUnderlinePosition: 'from-font',
                  textDecorationSkipInk: 'none',
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58687 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58687 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z" stroke="currentColor" strokeWidth="1.5" />
                </svg>

                Location Details
              </button>
            </div>
          </div>
          <main className="mx-8 my-16 px-8 border-l border-[#E7E7E7] w-[596px]">
            <form onSubmit={methods.handleSubmit(onSubmit)} className="mx-auto">
              {activeTab === "activity" && <ActivityDetails onSaveAndNext={handleSaveAndNext} />}
              {activeTab === "location" && <LocationDetails onPrevious={() => setActiveTab("activity")} />}
            </form>
          </main>
        </div>
      </div>
      {showSuccessModal && <SuccessModal onClose={resetForm} />}
    </FormProvider>
  )
}
