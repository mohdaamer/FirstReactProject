import React from 'react'

function Hero() {
  return (
    <main className='w-full h-[90vh] lg:flex justify-center items-center flex'>
        <div className="w-[90%] h-[90%] lg:flex lg:w-[80%]">
            <div className="w-full h-[60%] lg:h-[100%]">
                
                <h1 className='text-center font-extrabold text-4xl mb-5 lg:text-[108px] uppercase lg:leading-[102px] lg:text-left'>Your Feet Deserve The Best</h1>

                <p className='w-[70%] text-center mx-auto lg:text-left lg:mx-0'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="lg:w-[404px] lg:h-[50px] flex justify-around mx-auto my-6 md:my-9 lg:mx-0">
                    <div className="lg:w-[180px] h-[50px] bg-red-600 rounded-lg text-white flex items-center justify-center px-5 lg:px-0"><a href="" className='lg:text-xl lg:font-semibold'>Shop Now</a></div>
                    <div className="lg:w-[180px] h-[50px] border border-red-600 rounded-lg text-black flex items-center justify-center px-5 lg:px-0"><a href="" className='lg:text-xl lg:font-semibold'>Category</a></div>
                </div>
                
                <p className='text-center lg:text-left'>Also Available On</p>
                <div className="smallimages flex gap-3 justify-center lg:justify-start">
                    <img src="./images/amazon.png" alt="" />
                    <img src="./images/flipkart.png" alt="" />
                </div>
            </div>

            <div className="flex my-4 justify-center lg:items-center w-full h-[40%] lg:h-[100%]">
                <img className='h-[40vh] md:h-[50vh] lg:h-[70vh]' src="./images/shoe_image.png" alt="" />
            </div>
        </div>
    </main>
  )
}

export default Hero
