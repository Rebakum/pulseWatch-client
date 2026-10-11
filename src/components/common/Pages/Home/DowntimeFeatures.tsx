'use client';

import { ArrowRight, Clock, Database, Globe, Key, Network, Target } from 'lucide-react';
import { motion } from 'motion/react';

export default function DowntimeFeatures() {
  const features = [
    {
      title: 'Website monitoring',
      description: 'Monitor any HTTP(s) endpoint or page',
      icon: <Globe className="w-6 h-6 text-[var(--color-brand-blue)]" />,
    },
    {
      title: 'Keyword monitoring',
      description: 'Get alerted if a keyword appears or disappears',
      icon: <Key className="w-6 h-6 text-[var(--color-brand-purple)]" />,
    },
    {
      title: 'Ping monitoring',
      description: 'Make sure your server or any device in the network is always available',
      icon: <Target className="w-6 h-6 text-[var(--color-status-up)]" />,
    },
    {
      title: 'Port monitoring',
      description: 'Useful for SMTP, POP3, FTP, and other services running on specific TCP ports',
      icon: <Network className="w-6 h-6 text-[var(--color-brand-blue)]" />,
    },
    {
      title: 'Cron job monitoring',
      description: 'Know if a scheduled job fails or goes missing',
      icon: <Clock className="w-6 h-6 text-[var(--color-status-warning)]" />,
    },
    {
      title: 'DNS record monitoring',
      description: 'Catch unauthorised DNS changes early',
      icon: <Database className="w-6 h-6 text-[var(--color-brand-magenta)]" />,
    },
  ];

  // Custom delay mapping (300ms, 600ms, 900ms, 1200ms, 1500ms, 1800ms)
  const cardDelays = [0.3, 0.6, 0.9, 1.2, 1.5, 1.8];

  return (
    <section className="bg-[var(--background)] text-[var(--foreground)] px-8 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top Header Row with Motion Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12"
        >
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Catch downtime <br />
              <span className="bg-clip-text text-transparent bg-brand-gradient">
                before your users do.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
              Monitor uptime, SSL certificates, ports, and cron jobs in real time. Set up monitors
              in minutes, get instant alerts when something breaks, and integrate with your existing
              workflow effortlessly.
            </p>
          </div>
        </motion.div>

        {/* 6-Grid Feature Cards with Custom Staggered Delays */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: cardDelays[index] }}
              whileHover={{ y: -5 }}
              className="relative group p-6 sm:p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--color-brand-blue)]/50 transition-colors duration-300 flex flex-col justify-between overflow-hidden shadow-sm"
            >
              {/* Subtle background radar circles effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[var(--border)]/30 rounded-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />

              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[var(--background)] border border-[var(--border)] flex items-center justify-center mb-6 shadow-inner relative z-10 group-hover:border-[var(--color-brand-blue)]/40 transition-colors">
                  {item.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-[var(--foreground)] mb-2 relative z-10">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed relative z-10">
                  {item.description}
                </p>
              </div>

              {/* Bottom Action Arrow */}
              <div className="pt-8 flex justify-end relative z-10">
                <div className="w-8 h-8 rounded-full border border-[var(--border)] bg-[var(--background)] flex items-center justify-center text-[var(--muted)] group-hover:text-[var(--foreground)] group-hover:border-[var(--color-brand-blue)] group-hover:bg-[var(--color-brand-blue)]/10 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
