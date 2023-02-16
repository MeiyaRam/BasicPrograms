const markSheets = [
    {
        student: 'Sriram',
        rollNo: 11,
        tamil: 80,
        english: 90,
        science: 86,
        maths: 97,
        social: 76,
    },
    {
        student: 'Ram',
        rollNo: 16,
        tamil: 60,
        english: 97,
        science: 100,
        maths: 34,
        social: 100,

    },
    {
        student: 'sri',
        rollNo: 18,
        tamil: 92,
        english: 96,
        science: 99,
        maths: 99,
        social: 87,
    },
    {
        student: 'mani',
        rollNo: 20,
        tamil: 43,
        english: 70,
        science: 90,
        maths: 83,
        social: 86,
    },
    {
        student: 'muthu',
        rollNo: 20,
        tamil: 45,
        english: 53,
        science: 60,
        maths: 38,
        social: 51,
    },
    {
        student: 'malar',
        rollNo: 20,
        tamil: 75,
        english: 70,
        science: 90,
        maths: 78,
        social: 59,
    },
];

const getResultCount = (markSheets) =>
    markSheets.reduce((acc, item) => ({
        countPass: (item.result == "Pass" ? acc.countPass + 1 : acc.countPass),
        countFail: (item.result == "Fail" ? acc.countFail + 1 : acc.countFail)
    }), { countPass: 0, countFail: 0 });


const getRank = (totalMarks) => {
    const sortedMarksheet = totalMarks.sort((a, b) => b.total - a.total);
    const rankStatus = sortedMarksheet.map(getResult);
    const rank = rankStatus.map((student, index, array) =>
    ({
        ...student,
        rank: student.result === "Pass" ? array.filter((mark) => ((mark.total > student.total) && (mark.result === "Pass"))).length + 1 : "-",
    }));

    return rank;
}

const getResult = (marks) => {
    const result = Math.min(marks.tamil, marks.english, marks.science, marks.maths, marks.social) >= 35 ? "Pass" : "Fail";

    return { ...marks, result };
}

const getTotal = (marks) => {
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

// Do not change below this line.


const main = () => {
    console.table(getSum());
}

main();
