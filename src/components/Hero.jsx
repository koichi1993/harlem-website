import heroWebm from "../assets/hero.webm";
import heroMp4 from "../assets/hero.mp4";
import heroPoster from "../assets/hero-poster.png";
import logo from "../assets/harlem-logo.png";

export default function Hero() {
  return (
    <section className="hero" aria-label="Nightclub landing section">

      {/* Logo overlay */}
      <a href="/" className="hero__logo" aria-label="Home">
        <img src={logo} alt="Club Nova logo" />
      </a>
      {/* Background video */}
      <video
        className="hero__video"
        poster={heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={heroWebm} type="video/webm" />
        <source src={heroMp4} type="video/mp4" />
      </video>

      {/* Dark overlay for contrast */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Content on top */}
      <div className="hero__content">
        <h1></h1>
        <p></p>
        
      </div>
    </section>
  );
}
