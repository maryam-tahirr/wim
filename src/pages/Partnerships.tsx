import { EnquiryForm } from "../components/Form";
import { Checks, ClosingCTA, PageHero, Reveal, SectionHead, Verify } from "../components/ui";
import { PARTNER_AREAS } from "../content/site";
import { EMAILS } from "../config";

export default function Partnerships() {
  return (
    <>
      <PageHero crumb="Corporate Partnerships" eyebrow="Corporate partnerships" wide title="Build a stronger talent pipeline. Help shape a more connected profession." lead="WIM works with organisations that want to support professional development, connect with emerging talent and contribute to meaningful conversations across Law, GRC, Legal Tech and related fields. We welcome partnerships built around shared goals, practical value and long-term impact.">
        <p className="mt-2"><a href="#enquiry" className="btn btn-primary">Partner with WIM</a></p>
      </PageHero>

      <section className="section" aria-labelledby="areas">
        <div className="wrap">
          <SectionHead eyebrow="Ways to collaborate" title={<span id="areas">Partnership pathways</span>} />
          <div className="grid grid-3">
            {PARTNER_AREAS.map((p) => <Reveal key={p.title}><div className="card card-hover" style={{ height: "100%" }}><h3>{p.title}</h3><p style={{ color: "#4a474d" }}>{p.text}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="section bg-white" aria-labelledby="why">
        <div className="wrap split top">
          <div><p className="eyebrow">Why work with WIM?</p><h2 id="why">Shared goals. Practical value.</h2></div>
          <div>
            <Checks items={["Engage with a community focused on professional growth and knowledge-sharing.", "Create opportunities for your people to contribute as mentors, speakers and subject-matter experts.", "Support access to guidance and career development for emerging professionals.", "Collaborate on activities with defined audiences, objectives and outcomes."]} />
            <Verify>Do not promise access to candidate data, hiring outcomes, exclusivity or measurable impact unless covered by an approved agreement.</Verify>
          </div>
        </div>
      </section>

      <section className="section" id="enquiry" aria-labelledby="start">
        <div className="wrap narrow">
          <SectionHead eyebrow="Start a conversation" title={<span id="start">Tell us about your organisation.</span>} lead="Tell us about your organisation, the people you hope to reach and the outcomes you would like to support. We will explore potential areas of alignment." />
          <div className="form-card">
            <EnquiryForm kind="Partnership enquiry" submitLabel="Partner with WIM" mailTo={EMAILS.partnership} mailSubject="Partnership enquiry" fields={[
              { name: "organisation", label: "Organisation", required: true, autoComplete: "organization" },
              { name: "contactPerson", label: "Contact person", required: true, autoComplete: "name" },
              { name: "email", label: "Email address", type: "email", required: true, autoComplete: "email" },
              { name: "interest", label: "Partnership interest", type: "select", required: true, options: PARTNER_AREAS.map((p) => p.title) },
              { name: "message", label: "Message", type: "textarea", required: true, hint: "Your audience, topic, format and goals." },
            ]} />
          </div>
        </div>
      </section>
      <ClosingCTA primary={{ label: "Join the Community", to: "/join" }} secondary={{ label: "Contact WIM", to: "/contact" }} />
    </>
  );
}
