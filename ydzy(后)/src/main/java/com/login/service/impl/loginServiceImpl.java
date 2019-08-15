package com.login.service.impl;

import com.login.service.loginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class loginServiceImpl implements loginService {
    @Autowired
    private JdbcTemplate jdbcTemplate;


    @Override
    public Boolean login(String username, String password) {
        List list = jdbcTemplate.queryForList("select username,password from user where username=? and password=?",username,password);
        if (list.size()>0){
            return true;
        }else {
            return false;
        }
    }
}
