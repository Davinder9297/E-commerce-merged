import React from 'react'
// import Table from '../components/Table'
const PayoutSetting = () => {
  return (
    <div className='container'>
      <div>
        <p class="text-2xl text-gray-500">Online Order Payment Receiver</p>
        <hr class="h-[3px] my-4 bg-gray-500 border-0 dark:bg-gray-700 rounded" />
        <div class="flex gap-20 text-lg">
          <div>
            <label htmlFor="delivery" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Delivery Order  <i className='text-red-600'>*</i></label>
            <select id="delivery" class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:outline-none block w-[280px] p-2 ">
              <option value="select">Select</option>
              <option value="Brand" selected>Brand</option>
            </select>
          </div>
          <div>
            <label htmlFor="pickup" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pickup Order <i className='text-red-600'>*</i></label>
            <select id="pickup" class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:outline-none block w-[280px] p-2">
              <option value="select">Select</option>
              <option value="Brand" selected>Brand</option>
            </select>
          </div>
        </div>
      </div>

      <div className='my-[40px] '>
        <p class="text-2xl text-gray-500 ">COD Online Order Payment Receiver</p>
        <hr class="h-[3px] my-4 bg-gray-500 border-0 dark:bg-gray-700 rounded" />
        <div class="flex gap-20 text-lg">
          <div>
            <label htmlFor="delivery" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Delivery Order  <i className='text-red-600'>*</i></label>
            <select id="delivery" class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:outline-none block w-[280px] p-2 ">
              <option value="select">Select</option>
              <option value="Brand" selected>Brand</option>
              <option value="Merchants" >Merchants</option>
            </select>
          </div>
          <div>
            <label htmlFor="pickup" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pickup Order <i className='text-red-600'>*</i></label>
            <select id="pickup" class="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:outline-none block w-[280px] p-2">
              <option value="select">Select</option>
              <option value="Brand" selected>Brand</option>
              <option value="Merchants" >Merchants</option>
            </select>
          </div>
        </div>
      </div>
      <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white p-1 w-[70px] font-bold rounded">
        Save
      </button>
      {/* <Table/> */}
    </div>
  )
}

export default PayoutSetting