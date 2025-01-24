"use client"

import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Image from 'next/image';




export default function Home() {

    const downloadonClick = () => {
        if (typeof window !== "undefined") { // Ensure we're in the browser
          const fileUrl = "/the-art-of-computer-virus-research-and-defense-0321304543-9780321304544_compresspdf.zip"; // Correct path relative to the 'public' folder
          const link = document.createElement("a");
          link.href = fileUrl;
          link.download = "the-art-of-computer-virus-research-and-defense-0321304543-9780321304544_compresspdf.zip"; // Suggested file name for download
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      };

    return (
        <div className="md:top-0 top-20 relative h-full w-full">
            <Navbar></Navbar>
            {/* primera seccion */}
            <div
                className="h-screen flex justify-center bg-fixed"
                style={{
                    backgroundImage: "url('/Images/autumn.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="flex flex-col-reverse md:flex-row items-center w-full container max-w-sm sm:mx-auto xl:max-w-6xl">
                    <div className="container mx-auto max-w-80 space-y-4">
                        <div>
                            <h1 className="text-4xl font-bold">Download the book for free Now!</h1>
                        </div>
                        <div>
                            <button onClick={downloadonClick} className="border border-gray-200 hover:bg-gray-100 h-10 w-auto rounded-sm"><p className="px-4">Download</p></button>
                        </div>
                    </div>
                    <div className="container mx-auto max-w-96">
                        <img className="object-contain" src="Images/Book.png" alt="" />
                    </div>
                    
                </div>
            </div>
            <footer className="rounded-lg shadow m-4">
                    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://flowbite.com/" className="hover:underline">FreeBook</a>. All Rights Reserved.
                        </span>
                        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                </footer>

        </div>
    );
}
