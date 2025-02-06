export default function Footer() {
    return (
        <footer className="bg-white py-[64px] px-[112px]" style={{ borderBottom: '1px solid rgba(231, 231, 231, 1)', }}>
            <div className="flex justify-center items-center">
                <img src="/mammothzy.png" alt="Mammothzy Logo" className="h-[96px] w-auto mb-6" />
            </div>
                {/* <h1 className="ml-4 text-xl font-semibold text-gray-800">Mammothzy</h1> */}
                {/* <h1 className="font-sans ml-4 text-2xl font-semibold text-black">Profile</h1> */}
                <p className="font-inter text-center text-[16px] font-normal leading-[24px] pb-2 text-[rgba(107,107,107,1)]"> Marketplace for searching, filtering and instantly booking team activities </p>
               <div className="flex justify-center items-center m-4 pb-5 space-x-5" style={{ borderBottom: '1px solid rgba(231, 231, 231, 1)', }}>
                <img src="/facebook.svg" />
                <img src="/instagram.svg" />
                <img src="/linkedin.svg" />
                <img src="/email.svg" />
                </div>
                <p className="font-inter mt-6 text-[16px] font-medium leading-[25.6px] text-center text-[rgba(107,107,107,1)]">Copyright &copy; 2024</p> 
        </footer>
    )
}