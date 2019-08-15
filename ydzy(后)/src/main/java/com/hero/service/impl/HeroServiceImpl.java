package com.hero.service.impl;

import com.hero.entity.HeroEntity;
import com.hero.service.HeroService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;



@Service
public class HeroServiceImpl implements HeroService {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public void save(HeroEntity heroEntity) {


    }
}
