package com.annasweet.test.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.annasweet.test.model.Menu;
import com.annasweet.test.repository.MenuRepository;

@Service
public class MenuService {
    @Autowired
    private MenuRepository menuRepository;
    
    public List<Menu> getMenu() {
        return menuRepository.findAll();
    }
}
