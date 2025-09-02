import React from 'react'

const Footer = () => {
  return (
  <footer className="w-full ">
<div className="mx-auto max-w-7xl ">
<div className="flex justify-between items-center flex-col gap-8 xl:flex-row">
<div className="flex items-center justify-between gap-5 flex-wrap w-full">
<a href="" className="flex justify-center ">
 Bites of bliss
</a>
<ul className="text-base flex items-center  gap-3 md:gap-6 transition-all duration-500">
 <li>
   <a href="javascript:;" className="text-gray-800 hover:text-indigo-600">Pagedone</a>
 </li>
 <li>
   <a href="javascript:;" className="text-gray-800 hover:text-indigo-600">Products</a>
 </li>
 <li>
   <a href="javascript:;" className="text-gray-800 hover:text-indigo-600">Resources</a>
 </li>
 <li>
   <a href="javascript:;" className="text-gray-800 hover:text-indigo-600">Blog</a>
 </li>
 <li>
   <a href="javascript:;" className="text-gray-800 hover:text-indigo-600">Support</a>
 </li>
</ul>
</div>
</div>
</div>
</footer>
  )
}

export default Footer