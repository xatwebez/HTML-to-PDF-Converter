// popup.js

// Load jsPDF library dynamically
var script = document.createElement('script');
script.src = 'lib/jspdf.min.js'; // Replace 'lib/jspdf.min.js' with the actual path to the jsPDF library file
document.head.appendChild(script);

// Wait for the script to load
script.onload = function() {
    // Now jsPDF is loaded, you can use it here
    generatePDF();
};

function generatePDF() {
    var doc = new jsPDF();
    doc.text(20, 20, 'Hello, world!');
    doc.save('test.pdf');
}
