package com.exemplo.demo.model;

import java.util.Random;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Url {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	private Integer id;
	
	private String urlBase;
	
	private String urlCurta;
	
	

	public String getUrlBase() {
		return urlBase;
	}

	public void setUrlBase(String urlBase) {
		this.urlBase = urlBase;
	}

	public String getUrlCurta() {
		return urlCurta;
	}

	public void setUrlCurta(String urlCurta) {
		this.urlCurta = urlCurta;
	}

	

	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	public void gera() {
		Random rand = new Random();
		char[] letras = "qwertyuiopasdfghjklçzxcvbnmMNBVCXZÇLKJHGFDSAPOIUYTREWQ".toCharArray();
		StringBuffer sb = new StringBuffer();
		for(int i= 0; i <= 5; i++) {
			int num_alea = rand.nextInt(letras.length);
			sb.append(letras[num_alea]);
		}
		
		this.urlCurta = "https://www.url-curta.com/"+sb.toString();
		
		
		}
	
	
	

}
