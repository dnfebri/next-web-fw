import Image from 'next/image'
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { DANAINVEST } from '../../constant/formFranchise';
import { InputModel1 } from './input/InputModel1';

export const FormFranchise = () => {
  const MySwal = withReactContent(Swal);
  const [isLoading, setIsLoading] = useState( false );
  const [agreeCheck, setAgreeCheck] = useState( false );
  const [inputs, setInputs] = useState({'kode_inves': 2});
  const url = "https://apiweb.urbanathletes.co.id/investment";
  const msgSucces = 'Terima kasih telah mengirimkan data anda. Kami akan menghubungi anda lebih lanjut melalui Nomor Whatsapp atau Email yang sudah anda kirimkan. Terima Kasih'
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const rupiah = (number)=>{
    const n = new Intl.NumberFormat("id-ID", {
      style: "currency",
      maximumSignificantDigits: 3,
      currency: "IDR"
    }).format(number)
    return n
  }

  const saveData = async () => {
    const JSONdata = JSON.stringify(inputs);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata
    });

    const result = await response.json();
    if (response.status !== 201) {
      setIsLoading(false);
      return MySwal.fire({
        icon: 'error',
        title: result.msg
      });
    }

    MySwal.fire({
      icon: 'success',
      title: result.msg,
      text: msgSucces
    });
    setInputs({'kode_inves': 2})
    setIsLoading(false);
  }

  const hendelSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    saveData();
  }

  return (
    <div 
      className="rounded-2xl bg-white p-4 h-full overflow-y-auto no-scrollbar mx-auto
        lg:flex lg:items-center lg:max-w-6xl lg:max-h-[40rem]
    ">
      <div className="relative h-1/2 lg:h-full lg:w-full lg:min-w-[50%]">
        <Image 
          src="/image/imgFormFanchise.png"
          alt="Franchise"
          fill
          style={{className:"w-full"}}
          // objectFit="contain" // change to suit your needs
        />
      </div>
      <div className="my-4 lg:px-4 text-sm lg:w-md">
        <h2 className="text-2xl lg:text-3xl font-black my-2">Be Our Partner!</h2>
        <p>
          Fitnessworks is the first Fitness Center with a Time Based Management membership. Has 20 years of professional fitness experience in Indonesia with a Fast Return on Investment in 15 months, Gym Low Budget Low Investment and High Value.
        </p>
        <form onSubmit={hendelSubmit}>
          <div className="pt-4 my-2">
            <label className="relative">
              <span className={`mx-2`}>Nominal dana yang akan diinvestasikan</span>
              <select className="w-full bg-transparent border-2 focus:border-black dark:focus:border-white h-10 px-2 group-focus:bg-black" name="nominal" value={inputs.nominal || ''} onChange={handleChange} required={true}>
                <option value="" key="">Select</option>
                {
                  DANAINVEST.map((dana) => {
                    return (
                      <option value={dana.value} key={dana.id}>
                        {
                          dana.id == 4 ?
                          rupiah(dana.value) + " - " + rupiah(5000000000)
                          : dana.id == 5 ?
                          "> " + rupiah(dana.value) 
                          : rupiah(dana.value)
                        }
                      </option>
                    )
                  })
                }
              </select>
            </label> 
          </div>
          <InputModel1 label="Nama lengkap" type="text" name="name" id="name" value={inputs.name || ''} onChange={handleChange} required={true}/>
          <InputModel1 label="Nomor Handphone" type="text" name="phone" id="phone" value={inputs.phone || ''} onChange={handleChange} required={true}/>
          <InputModel1 label="Email" type="text" name="email" id="email" value={inputs.email || ''} onChange={handleChange} required={true}/>
          <label className="flex items-start my-4 font-PoppinsLight text-sm">
            <input className="my-1 mr-2" type="checkbox" name="agree" onChange={(e) => setAgreeCheck(e.target.checked)}/>
            <p> Informasi yang anda berikan di atas bersifat rahasia, hanya akan kami pergunakan untuk mengevaluasi Transaksi Potensial dan tanpa tujuan lainnya.</p>
          </label>
          <div className="mt-4 py-2">
            <button type="submit" className={`py-3 w-full text-center text-white font-bold rounded-lg ${isLoading ? 'bg-blue-700' : 'bg-blue-primary'} ${agreeCheck ? 'hover:bg-blue-800' : ''}`} disabled={isLoading == agreeCheck}>
              {isLoading ? 'Loading...' : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
