'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const ClubCard = ({data}) => {
  const router = useRouter()
  return (
    <article className="flex bg-white transition hover:shadow-xl rounded-lg overflow-hidden cursor-pointer"
    onClick={() => router.push('/connect/club/detail')}
    >
      <div className="flex items-center justify-center">
        <img
          alt="Guitar"
          src={data?.image}
          className="aspect-square object-cover h-28 w-28 rounded-lg"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className='px-2 py-1'>
            <h3 className="font-bold line-clamp-1 uppercase text-gray-900 text-sm">
             {data?.name}
            </h3>
          <p className="mt-2 line-clamp-2 text-sm/relaxed text-gray-700">
            {data?.description}
          </p>
        </div>
        <div className="flex items-end justify-end">
          <span className="block bg-yellow-300 px-2 py-2 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400">
            Business
          </span>
        </div>
      </div>
    </article>
  );
}

export default ClubCard