import React from 'react'

const Navbar = () => {
    return (
        <div>
            
                <nav className="flex justify-between items-center p-4 shadow-lg">
                    <div className="font-black text-3xl">
                        NIKE
                    </div>
                    <div className="flex">
                        <div className="">
                            <a className="mx-8 font-semibold text-lg hover:underline" href="#">MEN</a>
                            <a className="mx-8 font-semibold text-lg hover:underline" href="#">WOMEN</a>
                            <a className="mx-8 font-semibold text-lg hover:underline" href="#">KIDS</a>
                        </div>
                        <div class="relative text-gray-600 focus-within:text-gray-400">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                                <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                </button>
                            </span>
                            <input type="search" name="q" class="py-2 text-sm text-white bg-black rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 focus:border-black focus:border" placeholder="Search..." autocomplete="off"/>
                        </div>
                    </div>
                    
                </nav>
            
            <div className="">
                <img className="w-full h-96" src="./images/shoes.jpeg" alt="Shoes"/>
            </div>
        </div>
    )
}

export default Navbar
