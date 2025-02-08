import { useState, useEffect } from "react";

const API_URL = "http://localhost:3000/superheroes";

export default function SuperheroApp() {
  const [superheroes, setSuperheroes] = useState([]);
  const [form, setForm] = useState({ name: "", superpower: "", humilityScore: "" });

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  const fetchSuperheroes = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setSuperheroes(data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        humilityScore: Number(form.humilityScore), // Convert to number
      }),
    });
    setForm({ name: "", superpower: "", humilityScore: "" });
    fetchSuperheroes();
  };

  return (
    <div className="p-6 max-w-lg mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center">Humble Superhero API</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-4 rounded-lg shadow">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input className="w-full p-2 border rounded" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div>
          <label className="block text-sm font-medium">Superpower</label>
          <input className="w-full p-2 border rounded" name="superpower" value={form.superpower} onChange={handleChange} required />
        </div>
        <div>
          <label className="block text-sm font-medium">Humility Score (1-10)</label>
          <input type="number" className="w-full p-2 border rounded" name="humilityScore" value={form.humilityScore} onChange={handleChange} required min="1" max="10" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Add Superhero</button>
      </form>

      <div className="space-y-4">
        {superheroes.map((hero, index) => (
          <div key={index} className="p-4 border rounded bg-white shadow">
            <h2 className="font-bold">{hero.name}</h2>
            <p>Superpower: {hero.superpower}</p>
            <p>Humility Score: {hero.humilityScore}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
