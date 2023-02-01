import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../assets/css/nice-select.css';
import $ from 'jquery';

// eslint-disable-next-line no-multi-assign
window.jQuery = window.$ = $;
require('jquery-nice-select');

function ContatoPage(props) {
  const selectRef = useRef();

  useEffect(() => {
    $(selectRef.current).niceSelect();
  }, []);
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
                  Contato
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
                        <span href="index.html">
                          <span>Home</span>
                        </span>
                      </li>
                      <li className="trail-item trail-end">
                        <span>Contato</span>
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
      {/* <!-- contact area  --> */}
      <section
        className="contact-area contact--area pt-120 pb-110 wow fadeInUp"
        data-wow-duration="1.5s"
        data-wow-delay=".3s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-5 col-xl-6 col-lg-5">
              <div className="contact--wrapper mb-60">
                <div className="section__title mb-45">
                  <span className="sub-title">Nos contate</span>
                  <h2 className="title">Fale com um dos nossos consultores</h2>
                </div>
                <div className="contact-info mr-20">
                  <div className="single-contact-info d-flex align-items-center">
                    <div className="contact-info-icon">
                      <span href="#">
                        <i className="flaticon-telephone-call" />
                      </span>
                    </div>
                    <div className="contact-info-text">
                      <span>Ligue para nós</span>
                      <h5>
                        <span href="tel:552126514900">+55 (21) 2651-4900</span>
                      </h5>
                    </div>
                  </div>
                  <div className="single-contact-info d-flex align-items-center">
                    <div className="contact-info-icon">
                      <span href="#">
                        <i className="flaticon-envelope" />
                      </span>
                    </div>
                    <div className="contact-info-text">
                      <span>Envie um email</span>
                      <h5>
                        <span href="mailto:CONTATO@REULOGTRANS.COM.BR">
                          CONTATO@REULOGTRANS.COM.BR
                        </span>
                      </h5>
                    </div>
                  </div>
                  <div className="single-contact-info d-flex align-items-center">
                    <div className="contact-info-icon">
                      <span href="#">
                        <i className="flaticon-pin" />
                      </span>
                    </div>
                    <div className="contact-info-text">
                      <span>visite nosso escritório</span>
                      <h5>
                        <span href="https://www.google.com/maps/search/12%2FA,+New+Boston+Hall/@42.5515021,-79.7879305,7z/data=!3m1!4b1">
                          Duque de caxias, Rio de Janeiro,Brasil
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-7">
              <div className="contact-form mb-60">
                <form action="mail.php" id="contact-form" method="POST">
                  <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="single-input-field">
                        <input name="name" type="text" placeholder="Nome" />
                        <i className="fas fa-user" />
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="single-input-field">
                        <input name="email" type="email" placeholder="Email" />
                        <i className="fas fa-envelope" />
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="single-input-field">
                        <input name="phone" type="text" placeholder="Telefone" />
                        <i className="fas fa-phone-alt" />
                      </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                      <div className="single-input-field select">
                        <select ref={selectRef} name="subject">
                          <option selected>Qual motivo do contato</option>
                          <option value="subject one">Orçamento</option>
                          <option value="subject two">Tirar Dúvida</option>
                          <option value="subject three">Outros</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-xxl-12 col-xl-12 col-lg-12">
                      <div className="single-input-field textarea">
                        <textarea
                          rows="10"
                          cols="10"
                          placeholder="Escreva sua mensagem"
                          name="massage"
                        />
                        <i className="fas fa-edit" />
                      </div>
                    </div>
                    <div className="col-xxl-12 col-xl-12">
                      <button type="button" className="fill-btn clip-btn">
                        Envie a Mensagem
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- contact area end --> */}
    </main>
  );
}

export default ContatoPage;
