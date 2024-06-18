import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Por onde começar
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">A aventura está só começando</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Para começar a explorar a Chapada dos Veadeiros, direcione sua viagem para Alto Paraíso, Vila de São Jorge ou Cavalcante. Essas localidades servem como excelentes pontos de partida para conhecer as principais trilhas e cachoeiras da região. Verifique as condições climáticas ideais, e considere a possibilidade de contratar guias locais para enriquecer sua experiência e aproveitar ao máximo as belezas naturais que cada área tem a oferecer.</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destino</p>
                <p className="bold-16 text-green-50">51 min</p>
              </div>
              <p className="bold-20 mt-2">Alto Paraíso</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Próxima parada</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Vila de São Jorge</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide