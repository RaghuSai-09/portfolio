'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen } from 'react-icons/fi';

const experiences = [
  {
    company: 'Intellilake',
    role: 'Software Engineer, AI Agents',
    period: 'Jun 2026 – Present',
    bullets: [
      'Turned a sprawling UI map into an agent-ready contract by hardening a 100+ surface spatial taxonomy (command grammar, reach vs dependsOn.panels, structured env deps, frozen grammar) across top-bar, grid, reporting, left-rail, modals, and chat – producing reproducible, codegen-aligned surface recipes so agent drivability is contract-backed rather than ad-hoc prompts.',
      'Built the agent to UI command path (emit and useAgentEvent, inbound toast.show and navigate with dimension targeting, shared command registry) so agent actions resolve through one typed pipeline with tests – routing toasts and navigation through typed EventProvider APIs for consistent, testable agent-driven UI control.',
      'Made agent navigation data-aware by extending the command manifest with an optional dimension enum and wiring NavBar to apply workspace dimension – so agents open the correct entity context in one command.',
      'Closed a multi-PR taxonomy program (UI-579 to UI-587 into UI-578) by shipping stacked slice PRs region by region (app menu, data-ops, grid/transform, reporting, left-rail, modals, right-rail/chat) for full-shell coverage without a single mega-diff – standardising JSON send and expect recipes, classifying planned and chat.* surfaces as undrivable, and claiming only allowlisted commands (toast.show, panel.open) for clearer wait/expect flows and fewer false success claims.',
      'Shipped Galaxy canvas into the R&D centre workspace with state-preserved tab switching – extending the platform’s architecture playground for spatial UX experiments.',
    ],
  },
  {
    company: 'Strategibuilder',
    role: 'Full Stack Software Engineer',
    period: 'Nov 2025 – Jun 2026',
    bullets: [
      'Automated intelligent document extraction pipeline processing 1,000+ documents/month using AWS Textract, Lambda, and Pydantic-validated REST APIs deployed as containerised microservices on Linux-based AWS ECS Fargate – reducing ACORD insurance form processing time by 60% and completing the full software development life cycle from design to deployment.',
      'Designed and deployed a distributed, async microservices backbone using S3, SQS, and CloudWatch network monitoring and observability, fully automated via Jenkins-compatible CI/CD pipelines (GitHub Actions) to AWS Elastic Beanstalk – enabling zero-downtime weekly releases and real-time alerting on service health.',
      'Delivered content globally via CDN (AWS CloudFront) for a 15-component WCAG-compliant React / TypeScript library with Zod schema validation – reducing UI integration bugs by 35% and improving QA cycle efficiency.',
      'Engineered production-grade secure software: JWT + RBAC authentication with AWS Cognito, PostgreSQL (RDS) backed by API Gateway, structured audit logging, and SQL-driven access controls – achieving zero security incidents across 3 role tiers.',
    ],
  },
  {
    company: 'Phamax – Healthcare AI Platform',
    role: 'Full Stack Software Engineer',
    period: 'Jun 2024 – Dec 2024',
    bullets: [
      'Designed, developed, tested, and deployed an AI-powered automation-style workflow system serving 5,000+ users, using Python NLP pipelines and LLM reasoning chains on Linux-based AWS infrastructure – reducing patient intake manual processing by 40% with zero human-in-the-loop intervention.',
      'Architected automated network monitoring and reporting pipelines on AWS (CloudWatch, SQS) with structured observability and scheduled execution, saving 10+ engineering hours/week across 3 clinical teams – applying DevOps practices to operational pipeline reliability.',
      'Maintained 99.9% uptime on scalable, secure software by implementing OAuth 2.0-secured REST APIs with comprehensive audit logging, role-based SQL data access controls, and full HIPAA compliance.',
      'Improved agent decision accuracy by 30% through iterative semantic analysis pipelines using TensorFlow and PyTorch, collaborating across global cross-functional stakeholder teams.',
    ],
  },
  {
    company: '_VOIS – Vodafone Intelligent Solutions',
    role: 'Software Engineer',
    period: 'Jun 2022 – Nov 2022',
    bullets: [
      'Built end-to-end Python ML data pipelines on Linux infrastructure within Vodafone’s global telecommunications carrier environment, processing 50,000+ network-scale records with SQL-driven feature extraction – achieving 95% precision in automated spam classification across carrier communication systems.',
      'Developed and deployed a real-time network monitoring and auditing tool (Streamlit + AWS) enabling Vodafone’s non-technical operations teams to autonomously monitor network automation pipeline outputs – reducing manual review cycles by 40%.',
      'Decreased SQL and Pandas pipeline processing time by 25% by profiling and resolving bottlenecks across 4 production distributed workflows on Linux-based cloud infrastructure.',
      'Published peer-reviewed research on comparative Python ML algorithm performance (Advances in Document Intelligence and Content Classification, 2022), contributed to global collaboration with Vodafone engineering teams across multiple regions.',
    ],
  },
  {
    company: '1Stop.ai / Personifwy',
    role: 'AI / ML Engineer',
    period: 'Oct 2020 – Jun 2021',
    bullets: [
      'Achieved 90%+ object recognition accuracy by developing and deploying CNN models using TensorFlow and PyTorch on Linux environments with reproducible NumPy/Pandas feature extraction pipelines – completing the full SDLC from research through production deployment.',
      'Standardised preprocessing workflows and documented 5 deployed model architectures, accelerating model experimentation by 20% through reusable hyperparameter tuning strategies across distributed compute environments.',
    ],
  },
];

const education = [
  {
    degree: 'Master of Engineering, Computer Science',
    school: 'University of Cincinnati, Cincinnati, OH',
    period: 'Aug 2024 – May 2026',
    gpa: '3.93 / 4.0',
    coursework: 'NLP, Advanced ML, Distributed Systems, Advanced Algorithms',
  },
  {
    degree: 'Bachelor of Technology, Computer Science',
    school: 'SRM University AP, India',
    period: 'Sep 2020 – May 2024',
    gpa: '3.75 / 4.0',
    coursework: 'AI, Machine Learning, Deep Learning, Data Mining',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label mb-3">Career</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground tracking-tight">Experience</h2>
          <div className="editorial-rule mt-6 w-24" />
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="relative py-10 first:pt-0 border-b border-border-light last:border-0"
            >
              <div className="grid md:grid-cols-[240px_1fr] gap-6 md:gap-12">
                <div className="md:pt-1">
                  <div className="flex items-center gap-2 mb-2">
                    <FiBriefcase size={14} className="text-accent" />
                    <p className="text-base font-bold text-foreground">{exp.company}</p>
                  </div>
                  <p className="text-[0.95rem] font-semibold text-accent mb-1">{exp.role}</p>
                  <p className="font-mono text-[0.65rem] text-muted tracking-wider">{exp.period}</p>
                </div>

                <div>
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="bullet-item flex gap-3 text-[0.9rem] text-foreground/80 leading-[1.7] py-1 px-2 -mx-2">
                        <span className="text-accent mt-1.5 shrink-0">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="flex items-center gap-2 mb-10">
            <FiBookOpen size={16} className="text-accent" />
            <p className="section-label">Academics</p>
          </div>
          <h3 className="font-serif text-2xl text-foreground tracking-tight mb-10">Education</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="paper-card p-6"
              >
                <p className="font-serif text-base text-foreground mb-1">{edu.degree}</p>
                <p className="text-sm text-secondary mb-4">{edu.school}</p>
                <div className="flex items-baseline justify-between font-mono text-[0.65rem] text-muted tracking-wider mb-3">
                  <span>{edu.period}</span>
                  <span className="text-accent font-medium text-[0.75rem]">GPA: {edu.gpa}</span>
                </div>
                <div className="editorial-rule-center mb-3" />
                <p className="text-[0.78rem] text-subtle">{edu.coursework}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
