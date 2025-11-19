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
  Activity,
  Quote,
  Hash,
  ChevronDown,
  X,
  Maximize,
  MousePointer2
} from 'lucide-react';

import profileImg from './assets/IMG_7605.jpg';

// --- DATA SOURCE (No Changes) ---
const data = {
  "layout": {
    "navigation": [
      { "name": "HOME", "to": "home" },
      { "name": "PROJECTS", "to": "project" },
      { "name": "OPEN SOURCE", "to": "opensource" },
      { "name": "CONTACT", "to": "contact" }
    ]
  },
  "home": {
    "hero": {
      "title": "Chris Yang",
      "subtitle": "资深Java工程师 | 技术平台构建者",
      "description": "具备多年企业级平台研发和数字化转型经验，主导从0到1的技术架构设计与核心系统落地，精通制造业SaaS、CRM、LIMS等业务场景。熟悉全栈开发、云原生架构和DevOps，拥有企业微信生态集成及AI智能平台项目实践。善于团队建设与协作，能将前沿技术高效转化为实际业务价值，持续推动企业创新和效率提升。"
    },
    "advantages": [
      {
        "iconKey": "Layers",
        "title": "技术平台全周期主导",
        "summary": "具备技术选型、架构设计到项目落地的全栈能力。",
        "details": [
          "主导核心平台从0到1的构建。",
          "搭建技术团队，推动知识传承。",
          "数字化转型技术支撑。"
        ],
        "color": "text-neo-pink",
        "borderColor": "border-neo-pink",
        "span": "md:col-span-2 md:row-span-2"
      },
      {
        "iconKey": "Factory",
        "title": "制造业数字化",
        "summary": "大型制造企业SaaS、CRM、LIMS等系统研发。",
        "details": [
          "业务流程重构与自动化。",
          "端到端创新解决方案。"
        ],
        "color": "text-neo-purple",
        "borderColor": "border-neo-purple",
        "span": "md:col-span-1 md:row-span-1"
      },
      {
        "iconKey": "MessageSquare",
        "title": "企微生态集成",
        "summary": "主导企业微信与OA、CRM系统高效集成。",
        "details": [
          "企微生态系统集成。",
          "移动化解决方案。"
        ],
        "color": "text-neo-cyan",
        "borderColor": "border-neo-cyan",
        "span": "md:col-span-1 md:row-span-1"
      },
      {
        "iconKey": "Server",
        "title": "微服务架构落地",
        "summary": "精通Java/Spring体系、Golang高并发。",
        "details": [
          "熟练数据库、缓存、MQ。",
          "高可用架构演进。"
        ],
        "color": "text-neo-green",
        "borderColor": "border-neo-green",
        "span": "md:col-span-2 md:row-span-1"
      },
      {
        "iconKey": "Cloud",
        "title": "云原生与DevOps",
        "summary": "主导平台容器化、K8s运维与多租户SaaS部署。",
        "details": [
          "CI/CD流水线建设。",
          "全球化部署实践。"
        ],
        "color": "text-orange-500",
        "borderColor": "border-orange-500",
        "span": "md:col-span-1 md:row-span-2"
      },
      {
        "iconKey": "Smartphone",
        "title": "全栈开发",
        "summary": "覆盖前端Vue、小程序至后端服务。",
        "details": [
          "前后端分离与集成。",
          "优化用户体验。"
        ],
        "color": "text-violet-500",
        "borderColor": "border-violet-500",
        "span": "md:col-span-1 md:row-span-1"
      },
      {
        "iconKey": "Bot",
        "title": "AI工程化",
        "summary": "参与AI数据平台、智能机器人项目。",
        "details": [
          "机器学习业务应用。",
          "数据驱动智能决策。"
        ],
        "color": "text-blue-500",
        "borderColor": "border-blue-500",
        "span": "md:col-span-2 md:row-span-1"
      },
      {
        "iconKey": "Zap",
        "title": "持续创新",
        "summary": "保持技术热情，将创新转化为业务价值。",
        "details": [
          "解决复杂问题。",
          "优化技术能力。"
        ],
        "color": "text-neo-yellow",
        "borderColor": "border-neo-yellow",
        "span": "md:col-span-3 md:row-span-1"
      }
    ],
    "skillTags": [
      "Java", "Spring", "Vue3", "Golang", "K8s", "SaaS", "微服务", "数据库", "AI", "企业微信", "全栈", "云原生", "自动化", "数据可视化", "移动端"
    ]
  },
  "portfolio": [
    {
      "company": "中来股份",
      "items": [
        {
          "title": "云中来企业级SaaS平台",
          "meta": "2022.07-至今 | 核心开发",
          "tags": ["Java", "Spring", "Vue3", "微服务架构", "SaaS平台", "多租户", "JWT认证", "国际化", "接口集成", "工作流引擎", "元数据管理", "RBAC权限", "消息推送", "数据可视化", "打印模板"],
          "description": [
            "云中来平台是基于华为ServiceComb微服务架构打造的企业级SaaS多租户平台。平台分为核心系统组件和外围功能组件，并具备强大接口集成、国际化、多租户及安全管理能力，为企业应用数字化、云化、集成化提供坚实技术底座。",
            "核心系统组件包括：meta元数据查询与配置（提供字段定义、业务字典、枚举、实体模型等统一查询配置，支持业务模型灵活变更和敏捷适配）、基础功能配置（系统参数、业务参数、菜单、页面、模块等统一配置，支持业务部门自主完成场景调整）、RBAC人员架构组件（组织架构树、人员管理、岗位配置、角色权限分配，多租户数据隔离和权限分层）、消息通知组件（多渠道推送系统通知、业务提醒、审批消息，支持自定义消息模板和推送方式）、工作流组件（各类审批流、业务流、自定义流程设计，拖拉拽式流程建模，灵活配置业务流节点和流转规则）。",
            "外围功能组件涵盖：配置大屏与拖拽式配置（可视化大屏搭建工具，支持多数据源接入和动态展示）、配置打印与打印设计模块（自定义业务表单、标签、发票等文档打印模板，基于Word模板自助上传和自动解析）、ESB主数据管理（企业级主数据统一管理与标准化，实现各业务系统间主数据同步、分发、校验、溯源）。",
            "接口与集成中心集成各类主流应用系统（OA、SAP、EMAIL、LDAP、FSSC、V6000、SOLARTOWN等），包含接口配置、数据抛送、接口文档自动生成、数据源和加解密规则定义、接口日志和运维权限管理等功能，实现接口统一注册、调用、监控和安全管控。",
            "平台全面集成JWT认证机制实现分布式身份认证与授权，支持多语言文本、模板、日期、货币等国际化配置，各租户可按需加载不同语言包动态切换界面语言，为大型集团、跨国企业及中大型机构提供灵活、安全、高可扩展的数字平台能力，助力数字化和智能化转型。"
          ]
        },
        {
          "title": "来宝AI智能体平台",
          "meta": "2023.01-至今 | 核心开发",
          "tags": ["AI大模型", "智能体平台", "系统集成", "流程自动化", "知识库管理", "爬虫Agent", "多系统协同", "数字化转型"],
          "description": [
            "来宝AI项目是基于大模型AI能力开发的一体化智能体平台，全面整合了OA、SAP、云中来等企业核心系统的数据资源。",
            "平台支持多样化AI对话与智能问答，内置知识库管理，可智能检索企业知识并发起相关OA流程。",
            "来宝AI通过对接、调用OA和SAP，实现了如请假、出差、会议等业务流程的自动发起和审批流转，同时支持现有宿舍管理、CRM、LIMS等业务系统的信息查询与流程一键发起。",
            "平台还融合了爬虫Agent能力，结合开源爬虫项目，能够自动化采集外部信息（如欧盟、美国封禁公司名单等），进一步夯实数据广度。",
            "整体上，来宝AI项目实现了企业级知识融合、流程自动化、信息智能搜集与多系统协同，为企业数字化转型与智能办公提供了高效支持。"
          ]
        },
        {
          "title": "CRM客户管理系统",
          "meta": "2022.07-至今 | 设计&开发",
          "tags": ["Java", "Spring", "Vue3", "CRM系统", "销售管理", "客户关系", "数据分析", "流程管理", "工作台"],
          "description": [
            "CRM系统（客户关系管理系统）是一套支持企业销售、客户和服务流程的信息化平台。",
            "系统集成了客户资料管理、联系人、线索、商机、合同、回款、售后等核心功能，实现了从客户开发、销售跟进、合同签署、回款管理到售后服务的全过程数字化管理。",
            "CRM还能对销售机会、活动、任务、审批流程进行跟踪，支持联系人、客户池、竞争对手、供应商、产品、报价等信息维护。",
            "通过工作台、仪表盘、数据分析等模块，实现销售流程可视化、客户数据完整记录和团队高效协作。",
            "此外，CRM系统还涵盖了任务提醒、线索公海、合同审批、回款进度、售后登记等辅助功能，帮助企业全面提升客户管理效率与服务质量。"
          ]
        },
        {
          "title": "实验室管理系统",
          "meta": "2022.07-至今 | 设计&开发",
          "tags": ["Java", "Spring", "Vue3", "LIMS系统", "质量管理", "流程建模", "数据可视化", "权限管理", "模板配置"],
          "description": [
            "LIMS系统（实验室信息管理系统）是一套全面支撑实验室日常业务和质量管理的信息化平台。",
            "集成用户与组织权限管理、人员培训档案、供应商及其评价体系等基础管理内容，规范不同用户和部门的职责分工。",
            "涵盖委托单、样品、测试任务、测试单等核心业务流程，实现从样品接收、库管、流转，到测试项目分配、测试数据采集、过程跟踪、任务状态监控的全过程数字化管理。",
            "支持测试单、项目、设备等模板化配置，提升标准化和自动化水平，并通过消息通知、流程变更、签名与印章管理等辅助功能，保障测试环节的规范合规与责任可追溯。",
            "质量监督、稽核、人员培训、老化测试及变更管理等模块，进一步完善实验室质量体系，实现实验室业务高效协同、数据完整可追溯、风险可控与管理持续改进的目标。"
          ]
        }
      ]
    },
    {
      "company": "魔元术（苏州）信息科技有限公司",
      "items": [
        {
          "title": "魔元术PASS快速开发平台",
          "meta": "2020.04-2022.06 | 架构设计",
          "tags": ["Java", "Spring", "拖拽式开发", "数据集成", "架构设计"],
          "description": [
            "主导平台从零到一的整体架构设计，落地微服务模块化开发理念，深度抽象并封装了上千种业务功能模块，助力实现低代码/零代码拖拽式配置与业务快速组合，极大提升开发效率和灵活性。",
            "搭建统一元数据管理、动态表单、业务规则引擎、流程编排、可视化配置等核心子系统，支持多租户场景和多组织并发，通过平台化支撑客户差异化需求，降低研发和维护成本。",
            "负责平台底层数据流、权限模型、事件总线及高并发异步任务机制的设计与实现，实现全价值链数据采集、流转、分析和一体化管理。平台接口开放，支持与第三方系统的高效集成。",
            "通过技术赋能和高度抽象，帮助企业在短周期内定制复杂业务流程，推动业务数字化转型与敏捷创新。"
          ]
        },
        {
          "title": "魔元术移动BI",
          "meta": "2020.01-2020.04 | 项目重构",
          "tags": ["Java", "BI", "移动端", "数据可视化"],
          "description": [
            "负责移动BI大数据分析平台的架构升级与重构，搭建高性能数据集成与展示通道，提升数据实时性与多端适配能力。",
            "系统可灵活对接企业各业务线数据源，实现ETL清洗、聚合与缓存加速，保障业务分析与展示的高可用与高并发。",
            "前端采用响应式和移动优先设计，支持PC与主流移动终端无缝切换，满足管理层随时随地查看核心指标与洞察。",
            "实现多维度分析、报表钻取、仪表盘搭建、动态权限等高阶数据分析需求，全面支撑业务决策的数据化演进。"
          ]
        },
        {
          "title": "魔元术数据可视化大屏",
          "meta": "2020.04-2020.06 | 后端开发",
          "tags": ["Java", "数据可视化", "大屏", "三维展示"],
          "description": [
            "参与大屏项目后端建设，实现多源异构数据的实时采集、校验、处理与多维聚合，为运维及管理层决策提供一站式可视化支持。",
            "后端负责数据流管理、权限校验、接口优化及三维全景大屏的动态数据支撑，确保亿级数据量下的高性能渲染与流畅交互。",
            "结合业务实际需求，定制监控预警、统计分析与三维可视化联动，实现数据与业务场景的深度结合，有力支撑企业运营及智能决策。",
            "优化弹性扩展和安全机制，为客户提供可靠高可用的数据可视化平台，提升数据管理和洞察能力。"
          ]
        }
      ]
    },
    {
      "company": "其它项目",
      "items": [
        {
          "title": "公益项目公众号\"爪盟星\"",
          "meta": "2019.02-2020.01 | 前后端开发/架构",
          "tags": ["Java", "微信公众号", "前后端一体化"],
          "description": [
            "作为核心成员参与公益项目“爪盟星”从方案设计到上线运维全过程，负责数据结构建模、接口开发和系统安全。",
            "主导并优化前端界面与交互规范，推动团队采用组件化开发，提升产品交互体验和开发效率。",
            "实现自动化消息通知、活动报名、数据统计、用户身份管理等全链路业务功能，实现信息流通与资源对接。",
            "负责微信生态系统的对接与合规审核，保证系统高可用性和数据安全，为公益项目持续高效运营提供技术保障。"
          ]
        },
        {
          "title": "锦e行银行内部管理系统",
          "meta": "2018.08-2019.01 | 前后端开发",
          "tags": ["Java", "多端开发", "银行管理系统"],
          "description": [
            "独立负责银行绩效管理系统的前后端开发，涵盖需求分析、架构设计、编码与多端适配上线。",
            "系统覆盖PC、iOS、Android等平台，支持银行内部多岗位绩效指标自动计算、KPI管理与人员评分，提升考核效率与透明度。",
            "推动数据与流程自动化，集成数据权限、审批工作流、统计报表和消息通知，提升了业务协同效率及数据安全管理。",
            "保障系统高并发、高安全、稳定运行，积极响应多端改版升级与运维支持，助力银行数字化流程转型。"
          ]
        },
        {
          "title": "百万管家智慧社区",
          "meta": "2017.12-2018.08 | 后端开发",
          "tags": ["Java", "社区服务", "微信网页"],
          "description": [
            "负责“百万管家智慧社区”云平台后端开发，实现物业调度、账单缴费、报修、社区O2O、微店等业务全模块支撑。",
            "基于微服务与分布式架构，优化了居民、商户、物业三方互动流程，提升了收费、报修、服务响应的自动化和可追索性。",
            "集成微信网页端，实现入口便捷、通知到人、智能客服、服务广覆盖。开发周期内完成多业务快速迭代和数据合规安全管控。",
            "通过数据统计与服务洞察，提升社区管理智能化水平和住户满意度，推动智慧社区运营数字化升级。"
          ]
        }
      ]
    }
  ],
  "opensource": {
    "intro": {
      "title": "开源之旅：我的代码足迹与创新探索",
      "introduction": "作为一名热爱开源文化的技术爱好者，我始终相信代码的力量不仅在于解决问题，更在于连接世界各地的开发者共同创造价值。我的开源旅程源于对技术的热情和对社区的信任，每一个项目都承载着我对软件工程的思考与实践。",
      "principles": {
        "title": "我的开源理念",
        "description": "开源不仅是一种开发模式，更是一种精神。我致力于:",
        "points": [
          "解决实际问题：从 xxl-job-oracle 的数据库兼容性扩展，到 cronGen 的任务调度工具优化，我的项目始终聚焦于解决开发者在实际工作中遇到的痛点。",
          "知识共享：通过 MarkdownExportHelper 等工具，促进知识的高效传播与展示。",
          "技术创新：在 configurable-resume-website-liquid-glass 中融合现代前端技术与创意设计，探索用户体验的新可能。",
          "跨领域融合：MarketVision 项目将数据分析、人工智能与金融领域知识相结合，体现了我对跨学科创新的追求。"
        ]
      },
      "community": {
        "title": "社区参与",
        "content": "我相信开源的核心在于社区。通过贡献代码、参与讨论、提交改进建议，以及 fork 有潜力的项目（如 yolo-ios-app）进行个性化开发，我积极融入全球开发者生态系统。每一次的 PR 与 issue 讨论都是学习与成长的机会。"
      },
      "personal_growth": {
        "title": "开源与个人成长",
        "content": "开源项目是我技术成长的重要催化剂。它们不仅锻炼了我的编程能力，还培养了项目管理、文档写作和沟通协作的综合素质。更重要的是，开源精神教会我如何在竞争与合作之间寻找平衡，如何在个人兴趣与社区需求之间做出选择。"
      },
      "conclusion": "通过这些开源项目，我期待与更多志同道合的开发者建立联系，共同推动技术创新，为软件生态贡献一份力量。开源之路没有终点，唯有不断探索与分享，才能实现代码的最大价值。",
      "quote": "代码让世界更美好，开源让创新更普及。"
    },
    "projects": [
      {
        "name": "xxl-job-oracle",
        "repo": "Gigass/xxl-job-oracle",
        "url": "https://github.com/Gigass/xxl-job-oracle",
        "description": "基于xxl-job的Oracle数据库支持"
      },
      {
        "name": "cronGen",
        "repo": "Gigass/cronGen",
        "url": "https://github.com/Gigass/cronGen",
        "description": "Cron表达式生成器，支持Web界面配置"
      },
      {
        "name": "MarkdownExportHelper",
        "repo": "Gigass/MarkdownExportHelper",
        "url": "https://github.com/Gigass/MarkdownExportHelper",
        "description": "Markdown导出助手，支持多种格式转换"
      },
      {
        "name": "configurable-resume-website-liquid-glass",
        "repo": "Gigass/configurable-resume-website-liquid-glass",
        "url": "https://github.com/Gigass/configurable-resume-website-liquid-glass",
        "description": "可配置的简历网站，使用液态玻璃效果"
      },
      {
        "name": "MarketVision",
        "repo": "Gigass/MarketVision",
        "url": "https://github.com/Gigass/MarketVision",
        "description": "市场分析与可视化工具"
      },
      {
        "name": "yolo-ios-app",
        "repo": "Gigass/yolo-ios-app",
        "url": "https://github.com/Gigass/yolo-ios-app",
        "description": "基于YOLO的iOS目标检测应用"
      }
    ],
    "moreProjects": {
      "text": "想要探索更多我的项目吗？",
      "buttonText": "访问我的 GitHub 主页",
      "url": "https://github.com/Gigass"
    }
  }
};

// --- ICON MAP ---
const IconMap = {
  Layers, Factory, MessageSquare, Server, Cloud, Smartphone, Bot, Zap, Database
};

// --- COMPONENTS ---

// Custom Cursor
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      {/* Main Crosshair */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75 ease-out hidden md:block"
        style={{ left: position.x, top: position.y, transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})` }}
      >
        <div className="relative">
          <div className="w-8 h-8 border border-cyan-400/80 rounded-full flex items-center justify-center">
            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
          </div>
          {/* Rotating ring */}
          <div className="absolute inset-[-4px] border-t border-b border-cyan-400/30 rounded-full w-10 h-10 animate-spin-slow"></div>
        </div>
      </div>
    </>
  );
};

// Reveal Wrapper for Scroll Animation
const RevealOnScroll = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

// 跑马灯组件
const Marquee = ({ text, reverse = false }) => (
  <div className="relative flex overflow-x-hidden py-4 bg-cyan-400 text-black font-black tracking-widest uppercase text-sm select-none transform -skew-x-0 border-y-2 border-black">
    <div className={`animate-marquee whitespace-nowrap flex ${reverse ? 'flex-row-reverse' : ''}`}>
      {[...Array(10)].map((_, i) => (
        <span key={i} className="mx-8 flex items-center">
          <Zap size={12} className="mr-2 fill-black" /> {text}
        </span>
      ))}
    </div>
  </div>
);

const Background = () => (
  <div className="fixed inset-0 z-[-1] bg-neo-black">
    {/* Dot Grid */}
    <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>

    {/* Random Glitch Lines */}
    <div className="absolute top-1/4 left-0 w-full h-[2px] bg-neo-cyan opacity-20 animate-pulse"></div>
    <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-neo-purple opacity-20 animate-pulse animation-delay-2000"></div>
  </div>
);

const Navbar = ({ activeSection, scrollToSection }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-4 border-white bg-neo-black py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div
          className="text-4xl font-black italic cursor-pointer group relative"
          onClick={() => scrollToSection('home')}
        >
          <span className="text-white relative z-10 group-hover:text-neo-cyan transition-colors">CY.STUDIO</span>
          <div className="absolute top-1 left-1 w-full h-full bg-neo-purple -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {data.layout.navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.to)}
              className={`px-6 py-2 text-sm font-bold tracking-wider uppercase border-2 border-transparent hover:border-white hover:bg-neo-cyan hover:text-black hover:shadow-neo transition-all ${activeSection === item.to ? 'bg-white text-black border-white shadow-neo' : 'text-gray-400'
                }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center pt-32 pb-28 md:pb-32 relative overflow-hidden bg-neo-black">
    {/* Big Background Text */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none overflow-hidden flex flex-col items-center justify-center opacity-10">
      <h1 className="text-[15vw] font-black leading-none text-transparent text-stroke">ENGINEER</h1>
      <h1 className="text-[15vw] font-black leading-none text-transparent text-stroke ml-[20vw]">ARCHITECT</h1>
    </div>

    <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
      {/* Left Content */}
      <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
        {/* Status Bar */}
        <div className="inline-flex items-center space-x-4 font-mono text-xs text-black bg-neo-cyan px-4 py-2 border-2 border-white shadow-neo transform -rotate-1">
          <span className="w-3 h-3 bg-black rounded-full animate-ping"></span>
          <span className="font-bold">SYSTEM ONLINE</span>
          <span className="hidden sm:block">/// LOC: SUZHOU, CN</span>
        </div>

        <div className="relative">
          <h1 className="text-7xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter">
            CHRIS<br />
            <span className="text-neo-purple text-stroke-sm">YANG</span>
          </h1>
          {/* Deco */}
          <div className="absolute -top-6 -left-6 w-16 h-16 border-t-4 border-l-4 border-neo-green"></div>
        </div>

        {/* Mobile Profile Card: shown under CHRIS YANG on small screens */}
        <div className="block lg:hidden mt-8 max-w-md mx-auto">
          <div className="border-4 border-white bg-black p-2 shadow-neo-lg transform rotate-3">
            <div className="border-2 border-white p-6 bg-neo-black relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-neo-pink text-black font-bold px-2 py-1 text-xs">V2.0</div>
              <div className="w-full aspect-square bg-[#111] border-2 border-white mb-4 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${profileImg})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="font-mono text-neo-green text-sm space-y-2">
                <div className="flex justify-between border-b border-white/20 pb-1">
                  <span>ROLE:</span><span>FULLSTACK_DEV</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-1">
                  <span>EXP:</span><span>SENIOR_LEVEL</span>
                </div>
                <div className="flex justify-between">
                  <span>STATUS:</span><span className="animate-pulse">AVAILABLE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-black p-6 shadow-neo transform rotate-1 max-w-2xl">
          <p className="font-bold text-black text-xl mb-2 uppercase">{data.home.hero.subtitle}</p>
          <p className="text-sm md:text-base text-black font-mono leading-relaxed">{data.home.hero.description}</p>
        </div>

        <div className="flex flex-wrap gap-3 pt-4">
          {data.home.skillTags.slice(0, 8).map((tag, idx) => (
            <span key={idx} className="px-4 py-2 bg-black border-2 border-white text-white text-xs font-bold font-mono hover:bg-neo-yellow hover:text-black hover:border-black hover:shadow-neo transition-all cursor-default uppercase">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right Visual (Profile Card) – desktop only */}
      <div className="lg:col-span-5 relative mt-10 lg:mt-0 max-w-md mx-auto lg:max-w-none order-1 lg:order-2 hidden lg:block">
        <div className="border-4 border-white bg-black p-2 shadow-neo-lg transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <div className="border-2 border-white p-6 bg-neo-black relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-neo-pink text-black font-bold px-2 py-1 text-xs">V2.0</div>
            <div className="w-full aspect-square bg-[#111] border-2 border-white mb-4 flex items-center justify-center overflow-hidden relative">
              {/* Placeholder for Avatar or Graphic */}
              <div className="absolute inset-0 bg-cover bg-center transition-all duration-500" style={{ backgroundImage: `url(${profileImg})` }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="font-mono text-neo-green text-sm space-y-2">
              <div className="flex justify-between border-b border-white/20 pb-1">
                <span>ROLE:</span><span>FULLSTACK_DEV</span>
              </div>
              <div className="flex justify-between border-b border-white/20 pb-1">
                <span>EXP:</span><span>SENIOR_LEVEL</span>
              </div>
              <div className="flex justify-between">
                <span>STATUS:</span><span className="animate-pulse">AVAILABLE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 w-full z-20 border-t-4 border-white bg-neo-yellow text-black">
      <Marquee text="JAVA • KUBERNETES • REACT • AI AGENTS • CLOUD NATIVE •" />
    </div>
  </section>
);

const Advantages = () => (
  <section className="py-32 relative z-10 bg-neo-black text-white">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b-4 border-white pb-8">
        <div>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">Core <span className="text-transparent text-stroke-cyan">Modules</span></h2>
        </div>
        <div className="font-mono text-black bg-neo-cyan px-2 py-1 border-2 border-black text-sm mt-4 md:mt-0 shadow-neo-sm">
          [CAPABILITIES_MATRIX_V2.0]
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
        {data.home.advantages.map((adv, index) => {
          const IconComponent = IconMap[adv.iconKey] || Code;
          return (
            <RevealOnScroll key={index} delay={index * 50}>
              <div className={`group relative h-full bg-black border-4 border-white p-6 hover:shadow-neo-purple transition-all duration-300 flex flex-col justify-between ${adv.span}`}>

                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 border-2 border-white bg-black group-hover:bg-white group-hover:text-black transition-colors ${adv.color}`}>
                    <IconComponent size={32} strokeWidth={2} />
                  </div>
                  <span className="font-mono text-xl font-black text-white/20 group-hover:text-white transition-colors">0{index + 1}</span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white mb-2 uppercase leading-none">
                    {adv.title}
                  </h3>
                  <p className="text-sm font-mono text-gray-400 mb-4 border-l-2 border-white pl-3">
                    {adv.summary}
                  </p>
                </div>

                <ul className="space-y-1 border-t-2 border-white pt-3 mt-auto">
                  {adv.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start text-xs font-bold text-white">
                      <span className="mr-2 text-neo-purple">&gt;</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          )
        })}
      </div>
    </div>
  </section>
);

// --- Project Components ---

// Compact Card Component
const ProjectCard = ({ item, index, onClick }) => (
  <div
    className="group relative bg-black border-4 border-white p-6 transition-all duration-300 hover:bg-neo-yellow hover:border-black hover:text-black cursor-pointer flex flex-col justify-between min-h-[280px] shadow-neo hover:shadow-neo-lg hover:-translate-y-2"
    onClick={onClick}
  >
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 border-2 border-white text-white group-hover:border-black group-hover:text-black transition-colors">
          <Database size={24} />
        </div>
        <span className="text-xs font-mono font-bold text-gray-500 group-hover:text-black">0{index + 1}</span>
      </div>

      <h4 className="text-2xl font-black text-white mb-2 uppercase italic leading-none group-hover:text-black transition-colors line-clamp-2">
        {item.title}
      </h4>
      <div className="text-xs font-mono text-gray-400 mb-4 pb-3 border-b-2 border-white/20 group-hover:border-black/20 group-hover:text-black/70 flex justify-between">
        <span>{item.meta.split('|')[0]}</span>
        <span className="font-bold opacity-0 group-hover:opacity-100 transition-opacity">&gt; VIEW</span>
      </div>

      <p className="text-sm text-gray-400 leading-relaxed line-clamp-3 mb-4 group-hover:text-black font-bold">
        {item.description[0]}
      </p>
    </div>

    <div className="relative z-10 mt-auto">
      <div className="flex flex-wrap gap-1.5">
        {item.tags.slice(0, 3).map((tag, tIdx) => (
          <span key={tIdx} className="text-[10px] font-black px-2 py-1 bg-white text-black border border-black uppercase tracking-wider group-hover:bg-black group-hover:text-white">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Full Screen Modal Component
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-neo-cyan/90 backdrop-blur-sm animate-fade-in" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[80vh] md:max-h-[90vh] bg-neo-black border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-4 border-black bg-white">
          <div>
            <h3 className="text-3xl md:text-5xl font-black text-black uppercase italic tracking-tighter flex items-center gap-3">
              {project.title}
              <span className="text-xs font-bold not-italic font-mono text-white bg-black px-2 py-1">SECURE_FILE</span>
            </h3>
            <p className="text-sm font-mono text-gray-600 mt-2 uppercase font-bold">{project.meta}</p>
          </div>
          <button onClick={onClose} className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors group">
            <X size={32} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 custom-scrollbar bg-neo-white text-black">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="text-xs font-black px-3 py-1 bg-neo-yellow border-2 border-black uppercase tracking-wider shadow-neo-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-4">
            <h4 className="text-lg font-black text-black uppercase tracking-widest border-b-4 border-black pb-2 inline-block">Project Briefing</h4>
            <ul className="space-y-4">
              {project.description.map((desc, idx) => (
                <li key={idx} className="flex items-start text-black font-medium leading-relaxed text-lg">
                  <ArrowUpRight className="w-6 h-6 mr-3 text-neo-purple flex-shrink-0 mt-1" strokeWidth={3} />
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Decoration */}
        <div className="p-3 bg-black border-t-4 border-black flex justify-between text-xs font-mono text-neo-green uppercase font-bold">
          <span>ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
          <span>ENCRYPTED CONNECTION</span>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="project" className="py-32 relative z-10 overflow-hidden bg-neo-black">
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-20">
          <Activity className="mr-4 text-neo-green" size={40} />
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Project <span className="text-neo-green">Deployments</span>
          </h2>
        </div>

        <div className="space-y-20">
          {data.portfolio.map((group, groupIdx) => (
            <div key={groupIdx} className="relative">
              <h3 className="text-2xl font-mono font-black text-white mb-8 flex items-center pl-4 border-l-8 border-neo-green bg-white/5 py-2">
                {group.company}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {group.items.map((item, idx) => (
                  <RevealOnScroll key={idx} delay={idx * 100}>
                    <ProjectCard
                      item={item}
                      index={idx}
                      onClick={() => setSelectedProject(item)}
                    />
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Render Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

const OpenSource = () => (
  <section id="opensource" className="py-32 relative z-10 bg-neo-black text-white">
    <div className="container mx-auto px-6">

      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-none border-4 border-white bg-neo-green mb-6 animate-spin-slow shadow-neo">
          <Disc className="text-black w-10 h-10" />
        </div>
        <h2 className="text-6xl md:text-8xl font-black text-white mb-8 uppercase leading-none">
          Open <span className="text-transparent text-stroke">Source</span>
        </h2>
        <p className="text-gray-300 font-mono text-lg font-bold">{data.opensource.intro.introduction}</p>
      </div>

      {/* Manifesto Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {/* Principles */}
        <div className="p-8 bg-black text-white border-4 border-white shadow-neo-purple relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-20"><Hash size={100} /></div>
          <h3 className="text-3xl font-black text-neo-green mb-6 uppercase flex items-center"><Terminal className="mr-4" size={32} /> {data.opensource.intro.principles.title}</h3>
          <ul className="space-y-4 relative z-10">
            {data.opensource.intro.principles.points.map((point, idx) => (
              <li key={idx} className="text-sm font-mono text-gray-300 leading-relaxed flex">
                <span className="text-neo-green mr-2">&gt;</span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          {/* Community */}
          <div className="p-8 bg-black border-4 border-white shadow-neo">
            <h3 className="text-2xl font-black text-white mb-4 uppercase">{data.opensource.intro.community.title}</h3>
            <p className="text-base font-bold text-gray-300 leading-relaxed">{data.opensource.intro.community.content}</p>
          </div>
          {/* Growth */}
          <div className="p-8 bg-neo-yellow border-4 border-white shadow-neo">
            <h3 className="text-2xl font-black text-black mb-4 uppercase">{data.opensource.intro.personal_growth.title}</h3>
            <p className="text-base font-bold text-black leading-relaxed">{data.opensource.intro.personal_growth.content}</p>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {data.opensource.projects.map((project, idx) => (
          <RevealOnScroll key={idx} delay={idx * 100}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 bg-black border-4 border-white hover:bg-white hover:text-black transition-all duration-300 relative overflow-hidden hover:-translate-y-2 shadow-neo hover:shadow-neo-green"
            >
              <div className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-2 py-1 group-hover:bg-neo-green group-hover:text-black transition-colors">
                GIT_REPO
              </div>
              <div className="mb-6 text-white group-hover:text-neo-green transition-colors">
                <Terminal size={40} />
              </div>
              <h3 className="text-2xl font-black mb-3 uppercase">{project.name}</h3>
              <p className="text-sm font-bold text-gray-400 leading-relaxed mb-6 min-h-[60px] group-hover:text-gray-600 transition-colors">
                {project.description}
              </p>
              <div className="flex items-center text-xs font-mono text-white/40 group-hover:text-neo-green transition-colors">
                <span>&gt; ACCESS_CODE</span>
                <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">_INIT</span>
              </div>
            </a>
          </RevealOnScroll>
        ))}
      </div>

      <div className="flex justify-center">
        <a href={data.opensource.moreProjects.url} target="_blank" className="group relative inline-flex items-center px-12 py-5 bg-black text-white font-black uppercase tracking-widest border-4 border-white hover:bg-white hover:text-black hover:border-black hover:shadow-neo transition-all">
          <span className="relative z-10 flex items-center text-xl">
            <Github className="mr-3" size={24} />
            {data.opensource.moreProjects.buttonText}
          </span>
        </a>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleSend = () => {
    const subject = `MSG: ${formData.name}`;
    const body = `NAME: ${formData.name}\n\nCONTENT:\n${formData.message}`;
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
    <section id="contact" className="py-32 relative z-10 overflow-hidden bg-neo-black">
      {/* Footer Marquee */}
      <div className="absolute top-0 w-full border-b-4 border-white bg-neo-pink text-black">
        <Marquee text="LET'S CONNECT • START A PROJECT • HIRE ME •" reverse={true} />
      </div>

      <div className="container mx-auto px-6 pt-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.8]">
              GET<br /><span className="text-transparent text-stroke hover:text-white transition-colors duration-500">IN TOUCH</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-md mb-12 font-mono border-l-8 border-neo-cyan pl-6 bg-white/5 py-4">
              Available for freelance opportunities and full-time roles.
            </p>

            <div className="space-y-8 font-mono text-sm">
              <div className="group flex items-center space-x-6 cursor-pointer hover:text-neo-cyan transition-colors text-white">
                <div className="w-16 h-16 border-4 border-white flex items-center justify-center group-hover:bg-neo-cyan group-hover:text-black group-hover:border-neo-cyan shadow-neo">
                  <Mail size={32} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1 font-bold">MAIL_TO</p>
                  <p className="text-2xl font-bold">1547654938@qq.com</p>
                </div>
              </div>

              <div className="group flex items-center space-x-6 text-white">
                <div className="w-16 h-16 border-4 border-white flex items-center justify-center group-hover:bg-neo-purple group-hover:text-black group-hover:border-neo-purple shadow-neo transition-colors">
                  <MessageCircle size={32} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1 font-bold">WECHAT_ID</p>
                  <p className="text-2xl font-bold">o1547654938</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-4 border-black p-8 md:p-12 relative shadow-neo-lg transform rotate-1 hover:rotate-0 transition-transform">
            <h3 className="text-4xl font-black text-black mb-8 uppercase flex items-center">
              <span className="w-4 h-4 bg-neo-green border-2 border-black rounded-full mr-4 animate-pulse"></span>
              Transmission
            </h3>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
              <div className="group">
                <label className="block text-xs font-black text-black mb-2 uppercase tracking-widest">Identity</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-neo-white border-4 border-black py-4 px-4 text-black focus:bg-neo-yellow focus:outline-none transition-colors font-mono font-bold"
                  placeholder="YOUR NAME"
                />
              </div>
              <div className="group">
                <label className="block text-xs font-black text-black mb-2 uppercase tracking-widest">Data Packet</label>
                <textarea
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-neo-white border-4 border-black py-4 px-4 text-black focus:bg-neo-yellow focus:outline-none transition-colors font-mono font-bold resize-none"
                  placeholder="ENTER MESSAGE..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-black text-white font-black uppercase tracking-[0.2em] hover:bg-neo-cyan hover:text-black hover:shadow-neo transition-all flex items-center justify-center group mt-4 border-4 border-transparent hover:border-black"
              >
                Execute Send
                <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} strokeWidth={3} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-32 pt-8 border-t-4 border-white flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-500 uppercase tracking-widest font-bold">
          <p>COPYRIGHT © 2024 CHRIS YANG. SYSTEM SECURE.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer hover:underline decoration-2 underline-offset-4">Github</span>
            <span className="hover:text-white cursor-pointer hover:underline decoration-2 underline-offset-4">LinkedIn</span>
            <span className="hover:text-white cursor-pointer hover:underline decoration-2 underline-offset-4">Juejin</span>
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
    <div className="font-sans antialiased text-gray-200 selection:bg-cyan-400 selection:text-black bg-[#030305] cursor-none">


      <CustomCursor />
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
