import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/agencyData';
import { PortfolioItem } from '../types';
import { ExternalLink, Sparkles, X, ArrowRight, Tag } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);

  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-ai', label: 'Web & AI' },
    { id: 'marketing', label: 'Digital Marketing' },
    { id: 'design-video', label: 'Design & Video' },
    { id: 'youtube-growth', label: 'YouTube Growth' },
  ];

  const filteredProjects = activeTab === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 relative bg-slate-950">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Showcase</span>
          </div>

          <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
            Our Recent Masterpieces &{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-300">
              Client Success
            </span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Explore a curated selection of web platforms, marketing campaigns, branding suites, and YouTube growth projects built by GHUFRAN KING DIGITAL.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'glass-card text-slate-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden group border border-white/10 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-amber-500/90 text-slate-950 shadow-md">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Result Badge */}
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500/90 text-slate-950 shadow-md">
                      ⚡ {project.result}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Client: {project.client}
                  </p>
                  
                  <h3 className="font-syne font-bold text-xl text-white group-hover:text-amber-300 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-md text-[10px] font-medium bg-slate-800 text-slate-300 border border-white/5">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-6 pb-6 pt-2 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setActiveProject(project)}
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>View Case Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                    title="Live Link"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full glass-card text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-white/10">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </div>

            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              {activeProject.categoryLabel} • Client: {activeProject.client}
            </span>

            <h3 className="font-syne font-extrabold text-2xl text-white mt-1 mb-3">
              {activeProject.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed mb-5">
              {activeProject.description}
            </p>

            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 mb-6">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">Key Achievement Metric:</p>
              <p className="text-lg font-syne font-extrabold text-white mt-0.5">{activeProject.result}</p>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <Tag className="w-4 h-4 text-amber-400" />
              <div className="flex flex-wrap gap-1.5">
                {activeProject.tags.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md text-xs bg-slate-800 text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {activeProject.demoUrl && (
              <a
                href={activeProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <span>Visit Project / Live Portal</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
