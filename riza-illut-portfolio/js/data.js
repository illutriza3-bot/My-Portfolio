/* ============================================================
   PORTFOLIO CONTENT — edit this file to update the site
   No HTML/CSS knowledge needed for most changes. Just edit the
   text between the quotes below, save, and re-deploy.

   "icon" fields reference a shape in the ICONS library in
   js/app.js — see the list of available names in the comment
   at the top of that file.
   ============================================================ */

const SITE_DATA = {

  person: {
    name: "Riza O. Illut",
    firstName: "Riza",
    lastName: "Illut",
    initials: "RI",
    role: "Technical & Administrative Virtual Assistant",
    roleBadge: "IT & Technical Support · Customer Operations",
    tagline: "Customer Operations · Technical Support · Workflow Automation",
    location: "Cebu, Philippines",
    email: "illutriza3@gmail.com",
    phone: "0946 923 5967",
    photo: "assets/riza-profile.jpg",
    // Set to false to hide the availability badge in the hero.
    availableForWork: true,
    availabilityLabel: "Open to remote opportunities",
    linkedin: "", // add your LinkedIn URL here, e.g. "https://linkedin.com/in/yourname"
    github: ""    // add your GitHub URL here
  },

  hero: {
    headline: "Riza",
    headlineAccent: "Illut",
    subhead: "Eight years across technical support, software engineering, and business operations — I'm the person teams call when something breaks and someone needs to fix it, document it, and make sure it doesn't happen again.",
    stats: [
      { icon: "clock", value: "8+", label: "Years experience" },
      { icon: "layers", value: "10", label: "Roles held" },
      { icon: "grid", value: "9", label: "Tools & platforms" }
    ]
  },

  about: {
    intro: "A versatile professional who combines technical depth with clear communication to support teams and clients efficiently.",
    paragraphs: [
      "My career didn't start with a plan to become a virtual assistant — it started in a computer lab, moved through a rural health unit's IT desk, then into HR, local government finance, corporate administration, airline customer service, enterprise software engineering, and now technical support for a trading-platform consultancy.",
      "Each move added a layer: I can read a system error and I can also read a spreadsheet of branch inventory. I can calm down a frustrated customer and I can also configure a SharePoint permission. That combination — technical literacy plus operational discipline — is what I bring to a team that needs more than someone to follow a script.",
      "I'm most useful to businesses that have outgrown ad-hoc support: too many tickets in too many inboxes, manual processes that should be automated, or a customer-facing system nobody on the team fully owns. That's the gap I fill."
    ],
    highlights: [
      { icon: "monitor", title: "Technical proficiency", body: "Proficient across ServiceNow, Jira, SharePoint, Microsoft 365, and trading-platform support tools." },
      { icon: "folder", title: "Administrative execution", body: "Skilled in records management, regulatory documentation, procurement, and process tracking." },
      { icon: "globe", title: "Remote-ready", body: "Experienced supporting international clients — including United Airlines customers — across time zones." },
      { icon: "handshake", title: "Customer-first mindset", body: "Built a track record resolving escalations and disputes while keeping the customer informed throughout." }
    ]
  },

  values: [
    { icon: "shield", title: "Technical problem-solving", body: "Troubleshooting trading platforms, debugging applications, investigating tickets in ServiceNow and Jira, and restoring systems when something breaks." },
    { icon: "headset", title: "Customer operations", body: "Ticket and case management, order processing, chargeback and dispute handling, escalation coordination across support, product, and engineering." },
    { icon: "folder", title: "Business operations", body: "Records management, regulatory documentation, procurement coordination, report consolidation, and multi-branch administrative support." },
    { icon: "gear", title: "Workflow automation", body: "Power Automate and Zapier for repeatable processes, plus the process documentation that makes automation maintainable instead of fragile." }
  ],

  services: {
    intro: "A well-rounded skill set built from real-world experience across IT, operations, and customer-facing roles.",
    categories: [
      {
        name: "Customer & operations support",
        icon: "headset",
        items: ["Customer support & client service", "Email & chat support", "Order processing", "Chargeback & dispute processing", "Ticket & case management", "Records & documentation", "Report consolidation"]
      },
      {
        name: "Technical support",
        icon: "shield",
        items: ["Technical troubleshooting", "Issue investigation & resolution", "ServiceNow & Jira", "MetaTrader 5 Manager / TradeLocker", "Shopify & WooCommerce support", "SharePoint administration", "User access & permissions", "Software testing & debugging"]
      },
      {
        name: "Workflow & automation",
        icon: "gear",
        items: ["Power Automate", "Zapier", "Workflow optimization", "Process documentation", "CRM support", "Operational tracking", "Data entry & information handling"]
      },
      {
        name: "Administrative support",
        icon: "folder",
        items: ["Email & calendar management", "Procurement & inventory coordination", "HR & payroll administration", "Regulatory documentation", "Research", "Digital content support"]
      }
    ]
  },

  tools: [
    { name: "ServiceNow", category: "Support", icon: "ticket", detail: "Managing and tracking technical support cases from intake through investigation and resolution." },
    { name: "Jira", category: "Support", icon: "board", detail: "Monitoring and tracking reported issues alongside ServiceNow for cross-team visibility." },
    { name: "MetaTrader 5 Manager", category: "Trading", icon: "candles", detail: "Supporting trading-platform operations, including account and platform-related technical issues." },
    { name: "TradeLocker", category: "Trading", icon: "trend", detail: "Assisting with trading-platform operations and troubleshooting alongside MT5 Manager." },
    { name: "Shopify", category: "E-commerce", icon: "bag", detail: "Troubleshooting store integrations and platform issues to keep client storefronts running." },
    { name: "WooCommerce", category: "E-commerce", icon: "cart", detail: "Supporting store functionality and resolving platform issues for e-commerce clients." },
    { name: "SharePoint", category: "Productivity", icon: "share", detail: "Administering sites, provisioning access, and managing configurations across Microsoft 365 and Azure." },
    { name: "Microsoft 365", category: "Productivity", icon: "grid", detail: "Day-to-day productivity, collaboration, and administration across mail, files, and Teams." },
    { name: "Power Automate", category: "Automation", icon: "flow", detail: "Building workflow automations to reduce manual, repetitive process steps." },
    { name: "Zapier", category: "Automation", icon: "bolt", detail: "Connecting apps and automating handoffs between tools for smaller, lightweight workflows." },
    { name: "SQL", category: "Development", icon: "database", detail: "Querying and working with structured data as part of application support and testing." },
    { name: "PowerShell", category: "Development", icon: "terminal", detail: "Scripting for system administration and configuration tasks." },
    { name: "C#", category: "Development", icon: "code", detail: "Used in developing and maintaining software applications during my time as a software engineer." },
    { name: "C++", category: "Development", icon: "code", detail: "Software development and application maintenance." },
    { name: "JavaScript", category: "Development", icon: "code", detail: "Front-end and application logic as part of software engineering work." },
    { name: "PHP", category: "Development", icon: "code", detail: "Server-side scripting for application development and maintenance." },
    { name: "HTML & CSS", category: "Development", icon: "browser", detail: "Building and maintaining web-facing content and interfaces, including this site." }
  ],

  experience: [
    {
      role: "Technical Support Specialist",
      company: "Quant Tekel Consultancy Ltd.",
      dates: "Jan 2026 – Present",
      current: true,
      icon: "shield",
      summary: "Handling technical support cases and trading-platform troubleshooting alongside order and dispute processing.",
      details: [
        "Process customer orders and maintain supporting documentation to keep fulfillment and operational tracking organized.",
        "Investigate and process chargeback cases, coordinating dispute information and resolution activities with relevant teams.",
        "Monitor and manage technical support cases through ServiceNow and Jira, tracking reported issues through investigation and resolution.",
        "Support trading-platform operations using MetaTrader 5 Manager and TradeLocker, assisting with account and platform-related technical concerns.",
        "Troubleshoot server-related and trading-platform issues to help restore expected system and platform functionality.",
        "Maintain operational records across order, support, trading, and dispute workflows, improving information visibility for ongoing cases."
      ]
    },
    {
      role: "Customer Support Specialist",
      company: "Tallant Asia Inc.",
      dates: "Jul 2025 – Dec 2025",
      current: false,
      icon: "headset",
      summary: "Resolved customer inquiries and coordinated escalations while maintaining detailed case records.",
      details: [
        "Resolved customer inquiries and service issues while maintaining accurate interaction and follow-up records.",
        "Documented customer concerns, actions taken, and resolutions to support consistent case follow-up and internal visibility.",
        "Coordinated escalations with internal teams to move complex customer issues toward resolution."
      ]
    },
    {
      role: "L&R Support T1 Premium Agent",
      company: "Supporting Enterprise",
      dates: "Nov 2024 – Feb 2025",
      current: false,
      icon: "chat",
      summary: "Live-chat technical support for a Shopify loyalty app, troubleshooting integrations and escalating to engineering.",
      details: [
        "Provided live-chat technical support for Yotpo Loyalty & Referrals, resolving product questions and platform usage concerns.",
        "Troubleshot Shopify integration issues to help clients restore and maintain expected store functionality.",
        "Guided clients through Yotpo L&R features and usage practices supporting customer engagement and retention.",
        "Documented troubleshooting steps, client interactions, and resolutions to improve case continuity and knowledge sharing.",
        "Coordinated complex technical escalations with Customer Success, Product, and Engineering teams."
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "Accenture Inc.",
      dates: "Aug 2022 – Aug 2024",
      current: false,
      icon: "code",
      summary: "Administered SharePoint environments and developed and maintained software applications for client projects.",
      details: [
        "Administered SharePoint sites and configurations based on client and project requirements.",
        "Provisioned SharePoint sites and managed user access, permissions, and configurations across SharePoint, Azure, and Microsoft 365.",
        "Developed, tested, and maintained software applications based on client requirements.",
        "Investigated application issues through troubleshooting and debugging to support stable system operation.",
        "Supported software deployment, configuration, and post-production maintenance.",
        "Worked with technical teams to deliver end-to-end software solutions."
      ]
    },
    {
      role: "Customer Service Representative",
      company: "Wipro Philippines",
      dates: "Nov 2021 – May 2022",
      current: false,
      icon: "plane",
      summary: "Supported United Airlines customers across reservations, disruptions, and loyalty program inquiries.",
      details: [
        "Supported United Airlines customers through phone, email, and chat across reservations and travel-related concerns.",
        "Processed flight reservations, ticket changes, cancellations, and rebooking requests according to applicable procedures.",
        "Resolved cases involving flight disruptions, refunds, delays, and compensation while applying airline policies.",
        "Handled MileagePlus inquiries involving points, redemption, and membership status.",
        "Applied airline procedures and government travel regulations when processing customer requests."
      ]
    },
    {
      role: "Admin Officer",
      company: "Cebu Andok's Corporation",
      dates: "May 2020 – Aug 2021",
      current: false,
      icon: "folder",
      summary: "Coordinated administrative operations and regulatory documentation across multiple branches.",
      details: [
        "Coordinated daily administrative operations across multiple Cebu branches and supported communication between head office and branch managers.",
        "Managed office supply inventory, procurement, and distribution to support branch requirements.",
        "Maintained business permits, licenses, and regulatory documentation to keep branch records current.",
        "Prepared documentation for LGUs, BIR, DOLE, and other regulatory bodies.",
        "Consolidated branch sales, inventory, and manpower reports for centralized head-office reporting.",
        "Maintained administrative records across multiple operational areas to support organized reporting and documentation."
      ]
    },
    {
      role: "Barangay Treasurer",
      company: "LGU – Barangay Balidbid, Santa Fe",
      dates: "Jul 2019 – Apr 2020",
      current: false,
      icon: "coins",
      summary: "Managed local government financial records, collections, and COA-compliant reporting.",
      details: [
        "Managed collection of taxes, fees, and other revenues while maintaining supporting financial records and official receipts.",
        "Maintained bookkeeping records and prepared monthly and quarterly financial statements.",
        "Coordinated fiscal matters and financial planning with the Barangay Captain and Council.",
        "Maintained financial documentation in accordance with Commission on Audit (COA) requirements and procedures."
      ]
    },
    {
      role: "Computer Laboratory Assistant",
      company: "University of San Carlos – North Campus",
      dates: "Mar 2018 – Mar 2019",
      current: false,
      icon: "monitor",
      summary: "Maintained lab hardware and software and provided technical assistance to students and faculty.",
      details: [
        "Maintained computer hardware, software, and peripherals to support reliable laboratory operations.",
        "Provided technical assistance to students and faculty using computer equipment and software.",
        "Troubleshot hardware and software issues and performed routine maintenance and software updates."
      ]
    },
    {
      role: "HRMO Staff",
      company: "LGU – Santa Fe",
      dates: "Jul 2017 – Feb 2018",
      current: false,
      icon: "people",
      summary: "Supported recruitment administration, employee records, and payroll-related processing.",
      details: [
        "Supported recruitment administration through vacancy posting, application screening, and interview scheduling.",
        "Maintained employee files, databases, and records with controlled access to confidential information.",
        "Processed payroll-related data covering attendance, overtime, and government contributions.",
        "Prepared HR correspondence, memoranda, and notices while maintaining organized HR documentation."
      ]
    },
    {
      role: "IT Staff – Rural Health Unit",
      company: "LGU – Santa Fe",
      dates: "Nov 2016 – Jun 2017",
      current: false,
      icon: "pulse",
      summary: "Installed and maintained systems for a rural health unit and supported DOH-mandated health information systems.",
      details: [
        "Installed, configured, and maintained computer, software, and network systems supporting health-unit operations.",
        "Troubleshot hardware, software, and internet issues affecting staff workflows.",
        "Managed electronic health records and health information systems with controlled system access and data handling.",
        "Supported implementation of DOH-mandated systems, including CHITS and PhilHealth E-Claims."
      ]
    }
  ],

  education: {
    degree: "Bachelor of Science in Information Technology — Major in Programming",
    school: "Madridejos Community College, Cebu",
    dates: "2013 – 2017",
    icon: "cap"
  },

  certifications: [
    { name: "Certified Lean Six Sigma – White Belt", date: "January 2024", icon: "medal" },
    { name: "Graphic Design Concepts (48 hours)", date: "November 2024", icon: "palette" },
    { name: "Creative Web Design (102 hours)", date: "October–November 2023", icon: "browser" },
    { name: "Employers Forum", date: "2018", icon: "globe" },
    { name: "4th International River Summit", date: "2018", icon: "globe" },
    { name: "PhilHealth Seminar", date: "2020", icon: "globe" }
  ],

  // These are SAMPLE case studies showing the format — replace each one with a
  // real project as you document them. Set "sample: false" once you do.
  projects: [
    {
      sample: true,
      category: "Technical Support",
      icon: "shield",
      title: "Restoring a trading platform after a sync failure",
      problem: "A client's MetaTrader 5 account stopped reflecting executed trades on the client terminal, raising concerns about account accuracy.",
      approach: "Traced the issue through server-side logs, isolated it to a delayed sync between the trade server and terminal cache, and coordinated a manual resync while documenting the root cause.",
      outcome: "Account data was restored within the same shift, and the steps were documented so the same issue could be resolved faster if it recurred.",
      tags: ["MetaTrader 5", "Server logs", "Root cause analysis"]
    },
    {
      sample: true,
      category: "Workflow Automation",
      icon: "gear",
      title: "Automating a manual dispute-tracking process",
      problem: "Chargeback cases were tracked across separate spreadsheets and email threads, making it easy for a case to fall through without anyone noticing.",
      approach: "Built a Power Automate flow that created a tracked record the moment a dispute case was opened, then routed status updates to the right people automatically.",
      outcome: "Every dispute became visible in one place from intake to resolution, cutting down on manual follow-up emails.",
      tags: ["Power Automate", "Dispute tracking", "Process design"]
    },
    {
      sample: true,
      category: "E-commerce Operations",
      icon: "bag",
      title: "Fixing a broken Shopify–loyalty app integration",
      problem: "A client's loyalty points weren't syncing after checkout, so customers weren't receiving rewards for completed purchases.",
      approach: "Walked through the integration settings with the client, identified a misconfigured webhook, and corrected it while confirming the fix against test orders.",
      outcome: "Points began syncing correctly again, and the client received a short written summary of what happened and how to spot it early next time.",
      tags: ["Shopify", "Webhooks", "Client communication"]
    },
    {
      sample: true,
      category: "Customer Operations",
      icon: "headset",
      title: "Untangling a stalled escalation",
      problem: "A customer's case had bounced between two teams for several days without resolution, and the customer was becoming frustrated.",
      approach: "Reviewed the full case history, identified the missing piece of information both teams were waiting on, and coordinated directly with the customer to close the gap.",
      outcome: "The case was resolved within a day of taking ownership of it, and the customer received a clear final update instead of another handoff.",
      tags: ["Escalation management", "Case ownership", "Cross-team coordination"]
    }
  ],

  // Placeholder testimonials — replace with real feedback as you collect it.
  testimonials: [
    { placeholder: true, name: "Future colleague name", position: "Position, Company", quote: "Genuine feedback about working with Riza will appear here." },
    { placeholder: true, name: "Future colleague name", position: "Position, Company", quote: "Genuine feedback about working with Riza will appear here." },
    { placeholder: true, name: "Future colleague name", position: "Position, Company", quote: "Genuine feedback about working with Riza will appear here." }
  ]
};
