package com.login.controller;

import com.login.service.impl.loginServiceImpl;
import org.jeecgframework.p3.core.common.utils.AjaxJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("/loginController")
public class loginController {
    @Autowired
    loginServiceImpl loginService;

    //登录验证
    @ResponseBody
    @RequestMapping("loginon")
    public String loginOn(HttpServletRequest request, HttpServletResponse response){
        String msg = "登录成功";
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        try {
            if (loginService.login(username,password)){
                msg = "成功";
            }else {
                msg = "账号或密码错误";
            }
        }catch (Exception e){
            msg = "未知错误";
        }

        return msg;
    }

    @RequestMapping("jump")
    public String jump(HttpServletResponse response){
        return "home/home";
    }
}
