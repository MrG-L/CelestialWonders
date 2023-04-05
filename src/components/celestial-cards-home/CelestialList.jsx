import React from 'react';
import Celestial from './Celestial';
import './CelestialLisst.css';

function CelestialList() {
  const trappistOne = {
    celestialId: 1,
    name: 'Trappist-1',
    imgSrc:
      'https://static.nationalgeographic.fr/files/styles/image_3200/public/02-trappist-planets.adapt_.1900.1.jpg?w=1600&h=900',
    description:
      'TRAPPIST-1 is an ultra-cool red dwarf star in the constellation Aquarius with a planetary system of seven known planets. Its mass is about 9% of the Sun, with a radius slightly larger than the planet Jupiter and a surface temperature of about 2,566 K.',
  };
  const roguePlanets = {
    celestialId: 2,
    name: 'Rogue Planets',
    imgSrc:
      'https://images.ctfassets.net/cnu0m8re1exe/2ouYn9qcrQN0o9ooB8CuRM/4b8d6c07d53d34742cf930445656fa61/out1.jpg',
    description:
      'Rogue planets are some of the saddest and most interesting celestial bodies humans have discovered to date. These unique planets orbit no star. They have no solar system or “home” in the universe.',
  };
  const hypernovas = {
    celestialId: 3,
    name: 'Hypernovas',
    imgSrc:
      'https://trustmyscience.com/wp-content/uploads/2019/01/hypernova-sursaut-gamma.jpeg',
    description:
      'Supernovae might be rare but hypernovae are far more so. Originating from stars at least 30 times more massive than the Sun, hypernovae are among the most unique celestial bodies in the entire universe, though they are more a type of celestial event. When these mammoth stars collapse, they create an explosion 10 times greater than a normal supernova.',
  };
  const doubleQuasar = {
    celestialId: 4,
    name: 'The Double Quasar',
    imgSrc:
      'The Twin Quasar, was discovered in 1979 and was the first identified gravitationally lensed object. It is a quasar that appears as two images, a result from gravitational lensing caused by the galaxy YGKOW G1 that is located directly between Earth and the quasar.',
    description:
      'TRAPPIST-1 is an ultra-cool red dwarf star in the constellation Aquarius with a planetary system of seven known planets. Its mass is about 9% of the Sun, with a radius slightly larger than the planet Jupiter and a surface temperature of about 2,566 K.',
  };
  const exoplanetKoi5Ab = {
    celestialId: 5,
    name: 'Exoplanet KOI-5Ab',
    imgSrc:
      'http://www.nasa.gov/sites/default/files/thumbnails/image/koi_5_art.jpg',
    description:
      'The system hosts one known planet, called KOI-5Ab, which was discovered and characterized using data from NASAs Kepler and Transiting Exoplanet Survey Satellite missions, as well as ground-based telescopes. KOI-5Ab is about half the mass of Saturn and orbits Star A roughly every five days.',
  };
  const omegaCentauri = {
    celestialId: 6,
    name: 'Omega Centauri',
    imgSrc:
      'https://earthsky.org/upl/2017/05/omega-centauri-Greg-Hogan-Perry-GA-6-10-2016.jpg',
    description:
      'Omega Centauri is a globular cluster in the constellation of Centaurus that was first identified as a non-stellar object by Edmond Halley in 1677. Located at a distance of 17,090 light-years, it is the largest-known globular cluster in the Milky Way at a diameter of roughly 150 light-years.',
  };
  const necklaceNebula = {
    celestialId: 7,
    name: 'The Necklace Nebula',
    imgSrc:
      'http://www.nasa.gov/sites/default/files/thumbnails/image/potw2117a_1.jpg',
    description:
      'The Necklace Nebula is a 19-trillion-kilometre-wide planetary nebula located about 15,000 light-years away in the northern constellation Sagitta. It was discovered in 2005 from the Isaac Newton Telescope Photometric H-alpha Survey, a ground-based H-alpha planetary nebula study of the North Galactic Plane.',
  };
  const tabbyStar = {
    celestialId: 8,
    name: 'Tabbys Star',
    imgSrc:
      'http://www.nasa.gov/sites/default/files/thumbnails/image/pia22081-opt.jpg',
    description:
      'Tabbys Star is an F-type main-sequence star in the constellation Cygnus approximately 1,470 light-years from Earth. Unusual light fluctuations of the star, including up to a 22% dimming in brightness, were discovered by citizen scientists as part of the Planet Hunters project.',
  };
  const igrBlackHole = {
    celestialId: 9,
    name: 'The “IGR J17091-3624” Black Hole',
    imgSrc:
      'https://www.universetoday.com/wp-content/uploads/2012/02/cygx1_ill.jpg',
    description:
      'IGR J17091 is a stellar mass black hole with a mass between 3 and 10 M☉. It is a binary system in which a star orbits the black hole.[4] Its small size may make it a candidate for the smallest black hole discovered.[5] However, as of 2017 its mass was described as unknown.',
  };
  const df2Galaxy = {
    celestialId: 10,
    name: 'The DF2 Galaxy',
    imgSrc: 'https://stsci-opo.org/STScI-01F7YC0HWKKC07ZRHN0SF06VEQ.png',
    description:
      'NGC 1052-DF2 is an ultra diffuse galaxy in the constellation Cetus, which was identified in a wide-field imaging survey of the NGC 1052 group by the Dragonfly Telephoto Array. It has been proposed that the galaxy contains little or no dark matter, the first such discovery.',
  };

  return <div></div>;
}

export default CelestialList;
