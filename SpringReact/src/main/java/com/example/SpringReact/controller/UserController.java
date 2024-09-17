package com.example.SpringReact.controller;

import com.example.SpringReact.dto.Userdto;
import com.example.SpringReact.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/userapi/v1")
@CrossOrigin("http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping()
    public ResponseEntity<Userdto> addUser(@RequestBody Userdto userdto){
        return new ResponseEntity<>(userService.addUser(userdto), HttpStatus.CREATED);
    }

    @GetMapping("/users")
    public ResponseEntity<List<Userdto>> getUsers(){
        return new ResponseEntity<>(userService.getUsers(), HttpStatus.OK);
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<Userdto> getUser(@PathVariable("id") long id){
        return new ResponseEntity<>(userService.getUser(id), HttpStatus.OK);
    }

    @PutMapping("/updateuser/{id}")
    public ResponseEntity<Userdto> updateUser(@RequestBody Userdto newUser, @PathVariable("id") long id){
        return new ResponseEntity<Userdto>(userService.updateUser(newUser, id), HttpStatus.OK);
    }

    @DeleteMapping("/deleteuser/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") long id){
        return new ResponseEntity<>(userService.deleteUser(id), HttpStatus.OK);
    }
}