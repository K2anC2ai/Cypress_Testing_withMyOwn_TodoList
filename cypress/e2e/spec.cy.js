describe('To-Do List Testing', () => {
  beforeEach(() => {
      cy.visit('index.html');
  });

  it('should add a new task', () => {
      cy.get('#task-input').type('New Task');
      cy.get('#add-task-btn').click();
      cy.get('#task-list').should('contain', 'New Task');
  });

  it('should show an alert when task input is empty', () => {
      cy.get('#add-task-btn').click();
      cy.on('window:alert', (str) => {
          expect(str).to.equal('Please enter a task.');
      });
  });
});
