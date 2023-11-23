'use client'

import Navbar from "@/components/Navbar/Navbar";
import FooterBar from "@/components/FooterBar/FooterBar";


export default function ConnectsLayout({ children }) {

    return (
        <div className="flex flex-col min-h-screen" 
        style={{
            maxWidth: "100vw",
            maxHeight: "100vh",
            overflowX: "hidden",
            overflowY: "auto",
        }}
        >
            <Navbar />
            <main>
          {children}
            <FooterBar />
            </main>

          
        </div>
    )
}


