import { Link } from "react-router-dom";

const problems = [
  { id: 1, title: "Two Sum Problem" },
  { id: 2, title: "Reverse a Linked List" },
  { id: 3, title: "Find Missing Number in Array" },
];

const ProblemsPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Technical Problems</h1>
      <ul className="space-y-3">
        {problems.map((problem) => (
          <li key={problem.id} className="border p-3 rounded-lg shadow-md">
            <Link to={`/editor/${problem.id}`} className="text-blue-600 hover:underline">
              {problem.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProblemsPage;
