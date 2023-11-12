package com.annasweet.test.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.annasweet.test.model.Menu;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Long> {

}
