package com.GustaAndrad.toDoListApp.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.GustaAndrad.toDoListApp.model.Todolist;

public interface RepositoryJPA extends JpaRepository<Todolist, Long>{

}
