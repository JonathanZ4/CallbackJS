document.getElementById("note").style.visibility = "hidden";

const note = function () {
  console.log("This note will popup after 5 seconds");
  document.getElementById("note").style.visibility = "visible";
};

setTimeout(note, 5000);
