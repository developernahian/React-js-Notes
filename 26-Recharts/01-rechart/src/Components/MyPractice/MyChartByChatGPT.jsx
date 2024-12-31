// Full Code by chatgpt
import { LineChart as LChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MyChartByChatGPT = () => {
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
        //  Full code by chatGPT
        <div style={{ width: "100%", height: "100%" }}>
            <ResponsiveContainer width="95%" height={500}>
                <LChart
                    data={studentMarks}
                    margin={{ top: 20, right: 40, left: 40, bottom: 20 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                    <XAxis
                        dataKey="name"
                        label={{
                            value: "Students",
                            position: "insideBottom",
                            offset: -5,
                            fill: "#666",
                            fontSize: 14,
                        }}
                        tick={{ fontSize: 12, fill: "#333" }}
                    />
                    <YAxis
                        label={{
                            value: "Marks",
                            angle: -90,
                            position: "insideLeft",
                            fill: "#666",
                            fontSize: 14,
                        }}
                        tick={{ fontSize: 12, fill: "#333" }}
                        domain={[60, 100]} // Custom range for better visibility
                    />
                    <Tooltip
                        formatter={(value, name) => [`${value} Marks`, name.charAt(0).toUpperCase() + name.slice(1)]}
                        contentStyle={{ backgroundColor: "#f9f9f9", border: "1px solid #ccc" }}
                        labelStyle={{ fontWeight: "bold", color: "#333" }}
                    />
                    <Legend
                        verticalAlign="top"
                        align="center"
                        wrapperStyle={{ paddingBottom: 10 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="math"
                        stroke="#8884d8"
                        strokeWidth={3}
                        activeDot={{ r: 8 }}
                        name="Math"
                    />
                    <Line
                        type="monotone"
                        dataKey="physics"
                        stroke="#58d68d"
                        strokeWidth={3}
                        activeDot={{ r: 8 }}
                        name="Physics"
                    />
                    <Line
                        type="monotone"
                        dataKey="chemistry"
                        stroke="#d35400"
                        strokeWidth={3}
                        activeDot={{ r: 8 }}
                        name="Chemistry"
                    />
                </LChart>
            </ResponsiveContainer>
        </div>
    );
};

export default MyChartByChatGPT;
