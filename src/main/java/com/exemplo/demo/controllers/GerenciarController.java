package com.exemplo.demo.controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.exemplo.demo.Repository.UrlRepository;
import com.exemplo.demo.model.Url;

@RestController
public class GerenciarController {

	@Autowired
	private UrlRepository urlRepository;
	
	
	
	@PostMapping("/create")
	public Map<String, String> create(@RequestParam String url) {
		HashMap<String, String> map = new HashMap<>();
		Url n = new Url();
		n.setUrlBase(url);
		n.gera();
		urlRepository.save(n);
		map.put("sucess","true");
	    map.put("msg", "Cadastrado com Sucesso!");
	    return map;
		
	}
	
	@GetMapping("/lista_urls")
    public @ResponseBody Iterable<Url> getAllUrls(){
   	 return urlRepository.findAll();
    }
	
	@PostMapping("/update/url/")
	public Map<String, String> update_url(@RequestParam int id, String url_base, String url_curta) {
		HashMap<String, String> map = new HashMap<>();
		Url u = new Url();
		u.setId(id);
		u.setUrlBase(url_base);
		u.setUrlCurta(url_curta);
		urlRepository.save(u);
		map.put("urlBase",url_base);
		map.put("urlCurta",url_curta);
		map.put("sucess","true");
	    map.put("msg", "Atualizado com Sucesso!");
	    return map;
	}
	
	
	
	@GetMapping("/delete/url/")
	public Map<String, String> delete(@RequestParam int id) {
		urlRepository.deleteById(id);
		HashMap<String, String> map = new HashMap<>();
		map.put("sucess","true");
	    map.put("msg", "Deletado com Sucesso!");
	    return map;
		}
	
	
}
