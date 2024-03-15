package com.vivek.dailyKind.user;


import com.vivek.dailyKind.dao.UserDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    UserDAO userdao;



    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userdao.findAll();
    }

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable Integer id){
        return userdao.findById(id);
    }


}
