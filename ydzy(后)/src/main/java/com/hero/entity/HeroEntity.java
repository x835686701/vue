package com.hero.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Table(name="hero")
public class HeroEntity implements Serializable {
    /**主键*/
    @Id
    @Column(name = "id")
    private String id;
    /*英雄名字*/
    @Column(name = "name")
    private String name;
    /*英雄图标*/
    @Column(name = "heroimg")
    private String heroimg;
    /*职业*/
    @Column(name = "occupation")
    private String occupation;
    /*种族*/
    @Column(name = "race")
    private String race;
    /*价格*/
    @Column(name = "prive")
    private String price;
    /*技能*/
    @Column(name = "skill")
    private String skill;
    /*技能图片*/
    @Column(name = "skillimg")
    private String skillimg;
    /*技能描述*/
    @Column(name = "skilldescribe")
    private String skilldescribe;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHeroimg() {
        return heroimg;
    }

    public void setHeroimg(String heroimg) {
        this.heroimg = heroimg;
    }

    public String getOccupation() {
        return occupation;
    }

    public void setOccupation(String occupation) {
        this.occupation = occupation;
    }

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public String getSkillimg() {
        return skillimg;
    }

    public void setSkillimg(String skillimg) {
        this.skillimg = skillimg;
    }

    public String getSkilldescribe() {
        return skilldescribe;
    }

    public void setSkilldescribe(String skilldescribe) {
        this.skilldescribe = skilldescribe;
    }
}
