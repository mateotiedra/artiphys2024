import React from 'react';

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import { PARTNERS_LINKS } from '../../config/AppConfig';

function Partners() {
  return (
    <>
      <Navbar />
      <div className='section-container'>
        <h2 className='text-h3 sm:text-h2 pb-h2 text-center'>
          Nos Partenaires
        </h2>
        <p className='text-center pb-8'>
          Un immense merci à nos partenaires pour leur précieux soutien. Votre
          contribution est essentielle à l'association Artiphys, permettant de
          créer des événements inoubliables et de promouvoir la culture au sein
          de l'EPFL.
        </p>
        <div className='inline-flex flex-wrap items-stretch gap-5 md:gap-9 justify-center'>
          {PARTNERS_LINKS.map((partner) => (
            <a
              href={partner.url}
              className='px-4 flex items-center rounded-lg h-16 bg-base'
              style={{ backgroundColor: partner.color || '' }}
              key={partner.url}
            >
              <img src={partner.src} alt='partner' width={100} />
            </a>
          ))}
        </div>
      </div>
      <Footer light />
    </>
  );
}

export default Partners;
