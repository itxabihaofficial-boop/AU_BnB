export const challenges = [
  {
    id: 1,
    title: "Carbon Footprint Estimation System",
    intro: "Modular Python solution to calculate total CO2 emissions for individuals/households. Helps users understand and improve eco habits.",
    req: "Input modules for transport, appliances, dietary habits, waste, and lifestyle choices. Dynamic weighting based on organizer data.",
    output: "Output graphs OR a summary table showing emission breakdowns."
  },
  {
    id: 2,
    title: "Energy-Efficient Path Planner",
    intro: "A graph-based route optimization program for eco-routing and smart mobility.",
    req: "Input: roads, distances, traffic levels, fuel cost OR EV consumption rates. Weighted graph where edges represent energy usage. Algorithm: Dijkstra, A*, or custom heuristic.",
    output: "Least-energy path + estimated carbon savings."
  },
  {
    id: 3,
    title: "City Temperature Trend Analyzer",
    intro: "A CSV-based analysis tool for climate logs over a decade. Supports urban climate planning.",
    req: "Parse large datasets. Detect anomalies like sudden heat-wave spikes. Apply rolling averages OR basic regressions.",
    output: "A 10-year warming prediction."
  },
  {
    id: 4,
    title: "Smart Irrigation Simulation Model",
    intro: "A moisture-aware irrigation optimizer, aligning with smart agriculture.",
    req: "Inputs: soil moisture, humidity %, rainfall forecast, crop type.",
    output: "Water required per cycle, Alerts for overwatering, A day-by-day irrigation plan."
  },
  {
    id: 5,
    title: "Air Quality Index (AQI) Predictor",
    intro: "A basic regression Machine Learning (ML) model useful for health and pollution monitoring.",
    req: "Restrictions: Only sklearn basics. Small datasets. Summary of contributing factors.",
    output: "AQI prediction for the next day."
  },
  // ... You can add the rest of the 10 challenges here following this format
];