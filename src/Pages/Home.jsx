import { useEffect, useState } from "react";
import Cta from "../components/CTA";
import Header from "../components/Header";
import useServices from "../hooks/useServices";
import { FcLike } from "react-icons/fc";
import useCompanies from "../hooks/useCompanies";
import { MdShoppingCartCheckout } from "react-icons/md";
import Modal from "../components/Modal";
import transformCurrency from "../utils/transformCurrency";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [services, setServices] = useState([]);

  const [servicesSelecteds, setServicesSelecteds] = useState([]);

  const { findAll, like } = useServices(setServices);
  const { findAll: findAllCompanies } = useCompanies();

  useEffect(() => {
    setServices(findAll());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sumTotalValue = () => {
    return servicesSelecteds.reduce((acc, item) => acc + item.valor, 0);
  };

  return (
    <body className="">
      <Header></Header>
      <main>
        <button
          onClick={() => setModalOpen(true)}
          className="cursor-pointer px-4 py-2 rounded-r-lg bg-blue-primary shadow-2xl shadow-black fixed z-30"
        >
          <MdShoppingCartCheckout className="text-2xl" />
        </button>
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          className={"max-w-fit min-w-[375px] min-h-[375px] bg-slate-700"}
        >
          <div className="">
            {servicesSelecteds.map((item) => (
              <div key={item.id} className="py-2 border-b border-solid">
                <p>{item.nome}</p>
                <p>{transformCurrency(item.valor)}</p>
              </div>
            ))}
          </div>

          <div className="w-full pt-10 mt-10 flex justify-between">
            <p>Total de itens: {servicesSelecteds?.length}</p>
            <p>Valor Total: {transformCurrency(sumTotalValue())}</p>
          </div>
        </Modal>
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
              {services.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center"
                  onClick={() =>
                    setServicesSelecteds((prev) => [...prev, item])
                  }
                >
                  <Cta.Image
                    className={"!w-[260px] h-[270px] mt-4"}
                    src={item.image}
                    alt="Cta Image"
                  />
                  <p className={"text-blue-primary"}>{item.nome}</p>
                  <p className={"text-blue-primary font-bold"}>
                    {transformCurrency(item.valor)}
                  </p>
                  <button
                    onClick={() => like(item.id)}
                    className="text-blue-primary flex items-center gap-2"
                  >
                    <FcLike /> <span>{item?.likes}</span>
                  </button>
                </div>
              ))}
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
                  +{services.length || 0} serviços
                </p>
                <p
                  className={
                    " bg-white text-blue-primary rounded-full w-[150px] h-[150px] flex items-center justify-center font-bold "
                  }
                >
                  +{findAllCompanies().length || 0} parceiros
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
