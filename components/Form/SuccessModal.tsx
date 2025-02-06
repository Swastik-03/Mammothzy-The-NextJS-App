import { X } from "lucide-react";

interface SuccessModalProps {
  onClose: () => void;
}

export default function SuccessModal({ onClose }: SuccessModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[510px] rounded-lg p-2 shadow-lg">
        {/* Close Button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 bg-gray-200 p-1 rounded-full hover:text-gray-700 hover:bg-gray-300 focus:outline-none"
          >
            <X size={20} />
          </button>
        </div>

        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-[130px] h-[130px] flex items-center justify-center rounded-full border-[20px] border-[#DCE2FF] overflow-hidden bg-[#DCE2FF]">
            <img src="/formsubmitted.png" alt="Success" className="w-[200px] h-auto" />
          </div>
        </div>



        {/* Title */}
        <h2 className="text-[24px] font-semibold text-gray-800 pb-4 text-center mt-4">
          Form Submitted
        </h2>
      </div>
    </div>
  );
}
