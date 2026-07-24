const PUBLICATIONS = [
  {
    year: 2026,
    venue: "ICPP 2026 Demo",
    status: { en: "Author-reported acceptance", zh: "作者报告已接收" },
    title: "BriskSnapshot: A Live Demo of Join-Backed Semantic Windows for Streaming AI Pipelines",
    authors: "Ziao Wang, Shuhao Zhang",
    summary: {
      en: "A live demonstration of join-backed semantic windows for streaming AI pipelines, built on the BriskFlow data-system core.",
      zh: "基于 BriskFlow 数据系统内核，演示面向流式 AI Pipeline 的 Join 驱动语义窗口。",
    },
    evidenceNote: {
      en: "The authors report acceptance to the ICPP 2026 demo track. A public conference program or proceedings record is not yet available.",
      zh: "作者报告该工作已被 ICPP 2026 Demo Track 接收；会议公开议程或论文集记录尚未发布。",
    },
    repository: "https://github.com/DataSysResearch/BriskFlow",
  },
  {
    year: 2026,
    venue: "SIGMOD 2026",
    status: { en: "Published", zh: "已发表" },
    title: "CANDOR-Bench: Benchmarking In-Memory Continuous ANNS under Dynamic Open-World Streams",
    authors: "Mingqi Wang, Junyao Dong, Zhuoyan Wu, Jun Liu, Ruicheng Zhang, Jianjun Zhao, Ruipeng Wan, Xinyan Lei, Shuhao Zhang, Bolong Zheng, Haikun Liu, Xiaofei Liao, Hai Jin",
    summary: {
      en: "A benchmark for continuous approximate nearest-neighbor search under distribution drift, noisy updates, and concurrent access.",
      zh: "面向分布漂移、噪声更新与并发访问的连续近似最近邻检索基准。",
    },
    publication: "https://doi.org/10.1145/3786630",
    evidence: "https://2026.sigmod.org/sigmod_program_detailed.shtml",
    repository: "https://github.com/DataSysResearch/CANDOR-Bench",
  },
  {
    year: 2026,
    venue: "ICDE 2026",
    status: { en: "Accepted", zh: "已接收" },
    title: "GRACE: Alleviating Reconstruction Cost in Dynamic Graph Processing Systems",
    authors: "Hongru Gao, Shuhao Zhang, Xiaofei Liao, Hai Jin",
    summary: {
      en: "Property-guided reservation and cousin-aware rebalancing reduce reconstruction cost in dynamic graph systems.",
      zh: "通过属性引导的预留与 cousin-aware 重平衡降低动态图系统的重构开销。",
    },
    evidence: "https://icde2026.github.io/accepted-papers.html",
    repository: "https://github.com/DataSysResearch/GRACE",
  },
  {
    year: 2026,
    venue: "WWW 2026",
    status: { en: "Published", zh: "已发表" },
    title: "StreamFP: Fingerprint-guided Data Selection for Efficient Stream Learning",
    authors: "Changwu Li, Tongjun Shi, Shuhao Zhang, Binbin Chen, Bingsheng He, Xiaofei Liao, Hai Jin",
    summary: {
      en: "Compact model fingerprints guide coreset selection and buffer updates for efficient learning over evolving streams.",
      zh: "利用紧凑模型指纹指导核心集选择与缓冲区更新，提升持续演化数据流上的学习效率。",
    },
    publication: "https://doi.org/10.1145/3774904.3792584",
    repository: "https://github.com/DataSysResearch/StreamFP",
  },
  {
    year: 2025,
    venue: "TKDE 2025",
    status: { en: "Published", zh: "已发表" },
    title: "Scalable Transactional Stream Processing on Multicore Processors",
    authors: "Jianjun Zhao, Yancan Mao, Zhonghao Yang, Haikun Liu, Shuhao Zhang",
    summary: {
      en: "The journal extension of MorphStream adds generalized window processing and support for non-deterministic state access.",
      zh: "MorphStream 的期刊扩展，加入通用窗口处理与非确定性状态访问支持。",
    },
    publication: "https://doi.org/10.1109/TKDE.2025.3556741",
    repository: "https://github.com/DataSysResearch/MorphStream",
  },
  {
    year: 2025,
    venue: "ICDE 2025",
    status: { en: "Published", zh: "已发表" },
    title: "Scalable Machine Learning for Real-Time Fault Diagnosis in Industrial IoT Cooling Roller Systems",
    authors: "Dandan Zhao, Karthick Sharma, Yuxin Qi, Qixun Liu, Shuhao Zhang",
    summary: {
      en: "SRTFD combines coreset selection, global balancing, and pseudo-label learning for high-velocity industrial streams.",
      zh: "SRTFD 面向高速工业数据流，结合核心集选择、全局平衡与伪标签学习。",
    },
    publication: "https://doi.org/10.1109/ICDE65448.2025.00328",
    repository: "https://github.com/DataSysResearch/SRTFD",
  },
  {
    year: 2024,
    venue: "TKDE 2024",
    status: { en: "Published", zh: "已发表" },
    title: "CStream: Parallel Data Stream Compression on Multicore Edge Devices",
    authors: "Xianzhi Zeng, Shuhao Zhang",
    summary: {
      en: "A hardware-conscious framework for parallel stream compression across algorithms and multicore edge configurations.",
      zh: "面向多种压缩算法与多核边缘配置的硬件感知并行流压缩框架。",
    },
    publication: "https://doi.org/10.1109/TKDE.2024.3386862",
    repository: "https://github.com/DataSysResearch/CStream",
  },
  {
    year: 2024,
    venue: "SIGMOD 2024",
    status: { en: "Published", zh: "已发表" },
    title: "PECJ: Stream Window Join on Disorder Data Streams with Proactive Error Compensation",
    authors: "Xianzhi Zeng, Shuhao Zhang, Hongbin Zhong, Hao Zhang, Mian Lu, Zhao Zheng, Yuqiang Chen",
    summary: {
      en: "Proactive error compensation balances accuracy and latency for window joins over out-of-order streams.",
      zh: "通过主动误差补偿，在乱序流窗口连接中平衡准确性与延迟。",
    },
    publication: "https://doi.org/10.1145/3639268",
    repository: "https://github.com/DataSysResearch/PECJ",
  },
  {
    year: 2024,
    venue: "NeurIPS 2024",
    status: { en: "Published", zh: "已发表" },
    title: "LibAMM: Empirical Insights into Approximate Computing for Accelerating Matrix Multiplication",
    authors: "Xianzhi Zeng, Wenchao Jiang, Shuhao Zhang",
    summary: {
      en: "A broad empirical study and benchmark suite for approximate matrix multiplication algorithms and workloads.",
      zh: "面向近似矩阵乘算法与工作负载的大规模实证研究和基准套件。",
    },
    publication: "https://doi.org/10.52202/079017-1935",
    repository: "https://github.com/DataSysResearch/LibAMM",
  },
  {
    year: 2024,
    venue: "VLDB Journal 2024",
    status: { en: "Published", zh: "已发表" },
    title: "A Survey on Transactional Stream Processing",
    authors: "Shuhao Zhang, Juan Soto, Volker Markl",
    summary: {
      en: "A taxonomy of transactional stream-processing requirements, models, system designs, and open research challenges.",
      zh: "系统梳理事务流处理的需求、模型、系统设计与开放研究问题。",
    },
    publication: "https://doi.org/10.1007/s00778-023-00814-z",
    repository: "https://github.com/DataSysResearch/MorphStream",
  },
  {
    year: 2024,
    venue: "ICDE 2024",
    status: { en: "Published", zh: "已发表" },
    title: "Fast Parallel Recovery for Transactional Stream Processing on Multicores",
    authors: "Jianjun Zhao, Haikun Liu, Shuhao Zhang, Zhuohui Duan, Xiaofei Liao, Hai Jin, Yu Zhang",
    summary: {
      en: "Parallel recovery techniques for restoring transactional stream-processing state efficiently on multicore systems.",
      zh: "面向多核事务流处理系统的高效并行状态恢复技术。",
    },
    publication: "https://doi.org/10.1109/ICDE60146.2024.00122",
    repository: "https://github.com/DataSysResearch/MorphStream",
  },
  {
    year: 2024,
    venue: "PACMMOD 2024",
    status: { en: "Published", zh: "已发表" },
    title: "Enabling Adaptive Sampling for Intra-Window Join: Simultaneously Optimizing Quantity and Quality",
    authors: "Xilin Tang, Feng Zhang, Shuhao Zhang, Yani Liu, Bingsheng He, Xiaoyong Du",
    summary: {
      en: "Adaptive sampling for intra-window joins that jointly optimizes sample quantity and result quality.",
      zh: "面向窗口内连接，同时优化采样数量与结果质量的自适应采样方法。",
    },
    publication: "https://doi.org/10.1145/3677134",
    repository: "https://github.com/DataSysResearch/AllianceDB",
  },
  {
    year: 2024,
    venue: "ICDM 2024",
    status: { en: "Published", zh: "已发表" },
    title: "MOStream: A Modular and Self-Optimizing Data Stream Clustering Algorithm",
    authors: "Zhengru Wang, Xin Wang, Shuhao Zhang",
    summary: {
      en: "A modular stream-clustering design that adapts data summaries, windows, outlier handling, and refinement at runtime.",
      zh: "运行时自适应数据摘要、窗口、异常处理与聚类优化策略的模块化流聚类方法。",
    },
    publication: "https://doi.org/10.1109/ICDM59182.2024.00057",
    repository: "https://github.com/DataSysResearch/Sesame",
  },
  {
    year: 2024,
    venue: "ICDE 2024 Demo",
    status: { en: "Published demo", zh: "已发表演示" },
    title: "MorphStream: Scalable Processing of Transactions over Streams",
    authors: "Siqi Xiang, Zhonghao Yang, Jianjun Zhao, Yancan Mao, Shuhao Zhang",
    summary: {
      en: "A system demonstration of adaptive scheduling and transactional execution over dynamic streaming workloads.",
      zh: "展示 MorphStream 在动态流工作负载上的自适应调度与事务执行能力。",
    },
    publication: "https://doi.org/10.1109/ICDE60146.2024.00434",
    repository: "https://github.com/DataSysResearch/MorphStream",
  },
  {
    year: 2023,
    venue: "SIGMOD 2023",
    status: { en: "Published", zh: "已发表" },
    title: "MorphStream: Adaptive Scheduling for Scalable Transactional Stream Processing on Multicores",
    authors: "Yancan Mao, Jianjun Zhao, Shuhao Zhang, Haikun Liu, Volker Markl",
    summary: {
      en: "Adaptive scheduling for scalable transaction processing over dynamic multicore streaming workloads.",
      zh: "面向动态多核流工作负载的可扩展事务处理与自适应调度。",
    },
    publication: "https://doi.org/10.1145/3588913",
    repository: "https://github.com/DataSysResearch/MorphStream",
  },
  {
    year: 2023,
    venue: "SIGMOD 2023",
    status: { en: "Published", zh: "已发表" },
    title: "Data Stream Clustering: An In-depth Empirical Study",
    authors: "Xin Wang, Zhengru Wang, Zhenyu Wu, Shuhao Zhang, Xuanhua Shi, Li Lu",
    summary: {
      en: "A systematic benchmark of representative data-stream clustering algorithms across evolving workloads.",
      zh: "在持续演化工作负载上对代表性数据流聚类算法进行系统评测。",
    },
    publication: "https://doi.org/10.1145/3589307",
    repository: "https://github.com/DataSysResearch/Sesame",
  },
  {
    year: 2023,
    venue: "EMNLP 2023",
    status: { en: "Published", zh: "已发表" },
    title: "SentiStream: A Co-Training Framework for Adaptive Online Sentiment Analysis in Evolving Data Streams",
    authors: "Yuhao Wu, Karthick Sharma, Chun Wei Seah, Shuhao Zhang",
    summary: {
      en: "Adaptive co-training for online sentiment analysis under continuously changing stream distributions.",
      zh: "面向持续变化数据分布的在线情感分析自适应协同训练框架。",
    },
    publication: "https://doi.org/10.18653/v1/2023.emnlp-main.380",
    repository: "https://github.com/DataSysResearch/SentiStream",
  },
  {
    year: 2023,
    venue: "ICDE 2023",
    status: { en: "Published", zh: "已发表" },
    title: "Parallelizing Stream Compression for IoT Applications on Asymmetric Multicores",
    authors: "Xianzhi Zeng, Shuhao Zhang",
    summary: {
      en: "Fine-grained decomposition and asymmetry-aware scheduling for energy-efficient stream compression.",
      zh: "通过细粒度分解与非对称感知调度实现高能效流压缩。",
    },
    publication: "https://doi.org/10.1109/ICDE55515.2023.00078",
    repository: "https://github.com/DataSysResearch/CStream",
  },
  {
    year: 2023,
    venue: "ICDE 2023",
    status: { en: "Published", zh: "已发表" },
    title: "Scalable Online Interval Join on Modern Multicore Processors in OpenMLDB",
    authors: "Hao Zhang, Xianzhi Zeng, Shuhao Zhang, Xinyi Liu, Mian Lu, Zhao Zheng",
    summary: {
      en: "A scalable online interval-join design and multicore evaluation in OpenMLDB.",
      zh: "面向 OpenMLDB 的可扩展在线区间连接设计与多核评测。",
    },
    publication: "https://doi.org/10.1109/ICDE55515.2023.00232",
    repository: "https://github.com/DataSysResearch/AllianceDB",
  },
  {
    year: 2023,
    venue: "DEBS 2023",
    status: { en: "Published vision paper", zh: "已发表愿景论文" },
    title: "A Hardware-Conscious Stateful Stream Compression Framework for IoT Applications (Vision)",
    authors: "Xianzhi Zeng, Shuhao Zhang",
    summary: {
      en: "A vision for hardware-conscious stateful stream compression across IoT devices and workloads.",
      zh: "面向 IoT 设备与工作负载的硬件感知有状态流压缩框架愿景。",
    },
    publication: "https://doi.org/10.1145/3583678.3596885",
    repository: "https://github.com/DataSysResearch/CStream",
  },
  {
    year: 2021,
    venue: "SIGMOD 2021",
    status: { en: "Published", zh: "已发表" },
    title: "Parallelizing Intra-Window Join on Multicores: An Experimental Study",
    authors: "Shuhao Zhang, Yancan Mao, Jiong He, Philipp M. Grulich, Steffen Zeuch, Bingsheng He, Richard T. B. Ma, Volker Markl",
    summary: {
      en: "An experimental study of algorithmic and architectural choices for parallel intra-window joins on multicore hardware.",
      zh: "系统评测多核硬件上窗口内连接的算法与体系结构设计选择。",
    },
    publication: "https://doi.org/10.1145/3448016.3452793",
    repository: "https://github.com/DataSysResearch/AllianceDB",
  },
  {
    year: 2020,
    venue: "ICDE 2020",
    status: { en: "Published", zh: "已发表" },
    title: "Towards Concurrent Stateful Stream Processing on Multicore Processors",
    authors: "Shuhao Zhang, Yingjun Wu, Feng Zhang, Bingsheng He",
    summary: {
      en: "TStream introduces scalable concurrent state access for transactional stream processing on multicore processors.",
      zh: "TStream 为多核事务流处理引入可扩展的并发状态访问机制。",
    },
    publication: "https://doi.org/10.1109/ICDE48307.2020.00136",
    repository: "https://github.com/DataSysResearch/MorphStream",
  },
  {
    year: 2019,
    venue: "SIGMOD 2019",
    status: { en: "Published", zh: "已发表" },
    title: "BriskStream: Scaling Data Stream Processing on Shared-Memory Multicore Architectures",
    authors: "Shuhao Zhang, Jiong He, Amelie Chi Zhou, Bingsheng He",
    summary: {
      en: "NUMA-aware execution-plan optimization for scalable stream processing on shared-memory multicores.",
      zh: "面向共享内存多核架构，以 NUMA 感知执行计划优化提升流处理扩展性。",
    },
    publication: "https://doi.org/10.1145/3299869.3300067",
    repository: "https://github.com/Xtra-Computing/briskstream",
  },
  {
    year: 2017,
    venue: "ICDE 2017",
    status: { en: "Published", zh: "已发表" },
    title: "Revisiting the Design of Data Stream Processing Systems on Multi-Core Processors",
    authors: "Shuhao Zhang, Bingsheng He, Daniel Dahlmeier, Amelie Chi Zhou, Thomas Heinze",
    summary: {
      en: "A hardware-conscious study of execution and NUMA bottlenecks in stream-processing systems on scale-up servers.",
      zh: "研究扩展型服务器上流处理系统的执行与 NUMA 瓶颈。",
    },
    publication: "https://doi.org/10.1109/ICDE.2017.119",
    repository: "https://github.com/ShuhaoZhangTony/ProfilingStudy",
  },
];

const LANGUAGE_KEY = "datasys-language";

function pick(value, language) {
  return typeof value === "string" ? value : value[language] || value.en;
}

function renderPublications(language) {
  const years = [...new Set(PUBLICATIONS.map((publication) => publication.year))];
  const releaseLine = document.getElementById("publication-release-line");
  const yearGroups = document.getElementById("publication-years");
  const lineLabel = language === "zh" ? "成果发布线" : "Publication timeline";

  releaseLine.setAttribute("aria-label", lineLabel);
  releaseLine.innerHTML = years
    .map((year) => {
      const count = PUBLICATIONS.filter((publication) => publication.year === year).length;
      return `<a href="#year-${year}"><span>${year}</span><strong>${count}</strong><small>${language === "zh" ? "项成果" : count === 1 ? "publication" : "publications"}</small></a>`;
    })
    .join("");

  yearGroups.innerHTML = years
    .map((year) => {
      const publications = PUBLICATIONS.filter((publication) => publication.year === year);
      return `
        <section id="year-${year}" class="publication-year" aria-labelledby="year-${year}-title">
          <div class="publication-year-heading">
            <span>${year}</span>
            <h2 id="year-${year}-title">${language === "zh" ? "正式发表与作者报告接收" : "Published work and author-reported acceptances"}</h2>
          </div>
          <div class="achievement-list">
            ${publications.map((publication) => `
              <article class="achievement-entry">
                <div class="achievement-meta">${publication.venue}</div>
                <div class="achievement-copy">
                  <h3>${publication.title}</h3>
                  <p><strong>${publication.authors}</strong></p>
                  <p>${pick(publication.summary, language)}</p>
                  ${publication.evidenceNote ? `<p class="achievement-evidence-note">${pick(publication.evidenceNote, language)}</p>` : ""}
                  <div class="achievement-links">
                    ${publication.publication ? `<a href="${publication.publication}">${language === "zh" ? "论文 / DOI" : "Paper / DOI"} ↗</a>` : ""}
                    ${publication.evidence ? `<a href="${publication.evidence}">${language === "zh" ? "官方接收记录" : "Official program"} ↗</a>` : ""}
                    <a href="${publication.repository}">${language === "zh" ? "相关仓库" : "Related repository"} ↗</a>
                  </div>
                </div>
                <div class="achievement-status"><span>${pick(publication.status, language)}</span></div>
              </article>
            `).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function setLanguage(language) {
  const selected = language === "zh" ? "zh" : "en";
  document.documentElement.lang = selected === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-en][data-zh]").forEach((node) => {
    node.textContent = node.dataset[selected];
  });
  const toggle = document.getElementById("language-toggle");
  toggle.textContent = selected === "zh" ? "EN" : "中文";
  toggle.setAttribute("aria-label", selected === "zh" ? "Switch to English" : "切换为中文");
  document.title = selected === "zh" ? "发表成果 | DataSys" : "Publications | DataSys";
  localStorage.setItem(LANGUAGE_KEY, selected);
  renderPublications(selected);
}

document.getElementById("language-toggle").addEventListener("click", () => {
  setLanguage(document.documentElement.lang.startsWith("zh") ? "en" : "zh");
});

setLanguage(localStorage.getItem(LANGUAGE_KEY) || "en");
