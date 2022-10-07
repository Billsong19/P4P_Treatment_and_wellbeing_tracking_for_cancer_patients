const infoData = [
    {
        condition: "Stomach Cancer",
        img: require("../public/stomach.jpg"),
        details: 
        [
            [{
                header: "Overview",
                content: "Stomach cancer, also known as gastric cancer, is a cancer that develops from the lining of the stomach. Most of the time, stomach cancer develops in stages over years."
            },
            {
                header: "Diagnosis",
                content: "Early symptoms may include heartburn, upper abdominal pain, nausea, and loss of appetite. Diagnosis usually involves one or more of the proceedures: Gastroscopic exam is the diagnostic method of choice. This involves insertion of a fibre optic camera into the stomach to visualise it. Upper GI series invloves swallowing liquids which show up during an X-ray. Computerised tomography, or CT scans are a series of X-rays which the dimension of depth to X-rays."
            },
            {
                header: "Potential Causes",
                content: "The most common cause is infection by the bacterium Helicobacter pylori, which accounts for more than 60% of cases. Smoking, dietary factors such as pickled vegetables and obesity are other risk factors. About 10% of cases run in families, and between 1% and 3% of cases are due to genetic syndromes inherited from a person's parents such as hereditary diffuse gastric cancer."
            }],
            [{
                header: "Overview",
                content: "The 5-year survival rate for all patients with stomach cancer is estimated at 32%. This reflects that 62% of diagnoses are after the cancer has spread beyond the stomach."
            },
            {
                header: "Breakdown",
                content: "If the cancer is diagnosed and treated before it has spread outside the stomach, the 5-year survival rate is 70%. If the cancer has spread to surrounding tissues or organs and/or the regional lymph nodes, the 5-year survival rate is 32%. If the cancer has spread to a distant part of the body, the 5-year survival rate is 6%. Approximately 36% of people are diagnosed at this late stage."
            },
            {
                question: "Ask your doctor where you lie on this scale.",
            }],
            [{
                header: "Stage 0",
                content: "Limited to the inner lining of the stomach, it is treatable by endoscopic mucosal resection when found very early (in routine screenings), or otherwise by gastrectomy and lymphadenectomy without need for chemotherapy or radiation."
            },
            {
                header: "Stage I",
                content: "Penetration to the second or third layers of the stomach (stage 1A) or to the second layer and nearby lymph nodes (stage 1B): Stage 1A is treated by surgery, including removal of the omentum. Stage 1B may be treated with chemotherapy (5-fluorouracil) and radiation therapy."
            },
            {
                header: "Stage II",
                content: "Penetration to the second layer and more distant lymph nodes, or the third layer and only nearby lymph nodes, or all four layers but not the lymph nodes, it is treated as for stage I, sometimes with additional neoadjuvant chemotherapy."
            },
            {
                header: "Stage III",
                content: "Penetration to the third layer and more distant lymph nodes, or penetration to the fourth layer and either nearby tissues or nearby or more distant lymph nodes, it is treated as for stage II; a cure is still possible in some cases."
            },
            {
                header: "Stage IV",
                content: "Cancer has spread to nearby tissues and more distant lymph nodes, or has metastasized to other organs. A cure is very rarely possible at this stage. Some other techniques to prolong life or improve symptoms are used, including laser treatment, surgery, and/or stents to keep the digestive tract open, and chemotherapy by drugs."
            },],
            [{
                header: "Surgery",
                content: "Surgery remains the only curative therapy for stomach cancer. Endoscopic mucosal resection (EMR) is a treatment for early gastric cancer invloving removing the mucosa; the membrane which lines the surface of the stomach. Later stage surgeries inolve removal of the omentum; a large fold of membranous tissue that hangs from the bottom of the stomach over the small intestine, or a total gastrectomy, meaning complete removal of the stomach."
            },
            {
                header: "Chemotherapy",
                content: "Stomach cancer seems somewhat resistant to chemotherapy. Despite this, the treatment can serve to reduce the size of the tumor, relieve symptoms of the disease, and increase survival time. Some drugs used in stomach cancer treatment have included: fluorouracil or its analog capecitabine, BCNU (carmustine), methyl-CCNU (semustine) and doxorubicin (Adriamycin), as well as mitomycin C, and more recently cisplatin and taxotere."
            },
            {
                header: "Radiotherapy",
                content: "Radiation therapy invloves the use of localised ionising radiation to control or kill malignant cells. It is usually used as an adjuvant to (increases the effectiveness of) the other two main treatments."
            },
            {
                question: "Ask your doctor which of these will be used to treat your condition."
            }],
            [{
                header: "Surgery Complications",
                content: "Larger surgeries are more likely to incur more severe complications. EMR has a fairly high complete success rate of 80% and a relatively low rate of patients developing bleeding of 12.5%, which can be managed successfully by further therapy. Total gastrectomies have a much higher complication rate of 70%, including dumping syndrome; where your stomach empties its contents into the bowel too quickly, and reflux esophagitis; where the esophageal sphincter that usually keeps stomach acid from entering the oesophagus malfunctions"
            },
            {
                header: "Lasting effects",
                content: "Due to the compromise in stomach functions caused by the tumor and treatments, patients are likely to experience poorer nutritional outcomes, and weight loss"
            }]
        ]
    },
    {
        condition: "Bowel Cancer",
        img: require("../public/bowel.jpg"),
        details: 
        [
            [{
                header: "Overview",
                content: "Colorectal cancer, also known as bowel cancer, is a cancer that develops from the colon or rectum, areas within the large intestive."
            },
            {
                header: "Diagnosis",
                content: "Early symptoms may include blood in the stool, a change in bowel movements, weight loss, and fatigue. Diagnosis usually invloves sampling areas of the colon during a colonoscopy, which involves insertion of a camera through the anus to observe and sample intestine tissue. CT scans can also identify bowel cancer, though are not the primary method and finding bowel cancer through them is usually out of happenstance."
            },
            {
                header: "Potential Causes",
                content: "Risk factors for bowel cancer include high intake of fat, sugar, alcohol, red meat, processed meats, obesity, smoking, and a lack of physical exercise. Approximately 10% of cases are linked to insufficient activity. 75-95% of colorectal cancer cases occur in people with little or no genetic risk. People with inflammatory bowel disease (ulcerative colitis and Crohn's disease) are at increased risk of colon cancer. The risk increases the longer a person has the disease, and the worse the severity of inflammation."
            }],
            [{
                header: "Overview",
                content: "The 5-year survival rate of people with localized stage colorectal cancer is 91%. About 37% of patients are diagnosed at this early stage. If the cancer has spread to surrounding tissues or organs and/or the regional lymph nodes, the 5-year survival rate is 72%. About 36% of patients are diagnosed at this regional stage. If the cancer has spread to distant parts of the body, the 5-year survival rate is 15%. About 22% of patients are diagnosed at this late stage."
            },
            {
                header: "Colon cancer",
                content: "For colon cancer, the overall 5-year survival rate for people is 64%. If the cancer is diagnosed at a localized stage, the survival rate is 91%. If the cancer has spread to surrounding tissues or organs and/or the regional lymph nodes, the 5-year survival rate is 72%. If colon cancer has spread to distant parts of the body, the 5-year survival rate is 14%."
            },
            {
                header: "Reactal cancer",
                content: "For rectal cancer, the overall 5-year survival rate for people is 67%. If the cancer is diagnosed at a localized stage, the survival rate is 90%. If the cancer has spread to surrounding tissues or organs and/or the regional lymph nodes, the 5-year survival rate is 73%. If the cancer has spread to distant parts of the body, the 5-year survival rate is 17%."
            },
            {
                question: "Ask your doctor where you lie on this scale.",
            }],
            [{
                header: "TNM Staging system",
                content: "The most common staging system is the TNM (for tumors/nodes/metastases) system. This system assigns a number based on three categories. \"T\" denotes the degree of invasion of the intestinal wall, \"N\" the degree of lymphatic node involvement, and \"M\" the degree of metastasis - that being how wide the effect has spread outside the bowel area."
            },
            {
                header: "Tumor Depth (T)",
                content: "TX: The primary tumor cannot be evaluated. \nT0: No evidence of cancer in the colon or rectum.\nT1: Growth into the submucosa (a thin layer of tissue found within various organs).\nT2: Growth into the muscularis propria (muscular tissue around organs).\nT3: Growth through the muscularis propria and into tissues surrounding the colon or rectum (but not the visceral peritoneum or surrounding organs).\nT4a: Growth into the surface of the visceral peritoneum, a membrane forming the lining of the abdominal cavity.\nT4b: The tumor has grown into or has attached to other organs or structures."
            },
            {
                header: "Lymph Node Invlovement (N)",
                content: "NX: The regional lymph nodes cannot be evaluated.\nN0: No evidence of spread to regional lymph nodes.\nN1a: Tumor cells found in 1 regional lymph node.\nN1b: Tumor cells found in 2 or 3 regional lymph nodes.\nN1c: There are cancerous nodules near the colon that do not appear to be lymph nodes.\nN2a: Tumor cells found in 4 to 6 regional lymph nodes.\nN2b: Tumor cells found in 7 or more regional lymph nodes"
            },
            {
                header: "Metastasis status (M)",
                content: "M0: No evidence of distant metastasis\nM1a: Spread to 1 other part of the body beyond the colon, rectum or regional lymph nodes.\nM1b: Spread to more than 1 part of the body other than the colon, rectum or regional lymph nodes.\nM1c: Spread to the peritoneal surface, the tissue that lines the abdominal wall and pelvic cavity."
            },
            {
                question: "This can be pretty complicated, ask your doctor which stages you are at."
            }],
            [{
                header: "Surgery",
                content: "For people with localized cancer, the preferred treatment is complete surgical removal with adequate margins, with the attempt of achieving a cure. The procedure of choice is a partial colectomy (or proctocolectomy for rectal lesions) where the affected part of the colon or rectum is removed along with parts of its mesocolon (an organ that attaches the intestines to the posterior abdominal wall) and blood supply to facilitate removal of draining lymph nodes."
            },
            {
                header: "Chemotherapy",
                content: "In both cancer of the colon and rectum, chemotherapy may be used in addition to surgery in certain cases. The decision to add chemotherapy in management of colon and rectal cancer depends on the stage of the disease. In Stage I colon cancer, no chemotherapy is offered, and surgery is the definitive treatment. The role of chemotherapy in Stage II colon cancer is debatable, and is usually not offered unless risk factors such as T4 tumor, undifferentiated tumor, vascular and perineural invasion or inadequate lymph node sampling is identified. If cancer has spread to the lymph nodes or distant organs, which is the case with stage III and stage IV colon cancer respectively, adding chemotherapy agents fluorouracil, capecitabine or oxaliplatin increases life expectancy. "
            },
            {
                header: "Radiotherapy",
                content: "Radiation therapy invloves the use of localised ionising radiation to control or kill malignant cells. It is usually used as an adjuvant to (increases the effectiveness of) the other two main treatments."
            },
            {
                header: "Palliative Care",
                Content: "Palliative care is recommended for any person who has advanced colon cancer or who has significant symptoms. Involvement of palliative care may be beneficial to improve the quality of life for both the person and his or her family, by improving symptoms, anxiety and preventing admissions to the hospital."
            },
            {
                question: "Ask your doctor what your treatment will involve."
            }],
            [{
                header: "Recurrence",
                content: "The average five-year recurrence rate in people where surgery is successful is 5% for stage I cancers, 12% in stage II and 33% in stage III. However, depending on the number of risk factors it ranges from 9-22% in stage II and 17-44% in stage III. This makes follow-up examinations recommended for up to 7 years after recovery."
            },
            {
                header: "Lasting effects",
                content: "Whilst the impact of colorectal cancer on those who survive varies greatly there will often be a need to adapt to both physical and psychological outcomes of the illness and its treatment. For example, it is common for people to experience incontinence, sexual dysfunction, problems with stoma care and fear of cancer recurrence after primary treatment has concluded."
            }]
        ]
    },
    {
        condition: "Liver Cancer",
        img: require("../public/liver.jpg"),
        details: 
        [
            [{
                header: "Overview",
                content: "Liver cancer also known as hepatic cancer, is cancer in the liver. Liver cancer can be primary (starts in liver) or secondary (meaning cancer which has spread from elsewhere to the liver, known as liver metastasis). Liver metastasis is more common than that which starts in the liver."
            },
            {
                header: "Types",
                content: "Hepatocellular carcinoma (HCC) is the most frequent liver cancer, accounting for approximately 75% of all primary liver cancers. HCC is a cancer formed by liver cells, known as hepatocytes, that become malignant.\nIntrahepatic cholangiocarcinoma is a cancer of the bile duct that accounts for approximately 6% of priamry liver cancer."
            },
            {
                question: "Ask your doctor which one of these you have been diagnosed with, and what difference that may mean to your treatment."
            },
            {
                header: "Diagnosis",
                content: "Early symptoms may include lump or pain on the right side of the torso below the ribcage, jaundice, easy bruising, weight lose, or weakness. Diagnosis is made primarily with medical imaging techniques such as MRI or CT, if results are not clear then a liver biopsy may be performed, where a sample is surgically removed to be analysed. Additionally, Tumor markers, chemicals sometimes found in the blood of people with cancer, can be helpful in diagnosing and monitoring the course of liver cancers."
            },
            {
                header: "Potential Causes",
                content: "Viral infection with hepatitis C virus (HCV) or Hepatitis B virus (HBV) is the chief cause of liver cancer in the world today, accounting for 80% of HCC. Other risk factors include obesity, diabetes, smoking, liver fluke infection, and bile duct cysts."
            }],
            [{
                header: "Overview",
                content: "The general 5-year survival rate for liver cancer is estimated at 20%. If surgery is possible, it generally results in higher survival rates across all stages of the disease."
            },
            {
                header: "Breakdown",
                content: "For the 43% of people who are diagnosed with liver cancer at an early stage, the 5-year survival rate is 35%. If the cancer has spread to surrounding tissues or organs and/or the regional lymph nodes, the 5-year survival rate is 12%. If the cancer has spread to a distant part of the body, the 5-year survival rate is 3%."
            },
            {
                question: "Ask your doctor where you lie on this scale.",
            }],
            [{
                header: "Stage 0",
                content: "Very early stage, tumor consists of a single nodule (growth of abnormal tissue) < 3cm"
            },
            {
                header: "Stage A",
                content: "Early stage, 1-3 nodules all < 3cm"
            },
            {
                header: "Stage B",
                content: "Intermediate stage, tumor consists of multiple nodules still within the liver"
            },
            {
                header: "Stage C",
                content: "Advanced stage, tumor metastases to other nearby organs, usually lung, abdominal lymph nodes, and bone."
            },
            {
                header: "Stage D",
                content: "Terminal stage, liver severly damaged by tumors, impeding function."
            },
            {
                question: "Ask your doctor about where you are, and what that might invlove."
            }],
            [{
                header: "Surgery for HCC",
                content: "Partial surgical resection is the recommended treatment for hepatocellular carcinoma (HCC) when patients have sufficient hepatic function reserve.  Liver transplantation can also be considered in cases of HCC where this form of treatment can be tolerated and the tumor fits specific criteria."
            },
            {
                header: "Ablation for HCC",
                content: "Ablation methods (e.g. radiofrequency ablation or microwave ablation) are also an option for HCC treatment. This method is recommended for small, localized liver tumors as it is recommended that the area treated with radiofrequency ablation should be 2 centimeters or less."
            },
            {
                header: "Surgery for Intrahepatic cholangiocarcinoma",
                content: "Resection is an option in cholangiocarcinoma, but fewer than 30% of cases of cholangiocarcinoma are resectable at diagnosis. The reason the majority of intrahepatic cholangiocarcinomas are not able to be surgically removed is because there are often multiple focal tumors within the liver. Liver transplant may be used where partial resection is not an option, and adjuvant chemoradiation may benefit some cases."
            },
            {
                question: "Ask your doctor what your treatment will involve."
            }],
            [{
                header: "Recurrence",
                content: "For HCC recurrence rates after resection can exceed 70%, whether due to spread of the initial tumor or formation of new tumors. After surgery for Intrahepatic cholangiocarcinoma, recurrence rates are up to 60%. In either case, follow up check ups and treatment should be arranged."
            },
            {
                header: "Lasting effects",
                content: "It is very important to go to all your follow-up appointments. During these visits, your doctors will ask questions about any problems you are having and might do exams and blood tests, such as alpha-fetoprotein (AFP), liver function tests (LFTs). Imaging tests, such as ultrasound, CT, or MRI scans might also be done. These tests will help look for signs of cancer or side effects of treatment."
            }]
        ]
    },
    {
        condition: "Prostate Cancer",
        img: require("../public/prostate.jpg"),
        details: 
        [
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
        ]
    },
    {
        condition: "Breast Cancer",
        img: require("../public/breast.jpg"),
        details: 
        [
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
        ]
    },
    {
        condition: "Skin Cancer",
        img: require("../public/skin.jpg"),
        details: 
        [
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
        ]
    },
    {
        condition: "Lung Cancer",
        img: require("../public/lung.jpg"),
        details: 
        [
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
        ]
    },
    {
        condition: "Brain Tumor",
        img: require("../public/brain.jpg"),
        details: 
        [
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
            [{
                header: "Note",
                content: "Detailed information about a wide variety of cancers is outside the scope of this project. For an example of what this section may look like populated, look at the bowel, stomach, or liver cancer sections."
            },
            {
                question: "Ask yourself: should a pair of software students without medical consultancy really be the ones to fill this section out?"
            }],
        ]
    }
];

export default infoData;