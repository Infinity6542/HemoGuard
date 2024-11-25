const data = [
    {
        "mass": 18.015,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 1,
        "category": "Essential for Life"
    },
    {
        "mass": 180.156,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Essential Nutrient"
    },
    {
        "mass": 32.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 1,
        "category": "Essential for Life"
    },
    {
        "mass": 18.039,
        "charge": 1,
        "mz": 18.039,
        "dangerLevel": 6,
        "category": "Toxic"
    },
    {
        "mass": 22.99,
        "charge": 1,
        "mz": 22.99,
        "dangerLevel": 3,
        "category": "Electrolyte"
    },
    {
        "mass": 44.05,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Volatile Compound"
    },
    {
        "mass": 58.08,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Solvent"
    },
    {
        "mass": 17.031,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Toxic"
    },
    {
        "mass": 36.46,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Corrosive"
    },
    {
        "mass": 28.01,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 8,
        "category": "Asphyxiant"
    },
    {
        "mass": 46.025,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Corrosive"
    },
    {
        "mass": 16.043,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Flammable"
    },
    {
        "mass": 98.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Toxic"
    },
    {
        "mass": 12.01,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Essential Element"
    },
    {
        "mass": 132.91,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Heavy Metal"
    },
    {
        "mass": 64.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Toxic"
    },
    {
        "mass": 180.16,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Toxic"
    },
    {
        "mass": 74.92,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Trace Element"
    },
    {
        "mass": 61.8,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Flammable"
    },
    {
        "mass": 58.93,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Heavy Metal"
    },
    {
        "mass": 32.04,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Electrolyte"
    },
    {
        "mass": 46.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Corrosive"
    },
    {
        "mass": 40.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Alkaline Earth"
    },
    {
        "mass": 35.45,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Halogen"
    },
    {
        "mass": 74.92,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Trace Element"
    },
    {
        "mass": 37.26,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Flammable"
    },
    {
        "mass": 33.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Halogen"
    },
    {
        "mass": 39.95,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 1,
        "category": "Noble Gas"
    },
    {
        "mass": 72.92,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Heavy Metal"
    },
    {
        "mass": 29.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Non-metal"
    },
    {
        "mass": 15.999,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 1,
        "category": "Essential for Life"
    },
    {
        "mass": 14.01,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Essential Element"
    },
    {
        "mass": 20.18,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Noble Gas"
    },
    {
        "mass": 19.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Halogen"
    },
    {
        "mass": 23.0,
        "charge": 1,
        "mz": 23.0,
        "dangerLevel": 3,
        "category": "Electrolyte"
    },
    {
        "mass": 72.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Alkaline Earth"
    },
    {
        "mass": 57.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Heavy Metal"
    },
    {
        "mass": 131.29,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Metal"
    },
    {
        "mass": 85.47,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Heavy Metal"
    },
    {
        "mass": 84.91,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Corrosive"
    },
    {
        "mass": 109.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Metal"
    },
    {
        "mass": 84.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Halogen"
    },
    {
        "mass": 14.007,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Essential Element"
    },
    {
        "mass": 16.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 1,
        "category": "Essential for Life"
    },
    {
        "mass": 98.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 8,
        "category": "Toxic"
    },
    {
        "mass": 43.56,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Non-metal"
    },
    {
        "mass": 64.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Solvent"
    },
    {
        "mass": 55.85,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Metal"
    },
    {
        "mass": 65.38,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Electrolyte"
    },
    {
        "mass": 37.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Halogen"
    },
    {
        "mass": 39.29,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Heavy Metal"
    },
    {
        "mass": 49.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Alkaline Earth"
    },
    {
        "mass": 15.999,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 1,
        "category": "Essential for Life"
    },
    {
        "mass": 16.044,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Toxic"
    },
    {
        "mass": 28.02,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 1,
        "category": "Essential for Life"
    },
    {
        "mass": 48.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Corrosive"
    },
    {
        "mass": 44.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Corrosive"
    },
    {
        "mass": 28.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Toxic"
    },
    {
        "mass": 24.305,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Electrolyte"
    },
    {
        "mass": 56.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Metal"
    },
    {
        "mass": 63.55,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Metal"
    },
    {
        "mass": 17.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Essential Element"
    },
    {
        "mass": 35.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Halogen"
    },
    {
        "mass": 40.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 1,
        "category": "Inert"
    },
    {
        "mass": 66.94,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Toxic"
    },
    {
        "mass": 77.94,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Heavy Metal"
    },
    {
        "mass": 101.07,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Metal"
    },
    {
        "mass": 47.87,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Electrolyte"
    },
    {
        "mass": 39.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Alkaline Earth"
    },
    {
        "mass": 33.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Toxic"
    },
    {
        "mass": 75.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Toxic"
    },
    {
        "mass": 89.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Metal"
    },
    {
        "mass": 105.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Heavy Metal"
    },
    {
        "mass": 120.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Heavy Metal"
    },
    {
        "mass": 42.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Electrolyte"
    },
    {
        "mass": 56.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Essential for Life"
    },
    {
        "mass": 88.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Heavy Metal"
    },
    {
        "mass": 22.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Metal"
    },
    {
        "mass": 62.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Solvent"
    },
    {
        "mass": 72.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Heavy Metal"
    },
    {
        "mass": 53.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Heavy Metal"
    },
    {
        "mass": 35.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Toxic"
    },
    {
        "mass": 91.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Heavy Metal"
    },
    {
        "mass": 82.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Heavy Metal"
    },
    {
        "mass": 45.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Heavy Metal"
    },
    {
        "mass": 53.1,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Non-metal"
    },
    {
        "mass": 72.92,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Metal"
    },
    {
        "mass": 42.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Electrolyte"
    },
    {
        "mass": 64.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Corrosive"
    },
    {
        "mass": 82.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Toxic"
    },
    {
        "mass": 56.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Heavy Metal"
    },
    {
        "mass": 24.305,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Electrolyte"
    },
    {
        "mass": 98.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Toxic"
    },
    {
        "mass": 56.6,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Toxic"
    },
    {
        "mass": 107.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Heavy Metal"
    },
    {
        "mass": 72.9,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Heavy Metal"
    },
    {
        "mass": 51.9961,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Toxic"
    },
    {
        "mass": 38.93,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Halogen"
    },
    {
        "mass": 43.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 1,
        "category": "Electrolyte"
    },
    {
        "mass": 60.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Non-metal"
    },
    {
        "mass": 72.63,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Toxic"
    },
    {
        "mass": 105.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Heavy Metal"
    },
    {
        "mass": 58.93,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Metal"
    },
    {
        "mass": 35.9,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Halogen"
    },
    {
        "mass": 56.8,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Solvent"
    },
    {
        "mass": 72.4,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Flammable"
    },
    {
        "mass": 62.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Essential Element"
    },
    {
        "mass": 105.6,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Heavy Metal"
    },
    {
        "mass": 55.1,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Non-metal"
    },
    {
        "mass": 66.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Toxic"
    },
    {
        "mass": 60.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Heavy Metal"
    },
    {
        "mass": 40.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Heavy Metal"
    },
    {
        "mass": 32.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Non-metal"
    },
    {
        "mass": 39.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Halogen"
    },
    {
        "mass": 28.2,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Heavy Metal"
    },
    {
        "mass": 41.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Essential Element"
    },
    {
        "mass": 42.5,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Heavy Metal"
    },
    {
        "mass": 55.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Metal"
    },
    {
        "mass": 33.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Electrolyte"
    },
    {
        "mass": 47.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Non-metal"
    },
    {
        "mass": 80.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Metal"
    },
    {
        "mass": 85.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Toxic"
    },
    {
        "mass": 91.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Heavy Metal"
    },
    {
        "mass": 56.1,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Toxic"
    },
    {
        "mass": 64.4,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Heavy Metal"
    },
    {
        "mass": 95.5,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Electrolyte"
    },
    {
        "mass": 55.9,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Corrosive"
    },
    {
        "mass": 43.9,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Toxic"
    },
    {
        "mass": 59.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Non-metal"
    },
    {
        "mass": 98.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Toxic"
    },
    {
        "mass": 120.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Heavy Metal"
    },
    {
        "mass": 121.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Metal"
    },
    {
        "mass": 45.6,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Solvent"
    },
    {
        "mass": 80.1,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Toxic"
    },
    {
        "mass": 35.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Heavy Metal"
    },
    {
        "mass": 49.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Non-metal"
    },
    {
        "mass": 72.8,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Electrolyte"
    },
    {
        "mass": 91.2,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Metal"
    },
    {
        "mass": 70.9,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Toxic"
    },
    {
        "mass": 65.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Heavy Metal"
    },
    {
        "mass": 59.3,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Heavy Metal"
    },
    {
        "mass": 52.9,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Toxic"
    },
    {
        "mass": 40.2,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Electrolyte"
    },
    {
        "mass": 103.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Heavy Metal"
    },
    {
        "mass": 48.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Non-metal"
    },
    {
        "mass": 42.8,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Non-metal"
    },
    {
        "mass": 110.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Metal"
    },
    {
        "mass": 55.5,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Heavy Metal"
    },
    {
        "mass": 92.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Toxic"
    },
    {
        "mass": 34.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Electrolyte"
    },
    {
        "mass": 105.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Toxic"
    },
    {
        "mass": 130.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Metal"
    },
    {
        "mass": 48.5,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Non-metal"
    },
    {
        "mass": 43.8,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Heavy Metal"
    },
    {
        "mass": 116.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Electrolyte"
    },
    {
        "mass": 57.5,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Solvent"
    },
    {
        "mass": 89.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Metal"
    },
    {
        "mass": 36.7,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Non-metal"
    },
    {
        "mass": 92.4,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Heavy Metal"
    },
    {
        "mass": 121.5,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Toxic"
    },
    {
        "mass": 63.3,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Metal"
    },
    {
        "mass": 88.9,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Corrosive"
    },
    {
        "mass": 102.4,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Electrolyte"
    },
    {
        "mass": 130.5,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Toxic"
    },
    {
        "mass": 63.8,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Solvent"
    },
    {
        "mass": 75.4,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Metal"
    },
    {
        "mass": 106.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Non-metal"
    },
    {
        "mass": 82.9,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Heavy Metal"
    },
    {
        "mass": 120.3,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Metal"
    },
    {
        "mass": 74.1,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Electrolyte"
    },
    {
        "mass": 128.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Non-metal"
    },
    {
        "mass": 130.3,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Toxic"
    },
    {
        "mass": 89.1,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Electrolyte"
    },
    {
        "mass": 92.7,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Heavy Metal"
    },
    {
        "mass": 127.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Metal"
    },
    {
        "mass": 48.2,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Electrolyte"
    },
    {
        "mass": 72.4,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Heavy Metal"
    },
    {
        "mass": 47.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Toxic"
    },
    {
        "mass": 105.8,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Electrolyte"
    },
    {
        "mass": 106.9,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Non-metal"
    },
    {
        "mass": 52.4,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Heavy Metal"
    },
    {
        "mass": 72.8,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Toxic"
    },
    {
        "mass": 99.6,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Non-metal"
    },
    {
        "mass": 105.3,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Metal"
    },
    {
        "mass": 70.8,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Electrolyte"
    },
    {
        "mass": 113.4,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Toxic"
    },
    {
        "mass": 79.3,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Electrolyte"
    },
    {
        "mass": 122.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Heavy Metal"
    },
    {
        "mass": 129.8,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Heavy Metal"
    },
    {
        "mass": 113.1,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Corrosive"
    },
    {
        "mass": 81.7,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Heavy Metal"
    },
    {
        "mass": 60.3,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Toxic"
    },
    {
        "mass": 106.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Electrolyte"
    },
    {
        "mass": 99.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Toxic"
    },
    {
        "mass": 80.2,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Electrolyte"
    },
    {
        "mass": 66.2,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Heavy Metal"
    },
    {
        "mass": 99.4,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Electrolyte"
    },
    {
        "mass": 92.5,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Non-metal"
    },
    {
        "mass": 95.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Electrolyte"
    },
    {
        "mass": 78.5,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Toxic"
    },
    {
        "mass": 65.4,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Metal"
    },
    {
        "mass": 66.4,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Electrolyte"
    },
    {
        "mass": 89.4,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Toxic"
    },
    {
        "mass": 97.3,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Non-metal"
    },
    {
        "mass": 123.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 2,
        "category": "Electrolyte"
    },
    {
        "mass": 106.8,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Toxic"
    },
    {
        "mass": 122.1,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Heavy Metal"
    },
    {
        "mass": 103.9,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Electrolyte"
    },
    {
        "mass": 75.3,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Heavy Metal"
    },
    {
        "mass": 116.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Corrosive"
    },
    {
        "mass": 118.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Toxic"
    },
    {
        "mass": 104.6,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Non-metal"
    },
    {
        "mass": 74.9,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Toxic"
    },
    {
        "mass": 127.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Heavy Metal"
    },
    {
        "mass": 110.9,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Toxic"
    },
    {
        "mass": 109.2,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Heavy Metal"
    },
    {
        "mass": 98.7,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Non-metal"
    },
    {
        "mass": 104.3,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Toxic"
    },
    {
        "mass": 111.1,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Electrolyte"
    },
    {
        "mass": 97.9,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Toxic"
    },
    {
        "mass": 95.3,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Toxic"
    },
    {
        "mass": 98.3,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Heavy Metal"
    },
    {
        "mass": 112.8,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Electrolyte"
    },
    {
        "mass": 110.2,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Non-metal"
    },
    {
        "mass": 118.5,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Toxic"
    },
    {
        "mass": 100.4,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Electrolyte"
    },
    {
        "mass": 106.4,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Corrosive"
    },
    {
        "mass": 104.8,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Toxic"
    },
    {
        "mass": 108.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Electrolyte"
    },
    {
        "mass": 107.4,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Toxic"
    },
    {
        "mass": 121.2,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Heavy Metal"
    },
    {
        "mass": 102.2,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Non-metal"
    },
    {
        "mass": 111.3,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Electrolyte"
    },
    {
        "mass": 105.1,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Toxic"
    },
    {
        "mass": 109.7,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Heavy Metal"
    },
    {
        "mass": 100.7,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Corrosive"
    },
    {
        "mass": 114.9,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Non-metal"
    },
    {
        "mass": 112.4,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Toxic"
    },
    {
        "mass": 97.5,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Corrosive"
    },
    {
        "mass": 119.7,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Heavy Metal"
    },
    {
        "mass": 108.6,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Toxic"
    },
    {
        "mass": 117.4,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Electrolyte"
    },
    {
        "mass": 125.8,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Toxic"
    },
    {
        "mass": 116.7,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Heavy Metal"
    },
    {
        "mass": 113.9,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Non-metal"
    },
    {
        "mass": 106.1,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Toxic"
    },
    {
        "mass": 105.5,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Electrolyte"
    },
    {
        "mass": 100.3,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Corrosive"
    },
    {
        "mass": 122.1,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Non-metal"
    },
    {
        "mass": 123.5,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Heavy Metal"
    },
    {
        "mass": 121.8,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Toxic"
    },
    {
        "mass": 118.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Non-metal"
    },
    {
        "mass": 119.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Corrosive"
    },
    {
        "mass": 112.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Heavy Metal"
    },
    {
        "mass": 110.5,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Toxic"
    },
    {
        "mass": 124.4,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Heavy Metal"
    },
    {
        "mass": 122.6,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Electrolyte"
    },
    {
        "mass": 127.9,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Toxic"
    },
    {
        "mass": 139.1,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Electrolyte"
    },
    {
        "mass": 132.9,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Heavy Metal"
    },
    {
        "mass": 140.2,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Electrolyte"
    },
    {
        "mass": 137.9,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Non-metal"
    },
    {
        "mass": 135.7,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Heavy Metal"
    },
    {
        "mass": 128.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Non-metal"
    },
    {
        "mass": 130.5,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Toxic"
    },
    {
        "mass": 124.3,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Corrosive"
    },
    {
        "mass": 131.2,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Non-metal"
    },
    {
        "mass": 142.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Toxic"
    },
    {
        "mass": 148.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Heavy Metal"
    },
    {
        "mass": 146.9,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Toxic"
    },
    {
        "mass": 147.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Electrolyte"
    },
    {
        "mass": 150.5,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Heavy Metal"
    },
    {
        "mass": 149.0,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 3,
        "category": "Corrosive"
    },
    {
        "mass": 155.8,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Non-metal"
    },
    {
        "mass": 157.1,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 5,
        "category": "Toxic"
    },
    {
        "mass": 158.2,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 6,
        "category": "Electrolyte"
    },
    {
        "mass": 161.5,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 7,
        "category": "Heavy Metal"
    },
    {
        "mass": 163.1,
        "charge": 0,
        "mz": 0,
        "dangerLevel": 4,
        "category": "Non-metal"
    }
];

export default data;