import React from 'react';

import Marquee from 'react-fast-marquee';
import { InstagramEmbed } from 'react-social-media-embed';
import { Spotify } from 'react-spotify-embed';

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import blackLogo from '../../assets/images/dark-logo.png';

import {
  LATEST_NEWS_LINKS,
  PAST_EVENTS,
  PLAYLISTS,
} from '../../config/AppConfig';

const MarqueeContent = () => {
  return (
    <div className='flex items-center gap-3 py-1 pr-3 bg-base'>
      <h3 className='pb-0 text-xl font-semibold text-dark'>Artiphys 2025</h3>
      <img src={blackLogo} className='h-[0.9rem]' alt='logo' />
      <h3 className='pb-0 text-xl font-semibold text-dark'>mars 2025</h3>
      <img src={blackLogo} className='h-[0.9rem]' alt='logo' />
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='relative w-full h-[66vh] flex justify-center items-center'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='absolute object-cover w-full h-full -z-10'
        >
          <source src='/videos/home.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <h1 className='text-[18vw] hidden'>Artiphys</h1>
      </div>
      <Marquee>
        <div className='border-solid border-dark border-t-4 border-b-4 flex'>
          {Array(5)
            .fill(1)
            .map((_, index) => (
              <MarqueeContent key={index} />
            ))}
        </div>
      </Marquee>
      <div className='hidden sm:flex justify-around max-w-7xl px-5 py-12 w-full'>
        <div className='flex flex-col items-center flex-1'>
          <h1>3</h1>
          <h3 className='uppercase'>Scènes</h3>
        </div>
        <div className='flex flex-col items-center flex-1'>
          <h1>1200</h1>
          <h3 className='uppercase'>FESTIVALIER.X.ES</h3>
        </div>
        <div className='flex flex-col items-center flex-1'>
          <h1>4</h1>
          <h3 className='uppercase'>Bars</h3>
        </div>
      </div>
      <div className='inline-flex sm:hidden flex-col items-center gap-5 py-12'>
        <div className='flex flex-col items-center flex-1'>
          <h1>1200</h1>
          <h3 className='uppercase'>FESTIVALIER.X.ES</h3>
        </div>
        <div className='flex w-full justify-between '>
          <div className='flex flex-col items-center'>
            <h1>3</h1>
            <h3 className='uppercase'>Scènes</h3>
          </div>
          <div className='flex flex-col items-center'>
            <h1>4</h1>
            <h3 className='uppercase'>Bars</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const LatestNewsSection = () => {
  return (
    <div className='light-container' id='news'>
      <div className='section-container flex-centered'>
        <h2 className='pb-h2 text-center'>Notre actu</h2>
        <div className='flex flex-row flex-wrap items-center justify-center gap-6'>
          {LATEST_NEWS_LINKS.map((link, index) => (
            <InstagramEmbed key={index} url={link} width={328} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PastEventsSection = () => {
  return (
    <div id='past-events'>
      <div className='section-container flex-centered'>
        <h2 className='pb-h2 text-center'>Évenements passés</h2>
        <div className='flex flex-row flex-wrap items-center justify-center gap-8'>
          {PAST_EVENTS.map((link, index) => (
            <img key={index} src={link.poster} alt='poster' className='w-56' />
          ))}
        </div>
      </div>
    </div>
  );
};

const OurPlaylistSections = () => {
  return (
    <div className='light-container' id='playlists'>
      <div className='section-container flex-centered '>
        <h2 className='pb-h2 text-center'>Notre playlist 2024</h2>
        <Spotify
          width='100%'
          link='https://open.spotify.com/playlist/2YqOHVRiNXruOVKvNDhjLT'
          className='max-w-[800px]'
        />
        <div className='flex flex-row flex-wrap items-center gap-16 justify-around pt-6'>
          {PLAYLISTS.map((link, index) =>
            index === 0 ? (
              <React.Fragment key={index}></React.Fragment>
            ) : (
              <a
                href={link.url}
                style={{ color: link.color }}
                className='flex flex-col items-center gap-2'
                key={index}
              >
                {React.createElement(link.icon, {
                  size: 80,
                  fill: link.color,
                })}
                <p className='underline'>{link.platform}</p>
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LatestNewsSection />
      <PastEventsSection />
      <OurPlaylistSections />
      <Footer />
    </>
  );
}

export default Home;
