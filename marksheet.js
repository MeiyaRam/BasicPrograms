const markSheets = [
    {
        student: 'Sriram',
        rollNo: 11,
        tamil: 80,
        english: 90,
        science: 86,
        maths: 97,
        social: 76,
        hindi: 60,
    },
    {
        student: 'Ram',
        rollNo: 16,
        tamil: 60,
        english: 97,
        science: 100,
        maths: 34,
        social: 100,
        hindi: 36,
    },
    {
        student: 'sri',
        rollNo: 18,
        tamil: 92,
        english: 96,
        science: 99,
        maths: 99,
        social: 87,
        hindi: 94,
    },
    {
        student: 'mani',
        rollNo: 20,
        tamil: 43,
        english: 70,
        science: 90,
        maths: 83,
        social: 86,
        hindi: 41,
    },
    {
        student: 'muthu',
        rollNo: 20,
        tamil: 45,
        english: 53,
        science: 60,
        maths: 38,
        social: 51,
        hindi: 79,
    },
    {
        student: 'malar',
        rollNo: 20,
        tamil: 75,
        english: 70,
        science: 90,
        maths: 78,
        social: 59,
        hindi: 57,
    },
];

const getResultCount = (markSheets) =>
    markSheets.reduce((acc, item) => ({
        countPass: (item.result == "pass" ? acc.countPass + 1 : acc.countPass),
        countFail: (item.result == "fail" ? acc.countFail + 1 : acc.countFail)
    }), { countPass: 0, countFail: 0 });


const getRank = (totalMarks) => {
    const sortedMarksheet = totalMarks.sort((a, b) => b.total - a.total);
    const rankStatus = sortedMarksheet.map(getResult);
    const rank = rankStatus.map((student, index, array) =>
    ({
        ...student,
        rank: student.result === "pass" ? array.filter((mark) => ((mark.total > student.total) && (mark.result === "pass"))).length + 1 : "-",
    }));

    return rank;
}

const getResult = (marks) => {
    const result = Math.min(marks.tamil, marks.english, marks.science, marks.maths, marks.social) >= 35 ? "pass" : "fail";

    return { ...marks, result };
}

const getTotal = (marks) => {
    const values = Object.values(marks);
    const findTotal = (marks.tamil + marks.english + marks.science + marks.maths + marks.social);

    return {
        ...marks,
        total: findTotal,
    };
}

const getSum = () => {
    const totalMarks = markSheets.map(getTotal);
    const rank = (getRank(totalMarks));
    console.log(getResultCount(rank));
    
    return rank;
}

const main = () => {
    console.table(getSum());
}

main();