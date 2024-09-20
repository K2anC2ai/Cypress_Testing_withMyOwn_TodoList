// หาธาตุ (element) ของปุ่มที่มี id เป็น "add-task-btn" แล้วเพิ่ม event listener ให้รอการคลิก
document.getElementById("add-task-btn").addEventListener("click", function() {

    // หาธาตุ (element) ของ input ที่มี id เป็น "task-input" ซึ่งใช้สำหรับใส่ชื่อ task
    const taskInput = document.getElementById("task-input");

    // หาธาตุ (element) ของรายการที่มี id เป็น "task-list" ซึ่งเป็นที่ที่จะแสดง tasks ทั้งหมดในรูปแบบของรายการ
    const taskList = document.getElementById("task-list");

    // เช็คว่ามีการป้อนค่าใน input หรือไม่
    if (taskInput.value) {

        // สร้างรายการใหม่ (li) เพื่อแสดง task ใหม่
        const newTask = document.createElement("li");

        // ตั้งค่าเนื้อหาของรายการใหม่ให้เป็นค่าที่ป้อนใน input
        newTask.textContent = taskInput.value;

        // เพิ่มรายการที่สร้างใหม่เข้าไปใน list (ul) ของ tasks
        taskList.appendChild(newTask);

        // ล้างค่าใน input หลังจากเพิ่ม task สำเร็จแล้ว
        taskInput.value = "";
    } else {
        // ถ้า input ไม่มีค่า ให้แสดงการแจ้งเตือน
        alert("Please enter a task.");
    }
});
