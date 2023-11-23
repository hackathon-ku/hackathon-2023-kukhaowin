'use client'
import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { Tag } from 'lucide-react'


const TagItem = ({image,title,subtitle}) => {
  return (
    <div
    className='w-full flex items-center justify-start px-4 py-2'
    >
    <div>
        {image}
    </div>
    <div className='flex flex-col justify-center ml-4'>
        <p className='text-md font-[500] leading-tight'>{title}</p>
        <p className='text-xs text-gray-700'>{subtitle}</p>
    </div>
    </div>
  )
}

TagItem.propTypes = {
    image:PropTypes.element,
    title:PropTypes.string,
    subtitle:PropTypes.string,
}

TagItem.defaultProps = {
    image:<Tag size={32} color='#197060' />,
    title:'',
    subtitle:'',
}

export default TagItem