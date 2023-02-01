/* eslint-disable no-multi-assign */
import { useState, memo, useRef } from 'react';
import { motion } from 'framer-motion';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import VisibilitySensor from '@zelty/react-visibility-sensor';
import SwiperCore, { EffectCoverflow, EffectFade, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSpring, animated } from 'react-spring';
import $ from 'jquery';

/**
 * Form Validation Schema
 */

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Você necessita entrar com um email válido')
    .required('Entre com seu email'),
  password: yup
    .string()
    .required('Por favor, entre com sua senha.')
    .min(4, 'Senha muito curta - deve ter no mínimo 4 caracteres.'),
});

const defaultValues = {
  email: '',
  password: '',
  remember: true,
};
SwiperCore.use([EffectCoverflow, Pagination, Autoplay, EffectFade]);
function PrincipalPage(props) {
  const dispatch = useDispatch();
  const { control, formState, handleSubmit, setError, setValue } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { isValid, dirtyFields, errors } = formState;

  const [slideBannerAtivo, setSlideBannerAtivo] = useState(0);
  const [contador1, setContador1] = useState(false);
  const [contador2, setContador2] = useState(false);
  const [contador3, setContador3] = useState(false);
  const contador1Concluido = useRef(false);
  const contador2Concluido = useRef(false);
  const contador3Concluido = useRef(false);
  function Number({ n, ativo, cont }) {
    const va = 0;
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      loop: false,
      onRest: (value) => {
        // if (value.finished || value.cancelled) cont.current = true;
      },
      config: { mass: 1, tension: 1, friction: 10, duration: 1200 },
    });
    // eslint-disable-next-line no-shadow
    if (!cont.current && ativo) {
      return (
        <animated.span>
          {number.to((x) => {
            // eslint-disable-next-line radix
            const a = parseInt(x);
            if (a === n) {
              cont.current = true;
            }

            return x.toFixed(0);
          })}
        </animated.span>
      );
    }
    if (!cont.current && !ativo) {
      return <span>0</span>;
    }
    if (cont.current && ativo) {
      return <animated.span>{n}</animated.span>;
    }

    return <animated.span>{n}</animated.span>;
  }
  const CounterClientesAtendidos = memo(() => (
    <>
      <VisibilitySensor
        onChange={(e) => {
          if (contador1 !== e) setContador1(e);

          if (!e) {
            contador1Concluido.current = false;
          }
        }}
        scrollCheck
      >
        <Number n={12315} ativo={contador1} cont={contador1Concluido} />
      </VisibilitySensor>
    </>
  ));

  const CounterFuncionarios = memo(() => (
    <>
      <VisibilitySensor
        onChange={(e) => {
          if (contador2 !== e) setContador2(e);

          if (!e) {
            contador2Concluido.current = false;
          }
        }}
        scrollCheck
      >
        <Number n={370} ativo={contador2} cont={contador2Concluido} />
      </VisibilitySensor>
    </>
  ));

  const CounterEntregasEfetuadas = memo(() => (
    <>
      <VisibilitySensor
        onChange={(e) => {
          if (contador3 !== e) setContador3(e);

          if (!e) {
            contador3Concluido.current = false;
          }
        }}
        scrollCheck
      >
        <Number n={25673341} ativo={contador3} cont={contador3Concluido} />
      </VisibilitySensor>
    </>
  ));
  $(window).on('load', (event) => {
    $('.preloader').delay(500).fadeOut(500);
  });
  return (
    <main>
      <section className="banner-area banner-area1 pos-rel">
        <div className="swiper-container slider__active">
          <div className="swiper-wrapper">
            <Swiper
              effect="fade"
              centeredSlides
              slidesPerView="auto"
              loop
              autoplay={{ delay: 5000 }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              navigation={false}
              onSlideChange={(e) => {
                setSlideBannerAtivo(e.activeIndex);
              }}
              a11y={false}
              pagination={false}
              className="mySwiper"
            >
              <SwiperSlide key={0}>
                <div className="swiper-slide">
                  <div className="single-banner banner-overlay single-banner-1 banner-830">
                    <div className="banner-bg banner-bg1 banner-bg1-1 banner-bg-01" />
                    <div className="container pos-rel">
                      <div className="row align-items-center">
                        <div className="col-lg-8">
                          <div className="banner-content banner-content1 banner-content1-1">
                            <motion.div
                              key="0"
                              animate={
                                slideBannerAtivo === 3 || slideBannerAtivo === 6
                                  ? {
                                      opacity: 1,
                                      y: 0,
                                    }
                                  : { opacity: 0, y: -14 }
                              }
                              transition={{ delay: 0.3 }}
                              className="banner-meta-text"
                            >
                              <span>Qualidade e Eficiência</span>
                            </motion.div>
                            <motion.h1
                              key="00"
                              animate={
                                slideBannerAtivo === 3 || slideBannerAtivo === 6
                                  ? {
                                      opacity: 1,
                                      y: 0,
                                    }
                                  : { opacity: 0, y: -14 }
                              }
                              transition={{ delay: 0.5, duration: 0.7 }}
                              className="banner-title"
                            >
                              Pontualidade, agilidade e segurança <br /> da sua carga
                            </motion.h1>

                            {/* <!--  <div class="banner-btn" data-animation="fadeInUp" data-delay=".7s">
                                                <a href="contact.html" class="fill-btn clip-btn">Solicite um orçamento</a>
                                                <a class="skew-btn" href="services.html">Nossos serviços</a>
                                          </div> --> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={1}>
                <div className="swiper-slide">
                  <div className="single-banner banner-overlay single-banner-1 banner-830">
                    <div
                      className="banner-bg banner-bg1 banner-bg1-1 banner-bg-02"
                      data-background="../assets/img/slider/slider-5.jpg"
                    />
                    <div className="container pos-rel">
                      <div className="row align-items-center">
                        <div className="col-lg-8">
                          <div className="banner-content banner-content1 banner-content1-1">
                            <motion.div
                              key="01"
                              animate={
                                slideBannerAtivo === 4
                                  ? { opacity: 1, y: 0 }
                                  : { opacity: 0, y: -14 }
                              }
                              transition={{ delay: 0.3 }}
                              className="banner-meta-text"
                            >
                              <span>Agilidade e Segurança no descarregamento</span>
                            </motion.div>
                            <motion.h1
                              key="02"
                              animate={
                                slideBannerAtivo === 4
                                  ? { opacity: 1, y: 0 }
                                  : { opacity: 0, y: -14 }
                              }
                              transition={{ delay: 0.5, duration: 0.7 }}
                              className="banner-title"
                            >
                              Nossos caminhões estão adaptados com
                              <br /> plataforma elevatória.
                            </motion.h1>

                            {/* <!-- <div class="banner-btn" data-animation="fadeInUp" data-delay=".7s">
                                                <a href="contact.html" class="fill-btn clip-btn">Solicite um orçamento</a>
                                                <a class="skew-btn" href="services.html">Nossos serviços</a>
                                          </div> --> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={2}>
                <div className="swiper-slide">
                  <div className="single-banner banner-overlay single-banner-1 banner-830">
                    <div className="banner-bg banner-bg1 banner-bg1-1 banner-bg-03" />
                    <div className="container pos-rel">
                      <div className="row align-items-center">
                        <div className="col-lg-8">
                          <div className="banner-content banner-content1 banner-content1-1">
                            <motion.div
                              key="03"
                              animate={
                                slideBannerAtivo === 5
                                  ? { opacity: 1, y: 0 }
                                  : { opacity: 0, y: -14 }
                              }
                              transition={{ delay: 0.3 }}
                              className="banner-meta-text"
                            >
                              <span>Transporte de fechada</span>
                            </motion.div>
                            <motion.h1
                              key="04"
                              animate={
                                slideBannerAtivo === 5
                                  ? { opacity: 1, y: 0 }
                                  : { opacity: 0, y: -14 }
                              }
                              transition={{ delay: 0.5, duration: 0.7 }}
                              className="banner-title"
                            >
                              dos centros de distribuição para as lojas
                            </motion.h1>

                            {/*  <!--  <div class="banner-btn" data-animation="fadeInUp" data-delay=".7s">
                                                <a href="contact.html" class="fill-btn clip-btn">Solicite um orçamento</a>
                                                <a class="skew-btn" href="services.html">Nossos serviços</a>
                                          </div> --> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="slider-pagination slider1-pagination" />
      </section>

      <section className="services__area pb-60">
        <div className="container">
          <div className="services-one">
            <div
              className="services__box services__box--space wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay=".3s"
            >
              <div className="row">
                <div className="col-lg-3 col-xl-3 col-md-6">
                  <div className="services__item text-center">
                    <div className="services__item-icon  flex justify-center">
                      <img
                        className="image-diferencial"
                        src="../assets/img/diferencial/shield.png"
                        alt="About Time Images"
                      />
                    </div>
                    <div className="services__item-content">
                      <h3>
                        <span href="services-details.html">
                          20 anos <br /> de mercado
                        </span>
                      </h3>
                      <p>
                        Somos especializados em transporte de carga atendendo grande empresas e
                        pequenas empresas.
                      </p>
                      {/*    <!--   <div class="services__item-btn">
                                    <span href="services-details.html">service details</span>
                                 </div> --> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-xl-3 col-md-6">
                  <div className="services__item text-center">
                    <div className="services__item-icon  flex justify-center">
                      <img
                        className="image-diferencial"
                        src="../assets/img/diferencial/import.png"
                        alt="About Time Images"
                      />
                    </div>
                    <div className="services__item-content">
                      <h3>
                        <span href="services-details.html">
                          carga <br /> carregada com responsabilidade
                        </span>
                      </h3>
                      <p>
                        Fixação dos tratores com cinta de amarração em todo o assoalho da carreta,
                        evitando qualquer dano que possa ocorrer a sua carga
                      </p>
                      {/*   <!-- <div class="services__item-btn">
                                    <span href="services-details.html">service details</span>
                                 </div> --> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-xl-3 col-md-6">
                  <div className="services__item text-center">
                    <div className="services__item-icon flex justify-center">
                      <img
                        className="image-diferencial"
                        src="../assets/img/diferencial/safe.png"
                        alt="About Time Images"
                      />
                    </div>
                    <div className="services__item-content">
                      <h3>
                        <span href="services-details.html">
                          segurança <br /> da sua carga
                        </span>
                      </h3>
                      <p>
                        Além de sistemas de segurança de última geração implementado em nossos
                        veículos contamos também com escolta.
                      </p>
                      {/*   <!--    <div class="services__item-btn">
                                    <span href="services-details.html">service details</span>
                                 </div> --> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-xl-3 col-md-6">
                  <div className="services__item text-center">
                    <div className="services__item-icon  flex justify-center">
                      <img
                        className="image-diferencial"
                        src="../assets/img/diferencial/trolley.png"
                        alt="About Time Images"
                      />
                    </div>
                    <div className="services__item-content">
                      <h3>
                        <span href="services-details.html">
                          plataforma elevatória em toda frota
                        </span>
                      </h3>
                      <p>
                        Cuidado e segurança ao carregar a sua carga e descarregar a sua carga em
                        solo com agilidade e segurança.
                      </p>
                      {/*     <!-- <div class="services__item-btn">
                                    <span href="services-details.html">service details</span>
                                 </div> --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about__area about__area-padding pt-60 pb-60 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay=".3s"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-xl-5">
              <div
                className="about__img mb-60 p-relative wow fadeInLeft"
                data-wow-duration="1.5s"
                data-wow-delay=".3s"
              >
                <img src="../assets/img/about/about-img.png" alt="About" />
                <div className="about__time-img p-absolute w-img vert-move">
                  <img src="../assets/img/about/about-time.png" alt="About Time Images" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-7">
              <div
                className="about__content mb-60 wow fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay=".5s"
              >
                <div className="section__title mb-35">
                  <span className="sub-title">Sobre nós</span>
                  <h2 className="title">
                    O que queremos <br /> é a sua satisfação!
                  </h2>
                </div>
                <div className="about__content-inner mb-35">
                  <p className="mb-15">
                    A R&U Logística e Transporte opera em todo o estado do Rio de Janeiro desde o
                    ano 2000.
                  </p>
                  <p>
                    Nosso objetivo é entregar soluções eficazes de transportes atendendo as
                    necessidades de cada um de nossos clientes.
                  </p>
                </div>
                <div className="about__btn">
                  <span className="fill-btn clip-btn cursor-pointer" href="about-us.html">
                    Saiba mais
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services__cta">
        <div className="container-fluid container-lg">
          <div
            className="services__cta-box p-relative services__cta-overlay"
            data-background="../assets/img/services/services-cta-bg.png"
          >
            <div className="services__cta-wrapper">
              <div className="services__cta-item t-right mb-15">
                <h3>Necessitando dos nossos serviços?</h3>
              </div>
              <div className="services__cta-item text-center mb-15 ">
                <i className="flaticon-telephone-call animate-pulse" />
              </div>
              <div className="services__cta-item mb-15">
                <h3>
                  Telefone para nós{' '}
                  <span href="tel:+552126514900" className="cursor-pointer">
                    +55 (21) 2651-4900
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Work Precess Start Here  -->
       <!--   <section class="work grey-bg mt--60">
            <div class="container">
               <div class="work__wrapper p-relative wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                  <div class="row align-items-center align-items-xxl-end">
                     <div class="col-xl-5 col-lg-5">
                        <div class="work__content">
                           <div class="section__title mb-45">
                              <span class="sub-title">process</span>
                              <h2 class="title">company’s working process for grow</h2>
                           </div>
                           <div class="work__content-list pr-60">
                              <div class="work__item">
                                 <div class="work__item-num">
                                    <h5>01</h5>
                                 </div>
                                 <div class="work__item-text">
                                    <h4>make online order</h4>
                                    <p>From finance, retail, and travel, to social media,
                                       cybersecurity, adtech, and more.
                                    </p>
                                 </div>
                              </div>
                              <div class="work__item">
                                 <div class="work__item-num">
                                    <h5>02</h5>
                                 </div>
                                 <div class="work__item-text">
                                    <h4>bring your product</h4>
                                    <p>From finance, retail, and travel, to social media,
                                       cybersecurity, adtech, and more.
                                    </p>
                                 </div>
                              </div>
                              <div class="work__item">
                                 <div class="work__item-num">
                                    <h5>03</h5>
                                 </div>
                                 <div class="work__item-text">
                                    <h4>get transportation</h4>
                                    <p>From finance, retail, and travel, to social media,
                                       cybersecurity, adtech, and more.
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-xl-7 col-lg-7">
                        <div class="work__img white-bg p-relative ml-30">
                           <img src="assets/img/work/work-img.png" alt="Work">
                           <div class="work__btn">
                              <span href="https://www.youtube.com/watch?v=5Gsam6jyRI0"
                                 class="popup-video play-btn play-btn-white"><i class="fas fa-play"></i></span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section> */}

      <section className="testimonial-area testimonial-space pb-100 pt-120 banner-bg-testimonial">
        <div className="container">
          <div
            className="flex justify-content-center wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay=".3s"
          >
            <div className="col-xl-5">
              <div className="section__title text-center mb-35">
                <h2 className="title">O que os nossos clientes acham do nosso serviço?</h2>
              </div>
            </div>
          </div>

          <div
            className="testimonial-box wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay=".5s"
          >
            <div className="swiper-container testimonial-active testimonial-one">
              <div className="swiper-wrapper">
                <Swiper
                  slidesPerView="3"
                  spaceBetween={32}
                  centeredSlides
                  loop
                  observer
                  observeParents
                  rebuildOnUpdate
                  autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                  }}
                  // Responsive breakpoints
                  breakpoints={{
                    1400: {
                      slidesPerView: 3,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                    992: {
                      slidesPerView: 2,
                      spaceBetween: 15,
                      centeredSlides: false,
                    },
                    768: {
                      slidesPerView: 2,
                      centeredSlides: false,
                      spaceBetween: 15,
                    },
                    576: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1,
                    },
                  }}
                >
                  <SwiperSlide key={0}>
                    <div className="swiper-slide">
                      <div className="testimonial-shadow">
                        <div className="testimonial-items">
                          <div className="testimonial__icon rate">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <div className="testimonial__text">
                            <p className="whitespace-pre-wrap">
                              “Desde 2018 trabalhamos com a R&U. Eles têm sido muito confiáveis e
                              eficiêntes prestando um ótimo serviço de abastecimento de nossas lojas
                              como entrega aos clientes final.As entregas são feitas no prazo e com
                              muito zelo tornando esta etapa do nosso negócio mais fácil. Eles nos
                              ofereceram preços muito competitivos e fizeram de tudo para nos ajudar
                              com todas as nossas necessidades especiais.
                              <br />
                              Recomendo com certeza a R&U para outras empresas do ramo”
                            </p>
                          </div>
                          <div className="testimonial__auth">
                            <div className="testimonial__auth-img f-left mr-20">
                              <img
                                src={require('../assets/img/testimonial/aut-1.jpg')}
                                alt="Testimonial"
                              />
                            </div>
                            <div className="testimonial__auth-text fix">
                              <h4>Pedro de Oliveira</h4>
                              <span>Magazine Luiza</span>
                            </div>
                          </div>
                          <div className="testimonial__quote-icon quote">
                            <i className="fas fa-quote-left" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide key={1}>
                    <div className="swiper-slide">
                      <div className="testimonial-shadow">
                        <div className="testimonial-items">
                          <div className="testimonial__icon rate">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <div className="testimonial__text">
                            <p className="whitespace-pre-wrap">
                              “Estou enviando a você uma expressão do nosso apreço pela alta
                              qualidade dos serviços prestados à VIA.
                              <br />
                              Nossa decisão de mudar nossas operações de transportes para a R&U foi
                              uma das melhores decisões que já tomamos!
                              <br />A R&U reduziu drásticamente o furto de carga que tinhamos e
                              problema de produto danificado no transporte.
                              <br />
                              Que continuemos esta parceria de sucesso.”
                            </p>
                          </div>
                          <div className="testimonial__auth">
                            <div className="testimonial__auth-img f-left mr-20">
                              <img
                                src={require('../assets/img/testimonial/aut-2.jpg')}
                                alt="Testimonial"
                              />
                            </div>
                            <div className="testimonial__auth-text fix">
                              <h4>Roberta Silva</h4>
                              <span>Via Varejo</span>
                            </div>
                          </div>
                          <div className="testimonial__quote-icon quote">
                            <i className="fas fa-quote-left" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide key={2}>
                    <div className="swiper-slide">
                      <div className="testimonial-shadow">
                        <div className="testimonial-items">
                          <div className="testimonial__icon rate">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                          <div className="testimonial__text">
                            <p className="whitespace-pre-wrap">
                              “A R&U trabalha com eficiência e agilidade, sempre priorizando a
                              qualidade no transporte de nossas mercadorias.
                              <br />
                              Utilizamos seus serviços tanto para entrega a cliente como
                              abastecimento de nossas lojas.
                              <br />É um grande prazer ter a R&U como parceira!”
                            </p>
                          </div>
                          <div className="testimonial__auth">
                            <div className="testimonial__auth-img f-left mr-20">
                              <img
                                src={require('../assets/img/testimonial/aut-3.jpg')}
                                alt="Testimonial"
                              />
                            </div>
                            <div className="testimonial__auth-text fix">
                              <h4>Patrícia de Moura</h4>
                              <span>Americanas</span>
                            </div>
                          </div>
                          <div className="testimonial__quote-icon quote">
                            <i className="fas fa-quote-left" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="brand green-bg pt-35 pb-35">
        <div className="container">
          <div
            className="row justify-content-center wow fadeInUp"
            data-wow-duration="1.5s"
            data-wow-delay=".3s"
          >
            <div className="col-xl-5">
              <div className="section__title text-center mb-35">
                <span className="title text-white">Alguns dos Nossos Clientes</span>
              </div>
            </div>
          </div>
          <div className="flex overflow-hidden">
            <div className="swiper-wrapper">
              <Swiper
                loop
                centeredSlides
                observer
                observeParents
                rebuildOnUpdate
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                // Responsive breakpoints
                breakpoints={{
                  1400: {
                    init: true,
                    loop: true,
                    slidesPerView: 5,
                    spaceBetween: 120,
                    centeredSlides: true,
                    autoplay: {
                      delay: 1000,
                      disableOnInteraction: false,
                    },
                  },
                  1200: {
                    init: true,
                    loop: true,
                    slidesPerView: 4,
                    spaceBetween: 100,
                    centeredSlides: true,
                    autoplay: {
                      delay: 1000,
                      disableOnInteraction: false,
                    },
                  },
                  992: {
                    init: true,
                    loop: true,
                    slidesPerView: 3,
                    spaceBetween: 100,
                    centeredSlides: true,
                    autoplay: {
                      delay: 1000,
                      disableOnInteraction: false,
                    },
                  },
                  768: {
                    init: true,
                    loop: true,
                    slidesPerView: 3,
                    spaceBetween: 80,
                    centeredSlides: true,
                    autoplay: {
                      delay: 1000,
                      disableOnInteraction: false,
                    },
                  },
                  576: {
                    init: true,
                    loop: true,
                    slidesPerView: 2,
                    spaceBetween: 10,
                    centeredSlides: true,
                    autoplay: {
                      delay: 1000,
                      disableOnInteraction: false,
                    },
                  },
                  0: {
                    init: true,
                    loop: true,
                    centeredSlides: true,
                    slidesPerView: 2,
                    spaceBetween: 10,
                    autoplay: {
                      delay: 1000,
                      disableOnInteraction: false,
                    },
                  },
                }}
              >
                <SwiperSlide key={0}>
                  <div className="flex w-160 h-60 max-w-160 rounded-lg text-center  justify-center items-center bg-white drop-shadow-lg">
                    <span href="#">
                      <img src="../assets/img/brand/bc1.png" className="rounded-lg" alt="Brand" />
                    </span>
                  </div>
                </SwiperSlide>
                <SwiperSlide key={1}>
                  <div className="flex w-160 h-60 max-w-160 rounded-lg text-center justify-center items-center  bg-white drop-shadow-lg">
                    <span href="#" className="justify-center items-center">
                      <img src="../assets/img/brand/bc2.png" alt="Brand" className="rounded-lg" />
                    </span>
                  </div>
                </SwiperSlide>

                <SwiperSlide key={2}>
                  <div className="flex w-160  h-60 max-w-160 rounded-lg text-center justify-center items-center bg-white drop-shadow-lg">
                    <img src="../assets/img/brand/bc3.png" alt="Brand" className="rounded-lg" />
                  </div>
                </SwiperSlide>
                <SwiperSlide key={3}>
                  <div className="flex w-160  h-60 max-w-160  rounded-lg  text-center justify-center items-center  bg-white drop-shadow-lg">
                    <img src="../assets/img/brand/bc4.png" alt="Brand" className="rounded-lg" />
                  </div>
                </SwiperSlide>
                <SwiperSlide key={4}>
                  <div className="flex w-160  h-60 max-w-160  rounded-lg  text-center  justify-center items-center  bg-white drop-shadow-lg">
                    <img src="../assets/img/brand/bc5.png" alt="Brand" className="rounded-lg" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* 
         <!-- Price CTA Area Start Here  -->
     <!--     <section class="price__cta pt-120 bg-css"
            data-background="assets/img/price-cta/price-cta-bg.png">
            <div class="container">
               <div class="row justify-content-end">
                  <div class="col-xxl-7 col-xl-8">
                     <div class="price__cta-content-shadow">
                        <div class="price__cta-content">
                           <div class="section__title mb-55 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                              <span class="sub-title">call to action</span>
                              <h2 class="title">price calculation</h2>
                           </div>
                           <div class="price__cta-form wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".5s">
                              <form>
                                 <div class="row">
                                    <div class="col-xl-6 col-lg-6">
                                       <div class="single-input-field">
                                          <input type="text" placeholder="Your Name">
                                          <i class="fas fa-user"></i>
                                       </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6">
                                       <div class="single-input-field">
                                          <input type="email" placeholder="Email address">
                                          <i class="fas fa-envelope"></i>
                                       </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6">
                                       <div class="single-input-field z-index-3">
                                          <select>
                                             <option selected>Freight Type</option>
                                             <option>Ocean Freight</option>
                                             <option>Air Freight</option>
                                             <option>Land Freight</option>
                                          </select>
                                       </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6">
                                       <div class="single-input-field z-index-3">
                                          <select>
                                             <option selected>Incoterms</option>
                                             <option>EXW</option>
                                             <option>FCA</option>
                                             <option>CPT</option>
                                             <option>CIP</option>
                                             <option>DAT</option>
                                          </select>
                                       </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6">
                                       <div class="single-input-field">
                                          <input type="text" placeholder="Total weight">
                                          <i class="fad fa-weight"></i>
                                       </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6">
                                       <div class="single-input-field">
                                          <input type="text" placeholder="Dimension">
                                          <i class="fas fa-cube"></i>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-lx-12">
                                    <div class="price__cta-btn">
                                       <span href="#" class="fill-btn clip-sm-btn d-block">Submit Now</span>
                                    </div>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section> */}

      {/*          <!-- Gallery Section Start  -->
    <!--      <section class="dp-gallery-area-03 pt-120 pb-120 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
            <div class="container">
               <div class="row justify-content-center">
                  <div class="col-xl-7 col-lg-8 col-12">
                        <div class="section__title gallery-section-title mb-55 text-center">
                           <span class="sub-title">explore recent works</span>
                           <h2 class="title">Managing Logistics For World’s Best Companies.</h2>
                        </div>
                  </div>
               </div>
            </div>
            <div class="dp-gallery-slider-03 p-relative">
               <div class="dp-gallery-active-03 swiper-container">
                  <div class="swiper-wrapper">
                        <div class="dp-single-gallery-03 swiper-slide">
                           <div class="dp-single-gallery-thumb-03" data-background="assets/img/gallery/gallery-01.jpg"></div>
                           <div class="dp-gallery-content-03">
                              <h3 class="dp-gallery-title-03">
                                 <span href="portfolio-details.html">Rising Online Grocery Sales</span>
                              </h3>
                              <div class="dp-gallery-tag-03">
                                 <span>logistics</span>
                              </div>
                           </div>
                           <div class="dp-gallery-view-03">
                              <span href="assets/img/gallery/gallery-01.jpg" class="dp-gallery-plus-btn popup-image">
                                 <i class="fal fa-plus"></i>
                              </span>
                           </div>
                        </div>
                        <div class="dp-single-gallery-03 swiper-slide">
                           <div class="dp-single-gallery-thumb-03" data-background="assets/img/gallery/gallery-04.jpg"></div>
                           <div class="dp-gallery-content-03">
                              <h3 class="dp-gallery-title-03">
                                 <span href="portfolio-details.html">Manufacturing Cost Minimize</span>
                              </h3>
                              <div class="dp-gallery-tag-03">
                                 <span>logistics</span>
                              </div>
                           </div>
                           <div class="dp-gallery-view-03">
                              <span href="assets/img/gallery/gallery-04.jpg" class="dp-gallery-plus-btn popup-image">
                                 <i class="fal fa-plus"></i>
                              </span>
                           </div>
                        </div>
                        <div class="dp-single-gallery-03 swiper-slide">
                           <div class="dp-single-gallery-thumb-03" data-background="assets/img/gallery/gallery-05.jpg"></div>
                           <div class="dp-gallery-content-03">
                              <h3 class="dp-gallery-title-03">
                                 <span href="portfolio-details.html">Chemicals Documents</span>
                              </h3>
                              <div class="dp-gallery-tag-03">
                                 <span>logistics</span>
                              </div>
                           </div>
                           <div class="dp-gallery-view-03">
                              <span href="assets/img/gallery/gallery-05.jpg" class="dp-gallery-plus-btn popup-image">
                                 <i class="fal fa-plus"></i>
                              </span>
                           </div>
                        </div>                
                        <div class="dp-single-gallery-03 swiper-slide">
                           <div class="dp-single-gallery-thumb-03" data-background="assets/img/gallery/gallery-02.jpg"></div>
                           <div class="dp-gallery-content-03">
                              <h3 class="dp-gallery-title-03">
                                 <span href="portfolio-details.html">Lockdown Business Swell</span>
                              </h3>
                              <div class="dp-gallery-tag-03">
                                 <span>logistics</span>
                              </div>
                           </div>
                           <div class="dp-gallery-view-03">
                              <span href="assets/img/gallery/gallery-02.jpg" class="dp-gallery-plus-btn popup-image">
                                 <i class="fal fa-plus"></i>
                              </span>
                           </div>
                        </div>
                        <div class="dp-single-gallery-03 swiper-slide">
                           <div class="dp-single-gallery-thumb-03" data-background="assets/img/gallery/gallery-03.jpg"></div>
                           <div class="dp-gallery-content-03">
                              <h3 class="dp-gallery-title-03">
                                 <span href="portfolio-details.html">Warehouse Inventory</span>
                              </h3>
                              <div class="dp-gallery-tag-03">
                                 <span>logistics</span>
                              </div>
                           </div>
                           <div class="dp-gallery-view-03">
                              <span href="assets/img/gallery/gallery-03.jpg" class="dp-gallery-plus-btn popup-image">
                                 <i class="fal fa-plus"></i>
                              </span>
                           </div>
                        </div>
                        <div class="dp-single-gallery-03 swiper-slide">
                           <div class="dp-single-gallery-thumb-03" data-background="assets/img/gallery/gallery-02.jpg"></div>
                           <div class="dp-gallery-content-03">
                              <h3 class="dp-gallery-title-03">
                                 <span href="portfolio-details.html">Warehouse Inventory</span>
                              </h3>
                              <div class="dp-gallery-tag-03">
                                 <span>logistics</span>
                              </div>
                           </div>
                           <div class="dp-gallery-view-03">
                              <span href="assets/img/gallery/gallery-02.jpg" class="dp-gallery-plus-btn popup-image">
                                 <i class="fal fa-plus"></i>
                              </span>
                           </div>
                        </div>
                  </div>
               </div>
               <div class="dp-gallery-nav-03 d-none d-md-block">
                  <button type="button" class="dp-gallery-button-prev-03"><i class="far fa-arrow-left"></i></button>
                  <button type="button" class="dp-gallery-button-next-03"><i class="far fa-arrow-right"></i></button>
               </div>
            </div>
         </section> --> */}

      <section className="dp-funfact-area dp-funfact-area-03 grey-bg p-relative pt-120 pb-90">
        <motion.div
          key="23"
          exit={{ opacity: 0, y: -24 }}
          initial={{ opacity: 0, y: -24 }}
          animate={
            contador1
              ? { opacity: 1, y: 0, animationDuration: 2, transitionDuration: 2 }
              : { opacity: 0, y: -24 }
          }
          transition={{ delay: 0.3 }}
          className="container"
        >
          <div className="row justify-content-center">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12">
              <div className="dp-funfact-wrapper dp-funfact-wrapper-03 mb-30">
                <div className="dp-funfact-icon">
                  <i className="fal fa-smile" />
                </div>
                <div className="dp-funfact-content">
                  <CounterClientesAtendidos />

                  <p>Clientes Atendidos</p>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12">
              <div className="dp-funfact-wrapper dp-funfact-wrapper-03 mb-30">
                <div className="dp-funfact-icon">
                  <i className="fal fa-users" />
                </div>
                <div className="dp-funfact-content">
                  <CounterFuncionarios />
                  <p>Funcionários</p>
                </div>
              </div>
            </div>
            {/* <!-- <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12">
                     <div class="dp-funfact-wrapper dp-funfact-wrapper-03 mb-30">
                     <div class="dp-funfact-icon">
                           <i class="fal fa-smile"></i>
                     </div>
                     <div class="dp-funfact-content">
                           <h3 class="counter">17227</h3>
                           <p>Satisfied Clients</p>
                     </div>
                     </div>
                  </div> --> */}
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12">
              <div className="dp-funfact-wrapper dp-funfact-wrapper-03 mb-30">
                <div className="dp-funfact-icon">
                  <i className="fal fa-truck" />
                </div>
                <div className="dp-funfact-content">
                  <CounterEntregasEfetuadas />
                  <p>Entregas Efetuadas</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/*      <section class="blog pt-120 blog__padding1 pb-55 white-bg">
            <div class="container">
               <div class="blog-section-title mb-55 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".3s">
                  <div class="d-flex align-items-center justify-content-between">
                        <div class="section__title">
                           <span class="sub-title">blog</span>
                           <h2 class="title">news & insights</h2>
                        </div>
                        <div class="blog__more-btn d-none d-sm-block t-right">
                           <span href="blog.html">more news <i class="fas fa-long-arrow-right"></i></span>
                        </div>
                  </div>
               </div>
               <div class="blog__box">
                  <div class="row">
                     <div class="col-xl-4 col-lg-4 col-md-6">
                        <spanrticle>
                           <div class="blog__item mb-60 w-img wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".6s">
                              <div class="blog__item-img mb-35">
                                 <span href="blog-details.html"><img src="assets/img/blog/blog-page-img-1.jpg" alt="Blog"></span>
                              </div>
                              <div class="blog__item-date">
                                 <span><b>20 </b>JUN</span>
                              </div>
                              <div class="blog__item-content">
                                 <h2><span href="blog-details.html">Transportation is The Real Time Business </span></h2>
                                 <div class="blog__meta">
                                    <span><span href="blog-details.html"><i class="far fa-comment-alt"></i>5 comments</span></span>
                                    <span> <span href="#"><i class="fas fa-user"></i> Hunhu La.</span></span>
                                 </div>
                                 <div class="blog__item-text">
                                    <p>From finance, retail, and travel, to social media, cyber
                                       security, adtech, and more, market leaders are leverag
                                       ing web data to maintain their transt
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </article>
                     </div>
                     <div class="col-xl-4 col-lg-4 col-md-6">
                        <spanrticle>
                           <div class="blog__item mb-60 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".9s">
                              <div class="blog__item-img mb-35 w-img">
                                 <span href="blog-details.html"><img src="assets/img/blog/blog-page-img-3.jpg" alt="Blog"></span>
                              </div>
                              <div class="blog__item-date">
                                 <span><b>15 </b>JUN</span>
                              </div>
                              <div class="blog__item-content">
                                 <h2><span href="blog-details.html">This schematic approach was later adopted</span></h2>
                                 <div class="blog__meta">
                                    <span><span href="blog-details.html"><i class="far fa-comment-alt"></i>5 comments</span></span>
                                    <span> <span href="#"><i class="fas fa-user"></i> Hunhu La.</span></span>
                                 </div>
                                 <div class="blog__item-text">
                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                       piece of classical Latin literature from 45 BC, making it over
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </article>
                     </div>
                     <div class="col-xl-4 col-lg-4 col-md-6">
                        <spanrticle>
                           <div class="blog__item mb-60 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.12s">
                              <div class="blog__item-img mb-35 w-img">
                                 <span href="blog-details.html"><img src="assets/img/blog/blog-page-img-2.jpg" alt="Blog"></span>
                              </div>
                              <div class="blog__item-date">
                                 <span><b>10 </b>JUN</span>
                              </div>
                              <div class="blog__item-content">
                                 <h2><span href="blog-details.html">Improving Your Team Members Communication In </span></h2>
                                 <div class="blog__meta">
                                    <span><span href="blog-details.html"><i class="far fa-comment-alt"></i>5 comments</span></span>
                                    <span> <span href="#"><i class="fas fa-user"></i> Hunhu La.</span></span>
                                 </div>
                                 <div class="blog__item-text">
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                       have suffered alteration in some form, by. 
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </article>
                     </div>
                  </div>
               </div>
            </div>
         </section> */}
    </main>
  );
}

export default PrincipalPage;
