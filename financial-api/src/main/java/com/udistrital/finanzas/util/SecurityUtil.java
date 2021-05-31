package com.udistrital.finanzas.util;

import com.udistrital.finanzas.constants.Constants;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

public class SecurityUtil {

    public static String getToken(String username) {
        String secretKey = Constants.MY_SECRET_KEY;
        List<GrantedAuthority> grantedAuthorities = AuthorityUtils
                .commaSeparatedStringToAuthorityList(Constants.ROLE_USER);
        String token = Jwts
                .builder()
                .setId(Constants.SOFTTEK_JWT)
                .setSubject(username)
                .claim(Constants.AUTHORITIES,
                        grantedAuthorities.stream()
                                .map(GrantedAuthority::getAuthority)
                                .collect(Collectors.toList()))
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 600000))
                .signWith(SignatureAlgorithm.HS512,
                        secretKey.getBytes()).compact();

        return Constants.BEARER_ + token;
    }
}
