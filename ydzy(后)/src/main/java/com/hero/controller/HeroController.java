package com.hero.controller;

import com.hero.entity.HeroEntity;
import com.hero.service.impl.HeroServiceImpl;
import org.jeecgframework.p3.core.common.utils.AjaxJson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Date;
import java.util.UUID;

@Controller
@RequestMapping("/heroController")
public class HeroController {
    @Autowired
    HeroServiceImpl heroService;


    /**
     * 添加英雄信息
     * @param heroEntity
     * @return
     */
    @ResponseBody
    @RequestMapping("addHero")
    public String addHero(HeroEntity heroEntity){
        String msg = "添加成功";
        try {
            heroService.save(heroEntity);
        }catch (Exception e){
            e.printStackTrace();
            msg = "添加失败";
        }

        return msg;
    }


    /**
     * 图片上传
     * @param file
     * @param request
     * @return
     */
    @ResponseBody
    @RequestMapping("upload")
    public String upload(MultipartFile file,HttpServletRequest request,String path){
        String realRath = request.getSession().getServletContext().getRealPath("/");
        String name = file.getOriginalFilename();
        name = name.substring(name.lastIndexOf("."));
        String rPath = "upload/"+path+"/"+ System.currentTimeMillis() + name;
        File file1 = new File(realRath+rPath);
        if(!(file1.exists()&& file1.isDirectory())) {
            file1.mkdirs();
        }
        try {
            file.transferTo(new File(realRath+rPath));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return rPath;
    }

    /**
     * 取消新增删除上传的图片
     * @param request
     */
    @ResponseBody
    @RequestMapping("deletImg")
    public void deletImg(HttpServletRequest request){
        String realRath = request.getSession().getServletContext().getRealPath("/");
        String heroUrl = request.getParameter("heroUrl");
        String skillUrl = request.getParameter("skillUrl");

        try {
            Files.delete(Paths.get(realRath + heroUrl));
            Files.delete(Paths.get(realRath + skillUrl));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
