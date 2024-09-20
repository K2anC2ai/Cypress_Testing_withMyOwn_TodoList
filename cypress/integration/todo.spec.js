// เริ่มการทดสอบชุดหนึ่งชื่อว่า 'To-Do List Testing'
describe('To-Do List Testing', () => {

    // ก่อนการทดสอบทุกครั้ง (ในทุก 'it' block) ให้ทำการเยี่ยมชมหน้า 'index.html'
    beforeEach(() => {
        cy.visit('index.html');
    });

    // ทดสอบว่าระบบสามารถเพิ่ม task ใหม่ได้สำเร็จหรือไม่
    it('should add a new task', () => {
        // ใช้ Cypress เพื่อหาธาตุที่มี id เป็น 'task-input' และพิมพ์ข้อความ 'New Task' ลงไป
        cy.get('#task-input').type('New Task');

        // หาธาตุที่มี id เป็น 'add-task-btn' และคลิกเพื่อเพิ่ม task
        cy.get('#add-task-btn').click();

        // ตรวจสอบว่า 'task-list' มีรายการที่มีข้อความ 'New Task' อยู่หรือไม่
        cy.get('#task-list').should('contain', 'New Task');
    });

    // ทดสอบว่าถ้า input ว่างเปล่า จะแสดงการแจ้งเตือน (alert) หรือไม่
    it('should show an alert when task input is empty', () => {
        // คลิกปุ่ม 'add-task-btn' โดยที่ input ว่างเปล่า
        cy.get('#add-task-btn').click();

        // ตรวจสอบว่ามี alert ถูกแสดงขึ้นมาพร้อมข้อความ 'Please enter a task.'
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please enter a task.');
        });
    });
});
