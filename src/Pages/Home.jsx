import Cta from "../components/CTA";
import Header from "../components/Header";

export default function Home() {
  return (
    <body className="">
      <Header></Header>
      <main>
        <Cta className={"bg-white"}>
          <Cta.Container>
            <div className="flex flex-col text-blue-primary">
              <Cta.Title isHero={true} className={"max-w-[600px] mb-4 "}>
                Descubra a Beleza que Você Merece!{" "}
              </Cta.Title>
              <Cta.Description>
                Procure pelos mais diversos serviços disponíveis em nosso site!
              </Cta.Description>
            </div>
            <Cta.Image
              className={"max-w-[500px] mt-4"}
              src="./public/IMG.png"
              alt="Cta Image"
            />
          </Cta.Container>
        </Cta>
        {/**/}
        <Cta className={"bg-blue-primary"}>
          <Cta.Container>
            <Cta.Image
              className={""}
              src="./public/agendar.png"
              alt="Cta Image"
            />
            <div className="flex flex-col">
              <Cta.Title className={"max-w-[600px] mb-4"}>
                Faça seus agendamentos de forma prática!
              </Cta.Title>
              <Cta.Description>
                De onde estiver, a hora que quiser!
              </Cta.Description>
            </div>
          </Cta.Container>
        </Cta>
      </main>
    </body>
  );
}
