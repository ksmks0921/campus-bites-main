import { MinusIcon, PlusIcon, XIcon } from '@heroicons/react/solid'
import React from 'react'
import cartImg from '../../assets/cartImg.png'
// import {XIcon} from "@hero"
export default function CartItem() {
  return (
    <div className='flex gap-6 font-nunito w-full items-center'>
        <button className="h-[32px] w-[32px] lg:h-[56px] lg:w-[56px] bg-white rounded-full px-1 py-1 lg:px-4 lg:py-4 flex justify-center items-center" style={{boxShadow:"0px 4px 12px rgba(94, 115, 136, 0.25)"}}><XIcon className='h-4 w-4 lg:w-full lg:h-full' /></button>
        <div className="flex-1 flex items-center gap-4">
            {/* img */}
            
            <div className="relative w-[120px] h-[96px]" style={{filter:"drop-shadow(0px 2px 12px rgba(94, 115, 136, 0.5))"}}>
                {/* <div className="absolute w-[120px] h-[96px] bg-[#C4C4C4] bottom-0"></div> */}
                <img src={cartImg} alt="" className="h-[96px]" />
            </div>
            {/* content */}
            <div className="hidden lg:block w-full">
                <p className="font-bold text-[14px]  text-primary">Scooter</p>
                <p className="text-[18px] leading-4 font-bold mt-3">Build Your Own Pizza</p>
                <div className="flex mt-4 border-top border-t-[1px] border-secondary w-full items-center">
                    <div className="flex">
                        <p className="border-right px-4 py-2 border-r-[1px] border-secondary font-bold text-primary text-[14px] leading-[16px]">Size: <span className="font-normal text-secondary">8 Inch</span></p>
                    </div>
                    <div className="flex items-center border-right px-4 py-2 border-r-[1px] border-secondary mt-0">
                        <p className="font-bold text-primary text-[14px] leading-[16px]">Toppings (Pick 2):<span className='font-normal text-secondary'> Suasage</span></p>
                    </div>
                        <div className="flex justify-center items-center gap-4 border-right px-4 py-2 border-r-[1px] border-secondary">
                            <button><MinusIcon className='h-4 w-4' /></button>
                            <p className="text-primary font-bold text-[18px] leading-[16px]">1</p>
                            <button><PlusIcon className='h-4 w-4' /></button>
                        </div>
                    <div className="flex px-4 py-2">
                        <p className="text-[18px] leading-[16px] font-bold text-primary">$15.80</p>
                    </div>
                    
                </div>
            </div>
            {/* content small screen */}
            <div className="block lg:hidden w-full">
                <p className="font-bold text-[14px]  text-primary">Scooter</p>
                <p className="text-[16px] leading-4 font-bold mt-1">Build Your Own Pizza</p>
                <div className="flex flex-col mt-4  w-full items-left">
                    <div className="flex">
                        <p className=" px-4 py-2  font-bold text-primary text-[14px] leading-[16px]">Size: <span className="font-normal text-secondary">8 Inch</span></p>
                    </div>
                    <div className="flex items-left px-4 py-2  mt-0">
                        <p className="font-bold text-primary text-[14px] leading-[16px]">Toppings (Pick 2):<span className='font-normal text-secondary'> Suasage</span></p>
                    </div>
                        <div className="flex justify-center items-center gap-4 border-right px-4 py-2">
                            <button><MinusIcon className='h-4 w-4' /></button>
                            <p className="text-primary font-bold text-[18px] leading-[16px]">1</p>
                            <button><PlusIcon className='h-4 w-4' /></button>
                        </div>
                    <div className="flex px-4 py-2">
                        <p className="text-[18px] leading-[16px] font-bold text-primary">$15.80</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
