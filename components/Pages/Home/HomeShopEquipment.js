import React from 'react'
import { SHOP_EQUIPMENT } from '../../../constant/pageHome'
import ButtonLink from '../../ButtonLink'

const rpPrice = (el) => {
  const n = new Intl.NumberFormat("id-ID", {
    style: "currency",
    maximumSignificantDigits: 3,
    currency: "IDR"
  }).format(el)
  return n
}
export const HomeShopEquipment = () => {
  return (
    <div className="bg-blue-primary py-8">
      <div className="relative py-10 text-center text-white font-BebasNeue font-black">
        <h1 className="text-[10rem] opacity-20 py-8">SHOP</h1>
        <div className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center">
          <h1 className="text-4xl sm:text-6xl">training equipment & Merchandise</h1>
        </div>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 w-full mx-auto">
        {SHOP_EQUIPMENT.map((item, idx) => (
          <div className="m-4" key={idx}>
            <div className="relative mx-auto">
              <div className="absolute top-0 bottom-0 right-0 left-0 bg-blue-primary/70 transition-all duration-300 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100">
                <div className="h-full flex flex-col justify-center items-center">
                  <h3 className=" my-4 text-3xl font-BebasNeue font-black tracking-widest">{item.name}</h3>
                  <p>{item.price ? rpPrice(item.price) : ""}</p>
                </div>
                <div className="">
                  <ButtonLink text="ADD TO CARD" link="/shop" />
                </div>
              </div>
              <img src={item.img} alt="Shop" className="mx-auto"/>
              {item.brand ? 
                <div className="absolute top-0 left-0 pt-4 pl-4">
                  <p className="bg-neutral-500 text-white px-3 py-1">{item.brand}</p>
                </div> : ""
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
