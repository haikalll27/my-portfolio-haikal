import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Lock } from 'lucide-react';
import { useLanguage } from "../context/LanguageContext";
import { ENTERPRISE_ICONS } from "./EnterpriseIcon.js";

const CardProject = ({ Img, Title, Name, Description, Link: ProjectLink, id, Kind, Icon }) => {
  const { t } = useLanguage();
  const isEnterprise = Kind === "enterprise";
  const IconComponent = ENTERPRISE_ICONS[Icon] || null;

  // Enterprise projects are internal systems — no public demo exists yet.
  const handleLiveDemo = (e) => {
    if (!ProjectLink) {
      e.preventDefault();
    }
  };

  return (
    <div className="group relative w-full">
      <div className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

        <div className="relative z-10 flex h-full flex-col p-5">
          <div className="relative overflow-hidden rounded-lg">
            {Img ? (
              <img
                src={Img}
                alt={Name || Title}
                loading="lazy"
                decoding="async"
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-64 lg:h-72"
              />
            ) : (
              <div className="flex h-56 w-full items-center justify-center bg-gradient-to-br from-[#6366f1]/20 via-[#8b5cf6]/15 to-[#a855f7]/20 sm:h-64 lg:h-72">
                <div className="relative">
                  <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7] opacity-20 blur-2xl" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    {IconComponent ? (
                      <IconComponent className="h-10 w-10 text-[#a78bfa]" />
                    ) : (
                      <Lock className="h-10 w-10 text-[#a78bfa]" />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-1 flex-col space-y-3">
            <div className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-lg font-semibold text-transparent sm:text-xl">
              {Title}
            </div>

            <div className="text-gray-300/80 font-semibold text-sm from-blue-200 via-purple-200 to-pink-200 bg-clip-text leading-relaxed line-clamp-2">
              {Name}
            </div>

            <div className="text-gray-300/80 text-sm font-semibold leading-relaxed line-clamp-2">
              {Description}
            </div>

            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
              {ProjectLink ? (
                <a
                  href={ProjectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLiveDemo}
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  <span className="text-sm font-medium">{t("card.visitWebsite")}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : isEnterprise ? (
                <span className="inline-flex items-center gap-1.5 text-sm text-gray-400">
                  <Lock className="w-3.5 h-3.5" />
                  {t("card.internalSystem")}
                </span>
              ) : (
                <span className="text-gray-500 text-sm">{t("card.demoUnavailable")}</span>
              )}

              {id ? (
                <Link
                  to={`/project/${id}`}
                  className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                >
                  <span className="text-sm font-medium">{t("card.details")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <span className="text-gray-500 text-sm">{t("card.detailsUnavailable")}</span>
              )}
            </div>
          </div>

          <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
