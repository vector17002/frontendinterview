import React from 'react'

const Blog = () => {
  return (
    <div className='flex flex-col justify-between items-center mt-10 bg-tertiary py-5 px-10 rounded-xl w-3/4 h-3/4' id='blog'>
      <p className='text-white font-bold text-[40px]'>LET'S CREATE BIG STORIES TOGETHER</p>
      <p className='text-white mt-4'>Mobile is in our nerves. We don’t just build apps, we create<br/> &nbsp; &nbsp; &nbsp;&nbsp; brand.Choosing us will be your best decision.</p>
      <button type='button' className='bg-transparent border-2 border-white text-white p-4 font-bold mt-5 rounded-xl hover:bg-primary'>Get Quote</button>
    </div>
  )
}

export default Blog