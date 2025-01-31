import React from 'react'

const Book = () => {
  return (
    <div>
        
<form class="max-w-sm mx-auto">
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Select a Profession</label>
  <select placeholder="Profession" id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">

    <option>Plumber</option>
    <option>Electrician</option>
    <option>RO engineer</option>
    <option>Carpenter</option>
  </select>
</form>

    </div>
  )
}

export default Book