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
              <Cta.Title isHero className={"max-w-[600px] mb-4 "}>
                Descubra a Beleza que Você Merece!{" "}
              </Cta.Title>
              <Cta.Description isHero>
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
        {/**/}
        <Cta className={"bg-white"}>
          <Cta.Container className={"flex-col"}>
            <div className=" text-blue-primary">
              <Cta.Title className={" mb-4 uppercase text-center"}>
                Alguns de nossos serviços!{" "}
              </Cta.Title>
              <Cta.Description>
                Contamos com os melhores profissionais do mercado, com uma ampla
                rede de serviços, para você agendar conforme sua necessidade!
              </Cta.Description>
            </div>
            <div className="grid grid-cols-3 gap-4 ">
              <div className={"flex flex-col items-center"}>
                <Cta.Image
                  className={"max-w-[200px] mt-4"}
                  src="./public/IMG.png"
                  alt="Cta Image"
                />
                <p className={"text-blue-primary"}>oi</p>
              </div>
              <div className={"flex flex-col items-center"}>
                <Cta.Image
                  className={"max-w-[200px] mt-4"}
                  src="./public/IMG.png"
                  alt="Cta Image"
                />
                <p className={"text-blue-primary"}>oi</p>
              </div>
              <div className={"flex flex-col items-center"}>
                <Cta.Image
                  className={"max-w-[200px] mt-4"}
                  src="./public/IMG.png"
                  alt="Cta Image"
                />
                <p className={"text-blue-primary"}>oi</p>
              </div>
              <div className={"flex flex-col items-center"}>
                <Cta.Image
                  className={"max-w-[200px] mt-4"}
                  src="./public/IMG.png"
                  alt="Cta Image"
                />
                <p className={"text-blue-primary"}>oi</p>
              </div>
              <div className={"flex flex-col items-center"}>
                <Cta.Image
                  className={"max-w-[200px] mt-4"}
                  src="./public/IMG.png"
                  alt="Cta Image"
                />
                <p className={"text-blue-primary"}>oi</p>
              </div>
              <div className={"flex flex-col items-center"}>
                <Cta.Image
                  className={"max-w-[200px] mt-4"}
                  src="./public/IMG.png"
                  alt="Cta Image"
                />
                <p className={"text-blue-primary"}>oi</p>
              </div>
            </div>
          </Cta.Container>
        </Cta>
        {/**/}
        <Cta className={"bg-blue-primary"}>
          <Cta.Container>
            <Cta.Image
              className={"max-w-[500px] mt-4"}
              src="./public/quem.svg"
              alt="Cta Image"
            />
            <div className="flex flex-col">
              <Cta.Title className={"max-w-[600px] mb-4 text-center"}>
                Sobre nós
              </Cta.Title>
              <Cta.Description className={"max-w-[700px] mb-4 text-center"}>
                Somos uma rede que une pessoas com vidas corridas no trabalho, e
                que amam a praticidade. Nosso objetivo é de tornar seus dias
                mais práticos, sem correrias, sem ligações ou conversas no
                whatsapp para agendar um simples corte de cabelo. Para o
                profissional trazemos a práticidade de acessar sua agenda depois
                do expediente, sem aquela correria entre os atendimentos.
              </Cta.Description>

              <div className={"flex gap-8 items-center justify-center mt-4"}>
                <p
                  className={
                    " bg-white text-blue-primary rounded-full w-[150px] h-[150px] flex items-center justify-center font-bold"
                  }
                >
                  +300 serviços
                </p>
                <p
                  className={
                    " bg-white text-blue-primary rounded-full w-[150px] h-[150px] flex items-center justify-center font-bold "
                  }
                >
                  +50 parceiros
                </p>
                <p
                  className={
                    " bg-white text-blue-primary rounded-full w-[150px] h-[150px] flex items-center justify-center font-bold"
                  }
                >
                  Clientes satisfeitos
                </p>
              </div>
            </div>
          </Cta.Container>
        </Cta>
        {/**/}
        <Cta className={"bg-white"}>
          <Cta.Container>
            <div className="flex flex-col text-blue-primary">
              <Cta.Title isHero className={"max-w-[600px] mb-4 "}>
                Depoimentos de Clientes{" "}
              </Cta.Title>
              <Cta.Description isHero>
                Comentários e histórias de sucesso de clientes satisfeitos.
              </Cta.Description>
            </div>
          </Cta.Container>
        </Cta>
      </main>
    </body>
  );
}
