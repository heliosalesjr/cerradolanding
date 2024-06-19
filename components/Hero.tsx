import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Chapada dos Veadeiros</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        A Chapada dos Veadeiros, em Goiás, é famosa por suas cachoeiras e formações rochosas antigas. Parte do Cerrado, conhecido como a "savana brasileira", abriga uma enorme variedade de plantas e animais únicos, sendo uma área importante para a biodiversidade do Brasil.         </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            <span className="regular-16 lg:regular-20 ml-1">Veja a opinião de outros viajantes</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Saiba mais" 
            variant="btn_green" 
          />
          <Button 
            type="button" 
            title="Como chegar lá?" 
            icon="/play.svg"
            variant="btn_white_text" 
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Cidade</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Cavalcante</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distância de Brasília</p>
              <p className="bold-20 text-white">310 km</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevação</p>
              <p className="bold-20 text-white">822,96 metros</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero