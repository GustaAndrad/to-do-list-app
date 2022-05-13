package com.GustaAndrad.toDoListApp.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.GustaAndrad.toDoListApp.model.Todolist;
import com.GustaAndrad.toDoListApp.repository.RepositoryJPA;

@RestController
@RequestMapping("/api/todolist")
@CrossOrigin("http://localhost:4200")
public class ToDoListController {

	@Autowired
	private RepositoryJPA repository;
	
	@PostMapping
	public Todolist save(@RequestBody Todolist todolist) {
		return repository.save(todolist);
	}
	
	@GetMapping("{id}")
	public Todolist getById(@PathVariable Long id) {
		return repository.findById(id)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
		
	}
}
