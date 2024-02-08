import React from 'react'

const Grid1 = () => {
    return (
        <div className="my-8 mx-16 grid grid-cols-2 gap-40 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-3 xl:grid-cols-3">
        <div className="flex flex-col w-full h-32 border rounded shadow-lg aspect-auto bg-white mt-6 hover:cursor-pointer">
          <div >
              TEXT
          </div>
        </div>
        <div className="flex flex-col w-full h-32 border-2 rounded shadow-lg aspect-auto bg-white mt-6 hover:cursor-pointer">
          <div>
              TEXT
          </div>
        </div>
        <div className="flex flex-col w-full h-32 border rounded shadow-lg aspect-auto bg-white mt-6 hover:cursor-pointer">
          <div>
              TEXT
          </div>
        </div>
       
        
      </div>
    )
}

export default Grid1
