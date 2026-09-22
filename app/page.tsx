"use client";

import { useEffect, useRef, useState } from "react";

const eventDate = new Date("2026-11-06T19:00:00");
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
    fetch("/Walima.mp3", { method: "HEAD" }).then((r) => setMusicAvailable(r.ok)).catch(() => setMusicAvailable(false));
    fetch("/walima.mp4", { method: "HEAD" }).then((r) => setVideoAvailable(r.ok)).catch(() => setVideoAvailable(false));
  }, []);
  useEffect(() => {
    if (!musicAvailable || !audio.current) return;
    audio.current.play().then(() => setPlaying(true)).catch(() => {
      // Autoplay is blocked by some browsers until the guest interacts with the page.
      setPlaying(false);
    });
  }, [musicAvailable]);
  useEffect(() => {
    if (!musicAvailable) return;
    const toggleMusicOnBackgroundTap = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest("button, a, iframe")) return;
      const audioElement = audio.current;
      if (!audioElement) return;
      if (audioElement.paused) {
        audioElement.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
      } else {
        audioElement.pause();
        setPlaying(false);
      }
    };
    window.addEventListener("pointerdown", toggleMusicOnBackgroundTap);
    return () => window.removeEventListener("pointerdown", toggleMusicOnBackgroundTap);
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
      {videoAvailable && (<video className="hero-video" autoPlay loop muted playsInline poster="/walima-botanical-backdrop.png"><source src="/walima.mp4" type="video/mp4" /></video>)}
      <div className="hero-overlay" /><div className="hero-content">
        <p className="hero-event">Walima</p><p className="hero-host">MR. &amp; MRS. AZHAR BASHIR</p><p className="hero-copy">CORDIALLY INVITE YOU<br />TO CELEBRATE THE WALIMA RECEPTION<br />OF THEIR BELOVED SON</p>
        <h1>Muhammad Zeeshan Azhar Malik</h1><p className="program">Programme In-sha-Allah</p><div className="hero-date"><span /><b>Friday</b><span /></div><p>6th &nbsp;|&nbsp; NOVEMBER &nbsp;|&nbsp; 2026</p><p>WALIMA RECEPTION</p>
      </div><a className="scroll-cue" href="#countdown">&darr;<small>Scroll to discover</small></a>
      <audio ref={audio} autoPlay loop preload="auto" src="/Walima.mp3" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setPlaying(false)} />
      <button className="music-button" type="button" onClick={toggleMusic} aria-label={playing ? "Pause music" : "Play music"}>{playing ? "Ⅱ" : "▶"}<span>{playing ? "Music on" : "Play music"}</span></button>
    </section>
    <section id="rsvp" className="rsvp-section section"><div className="rsvp-list"><p className="kicker">RSVP</p><div className="rsvp-rule"><span></span>*<span></span></div><p className="rsvp-message">Please confirm your presence with</p><div className="rsvp-contacts"><span>Shahid Malik (UK)</span><span>Ali Imran Bajwa</span><span>Muhammad Rayyan Malik</span><span>Engr Farman Azhar</span><span>Imran Malik</span></div></div></section>
    <section id="countdown" className="countdown section"><p className="kicker">Save the date</p><p className="section-date">6th November, 2026</p><h2>Counting Down</h2><div className="timer">{time.map((part) => <div key={part.label}><strong>{String(part.value).padStart(2, "0")}</strong><span>{part.label}</span></div>)}</div></section>
    <section id="details" className="details section"><p className="kicker">Walima Reception</p><h2>Event Details</h2><div className="details-grid"><article><h3>West Canal Road</h3><p className="detail">Time: 7:00 PM onwards</p><p className="detail">Venue: Farooqabad, Mansoorabad</p><p className="note">Kindly ensure your timely arrival to help us celebrate a beautiful evening together.</p><a className="directions" href="https://maps.app.goo.gl/7Am4wkHEruW9SegB8" target="_blank" rel="noreferrer">Get directions -&gt;</a></article><div className="map"><iframe src="https://maps.google.com/maps?q=West+Canal+Road,+Farooqabad,+Mansoorabad&t=&z=13&ie=UTF8&iwloc=&output=embed" loading="lazy" title="Event venue map" /></div></div><p className="thanks">We can&apos;t wait to celebrate with you!</p></section>
    <footer className="powered-by"><img src="/ab-power-logo.png" alt="AB Power Engineering Services" /><span>Powered by <strong>AB Power Engineering Services</strong></span></footer>
  </main>;
}