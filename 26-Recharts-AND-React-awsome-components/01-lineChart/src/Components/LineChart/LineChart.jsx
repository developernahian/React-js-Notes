import { LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LineChart = () => {

    // chatgpt prompt
    // I want to draw a line chart for math marks.please give me data of 10 students.
    // i want array like object data
    // i need id, name, and math only
    // i need real name
    // please add physics and chemistry also
    const studentMarks = [
        { id: 1, name: "Aarav", math: 78, physics: 82, chemistry: 74 },
        { id: 2, name: "Zara", math: 85, physics: 88, chemistry: 91 },
        { id: 3, name: "Ishaan", math: 92, physics: 90, chemistry: 89 },
        { id: 4, name: "Maya", math: 74, physics: 79, chemistry: 80 },
        { id: 5, name: "Vihaan", math: 88, physics: 85, chemistry: 87 },
        { id: 6, name: "Anaya", math: 95, physics: 93, chemistry: 92 },
        { id: 7, name: "Kabir", math: 67, physics: 70, chemistry: 65 },
        { id: 8, name: "Aanya", math: 81, physics: 83, chemistry: 78 },
        { id: 9, name: "Aryan", math: 90, physics: 87, chemistry: 88 },
        { id: 10, name: "Riya", math: 73, physics: 76, chemistry: 72 },
    ];



    return (
        <div>
        {/* XAsis er all nam na dekhale widht barale all nam dekhabe */}
            <LChart width={600} height={400} data={studentMarks}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
                <Legend />
                <Line type="monotone" dataKey="math" stroke="#8884d8" />
                <Line type="monotone" dataKey={"physics"} stroke="#58d68d " />
                <Line type="monotone" dataKey="chemistry" stroke="#d35400 " />
            </LChart>
        </div>
    );
};

export default LineChart;








