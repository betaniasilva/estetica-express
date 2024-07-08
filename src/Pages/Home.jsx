import { useEffect, useState } from "react";
import Cta from "../components/CTA";
import Header from "../components/Header";
import Avaliacoes from "../components/Avaliacoes";

import useServices from "../hooks/useServices";
import { FcLike } from "react-icons/fc";
import useCompanies from "../hooks/useCompanies";
import {
  MdOutlineAddShoppingCart,
  MdShoppingCartCheckout,
} from "react-icons/md";
import Modal from "../components/Modal";
import transformCurrency from "../utils/transformCurrency";
import { FaQuoteLeft } from "react-icons/fa";

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
              <Cta.Description className={"mb-8"}>
                Contamos com os melhores profissionais do mercado, com uma ampla
                rede de serviços, para você agendar conforme sua necessidade!
              </Cta.Description>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {services.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center bg-blue-primary rounded-lg p-2 "
                >
                  <Cta.Image
                    className={"!w-[260px] h-[270px]"}
                    src={item.image}
                    alt="Cta Image"
                  />
                  <p className={"text-white"}>{item.nome}</p>
                  <p className={"text-white font-bold"}>
                    {transformCurrency(item.valor)}
                  </p>

                  <div className="flex gap-4">
                    <button
                      onClick={() => like(item.id)}
                      className="text-white flex items-center gap-2"
                    >
                      <FcLike /> <span>{item?.likes}</span>
                    </button>
                    <button
                      className="text-white flex items-center gap-2"
                      onClick={() =>
                        setServicesSelecteds((prev) => [...prev, item])
                      }
                    >
                      <MdOutlineAddShoppingCart />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Cta.Container>
        </Cta>
        {/**/}
        <Cta className={"bg-blue-primary"}>
          <Cta.Container>
            <Cta.Image
              className={"max-w-[500px] mt-4 mb-4"}
              src="./public/quem.svg"
              alt="Cta Image"
            />
            <div className="flex flex-col items-center">
              <Cta.Title className={"max-w-[600px] mb-4 text-center "}>
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
            <div className="flex flex-col text-blue-primary items-center">
              <Cta.Title className={"max-w-[600px] mb-4 "}>
                Depoimentos de Clientes{" "}
              </Cta.Title>
              <Cta.Description>
                Comentários e histórias de sucesso de clientes satisfeitos.
              </Cta.Description>
              <div className="flex gap-4 mt-8 ">
                <Avaliacoes
                  text={
                    "Adoro a facilidade com que posso agendar meus tratamentos de beleza na Search Estética. O site é intuitivo e me permite ver todas as opções disponíveis rapidamente. Eu posso escolher o serviço, o horário e o profissional de minha preferência com apenas alguns cliques. É realmente conveniente!"
                  }
                  evalueted={"Maria Silva - Cliente Regular"}
                />
                <Avaliacoes
                  text={
                    "Como alguém que não tem muito tempo livre, a praticidade do site da Search Estética é um verdadeiro salva-vidas. Em poucos minutos, consigo agendar meus tratamentos, sem precisar ligar ou mandar mensagens. Além disso, o sistema de lembretes me ajuda a não esquecer dos meus compromissos. Super recomendo!"
                  }
                  evalueted={"João Ferreira - Novo Cliente"}
                />
                <Avaliacoes
                  text={
                    "A Search Estética realmente entende as necessidades dos clientes. O site de agendamentos é extremamente fácil de usar e torna todo o processo muito mais eficiente. Adoro poder ver os horários disponíveis em tempo real e fazer minhas reservas instantaneamente. Isso economiza muito tempo e evita frustrações."
                  }
                  evalueted={"Ana Costa - Cliente Fiel"}
                />
              </div>
            </div>
          </Cta.Container>
        </Cta>

        {/**/}

        <Cta className={"bg-blue-primary"}>
          <Cta.Container className={"flex flex-col"}>
            <Cta.Image
              className={"max-w-[200px] mt-4 mb-4"}
              src="./public/logo.svg"
              alt="Cta Image"
            />

            <Cta.Description
              className={
                "max-w-[700px] mb-4 text-center border-t-2 pt-8 font-light "
              }
            >
              © Copyright 2024 . Todos os direitos reservados | Feito por equipe
              Search Estética
            </Cta.Description>
          </Cta.Container>
        </Cta>
      </main>
    </body>
  );
}
