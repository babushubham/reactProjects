import React from 'react'

function Card() {
  return (
    <div className='mb-4'><div class="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden">
    <div class="flex justify-center mt-4">
      <img class="w-24 h-24 rounded-full border-4 border-blue-500" src="https://images.pexels.com/photos/18366577/pexels-photo-18366577/free-photo-of-young-brunette-in-denim-jacket-with-embellishments.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Profile Picture"/>
    </div>
    <div class="text-center mt-4">
      <h2 class="text-lg font-semibold text-gray-800">John Doe</h2>
      <p class="text-gray-500">Frontend Developer</p>
    </div>
    <div class="mt-4 px-6 text-center">
      <p class="text-sm text-gray-600">Passionate developer creating beautiful, functional web experiences. Always learning and improving.</p>
    </div>
    <div class="flex justify-center mt-4 space-x-4 pb-4">
      <a href="#" class="text-blue-500 hover:text-blue-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.75 2.25h-15.5A2.25 2.25 0 002 4.5v15.5A2.25 2.25 0 004.5 22h15.5a2.25 2.25 0 002.25-2.25V4.5a2.25 2.25 0 00-2.25-2.25zM8.5 18h-2v-6.5h2zm-1-7.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10.5 7.5h-2v-3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v3h-2v-6.5h2v1a2.5 2.5 0 014-2v7.5z"/>
        </svg>
      </a>
      <a href="#" class="text-blue-500 hover:text-blue-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 4.5a10 10 0 01-2.9.8 5 5 0 002.2-2.8 10 10 0 01-3.2 1.2 5 5 0 00-8.6 4.6A14 14 0 011.7 3.1a5 5 0 001.5 6.7 5 5 0 01-2.3-.6v.1a5 5 0 004 4.9 5 5 0 01-2.3.1 5 5 0 004.7 3.4 10 10 0 01-6.2 2.1c-.4 0-.7 0-1-.1a14 14 0 007.7 2.3c9.3 0 14.4-7.7 14.4-14.4l-.1-.7A10 10 0 0024 4.5z"/>
        </svg>
      </a>
      <a href="#" class="text-blue-500 hover:text-blue-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.04c-5.5 0-10 4.48-10 10.01 0 4.41 3.58 8.08 8.16 8.92v-6.31h-2.47v-2.61h2.47v-1.99c0-2.45 1.49-3.8 3.68-3.8 1.06 0 2.19.19 2.19.19v2.4h-1.23c-1.2 0-1.57.75-1.57 1.51v1.79h2.68l-.43 2.61h-2.25v6.31c4.58-.84 8.16-4.51 8.16-8.92 0-5.53-4.5-10.01-10-10.01z"/>
        </svg>
      </a>
    </div>
  </div></div>
  )
}

export default Card