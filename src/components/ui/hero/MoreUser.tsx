import Image from 'next/image';
import React from 'react';

export default function MoreUser() {
      return (
            <div className="w-full max-w-[72px] h-auto flex items-center justify-center">
                  <div className="relative flex items-center">
                        <div className="w-6 h-6 bg-slate-950 rounded-full overflow-hidden -ml-2">
                              <Image src="/assets/images/asian-male-1.svg" alt="User" width={24} height={24} className='w-full h-full object-cover' />
                        </div>
                        <div className="w-6 h-6 bg-slate-950 rounded-full overflow-hidden -ml-2">
                              <Image src="/assets/images/asian-male-2.svg" alt="User" width={24} height={24} className='w-full h-full object-cover' />
                        </div>
                        <div className="w-6 h-6 bg-slate-950 rounded-full overflow-hidden -ml-2">
                              <Image src="/assets/images/asian-male-3.svg" alt="User" width={24} height={24} className='w-full h-full object-cover' />
                        </div>
                        <div className="w-6 h-6 bg-slate-950 rounded-full overflow-hidden -ml-2">
                              <Image src="/assets/images/asian-male-4.svg" alt="User" width={24} height={24} className='w-full h-full object-cover' />
                        </div>
                  </div>
            </div>
      );
}
