import { Component, ElementRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Database, set, ref, push, onValue } from '@angular/fire/database';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-task-list-firebase',
  imports: [FormsModule, NgFor],
  templateUrl: './task-list-firebase.html',
  styleUrl: './task-list-firebase.css',
})
export class TaskListFirebase {
  constructor(private db: Database) {
    // La databse firebase est automatiquement reconnue grâce au typage Database
    const tasksRef = ref(this.db, 'tasks');
    const cibleRef = ref(this.db, 'cible');
    const logRef = ref(this.db, 'log');
    onValue(tasksRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      this.tasks = data ? Object.values(data) : [];
      console.log(this.tasks);
    });
    onValue(cibleRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      this.cibles = data ? Object.values(data) : [];
      console.log(this.cibles);
    });
    onValue(logRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      this.cibles = data ? Object.values(data) : [];
      console.log(this.cibles);
    });
  }
    date = new Date();
  newTask = { title: '', status: 'pending' }; // Tâche à ajouter
  tasks: { title: string; status: string }[] = []; // Liste des tâches
  newTasksRef = [];
  newCible = { name: '', img: '', age: '', status: '' }; // Tâche à ajouter
  cibles: { name: string; img: string; age: number; status: string }[] = []; // Liste des tâches
  newCibleRef = [];
   newLog = { type: '', date: 0 };  // date sera un nombre (timestamp Unix ms)
  logs: { type: string; date: number }[] = [];
  newLogRef = [];


  addTask() {
    if (this.newTask.title.trim()) {
      const tasksRef = ref(this.db, 'tasks');
      const newTaskRef = push(tasksRef);
      set(newTaskRef, this.newTask); // Enregistrer l'objet newTask
      this.newTask = { title: '', status: 'pending' }; // Réinitialiser le champ
    }
  }
  addCible() {
    if (this.newCible.name.trim()) {
      const cibleRef = ref(this.db, 'cible');
      const newCibleRef = push(cibleRef);
      set(newCibleRef, this.newCible); // Enregistrer l'objet newTask
      this.newCible = { name: '', img: '', age: this.newCible.age, status: '' }; // Réinitialiser le champ
    }
  }
  addLog(type: string) {
    this.newLog.type = type;
    this.newLog.date= Date.now();
    if (this.newLog.type.trim()) {
      const logsRef = ref(this.db, 'logs');
      const newLogRef = push(logsRef);
      set(newLogRef, this.newLog); // Enregistrer l'objet newTask
      this.newLog = { type: '', date: 0 }; // Réinitialiser le champ
    }
  }
  handleAddTaskAndLog() {
    this.addLog('task');
    this.addTask();
  }
  handleAddCibleAndLog() {
    this.addLog('cible');
    this.addCible();
  }
}
