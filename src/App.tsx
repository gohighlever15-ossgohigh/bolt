import { useEffect, useMemo, useState, type FormEvent, type MouseEvent, type ReactNode } from 'react';
import { ArrowDown, ArrowDownRight, ArrowLeft, ArrowRight, Bot, Disc3, Facebook, Instagram, Menu, MessageCircle, Music2, Play, Send, X, Youtube } from 'lucide-react';
import { applicationUrl, artists, releases, type Artist, type Release } from '@/data';

const navItems = [
  ['Home', '/'], ['Artists', '/artists'], ['Releases', '/releases'], ['Listen', '/listen'], ['Merch', '/merch'], ['Apply', '/apply'], ['About', '/about'],
];

function navigate(path: string): void {
  const [, hash] = path.split('#');
  window.history.pushState({}, '', path);
  window.dispatchEvent(new CustomEvent('navigate'));
  if (hash) {
    window.setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 40);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function LinkButton({ href, children, silver = false, external = false }: { href: string; children: ReactNode; silver?: boolean; external?: boolean }) {
  const props = external ? { href, target: '_blank', rel: 'noreferrer' } : { href };
  return <a className={`cta ${silver ? 'silver' : ''}`} {...props} onClick={external ? undefined : (event) => { event.preventDefault(); navigate(href); }}>{children}<ArrowDownRight size={15} strokeWidth={1.5} /></a>;
}

function Navbar({ path }: { path: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const currentSection = navItems.find(([, href]) => href === path)?.[0] ?? 'Home';
  return <header className={`nav ${scrolled ? 'scrolled' : ''} ${open ? 'open' : ''}`}>
    <div className="nav-inner">
      <a className="wordmark" href="/" onClick={(event) => { event.preventDefault(); navigate('/'); setOpen(false); }}><span className="logo-frame"><img className="nav-logo" src="/images/WINTER copy.jpg" alt="Winter Music Group logo" /></span> <span>WINTER MUSIC GROUP</span></a>
      <nav className="nav-links" aria-label="Primary navigation">{navItems.map(([label, href]) => <a className={path === href ? 'active' : ''} href={href} key={href} onClick={(event) => { event.preventDefault(); navigate(href); setOpen(false); }}>{label}</a>)}</nav>
      <LinkButton href="/apply" silver>Apply</LinkButton>
      <span className="mobile-section">{currentSection}</span>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
    </div>
  </header>;
}

function SocialIcon({ label }: { label: string }) {
  if (label === 'Instagram') return <Instagram size={17} strokeWidth={1.6} />;
  if (label === 'YouTube') return <Youtube size={17} strokeWidth={1.6} />;
  if (label === 'Facebook') return <Facebook size={17} strokeWidth={1.6} />;
  if (label === 'Apple Music') return <Music2 size={17} strokeWidth={1.6} />;
  if (label === 'Spotify') return <Disc3 size={17} strokeWidth={1.6} />;
  return <MessageCircle size={17} strokeWidth={1.6} />;
}

function Footer() {
  const socials = [['Instagram', 'https://www.instagram.com/wintermusicgroup'], ['YouTube', '#'], ['Facebook', '#'], ['TikTok', '#'], ['Discord', '#'], ['Apple Music', '#'], ['Spotify', '#']];
  return <footer className="footer"><span className="footer-brand"><span className="footer-logo-frame"><img src="/images/WINTER copy.jpg" alt="" /></span> © Winter Music Group · Est. 2026</span><div className="footer-socials">{socials.map(([label, href]) => <a href={href} key={label} aria-label={label} title={label} target={href === '#' ? undefined : '_blank'} rel="noreferrer"><SocialIcon label={label} /></a>)}</div></footer>;
}

function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return <div className="page-intro reveal"><div className="eyebrow">{eyebrow}</div><h1 className="display">{title}</h1>{children}</div>;
}

function ReleaseCard({ release }: { release: Release }) {
  return <article className="release-card"><div className="cover"><img src={release.cover} alt={`${release.title} cover artwork`} /></div><div className="release-meta"><div><strong>{release.title}</strong><small>{release.artist}</small></div><div className="text-right"><span className="status">{release.status === 'soon' ? 'Coming soon' : 'Out now'}</span><small>{release.date}</small></div></div></article>;
}

function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const heroArtists = artists;
  const featuredArtist = heroArtists[activeIndex];
  const moveHero = (direction: number): void => setActiveIndex((current) => (current + direction + heroArtists.length) % heroArtists.length);
  useEffect(() => {
    const timer = window.setInterval(() => setActiveIndex((current) => (current + 1) % artists.length), 6500);
    return () => window.clearInterval(timer);
  }, []);
  const scrollToReleases = (): void => document.getElementById('latest-releases')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return <>
    <section className="hero">
      {heroArtists.map((artist, index) => <div className={`hero-slide ${index === activeIndex ? 'current' : ''}`} key={artist.id}><img src={artist.image} alt={`${artist.name} portrait`} /><div className="hero-shade" /></div>)}
      <button className="hero-nav hero-prev" aria-label="Previous featured artist" onClick={() => moveHero(-1)}><ArrowLeft size={20} /></button>
      <button className="hero-nav hero-next" aria-label="Next featured artist" onClick={() => moveHero(1)}><ArrowRight size={20} /></button>
      <div className="hero-content reveal"><h1 className="display">{featuredArtist.name}</h1><div className="hero-actions"><LinkButton href={featuredArtist.spotify} external silver>Listen</LinkButton><LinkButton href={`/artists#${featuredArtist.id}`}>View artist</LinkButton></div></div>
      <div className="hero-dots" aria-label="Featured artists">{heroArtists.map((artist, index) => <button className={`hero-dot ${index === activeIndex ? 'active' : ''}`} aria-label={`Show ${artist.name}`} aria-pressed={index === activeIndex} key={artist.id} onClick={() => setActiveIndex(index)} />)}</div>
    </section>
    <button className="kicker-row kicker-button" onClick={scrollToReleases}><span>Winter Music Group · Est. 2026 · Pop first. Every genre welcome.</span><span>Scroll to explore <ArrowDown size={14} /></span></button>
    <section className="section-pad" id="latest-releases"><div className="section-label"><h2>Latest releases</h2><span>01 — 03</span></div><div className="release-strip">{releases.slice(0, 3).map((release) => <ReleaseCard key={release.title} release={release} />)}</div></section>
    <section className="merch-teaser"><img src="https://images.pexels.com/photos/5840463/pexels-photo-5840463.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Two people wearing hoodies" /><img className="merch-print merch-print-teaser" src="/images/WINTER copy.jpg" alt="Winter Music Group logo printed on the hoodie" /><img className="merch-print merch-print-teaser-2" src="/images/WINTER copy.jpg" alt="Winter Music Group logo printed on the hoodie" /><div className="merch-copy"><div className="eyebrow">Winter essentials · 001</div><h2 className="display">Merch. Soon.</h2><p className="muted">The first Winter Music Group collection is on its way.</p><button className="cta" onClick={() => window.alert('We will let you know when the collection arrives.')}>Notify me</button></div></section>
    <section className="section-pad"><div className="apply-band"><div><div className="eyebrow">Open call · 2026</div><h2 className="display">Join the roster.</h2></div><div><p>We are looking for artists with a world of their own. Any genre welcome.</p><LinkButton href="/apply" silver>Apply now</LinkButton></div></div></section>
  </>;
}

function ArtistsPage() {
  const jumpToArtist = (event: MouseEvent<HTMLAnchorElement>, id: string): void => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState({}, '', `/artists#${id}`);
  };
  return <><PageIntro eyebrow={`The roster · ${String(artists.length).padStart(2, '0')} artists`} title="Artists"><p>A home for singular voices. Pop first, every genre welcome.</p></PageIntro><div className="index-bar"><div className="index-inner">{artists.map((artist) => <a href={`#${artist.id}`} onClick={(event) => jumpToArtist(event, artist.id)} key={artist.id}>{artist.name}</a>)}</div></div>{artists.map((artist, index) => <ArtistSection artist={artist} reverse={index % 2 === 1} key={artist.id} />)}</>;
}

function ArtistSection({ artist, reverse }: { artist: Artist; reverse: boolean }) {
  return <section className={`artist-section ${reverse ? 'reverse' : ''}`} id={artist.id}><div className="artist-image"><img src={artist.image} alt={`${artist.name} portrait`} loading="lazy" /></div><div className="artist-copy"><div className="eyebrow">Artist · Winter Music Group</div><h2 className="artist-name">{artist.name}</h2><p>{artist.bio}</p><div className="artist-links"><LinkButton href={artist.spotify} external silver>Listen on Spotify</LinkButton></div><div className="artist-socials">{artist.socials.map((social) => <a href={social.href} key={social.label} aria-label={`${artist.name} ${social.label}`} title={social.label}><SocialIcon label={social.label} /></a>)}</div></div></section>;
}

function ReleasesPage() {
  const out = releases.filter((release) => release.status === 'out');
  const soon = releases.filter((release) => release.status === 'soon');
  return <><PageIntro eyebrow="Music · 2026" title="Releases"><p>Recent work from the roster, and what is next.</p></PageIntro><section className="section-pad"><div className="section-label"><h2>Out now</h2><span>{String(out.length).padStart(2, '0')} releases</span></div><div className="release-grid">{out.map((release) => <ReleaseCard release={release} key={release.title} />)}</div></section><section className="section-pad" style={{ paddingTop: 0 }}><div className="section-label"><h2>Coming soon</h2><span>Pre-save the next chapter</span></div><div className="release-grid">{soon.map((release) => <div key={release.title}><ReleaseCard release={release} /><div style={{ marginTop: 18 }}><LinkButton href="#" silver>Pre-save</LinkButton></div></div>)}</div></section></>;
}

const videoThumbs = ['https://images.pexels.com/photos/12092991/pexels-photo-12092991.jpeg?auto=compress&cs=tinysrgb&w=1000', 'https://images.pexels.com/photos/22857353/pexels-photo-22857353.jpeg?auto=compress&cs=tinysrgb&w=1000', 'https://images.pexels.com/photos/34406254/pexels-photo-34406254.jpeg?auto=compress&cs=tinysrgb&w=1000'];
function ListenPage() {
  const [video, setVideo] = useState<string | null>(null);
  return <><PageIntro eyebrow="The sound · On repeat" title="Listen"><p>Stay close to the music. Streaming, visuals, and everything in between.</p></PageIntro><section className="section-pad"><div className="section-label"><h2>Streaming</h2><span>Roster playlist</span></div><div className="embed-grid"><div className="embed-box"><img className="embed-art" src="https://images.pexels.com/photos/18197120/pexels-photo-18197120.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Music studio equipment" /><div><h3>Winter Music Group</h3><p>Spotify playlist · all artists</p></div><a className="cta" href="#">Open playlist <ArrowRight size={15} /></a></div><div className="embed-box"><img className="embed-art" src="https://images.pexels.com/photos/5764281/pexels-photo-5764281.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Vinyl record on a turntable" /><div><h3>Winter Music Group</h3><p>Apple Music playlist · all artists</p></div><a className="cta" href="#">Open playlist <ArrowRight size={15} /></a></div></div></section><section className="section-pad" style={{ paddingTop: 0 }}><div className="section-label"><h2>Videos</h2><span>Watch the latest</span></div><div className="video-grid">{videoThumbs.map((thumb, index) => <article className="video-card" key={thumb} onClick={() => setVideo(`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1`)}><div className="video-thumb"><img src={thumb} alt={`Winter Music Group video ${index + 1}`} /><span className="play"><Play size={16} fill="currentColor" /></span></div><h3>{['TADYN — Cold Front', 'In the room · Winter Music Group', 'The roster · 2026'][index]}</h3></article>)}</div></section>{video && <div className="modal" role="dialog" aria-modal="true"><div className="modal-inner"><button className="modal-close" onClick={() => setVideo(null)} aria-label="Close video"><X /></button><iframe src={video} title="Winter Music Group video" allow="autoplay; fullscreen" /></div></div>}</>;
}

function MerchPage() {
  return <section className="merch-page"><div className="merch-image"><img src="https://images.pexels.com/photos/5840463/pexels-photo-5840463.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Two people wearing hoodies" /><img className="merch-print merch-print-page" src="/images/WINTER copy.jpg" alt="Winter Music Group logo printed on the hoodie" /><img className="merch-print merch-print-page-2" src="/images/WINTER copy.jpg" alt="Winter Music Group logo printed on the hoodie" /></div><div className="merch-page-copy"><div className="eyebrow">Collection 001 · Coming soon</div><h1 className="display">Coming soon.</h1><p>Quiet pieces for the people who keep the music close.</p><form className="notify" onSubmit={(event) => { event.preventDefault(); window.alert('You are on the list.'); }}><input aria-label="Email address" type="email" placeholder="Email address" required /><button type="submit">Notify me <ArrowRight size={14} /></button></form></div></section>;
}

function ApplyPage() {
  return <><PageIntro eyebrow="Open call · Est. 2026" title="Apply"><p>Winter Music Group is accepting artists in any genre. Pop-leaning roster. Est. 2026.</p></PageIntro><div className="apply-wrap"><div className="apply-intro"><p className="lead">Tell us where you are going. We want to hear the songs, the story, and what comes next.</p><p className="details">The form asks for Artist Name, Legal Name, Age, songs on platforms, Spotify link, Instagram, how long you have been making music, and Email.<br /><br /><a className="contact-email" href="mailto:musicgroupwinter@gmail.com">Questions? musicgroupwinter@gmail.com</a></p></div><div style={{ marginTop: 34 }}><LinkButton href={applicationUrl} external silver>Open application</LinkButton></div><div className="form-frame"><iframe title="Winter Music Group artist application" src={applicationUrl} /></div></div></>;
}

function AboutPage() {
  const socials = [['Instagram', 'https://www.instagram.com/wintermusicgroup'], ['YouTube', '#'], ['TikTok', '#'], ['Spotify', '#']];
  return <><PageIntro eyebrow="The group · 2026" title="About"><p>Independent, artist-first, and built for what is next.</p></PageIntro><section className="section-pad"><div className="about-grid"><div className="about-statement"><img className="about-logo" src="/images/WINTER copy.jpg" alt="Winter Music Group logo" /><p>Winter Music Group is a pop-first label and collective for artists with something to say.</p></div><div className="about-side"><div><div className="eyebrow">Our approach</div><p>Features, boosts, and artist development. A focused home for TADYN, YHB_Kee, THE KID JETT, em34son, -+ApolloX+-, youngscide, gaverick_booms, GVIYEM, ZXM, and WITHER.</p></div><div><div className="eyebrow" style={{ marginBottom: 22 }}>Find us</div><div className="social-list">{socials.map(([label, href]) => <a href={href} key={label} aria-label={label} title={label} target={href === '#' ? undefined : '_blank'} rel="noreferrer"><SocialIcon label={label} /></a>)}<a href="mailto:musicgroupwinter@gmail.com" aria-label="Email Winter Music Group" title="Email Winter Music Group"><MessageCircle size={17} strokeWidth={1.6} /></a></div><a className="contact-email" href="mailto:musicgroupwinter@gmail.com">musicgroupwinter@gmail.com</a></div></div></div></section><section className="section-pad team-section"><div className="section-label"><h2>The team</h2><span>Built behind the music</span></div><div className="team-grid"><article className="team-card"><img src="/images/artists/IMG_2715.JPG" alt="THE KID JETT" /><div><div className="eyebrow">Owner · Founder</div><h3>THE KID JETT</h3></div></article><article className="team-card"><img src="/images/artists/GUCCIBAGBILLY…let’s_not_get_that_twisted🎹.jpg" alt="GUCCIBAGBILLY" /><div><div className="eyebrow">Engineer</div><h3>GUCCIBAGBILLY</h3></div></article></div></section></>;
}

type ChatMessage = { from: 'bot' | 'user'; text: string };

const faqAnswers: Record<string, string> = {
  'What is Winter Music Group?': 'Winter Music Group is an independent, pop-first music company established in 2026. We work with artists across every genre.',
  'Who is on the roster?': 'The current roster is TADYN, YHB_Kee, THE KID JETT, em34son, -+ApolloX+-, youngscide, gaverick_booms, GVIYEM, ZXM, and WITHER.',
  'How can I apply?': 'Open the Apply page to complete the application directly on the site, or use the Open application button to open the form in a new tab.',
  'What genres do you work with?': 'Pop is where we start, but every genre is welcome. We care about a clear voice and a world of your own.',
  'What information do I need?': 'The application asks for your artist name, legal name, age, music links, Spotify, Instagram, experience, and email.',
  'How do I contact the group?': 'Email musicgroupwinter@gmail.com or send a message to @wintermusicgroup on Instagram for features, boosts, artist questions, and general contact.',
  'Who manages Winter Music Group?': 'THE KID JETT is the owner and founder. GUCCIBAGBILLY is the engineer. For management questions, email musicgroupwinter@gmail.com.',
  'When is merch coming?': 'The first Winter Music Group collection is coming soon. Join the list on the Merch page for updates.',
};

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([{ from: 'bot', text: 'Hi. Ask me about the roster, applications, music, or merch.' }]);
  const [input, setInput] = useState('');
  const ask = (question: string): void => setMessages((current) => [...current, { from: 'user', text: question }, { from: 'bot', text: faqAnswers[question] ?? 'I can help with the roster, applying, music, merch, genres, and contacting Winter Music Group.' }]);
  const submit = (event: FormEvent<HTMLFormElement>): void => { event.preventDefault(); const question = input.trim(); if (!question) return; setInput(''); ask(question); };
  const questions = Object.keys(faqAnswers).slice(0, 4);
  return <div className={`chatbot ${open ? 'chatbot-open' : ''}`}><button className="chat-launcher" aria-label={open ? 'Close Winter Music Group chat' : 'Open Winter Music Group chat'} onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Bot size={21} />}<span>{open ? 'Close' : 'Ask us'}</span></button>{open && <div className="chat-panel" role="dialog" aria-label="Winter Music Group questions"><div className="chat-head"><div><strong>W.M.G. assistant</strong><small>Quick answers</small></div><MessageCircle size={18} /></div><div className="chat-messages">{messages.map((message, index) => <p className={`chat-message ${message.from}`} key={`${message.from}-${index}`}>{message.text}</p>)}</div><div className="chat-questions">{questions.map((question) => <button key={question} onClick={() => ask(question)}>{question}</button>)}</div><form className="chat-form" onSubmit={submit}><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask a question" aria-label="Ask a question" /><button aria-label="Send question" type="submit"><Send size={15} /></button></form></div>}</div>;
}

function DotsBackground() {
  useEffect(() => {
    let frame = 0;
    let targetY = 0;
    let currentY = 0;
    let velocityY = 0;
    let previousScroll = window.scrollY;
    const animate = () => {
      const force = (targetY - currentY) * 0.035;
      velocityY = (velocityY + force) * 0.7;
      currentY += velocityY;
      document.documentElement.style.setProperty('--dots-y', `${currentY}px`);
      if (Math.abs(targetY - currentY) > 0.2 || Math.abs(velocityY) > 0.2) {
        frame = window.requestAnimationFrame(animate);
      } else {
        frame = 0;
      }
    };
    const onScroll = () => {
      const scrollDelta = window.scrollY - previousScroll;
      previousScroll = window.scrollY;
      targetY = window.scrollY * -0.22;
      velocityY += scrollDelta * -0.08;
      if (!frame) frame = window.requestAnimationFrame(animate);
    };
    targetY = window.scrollY * -0.22;
    currentY = targetY;
    document.documentElement.style.setProperty('--dots-y', `${currentY}px`);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      document.documentElement.style.removeProperty('--dots-y');
    };
  }, []);
  return <div className="dots-bg" aria-hidden="true" />;
}

function App() {
  const [path, setPath] = useState(window.location.pathname);
  useEffect(() => { const onNavigate = () => setPath(window.location.pathname); window.addEventListener('navigate', onNavigate); window.addEventListener('popstate', onNavigate); return () => { window.removeEventListener('navigate', onNavigate); window.removeEventListener('popstate', onNavigate); }; }, []);
  const isHome = path === '/';
  const page = useMemo(() => { if (path === '/artists') return <ArtistsPage />; if (path === '/releases') return <ReleasesPage />; if (path === '/listen') return <ListenPage />; if (path === '/merch') return <MerchPage />; if (path === '/apply') return <ApplyPage />; if (path === '/about') return <AboutPage />; return <Home />; }, [path]);
  return <div className="page-shell">{!isHome && <DotsBackground />}<Navbar path={path} /><main className={isHome ? '' : 'page-content'}>{page}</main><Footer /><Chatbot /></div>;
}

export default App;
