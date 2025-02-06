
export default function Header() {
    return (
        <header className="bg-white py-[10px] pr-24 pl-24" style={{ borderBottom: '1px solid rgba(231, 231, 231, 1)', }}>
            <div className="flex items-center justify-between">
                <img src="/mammothzy.png" alt="Mammothzy Logo" className="h-[75px] w-auto" />
                {/* <h1 className="ml-4 text-xl font-semibold text-gray-800">Mammothzy</h1> */}
                {/* <h1 className="font-sans ml-4 text-2xl font-semibold text-black">Profile</h1> */}
                <div className="flex items-center justify-evenly">
                <img src="/Avatar.png" alt="" />
                <div className="font-inter text-base pl-[8px] font-semibold leading-6 text-left underline-offset-[from-font] decoration-none">
                    Profile
                </div>
                </div>

            </div>
        </header>
    )
}