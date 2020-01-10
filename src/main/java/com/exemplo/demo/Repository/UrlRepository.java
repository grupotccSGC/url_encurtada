package com.exemplo.demo.Repository;

import org.springframework.data.repository.CrudRepository;

import com.exemplo.demo.model.Url;

public interface UrlRepository extends CrudRepository<Url, Integer> {

}
