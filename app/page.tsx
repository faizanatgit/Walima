"use client";

import { useEffect, useRef, useState } from "react";

const eventDate = new Date("2026-11-08T19:00:00");
const dateParts = () => { const diff = Math.max(0, eventDate.getTime() - Date.now()); return [{ label: "Days", value: Math.floor(diff / 86400000) }, { label: "Hours", value: Math.floor(diff / 3600000) % 24 }, { label: "Minutes", value: Math.floor(diff / 60000) % 60 }, { label: "Seconds", value: Math.floor(diff / 1000) % 60 }]; };

export default function Home() {
  const [time, setTime] = useState(dateParts());
  const [menu, setMenu] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [musicAvailable, setMusicAvailable] = useState(false);
  const [videoAvailable, setVideoAvailable] = useState(false);
  const audio = useRef<HTMLAudioElement>(null);
  useEffect(() => { const timer = window.setInterval(() => setTime(dateParts()), 1000); return () => window.clearInterval(timer); }, []);
  useEffect(() => {
    fetch("/Asma-ul-Husna.mp3", { method: "HEAD" }).then((r) => setMusicAvailable(r.ok)).catch(() => setMusicAvailable(false));
    fetch("/walima.mp4", { method: "HEAD" }).then((r) => setVideoAvailable(r.ok)).catch(() => setVideoAvailable(false));
  }, []);
  useEffect(() => {
    if (!musicAvailable || !audio.current) return;
    audio.current.play().then(() => setPlaying(true)).catch(() => {
      // Autoplay is blocked by some browsers until the guest interacts with the page.
      setPlaying(false);
    });
  }, [musicAvailable]);
  const closeMenu = () => setMenu(false);
  const toggleMusic = () => {
    const audioElement = audio.current;
    if (!audioElement) return;
    if (!audioElement.paused) {
      audioElement.pause();
      setPlaying(false);
      return;
    }
    audioElement.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  };
  return <main>
    <section id="home" className="hero">
      {videoAvailable && (<video className="hero-video" autoPlay loop muted playsInline poster="/walima-botanical-backdrop.webp"><source src="/walima.mp4" type="video/mp4" /></video>)}
      <div className="hero-overlay" /><div className="hero-content">
        <img className="bismillah-image" src="/bismillah-calligraphy.webp" alt="Bismillah ir-Rahman ir-Rahim" /><p className="bismillah-blessing">IN THE NAME OF ALLAH, THE MOST GRACIOUS, THE MOST MERCIFUL</p><p className="hero-event">Walima</p><h2 className="hero-late">MR. &amp; MRS. HAJI BASHIR AHMED (LATE)</h2><p className="hero-host">MR. &amp; MRS. MUHAMMAD AZHER BASHIR MALIK</p><p className="hero-copy">CORDIALLY INVITE YOU<br />TO CELEBRATE THE WALIMA RECEPTION<br />OF THEIR BELOVED SON</p>
        <h1>Muhammad Zeeshan Azher Malik</h1><p className="program">Programme In-sha-Allah</p><div className="hero-event-details"><p><strong>TIME:</strong> 7:00 PM</p><p><strong>VENUE:</strong> Zoom Executive Marquee, West Canal Road</p></div><div className="hero-date"><span /><b>Sunday</b><span /></div><p>8th &nbsp;|&nbsp; NOVEMBER &nbsp;|&nbsp; 2026</p><p className="hero-family">ALL BROTHERS, SISTERS AND COUSINS</p>
      </div><a className="scroll-cue" href="#countdown">&darr;<small>Scroll to discover</small></a>
      <audio ref={audio} autoPlay loop preload="auto" src="/Asma-ul-Husna.mp3" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setPlaying(false)} />
      <button className="music-button" type="button" onClick={toggleMusic} aria-label={playing ? "Pause" : "Play"}>{playing ? <>&#8545;</> : <>&#9654;</>}<span>{playing ? "Pause" : "Play"}</span></button>
    </section>
    <section id="rsvp" className="rsvp-section section"><div className="rsvp-list"><p className="kicker">RSVP</p><div className="rsvp-rule"><span></span>&#10022;<span></span></div><p className="rsvp-message">Please confirm your presence with</p><div className="rsvp-contacts"><div><strong>Muhammad Azher Bashir Malik</strong><a href="tel:03007960619">03007960619</a></div><div><strong>Shahid Malik (UK)</strong></div><div><strong>Ali Imran Bajwa</strong><a href="tel:03006613599">03006613599</a></div><div><strong>Engr Farman Azher Malik</strong><a href="tel:03026077119">03026077119</a></div><div><strong>Imran Azher Malik</strong><a href="tel:03073300119">03073300119</a></div><div><strong>Muhammad Rayyan Malik</strong></div></div></div></section>
    <section id="countdown" className="countdown section"><p className="kicker">Save the date</p><p className="section-date">8th November, 2026</p><h2>Counting Down</h2><div className="timer">{time.map((part) => <div key={part.label}><strong>{String(part.value).padStart(2, "0")}</strong><span>{part.label}</span></div>)}</div></section>
    <section id="details" className="details section"><p className="kicker">Walima Reception</p><h2>Event Details</h2><div className="details-grid"><article><h3>Zoom Executive Marquee</h3><p className="detail">Time: 7:00 PM onwards</p><p className="detail">Venue: Zoom Executive Marquee, West Canal Road</p><p className="note">Kindly ensure your timely arrival to help us celebrate a beautiful evening together.</p><a className="directions" href="https://maps.app.goo.gl/4uQXR4v7Wx1V4hgj6" target="_blank" rel="noreferrer">Open in Google Maps &rarr;</a></article><div className="map"><iframe src="https://www.google.com/maps?q=Zoom+Executive+Marquee%2C+Faisalabad&z=17&output=embed" loading="lazy" title="Event venue map" /></div></div><p className="thanks">We can&apos;t wait to celebrate with you!</p></section>
    <footer className="powered-by"><img src="/ab-power-logo.png" alt="AB Power Engineering Services" /><span>Powered by <strong>AB Power Engineering Services</strong></span></footer>
  </main>;
}