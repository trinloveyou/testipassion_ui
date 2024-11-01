import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const StrategicPlan = () => {
    // สร้าง state สำหรับเก็บข้อมูลเป้าหมาย
    const [goals, setGoals] = useState([
        {
            id: 1,
            title: '',
            strategies: [
                {
                    id: 1,
                    title: '',
                    tactics: [
                        {
                            id: 1,
                            title: ''
                        }
                    ]
                }
            ]
        }
    ]);

    // เพิ่มเป้าหมายใหม่
    const addGoal = () => {
        setGoals([
            ...goals,
            {
                id: goals.length + 1,
                title: '',
                strategies: [
                    {
                        id: 1,
                        title: '',
                        tactics: [
                            {
                                id: 1,
                                title: ''
                            }
                        ]
                    }
                ]
            }
        ]); a
    };

    // เพิ่มยุทธศาสตร์ใหม่
    const addStrategy = (goalIndex) => {
        const newGoals = [...goals];
        const newStrategy = {
            id: newGoals[goalIndex].strategies.length + 1,
            title: '',
            tactics: [
                {
                    id: 1,
                    title: ''
                }
            ]
        };
        newGoals[goalIndex].strategies.push(newStrategy);
        setGoals(newGoals);
    };

    // เพิ่มกลยุทธ์ใหม่
    const addTactic = (goalIndex, strategyIndex) => {
        const newGoals = [...goals];
        const newTactic = {
            id: newGoals[goalIndex].strategies[strategyIndex].tactics.length + 1,
            title: ''
        };
        newGoals[goalIndex].strategies[strategyIndex].tactics.push(newTactic);
        setGoals(newGoals);
    };

    // ลบเป้าหมาย
    const deleteGoal = (goalIndex) => {
        const newGoals = goals.filter((_, index) => index !== goalIndex);
        setGoals(newGoals);
    };

    // ลบยุทธศาสตร์
    const deleteStrategy = (goalIndex, strategyIndex) => {
        const newGoals = [...goals];
        newGoals[goalIndex].strategies = newGoals[goalIndex].strategies.filter(
            (_, index) => index !== strategyIndex
        );
        setGoals(newGoals);
    };

    // ลบกลยุทธ์
    const deleteTactic = (goalIndex, strategyIndex, tacticIndex) => {
        const newGoals = [...goals];
        newGoals[goalIndex].strategies[strategyIndex].tactics =
            newGoals[goalIndex].strategies[strategyIndex].tactics.filter(
                (_, index) => index !== tacticIndex
            );
        setGoals(newGoals);
    };

    return (
        <div className="bg-gray-200">
            <div className="bg-[#F7F7F9] rounded-lg p-6 max-w-xl w-full">
                {goals.map((goal, goalIndex) => (
                    <div
                        key={goal.id}
                        style={{ background: "#bbb6b6", padding: "20px" }}
                        className="mb-6"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-base font-normal">{goalIndex + 1}. เป้าหมาย</h3>
                            <button
                                className="text-red-500 flex-shrink-0"
                                onClick={() => deleteGoal(goalIndex)}
                            >
                                <DeleteOutlined />
                            </button>
                        </div>

                        <Form.Item className="mb-6">
                            <Input
                                placeholder=""
                                className="w-full bg-white"
                                value={goal.title}
                                onChange={(e) => {
                                    const newGoals = [...goals];
                                    newGoals[goalIndex].title = e.target.value;
                                    setGoals(newGoals);
                                }}
                            />
                        </Form.Item>

                        {goal.strategies.map((strategy, strategyIndex) => (
                            <div
                                key={strategy.id}
                                style={{ background: "#e3e0e0", margin: "24px" }}
                                className="ml-2 mb-1 p-2"
                            >
                                <div className="flex justify-between items-center">
                                    <h4 className="text-xs font-normal">
                                        {goalIndex + 1}.{strategyIndex + 1} ยุทธศาสตร์
                                    </h4>
                                    <button
                                        className="text-red-500"
                                        onClick={() => deleteStrategy(goalIndex, strategyIndex)}
                                    >
                                        <DeleteOutlined className="text-xs" />
                                    </button>
                                </div>

                                <Form.Item className="mb-0.5 px-1">
                                    <Input
                                        placeholder=""
                                        className="w-1/2 bg-white px-1 py-0.5 text-xs"
                                        value={strategy.title}
                                        onChange={(e) => {
                                            const newGoals = [...goals];
                                            newGoals[goalIndex].strategies[strategyIndex].title = e.target.value;
                                            setGoals(newGoals);
                                        }}
                                    />
                                </Form.Item>

                                {strategy.tactics.map((tactic, tacticIndex) => (
                                    <div key={tactic.id} className="ml-2">
                                        <div className="flex justify-between items-center px-1 py-0.5">
                                            <h5 className="text-xs font-normal">
                                                {goalIndex + 1}.{strategyIndex + 1}.{tacticIndex + 1} กลยุทธ์
                                            </h5>
                                            <button
                                                className="text-red-500"
                                                onClick={() => deleteTactic(goalIndex, strategyIndex, tacticIndex)}
                                            >
                                                <DeleteOutlined className="text-xs" />
                                            </button>
                                        </div>

                                        <Form.Item className="mb-2">
                                            <Input
                                                placeholder=""
                                                className="w-full bg-white"
                                                value={tactic.title}
                                                onChange={(e) => {
                                                    const newGoals = [...goals];
                                                    newGoals[goalIndex].strategies[strategyIndex].tactics[tacticIndex].title = e.target.value;
                                                    setGoals(newGoals);
                                                }}
                                            />
                                        </Form.Item>
                                    </div>
                                ))}

                                <Button
                                    type="link"
                                    className="text-blue-500 hover:text-blue-600 p-0 h-auto"
                                    onClick={() => addTactic(goalIndex, strategyIndex)}
                                >
                                    + เพิ่มกลยุทธ์
                                </Button>
                            </div>
                        ))}

                        <Button
                            type="link"
                            className="text-blue-500 hover:text-blue-600 p-0 h-auto"
                            onClick={() => addStrategy(goalIndex)}
                        >
                            + เพิ่มยุทธศาสตร์
                        </Button>
                    </div>
                ))}

                <Button
                    type="link"
                    className="text-blue-500 hover:text-blue-600 p-0 h-auto"
                    onClick={addGoal}
                >
                    + เพิ่มเป้าหมาย
                </Button>
            </div>
        </div>
    );
};

export default StrategicPlan;

