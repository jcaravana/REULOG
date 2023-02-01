import { motion } from 'framer-motion';
import '../assets/fonts/glyphter-font/css/Glyphter.css';

function SobreNosPage(props) {
  return (
    <main>
      {/* <!-- page title area  --> */}
      <section className="page-title-area breadcrumb-spacing banner-bg-sobre-nos">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-9">
              <div className="page-title-wrapper text-center">
                <motion.h1
                  initial={{ opacity: 0, y: -14 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="page-title mb-25"
                >
                  sobre nós
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: -14 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="breadcrumb-menu"
                >
                  <nav aria-label="Breadcrumbs" className="breadcrumb-trail breadcrumbs">
                    <ul className="trail-items">
                      <li className="trail-item trail-begin">
                        <span>
                          <span>Home</span>
                        </span>
                      </li>
                      <li className="trail-item trail-end">
                        <span>Sobre nós</span>
                      </li>
                    </ul>
                  </nav>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- page title area end --> */}

      {/* <!-- About Us 3 Area Start Here --> */}
      <section
        className="about__3 about__gray-bg p-relative pt-120 pb-60 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay=".3s"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="about__3-img-wrapper p-relative mb-60">
                <div className="about__3-top w-img">
                  <img src={require('../assets/img/about/about-3-1.png')} alt="About" />
                </div>
                <div className="about__3-main w-img">
                  <img src={require('../assets/img/about/about-page-1.jpg')} alt="About" />
                </div>
                <div className="about__3-text clip-box-sm">
                  <span>
                    <i className="far fa-trophy-alt" />
                  </span>
                  <h4 className="about__3-title">20 anos de experiência</h4>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="about__3-content mb-60">
                <div className="section__title mb-30">
                  <span className="sub-title">sobre nós</span>
                  <h2 className="title">
                    Uma empresa com expertise em <br /> transporte e logística.
                  </h2>
                </div>
                <div className="about__3-content-inner p-relative">
                  <div className="about__3-content-left">
                    <p>
                      A R&U Logística e Transporte opera em todo o estado do Rio de Janeiro há mais
                      de 20 anos.
                    </p>
                    <p>
                      Nossa missão é entregar soluções eficazes de transportes antendendo a
                      necessidade de cada um de nosso clientes.
                    </p>
                    <p>
                      E é claro, nos comprometemos a entregar um serviço de eficiência, segurança e
                      qualidade.
                    </p>
                    <p>
                      E é claro, nos comprometemos a entregar um serviço de eficiência, segurança e
                      qualidade.
                    </p>
                    <h4 className="title">O que queremos é a sua satisfação!</h4>
                    <div className="about__3-content-btn mt-35">
                      <span className="skew-btn">Fale conosco!</span>
                    </div>
                  </div>
                  <div className="about__3-content-right">
                    <div className="about__3-shadow">
                      <div className="about__3-content-num">
                        <h2>12</h2>
                        <h6>
                          Prêmios na área
                          <br /> de transporte
                        </h6>
                      </div>
                    </div>
                    {/*    <!--  <div class="about__3-shadow">
                            <div class="about__3-content-num">
                               <h2>31</h2>
                               <h6>star ratings</h6>
                            </div>
                         </div> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- About Us 3 Area End Here --> */}

      {/* <!-- Services 3 Area Start Here  --> */}
      <section
        className="services__3 grey-bg-4 pt-120 pb-90 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay=".3s"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section__title mb-55 text-center">
                <span className="sub-title">serviços</span>
                <h2 className="title">O que podemos lhe oferecer</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="services__3-item mb-30">
                <div className="services__3-item-num">
                  <h3>01</h3>
                </div>
                <div className="services__3-item-icon">
                  <i className="flaticon-boat" />
                </div>
                <h3 className="services__3-item-title">
                  <span>Transporte Maritímo</span>
                </h3>
                <p className="services__3-item-text">Estes campos temos que definir</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="services__3-item mb-30">
                <div className="services__3-item-num">
                  <h3>02</h3>
                </div>
                <div className="services__3-item-icon">
                  <i className="flaticon-plane" />
                </div>
                <h3 className="services__3-item-title">
                  <span>Transporte Aéreo</span>
                </h3>
                <p className="services__3-item-text">Estes campos temos que definir</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="services__3-item mb-30">
                <div className="services__3-item-num">
                  <h3>03</h3>
                </div>
                <div className="services__3-item-icon">
                  <i className="flaticon-frontal-truck" />
                </div>
                <h3 className="services__3-item-title">
                  <span>Transporte de Caminhão</span>
                </h3>
                <p className="services__3-item-text">Estes campos temos que definir</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="services__3-item mb-30">
                <div className="services__3-item-num">
                  <h3>04</h3>
                </div>
                <div className="services__3-item-icon">
                  <i className="flaticon-train" />
                </div>
                <h3 className="services__3-item-title">
                  <span>Transporte Ferroviário</span>
                </h3>
                <p className="services__3-item-text">Estes campos temos que definir</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="services__3-item mb-30">
                <div className="services__3-item-num">
                  <h3>05</h3>
                </div>
                <div className="services__3-item-icon">
                  <i className="flaticon-box" />
                </div>
                <h3 className="services__3-item-title">
                  <span>Transporte de Pacotes</span>
                </h3>
                <p className="services__3-item-text">Estes campos temos que definir</p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="services__3-item mb-30">
                <div className="services__3-item-num">
                  <h3>06</h3>
                </div>
                <div className="services__3-item-icon">
                  <i className="icon-delivery-man" />
                </div>
                <h3 className="services__3-item-title">
                  <span>Transporte via motoboy</span>
                </h3>
                <p className="services__3-item-text">Estes campos temos que definir</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services 3 Area End Here  --> */}

      {/* <!-- approach area start  --> */}
      <section className="approach__area fix grey-bg-4">
        <div className="approach__img m-img">
          <img src={require('../assets/img/approach/approch-img.jpg')} alt="approach" />
        </div>
        <div className="container">
          <div className="row g-0 justify-content-end">
            <div className="col-lg-6">
              <div
                className="approach__content wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".3s"
              >
                <div className="section__title mb-35">
                  <span className="sub-title">clientes</span>
                  <h2 className="title">100% satisfação garantida!</h2>
                </div>
                <div className="approach__text">
                  <p>
                    Nós oferecemos uma gama completa de serviços na esfera de transporte e logística
                    para qualquer carga.
                  </p>
                  <ul>
                    <ul>
                      <li>
                        <i className="fal fa-check-circle" />
                        Comercial Especializado
                      </li>
                      <li>
                        <i className="fal fa-check-circle" />
                        Time capacitado
                      </li>
                      <li>
                        <i className="fal fa-check-circle" />
                        Metas de sustentabilidade
                      </li>
                      <li>
                        <i className="fal fa-check-circle" />
                        Otimização de custos
                      </li>
                      <li>
                        <i className="fal fa-check-circle" />
                        Diminuição do Tempo de Trânsito
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- approach area end --> */}

      {/* <!-- mission area start  --> */}
      <section className="mission__area p-relative fix grey-bg-4 mb-120">
        <div className="mission__img m-img">
          <img src={require('../assets/img/mission/mission-img.jpg')} alt="mission" />
        </div>
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-6">
              <div
                className="mission__content wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".3s"
              >
                <div className="section__title mb-35">
                  <span className="sub-title">Nossa missão</span>
                  <h2 className="title">Transportar com eficiência, agilidade e segurança</h2>
                </div>
                <div className="mission__text">
                  <p>
                    Transportar com eficiência, agilidade e segurança, integrando mercados,
                    superando as expectativas de seus clientes e promovendo o desenvolvimento
                    profissional e humano de seus colaboradores.
                  </p>
                  <div className="mission__text-inner">
                    <img
                      src={require('../assets/img/mission/mission-contact-img.jpg')}
                      alt="mission"
                    />
                    <div className="mission__text-contact">
                      <div className="single-contact-info d-flex align-items-center">
                        <div className="contact-info-icon">
                          <span>
                            <i className="flaticon-envelope" />
                          </span>
                        </div>
                        <div className="contact-info-text">
                          <span>envie um email para nós</span>
                          <h5>
                            <span href="mailto:CONTATO@REULOGTRANS.COM.BR">
                              CONTATO@REULOGTRANS.COM.BR
                            </span>{' '}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- mission area end --> */}
    </main>
  );
}

export default SobreNosPage;
