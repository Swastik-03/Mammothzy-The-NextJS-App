import ActivityForm from "@/components/Form/ActivityForm"
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <Header />
      <main className="flex-grow flex" style={{ borderBottom: '1px solid rgba(231, 231, 231, 1)', }}>
        <ActivityForm />
      </main>
      <Footer />
    </div>
  )
}

