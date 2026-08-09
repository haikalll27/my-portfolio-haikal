import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";
import AOS from "aos";
import "aos/dist/aos.css";
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";
import {
  portfolioCertificates,
  portfolioProjects,
  portfolioTechStacks,
} from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

// Separate ShowMore/ShowLess button component
const ToggleButton = ({ onClick, isShowingMore, label }) => (
  <button
    onClick={onClick}
    className="
      px-3 py-1.5
      text-slate-300 
      hover:text-white 
      text-sm 
      font-medium 
      transition-all 
      duration-300 
      ease-in-out
      flex 
      items-center 
      gap-2
      bg-white/5 
      hover:bg-white/10
      rounded-md
      border 
      border-white/10
      hover:border-white/20
      backdrop-blur-sm
      group
      relative
      overflow-hidden
    "
  >
    <div className="relative z-10 flex items-center gap-2">
      {label}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-transform duration-300 ${isShowingMore ? "group-hover:-translate-y-0.5" : "group-hover:translate-y-0.5"}`}
      >
        <polyline points={isShowingMore ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}></polyline>
      </svg>
    </div>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500/50 transition-all duration-300 group-hover:w-full"></span>
  </button>
);

const CountLabel = ({ label }) => (
  <span className="flex items-center gap-2">
    <span>{label}</span>
  </span>
);

const PaginationButton = ({ children, isActive = false, disabled = false, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={`flex h-10 min-w-10 items-center justify-center rounded-xl border px-3 text-sm font-medium transition-all duration-300 ${
      isActive
        ? "border-purple-400/60 bg-gradient-to-r from-[#6366f1]/30 to-[#a855f7]/30 text-white shadow-lg shadow-purple-500/10"
        : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
    } ${disabled ? "cursor-not-allowed opacity-40 hover:border-white/10 hover:bg-white/5 hover:text-slate-300" : ""}`}
  >
    {children}
  </button>
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>{children}</Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const { t } = useLanguage();
  const [value, setValue] = useState(0);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [currentProjectPage, setCurrentProjectPage] = useState(1);
  const [screenWidth, setScreenWidth] = useState(() =>
    typeof window === "undefined" ? 1280 : window.innerWidth
  );
  const previousProjectPage = useRef(currentProjectPage);
  const projectItemsPerPage = 6;

  const initialItems = useMemo(() => {
    if (screenWidth < 640) return 4;
    if (screenWidth < 1024) return 6;
    return 8;
  }, [screenWidth]);

  useEffect(() => {
    AOS.init({
      once: false,
    });

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      AOS.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleShowMore = useCallback((type) => {
    if (type !== 'projects') {
      setShowAllCertificates(prev => !prev);
    }
  }, []);

  const totalProjectPages = Math.ceil(portfolioProjects.length / projectItemsPerPage);
  const displayedProjects = useMemo(() => {
    const startIndex = (currentProjectPage - 1) * projectItemsPerPage;
    return portfolioProjects.slice(startIndex, startIndex + projectItemsPerPage);
  }, [currentProjectPage]);
  const displayedCertificates = showAllCertificates
    ? portfolioCertificates
    : portfolioCertificates.slice(0, initialItems);
  const visiblePageNumbers = useMemo(() => {
    if (totalProjectPages <= 3) {
      return Array.from({ length: totalProjectPages }, (_, index) => index + 1);
    }

    if (screenWidth < 640) {
      if (currentProjectPage === 1) return [1, 2, 3];
      if (currentProjectPage === totalProjectPages) {
        return [totalProjectPages - 2, totalProjectPages - 1, totalProjectPages];
      }
      return [currentProjectPage - 1, currentProjectPage, currentProjectPage + 1];
    }

    return Array.from({ length: totalProjectPages }, (_, index) => index + 1);
  }, [currentProjectPage, screenWidth, totalProjectPages]);

  useEffect(() => {
    if (currentProjectPage > totalProjectPages) {
      setCurrentProjectPage(totalProjectPages || 1);
    }
  }, [currentProjectPage, totalProjectPages]);

  useEffect(() => {
    if (value === 0 && previousProjectPage.current !== currentProjectPage) {
      const portfolioSection = document.getElementById("Portofolio");
      portfolioSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    previousProjectPage.current = currentProjectPage;
  }, [currentProjectPage, value]);

  return (
    <div className="w-full overflow-hidden bg-[#030014] px-[5%] pt-16 sm:pt-20 lg:px-[10%]" id="Portofolio">
      {/* Header section */}
      <div className="pb-10 text-center" data-aos="fade-up" data-aos-duration="1000">
        <div className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span style={{
            color: '#6366f1',
            backgroundImage: 'linear-gradient(45deg, #6366f1 10%, #a855f7 93%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {t("portfolio.title")}
          </span>
        </div>
        <div className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          {t("portfolio.subtitle")}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            {portfolioProjects.length} {t("portfolio.countProjects")}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            {portfolioCertificates.length} {t("portfolio.countCertificates")}
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
            {portfolioTechStacks.length} {t("portfolio.countTechStack")}
          </span>
        </div>
      </div>

      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(180deg, rgba(139, 92, 246, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)",
              backdropFilter: "blur(10px)",
              zIndex: 0,
            },
          }}
          className="px-2 md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant={screenWidth < 640 ? "scrollable" : "fullWidth"}
            scrollButtons={screenWidth < 640}
            allowScrollButtonsMobile
            sx={{
              minHeight: { xs: "64px", md: "70px" },
              "& .MuiTab-root": {
                minHeight: { xs: "56px", md: "70px" },
                minWidth: { xs: "160px", sm: "unset" },
                fontSize: { xs: "0.8rem", md: "1rem" },
                fontWeight: "600",
                color: "#94a3b8",
                textTransform: "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                padding: "14px 0",
                zIndex: 1,
                margin: "6px",
                borderRadius: "12px",
                gap: "6px",
                "&:hover": {
                  color: "#ffffff",
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  transform: "translateY(-2px)",
                  "& .lucide": {
                    transform: "scale(1.1) rotate(5deg)",
                  },
                },
                "&.Mui-selected": {
                  color: "#fff",
                  background: "linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2))",
                  boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                  "& .lucide": {
                    color: "#a78bfa",
                  },
                },
              },
              "& .MuiTabs-indicator": {
                height: 0,
              },
              "& .MuiTabs-flexContainer": {
                gap: "8px",
              },
              "& .MuiTabs-scrollButtons": {
                color: "#cbd5e1",
              },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />}
              label={<CountLabel label={t("portfolio.tabProjects")} />}
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />}
              label={<CountLabel label={t("portfolio.tabCertificates")} />}
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />}
              label={<CountLabel label={t("portfolio.tabTechStack")} />}
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={setValue}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="container mx-auto flex items-center justify-center overflow-hidden">
              <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 2xl:grid-cols-3">
                  {displayedProjects.map((project, index) => (
                    <div className="h-full rounded-lg overflow-hidden" key={project.id} data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"} data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}>
                      <CardProject {...project} />
                    </div>
                  ))}
              </div>
            </div>
            {totalProjectPages > 1 && (
              <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
                <div className="text-center text-sm text-slate-400 sm:text-left">
                  {t("portfolio.showing", { shown: displayedProjects.length, total: portfolioProjects.length })}
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <PaginationButton
                    onClick={() => setCurrentProjectPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentProjectPage === 1}
                  >
                    {t("portfolio.prev")}
                  </PaginationButton>

                  <div className="hidden items-center gap-2 sm:flex">
                    {visiblePageNumbers.map((pageNumber) => (
                      <PaginationButton
                        key={pageNumber}
                        onClick={() => setCurrentProjectPage(pageNumber)}
                        isActive={currentProjectPage === pageNumber}
                      >
                        {pageNumber}
                      </PaginationButton>
                    ))}
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 sm:hidden">
                    {currentProjectPage} / {totalProjectPages}
                  </div>

                  <PaginationButton
                    onClick={() => setCurrentProjectPage((prev) => Math.min(prev + 1, totalProjectPages))}
                    disabled={currentProjectPage === totalProjectPages}
                  >
                    {t("portfolio.next")}
                  </PaginationButton>
                </div>
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="container mx-auto flex items-center justify-center overflow-hidden">
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 xl:gap-5">
                {displayedCertificates.map((certificate, index) => (
                  <div
                    key={certificate.id}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <Certificate ImgSertif={certificate.Img} />
                  </div>
                ))}
              </div>
            </div>
            {portfolioCertificates.length > initialItems && (
              <div className="mt-6 flex w-full justify-start">
                <ToggleButton
                  onClick={() => toggleShowMore('certificates')}
                  isShowingMore={showAllCertificates}
                  label={showAllCertificates ? t("portfolio.showLess") : t("portfolio.showMore")}
                />
              </div>
            )}
          </TabPanel>

          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="container mx-auto flex items-center justify-center overflow-hidden pb-[5%]">
              <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-6">
                {portfolioTechStacks.map((stack, index) => (
                  <div
                    key={index}
                    data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                    data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                  >
                    <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
