import type { Metadata } from "next";
import "./proposal.css";

export const metadata: Metadata = {
  title: "Zenith Dentistry — A Proposal from ValGrow Labs",
  description: "A proposal for a redesigned website and an AI-enabled booking system for Zenith Dentistry.",
};

export default function ProposalPage() {
  return (
    <div className="proposal-page">
      {/* ===== Cover ===== */}
      <div className="cover">
        <svg className="cover-rings" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="290" stroke="#2F7A66" strokeWidth="1" />
          <circle cx="300" cy="300" r="220" stroke="#2F7A66" strokeWidth="1" />
          <circle cx="300" cy="300" r="150" stroke="#2F7A66" strokeWidth="1" />
          <circle cx="300" cy="300" r="80" stroke="#2F7A66" strokeWidth="1" />
        </svg>
        <div className="cover-inner">
          <div className="rise rise-1">
            <div className="eyebrow">
              <span className="dash"></span>Prepared for Zenith Dentistry, by ValGrow Labs
            </div>
            <h1>Your patients are already reaching out. The question is how many reach a booked seat.</h1>
            <p className="sub">
              A proposal for a redesigned website and an AI-enabled booking system that turns every
              Meta ad inquiry into a managed appointment — automatically.
            </p>
          </div>
          <div className="cover-card rise rise-2">
            <div className="q">
              &ldquo;A spa-like environment that will make your next dental appointment unlike any other.&rdquo;
            </div>
            <div className="attr">— Zenith Dentistry, on its own patient experience</div>
          </div>
        </div>
        <div className="meta rise rise-3">
          <div>
            <strong>Zenith Dentistry</strong>Dehiwala, Colombo
          </div>
          <div>
            <strong>Founder</strong>Dr. Ahamed Fouzan, AAID &amp; WCLI Fellow
          </div>
          <div>
            <strong>Scope</strong>Website redesign + AI booking backend
          </div>
        </div>
      </div>

      {/* ===== 01 — The situation today ===== */}
      <section className="sec-white">
        <div className="wrap">
          <div className="shell">
            <div className="rail-num">01</div>
            <div>
              <div className="section-label">The situation today</div>
              <h2>Every good lead still needs a human to notice it.</h2>
              <p className="lead">
                Zenith runs Meta ads that bring genuinely interested people to WhatsApp. From there,
                the process is entirely manual: a receptionist reads each message, replies, qualifies
                interest, and — if the person is ready — manually places them into the booking system.
                One conversation at a time.
              </p>
              <p>
                That&apos;s not a criticism of the team — it&apos;s simply what happens without a system
                built to carry that weight. And it shows up in a few specific ways:
              </p>

              <div className="problem-list">
                <div className="problem-item">
                  <div className="tag">After hours</div>
                  <div>
                    <h3>Inquiries wait for morning</h3>
                    <p>
                      A message at 9pm — often the moment someone is deciding between clinics — sits
                      unanswered until the clinic opens. Dental and cosmetic decisions are impulsive;
                      the wait is where competitors get the booking instead.
                    </p>
                  </div>
                </div>
                <div className="problem-item">
                  <div className="tag">Two systems</div>
                  <div>
                    <h3>WhatsApp and the website don&apos;t talk to each other</h3>
                    <p>
                      The website runs a separate third-party booking widget. WhatsApp bookings are
                      entered manually. There&apos;s no single calendar of truth, which means real risk
                      of double-booked slots and no easy way to see the full day at a glance.
                    </p>
                  </div>
                </div>
                <div className="problem-item">
                  <div className="tag">No visibility</div>
                  <div>
                    <h3>Ad spend and outcomes are disconnected</h3>
                    <p>
                      There&apos;s no way to see, at a glance, which ads actually turn into booked,
                      treated patients — so decisions about where to spend on Meta ads are made without
                      the data that would make them easy.
                    </p>
                  </div>
                </div>
                <div className="problem-item">
                  <div className="tag">Capacity</div>
                  <div>
                    <h3>Growth is capped by one person&apos;s bandwidth</h3>
                    <p>
                      However good the receptionist is, there&apos;s a ceiling on how many conversations
                      one person can hold well at once. More ad spend just means more messages waiting
                      in the same queue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 02 — The proposal ===== */}
      <section className="tint">
        <div className="wrap">
          <div className="shell">
            <div className="rail-num">02</div>
            <div>
              <div className="section-label">The proposal</div>
              <h2>One system, with two doors in.</h2>
              <p className="lead">
                Instead of a new website that just looks better, we&apos;re proposing a redesigned
                website and a booking system built as one connected system — so a patient can reach
                Zenith through WhatsApp or the website, and either way, the outcome is the same: a
                confirmed slot on one shared calendar, visible to your team the moment it&apos;s booked.
              </p>

              <div className="layers">
                <div className="layer">
                  <div className="num">1</div>
                  <div>
                    <h3>A redesigned website</h3>
                    <p>
                      Modern, minimal, and calm — matching the spa-like experience patients already
                      get in person. It fully replaces the current third-party booking widget, with a
                      native booking flow wired directly into the same backend as everything else.
                    </p>
                  </div>
                </div>
                <div className="layer">
                  <div className="num">2</div>
                  <div>
                    <h3>An AI agent for WhatsApp and website chat</h3>
                    <p>
                      Picks up every inquiry the moment it arrives, at any hour. It asks the right
                      qualifying questions, checks real slot availability, proposes times, and confirms
                      the booking — without a person needing to type a single reply.
                    </p>
                    <ul>
                      <li>Reads the live calendar, so it never offers a slot that&apos;s already taken</li>
                      <li>Knows which service the patient is interested in and how long that treatment needs</li>
                      <li>
                        Hands off to your receptionist for anything sensitive, complex, or outside its
                        confidence — never a dead end
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="layer">
                  <div className="num">3</div>
                  <div>
                    <h3>A centralized backend</h3>
                    <p>
                      One calendar, one source of truth, behind both doors. Your team gets a dashboard
                      showing every booking — whether it came from the AI agent, the website, or was
                      added manually for a walk-in — with doctor-wise schedules and treatment-wise slot
                      durations already built in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 03 — How it works (Diagram) ===== */}
      <div className="diagram-wrap">
        <div className="wide">
          <div className="shell" style={{ marginBottom: 40 }}>
            <div className="rail-num">03</div>
            <div>
              <div className="section-label">How it works</div>
              <h2 style={{ marginBottom: 0 }}>Two ways in, one calendar.</h2>
            </div>
          </div>
          <div className="diagram">
            <div className="d-row">
              <div className="d-box accent-clay">
                <div className="t">WhatsApp inquiry</div>
                <div className="s">From Meta ads</div>
              </div>
              <div className="d-box accent-clay">
                <div className="t">Website visitor</div>
                <div className="s">Browsing services</div>
              </div>
            </div>
            <div className="d-row" style={{ marginTop: 0 }}>
              <div className="d-arrow"></div>
              <div style={{ width: 230 }}></div>
              <div className="d-arrow"></div>
            </div>
            <div className="d-row">
              <div className="d-box accent-teal">
                <div className="t">AI agent</div>
                <div className="s">Qualifies and books the slot</div>
              </div>
              <div className="d-box accent-teal">
                <div className="t">Booking widget</div>
                <div className="s">Self-service booking</div>
              </div>
            </div>
            <div className="d-arrow" style={{ height: 42 }}></div>
            <div className="d-box hub">
              <div className="t">Centralized backend</div>
              <div className="s">Live calendar, every booking</div>
            </div>
            <div className="d-arrow" style={{ height: 42 }}></div>
            <div className="d-box">
              <div className="t">Clinic dashboard</div>
              <div className="s">Your team manages everything, in one place</div>
            </div>
          </div>
          <p className="d-caption">Nothing gets double-booked, and nothing gets missed.</p>
        </div>
      </div>

      {/* ===== 04 — What changes ===== */}
      <section className="sec-white">
        <div className="wrap">
          <div className="shell">
            <div className="rail-num">04</div>
            <div>
              <div className="section-label">What changes, in practice</div>
              <h2>The same Tuesday, run two different ways.</h2>
              <div className="scenario">
                <div className="scen-col now">
                  <div className="kicker">Today</div>
                  <h3>The manual way</h3>
                  <ol>
                    <li>A patient messages on WhatsApp at 10:40pm asking about Invisalign pricing.</li>
                    <li>No one sees it until the clinic opens the next morning.</li>
                    <li>
                      The receptionist replies, answers questions, and — if the patient is still
                      interested — manually checks the calendar and books a slot.
                    </li>
                    <li>
                      Meanwhile, someone else books directly through the website widget, on a system
                      the receptionist has to check separately.
                    </li>
                  </ol>
                </div>
                <div className="scen-col after">
                  <div className="kicker">Proposed</div>
                  <h3>The connected way</h3>
                  <ol>
                    <li>
                      The same patient messages at 10:40pm. The AI agent replies within seconds and
                      answers their Invisalign questions.
                    </li>
                    <li>
                      It checks live availability and offers two open slots this week. The patient
                      picks one — booked and confirmed before they&apos;ve put their phone down.
                    </li>
                    <li>
                      The receptionist opens the dashboard the next morning and sees the booking
                      already there, alongside every other booking from that week.
                    </li>
                    <li>No re-entry. No double-booking. No lead lost to the overnight gap.</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 05 — Deliverables ===== */}
      <section className="tint">
        <div className="wrap">
          <div className="shell">
            <div className="rail-num">05</div>
            <div>
              <div className="section-label">What&apos;s included</div>
              <h2>The full build.</h2>
              <div className="deliv-grid">
                <div className="deliv-item">
                  <h3>Website redesign</h3>
                  <p>
                    Modern, minimal, mobile-first site covering services, doctor profiles, facilities,
                    gallery, testimonials, and blog — matching Zenith&apos;s spa-like positioning.
                  </p>
                </div>
                <div className="deliv-item">
                  <h3>Native booking flow</h3>
                  <p>
                    Replaces the current jithya.com widget entirely, wired directly into the shared
                    calendar so there&apos;s no separate system to reconcile.
                  </p>
                </div>
                <div className="deliv-item">
                  <h3>WhatsApp AI agent</h3>
                  <p>
                    Handles inbound inquiries end to end — qualifying, answering common questions,
                    and booking directly into the live calendar.
                  </p>
                </div>
                <div className="deliv-item">
                  <h3>Website chat agent</h3>
                  <p>
                    The same AI, available on the website itself, for visitors who&apos;d rather ask
                    a question before booking.
                  </p>
                </div>
                <div className="deliv-item">
                  <h3>Centralized calendar</h3>
                  <p>
                    Doctor-wise schedules and treatment-wise slot durations, shared by every booking
                    channel — no conflicts, no manual cross-checking.
                  </p>
                </div>
                <div className="deliv-item">
                  <h3>Clinic dashboard</h3>
                  <p>
                    One screen for your team to see, manage, and adjust every booking, plus a simple
                    view of which ads are actually converting into booked patients.
                  </p>
                </div>
              </div>

              <div className="addon">
                <div className="section-label">Optional, if you&apos;d like it</div>
                <h3>Instagram and Facebook Messenger</h3>
                <p style={{ marginBottom: 0 }}>
                  The same AI agent can be extended to handle Instagram and Facebook DMs on the same
                  logic and the same calendar — useful if Meta ads are sending traffic to more than
                  just WhatsApp. This can be added in a later phase without rebuilding anything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 06 — Why ValGrow ===== */}
      <section className="sec-white">
        <div className="wrap">
          <div className="shell">
            <div className="rail-num">06</div>
            <div>
              <div className="section-label">Why ValGrow Labs</div>
              <h2>We build the whole system, not just the front door.</h2>
              <div className="why-grid">
                <div className="why-item">
                  <h3>AI and automation, not just websites</h3>
                  <p>
                    This isn&apos;t a redesign with a chatbot bolted on — the AI agent and booking
                    backend are built as one system from the start.
                  </p>
                </div>
                <div className="why-item">
                  <h3>Built around how the clinic actually runs</h3>
                  <p>
                    Doctor schedules, treatment durations, and the existing patient journey shape the
                    system, rather than forcing the clinic to adapt to generic software.
                  </p>
                </div>
                <div className="why-item">
                  <h3>One team, start to finish</h3>
                  <p>
                    Design, AI, and backend are handled under one roof, so nothing gets lost between
                    a web agency and a separate developer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <div className="cta">
        <div className="cta-inner">
          <div>
            <div className="section-label" style={{ color: "#8FC4AC" }}>
              Next step
            </div>
            <h2>Let&apos;s walk through this together.</h2>
            <p>
              Happy to go through the system live, answer questions from the team, and talk through
              a rollout that fits your timeline.
            </p>
          </div>
          <div className="cta-panel">
            <strong>ValGrow Labs</strong>
            <span>Reach out whenever you&apos;re ready to talk it through.</span>
          </div>
        </div>
      </div>

      <div className="proposal-footer">Prepared by ValGrow Labs for Zenith Dentistry</div>
    </div>
  );
}
