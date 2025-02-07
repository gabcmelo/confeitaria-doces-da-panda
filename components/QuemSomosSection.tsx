import Image from 'next/image'

export function QuemSomosSection(){
  	return (
    		<div className="w-full relative bg-panda-bege flex flex-row items-center justify-between text-left text-[40px] text-panda-secondary font-montserrat-alternates">
      			<div className="w-[642px] h-[260px] flex flex-col items-start justify-start py-0 px-[30px] box-border gap-[15px]">
        				<div className="relative font-coffecake text-panda-primary">Quem Somos!</div>
        				<div className="w-[576px] relative text-[24px] font-medium inline-block">
          					<p className="m-0">Na Doces da Panda, cada pedacinho é feito com muito carinho e qualidade. Aqui você encontra uma variedade de doces fresquinhos e irresistíveis.</p>
        				</div>
      			</div>
      			<Image  width={799} height={700} className="w-[799px] relative h-[700px] object-cover" alt="" src="/quemsomos/sensacao.png" />
    		</div>);
};

