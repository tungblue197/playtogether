import React, { useState } from 'react'


const Popup = ({ open, onOpen, onClose, children}) => {
    const [isSearching, setIsSearching] = useState(false);
    return (
        <div className='hide w-80per h-9 bg-blue-200 fixed mx-auto top-12 top-center left-center rouneded shadow rounded-lg z-10'>
            <div onMouseEnter={e => {
                console.log('mouse enter')
                setIsSearching(true);
            }} className='absolute top-0 right-0 h-10 bg-red-300 z-50 items-center flex px-2'>
                <button></button>
                <input type='text' className='outline-none px-1 rounded text-sm h-6 w-40' placeholder='Tìm kiếm địa điểm' />
            </div>
            {children && children}
        </div>
    )
}

export default Popup
