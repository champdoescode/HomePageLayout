import React from 'react'

const Grid2 = () => {
    return (
        <div>
            <div className="w-full  mt-16 flex justify-center items-center border-t-2 border-black">
                <div className="w-3/5 p-8 my-16 flex justify-center border">
                    <span  className="">HEADER</span>
                </div>
            </div>
            <div className="mx-16 grid grid-cols-2 gap-40 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 xl:grid-cols-4">
                <div className="flex flex-col w-full h-48 border rounded shadow-lg aspect-auto bg-white mt-6 hover:cursor-pointer">
                    <div >
                        IMG
                    </div>
                </div>
                <div className="flex flex-col w-full h-48 border-2 rounded shadow-lg aspect-auto bg-white mt-6 hover:cursor-pointer">
                    <div>
                        IMG
                    </div>
                </div>
            
                <div className="flex flex-col w-full h-48 border rounded shadow-lg aspect-auto bg-white mt-6 hover:cursor-pointer">
                    <div>
                        IMG
                    </div>
                </div>
                <div className="flex flex-col w-full h-48 border rounded shadow-lg aspect-auto bg-white mt-6 hover:cursor-pointer">
                    <div>
                        IMG
                    </div>
                </div>
            </div>
            <div className="mx-16 grid grid-cols-2 gap-40 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 xl:grid-cols-4">
                <div className="flex flex-col w-full h-32 border rounded shadow-lg aspect-auto bg-white mt-6 hover:cursor-pointer">
                    <div >
                        Text
                    </div>
                </div>
                <div className="flex flex-col w-full h-32 border-2 rounded shadow-lg aspect-auto bg-white mt-6 hover:cursor-pointer">
                    <div>
                        text
                    </div>
                </div>
            
                <div className="flex flex-col w-full h-32 border rounded shadow-lg aspect-auto bg-white mt-6 hover:cursor-pointer">
                    <div>
                        text
                    </div>
                </div>
                <div className="flex flex-col w-full h-32 border rounded shadow-lg aspect-auto bg-white mt-6 hover:cursor-pointer">
                    <div>
                        text
                    </div>
                </div>
            </div>
        

        </div>
    )
}

export default Grid2
