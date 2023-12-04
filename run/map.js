//@ts-check

const gpaList = [
    { name: 'Safety Knowledge', score: 82, credits: 1 },
    { name: 'College English Ⅰ', score: 75, credits: 4 },
    { name: 'Advanced Mathematics Ⅰ', score: 82, credits: 3 },
    { name: 'Elementary Chemistry Ⅰ', score: 83, credits: 3 },
    { name: 'Elementary Chemistry/Lab.Ⅰ', score: 87, credits: 1 },
    { name: 'Military Theory', score: 85, credits: 1 },
    {
        name: 'Award Credits for Mandarin Chinese',
        score: 93.2,
        credits: 1
    },
    { name: 'Morals and Laws', score: 88, credits: 3.5 },
    { name: 'Physical Education Ⅰ', score: 91, credits: 0.8 },
    { name: 'Dance Appreciation', score: 80, credits: 1.5 },
    { name: 'Physics Ⅰ', score: 82, credits: 2 },
    { name: 'Physics/Lab.Ⅰ', score: 85, credits: 0.5 },
    {
        name: 'Introduction to Pharmacy Prerequisite Course',
        score: 82,
        credits: 1
    },
    { name: 'Approaching information science', score: 95, credits: 1 },
    { name: 'Programming Language', score: 67, credits: 3 },
    { name: 'College English Ⅱ', score: 74, credits: 4 },
    { name: 'Advanced Mathematics Ⅱ', score: 74, credits: 3 },
    { name: 'Elementary Chemistry Ⅱ', score: 72, credits: 3 },
    { name: 'Elementary Chemistry/Lab.Ⅱ', score: 81, credits: 1 },
    {
        name: 'Personality types and interpersonal psychology',
        score: 90,
        credits: 1.5
    },
    { name: 'Mathematical Model', score: 92, credits: 1.5 },
    { name: 'Physical Education Ⅱ', score: 91, credits: 1 },
    { name: 'Physics Ⅱ', score: 83, credits: 3 },
    { name: 'Physics/Lab.Ⅱ', score: 87, credits: 0.5 },
    { name: 'Organic Chemistry Ⅰ', score: 72, credits: 3 },
    { name: 'Organic Chemistry/Lab.Ⅰ', score: 81, credits: 1.5 },
    {
        name: 'Abstract of Modern Chinese History',
        score: 84,
        credits: 2.5
    },
    { name: 'Professional Introduction', score: 85, credits: 1 },
    { name: 'College English Ⅲ', score: 71, credits: 2 },
    {
        name: 'Introduction to Basic Theory of Marxism',
        score: 76,
        credits: 3.5
    },
    { name: 'Physical Education Ⅲ', score: 81, credits: 1 },
    { name: 'Physical Chemistry', score: 70, credits: 3 },
    { name: 'Physical Chemistry/Lab.Ⅰ', score: 74, credits: 0.7 },
    { name: 'Organic Chemistry Ⅱ', score: 72, credits: 2 },
    { name: 'Organic Chemistry/Lab.Ⅱ', score: 84, credits: 1 },
    { name: 'College English Ⅳ', score: 65, credits: 2 },
    {
        name: 'Mao Zedong Thought and Socialism with Chinese',
        score: 69,
        credits: 4.5
    },
    { name: 'Biochemistry and Molecular Biology', score: 66, credits: 4 },
    {
        name: 'Biochemistry and Molecular Biology/Lab.',
        score: 77,
        credits: 1.5
    },
    { name: 'Mathematical Statistics', score: 89, credits: 2 },
    { name: 'Physical Education Ⅳ', score: 85, credits: 1 },
    { name: 'Physical Chemistry/Lab.Ⅱ', score: 84, credits: 0.8 },
    { name: 'Chromatographic Analysis of Drugs', score: 68, credits: 2 },
    {
        name: 'Chromatographic Analysis of Drugs/Lab.',
        score: 76,
        credits: 1
    },
    {
        name: 'Traditional Chinese Medicine Identification',
        score: 90,
        credits: 0.5
    },
    { name: 'Human Anatomy and Physiology', score: 68, credits: 3 },
    {
        name: 'Human Anatomy and Physiology/Lab.',
        score: 80,
        credits: 1.5
    },
    { name: 'Food Analysis', score: 63, credits: 2 },
    { name: 'Physical Health Test', score: 75, credits: 0.2 },
    {
        name: 'Medicinal Chemistry of Natural Products',
        score: 75,
        credits: 2
    },
    {
        name: 'Medicinal Chemistry of Natural Products/Lab.',
        score: 90,
        credits: 1
    },
    { name: 'Microbiology', score: 65, credits: 2 },
    { name: 'Microbiology/Lab.', score: 77, credits: 1 },
    { name: 'Cell Biology', score: 65, credits: 2 },
    { name: 'Cell Biology/Lab.', score: 81, credits: 1 },
    { name: 'Pharmaceutics', score: 73, credits: 2 },
    { name: 'Pharmaceutics/Lab.', score: 84, credits: 1 },
    {
        name: 'Analysis and analytical spectral drugs',
        score: 70,
        credits: 3
    },
    { name: 'Practical Training in GMP Facility', score: 76, credits: 1 },
    { name: 'Animal and Plant Quarantine', score: 63, credits: 1.8 },
    { name: 'The Design of Career', score: 93, credits: 1 },
    { name: 'Introduction to Clinical Medicine', score: 73, credits: 3 },
    {
        name: 'Practical Training in Pharmacy Simulations',
        score: 79,
        credits: 1
    },
    { name: 'Pharmacognosy', score: 73, credits: 2 },
    { name: 'Pharmacognosy/Lab.', score: 80, credits: 0.5 },
    { name: 'Pharmacology', score: 65, credits: 3 },
    { name: 'Pharmacology/Lab.', score: 71, credits: 1.5 },
    { name: 'Drug Regulations', score: 82, credits: 2 },
    { name: 'Pharmaceutical Analysis', score: 60, credits: 3 },
    { name: 'Pharmaceutical Analysis/Lab.', score: 86, credits: 1.5 },
    { name: 'Medicinal Chemistry', score: 74, credits: 3 },
    { name: 'Medicinal Chemistry/Lab.', score: 82, credits: 1 },
    { name: 'Special English', score: 64, credits: 2 },
    {
        name: 'The  analysis of drugs and poisons inside body',
        score: 78,
        credits: 2
    },
    {
        name: 'The  analysis of drugs and poisons inside body/Lab.',
        score: 80,
        credits: 1
    },
    { name: 'Pharmacokinetics', score: 65, credits: 2.5 },
    { name: 'Analysis of Chinese Materia Medica', score: 69, credits: 2 },
    {
        name: 'Analysis of Chinese Materia Medica/Lab.',
        score: 70,
        credits: 1.5
    },
    { name: 'Thesis Work', score: 84, credits: 8 },
    { name: 'Award Credits', score: 100, credits: 2 },
    { name: 'Development of quality', score: 85, credits: 1 },
    { name: 'Situation and Policy', score: 88, credits: 2 }
]

const totalCredits = gpaList.reduce((t, { credits, score }) => {
    return t + credits;
}, 0)
const totalScoreNoWeight = gpaList.reduce((t, { score }) => {
    return t + score
}, 0)
const totalScore = gpaList.reduce((t, { credits, score }) => {
    return t + (credits * score);
}, 0)
const ansNoW = totalScoreNoWeight / (100 * gpaList.length)
const ans = totalScore / totalCredits

console.log(ans)

/**
 * @param {{name: string, score: number, credits: number}} item 
 * @param {number} i
 */
function add({ name, credits, score }, i, titleE, creditsE, gradeE) {
    // const titleE = document.getElementById(`title${i}`)
    // const creditsE = document.getElementById(`credit${i}`)
    // const gradeE = document.getElementById(`score${i}`)
    // if (!(creditsE && gradeE)) {
    //     return 0
    // }

    titleE.value = name;
    creditsE.value = String(credits);
    gradeE.value = String(score);
    // addCourse.click()
    return 1
}

function main() {
    const inputs = document.querySelectorAll('input')
    gpaList.forEach((item, i) => {
        const res = add(item, i + 1, inputs[i * 3], inputs[i * 3 + 2], inputs[i * 3 + 1])
        if (!res) {
            throw new Error(`err in ${i}`)
        }
    })
}
// main()

// https://applications.wes.org/igpa-calculator/
// function wesC() {
//     const addCourse = document.querySelector('.btnsm-blue')
// }

