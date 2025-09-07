const { createCanvas } = require("canvas");
const fs = require("fs");

// Safely convert value to string
function safeText(value) {
    if (value === undefined || value === null) return "-"; // blank cell
    return String(value); // safe string
}


function tableToImage(data, filename) {
    const headers = Object.keys(data[0]);
    const colWidth = 180;      // width for each column
    const rowHeight = 40;      // height for each row
    const width = headers.length * colWidth;
    const height = (data.length + 1) * rowHeight;

    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext("2d");

    // Background white
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.font = "16px monospace";
    ctx.fillStyle = "black";
    ctx.textBaseline = "middle";

    // Draw header row
    headers.forEach((h, i) => {
        ctx.strokeRect(i * colWidth, 0, colWidth, rowHeight);
        ctx.fillText(h, i * colWidth + 10, rowHeight / 2);
    });

    // Draw data rows
    data.forEach((row, r) => {
        headers.forEach((h, i) => {
            const x = i * colWidth;
            const y = (r + 1) * rowHeight;
            ctx.strokeRect(x, y, colWidth, rowHeight);
            ctx.fillText(safeText(row[h]), x + 10, y + rowHeight / 2);
        });
    });

    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(`images/${filename}.png`, buffer);
    console.log(`✅ Timetable image saved as ${filename}.png`);
}

try {
    try {
        const files = fs.readdirSync("./routines");
        files.forEach(file => {
            let data = fs.readFileSync(`routines/${file}`, 'utf8');
            data = JSON.parse(data)
            tableToImage(data, file.split(".")[0])
        });
    } catch (err) {
        console.error('Error reading directory:', err);
    }
} catch (err) {
    console.error('Error reading file synchronously:', err);
}

