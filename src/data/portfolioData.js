// ============================================================
//  portfolioData.js  — Muhammad Ahmad
//  Drop this file into your src/data/ folder and replace all
//  dummy-data imports/references with this file.
//  SAFE TO USE: only data changes — zero layout/style edits.
// ============================================================

// ── EXPERIENCE ──────────────────────────────────────────────
export const experience = [
  {
    id: 1,
    company: "Fomi",
    role: "Founding AI Engineer",
    location: "Islamabad, Pakistan",
    period: "July 2025 – Present",
    current: true,
    bullets: [
      "Design and deploy production-grade generative AI pipelines (prompt to image & video generation and editing), integrating commercial and open-source LLM and diffusion model APIs into scalable services.",
      "Fine-tune(LoRa, QLoRa, PEFT) and adapt pre-trained transformer and diffusion models via end-to-end training pipelines for customizable, high-fidelity generation tailored to user inputs.",
      "Build and serve models via FastAPI REST APIs and agentic orchestration services (tool calling), collaborating with backend teams to integrate ML models into production systems.",
      "Optimize model inference for real-time performance, cutting latency and improving cost efficiency; extended features to style transfer, consistent-character generation, and text-to-video.",
    ],
  },
  {
    id: 2,
    company: "Precision Medicine Lab",
    role: "Jr. Data scientist (AI in Healthcare)",
    location: "Peshawar, Pakistan",
    period: "Sep 2024 – July 2025",
    current: false,
    bullets: [
      "Developed an Agentic AI pipeline leveraging BioMistral-7B, Python, R, and Gradio to automate end-to-end transcriptomics analysis from natural language queries.",
      "Engineered a multi-agent, tool-calling workflow for query parsing, GEO dataset retrieval, differential gene expression, pathway enrichment, and LLM-powered biological interpretation.",
      "Built a hybrid RAG orchestration system integrating NCBI E-utilities APIs, local indexing of 173,000+ GEO datasets, and LLM-driven metadata filtering for scalable biomedical retrieval.",
      "Automated generation of publication-ready reports, visualizations, and LLM-generated insights, reducing transcriptomics analysis time from weeks to 15–30 minutes through robust Python–R integration.",
    ],
    //link: "https://arxiv.org/abs/2503.22531",
  },
  {
    id: 3,
    company: "Precision Medicine Lab",
    role: "Research Intern (AI in Clinical decision support)",
    location: "Peshawar, Pakistan",
    period: "June 2024 – Sep 2024",
    current: false,
    bullets: [
      "Designed and developed a deep learning–based TransUNet architecture for automated cancer detection, classification, staging, and grading across breast, oral, gastrointestinal, and colorectal histopathology datasets, achieving high-performance results across multiple evaluation metrics.",
      "Developed scalable preprocessing and analysis pipelines for gigabyte-scale Whole Slide Images (WSIs) using sliding-window tiling, PCA-based dimensionality reduction, image normalization, background filtering, and patch-level processing, enabling efficient analysis of large-resolution pathology images.",
      "Built and deployed a local web-based AI application for automated histopathology analysis, integrating trained deep learning models into an accessible clinical workflow and deploying the system within the RMI Histopathology Department for practical use by pathologists.",
      "Optimized the end-to-end WSI processing pipeline to efficiently handle large-scale gigapixel histopathology images, from preprocessing and patch extraction to model inference and visualization, enabling reliable and practical AI-assisted cancer analysis in a clinical environment.",
    ],
  },
  {
    id: 4,
    company: "Mission Critical Communication",
    role: "Computer Vision and AI Intern",
    location: "USA (Remote)",
    period: "June 2023 – Sep 2023",
    current: false,
    bullets: [
      "Designed and implemented an 8-stage OCR pipeline combining multiple OCR engines and preprocessing techniques to extract structured information from doctor handwritten notes and OPD forms, improving the quality and consistency of medical data extraction.",
      "Developed an automated workflow to process, clean, validate, and structure OCR outputs into high-quality datasets suitable for downstream AI/ML model development, reducing manual data preparation and enabling scalable processing of medical documents.",
    ],
  },
  {
    id: 5,
    company: "GIKI",
    role: "ML & DL Engineer",
    location: "Islamabad, Pakistan",
    period: "Final Year Project",
    current: false,
    bullets: [
      " Developed an AI-powered Foreign Object Debris (FOD) detection system for airport runways in collaboration with the Civil Aviation Authority (CAA) at Islamabad International Airport, using deep learning–based object detection to identify small and difficult-to-detect objects under challenging real-world conditions.",
      "Designed and evaluated multiple detection architectures, including YOLOv8, RT-DETR, and YOLOv11, with custom small-object detection enhancements, attention mechanisms, and super-resolution techniques to improve detection performance.",
      "Built and evaluated a diverse dataset combining real-world runway imagery, custom RealSense D455 data, and synthetic FOD samples, achieving 75.2% mAP@50–95 with the final YOLOv11-Large model.",
    ],
  },
  {
    id: 6,
    company: "FreeLancer ",
    role: "Agentic AI App for Customers",
    //location: "Islamabad, Pakistan",
    //period: "February 2021 – November 2024",
    current: false,
    bullets: [
      "Built an autonomous churn analyst using Python, Groq API, and OpenAI OSS 120B, and agentic PLAN → ACT → CHECK workflow, enabling natural-language customer analytics with automated tool execution, numerical fact verification, and self-correction.",
      "Developed a FastAPI REST backend and React interface for AI-powered analytics, incorporating sandboxed Python execution, reusable analysis tools, and validation mechanisms to provide secure, reliable, explainable churn insights.",
    ],
  },
];

// ── PROJECTS ─────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "HistoGenomics",
    description:
      "Built a multimodal AI pipeline for predicting gene mutations from whole-slide histopathology images by combining visual representations with genomic data.",
    tech: ["Python", "PyTorch", "CLIP", "Transformers", "MIL", "OpenSlide", "TCGA"],
    highlights: [
      "Processed TCGA WSI using tiling, background filtering, normalization, and patch-level feature extraction",
      "Developed CLIP-Transformer, VMCL-MIL, and Graph-MIL-MLP approaches for linking histopath features with gene mutation profiles",
      "Explored multimodal learning and MIL for genotype prediction from large-scale histopathology data",
    ],
    //liveUrl: "",
    githubUrl: "https://github.com/ahmad9022032",
    type: "AI in Computational Biology",
  },
  {
    id: 2,
    title: "3D Liver Lesion Segmentation",
    description:
      "Built a UNet-based deep learning system for automated liver lesion segmentation from 3D CT scans, with patch-based inference, aggregation, evaluation, and visualization.",
    tech: ["Python", "PyTorch", "UNet", "CT Imaging", "Medical Image Processing", "NumPy"],
    highlights: [
      "Developed a UNet-based segmentation model to identify and segment liver lesions from CT scans",
      "Implemented preprocessing and patch-based inference to process large 3D medical imaging volumes",
      "Evaluated and visualized model predictions through patch aggregation and comparison against ground-truth segmentation masks",
    ],
    //liveUrl: "",
    githubUrl: "https://github.com/ahmad9022032",
    type: "AI in Medical Imaging",
  },
  {
    id: 3,
    title: "Speech Disfluency Detection",
    description:
      "Built a deep learning system for automated detection and classification of speech disfluencies from audio using CNN, LSTM, and Wav2Vec2-based approaches.",
    tech: ["Python", "PyTorch", "TensorFlow", "CNN", "LSTM", "Wav2Vec2", "Audio Processing"],
    highlights: [
      "Developed multi-class and multi-label deep learning models to detect speech disfluencies including blocks, prolongations, sound repetitions, word repetitions, and interjections. Compared CNN, LSTM, and Wav2Vec2-based transformer architectures using accuracy, precision, recall, and macro F1-score. Built an automated audio preprocessing and classification pipeline for extracting speech features and identifying disfluency patterns.",
    ],
    //liveUrl: "",
    githubUrl: "https://github.com/ahmad9022032",
    type: "NLP based Audio Processing",
  },
  // {
  //   id: 4,
  //   title: "Deterministic Medical Image Translation via Brownian Bridges",
  //   description:
  //     "Developed a Generative AI–based diffusion model (Regularized Brownian Bridge) for temporal super-resolution of clinical breast DCE-MRI, enabling better pharmacokinetic analysis and precision oncology.",
  //   tech: ["Python", "PyTorch", "Diffusion Models", "Reinforcement Learning", "Computer Vision"],
  //   highlights: [
  //     "PSNR: 35.49 | SSIM: 0.94 | LPIPS: 0.038 — state-of-the-art reconstruction results",
  //     "Processed 58-patient breast cancer MRI dataset to derive quantitative imaging biomarkers",
  //     "Published on arXiv",
  //   ],
  //   //liveUrl: "https://arxiv.org/abs/2503.22531",
  //   githubUrl: "https://github.com/ahmad9022032",
  //   type: "Research",
  // },
  // {
  //   id: 5,
  //   title: "Weather-Informed Power Outage Risk Prediction in Michigan",
  //   description:
  //     "Re-architected a deep learning pipeline from LSTM to Spatio-Temporal Graph Neural Networks (ST-GNNs) to predict power outage risk across Michigan counties using meteorological and infrastructure data.",
  //   tech: ["Python", "ST-GNNs", "Scikit-learn", "NOAA Weather API", "Git", "Data Visualization"],
  //   highlights: [
  //     "Integrated meteorological, geographical, and socioeconomic datasets across Michigan counties",
  //     "Significant performance improvement over LSTM baseline after ST-GNN transition",
  //     "Built Scikit-based analytics dashboard for visualizing outage risk metrics",
  //   ],
  //   githubUrl: "https://github.com/ahmad9022032",
  //   type: "Research / Engineering",
  // },
  // {
  //   id: 6,
  //   title: "ML-Driven EMG-Based 3D Prosthetic Arm (5 DOF)",
  //   description:
  //     "Co-authored IEEE-published research on a flexible, low-cost, non-invasive prosthetic arm with 5 degrees of freedom using EMG signals and machine learning classifiers.",
  //   tech: ["Python", "SVM", "ANN", "Decision Trees", "EMG Signal Processing", "Vibrotactile Feedback"],
  //   highlights: [
  //     "Achieved up to 92.35% accuracy in real-time gesture recognition",
  //     "Validated with vibrotactile feedback (p = 0.04, r = 0.9985)",
  //     "Published at IEEE eIT 2025 Conference",
  //   ],
  //   //liveUrl: "https://ieeexplore.ieee.org/abstract/document/11103684",
  //   githubUrl: "https://github.com/ahmad9022032",
  //   type: "Research / Publication",
  // },
];

// ── SKILLS ───────────────────────────────────────────────────
export const skills = {
  "AI & Deep Learning": [
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "Diffusion Models",
    "Agentic AI",
    "Multi-Agent Systems",
    "RAG (Retrieval-Augmented Generation)",
    "Langchain and Langraphs",
    "Reinforcement Learning",
    "LLMs",
    "Vision-Language Models",
    "AI Agents",
    "Computer Vision",
    "Medical Imaging",
    "OCR and Document Extraction",
    "Anomaly Detection",
  ],
  "Languages": [
    "Python",
    "TypeScript",
    "SQL",
    "C++",
    "Go",
    "Bash",
  ],
  "Libraries & Frameworks": [
    "PyTorch",
    "TensorFlow",
    "scikit-learn",
    "NumPy",
    "OpenCV",
    "Pandas",
    "Flask",
    "FastAPI",
    "Django",
    "Node.js",
    "Next.js",
    "Flutter",
    "XGBoost",
    "LightGBM",
  ],
  "Tools & Platforms": [
    "Linux",
    "Git",
    "Docker",
    "AWS",
    "Azure",
    "MongoDB",
    "WebSockets",
    "Selenium",
    "Jupyter Notebooks",
    "GitHub Copilot",
    "Codex",
  ],
  "Other": [
    "REST APIs",
    "JSON and JSONL Pipelines",
    "Data Modeling",
    "Feature Engineering",
    "Data Visualization",
    "Cross-validation",
    "ROC AUC",
    "F1",
    "PSNR",
  ],
};
