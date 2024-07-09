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
import transformCurrency from "../utils/transformCurrency";
import { toast } from "react-toastify";
import Checkout from "../components/Checkout";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [services, setServices] = useState([]);

  const [servicesSelecteds, setServicesSelecteds] = useState([]);

  const { findAll, like } = useServices(setServices);
  const { findAll: findAllCompanies, findOne: findOneEmpresa } = useCompanies();

  useEffect(() => {
    setServices(findAll());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <Checkout
          items={servicesSelecteds}
          setItems={setServicesSelecteds}
          modalOpen={modalOpen}
          setModalOpen={() => setModalOpen(false)}
        />

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
              className={" max-w-[300px] sm:max-w-full sm:max-h-full  mt-4"}
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
              <Cta.Title className={"max-w-[600px] mb-4 "}>
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
              <Cta.Title className={" mb-4 uppercase lg:text-center"}>
                Alguns de nossos serviços!{" "}
              </Cta.Title>
              <Cta.Description className={"mb-8"}>
                Contamos com os melhores profissionais do mercado, com uma ampla
                rede de serviços, para você agendar conforme sua necessidade!
              </Cta.Description>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {services.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center bg-blue-primary rounded-lg p-4 "
                >
                  <Cta.Image
                    className={"!w-[320px] h-[210px]"}
                    src={item.image}
                    alt="Cta Image"
                  />
                  <p className="font-bold text-lg mt-4">
                    {
                      findOneEmpresa((company) => company.id === item.companyId)
                        .name
                    }
                  </p>
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
                      onClick={() => {
                        setServicesSelecteds((prev) => [...prev, item]);
                        toast.success("Serviço adicionado ao carrinho", {
                          position: "bottom-right",
                          autoClose: 3000,
                        });
                      }}
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
              className={"max-w-[300px] sm:max-w-[500px] h-auto mt-4 mb-4"}
              src="./public/quem.svg"
              alt="Cta Image"
            />
            <div className="flex flex-col items-center">
              <Cta.Title className={"max-w-[750px] mb-4 text-center "}>
                Sobre nós
              </Cta.Title>
              <Cta.Description
                className={" max-w-[650px] mb-4 text-center px-2"}
              >
                Somos uma rede que une pessoas com vidas corridas no trabalho, e
                que amam a praticidade. Nosso objetivo é de tornar seus dias
                mais práticos, sem correrias, sem ligações ou conversas no
                whatsapp para agendar um simples corte de cabelo. Para o
                profissional trazemos a práticidade de acessar sua agenda depois
                do expediente, sem aquela correria entre os atendimentos.
              </Cta.Description>

              <div
                className={
                  "grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center mt-4"
                }
              >
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
              <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 mt-8 mx-4 ">
                <Avaliacoes
                  text={
                    "Adoro a facilidade com que posso agendar meus tratamentos de beleza na Search Estética. O site é intuitivo e me permite ver todas as opções disponíveis rapidamente. Eu posso escolher o serviço, o horário e o profissional de minha preferência com apenas alguns cliques. É realmente conveniente!"
                  }
                  evalueted={"Maria Silva - Cliente Regular"}
                />
                <Avaliacoes
                  text={
                    "Trabalhando como profissional na área de estética, posso dizer que o site da Search Estética facilita muito a nossa vida. A gestão dos agendamentos é muito mais simples, e a interface do site é amigável tanto para os clientes quanto para nós, profissionais. A integração com nosso calendário digital é um grande bônus!"
                  }
                  evalueted={"Lucas Almeida - Profissional de Estética"}
                />
                <Avaliacoes
                  text={
                    "Como profissional, o sistema de agendamentos da Search Estética me ajuda a manter meu calendário organizado e otimiza meu tempo. É ótimo poder contar com uma plataforma que facilita tanto para os clientes quanto para nós, profissionais. Isso definitivamente melhora a eficiência do nosso trabalho."
                  }
                  evalueted={"Júlia Lima - Profissional de Estética"}
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
                <Avaliacoes
                  text={
                    "Embora eu não faça tratamentos estéticos com frequência, quando preciso, o site da Search Estética é minha primeira escolha. A interface é clara e direta, e o processo de agendamento é muito rápido. Eu consigo reservar um horário em poucos minutos, sem complicações."
                  }
                  evalueted={"Pedro Nunes - Usuário Ocasional"}
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
