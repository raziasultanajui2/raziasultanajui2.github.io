import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const outPath = path.resolve('imports', 'Razia_CV.pdf');
const doc = new PDFDocument({ size: 'A4', margin: 42 });
const stream = fs.createWriteStream(outPath);
doc.pipe(stream);

const width = doc.page.width - doc.page.margins.left - doc.page.margins.right;

function ensureSpace(h = 36) { if (doc.y + h > doc.page.height - doc.page.margins.bottom) doc.addPage(); }
function title(t){ ensureSpace(22); doc.font('Helvetica-Bold').fontSize(18).text(t,{align:'center'}); }
function subtitle(t){ ensureSpace(14); doc.font('Helvetica').fontSize(10.5).fillColor('#374151').text(t,{align:'center'}); }
function section(t){ ensureSpace(20); doc.moveDown(0.2); doc.font('Helvetica-Bold').fontSize(13).text(t); doc.moveDown(0.1); }
function para(t){ ensureSpace(12); doc.font('Helvetica').fontSize(10.2).text(t,{width, lineGap:3}); }
function bullet(t){ ensureSpace(18); doc.font('Helvetica').fontSize(10.1).text('• '+t,{width, lineGap:3}); }

// Header
title('Razia Sultana Jui');
subtitle('Research Interests: Security & Privacy | Human-Centered Computing');
subtitle('+(1)-682-227-1680 | raziasultanajui2@gmail.com | Arlington, TX, USA');

doc.moveDown(0.6);

section('Education');
para('BRAC University Summer 2018 – Fall 2024');
para('Bachelor of Science in Computer Science and Engineering CGPA (Majors): 3.25/4.00');
para('Department of Computer Science and Engineering, Dhaka, Bangladesh');

section('Research Project Experience');
para('HarmShield: Identifying and Mitigating Harms in LLM and VLM-Based Assisting Systems');
para('LLM and VLM Safety, Trauma-Informed Design, Vulnerable system 2026 – Present');
bullet('Investigating how widely deployed LLM-based agents respond to user disclosures of trauma, partner abuse, and accident crises, with a focus on failure modes that risk re-traumatization, unsafe advice, or mishandled escalation.');
bullet('Designing a structured framework grounded in safety, trustworthiness, choice, collaboration, and empowerment principles and translating these into measurable criteria for AI system behavior, which asists the victims in the proper way.');

para('Empirical Study of Multimodal Hate Meme Detection: Can VLMs See What Text-Only Models Miss?');
para('Multimodal ML, VLMs, Content Moderation, Online Harms 2025 – Present');
bullet('Curated a 117-meme benchmark of visual memes content whose text is superficially benign yet hateful when image and text are interpreted together sourced from Facebook Hateful Memes and M3 datasets where established text-only baselines (EasyOCR + HateBERT, Detoxify, HateXplain) confirming near-zero detection (HateXplain: 0%, Detoxify: 12.9%)');
bullet('Benchmarked 14+ open-source VLMs across five model families (Gemma3, Qwen-VL, LLaVA, InternVL3, SmolVLM, Phi-3.5 Vision) and conducted a systematic definition-free vs. hate-definition-conditioned study revealing that prompt framing causes F1 increase up to +0.637 (LLaVA-1.5-13B: 0.202 → 0.839) and best overall: Gemma3-27B at F1 = 0.898.');

para('Identifying Hate Speech in Bangla Language Text Using Natural Language Processing | Link');
para('Undergraduate Thesis – NLP, Deep Learning, Hate Speech Detection, Bangla Text Classification 2024 – 2025');
bullet('Completed undergraduate thesis under the supervision of Mr. Annajiat Alim Rasel, Senior Lecturer, Department of Computer Science and Engineering, BRAC University, and developed and compared deep learning models leveraging BiLSTM, CNN-LSTM, and transformer-based architectures (mBERT, XLM-R) for hate speech detection in Bangla, a low-resource language where automated moderation infrastructure is critically underdeveloped.');
bullet('Designed a preprocessing and normalization pipeline for Bangla text (script normalization, code-mixing handling, noisy social-media cleanup) that materially improved classification performance and robustness across domains. which is motivated by the disproportionate online harm faced by women, religious minorities, and dissenting voices in Bangla-speaking online spaces, which aims to support safer digital communication for at-risk users.');

section('Professional Projects');
para('Trenzo E-commerce Website Development | Next.js, React, Node.js 2022 | Website');
bullet('Developed a full-stack e-commerce web application for a premium wallet retail brand.');
bullet('Implemented product catalog filtering, cart checkout, and an order tracking module.');

section('Academic Projects');
para('Fire and Smoke Detection System using Arduino | C++, Arduino Uno, DHT22, MQ2 Summer 2022');
bullet('Designed an automated safety system to detect fire, smoke, and gas leaks using flame and MQ2 gas sensors to mitigate industrial risks.');
bullet('Integrated DHT22 sensors for real-time temperature and humidity monitoring, displaying live data on an LCD interface and Implemented an immediate alert mechanism using buzzers and LED indicators to signal hazard detection effectively.');

para('Heart Disease Prediction using Machine Learning | Python, Scikit-learn, Pandas, NumPy Fall 2022');
bullet('Developed a diagnostic model on a Kaggle dataset of 1,026 entries, implementing KNN, Decision Tree, and Logistic Regression algorithms.');
bullet('Achieved 93% accuracy by applying MinMax and Standard Scaler normalization techniques to optimize model performance and evaluated classification reliability using confusion matrices, precision, recall, and F1-scores for robust disease detection.');

para('Real Estate Management System | Django, Python, HTML, CSS, JavaScript Spring 2021');
bullet('Built a full-stack web platform for property trading, featuring a dynamic 48-hour bidding system to optimize sales value.');
bullet('Engineered role-based access, enabling secure property listings, price filtering, and user verification, which eliminates intermediaries, reducing transaction costs by 9% for rural property buyers.');

section('Highlighted Academic Courses');
bullet('CSE-423 Computer Graphics');
bullet('CSE-425 Neural Networks');
bullet('CSE-420 Compiler Design');
bullet('CSE-360 Computer Interfacing');

section('Technical Skills');
para('Languages: Python, Java, C, C++, MATLAB, JavaFX, Bash, Assembly, Swing');
para('ML / NLP: PyTorch, scikit-learn, pandas, NumPy, BERT, RAG, LLM, VLM');
para('Databases: Oracle, MySQL, SQLite, MongoDB');
para('OS: Linux (Ubuntu, Kali), Windows');
para('Version Control: Git, GitHub');
para('Frameworks: Django, Node.js, React, JavaFX');
para('Web: HTML, CSS, PHP, Bootstrap, WordPress, JSON, XML');
para('Compiler Tools: Flex, Bison, EMU 8086');
para('Microcontrollers: Arduino, ATMega 32, Atmel Studio, Proteus 832');
para('Writing: LATEX, Beamer, Overleaf');
para('Other: NS3, iGraphics, Cisco Packet Tracer, OpenGL');

section('References');
para('Mr. Annajiat Alim Rasel');
para('Senior Lecturer, Department of Computer Science and Engineering');
para('BRAC University, Dhaka, Bangladesh');
para('Email: annajiat@bracu.ac.bd');
para('Relation: Undergraduate Thesis Supervisor');

doc.moveDown(0.25);
para('Dr. Muhammad Iqbal Hossain');
para('Assistant Professor, Department of Computer Science and Engineering');
para('BRAC University, Dhaka, Bangladesh');
para('Email: iqbal.hossain@bracu.ac.bd');
para('Relation: Course Instructor & Research Mentor');


doc.end();

stream.on('finish',()=>process.stdout.write(`Wrote ${outPath}\n`));