document.getElementById("generateResume").addEventListener("click", function() {
    // Get the values from the form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;
  
    // Basic validation: check if all fields are filled out
    if (!name || !email || !phone || !skills || !experience) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Create the resume preview
    const resumePreview = `
      <h3>${name}</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Skills:</strong> ${skills}</p>
      <p><strong>Experience:</strong> ${experience}</p>
    `;
  
    // Display the preview
    document.getElementById("resumePreview").innerHTML = resumePreview;
    document.getElementById("downloadBtn").style.display = "inline-block";
  
    // Enable the download button
    document.getElementById("downloadBtn").addEventListener("click", function() {
      const resumeContent = `
        <h1>${name}</h1>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Experience:</strong> ${experience}</p>
      `;
  
      // Create a Blob to save the resume as a .html file
      const blob = new Blob([resumeContent], { type: "text/html" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${name}-resume.html`;
      link.click();
    });
  });
  