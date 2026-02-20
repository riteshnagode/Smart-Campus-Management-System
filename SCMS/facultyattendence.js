
document.addEventListener("DOMContentLoaded", function () {

    console.log("JS Loaded Successfully");

    // ===============================
    // Present / Absent Mutual Logic
    // ===============================

    var rows = document.querySelectorAll("tr");

    rows.forEach(function (row) {

        var present = row.querySelector(".present");
        var absent = row.querySelector(".absent");

        if (present && absent) {

            present.addEventListener("change", function () {
                if (present.checked) {
                    absent.checked = false;
                }
            });

            absent.addEventListener("change", function () {
                if (absent.checked) {
                    present.checked = false;
                }
            });

        }
    });

    // ===============================
    // Mark All Present
    // ===============================

    var markAllPresentBtn = document.getElementById("markAllPresentBtn");

    if (markAllPresentBtn) {
        markAllPresentBtn.addEventListener("click", function () {

            document.querySelectorAll(".present").forEach(function (box) {
                box.checked = true;
            });

            document.querySelectorAll(".absent").forEach(function (box) {
                box.checked = false;
            });

        });
    }

    // ===============================
    // Mark All Absent
    // ===============================

    var markAllAbsentBtn = document.getElementById("markAllAbsentBtn");

    if (markAllAbsentBtn) {
        markAllAbsentBtn.addEventListener("click", function () {

            document.querySelectorAll(".present").forEach(function (box) {
                box.checked = false;
            });

            document.querySelectorAll(".absent").forEach(function (box) {
                box.checked = true;
            });

        });
    }

    // ===============================
    // Clear Attendance
    // ===============================

    var clearBtn = document.getElementById("clearAttendanceBtn");

    if (clearBtn) {
        clearBtn.addEventListener("click", function () {

            document.querySelectorAll(".present").forEach(function (box) {
                box.checked = false;
            });

            document.querySelectorAll(".absent").forEach(function (box) {
                box.checked = false;
            });

        });
    }

    // ===============================
    // Save Attendance Popup
    // ===============================

    var saveBtn = document.getElementById("saveBtn");
    var popup = document.getElementById("successPopup");

    if (saveBtn && popup) {
        saveBtn.addEventListener("click", function () {

            popup.style.display = "block";

            setTimeout(function () {
                popup.style.display = "none";
            }, 2000);

        });
    }

});
// ===============================
// Notes Sent Popup
// ===============================

var sendNotesBtn = document.getElementById("sendNotesBtn");
var notesPopup = document.getElementById("notesPopup");

if (sendNotesBtn && notesPopup) {
    sendNotesBtn.addEventListener("click", function () {

        notesPopup.style.display = "block";

        setTimeout(function () {
            notesPopup.style.display = "none";
        }, 2000);

    });
}

