import Cta from "../components/CTA";

export default function Home() {
  return (
    <body className="">

      <main>
      <Cta>
        <Cta.Container>
          <div className="flex flex-col">
            <Cta.Title className={'max-w-[600px] mb-4'}>DiDi Card la nueva tarjeta de crédito con beneficios diarios y sin comisiones ocultas</Cta.Title>
            <Cta.Description>Recibe hasta 3% de CASHBACK* todos los días</Cta.Description>
          </div>
          <Cta.Image src="https://via.placeholder.com/400" alt="Cta Image" />
        </Cta.Container>
      </Cta>
      {/**/}
      <Cta>
        <Cta.Container>
          <Cta.Image className={'rounded-full'} src="https://via.placeholder.com/400" alt="Cta Image" />
          <div className="flex flex-col">
            <Cta.Title className={'max-w-[600px] mb-4'}>DiDi Card la nueva tarjeta de crédito con beneficios diarios y sin comisiones ocultas</Cta.Title>
            <Cta.Description>Recibe hasta 3% de CASHBACK* todos los días</Cta.Description>
          </div>
        </Cta.Container>
      </Cta>
     </main>
    </body>
  );
}
