package com.example.SpringReact.service;

import com.example.SpringReact.dto.Userdto;
import com.example.SpringReact.exception.UserNotFoundException;
import com.example.SpringReact.model.User;
import com.example.SpringReact.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public Userdto addUser(Userdto userdto) {
        User newUser= dtoToEntity(userdto);
        repo.save(newUser);
        return entityToDto(newUser);
    }

    public List<Userdto> getUsers(){
        List<User> allUsers= repo.findAll();

        return allUsers.stream()
                .map(this::entityToDto)
                .collect(Collectors.toList());
    }

    public Userdto getUser(long id){
        Optional<User> user= repo.findById(id);
        if(user.isPresent()){
            User u=user.get();
            return entityToDto(u);
        }
        else{
            throw new UserNotFoundException("User not found with the ID: "+id);
        }
    }

    public Userdto updateUser(Userdto newUser, long id) {
        User userToUpdate=repo.findById(id)
                .orElseThrow(()->new UserNotFoundException("User with id: "+id+"  not found for Updation!!"));
        userToUpdate.setUsername(newUser.getUsername());
        userToUpdate.setName(newUser.getName());
        userToUpdate.setEmail(newUser.getEmail());
        return entityToDto(repo.save(userToUpdate));
    }

    public String deleteUser(long id) {

        User userToDelete=repo.findById(id)
                .orElseThrow(()-> new UserNotFoundException("User with id: "+id+" not found for Deletion!!"));
        repo.deleteById(id);
        return "User with id: "+id+" deleted successfully!!";
    }

    private User dtoToEntity(Userdto userdto) {
        User u=new User();
        u.setUsername(userdto.getUsername());
        u.setName(userdto.getName());
        u.setEmail(userdto.getEmail());

        return u;
    }

    private Userdto entityToDto(User user) {
        Userdto userdto = new Userdto();
        userdto.setId(user.getId());
        userdto.setUsername(user.getUsername());
        userdto.setName(user.getName());
        userdto.setEmail(user.getEmail());

        return userdto;
    }
}