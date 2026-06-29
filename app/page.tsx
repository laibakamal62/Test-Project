'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import {
  Building2, MapPin, Mail, Phone,
  ExternalLink, Github, Send, Code2,
  Database, Layout, FileJson, Lock, Wrench,
  CheckCircle2, Calendar
} from 'lucide-react';

// ─────────────── shared styles ───────────────
const S = {
  sectionLabel: {
    display: 'inline-block',
    fontSize: '0.72rem',
    fontWeight: 700,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.1em',
    color: '#4f46e5',
    marginBottom: '0.5rem',
  },
  sectionTitle: {
    fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
    fontWeight: 800,
    color: '#0f172a',
    lineHeight: 1.15,
    letterSpacing: '-0.02em',
  },
  sectionSub: {
    color: '#64748b',
    fontSize: '1rem',
    lineHeight: 1.7,
    marginTop: '0.75rem',
    maxWidth: '44ch',
  },
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '1rem',
    padding: '1.75rem',
  },
  indigo: { color: '#4f46e5' },
  slate: { color: '#0f172a' },
  muted: { color: '#64748b' },
};

export default function Home() {
  const [activeSkill, setActiveSkill] = useState<'all'|'frontend'|'backend'|'database'|'tools'>('all');
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const skills = [
    { name: 'Next.js',            cat: 'frontend',  Icon: Code2   },
    { name: 'React.js',           cat: 'frontend',  Icon: Code2   },
    { name: 'JavaScript ES6+',    cat: 'frontend',  Icon: Code2   },
    { name: 'Tailwind CSS',       cat: 'frontend',  Icon: Layout  },
    { name: 'HTML5 & CSS3',       cat: 'frontend',  Icon: Layout  },
    { name: 'Bootstrap 5',        cat: 'frontend',  Icon: Layout  },
    { name: 'Node.js',            cat: 'backend',   Icon: FileJson},
    { name: 'REST APIs',          cat: 'backend',   Icon: FileJson},
    { name: 'JWT Auth',           cat: 'backend',   Icon: Lock    },
    { name: 'Google OAuth',       cat: 'backend',   Icon: Lock    },
    { name: 'MongoDB',            cat: 'database',  Icon: Database},
    { name: 'PostgreSQL',         cat: 'database',  Icon: Database},
    { name: 'Prisma ORM',         cat: 'database',  Icon: Database},
    { name: 'MySQL',              cat: 'database',  Icon: Database},
    { name: 'Git & GitHub',       cat: 'tools',     Icon: Wrench  },
    { name: 'Postman',            cat: 'tools',     Icon: Wrench  },
    { name: 'Figma',              cat: 'tools',     Icon: Wrench  },
    { name: 'VS Code',            cat: 'tools',     Icon: Wrench  },
  ];

  const experience = [
    {
      role: 'Frontend Web Developer',
      company: 'HexaMileSoft',
      period: 'Apr 2026 – Present',
      points: [
        'Developed and maintained responsive web applications focusing on performance and accessibility.',
        'Collaborated with designers to deliver high-quality user interfaces.',
        'Implemented new features and resolved bugs based on project requirements.',
      ],
    },
    {
      role: 'Full Stack Web Developer',
      company: 'Web Concept (TWC)',
      period: 'Apr 2025 – Apr 2026',
      points: [
        'Managed and delivered multiple web projects end-to-end, handling both frontend and backend.',
        'Worked closely with stakeholders to plan, develop and deploy scalable web applications.',
        'Implemented API routes, database integrations and modern UI components.',
        'Oversaw project workflows, version control and deployments.',
      ],
    },
    {
      role: 'Junior Web Developer (Internship)',
      company: 'Pebi Technologies',
      period: 'Dec 2024 – Feb 2025',
      points: [
        'Worked on real-world assignments under senior mentorship.',
        'Assisted in RESTful API consumption and state management.',
        'Collaborated on code reviews and bug fixes using GitHub.',
      ],
    },
    {
      role: 'Junior Web Developer (Internship)',
      company: 'Gamica Cloud',
      period: 'Aug 2024 – Dec 2024',
      points: [
        'Contributed to multiple client projects as a junior React developer.',
        'Built modular frontend components and backend API endpoints.',
        'Participated in Vercel deployments and debugging live issues.',
      ],
    },
  ];

  const projects = [
    {
      title: 'Hiltuy',
      sub: 'Shopify App & E-commerce Website',
      desc: 'Built a complete Shopify application and website with a user-friendly frontend. Integrated third-party APIs to extend store functionality, workflows and response times.',
      stack: ['Next.js', 'React', 'Shopify APIs', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    },
    {
      title: 'CV Builder Platform',
      sub: 'Full-featured Dynamic Platform',
      desc: 'Independently designed and developed a full-featured CV Builder with multiple professional templates, dynamic forms, template rendering and PDF generation.',
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    },
    {
      title: 'Finix',
      sub: 'Lottery Web Application',
      desc: 'Lottery-based web app with secure, dynamic data handling. Integrated third-party verification APIs for real-time transactional data and security logic.',
      stack: ['Next.js', 'Node.js', 'MongoDB', 'REST APIs', 'Tailwind CSS'],
    },
    {
      title: 'Deltho',
      sub: 'Web & Mobile Application',
      desc: 'Built web and mobile applications with a unified scalable architecture. Integrated APIs to handle payments, tracking and messaging for cross-platform performance.',
      stack: ['React Native', 'React', 'Node.js', 'Express', 'MongoDB'],
    },
  ];

  const filteredSkills = activeSkill === 'all' ? skills : skills.filter(s => s.cat === activeSkill);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); setSent(true); setForm({ name:'', email:'', subject:'', message:'' }); }, 1500);
  };

  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <Hero />

      {/* ── ABOUT ── */}
      <section id="about" style={{ backgroundColor: '#f8faff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container mx-auto px-4 md:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left copy */}
            <div>
              <span style={S.sectionLabel}>About Me</span>
              <h2 style={S.sectionTitle}>
                Engineering clean,<br />scalable web products.
              </h2>
              <div style={{ ...S.muted, marginTop: '1.25rem', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                <p>
                  Software Engineering graduate from{' '}
                  <strong style={S.slate}>Government College University Faisalabad (GCUF)</strong>,
                  specialising in MERN Stack and full-stack applications.
                </p>
                <p>
                  Over 2+ years I have worked across fast-growing software houses, bridging the gap between pixel-perfect frontends
                  and secure, performant backends.
                </p>
                <p>
                  I enjoy building developer tools, Shopify apps, dashboards and collaborative platforms — applying
                  Agile methods, clean code principles and a mobile-first approach.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                {[
                  { value: '2+', label: 'Years Experience' },
                  { value: '4+', label: 'Projects Shipped' },
                ].map((s) => (
                  <div key={s.label} style={{ ...S.card, borderLeft: '3px solid #4f46e5' }}>
                    <span style={{ display: 'block', fontSize: '2rem', fontWeight: 900, ...S.indigo }}>{s.value}</span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.05em', color: '#94a3b8' }}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right skills panel */}
            <div style={{ ...S.card, padding: '1.5rem' }}>
              {/* Tab filters */}
              <div className="flex flex-wrap gap-2 mb-5" style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '1rem' }}>
                {(['all','frontend','backend','database','tools'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveSkill(cat)}
                    style={{
                      padding: '0.375rem 0.875rem',
                      borderRadius: '0.625rem',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      textTransform: 'capitalize' as const,
                      cursor: 'pointer',
                      border: '1px solid',
                      transition: 'all 0.15s',
                      ...(activeSkill === cat
                        ? { backgroundColor: '#4f46e5', color: '#fff', borderColor: '#4f46e5' }
                        : { backgroundColor: '#f8faff', color: '#475569', borderColor: '#e2e8f0' }),
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Skill tags */}
              <div className="grid grid-cols-2 gap-3">
                {filteredSkills.map(({ name, Icon }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2.5"
                    style={{
                      padding: '0.625rem 0.875rem',
                      borderRadius: '0.625rem',
                      border: '1px solid #e2e8f0',
                      backgroundColor: '#f8faff',
                    }}
                  >
                    <span style={{ ...S.indigo, opacity: 0.8 }}>
                      <Icon className="w-4 h-4" />
                    </span>
                    <span style={{ fontSize: '0.83rem', fontWeight: 600, color: '#334155' }}>{name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container mx-auto px-4 md:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <span style={S.sectionLabel}>Career Path</span>
            <h2 style={S.sectionTitle}>My Professional Journey</h2>
            <p style={{ ...S.sectionSub, margin: '0.75rem auto 0' }}>Real-world experience shipping production-level software across growing software houses.</p>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* vertical line */}
            <div style={{ position: 'absolute', left: '1.25rem', top: 0, bottom: 0, width: '2px', backgroundColor: '#e0e7ff' }} />

            <div className="flex flex-col gap-8">
              {experience.map((exp, i) => (
                <div key={i} className="flex gap-6" style={{ paddingLeft: '1rem' }}>
                  {/* dot */}
                  <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
                    <div style={{
                      width: '2.25rem', height: '2.25rem', borderRadius: '50%',
                      border: '2px solid #4f46e5', backgroundColor: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <div style={{ width: '0.625rem', height: '0.625rem', borderRadius: '50%', backgroundColor: '#4f46e5' }} />
                    </div>
                  </div>

                  {/* card */}
                  <div style={{ ...S.card, flex: 1 }}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 style={{ fontWeight: 700, fontSize: '1.05rem', ...S.slate }}>{exp.role}</h3>
                        <div className="flex items-center gap-1.5 mt-0.5" style={S.muted}>
                          <Building2 className="w-3.5 h-3.5" style={S.indigo} />
                          <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{exp.company}</span>
                        </div>
                      </div>
                      <span
                        style={{
                          fontSize: '0.72rem', fontWeight: 700, padding: '0.25rem 0.75rem',
                          borderRadius: '999px', backgroundColor: '#eef2ff',
                          color: '#4338ca', whiteSpace: 'nowrap' as const,
                          display: 'flex', alignItems: 'center', gap: '0.25rem', width: 'fit-content',
                        }}
                      >
                        <Calendar className="w-3 h-3" /> {exp.period}
                      </span>
                    </div>
                    <ul className="flex flex-col gap-1.5">
                      {exp.points.map((pt, j) => (
                        <li key={j} className="flex gap-2 items-start">
                          <span style={{ ...S.indigo, marginTop: '0.15rem', flexShrink: 0 }}>•</span>
                          <span style={{ ...S.muted, fontSize: '0.875rem', lineHeight: 1.7 }}>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ backgroundColor: '#f8faff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container mx-auto px-4 md:px-8 py-20 lg:py-28">
          <div className="text-center mb-14">
            <span style={S.sectionLabel}>Portfolio</span>
            <h2 style={S.sectionTitle}>Featured Projects</h2>
            <p style={{ ...S.sectionSub, margin: '0.75rem auto 0' }}>A selection of web applications built using MERN, Next.js, and custom integrations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {projects.map((p, i) => (
              <div
                key={i}
                style={{ ...S.card, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'box-shadow 0.2s, transform 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(79,70,229,0.10)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 800, ...S.slate }}>{p.title}</h3>
                      <p style={{ ...S.indigo, fontSize: '0.8rem', fontWeight: 600, marginTop: '0.15rem' }}>{p.sub}</p>
                    </div>
                    <div className="flex gap-2">
                      <a href="#" aria-label="GitHub" style={{ width: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0', borderRadius: '0.5rem', color: '#64748b' }}>
                        <Github className="w-4 h-4" />
                      </a>
                      <a href="#" aria-label="Live" style={{ width: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e2e8f0', borderRadius: '0.5rem', color: '#64748b' }}>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <p style={{ ...S.muted, fontSize: '0.875rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>{p.desc}</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.6rem',
                        borderRadius: '0.375rem', backgroundColor: '#eef2ff',
                        color: '#4338ca', border: '1px solid #c7d2fe',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container mx-auto px-4 md:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">

            {/* Info */}
            <div className="lg:col-span-2">
              <span style={S.sectionLabel}>Contact</span>
              <h2 style={S.sectionTitle}>Let's build something great.</h2>
              <p style={{ ...S.muted, marginTop: '1rem', lineHeight: 1.8 }}>
                Open to full-time roles, freelance contracts, and technical collaborations. Reach out and let's coordinate.
              </p>

              <div className="flex flex-col gap-4 mt-8">
                {[
                  { Icon: Mail,  label: 'Email', value: 'laibakamal33@gmail.com', href: 'mailto:laibakamal33@gmail.com' },
                  { Icon: Phone, label: 'Phone', value: '+92 302 6367045', href: 'tel:+923026367045' },
                  { Icon: MapPin,label: 'Location', value: 'Faisalabad, Punjab, Pakistan', href: undefined },
                ].map(({ Icon, label, value, href }) => {
                  const inner = (
                    <div key={label} className="flex items-center gap-3" style={{ ...S.card, padding: '1rem 1.25rem' }}>
                      <div style={{ width: '2.25rem', height: '2.25rem', borderRadius: '0.625rem', backgroundColor: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon className="w-5 h-5" style={S.indigo} />
                      </div>
                      <div>
                        <span style={{ display: 'block', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '0.08em', color: '#94a3b8' }}>{label}</span>
                        <span style={{ fontSize: '0.875rem', fontWeight: 600, ...S.slate }}>{value}</span>
                      </div>
                    </div>
                  );
                  return href ? <a key={label} href={href} style={{ textDecoration: 'none' }}>{inner}</a> : inner;
                })}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3" style={S.card}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'name',  label: 'Your Name',      type: 'text',  placeholder: 'e.g. John Doe',          key: 'name'    },
                    { id: 'email', label: 'Email Address',   type: 'email', placeholder: 'name@example.com',       key: 'email'   },
                  ].map(({ id, label, type, placeholder, key }) => (
                    <div key={id}>
                      <label htmlFor={id} style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.375rem' }}>{label}</label>
                      <input
                        id={id} type={type} required placeholder={placeholder}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        style={{ width: '100%', padding: '0.65rem 0.875rem', border: '1px solid #e2e8f0', borderRadius: '0.625rem', fontSize: '0.875rem', color: '#0f172a', outline: 'none', backgroundColor: '#f8faff' }}
                        onFocus={(e) => (e.currentTarget.style.borderColor = '#818cf8')}
                        onBlur={(e) => (e.currentTarget.style.borderColor = '#e2e8f0')}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="subject" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.375rem' }}>Subject</label>
                  <input
                    id="subject" type="text" required placeholder="e.g. Freelance project or Hiring opportunity"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem 0.875rem', border: '1px solid #e2e8f0', borderRadius: '0.625rem', fontSize: '0.875rem', color: '#0f172a', outline: 'none', backgroundColor: '#f8faff' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#818cf8')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#e2e8f0')}
                  />
                </div>

                <div>
                  <label htmlFor="message" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#334155', marginBottom: '0.375rem' }}>Message</label>
                  <textarea
                    id="message" required rows={5} placeholder="Briefly describe your project or opportunity..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ width: '100%', padding: '0.65rem 0.875rem', border: '1px solid #e2e8f0', borderRadius: '0.625rem', fontSize: '0.875rem', color: '#0f172a', outline: 'none', resize: 'none', backgroundColor: '#f8faff' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#818cf8')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#e2e8f0')}
                  />
                </div>

                <button
                  type="submit" disabled={submitting}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                    padding: '0.8rem', borderRadius: '0.75rem', fontWeight: 700, fontSize: '0.875rem',
                    backgroundColor: submitting ? '#818cf8' : '#4f46e5', color: '#fff', border: 'none', cursor: 'pointer',
                    boxShadow: '0 4px 16px rgba(79,70,229,0.25)', transition: 'opacity 0.15s',
                  }}
                >
                  {submitting
                    ? <span style={{ width: '1.1rem', height: '1.1rem', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite', display: 'inline-block' }} />
                    : <><span>Send Message</span><Send className="w-4 h-4" /></>}
                </button>

                {sent && (
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', padding: '0.875rem', borderRadius: '0.625rem', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', color: '#15803d', fontSize: '0.875rem', fontWeight: 600 }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Message sent! I'll get back to you within 24 hours.</span>
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: '#f8faff', borderTop: '1px solid #e2e8f0', padding: '2rem 0' }}>
        <div className="container mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
            © {new Date().getFullYear()} Laiba Kamal — MERN Stack Developer
          </p>
          <div className="flex gap-5">
            {['Home','About','Experience','Projects','Contact'].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} style={{ fontSize: '0.78rem', fontWeight: 600, color: '#64748b', textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#4f46e5')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Keyframe for spinner */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
