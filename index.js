var sumorea_app = sumorea_app || {};
window.onload = function () {
    document.getElementById("locationSelect")
        .addEventListener("click", () => {
            if (sumorea_app && sumorea_app.onLocationSelect) {
                document.getElementById("msg").innerHTML = `Successfully called bridge method: Button clicked at ${new Date()}`;
                sumorea_app.onLocationSelect();
            }
            else {
                document.getElementById("msg").innerHTML = `Failed to call bridge method: Button clicked at ${new Date()}`;
            }
        })
}