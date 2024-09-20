// เริ่มต้นการทดสอบกลุ่ม To-Do List Testing
describe('To-Do List Testing', () => {
  // ก่อนการทดสอบแต่ละกรณี ให้โหลดหน้า index.html
  beforeEach(() => {
      cy.visit('index.html');
  });

  // ทดสอบการเพิ่มงานใหม่
  it('should add a new task', () => {
      // พิมพ์ข้อความ "New Task" ลงในช่องกรอกงาน
      cy.get('#task-input').type('New Task');
      // คลิกปุ่ม "Add Task"
      cy.get('#add-task-btn').click();
      // ตรวจสอบว่ารายการงานจะแสดงผลรวมถึง "New Task"
      cy.get('#task-list').should('contain', 'New Task');
  });

  // ทดสอบการแสดง alert เมื่อช่องกรอกงานว่าง
  it('should show an alert when task input is empty', () => {
      // คลิกปุ่ม "Add Task" โดยไม่กรอกข้อความ
      cy.get('#add-task-btn').click();
      // ตรวจสอบว่า alert ที่แสดงออกมาตรงตามที่คาดไว้
      cy.on('window:alert', (str) => {
          expect(str).to.equal('Please enter a task.');
      });
  });

  // ทดสอบการทำเครื่องหมายว่างานเสร็จแล้ว
  it('should mark task as completed', () => {
      // พิมพ์ข้อความ "New Task" ลงในช่องกรอกงาน
      cy.get('#task-input').type('New Task');
      // คลิกปุ่ม "Add Task"
      cy.get('#add-task-btn').click();
      // ทำเครื่องหมายว่าเสร็จแล้วโดยการเช็ค checkbox
      cy.get('#task-list input[type="checkbox"]').check();
      // ตรวจสอบว่ารายการงานนั้นมี class 'completed'
      cy.get('#task-list li').should('have.class', 'completed');
  });

  // ทดสอบการลบงาน
  it('should remove a task', () => {
      // พิมพ์ข้อความ "Task to Remove" ลงในช่องกรอกงาน
      cy.get('#task-input').type('Task to Remove');
      // คลิกปุ่ม "Add Task"
      cy.get('#add-task-btn').click();
      // ตรวจสอบว่ารายการงานจะแสดงผลรวมถึง "Task to Remove"
      cy.get('#task-list').should('contain', 'Task to Remove');
      // คลิกปุ่ม "Remove" ของงานนั้น
      cy.get('#task-list button.remove-btn').click();
      // ตรวจสอบว่า "Task to Remove" ไม่แสดงในรายการอีกต่อไป
      cy.get('#task-list').should('not.contain', 'Task to Remove');
  });

  // ทดสอบการเพิ่มหลายงาน
  it('should add multiple tasks', () => {
      // สร้างอาร์เรย์ของงานที่ต้องการเพิ่ม
      const tasks = ['Task 1', 'Task 2', 'Task 3'];
      // ทำการเพิ่มงานแต่ละงานในอาร์เรย์
      tasks.forEach(task => {
          cy.get('#task-input').type(task);
          cy.get('#add-task-btn').click();
      });
      // ตรวจสอบว่าทุกงานในอาร์เรย์แสดงอยู่ในรายการงาน
      tasks.forEach(task => {
          cy.get('#task-list').should('contain', task);
      });
  });
});
