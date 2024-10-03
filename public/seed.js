const seedsData = [
    {
        year: "2024",
        state: "Maharashtra",
        cropGroup: "Cereal",
        specificGroup: "Rice",
        varieties: ["Basmati", "Sona Masuri", "IR64"]
    },
    {
        year: "2024",
        state: "Punjab",
        cropGroup: "Pulses",
        specificGroup: "Chickpeas",
        varieties: ["Kabuli", "Desi"]
    },
    {
        year: "2024",
        state: "Karnataka",
        cropGroup: "Oilseeds",
        specificGroup: "Groundnut",
        varieties: ["Java", "Bold"]
    },
    {
        year: "2024",
        state: "Tamil Nadu",
        cropGroup: "Fruits",
        specificGroup: "Mango",
        varieties: ["Alphonso", "Dasheri"]
    },
    // Add more seed data as needed
];

document.getElementById('seedForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const year = document.getElementById('year').value;
    const state = document.getElementById('state').value;
    const cropGroup = document.getElementById('cropGroup').value;
    const specificGroup = document.getElementById('specificGroup').value;

    const result = seedsData.find(seed => 
        seed.year === year && 
        seed.state === state && 
        seed.cropGroup === cropGroup && 
        seed.specificGroup.toLowerCase() === specificGroup.toLowerCase()
    );

    const resultDiv = document.getElementById('result');
    if (result) {
        resultDiv.innerHTML = `<h2>Varieties:</h2><p>${result.varieties.join('')}</p>`;
    } else {
        resultDiv.innerHTML = `<h2>No results found.</h2>`;
    }
});
