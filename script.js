// เพิ่มการฟังเหตุการณ์เมื่อคลิกปุ่ม "Add Task"
document.getElementById("add-task-btn").addEventListener("click", function() {
    // ดึงค่า input จากช่องกรอกงาน
    const taskInput = document.getElementById("task-input");
    // ดึงรายการงานที่จะแสดงผล
    const taskList = document.getElementById("task-list");

    // ตรวจสอบว่าช่องกรอกงานไม่ว่าง
    if (taskInput.value) {
        // สร้าง element ใหม่สำหรับแสดงงาน
        const newTask = document.createElement("li");
        // กำหนดข้อความที่จะแสดงในรายการงาน
        newTask.textContent = taskInput.value;

        // สร้าง checkbox สำหรับการทำเครื่องหมายว่างานเสร็จแล้ว
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        // เพิ่มการฟังเหตุการณ์เมื่อ checkbox เปลี่ยนสถานะ
        checkbox.addEventListener("change", function() {
            // เปลี่ยน class ของรายการงานเป็น 'completed' ถ้า checkbox ถูกทำเครื่องหมาย
            newTask.classList.toggle("completed");
        });

        // สร้างปุ่มสำหรับการลบงาน
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove"; // กำหนดข้อความของปุ่ม
        removeButton.classList.add("remove-btn"); // เพิ่ม class ให้กับปุ่ม
        // เพิ่มการฟังเหตุการณ์เมื่อปุ่มถูกคลิก
        removeButton.addEventListener("click", function() {
            // ลบรายการงานออกจากรายการ
            taskList.removeChild(newTask);
        });

        // เพิ่ม checkbox และปุ่มลบไปยัง element รายการงาน
        newTask.appendChild(checkbox);
        newTask.appendChild(removeButton);
        // เพิ่มรายการงานใหม่ลงในรายการงานที่แสดงผล
        taskList.appendChild(newTask);
        // เคลียร์ค่าในช่องกรอกงานหลังจากเพิ่มงาน
        taskInput.value = "";
    } else {
        // แสดง alert ถ้าช่องกรอกงานว่าง
        alert("Please enter a task.");
    }
});
