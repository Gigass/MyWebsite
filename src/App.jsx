import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Mail, 
  Phone, 
  MessageCircle, 
  ArrowUpRight, 
  Terminal, 
  Cpu, 
  Layers, 
  Code, 
  Globe, 
  ExternalLink,
  Briefcase,
  Award,
  Factory,
  MessageSquare,
  Server,
  Cloud,
  Smartphone,
  Bot,
  Zap,
  Database,
  Crosshair,
  Disc,
  Activity
} from 'lucide-react';

// --- DATA SOURCE ---
const data = {
  "layout": {
    "navigation": [
      { "name": "HOME", "to": "home" },
      { "name": "PROJECTS", "to": "project" },
      { "name": "LAB", "to": "opensource" },
      { "name": "CONTACT", "to": "contact" }
    ]
  },
  "home": {
    "hero": {
      "title": "CHRIS YANG",
      "subtitle": "FULLSTACK ENGINEER & ARCHITECT",
      "description": "构建数字世界的底层逻辑与交互界面。资深Java工程师，专注于复杂系统架构、数字化转型与极致用户体验。"
    },
    "advantages": [
      {
        "iconKey": "Layers",
        "title": "ARCHITECTURE",
        "summary": "从0到1的全栈架构能力，技术选型与团队赋能。",
        "color": "text-pink-500",
        "borderColor": "group-hover:border-pink-500"
      },
      {
        "iconKey": "Factory",
        "title": "MANUFACTURING",
        "summary": "深耕制造业数字化，SaaS/CRM/LIMS系统专家。",
        "color": "text-purple-500",
        "borderColor": "group-hover:border-purple-500"
      },
      {
        "iconKey": "MessageSquare",
        "title": "INTEGRATION",
        "summary": "企业微信生态深度集成，打造高效协作闭环。",
        "color": "text-cyan-400",
        "borderColor": "group-hover:border-cyan-400"
      },
      {
        "iconKey": "Server",
        "title": "MICROSERVICES",
        "summary": "精通Spring/Golang体系，高并发分布式系统设计。",
        "color": "text-emerald-400",
        "borderColor": "group-hover:border-emerald-400"
      },
      {
        "iconKey": "Cloud",
        "title": "CLOUD NATIVE",
        "summary": "K8s容器化运维，多租户SaaS全球部署实战。",
        "color": "text-orange-500",
        "borderColor": "group-hover:border-orange-500"
      },
      {
        "iconKey": "Smartphone",
        "title": "MULTI-PLATFORM",
        "summary": "Vue3/小程序/后端全链路交付，极致敏捷开发。",
        "color": "text-violet-500",
        "borderColor": "group-hover:border-violet-500"
      },
      {
        "iconKey": "Bot",
        "title": "AI ENGINEERING",
        "summary": "智能机器人与数据平台，驱动业务智能化跃升。",
        "color": "text-blue-500",
        "borderColor": "group-hover:border-blue-500"
      },
      {
        "iconKey": "Zap",
        "title": "INNOVATION",
        "summary": "保持极客精神，将前沿技术转化为商业价值。",
        "color": "text-yellow-400",
        "borderColor": "group-hover:border-yellow-400"
      }
    ],
    "skillTags": [
      "JAVA", "SPRING", "VUE3", "GOLANG", "K8S", "SAAS", "MICROSERVICES", "AI/LLM", "DEVOPS", "REACT", "NEXTJS"
    ]
  },
  "portfolio": [
    {
      "company": "ZHOUNGLAI CORP",
      "items": [
        {
          "title": "CLOUD SAAS PLATFORM",
          "meta": "CORE DEV | 2022 - PRESENT",
          "tags": ["JAVA", "MICROSERVICES", "RBAC", "WORKFLOW"],
          "description": [
            "基于ServiceComb微服务架构的企业级SaaS多租户平台。",
            "核心引擎：元数据驱动配置、RBAC隔离、可视化工作流。",
            "集成中心：JWT分布式认证、多语言国际化、ESB主数据管理。"
          ]
        },
        {
          "title": "AI AGENT PLATFORM",
          "meta": "LEAD DEV | 2023 - PRESENT",
          "tags": ["LLM", "RAG", "AUTOMATION", "PYTHON"],
          "description": [
            "企业级大模型智能体平台，无缝整合OA、SAP核心数据。",
            "Agent自动化：智能问答、流程自动发起、外部情报采集。",
            "构建RAG知识库，实现数据驱动的智能决策辅助。"
          ]
        }
      ]
    },
    {
      "company": "MOYUANSHU TECH",
      "items": [
        {
          "title": "LOW-CODE PAAS",
          "meta": "ARCHITECT | 2020 - 2022",
          "tags": ["LOW-CODE", "DESIGN", "ENGINE"],
          "description": [
            "主导从0到1架构设计，实现业务模块零代码拖拽配置。",
            "动态表单引擎、高并发事件总线、规则编排系统落地。"
          ]
        },
        {
          "title": "DATAV & BI",
          "meta": "FULLSTACK | 2020",
          "tags": ["WEBGL", "BIG DATA", "ANALYTICS"],
          "description": [
            "亿级数据实时清洗与三维可视化渲染。",
            "移动端BI适配，支持多维下钻分析与实时监控预警。"
          ]
        }
      ]
    }
  ],
  "opensource": {
    "intro": {
      "title": "OPEN SOURCE",
      "introduction": "代码不只是工具，更是连接世界的语言。在开源社区，我探索技术的边界。"
    },
    "projects": [
      {
        "name": "XXL-JOB-ORACLE",
        "description": "基于XXL-JOB的Oracle适配扩展，解决企业级数据库兼容痛点。",
        "url": "https://github.com/Gigass/xxl-job-oracle"
      },
      {
        "name": "CRON-GEN",
        "description": "可视化Cron表达式生成器，不仅好用，而且好看。",
        "url": "https://github.com/Gigass/cronGen"
      },
      {
        "name": "MD-EXPORT-HELPER",
        "description": "Markdown高效导出工具，文档工作流的瑞士军刀。",
        "url": "https://github.com/Gigass/MarkdownExportHelper"
      },
      {
        "name": "LIQUID-RESUME",
        "description": "流体玻璃拟态简历模板，React + Tailwind 极致动效。",
        "url": "https://github.com/Gigass/configurable-resume-website-liquid-glass"
      },
      {
        "name": "MARKET-VISION",
        "description": "金融市场数据可视化分析工具，融合量化分析思维。",
        "url": "https://github.com/Gigass/MarketVision"
      }
    ],
    "moreProjects": {
      "text": "EXPLORE MORE",
      "buttonText": "GITHUB PROFILE",
      "url": "https://github.com/Gigass"
    }
  }
};

// --- ICON MAP ---
const IconMap = {
  Layers, Factory, MessageSquare, Server, Cloud, Smartphone, Bot, Zap, Database
};

// --- COMPONENTS ---

// 跑马灯组件 - 增加 py-4 以增加高度
const Marquee = ({ text, reverse = false }) => (
  <div className="relative flex overflow-x-hidden py-4 bg-cyan-400 text-black font-black tracking-widest uppercase text-sm select-none transform -skew-x-12 border-y-2 border-black">
    <div className={`animate-marquee whitespace-nowrap flex ${reverse ? 'flex-row-reverse' : ''}`}>
      {[...Array(10)].map((_, i) => (
        <span key={i} className="mx-8 flex items-center">
          <Zap size={12} className="mr-2 fill-black" /> {text}
        </span>
      ))}
    </div>
    <div className={`absolute top-0 py-4 animate-marquee2 whitespace-nowrap flex ${reverse ? 'flex-row-reverse' : ''}`}>
      {[...Array(10)].map((_, i) => (
        <span key={i} className="mx-8 flex items-center">
          <Zap size={12} className="mr-2 fill-black" /> {text}
        </span>
      ))}
    </div>
  </div>
);

const Background = () => (
  <div className="fixed inset-0 z-[-1] bg-[#030305]">
    {/* Grid Overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#232323_1px,transparent_1px),linear-gradient(to_bottom,#232323_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
    
    {/* Intense Blobs */}
    <div className="absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] rounded-full bg-purple-900/40 mix-blend-screen filter blur-[100px] animate-blob opacity-60" />
    <div className="absolute bottom-[-20%] right-[-20%] w-[80vw] h-[80vw] rounded-full bg-blue-900/40 mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 opacity-60" />
    <div className="absolute top-[40%] left-[30%] w-[50vw] h-[50vw] rounded-full bg-pink-900/30 mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000 opacity-50" />
    
    {/* Vignette */}
    <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/80"></div>
  </div>
);

const Navbar = ({ activeSection, scrollToSection }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      scrolled ? 'bg-black/80 backdrop-blur-lg border-white/10 py-4' : 'bg-transparent border-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-3xl font-black tracking-tighter italic cursor-pointer group relative"
          onClick={() => scrollToSection('home')}
        >
          <span className="text-white relative z-10 mix-blend-difference">CY.STUDIO</span>
          <div className="absolute -bottom-1 left-0 w-full h-2 bg-cyan-400 -skew-x-12 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </div>
        
        <div className="hidden md:flex items-center space-x-1">
          {data.layout.navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.to)}
              className={`px-6 py-2 text-sm font-bold tracking-wider uppercase transition-all skew-x-[-10deg] border border-transparent hover:border-cyan-400/50 hover:text-cyan-400 ${
                activeSection === item.to ? 'text-cyan-400 bg-white/5 border-cyan-400/30' : 'text-gray-400'
              }`}
            >
              <span className="block skew-x-[10deg]">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden">
    {/* Background Big Text */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none overflow-hidden flex flex-col items-center justify-center opacity-[0.03]">
      <h1 className="text-[20vw] font-black leading-none text-white whitespace-nowrap animate-pulse-slow">ENGINEER</h1>
      <h1 className="text-[20vw] font-black leading-none text-white whitespace-nowrap ml-[20vw]">ARCHITECT</h1>
    </div>

    <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
      {/* Left Content */}
      <div className="lg:col-span-7 space-y-8">
        {/* Status Bar */}
        <div className="flex items-center space-x-4 font-mono text-xs text-cyan-400">
          <div className="flex items-center px-2 py-1 border border-cyan-500/30 bg-cyan-500/10 rounded-sm">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping mr-2"></span>
            SYSTEM ONLINE
          </div>
          <div className="hidden sm:block text-gray-500">/// LOC: SUZHOU, CN</div>
          <div className="hidden sm:block text-gray-500">/// ID: CY-8080</div>
        </div>

        <div className="relative">
          <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter mix-blend-overlay">
            CHRIS<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 animate-gradient-x">YANG</span>
          </h1>
          {/* Glitch Decoration */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-cyan-400 opacity-50"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-purple-400 opacity-50"></div>
        </div>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed border-l-2 border-white/20 pl-6">
          {data.home.hero.description}
        </p>

        <div className="flex flex-wrap gap-3 pt-4">
          {data.home.skillTags.slice(0, 5).map((tag, idx) => (
            <span key={idx} className="px-4 py-2 bg-[#111] border border-gray-800 text-gray-300 text-xs font-bold font-mono hover:bg-cyan-400 hover:text-black hover:border-cyan-400 transition-all cursor-default uppercase">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right Visual (Holographic HUD) */}
      <div className="lg:col-span-5 relative h-[500px] hidden lg:block">
        <div className="absolute inset-0 border border-white/10 bg-white/[0.02] backdrop-blur-sm rounded-lg p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500 group">
            {/* HUD Corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500"></div>

            <div className="h-full w-full bg-black/40 grid grid-rows-6 gap-2 p-4 font-mono text-xs text-cyan-400/80">
                <div className="row-span-2 border border-cyan-500/20 p-2 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-cyan-400/50 animate-scan"></div>
                    <p className="text-white font-bold mb-2">TARGET_PROFILE</p>
                    <div className="flex justify-between">
                        <span>ROLE:</span><span>FULLSTACK_DEV</span>
                    </div>
                    <div className="flex justify-between">
                        <span>EXP:</span><span>SENIOR_LEVEL</span>
                    </div>
                </div>
                <div className="row-span-3 border border-cyan-500/20 p-2 flex items-end relative group-hover:bg-cyan-500/10 transition-colors">
                     <div className="w-1/4 h-[40%] bg-purple-500/50 mx-1 animate-pulse"></div>
                     <div className="w-1/4 h-[70%] bg-cyan-500/50 mx-1 animate-pulse animation-delay-2000"></div>
                     <div className="w-1/4 h-[50%] bg-pink-500/50 mx-1 animate-pulse animation-delay-4000"></div>
                     <div className="w-1/4 h-[90%] bg-white/50 mx-1"></div>
                     <div className="absolute top-2 right-2 text-[10px]">STATS.LOG</div>
                </div>
                <div className="row-span-1 bg-cyan-500/20 flex items-center justify-center animate-pulse">
                    &gt;&gt;&gt; INITIALIZING CONNECTION &lt;&lt;&lt;
                </div>
            </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 w-full z-20">
       <Marquee text="JAVA • KUBERNETES • REACT • AI AGENTS • CLOUD NATIVE •" />
    </div>
  </section>
);

const Advantages = () => (
  <section className="py-32 relative z-10 bg-[#030305]">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
        <div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Core <span className="text-stroke text-transparent stroke-white">Modules</span></h2>
        </div>
        <div className="font-mono text-cyan-400 text-sm mt-4 md:mt-0">
            [CAPABILITIES_MATRIX_V2.0]
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.home.advantages.map((adv, index) => {
          const IconComponent = IconMap[adv.iconKey] || Code;
          return (
            <div key={index} className="group relative p-5 bg-[#0a0a0a] border border-white/10 hover:border-transparent transition-all duration-300 overflow-hidden min-h-[200px] flex flex-col">
              {/* Neon Border on Hover */}
              <div className={`absolute inset-0 border-2 border-transparent ${adv.borderColor} opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10`}></div>
              
              {/* Hover Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-20">
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-2 bg-white/5 rounded-none group-hover:bg-white/10 transition-colors ${adv.color}`}>
                        <IconComponent size={24} strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-[10px] text-gray-600 group-hover:text-white/50">0{index + 1}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 uppercase font-mono tracking-tight">
                    {adv.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                    {adv.summary}
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-2 right-2">
                <Crosshair className="w-3 h-3 text-gray-800 group-hover:text-white/20 transition-colors" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="project" className="py-32 relative z-10 overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none"></div>
    
    <div className="container mx-auto px-6">
      <div className="flex items-center mb-20">
         <Activity className="mr-4 text-cyan-400" />
         <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
           Project <span className="text-purple-500">Deployments</span>
         </h2>
      </div>

      <div className="space-y-24">
        {data.portfolio.map((group, groupIdx) => (
          <div key={groupIdx} className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent opacity-20 hidden md:block"></div>
            
            <h3 className="text-xl font-mono font-bold text-cyan-400 mb-8 flex items-center">
              <span className="w-8 h-[2px] bg-cyan-400 mr-4"></span>
              {group.company}
            </h3>

            <div className="grid grid-cols-1 gap-12">
              {group.items.map((item, idx) => (
                <div key={idx} className="group relative bg-[#080808] border border-white/5 hover:border-white/20 p-8 md:p-10 transition-all duration-500 hover:bg-[#0e0e0e]">
                  
                  <div className="flex flex-col lg:flex-row gap-10">
                    <div className="lg:w-1/3 flex flex-col justify-between">
                        <div>
                            <h4 className="text-3xl font-black text-white mb-2 uppercase italic group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                            <span className="text-xs font-mono text-gray-500 block mb-6 border-b border-white/10 pb-4">{item.meta}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, tIdx) => (
                                <span key={tIdx} className="text-[10px] font-bold px-2 py-1 bg-white/5 text-gray-400 border border-white/5 uppercase tracking-wider group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-all">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="lg:w-2/3 relative">
                         <div className="absolute -top-4 -right-4 text-white/5 text-9xl font-black select-none pointer-events-none group-hover:text-white/10 transition-colors">
                             0{idx + 1}
                         </div>
                         <ul className="space-y-4 relative z-10 mt-4">
                            {item.description.map((desc, dIdx) => (
                                <li key={dIdx} className="flex items-start text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-gray-100">
                                    <ArrowUpRight className="w-5 h-5 mr-4 text-purple-500 flex-shrink-0 mt-0.5" />
                                    {desc}
                                </li>
                            ))}
                         </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const OpenSource = () => (
  <section id="opensource" className="py-32 relative z-10 bg-gradient-to-b from-[#030305] to-black">
    <div className="container mx-auto px-6">
      <div className="text-center max-w-4xl mx-auto mb-20">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-white/10 bg-white/5 mb-6 animate-spin-slow">
             <Disc className="text-white w-8 h-8" />
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 uppercase leading-none">
          Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Source</span>
        </h2>
        <p className="text-gray-400 font-mono text-sm md:text-base">{data.opensource.intro.introduction}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {data.opensource.projects.map((project, idx) => (
          <a 
            key={idx} 
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-8 bg-[#0a0a0a] border border-white/10 hover:border-green-400 transition-all duration-300 relative overflow-hidden hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 bg-green-400 text-black text-[10px] font-bold px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                GIT_REPO
            </div>
            <div className="mb-6 text-green-400 group-hover:scale-110 transition-transform origin-left">
              <Terminal size={32} />
            </div>
            <h3 className="text-xl font-black text-white mb-3 uppercase">{project.name}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 min-h-[60px] group-hover:text-gray-300 transition-colors">
              {project.description}
            </p>
            <div className="flex items-center text-xs font-mono text-white/40 group-hover:text-green-400 transition-colors">
              <span>&gt; ACCESS_CODE</span>
              <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">_INIT</span>
            </div>
          </a>
        ))}
      </div>
      
      <div className="flex justify-center">
         <a href={data.opensource.moreProjects.url} target="_blank" className="group relative inline-flex items-center px-10 py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-cyan-400 transition-colors overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <span className="relative z-10 flex items-center">
                <Github className="mr-3" size={20} />
                {data.opensource.moreProjects.buttonText}
            </span>
         </a>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSend = () => {
    const subject = `MSG: ${formData.name}`;
    const body = `NAME: ${formData.name}\nEMAIL: ${formData.email}\n\nCONTENT:\n${formData.message}`;
    const mailtoUrl = `mailto:1547654938@qq.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    try {
        const link = document.createElement('a');
        link.href = mailtoUrl;
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (e) { window.location.href = mailtoUrl; }
  };

  return (
    <section id="contact" className="py-32 relative z-10 overflow-hidden bg-black">
       {/* Footer Marquee */}
       <div className="absolute top-0 w-full">
         <Marquee text="LET'S CONNECT • START A PROJECT • HIRE ME •" reverse={true} />
       </div>

      <div className="container mx-auto px-6 pt-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.8]">
              GET<br/><span className="text-stroke-thin text-transparent stroke-white hover:text-white transition-colors duration-500">IN TOUCH</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-md mb-12 font-mono border-l-4 border-cyan-500 pl-6">
              Available for freelance opportunities and full-time roles.
            </p>
            
            <div className="space-y-8 font-mono text-sm">
               <div className="group flex items-center space-x-6 cursor-pointer hover:text-cyan-400 transition-colors text-white">
                 <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:bg-white/10 group-hover:border-cyan-400">
                   <Mail size={20} />
                 </div>
                 <div>
                   <p className="text-xs text-gray-500 mb-1">MAIL_TO</p>
                   <p className="text-lg">1547654938@qq.com</p>
                 </div>
               </div>
               
               <div className="group flex items-center space-x-6 text-white">
                 <div className="w-12 h-12 border border-white/20 flex items-center justify-center group-hover:bg-white/10 group-hover:border-purple-400 transition-colors">
                   <MessageCircle size={20} />
                 </div>
                 <div>
                   <p className="text-xs text-gray-500 mb-1">WECHAT_ID</p>
                   <p className="text-lg">o1547654938</p>
                 </div>
               </div>
            </div>
          </div>
          
          <div className="bg-[#111] border border-white/10 p-8 md:p-12 relative">
              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-4 h-4 bg-white"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-white"></div>

              <h3 className="text-2xl font-black text-white mb-8 uppercase flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                  Transmission
              </h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
                 <div className="group">
                   <label className="block text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-widest group-focus-within:text-cyan-400">Identity</label>
                   <input 
                     type="text" 
                     value={formData.name}
                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                     className="w-full bg-black border-b border-white/20 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors font-mono" 
                     placeholder="YOUR NAME" 
                   />
                 </div>
                 <div className="group">
                   <label className="block text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-widest group-focus-within:text-cyan-400">Return Path</label>
                   <input 
                     type="email" 
                     value={formData.email}
                     onChange={(e) => setFormData({...formData, email: e.target.value})}
                     className="w-full bg-black border-b border-white/20 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors font-mono" 
                     placeholder="EMAIL ADDRESS" 
                   />
                 </div>
                 <div className="group">
                   <label className="block text-[10px] font-bold text-gray-500 mb-2 uppercase tracking-widest group-focus-within:text-cyan-400">Data Packet</label>
                   <textarea 
                     rows="4" 
                     value={formData.message}
                     onChange={(e) => setFormData({...formData, message: e.target.value})}
                     className="w-full bg-black border-b border-white/20 py-3 text-white focus:border-cyan-400 focus:outline-none transition-colors font-mono resize-none" 
                     placeholder="ENTER MESSAGE..."
                   ></textarea>
                 </div>
                 <button 
                   type="submit"
                   className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.2em] hover:bg-cyan-400 hover:text-black transition-all flex items-center justify-center group mt-4"
                 >
                   Execute Send
                   <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                 </button>
              </form>
          </div>
        </div>
        
        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-gray-600 uppercase tracking-widest">
          <p>COPYRIGHT © 2024 CHRIS YANG. SYSTEM SECURE.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
             <span className="hover:text-white cursor-pointer">Github</span>
             <span className="hover:text-white cursor-pointer">LinkedIn</span>
             <span className="hover:text-white cursor-pointer">Juejin</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );
    ['home', 'project', 'opensource', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans antialiased text-gray-200 selection:bg-cyan-400 selection:text-black bg-[#030305]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=JetBrains+Mono:wght@400;700&display=swap');
        
        body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        
        /* Custom Animations */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 10s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }
        .animate-marquee2 { animation: marquee 30s linear infinite; animation-delay: -15s; }

        @keyframes scan {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
        .animate-scan { animation: scan 3s linear infinite; }

        @keyframes gradient-x {
            0% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
            100% { background-position: 0% 50% }
        }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 5s ease infinite; }

        /* Utilities */
        .text-stroke { -webkit-text-stroke: 1px white; }
        .text-stroke-thin { -webkit-text-stroke: 1px rgba(255,255,255,0.3); }
        
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #000; }
        ::-webkit-scrollbar-thumb { background: #333; }
        ::-webkit-scrollbar-thumb:hover { background: #06b6d4; }
      `}</style>
      
      <Background />
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <Hero />
        <Advantages />
        <Projects />
        <OpenSource />
        <Contact />
      </main>
    </div>
  );
}