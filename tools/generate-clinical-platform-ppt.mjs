import PptxGenJS from "pptxgenjs";

const pptx = new PptxGenJS();

pptx.setTitle("Clinical Platform 架构（AWS + ECS）");

// Slide 1: Title Slide
let slide1 = pptx.addSlide();
slide1.addText("Clinical Platform 架构（AWS + ECS）", { x: 1, y: 1, fontSize: 32, color: "0066CC" });

// Slide 2: 业务能力
let slide2 = pptx.addSlide();
slide2.addText("业务能力", { x: 1, y: 1, fontSize: 24, color: "000000" });

// Slide 3: 总体架构图
let slide3 = pptx.addSlide();
slide3.addText("总体架构图（文字框替代图）", { x: 1, y: 1, fontSize: 24, color: "000000" });

// Slide 4: ECS服务拆分
let slide4 = pptx.addSlide();
slide4.addText("ECS服务拆分", { x: 1, y: 1, fontSize: 24, color: "000000" });

// Slide 5: 数据层
let slide5 = pptx.addSlide();
slide5.addText("数据层 (PostgreSQL/Redis)", { x: 1, y: 1, fontSize: 24, color: "000000" });

// Slide 6: HIPAA文档存储
let slide6 = pptx.addSlide();
slide6.addText("HIPAA文档存储 (S3+KMS+审计)", { x: 1, y: 1, fontSize: 24, color: "000000" });

// Slide 7: ASC X12集成
let slide7 = pptx.addSlide();
slide7.addText("ASC X12集成 (270/271, 837, 276/277, 835)", { x: 1, y: 1, fontSize: 24, color: "000000" });

// Slide 8: Unified Dashboard
let slide8 = pptx.addSlide();
slide8.addText("Unified Dashboard (BFF+缓存+鉴权)", { x: 1, y: 1, fontSize: 24, color: "000000" });

// Slide 9: 安全与合规控制点
let slide9 = pptx.addSlide();
slide9.addText("安全与合规控制点", { x: 1, y: 1, fontSize: 24, color: "000000" });

// Slide 10: 可用性/扩缩容/可观测性
let slide10 = pptx.addSlide();
slide10.addText("可用性/扩缩容/可观测性", { x: 1, y: 1, fontSize: 24, color: "000000" });

pptx.writeFile("Clinical-Platform-Architecture.pptx");