export const teams = [
  { 
    id: 1, 
    name: "Eco Warriors", 
    members: ["Ali Khan", "Sara Ahmed", "Bilal Zia"], 
    project: "Solar Tracker",
    username: "team_eco",   // <--- Login ID
    password: "eco_password", // <--- Login Password
    role: "team"
  },
  { 
    id: 2, 
    name: "Green Gen", 
    members: ["Ayesha Malik", "Zainab Bibi"], 
    project: "Waste AI",
    username: "team_green",
    password: "green_password",
    role: "team"
  },
  { 
    id: 3, 
    name: "Carbon Enforcers", 
    members: ["Usman Tariq", "Hassan Raza", "Fahad Mustafa"], 
    project: "Carbon Calc",
    username: "team_carbon",
    password: "carbon_password",
    role: "team"
  },
  { 
    id: 4, 
    name: "Sustainable Techies", 
    members: ["Zara Sheikh", "Omar Farooq"], 
    project: "Smart Grid",
    username: "team_sus",
    password: "sus_password",
    role: "team"
  },
  { 
    id: 5, 
    name: "Aqua Squad", 
    members: ["M. Abdullah", "Hamza Ali", "Saad West"], 
    project: "Water Purify",
    username: "team_aqua",
    password: "aqua_password",
    role: "team"
  },
  { 
    id: 6, 
    name: "Renewable Roots", 
    members: ["Fatima Noor", "Sana Mir"], 
    project: "Bio Energy",
    username: "team_root",
    password: "root_password",
    role: "team"
  },
  { 
    id: 7, 
    name: "Solar Sprinters", 
    members: ["Ahmed Junaid", "Taha Khan"], 
    project: "EV Charging",
    username: "team_solar",
    password: "solar_password",
    role: "team"
  },
  { 
    id: 8, 
    name: "Wind Walkers", 
    members: ["Hira Mani", "Kashaf Dua"], 
    project: "Turbine Tech",
    username: "team_wind",
    password: "wind_password",
    role: "team"
  },
  // --- ADMIN ACCOUNT (Hidden from public list) ---
  {
    id: 999,
    name: "Event Admin",
    members: ["Super User"],
    project: "System Control",
    username: "admin",
    password: "admin_secure_123",
    role: "admin"
  }
];