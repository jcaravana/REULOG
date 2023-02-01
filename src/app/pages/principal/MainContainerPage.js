/* eslint-disable no-multi-assign */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
// import $ from 'jquery';
import $ from 'jquery';
import Typography from '@mui/material/Typography';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import { Icon, Fab } from '@mui/material';
import IconWA from './assets/img/contact/whatsapp_colorido.png';
import reducer from './store';
import { openModalLoading, closeModalLoading } from '../../store/fuse/modalLoadingSlice';
import { selectPage, setPage } from './store/navegacaoSlice';

import PrincipalPage from './components/Principal';
import SobreNosPage from './components/SobreNos';
import ContatoPage from './components/Contato';
import './assets/css/preloader.css';
import './assets/css/bootstrap.min.css';
import './assets/css/meanmenu.css';
import './assets/css/animate.min.css';
import './assets/css/swiper-bundle.css';
import './assets/css/backToTop.css';
import './assets/css/magnific-popup.css';
import './assets/css/ui-range-slider.css';
import './assets/css/nice-select.css';
import './assets/css/fontAwesome5Pro.css';
import './assets/css/flaticon.css';
import './assets/css/default.css';
import './assets/css/style.css';

import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './principal.css';
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

function MainContainerPage() {
  const dispatch = useDispatch();
  const { control, formState, handleSubmit, setError, setValue } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  const { isValid, dirtyFields, errors } = formState;
  const [loading, setLoading] = useState(false);
  const [slideBannerAtivo, setSlideBannerAtivo] = useState(0);
  const [isActiveSideMenu, setIsActiveSideMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const paginaSelecionada = useSelector(selectPage);
  useEffect(() => {
    function onScroll() {
      const header = document.getElementById('topo');
      const sticky = header.offsetTop;
      if (window.pageYOffset > sticky + 70) {
        if (!isActiveSideMenu) {
          setIsActiveSideMenu(true);
          if (!$('#header-sticky').hasClass('sticky')) $('#header-sticky').addClass('sticky');
        }
      } else {
        setIsActiveSideMenu(false);
        $('#header-sticky').removeClass('sticky');
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    $('.preloader').fadeIn(100);
    $('.preloader').delay(500).fadeOut(500);
  }, [paginaSelecionada]);

  /*  useEffect(() => {
    setValue('email', 'admin@fusetheme.com', {
      shouldDirty: true,
      shouldValidate: true,
    });
    setValue('password', 'admin', { shouldDirty: true, shouldValidate: true });
  }, [setValue]); */

  function onSubmit({ email, password }) {
    setLoading(true);
    dispatch(
      openModalLoading({
        titulo: 'Autenticação do Usuário',
        mensagem: 'Aguarde, processando autenticação....',
      })
    );
    setLoading(false);
    dispatch(closeModalLoading());
  }

  return (
    <div className="flex w-full h-full">
      <body>
        <div className="preloader">
          <img src={require('./assets/img/logo/preloader-icon.gif')} alt="preloader-icon" />
        </div>
        <header id="header">
          <div className="header__top header__pad d-none d-md-block">
            <div className="container">
              <div className="row g-0 align-items-center">
                <div className="col-xl-7 col-md-7">
                  <div className="header__text flex">
                    <Typography className="font-semibold uppercase text-white/75 m-2">
                      Somos mais do que apenas transporte.
                    </Typography>
                    <Typography className="font-semibold uppercase text-white hover:text-red m-2 cursor-pointer">
                      Consultoria Gratuita
                    </Typography>
                  </div>
                </div>
                {/*    <!--  <div class="col-xl-5 col-md-5 d-flex justify-content-end">
                     <div class="header__social-link">
                        <ul>
                           <li><span href="#"><i class="fab fa-facebook-f"></i></span></li>
                           <li><span href="#"><i class="fab fa-twitter"></i></span></li>
                           <li><span href="#"><i class="fab fa-behance"></i></span></li>
                           <li><span href="#"><i class="fab fa-youtube"></i></span></li>
                           <li><span href="#"><i class="fab fa-linkedin"></i></span></li>
                        </ul>
                     </div>
                  </div> --> */}
              </div>
            </div>
          </div>

          <div className="header__bottom-wrapper white-bg pb-15">
            <div className="container">
              <div className="header__bottom p-relative">
                <div className="header__bottom-info">
                  <div className="flex align-items-center">
                    <div
                      className="col-xl-2 col-lg-2 col-md-2 col-3"
                      onClick={() => {
                        dispatch(setPage(0));
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      <div className="logo logo-transform ">
                        <img src="assets/img/logo/logo.png" className="cursor-pointer" alt="Logo" />
                      </div>
                    </div>
                    <div className="col-xl-10 col-lg-10 col-md-10 col-9">
                      <div className="text-end d-xl-none">
                        <div
                          className="header__toggle-btn sidebar-toggle-btn"
                          onClick={() => {
                            $('#sidebar__area').addClass('sidebar-opened');
                            $('#body-overlay').addClass('opened');
                          }}
                        >
                          <div className="header__bar">
                            <span />
                            <span />
                            <span />
                          </div>
                        </div>
                      </div>
                      <div className="d-none d-xl-block">
                        <div className="header__info">
                          <div className="header__info-item">
                            <div className="header__info-icon">
                              <i className="flaticon-telephone-call" />
                            </div>
                            <div className="header__info-text">
                              <span>Ligue para nós</span>
                              <Typography className="font-semibold uppercase text-17  text-indigo-900">
                                +55 (21) 2651-4900
                              </Typography>
                            </div>
                          </div>
                          <div className="header__info-item">
                            <div className="header__info-icon">
                              <i className="flaticon-envelope" />
                            </div>
                            <div className="header__info-text">
                              <span>Email</span>
                              <Typography
                                onClick={(e) => {
                                  window.location.href = 'mailto:contato@reulogtrans.com.br';
                                  e.preventDefault();
                                }}
                                className="font-semibold uppercase text-17  text-indigo-900 hover:text-red-800 cursor-pointer"
                              >
                                contato@reulogtrans.com.br
                              </Typography>
                            </div>
                          </div>
                          <div className="header__info-item">
                            <div className="header__info-icon">
                              <i className="flaticon-pin" />
                            </div>
                            <div className="header__info-text">
                              <span>Localização</span>
                              <Typography
                                onClick={(e) => {
                                  window.location.href =
                                    'https://www.google.com/maps/search/12%2FA,+New+Boston+Hall/@42.5515021,-79.7879305,7z/data=!3m1!4b1';
                                  e.preventDefault();
                                }}
                                className="font-semibold uppercase text-17  text-indigo-900  hover:text-red-800 cursor-pointer"
                              >
                                Caxias, Rio de Janeiro, Brasil
                              </Typography>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-area position d-none d-xl-block p-absolute">
                  <div className="row d-flex justify-content-end align-items-center">
                    <div
                      className="col-xl-2 col-lg-2 cursor-pointer"
                      onClick={() => {
                        dispatch(setPage(0));
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      <div className="logo d-none cursor-pointer">
                        <span className="cursor-pointer">
                          <img
                            src="assets/img/logo/logo.png"
                            alt="Logo"
                            className="cursor-pointer"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="col-xl-10 col-lg-10">
                      <div className="menu-wrapper menu-bg d-flex justify-content-between">
                        <div id="topo" className="main-menu main-menu-1">
                          <nav id="mobile-menu">
                            <ul>
                              {/*   <!--  <li class="menu-item-has-children">
                                          <span href="index.html">Home</span>
                                          <ul class="sub-menu">
                                             <li><span href="index.html">Home Style 01</span></li>
                                             <li><span href="index-2.html">Home Style 02</span></li>
                                             <li><span href="index-3.html">Home Style 03</span></li>
                                          </ul>
                                       </li>        -->               */}
                              <li>
                                <span
                                  className="font-semibold uppercase text-17 text-white hover:text-white/50 cursor-pointer"
                                  onClick={() => {
                                    dispatch(setPage(0));
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                  }}
                                >
                                  Home
                                </span>
                              </li>
                              <li className="menu-item-has-children">
                                <span className="font-semibold uppercase text-17 text-white hover:text-white/50 cursor-pointer">
                                  serviços
                                </span>
                                <ul className="sub-menu">
                                  <li>
                                    <span className="font-semibold uppercase text-17 text-indigo-900 cursor-pointer">
                                      a inserir
                                    </span>
                                  </li>
                                  <li>
                                    <span className="font-semibold uppercase text-17 text-indigo-900 cursor-pointer">
                                      a inserir
                                    </span>
                                  </li>
                                </ul>
                              </li>

                              <li>
                                <span
                                  className="font-semibold uppercase text-17 text-white hover:text-white/50 cursor-pointer"
                                  onClick={() => {
                                    dispatch(setPage(1));
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                  }}
                                >
                                  sobre nós
                                </span>
                              </li>
                              <li>
                                <span
                                  className="font-semibold uppercase text-17 text-white hover:text-white/50 cursor-pointer"
                                  onClick={() => {
                                    dispatch(setPage(2));
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                  }}
                                >
                                  Contato
                                </span>
                              </li>
                            </ul>
                          </nav>
                        </div>
                        <div className="menu-btn">
                          <span className="font-semibold uppercase text-17 text-white cursor-pointer">
                            solicite um orçamento
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="header-sticky" className="sticky-area menu-sticky menu-hidden">
            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-xl-2 col-lg-2 col-3 cursor-pointer"
                  onClick={() => {
                    dispatch(setPage(0));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  <div className="log">
                    <img src="assets/img/logo/logo.png" className="cursor-pointer" alt="Logo" />
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10 col-9">
                  <div className="menu-wrapper menu-none d-flex align-items-center justify-content-between">
                    <div className="main-menu main-menu-1">
                      <nav>
                        <ul>
                          {/*   <!--  <li class="menu-item-has-children">
                                          <span href="index.html">Home</span>
                                          <ul class="sub-menu">
                                             <li><span href="index.html">Home Style 01</span></li>
                                             <li><span href="index-2.html">Home Style 02</span></li>
                                             <li><span href="index-3.html">Home Style 03</span></li>
                                          </ul>
                                       </li>        -->               */}
                          <li>
                            <span
                              className="font-semibold uppercase text-17 text-[#DB1C29] hover:text-indigo-900 cursor-pointer"
                              onClick={() => {
                                dispatch(setPage(0));
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                            >
                              Home
                            </span>
                          </li>

                          <li className="menu-item-has-children">
                            <span className="font-semibold uppercase text-17 text-[#DB1C29] hover:text-indigo-900 cursor-pointer">
                              serviços
                            </span>
                            <ul className="sub-menu">
                              <li>
                                <span className="font-semibold uppercase text-17 text-indigo-900 cursor-pointer">
                                  a inserir
                                </span>
                              </li>
                              <li>
                                <span className="font-semibold uppercase text-17 text-indigo-900 cursor-pointer">
                                  a inserir
                                </span>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <span
                              className="font-semibold uppercase text-17 text-[#DB1C29] hover:text-indigo-900 cursor-pointer"
                              onClick={() => {
                                dispatch(setPage(1));
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                            >
                              sobre nós
                            </span>
                          </li>
                          <li>
                            <span
                              className="font-semibold uppercase text-17 text-[#DB1C29] hover:text-indigo-900 cursor-pointer"
                              onClick={() => {
                                dispatch(setPage(2));
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                            >
                              Contato
                            </span>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="menu-btn">
                      <span className="font-semibold uppercase text-17 text-white cursor-pointer">
                        solicite um orçamento
                      </span>
                    </div>
                  </div>
                  <div
                    className="header__toggle-btn sidebar-toggle-btn text-end d-block d-lg-none"
                    onClick={() => {
                      $('#sidebar__area').addClass('sidebar-opened');
                      $('#body-overlay').addClass('opened');
                    }}
                  >
                    <div className="header__bar">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar__area" id="sidebar__area">
            <div className="sidebar__wrapper">
              <div className="sidebar__close">
                <button
                  type="button"
                  className="sidebar__close-btn"
                  id="sidebar__close-btn"
                  onClick={() => {
                    $('#sidebar__area').removeClass('sidebar-opened');
                    $('#body-overlay').removeClass('opened');
                  }}
                >
                  <i className="fal fa-times" />
                </button>
              </div>
              <div className="sidebar__content">
                <div className="sidebar__logo mb-40">
                  <span href="index.html">
                    <img
                      src="assets/img/logo/logo.png"
                      className="cursor-pointer w-144"
                      alt="logo.png"
                    />
                  </span>
                </div>
                <div className="sidebar__search mb-25">
                  <form action="#">
                    <div className="single-input-field">
                      <input name="name" type="text" placeholder="Procurar" />
                      <i className="fas fa-search" />
                    </div>
                  </form>
                </div>
                <div className="mobile-menu fix mb-10 mean-container" />
                <div className="sidebar__contact mt-30 mb-30">
                  <div className="sidebar__info fix">
                    <div className="sidebar__info-item">
                      <div className="sidebar__info-icon">
                        <i className="flaticon-telephone-call" />
                      </div>
                      <div className="sidebar__info-text">
                        <span>Ligue para nós</span>
                        <h5>
                          <span href="tel:552126514900">+55 (21) 2651-4900</span>
                        </h5>
                      </div>
                    </div>
                    <div className="sidebar__info-item">
                      <div className="sidebar__info-icon">
                        <i className="flaticon-envelope" />
                      </div>
                      <div className="sidebar__info-text">
                        <span>Email</span>
                        <h5>
                          <span href="mailto:CONTATO@REULOGTRANS.COM.BR">
                            contato@reulogtrans.com.br
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="sidebar__info-item">
                      <div className="sidebar__info-icon">
                        <i className="flaticon-pin" />
                      </div>
                      <div className="sidebar__info-text">
                        <span>Duque de Caxias</span>
                        <h5>Rio de Janeiro, Brasil</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar__social">
                  <ul>
                    <li>
                      <span href="#">
                        <i className="fab fa-facebook-f" />
                      </span>
                    </li>
                    <li>
                      <span href="#">
                        <i className="fab fa-twitter" />
                      </span>
                    </li>
                    <li>
                      <span href="#">
                        <i className="fab fa-youtube" />
                      </span>
                    </li>
                    <li>
                      <span href="#">
                        <i className="fab fa-linkedin" />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="body-overlay"
            id="body-overlay"
            onClick={() => {
              $('#sidebar__area').removeClass('sidebar-opened');
              $('#body-overlay').removeClass('opened');
            }}
          />
        </header>

        {paginaSelecionada === 0 && <PrincipalPage />}
        {paginaSelecionada === 1 && <SobreNosPage />}
        {paginaSelecionada === 2 && <ContatoPage />}
        <footer>
          <section
            className={clsx(
              paginaSelecionada !== 2
                ? 'footer-area footer-area1 footer-area1-bg pt-100 pb-90'
                : 'footer-area footer__padd-1 p-relative footer-area1-bg pt-150 pb-50'
            )}
          >
            {paginaSelecionada === 2 && (
              /* <!-- CTA Area Start Here  --> */
              <div className="call__cta position p-absolute">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="call__cta-wrapper call__cta-padd overlay overlay-red clip-box bg-css banner-bg-contato-footer-1">
                        <div className="call__cta-content">
                          <h6 className="call__cta-content-small-title">Ligue para nós</h6>
                          <h3 className="call__cta-content-title">
                            <span href="tel:552126514900">+55 (21) 2651-4900</span>
                          </h3>
                        </div>
                        <div className="call__cta-icon">
                          <i className="flaticon-telephone-call" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="call__cta-wrapper call__cta-padd overlay overlay-red clip-box bg-css banner-bg-contato-footer-2">
                        <div className="call__cta-content">
                          <h6 className="call__cta-content-small-title">Contate-nos por email</h6>
                          <h3 className="call__cta-content-title">
                            <span href="mailto:info@webmail.com">CONTATO@REULOGTRANS.COM.BR</span>
                          </h3>
                        </div>
                        <div className="call__cta-icon">
                          <i className="flaticon-envelope" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              /* <!-- CTA Area End Here  --> */
            )}
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                  <div className="footer-widget footer1-widget1 mb-50 pr-20">
                    <div className="footer-widget-title cursor-pointer">
                      <h4>Sobre Nós</h4>
                    </div>
                    <p className="mb-15">
                      Operamos em todo o estado do Rio de Janeiro desde o ano 2000.
                    </p>
                    <p>
                      Nosso missão é entregar soluções eficazes de transportes atendendo as
                      necessidades de cada um de nossos clientes.
                    </p>
                    {/* <div class="footer-social-link">
                           <ul>
                              <li><span href="#"><i class="fab fa-facebook-f"></i></span></li>
                              <li><span href="#"><i class="fab fa-twitter"></i></span></li>
                              <li><span href="#"><i class="fab fa-behance"></i></span></li>
                              <li><span href="#"><i class="fab fa-youtube"></i></span></li>
                           </ul>
                        </div>  */}
                  </div>
                </div>
                {/* <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                     <div class="footer-widget footer1-widget2 mb-50 pl-10">
                        <div class="footer-widget-title">
                           <h4>other pages</h4>
                        </div>
                        <div class="footer-widget-link">
                           <ul>
                              <li><span href="about-us.html">About Us</span></li>
                              <li><span href="services.html">Services</span></li>
                              <li><span href="team.html">Our Team</span></li>
                              <li><span href="pricing.html">Pricing</span></li>
                              <li><span href="faq.html">FAQ &amp; Ans</span></li>
                           </ul>
                           <ul>
                              <li><span href="#">Careers</span></li>
                              <li><span href="blog.html">News &amp; Insights</span></li>
                              <li><span href="#">Refund Policy</span></li>
                              <li><span href="#">Termos &amp; Condições</span></li>
                           </ul>
                        </div>
                     </div>
                  </div> */}
                <div className="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                  <div className="footer-widget footer1-widget3 mb-50 pr-45">
                    <div className="footer-widget-title">
                      <h4>Newsletters</h4>
                    </div>
                    <p className="mb-20">Inscreva-se para receber novidades!</p>
                    <form action="#" className="subscribe-form subscribe-form-footer1">
                      <div className="s-clip p-relative s-input mb-10">
                        <input type="text" placeholder="Entre com o seu email" />
                        <i className="fas fa-envelope" />
                      </div>
                      <button type="submit">Inscrever-se</button>
                    </form>
                  </div>
                </div>
                {/* <div class="col-lg-4 col-xl-3 col-md-6 col-sm-6">
                     <div class="footer-widget footer1-widget4 mb-50">
                        <div class="footer-widget-title">
                           <h4>photo gallery</h4>
                        </div>
                        <div class="footer-photo-gallery">
                           <div class="footer-photo-item">
                              <span href="portfolio-details.html"><img src="assets/img/gallery/gallery-10.jpg" alt="gallery"></span>
                           </div>
                           <div class="footer-photo-item">
                              <span href="portfolio-details.html"><img src="assets/img/gallery/gallery-11.jpg" alt="gallery"></span>
                           </div>
                           <div class="footer-photo-item">
                              <span href="portfolio-details.html"><img src="assets/img/gallery/gallery-12.jpg" alt="gallery"></span>
                           </div>
                           <div class="footer-photo-item">
                              <span href="portfolio-details.html"><img src="assets/img/gallery/gallery-13.jpg" alt="gallery"></span>
                           </div>
                           <div class="footer-photo-item">
                              <span href="portfolio-details.html"><img src="assets/img/gallery/gallery-14.jpg" alt="gallery"></span>
                           </div>
                           <div class="footer-photo-item">
                              <span href="portfolio-details.html"><img src="assets/img/gallery/gallery-15.jpg" alt="gallery"></span>
                           </div>
                        </div>
                     </div>
                  </div>
             */}
              </div>
            </div>
          </section>
          <div className="footer__bottom-area copy-bg-1 p-relative">
            <div className="footer-menu-area position p-absolute">
              <div className="container">
                <div className="red-bg clip-box-xs">
                  <div className="footer-menu-box">
                    <div className="row align-items-center">
                      <div className="col-xxl-7 col-lg-5">
                        <div className="footer-menu mb-15">
                          <nav>
                            <ul>
                              <li>
                                <span className="cursor-pointer" href="#">
                                  Termos e Condições
                                </span>
                              </li>
                              <li>
                                <span className="cursor-pointer" href="faq.html">
                                  FAQ
                                </span>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                      {/* <!-- <div class="col-xxl-5 col-lg-7">
                              <div class="footer-brand m-img mb-15 text-center text-lg-end">
                                 <img src="assets/img/footer/footer-icon-img.png" alt="footer icon">
                              </div>
                           </div> --> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copy-right-area">
              <div className="container">
                <div className="copy-right-text text-center">
                  <p>Todos os direitos reservados a R&U Transporte e Logística</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*  <!-- footer area end  -->
      <!-- back to top start --> */}
        <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
        {/*    <!-- back to top end -->
      <!-- JS here --> */}
        <Fab
          onClick={(e) => {
            window.location.href = 'https://wa.me/552126514900?text=Olá%20vim%20pelo%20site';
            e.preventDefault();
          }}
          className=" transition ease-in-out delay-150 hover:-translate-y-7 hover:scale-110"
          style={{
            display: 'flex',
            margin: 0,
            padding: 0,
            position: 'fixed',
            right: '0.8em',
            bottom: '0.8em',
            zIndex: 120,
          }}
        >
          <Icon className="text-48">
            <img src={IconWA} alt="Contato" />
          </Icon>
        </Fab>
      </body>
    </div>
  );
}
export default withReducer('navegacaoApp', reducer)(MainContainerPage);
