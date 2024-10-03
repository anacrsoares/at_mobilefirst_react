import styled from "styled-components";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { useState, useEffect } from "react";

// Card
const CardContainer = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    /* gap: 20px; */
  }
`;

// Image
const ImageEmployee = styled.img`
  /* width: 100%; */
  height: 50vh;
  object-fit: cover;

  @media (min-width: 360px) {
    object-position: 50% 10%;
    height: 40vh;
    object-fit: cover;
  }

  @media (min-width: 540px) {
    object-position: 50% 10%;
    height: 40vh;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    object-position: 50% 10%;
    width: 30vw;
    height: 50vh;
    object-fit: cover;
    /* border: 5px solid blue; */
  }
`;

// Personal Info
const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  width: 100%;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    height: 50vh;
    flex-direction: column;
    /* border: 10px solid red; */
    flex: 1;
  }
`;

const EmployeeName = styled.h1`
  text-align: start;
  font-size: 2rem;

  @media (min-width: 360px) {
    font-size: 1.5;
  }

  @media (min-width: 480px) {
    font-size: 2rem;
  }

  @media (min-width: 768px) {
    font-size: 2.3rem;
  }
`;

const EmployeeDetails = styled.p`
  font-size: 1rem;
  font-weight: 400;

  @media (min-width: 360px) {
    font-size: 0.6rem;
  }

  @media (min-width: 480px) {
    font-size: 0.9rem;
  }
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

// Icons
const Icons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 10px;
  font-size: 1.5rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  @media (min-width: 480px) {
    font-size: 2rem;
  }
  @media (min-width: 768px) {
    height: 50vh;
    flex-direction: column;
    font-size: 2.5rem;
    width: auto;
    border: none;
  }
`;

const PhoneIcon = styled(FaPhoneAlt)`
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    cursor: pointer;
    color: #037b15d4;
    transform: scale(1.2);
  }
`;

const MailIcon = styled(IoMdMail)`
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    cursor: pointer;
    color: #1500ff;
    transform: scale(1.2);
  }
`;

const LocationIcon = styled(FaLocationDot)`
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    cursor: pointer;
    color: red;
    transform: scale(1.2);
  }
`;

// Table
const TableWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  height: 50vh;

  @media (min-width: 768px) {
    font-size: 1.5rem;
    /* height: 100%; */
  }
`;
const TaskTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  padding: 10px;
  bottom: 0;
`;

const TableHead = styled.thead`
  padding: 8px;
  background-color: #5d5d5d;
  color: #fffbfb;
  font-weight: bold;
`;

const TableBody = styled.tbody`
  padding: 8px;
  background-color: #f2f2f2;
  color: #6e6d6d;
`;

const TableRow = styled.tr`
  /* height: 100%; */
`;

const TableCell = styled.td`
  text-align: center;
  border: 1px solid #d6d6d6;
`;

// Button
const CheckBox = styled.input.attrs({ type: "checkbox" })`
  color: green;
  vertical-align: middle;
  text-align: center;

  @media (min-width: 480px) {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    transform: scale(1.2);
  }

  @media (min-width: 1024px) {
    transform: scale(2);
  }
`;

export default function TasksResponsive() {
  const taskMold = [
    { id: 1, name: "Tarefa 1", completed: false },
    { id: 2, name: "Tarefa 2", completed: false },
    { id: 3, name: "Tarefa 3", completed: false },
  ];

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskMold));
  }, []);

  const [tasks, setTasks] = useState(() => {
    const isTasks = localStorage.getItem("tasks");
    return isTasks ? JSON.parse(isTasks) : taskMold;
  });

  const handleCheck = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((prev) =>
        taskId === prev.id ? { ...prev, completed: !prev.completed } : prev
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <CardContainer>
      <ImageEmployee src="https://img.freepik.com/free-photo/attractive-mixed-race-male-with-positive-smile-shows-white-teeth-keeps-hands-stomach-being-high-spirit-wears-white-shirt-rejoices-positive-moments-life-people-emotions-concept_273609-15527.jpg?ga=GA1.1.855888927.1723313132&semt=ais_hybrid"></ImageEmployee>
      <PersonalInfo>
        <EmployeeName>Gabriel de Paula Santos Ribeiro</EmployeeName>
        <EmployeeDetails>Data de Nascimento: 28/12/1994</EmployeeDetails>
        <EmployeeDetails>Setor: Operações</EmployeeDetails>
        <EmployeeDetails>Cargo: Analista de Logística</EmployeeDetails>
      </PersonalInfo>
      <Icons>
        <PhoneIcon />
        <MailIcon />
        <LocationIcon />
      </Icons>

      <TableWrapper>
        <TaskTable>
          <TableHead>
            <TableRow>
              <TableCell>Estado</TableCell>
              <TableCell>Tarefas</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>
                  <CheckBox
                    checked={task.completed}
                    onChange={() => handleCheck(task.id)}
                  />
                </TableCell>
                <TableCell>{task.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TaskTable>
      </TableWrapper>
    </CardContainer>
  );
}
